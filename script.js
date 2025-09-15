document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".draggable")
  const dropZones = document.querySelectorAll(".dropzone")
  const messageBox = document.getElementById("message-box")
  let correctItemsDropped = 0

  items.forEach((item) => {
    item.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", item.id)
    })
  })

  dropZones.forEach((zone) => {
    zone.addEventListener("dragover", (event) => {
      event.preventDefault()
    })

    zone.addEventListener("drop", (event) => {
      event.preventDefault()
      const draggedId = event.dataTransfer.getData("text/plain")
      const draggedItem = document.getElementById(draggedId)
      const totalCorrectItems = 3

      if (document.getElementById(draggedId)) {
        if (document.getElementById(draggedId).dataset.answer === "true") {
          if (zone.children.length === 0) {
            event.target.appendChild(document.getElementById(draggedId))
            document.getElementById(draggedId).style.pointerEvents = "none"
            messageBox.textContent = "correct!"
            correctItemsDropped++
            console.log("correctItemsDropped", correctItemsDropped)
            console.log("totalCorrectItems", totalCorrectItems)

            if (correctItemsDropped == totalCorrectItems) {
              console.log("here...")
              window.location.replace("patient22.html")
            }
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
