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
    .catch(function (error) {
      const errorMessage =
        "An error occurred while retrieving exchange rates. Please try again later.";
      displayError(errorMessage);
      return error;
    });
});

function displayError(errorMessage) {
  const errorContainer = document.getElementById("error-container");
  const errorText = document.getElementById("error-text");

  errorText.textContent = errorMessage;
  errorContainer.style.display = "block";
}
