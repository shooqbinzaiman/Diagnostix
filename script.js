document.addEventListener("DOMContentLoaded", () => {
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

      if (draggedItem === null) {
        return
      }

      if (draggedItem.dataset.answer === "true") {
        if (zone.children.length === 0) {
          zone.appendChild(draggedItem)
          draggedItem.style.pointerEvents = "none"
          messageBox.textContent = "correct!"
        } else {
          messageBox.textContent = "This box already has an Item!"
        }
      } else {
        messageBox.textContent = "Wrong item! Try again"
      }
    })
  })
})
