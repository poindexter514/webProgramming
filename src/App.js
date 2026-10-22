import logo from "./logo.svg";
import "./App.css";

function App() {
  const blocks = [
    new Block("#123456", 1),
    new Block("#676767", 2),
    new Block("#9271DA", 4),
    new Block("#F928E2", 5),
    new Block("#45A28F", 6),
    new Block("#3268BB", 7),
    new Block("#829ABC", 3),
    new Block("#ABCDEF", 8),
    new Block("#EEFACC", 9),
  ];

  const page = <ColorGrid options={blocks}></ColorGrid>;
  return <div id="myapp">{page}</div>;
}

function Block(color, number) {
  this.color = color;
  this.number = number;
}
function MakeBlock(props) {
  return (
    <div
      className="block"
      id={props.number}
      style={{ backgroundColor: props.color }}
      onClick={() => alert(props.number)}
    >
      {props.number}
    </div>
  );
}
function ColorGrid(props) {
  return (
    <div id="colorGrid">
      {props.options.map((block) => (
        <MakeBlock number={block.number} color={block.color}></MakeBlock>
      ))}
    </div>
  );
}
export default App;
