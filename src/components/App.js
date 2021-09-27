import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushiList, setSushiList] = useState([])
  const [isRendered, setIsRendered] = useState(false)
  const [money, setMoney] = useState(100)

  useEffect(() => {
    fetch(API)
      .then(resp => resp.json())
      .then(element => {
        setSushiList(element)
        setIsRendered(true)
    })
  }, [])


  return (
    <div className="app">
      {isRendered? <SushiContainer sushiList = {sushiList} setMoney= {setMoney} money={money}/> : null}
      <Table money={money} />
    </div>
  );
}

export default App;