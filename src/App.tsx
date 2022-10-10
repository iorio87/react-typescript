import { useEffect, useState } from "react";
import "./App.css";
import Forms from "./components/Forms";
import List from "./components/List";
import {Sub} from './types'

const INITIAL_STATE = [
  {
    nick: "iorio87",
    subMonths: 2,
    avatar: "https://i.pravatar.cc/150?u=iorio87",
    description: "the best",
  },
  {
    nick: "ivael_tercero",
    subMonths: 3,
    avatar: "https://i.pravatar.cc/150?u=ivael_tercero",
  }
]



interface AppState {
  subs: Sub[],
  newSubNumbers: number,
}

function App() {

  const [subs, setSubs] = useState<AppState['subs']>([]);
  const [newsubsnumber, setNewsubsnumber] = useState<AppState['newSubNumbers']>(0)

  useEffect(() => {
    setSubs(INITIAL_STATE) 
  }, [])
  

  return (
    <div className="App container m-auto w-80">
      <List subs={subs}/>
      <Forms/>
    </div>
  );
}

export default App;
