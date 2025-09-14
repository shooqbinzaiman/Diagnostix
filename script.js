const items = document.querySelectorAll(".draggable")
const dropzones = document.querySelectorAll(".dropzone")
const messageBox = document.getElementById("message-box")

items.forEach((item) => {
  item.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", item.id)
  })
})

dropzones.forEach((zone) => {
  zone.addEventListener("dragover", (event) => {
    event.preventDefault()
  })
})
