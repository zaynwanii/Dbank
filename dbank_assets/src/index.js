import { dbank } from "../../declarations/dbank";

window.addEventListener("load", async () => {
  update();
});

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const inputAmt = parseFloat(document.getElementById("input-amount").value);
  const outputAmt = parseFloat(document.getElementById("withdrawal-amount").value);


  // const button=e.target.querySelector("#submit-btn");
  const button = document.getElementById("submit-btn");
  button.setAttribute("disabled", true);

  if (document.getElementById("input-amount").value.length != 0) {
    await dbank.topUp(inputAmt);
  }

  if (document.getElementById("withdrawal-amount").value.length != 0) {

    await dbank.withdraw(outputAmt);
  }


  await dbank.compound();
  update();

  button.removeAttribute("disabled");

  document.getElementById("input-amount").value = "";
  document.getElementById("withdrawal-amount").value = "";

});

async function update() {
  var currentAmt = await dbank.checkBalance();
  currentAmt = Math.round(currentAmt * 100) / 100;
  document.getElementById("value").innerText = currentAmt;
}