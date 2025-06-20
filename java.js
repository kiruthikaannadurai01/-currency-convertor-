const currencies = ['USD', 'EUR', 'INR', 'GBP', 'JPY'];

const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");

currencies.forEach(currency => {
  const option1 = document.createElement("option");
  option1.value = currency;
  option1.text = currency;
  fromCurrency.add(option1);

  const option2 = document.createElement("option");
  option2.value = currency;
  option2.text = currency;
  toCurrency.add(option2);
});

fromCurrency.value = "USD";
toCurrency.value = "INR";

async function convertCurrency() {
  const amount = document.getElementById("amount").value;
  const from = fromCurrency.value;
  const to = toCurrency.value;

  if (amount === "" || isNaN(amount)) {
    alert("Please enter a valid amount");
    return;
  }

  const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
  const data = await response.json();
  const rate = data.rates[to];

  const result = (amount * rate).toFixed(2);
  document.getElementById("result").innerText = `${amount} ${from} = ${result} ${to}`;
}
