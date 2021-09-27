import React from "react";

function MoreButton({setSushiNum, sushiNum }) {

  function handleMore(){
    setSushiNum(sushiNum+4)
  }
  return <button onClick={handleMore}>More sushi!</button>;
}

export default MoreButton;
