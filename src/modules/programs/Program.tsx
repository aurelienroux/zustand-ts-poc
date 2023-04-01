import "./Programs.css";
import { IProgram } from "./storePrograms";

type Props = {
  program: IProgram;
};

export default function Program({ program }: Props) {
  return (
    <div className="program">
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
  );
}
