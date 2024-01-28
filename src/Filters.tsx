import { ChangeResult } from "multi-range-slider-react";
import MenuButton from "./MenuButton";
import {
  MultiRangeChangeResult,
  SUITABILITIES,
  SuitabilitiesEnum,
} from "./interfaces";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ISuitabilityFilter } from "./useSuitabilityFilters";
import SuitabilitySlider from "./SuitabilitySlider";

interface IFiltersProps {
  toggleMenu: () => void;
  resetFilters: () => void;
  suitabilityFilters: { [key in SuitabilitiesEnum]: ISuitabilityFilter };
  handleSliderChange: (e: MultiRangeChangeResult) => void;
}

const Filters: React.FC<IFiltersProps> = ({
  toggleMenu,
  resetFilters,
  suitabilityFilters,
  handleSliderChange,
}) => {
  return (
    <div className="filters">
      <div className="filters-title">
        <MenuButton handleToggleMenu={toggleMenu} />
        <h2>Filters</h2>
        <button onClick={resetFilters}>Reset</button>
      </div>
      <div className="group">
        <h3 className="group-title">Working capabilities</h3>
        {SUITABILITIES.map((s) => (
          <label htmlFor={s} key={`minSuitabilityFilter${s}`}>
            <span>
              <LazyLoadImage
                src={`/palfinder/images/suitabilities/${s.replace(
                  " ",
                  "_"
                )}.png`}
                width="30px"
                height="30px"
                title={`min ${s}`}
              />
            </span>
            <SuitabilitySlider
              minValue={suitabilityFilters[s].min}
              maxValue={suitabilityFilters[s].max}
              name={s}
              changeHandler={(e: ChangeResult) => {
                handleSliderChange({ ...e, name: s });
              }}
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filters;
