async function clickAction() {
  document.querySelector(".vehicle-body").classList.add("clickAction");
  await setTimeout(console.log(), 4000);
  document.querySelector(".vehicle-body").innerHTML = "";
}
