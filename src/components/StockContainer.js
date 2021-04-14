import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, onAddToPortfolio}) {

 
 const displayStocks = stocks.map(stock => <Stock 
 onAddToPortfolio={onAddToPortfolio} 
 key={stock.id} 
 stock={stock}
 /> )

  return (
    <div>
      <h2>Stocks</h2>
      {displayStocks}
    </div>
  );
}

export default StockContainer;
