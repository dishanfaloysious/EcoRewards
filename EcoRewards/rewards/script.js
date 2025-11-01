document.addEventListener("DOMContentLoaded", () => {
  const pointsEl = document.getElementById("pointsValue");
  const rewardsGrid = document.getElementById("rewardsGrid");

  // example of points and rewards (replace with real DB data BACKEND !!!.)
  const points = 128;
  const rewards = [
    { title: "10% Off", sub: "Coffee", badge: 3 },
    { title: "20% Off", sub: "Food", badge: 6 },
    { title: "Free", sub: "Fruit", badge: 2 },
    { title: "20% Off", sub: "Stationary", badge: 7 },
  ];

  // Animate the balance number
  let current = 0;
  const animatePoints = () => {
    if (current < points) {
      current += Math.ceil((points - current) / 10);
      pointsEl.textContent = current;
      requestAnimationFrame(animatePoints);
    } else {
      pointsEl.textContent = points;
    }
  };
  animatePoints();

  // Render reward cards
  rewards.forEach((item) => {
    const card = document.createElement("div");
    card.className = "rewardCard";
    card.innerHTML = `
      <div class="rewardBadge">${item.badge}</div>
      <div class="rewardTitle">${item.title}</div>
      <div class="rewardSub">${item.sub}</div>
    `;
    rewardsGrid.appendChild(card);
  });
});
