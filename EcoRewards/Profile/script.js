// Delete confirmation
const deleteBtn = document.getElementById("deleteBtn");
const modal = document.getElementById("deleteModal");
const cancelBtn = document.getElementById("cancelDelete");
const confirmBtn = document.getElementById("confirmDelete");

deleteBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

cancelBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

confirmBtn.addEventListener("click", () => {
  modal.style.display = "none";
  alert("Account deleted successfully (demo only).");
});

// Close if clicked outside the content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
