import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState<number>(5);
  const [subs, setSubs] = useState([
    {
      nick: "iorio87",
      subMoths: 2,
      avatar: "https://i.pravatar.cc/150?u=iorio87",
      description: "the best",
    },
    {
      nick: "ivael_tercero",
      subMoths: 3,
      avatar: "https://i.pravatar.cc/150?u=ivael_tercero",
    },
  ]);

  const changeNumber = () => {
    setNumber(number + 1);
  };

  return (
    <div className="App">
      <h1>Luciano subs</h1>
      <ul>
        {subs.map((sub) => {
          return (
            <li key={sub.nick}>
              <img src={sub.avatar} alt={sub.nick} />
              <h4>{sub.nick} (<small>{sub.subMoths}</small>)</h4>
              <p>{sub.description?.substring(0, 100)}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
