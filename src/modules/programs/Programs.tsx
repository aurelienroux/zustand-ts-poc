import { useEffect, useState } from "react";

import { useProgramsStore } from "../../modules/programs/storePrograms";
import { useCounterStoreDevtools } from "../counter/storeCounter";

import "./Programs.css";
import Program from "./Program";

export default function Programs() {
  const programs = useProgramsStore((state) => state.programs);
  const fetchPrograms = useProgramsStore((state) => state.fetchPrograms);
  const count = useCounterStoreDevtools((state) => state.count);

  const [filter, setFilter] = useState(false);

  const filteredPrograms = filter
    ? programs.filter((program) => !program.completed)
    : programs;

  useEffect(() => {
    fetchPrograms();
  }, []);

  function handleFilter() {
    const newFilter = !filter;
    setFilter(newFilter);
  }

  return (
    <div>
      <h2>Programs</h2>
      <div>Counter from the counter store: {count}</div>

      <button
        style={{ border: "1px solid grey", margin: "2rem" }}
        onClick={() => handleFilter()}
      >
        filter completed programs
      </button>

      <div className="container">
        {filteredPrograms.map((program) => (
          <Program key={program.id} program={program} />
        ))}
      </div>
    </div>
  );
}
