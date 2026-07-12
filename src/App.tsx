import { ChangeEvent, useState } from "react";

import { pals as allPals } from "./pals";
import "./style.scss";
import {
  isSuitabilityFilterDefault,
  suitabilityFiltersAreDefaults,
  useSuitabilityFilters,
} from "./useSuitabilityFilters";
import { type IPal, SUITABILITIES, TypesEnum } from "./interfaces";

import PalCard from "./PalCard";
import MenuButton from "./MenuButton";
import Filters from "./Filters";

const App = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const { handleSliderChange, resetFilters, suitabilityFilters } =
    useSuitabilityFilters();
  const [dropFilter, setDropFilter] = useState<string>("-");
  const [searchFilter, setSearchFilter] = useState<string>("");
  const [typeFilter, setTypeFilter] = useState<TypesEnum[]>([]);

  const toggleType = (t: TypesEnum) => {
    setTypeFilter((old) =>
      old.includes(t) ? old.filter((x) => x !== t) : [...old, t]
    );
  };

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
    // Retirer les pals qui n'ont pas TOUS les éléments sélectionnés
    if (typeFilter.length > 0) {
      if (!typeFilter.every((t) => p.types.includes(t))) return false;
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
    setDropFilter(value);
  };

  return (
    <>
      <header className="topBar">
        <h1 className="brand">
          Pal<span>finder</span>
        </h1>
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
              placeholder="Search pals, types, partner skills…"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
            />
          </div>
        </div>
        <span className="resultCount">
          {pals.length} / {allPals.length} pals
        </span>
      </header>
      <main>
        <div className="menuButton-wrapper">
          <MenuButton handleToggleMenu={toggleMenu} />
        </div>
        <section
          className={`filtersSection ${menuOpen ? "open" : "collapsed"}`}
        >
          <Filters
            resetFilters={resetFilters}
            suitabilityFilters={suitabilityFilters}
            handleSliderChange={handleSliderChange}
            handleFilterDropChange={handleFilterDropChange}
            dropFilterValue={dropFilter}
            setDropFilterValue={setDropFilter}
            selectedTypes={typeFilter}
            toggleType={toggleType}
            resetTypes={() => setTypeFilter([])}
          />
        </section>
        <section className={`palsSection ${menuOpen ? "collapsed" : "open"}`}>
          <div className="pals">
            {pals.map((p) => (
              <PalCard pal={p as IPal} key={p.id} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
