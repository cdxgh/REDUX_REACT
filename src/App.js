import "./styles.css";
import Counter from "./components/Count";

export default function App() {
  return (
    <div className="App">
    <button>Increment</button>
    <Counter/>
      <button>Decrement</button>
    </div>
  );
}
