import PalCard from "./PalCard";
import { pals as allPals } from "./pals";
import "./style.scss";
import {
  isSuitabilityFilterDefault,
  useSuitabilityFilters,
} from "./useSuitabilityFilters";
import { SuitabilitiesEnum, type IPal, enum2array } from "./interfaces";
import { LazyLoadImage } from "react-lazy-load-image-component";

const suitabilites: SuitabilitiesEnum[] = enum2array(SuitabilitiesEnum, true);

const App = () => {
  const { handleMinSliderChange, handleMaxSliderChange, suitabilityFilters } =
    useSuitabilityFilters();

  const pals = allPals.filter((p) => {
    // Retirer les pals qui n'ont pas les propriété suitability equal or above values[s]
    const doesThisPalRespectSuitabilityFilters = suitabilites.every((sName) => {
      const filterValues = suitabilityFilters[sName];
      if (isSuitabilityFilterDefault(filterValues)) return true;
      // TODO Handle mix/max instead of just min value
      const palSuitability =
        p.suitability.find((palS) => palS.type === sName)?.level || 0;
      console.log(
        `${palSuitability} >= ${filterValues.min} && ${palSuitability} <= ${filterValues.max}`
      );
      console.log(
        palSuitability >= filterValues.min && palSuitability <= filterValues.max
      );
      return (
        palSuitability >= filterValues.min && palSuitability <= filterValues.max
      );
    });
    // TODO Retirer les pals qui ne produisent pas les ressources désirée

    return doesThisPalRespectSuitabilityFilters;
  });

  return (
    <main>
      <section className="filters">
        <h2>Filters</h2>
        <div className="group">
          <h3 className="group-title">Minimum Level</h3>
          {suitabilites.map((s) => (
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
              <input
                type="range"
                min="0"
                max="4"
                value={suitabilityFilters[s].min}
                className="slider"
                id={`min |${s}`}
                name={`min ${s}`}
                onChange={handleMinSliderChange}
              />
              <span>{suitabilityFilters[s].min}</span>
            </label>
          ))}
        </div>
        <div className="group">
          <h3 className="group-title">Maximum Level</h3>
          {suitabilites.map((s) => (
            <label htmlFor={s} key={`maxSuitabilityFilter${s}`}>
              <span>
                <LazyLoadImage
                  src={`/palfinder/images/suitabilities/${s.replace(
                    " ",
                    "_"
                  )}.png`}
                  width="30px"
                  height="30px"
                  title={`max ${s}`}
                />
              </span>
              <input
                type="range"
                min="0"
                max="4"
                value={suitabilityFilters[s].max}
                className="slider"
                id={`max |${s}`}
                name={`max ${s}`}
                onChange={handleMaxSliderChange}
              />
              <span>{suitabilityFilters[s].max}</span>
            </label>
          ))}
        </div>
      </section>
      <section className="pals">
        {pals.map((p) => (
          <PalCard pal={p as IPal} key={p.id} />
        ))}
      </section>
    </main>
  );
};

export default App;
