export default class GetExchange {
  static exchangeInfo() {
    return fetch(
      `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`
    )
      .then(function (response) {
        if (!response) {
          const errorMessage = `${response.status} ${response.statusText}`;
          throw new Error(errorMessage);
        } else {
          return response.json();
        }
      })
      .catch(function (error) {
        return error;
      });
  }
}
