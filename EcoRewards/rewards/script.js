document.addEventListener("DOMContentLoaded", () => {
  const pointsEl = document.getElementById("pointsValue");
  const rewardsGrid = document.getElementById("rewardsGrid");

  // example of points and rewards (replace with real DB data BACKEND !!!.)
  const points = 128;
  const rewards = [
    { id: "card1", title: "10% Off", sub: "Coffee", badge: 3, link: "card1.html" },
        { id: "card2", title: "20% Off", sub: "Food", badge: 6, link: "card2.html" },
        { id: "card3", title: "Free", sub: "Fruit", badge: 2, link: "card3.html" },
        { id: "card4", title: "20% Off", sub: "Stationery", badge: 7, link: "card4.html"},
  ];

  //animation of balance number
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

  //reward cards rendering
  rewards.forEach((item) => {
    const card = document.createElement("div");
    card.className = "rewardCard";
    card.innerHTML = `
      <div class="rewardBadge">${item.badge}</div>
      <div class="rewardTitle">${item.title}</div>
      <div class="rewardSub">${item.sub}</div>
      <button class="rewardBtn" id="${item.id}Btn">Redeem</button>
    `;

    // Handle button click
        card.querySelector(".rewardBtn").addEventListener("click", () => {
          window.location.href = item.link;
        });

    rewardsGrid.appendChild(card);

    // redeem page js
    document.addEventListener("DOMContentLoaded", () => {
      const generateBtn = document.getElementById("generateCodeBtn");
      const codeDisplay = document.getElementById("codeDisplay");

      generateBtn.addEventListener("click", () => {
        // Placeholder generator, BACKEND CHECK !!!
        const code = Math.random().toString(36).substring(2, 10).toUpperCase();
        codeDisplay.textContent = code;
      });
    });

  });
});
