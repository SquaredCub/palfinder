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
import { items } from "./items";
import { ChangeEvent } from "react";

interface IFiltersProps {
  toggleMenu: () => void;
  resetFilters: () => void;
  suitabilityFilters: { [key in SuitabilitiesEnum]: ISuitabilityFilter };
  handleSliderChange: (e: MultiRangeChangeResult) => void;
  handleFilterDropChange: (e: ChangeEvent) => void;
  dropFilterValue: string;
  setDropFilterValue: (x: string) => void;
}

const Filters: React.FC<IFiltersProps> = ({
  toggleMenu,
  resetFilters,
  suitabilityFilters,
  handleSliderChange,
  handleFilterDropChange,
  dropFilterValue,
  setDropFilterValue,
}) => {
  return (
    <div className="filters">
      <div className="filters-title">
        <MenuButton handleToggleMenu={toggleMenu} />
        <h2>Filters</h2>
      </div>
      <div className="group">
        <h3 className="group-title">
          <span>Working capabilities</span>
          <button onClick={resetFilters}>reset</button>
        </h3>
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
      <div className="group">
        <h3 className="group-title">
          <span>Resource drop</span>
          <button onClick={() => setDropFilterValue("-")}>reset</button>
        </h3>
        <label htmlFor="dropSelect">
          <select
            name="drops"
            id="drops"
            onChange={handleFilterDropChange}
            value={dropFilterValue}
          >
            <option value="-">-------</option>
            {items.map((i) => (
              <option value={i} key={i}>
                {i}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
};

export default Filters;
