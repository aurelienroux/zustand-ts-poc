import { useCounterStoreDevtools } from "./storeCounter";

export default function Counter() {
  const [count, title, incrementCounter, decrementCounter] =
    useCounterStoreDevtools((state) => [
      state.count,
      state.title,
      state.incrementCounter,
      state.decrementCounter,
    ]);

  return (
    <div>
      <h2>
        {title}: {count}
      </h2>
      <div>
        <button style={{ border: "1px solid grey" }} onClick={decrementCounter}>
          Decrement
        </button>
        <button
          onClick={incrementCounter}
          style={{ marginLeft: "20px", border: "1px solid grey" }}
        >
          Add
        </button>
      </div>
    </div>
  );
}
