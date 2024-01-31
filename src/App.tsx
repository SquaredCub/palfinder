import { ChangeEvent, useState } from "react";

import { pals as allPals } from "./pals";
import "./style.scss";
import {
  isSuitabilityFilterDefault,
  suitabilityFiltersAreDefaults,
  useSuitabilityFilters,
} from "./useSuitabilityFilters";
import { type IPal, SUITABILITIES } from "./interfaces";

import PalCard from "./PalCard";
import MenuButton from "./MenuButton";
import Filters from "./Filters";

const App = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const { handleSliderChange, resetFilters, suitabilityFilters } =
    useSuitabilityFilters();
  const [dropFilter, setDropFilter] = useState<string>("-");
  const [searchFilter, setSearchFilter] = useState<string>("");

  const pals = allPals.filter((p) => {
    // Retirer les pals qui n'ont pas les propriété suitability equal or above values[s]
    if (!suitabilityFiltersAreDefaults(suitabilityFilters)) {
      for (let x = 0; x < SUITABILITIES.length; x++) {
        const filterValues = suitabilityFilters[SUITABILITIES[x]];
        if (!isSuitabilityFilterDefault(filterValues)) {
          const palSuitability =
            p.suitability.find((palS) => palS.type === SUITABILITIES[x])
              ?.level || 0;
          if (
            !(
              palSuitability >= filterValues.min &&
              palSuitability <= filterValues.max
            )
          ) {
            x = SUITABILITIES.length;
            return false;
          }
        }
      }
    }
    // Retirer les pals qui ne dropent pas ce qu'on veut
    if (dropFilter !== "-") {
      if (!p.drops.includes(dropFilter)) return false;
    }

    // Retirer les pals qui n'ont pas le searchFilter inclus qqpart
    if (searchFilter !== "") {
      const isSearchFilterIncluded = [
        // ...p.drops,
        p.name,
        ...p.types,
        p.aura.name,
        p.aura.description,
        // p.description,
      ]
        .map((str) => str.toLowerCase())
        .some((data) => data.includes(searchFilter.toLowerCase()));
      if (!isSearchFilterIncluded) return false;
    }

    return true;
  });

  const toggleMenu = () => {
    setMenuOpen((old) => !old);
  };

  const handleFilterDropChange = (e: ChangeEvent) => {
    const value = (e.target as HTMLSelectElement).value;
    console.log(value);
    setDropFilter(value);
  };

  return (
    <main>
      <section className={`filtersSection ${menuOpen ? "open" : "collapsed"}`}>
        <Filters
          toggleMenu={toggleMenu}
          resetFilters={resetFilters}
          suitabilityFilters={suitabilityFilters}
          handleSliderChange={handleSliderChange}
          handleFilterDropChange={handleFilterDropChange}
          dropFilterValue={dropFilter}
          setDropFilterValue={setDropFilter}
        />
      </section>
      <section className={`palsSection ${menuOpen ? "collapsed" : "open"}`}>
        <div className="menuButton-wrapper">
          <MenuButton handleToggleMenu={toggleMenu} />
        </div>
        <div className="pals">
          <div className="searchBar">
            <div className="inputWrapper">
              <span>
                <img
                  src="/palfinder/images/search-bar-icon.svg"
                  alt=""
                  id="icon"
                />
              </span>
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
              />
            </div>
          </div>
          {pals.map((p) => (
            <PalCard pal={p as IPal} key={p.id} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default App;
