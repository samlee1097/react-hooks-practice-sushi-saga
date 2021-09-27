import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushiList, setMoney, money}) {
  const [countSushi, setCountSushiList] = useState(0)
  
  const currentSushiList = [...sushiList].slice(countSushi, countSushi+4)

  return (

    <div className="belt">
      {/* Render Sushi components here! */}
      {currentSushiList.map(SushiE => <Sushi setMoney={setMoney} money = {money} key = {SushiE.id} name={SushiE.name} image={SushiE.img_url} price={SushiE.price} />)}
      <MoreButton sushiNum={countSushi} setSushiNum={setCountSushiList} />
    </div>
  );
}

export default SushiContainer;