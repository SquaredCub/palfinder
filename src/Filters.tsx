import {
  MultiRangeChangeResult,
  SUITABILITIES,
  SuitabilitiesEnum,
  TYPES,
  TypesEnum,
} from "./interfaces";
import {
  ISuitabilityFilter,
  isSuitabilitySoloed,
} from "./useSuitabilityFilters";
import SuitabilitySlider from "./SuitabilitySlider";
import { items } from "./items";
import { ChangeEvent } from "react";

interface IFiltersProps {
  resetFilters: () => void;
  toggleSoloFilter: (name: SuitabilitiesEnum) => void;
  suitabilityFilters: { [key in SuitabilitiesEnum]: ISuitabilityFilter };
  handleSliderChange: (e: MultiRangeChangeResult) => void;
  handleFilterDropChange: (e: ChangeEvent) => void;
  dropFilterValue: string;
  setDropFilterValue: (x: string) => void;
  selectedTypes: TypesEnum[];
  toggleType: (t: TypesEnum) => void;
  resetTypes: () => void;
}

const Filters: React.FC<IFiltersProps> = ({
  resetFilters,
  toggleSoloFilter,
  suitabilityFilters,
  handleSliderChange,
  handleFilterDropChange,
  dropFilterValue,
  setDropFilterValue,
  selectedTypes,
  toggleType,
  resetTypes,
}) => {
  return (
    <div className="filters">
      <div className="filters-title">
        <h2>Filters</h2>
      </div>
      <div className="group">
        <h3 className="group-title">
          <span>Work suitability</span>
          <button onClick={resetFilters}>Reset</button>
        </h3>
        {SUITABILITIES.map((s) => {
          const isSoloed = isSuitabilitySoloed(suitabilityFilters, s);
          return (
            <div className="filterRow" key={`minSuitabilityFilter${s}`}>
              <button
                className={`suitToggle ${isSoloed ? "isActive" : ""}`}
                aria-pressed={isSoloed}
                title={`only pals with ${s}`}
                onClick={() => toggleSoloFilter(s)}
              >
                <img
                  src={`/palfinder/images/suitabilities/${s.replace(
                    " ",
                    "_"
                  )}.png`}
                  width={26}
                  height={26}
                  alt={s}
                />
              </button>
              <SuitabilitySlider
                minValue={suitabilityFilters[s].min}
                maxValue={suitabilityFilters[s].max}
                name={s}
                changeHandler={handleSliderChange}
              />
            </div>
          );
        })}
      </div>
      <div className="group">
        <h3 className="group-title">
          <span>Drops item</span>
          <button onClick={() => setDropFilterValue("-")}>Reset</button>
        </h3>
        <label htmlFor="dropSelect">
          <select
            name="drops"
            id="drops"
            onChange={handleFilterDropChange}
            value={dropFilterValue}
          >
            <option value="-">Any item</option>
            {items.map((i) => (
              <option value={i} key={i}>
                {i}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="group">
        <h3 className="group-title">
          <span>Element</span>
          <button onClick={resetTypes}>Reset</button>
        </h3>
        <div className="typeGrid">
          {TYPES.map((t) => (
            <button
              key={t}
              className={`typeToggle ${
                selectedTypes.includes(t) ? "isActive" : ""
              }`}
              aria-pressed={selectedTypes.includes(t)}
              title={t}
              onClick={() => toggleType(t)}
            >
              <img
                src={`/palfinder/images/types/${t}.png`}
                width={22}
                height={22}
                alt={t}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
