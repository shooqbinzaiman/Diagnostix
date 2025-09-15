document.addEventListener("DOMContentLoaded", () => {
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

    zone.addEventListener("drop", (event) => {
      event.preventDefault()
      const draggedId = event.dataTransfer.getData("text/plain")
      const draggedItem = document.getElementById(draggedId)

      if (document.getElementById(draggedId)) {
        if (document.getElementById(draggedId).dataset.answer === "true") {
          if (zone.children.length === 0) {
            event.target.appendChild(document.getElementById(draggedId))
            document.getElementById(draggedId).style.pointerEvents = "none"
            messageBox.textContent = "correct!"
          } else {
            messageBox.textContent = "This box already has an item!"
          }
        } else {
          messageBox.textContent = "Wrong item! Try again"
        }
      }
    })
  })
})
