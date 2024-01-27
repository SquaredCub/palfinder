import PalCard from "./PalCard";
import { pals as allPals } from "./pals";
import "./style.scss";
import { useSuitabilityFilters } from "./useSuitabilityFilters";
import { SuitabilitiesEnum, type IPal, enum2array } from "./interfaces";

const suitabilites: SuitabilitiesEnum[] = enum2array(SuitabilitiesEnum, true);

const App = () => {
  const { handleSliderChange, suitabilityFilters } = useSuitabilityFilters();

  const pals = allPals.filter((p) => {
    // Retirer les pals qui n'ont pas les propriété suitability equal or above values[s]
    const doesThisPalRespectSuitabilityFilters = suitabilites.every((sName) => {
      if (suitabilityFilters[sName] === 0) return true;
      // TODO Handle mix/max instead of just min value
      const palSuitability = p.suitability.find((palS) => palS.type === sName);
      if (!palSuitability) return false;
      return palSuitability.level >= suitabilityFilters[sName];
    });
    // TODO Retirer les pals qui ne produisent pas les ressources désirée

    return doesThisPalRespectSuitabilityFilters;
  });

  return (
    <main>
      <section className="filters">
        {suitabilites.map((s) => (
          <label htmlFor={s} key={`suitabilityFilter${s}`}>
            <span>
              <img
                src={`/palfinder/images/suitabilities/${s.replace(
                  " ",
                  "_"
                )}.png`}
                width="30px"
                height="30px"
                title={s}
              />
            </span>
            <input
              type="range"
              min="0"
              max="4"
              value={suitabilityFilters[s]}
              className="slider"
              id={s}
              name={s}
              onChange={handleSliderChange}
            />
            <span>{suitabilityFilters[s]}</span>
          </label>
        ))}
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
