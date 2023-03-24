import "./css/styles.css";
import GetExchange from "./exchangeBl";

GetExchange.exchangeInfo()
  .then((data) => {
    const exchangeRate = data.conversion_rates.USD;
    document.getElementById("rate").textContent = exchangeRate;
  })
  .catch((error) => console.error(error));
