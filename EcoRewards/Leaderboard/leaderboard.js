// Temporary demo data to show structure
// Replace it with backend data later
const demoData = [
  { rank: 1, name: "Haaris", score: 35 },
  { rank: 2, name: "You", score: 15 },
  { rank: 3, name: "Saif", score: 10 },
  { rank: 4, name: "Hasan", score: 8 },
  { rank: 5, name: "Shuaib", score: 7 }
];

// Shows stats to be connected to backend later
document.getElementById("taskCount").textContent = 15;
document.getElementById("emissionValue").textContent = "18kg";

// Renders leaderboard dynamically
function renderLeaderboard(data) {
  const list = document.getElementById("leaderboardList");
  list.innerHTML = "";

  data.forEach(player => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="rank ${getRankClass(player.rank)}">${player.rank}</span>
      ${player.name}
      <span class="score">${player.score}</span>
    `;
    list.appendChild(li);
  });
}

// Color top 3 ranks
function getRankClass(rank) {
  if (rank === 1) return "gold";
  if (rank === 2) return "silver";
  if (rank === 3) return "bronze";
  return "";
}
// Initialize leaderboard
document.addEventListener("DOMContentLoaded", () => {

  // For now loads sample data
  renderLeaderboard(demoData);
});
