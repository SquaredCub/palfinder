import { ChangeEvent, useState } from "react";

import { pals as allPals } from "./pals";
import "./style.scss";
import {
  isSuitabilityFilterDefault,
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
    if (dropFilter !== "-") {
      return (
        doesThisPalRespectSuitabilityFilters && p.drops.includes(dropFilter)
      );
    } else {
      return doesThisPalRespectSuitabilityFilters;
    }
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
          {pals.map((p) => (
            <PalCard pal={p as IPal} key={p.id} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default App;
