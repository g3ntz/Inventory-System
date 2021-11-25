function openModal(btn) {
  let id = btn.getAttribute("id");

  if (id === "deleteBtn") {
    let deleteModal = document.getElementById("deleteModal");
    deleteModal.style = "transform: scale(1);";
  } 
  else if (id === "viewNotesBtn") {
    let NotesModal = document.getElementById("notesModal");
    NotesModal.style = "transform: scale(1);";
  } 
  else if (id === "receiveBtn") {
    let receiveModal = document.getElementById("receiveModal");
    receiveModal.style = "transform: scale(1);";
  } 
  else if (id === "rejectBtn") {
    let rejectModal = document.getElementById("rejectModal");
    rejectModal.style = "transform: scale(1);";
  }
}

function closeModal(btn) {
  let modal = btn.parentElement;
  modal.style = "transform: scale(0);";
}
