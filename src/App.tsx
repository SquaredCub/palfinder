import PalCard from "./PalCard";
import { pals as allPals } from "./pals";
import "./style.scss";
import {
  isSuitabilityFilterDefault,
  useSuitabilityFilters,
} from "./useSuitabilityFilters";
import { type IPal, SUITABILITIES } from "./interfaces";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";
import MenuButton from "./MenuButton";

const App = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const {
    handleMinSliderChange,
    handleMaxSliderChange,
    resetFilters,
    suitabilityFilters,
  } = useSuitabilityFilters();

  const pals = allPals.filter((p) => {
    // Retirer les pals qui n'ont pas les propriété suitability equal or above values[s]
    const doesThisPalRespectSuitabilityFilters = SUITABILITIES.every(
      (sName) => {
        const filterValues = suitabilityFilters[sName];
        if (isSuitabilityFilterDefault(filterValues)) return true;
        const palSuitability =
          p.suitability.find((palS) => palS.type === sName)?.level || 0;
        return (
          palSuitability >= filterValues.min &&
          palSuitability <= filterValues.max
        );
      }
    );
    // TODO Retirer les pals qui ne produisent pas les ressources désirée

    return doesThisPalRespectSuitabilityFilters;
  });

  const toggleMenu = () => {
    setMenuOpen((old) => !old);
  };

  return (
    <main>
      <section className={`filtersSection ${menuOpen ? "open" : "collapsed"}`}>
        <div className="filters">
          <div className="filters-title">
            <MenuButton handleToggleMenu={toggleMenu} />
            <h2>Filters</h2>
            <button onClick={resetFilters}>Reset</button>
          </div>
          <div className="group">
            <h3 className="group-title">Minimum Level</h3>
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
            {SUITABILITIES.map((s) => (
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
        </div>
      </section>
      <section className={`palsSection ${menuOpen ? "collapsed" : "open"}`}>
        <div className="menuButton-wrapper">
          <MenuButton handleToggleMenu={toggleMenu} />
        </div>
        <div className="pals">
          {pals.map((p) => (
            <PalCard pal={p as IPal} key={p.id} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default App;
