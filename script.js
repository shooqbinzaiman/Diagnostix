const element = document.getElementById("p1")
element.addEventListener("dragstart", (ev) => {
  ev.dataTransfer.setData("Text/plain", ev.target.id)
})
