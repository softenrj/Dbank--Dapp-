import { dbank_backend } from "../../declarations/dbank_backend";
window.addEventListener("load",async function(){
    update();
})

async function update(){
    const currAmount = await dbank_backend.checkbalance();
    console.log(currAmount);
    document.getElementById("value").innerText = Math.round(currAmount * 100) / 100;
}

document.querySelector("form").addEventListener("submit",async function (e){
    e.preventDefault();
    const button = e.target.querySelector("#submit-btn");

  const inputAmount = parseFloat(document.getElementById("input-amount").value);
  const outputAmount = parseFloat(document.getElementById("withdrawal-amount").value);

  button.setAttribute("disabled", true);

  if (document.getElementById("input-amount").value.length != 0) {
    await dbank_backend.topup(inputAmount);
  }

  if (document.getElementById("withdrawal-amount").value.length != 0) {
    await dbank_backend.withdrow(outputAmount);
  }

  await dbank_backend.compound();

  update()

  document.getElementById("input-amount").value = "";
  document.getElementById("withdrawal-amount").value = "";

  button.removeAttribute("disabled");

})
