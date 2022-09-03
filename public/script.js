const firstName = document.querySelector(".first")
const lastName = document.querySelector(".last")
const percentage = document.querySelector("input.percentage")
const sendBtn = document.querySelector(".sendBtn")
const participantsBlock = document.querySelector(".participants")

const participants = []

const loadAllParticipants = async () => {
  const request = await fetch("/api/user/all")
  const response = await request.json()

  response.participants.forEach(participant => {
    participants.push(participant)
    appendNewParticipant(participant)
  })
}

const registerParticipation = async () => {
  const request = await fetch(`/api/user/new`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName: firstName.value,
      lastName: lastName.value,
      participation: percentage.value,
    }),
  })

  const response = await request.json()

  if (response.error) {
    console.error("Could not register participant\n" + response.error)
    return
  }

  participants.push(response.participant)
  appendNewParticipant(response.participant)
}

const appendNewParticipant = participant => {
  const mainBlock = document.createElement("div")
  mainBlock.classList.add("participant")

  const span1 = document.createElement("span")

  const nameBlock = document.createElement("p")
  nameBlock.innerText = `${participant.firstName} ${participant.lastName}`
  span1.appendChild(nameBlock)

  const percentageBlock = document.createElement("p")
  percentageBlock.innerText = `Percentage: ${participant.participation}%`
  span1.appendChild(percentageBlock)

  mainBlock.appendChild(span1)

  const span2 = document.createElement("span")

  const deleteBlock = document.createElement("p")
  deleteBlock.classList.add("delete")
  deleteBlock.innerText = "delete"
  span2.appendChild(deleteBlock)

  mainBlock.appendChild(span2)

  participantsBlock.appendChild(mainBlock)
}

sendBtn.addEventListener("click", registerParticipation)
window.onload = loadAllParticipants()
