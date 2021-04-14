import React from "react";

function Stock({stock, onAddToPortfolio, portfolio, onRemoveFromPortfolio}) {
 const { id, name, price, ticker, type} = stock

 function handleClick(){
   onAddToPortfolio(stock)
 }

function handlePortfolio(){
  onRemoveFromPortfolio(stock)
}


  return (
    <div>
      <div className="card">
        <div onClick={portfolio ? handlePortfolio : handleClick} className="card-body">
          <h5 className="card-title">{ticker}: {name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
