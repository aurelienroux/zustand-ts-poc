import { useEffect } from "react";

import { useProgramsStore } from "../../modules/programs/storePrograms";
import { useCounterStoreDevtools } from "../counter/storeCounter";

import "./Programs.css";

export default function Programs() {
  const programs = useProgramsStore((state) => state.programs);
  const fetchPrograms = useProgramsStore((state) => state.fetchPrograms);
  const count = useCounterStoreDevtools((state) => state.count);

  useEffect(() => {
    fetchPrograms();
  }, []);

  return (
    <>
      <h2>Programs</h2>
      <div>Counter from the counter store: {count}</div>
      <div className="container">
        {programs.map((program) => (
          <div key={program.id} className="program">
            <div className="header">
              <div>#{program.id}</div>
              <div>user: {program.userId}</div>
            </div>
            <div className="content">
              <div>description: {program.title}</div>
              <input
                type="checkbox"
                checked={program.completed}
                onChange={() => console.log("test")}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
