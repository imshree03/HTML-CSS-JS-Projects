const btn = document.getElementById("roll-button");
const dice = document.getElementById("dice");
const rollHistoryEle = document.getElementById("roll-history");

btn.addEventListener("click", () => {
  dice.classList.add("roll-animation");
  console.log("clicked");
  setTimeout(() => {
    dice.classList.remove("roll-animation");
    rollDice();
  }, 1 * 1000);
  // time that you have specified in css file should be added here, To remove the roll-animation from the dice class and again when you click the btn animation will be added and appear
});

let historyList = [];

function rollDice() {
  const numGenerator = Math.floor(Math.random() * 6) + 1;
  const changedDiceFace = getDiceFace(numGenerator);
  dice.innerHTML = changedDiceFace;
  historyList.push(changedDiceFace);
  updateRollHistory();
}

function getDiceFace(num) {
  switch (num) {
    case 1:
      return "&#9856";

    case 2:
      return "&#9857";

    case 3:
      return "&#9858";

    case 4:
      return "&#9859";

    case 5:
      return "&#9860";

    case 6:
      return "&#9860";

    default:
      return "";
  }
}

function updateRollHistory() {
  rollHistoryEle.innerHTML = "";
  for (let i = 0; i < historyList.length; i++) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `Roll ${i + 1}: 
     <span>${historyList[i]}</span>`;
    rollHistoryEle.appendChild(listItem);
  }
}
