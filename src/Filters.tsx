import MultiRangeSlider, { ChangeResult } from "multi-range-slider-react";
import MenuButton from "./MenuButton";
import {
  MultiRangeChangeResult,
  SUITABILITIES,
  SuitabilitiesEnum,
} from "./interfaces";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ISuitabilityFilter } from "./useSuitabilityFilters";

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
            <MultiRangeSlider
              min={0}
              max={4}
              step={1}
              minValue={suitabilityFilters[s].min}
              maxValue={suitabilityFilters[s].max}
              className="slider"
              id={s}
              onChange={(e: ChangeResult) => {
                handleSliderChange({ ...e, name: s });
              }}
              canMinMaxValueSame
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filters;
