import { ChangeEvent, useDeferredValue, useState } from "react";

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
  const {
    handleSliderChange,
    resetFilters,
    toggleSoloFilter,
    suitabilityFilters,
  } = useSuitabilityFilters();
  const [dropFilter, setDropFilter] = useState<string>("-");
  const [searchFilter, setSearchFilter] = useState<string>("");
  // Deferred copy of the search text: the input updates instantly while the
  // expensive re-render of the pal grid happens at low priority.
  const deferredSearchFilter = useDeferredValue(searchFilter);
  const [typeFilter, setTypeFilter] = useState<TypesEnum[]>([]);
  const [sleeplessOnly, setSleeplessOnly] = useState<boolean>(false);

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
    // Retirer les pals qui dorment la nuit si on ne veut que des noctambules
    if (sleeplessOnly && !p.nocturnal) return false;

    // Retirer les pals qui n'ont pas TOUS les éléments sélectionnés
    if (typeFilter.length > 0) {
      if (!typeFilter.every((t) => p.types.includes(t))) return false;
    }

    // Retirer les pals qui ne dropent pas ce qu'on veut
    if (dropFilter !== "-") {
      if (!p.drops.includes(dropFilter)) return false;
    }

    // Retirer les pals qui n'ont pas le searchFilter inclus qqpart
    if (deferredSearchFilter !== "") {
      const isSearchFilterIncluded = [
        // ...p.drops,
        p.name,
        ...p.types,
        p.aura.name,
        p.aura.description,
        // p.description,
      ]
        .map((str) => str.toLowerCase())
        .some((data) => data.includes(deferredSearchFilter.toLowerCase()));
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
            toggleSoloFilter={toggleSoloFilter}
            suitabilityFilters={suitabilityFilters}
            handleSliderChange={handleSliderChange}
            handleFilterDropChange={handleFilterDropChange}
            dropFilterValue={dropFilter}
            setDropFilterValue={setDropFilter}
            selectedTypes={typeFilter}
            toggleType={toggleType}
            resetTypes={() => setTypeFilter([])}
            sleeplessOnly={sleeplessOnly}
            toggleSleepless={() => setSleeplessOnly((old) => !old)}
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
      <footer className="siteFooter">
        <p>
          Enjoying Palfinder? It's free and{" "}
          <a
            href="https://github.com/SquaredCub/palfinder"
            target="_blank"
            rel="noopener noreferrer"
          >
            open source
          </a>{" "}
          — but if you'd like to support its development, you can{" "}
          <a
            href="https://www.paypal.com/paypalme/SquaredCub"
            target="_blank"
            rel="noopener noreferrer"
          >
            buy me a coffee&nbsp;☕
          </a>
        </p>
        <p className="credits">
          Pal data and images sourced from{" "}
          <a
            href="https://paldb.cc"
            target="_blank"
            rel="noopener noreferrer"
          >
            paldb.cc
          </a>
          . Palworld and all game assets are ©{" "}
          <a
            href="https://www.pocketpair.jp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pocketpair, Inc.
          </a>{" "}
          This is an unofficial fan project.
        </p>
      </footer>
    </>
  );
};

export default App;
