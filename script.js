let score = 0

const goToCase = (caseNumber) => {
  if (caseNumber === 1) {
    window.location.href = "patient1.html"
  } else if (caseNumber === 2) {
    window.location.href = "patient2.html"
  } else if (caseNumber === 3) {
    window.location.href = "patient3.html"
  } else {
    console.log("Case not found")
  }
}

const addScore = () => {
  score += 10
  const scoreDisplay = document.querySelector("#score-display")
  scoreDisplay.textContent = `Score: ${score}`
}

const completedCase = () => {
  addScore(10)
}
const GoBack = () => {
  window.location.href = "cases.html"
}
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".draggable")
  const dropZones = document.querySelectorAll(".dropzone")
  const messageBox = document.getElementById("message-box")
  const scoreDisplay = document.getElementById("score-display")
  const victoryMessage = document.getElementById("victory-message")

  // if (scoreDisplay) {
  //   scoreDisplay.textContent = "Score: " + getScore()
  // }

  // if (victoryMessage) {
  // if (ansArr.length >= 3) {
  //   console.log("win")

  //   victoryMessage.textContent = "Well done! You healed all patients!"
  // }
  // }

  if (!items.length || !dropZones.length || !messageBox) {
    return
  }

  let correctItemsDropped = 0
  let totalCorrectItems = 0

  items.forEach((item) => {
    if (item.dataset.answer === "true") {
      totalCorrectItems++
    }
  })

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

      if (!draggedItem) return

      if (document.getElementById(draggedId).dataset.answer === "true") {
        if (zone.children.length === 0) {
          event.target.appendChild(document.getElementById(draggedId))
          document.getElementById(draggedId).style.pointerEvents = "none"
          addScore()
          messageBox.textContent = "correct!"
          correctItemsDropped++

          if (correctItemsDropped == totalCorrectItems) {
            if (!localStorage.getItem("caseDone")) {
              messageBox.textContent =
                "Well done! You earned 10 points! Click the Back button to heal the other cases DOC!"
              localStorage.setItem("caseDone", "true")
            }
          }
        } else {
          messageBox.textContent = "This box already has an item!"
        }
      } else {
        messageBox.textContent = "Wrong item! Try again."
      }
    })
  })
})
