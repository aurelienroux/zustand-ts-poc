import Counter from "./modules/counter/Counter";
import Photos from "./modules/photos/Photos";
import Programs from "./modules/programs/Programs";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Zustand POC</h1>
      </header>
      <main>
        <Counter />
        <hr style={{ margin: "30px" }} />
        <Programs />
        <hr style={{ margin: "30px" }} />
        <Photos />
      </main>
    </div>
  );
}

export default App;
