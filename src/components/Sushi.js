import React, {useState} from "react";

function Sushi({name, image, price, setMoney, money}) {

  const [eaten, setEaten] = useState(false)

  const onClick = () => {
    if (money > price && eaten === false) {
      setEaten(true)
      setMoney(money => money - price)
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={onClick}>
        {eaten? null : (
          <img
            src={image}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;