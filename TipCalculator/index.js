const btn = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const total = document.getElementById("total");

btn.addEventListener("click", calculateTotal);

function calculateTotal() {
  const billValue = billInput.value;
  const tipValue = tipInput.value;
  const totalValue = billValue * (1 + tipValue / 100);
  total;
  total.innerHTML = ` $ ${totalValue.toFixed(2)}`;
  console.log(totalValue);
}
