import React, {useEffect, useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
 
  const [stocks, setStocks] = useState([])
  const [portfolioStocks, setPortfolioStocks]= useState([])
  const [sortBy, setSortBy] = useState("Alphabetically")
  const [filter, setFilter] = useState("All")



  useEffect(()=> {

   fetch("http://localhost:3001/stocks")
   .then(res => res.json())
   .then(stocks=> setStocks(stocks))

  }, [])
  
  function onAddToPortfolio(stockToAdd){
   const portfolioStock = portfolioStocks.find(stock => stock.id === stockToAdd.id)
    if(!portfolioStock){
      const addStock = [...portfolioStocks, stockToAdd]
      setPortfolioStocks(addStock)
    } 
  }

  function onRemoveFromPortfolio(stockToRemove){
    const updatedArray = portfolioStocks.filter(stock => stock.id !== stockToRemove.id)
    setPortfolioStocks(updatedArray)
  }
 
  const stocksToDisplay = [...stocks]
  
  .sort ((a,b) => {
    if (sortBy === "Alphabetically"){
    return a.ticker.localeCompare(b.ticker)
  } else {
    return a.price - b.price
  }})
 
  .filter((stock) => {
    if (filter !== "All"){
        return stock.type === filter
    } else {
      return stock
  }})

  

  return (
    <div>
      <SearchBar filter={filter} setFilter={setFilter} sortBy={sortBy} setSortBy={setSortBy}/>
      <div className="row">
        <div className="col-8">
          <StockContainer 
            onAddToPortfolio={onAddToPortfolio} 
            stocks={stocksToDisplay}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer onRemoveFromPortfolio={onRemoveFromPortfolio} portfolioStocks={portfolioStocks} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
