import "./styles.css";
import Menu from "./Menu";

const menuObj = [
  {
    Main1: [{ item: [{ item: "sub1" }] }, { item: "Sub2" }]
  },
  {
    Main2: [{ item: "Sub3" }, { item: "Sub4" }]
  }
];

export default function App() {
  return (
    <div className="App">
      <Menu menu={menuObj} />
    </div>
  );
}
