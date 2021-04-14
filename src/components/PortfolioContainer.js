import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolioStocks, onRemoveFromPortfolio}) {

  function portfolio(){
    return true
  }

  const displayStocks = portfolioStocks.map(stock=> 
  <Stock 
  onRemoveFromPortfolio={onRemoveFromPortfolio} 
  key={stock.id} 
  stock={stock} 
  portfolio={portfolio}
  />)

  return (
    <div>
      <h2>My Portfolio</h2>
      {
        displayStocks
      }
    </div>
  );
}

export default PortfolioContainer;
