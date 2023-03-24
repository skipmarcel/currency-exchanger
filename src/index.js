import "./css/styles.css";
import GetExchange from "./exchangeBl";

const dropdown = document.getElementById("country-dropdown");
const rateSpan = document.getElementById("rate");

dropdown.addEventListener("click", () => {
  const selectedCountry = dropdown.value;
  GetExchange.exchangeInfo()
    .then((data) => {
      const exchangeRate = data.conversion_rates[selectedCountry];
      rateSpan.textContent = exchangeRate;
    })
    .catch((error) => console.error(error));
});
