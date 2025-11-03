

let points = 0;                 // header total
const doneSet = new Set();      // session-only

function updateHeaderPoints(){
  const el = document.getElementById("headerPoints");
  if(el) el.textContent = `Points: ${points}`;
}

function renderChallengesArray(arr){
  const list = document.getElementById("challengeList");
  list.innerHTML = "";

  if(!Array.isArray(arr) || arr.length===0){
    list.innerHTML = `<li style="color:#8fb88a">No challenges available.</li>`;
    return;
  }

  arr.forEach(c=>{
    const id = Number(c.id);
    const title = c.title || "";
    const sub = c.sub || "";
    const pts = Number(c.points) || 0;

    const li = document.createElement("li");
    li.className = "challenge";

    const t = document.createElement("div");
    t.className = "challenge-title";
    t.textContent = `${id}. ${title}`;

    const s = document.createElement("div");
    s.className = "challenge-sub";
    s.textContent = sub;

    const btn = document.createElement("button");
    btn.className = "btn-accept";

    if(doneSet.has(id)){
      btn.textContent = "Done";
      btn.disabled = true;
    }else{
      btn.textContent = "Accept";
      btn.addEventListener("click", ()=>{
        points += pts;           // local bump
        doneSet.add(id);         // mark done
        updateHeaderPoints();
        btn.textContent = "Done";
        btn.disabled = true;


      });
    }

    li.appendChild(t);
    li.appendChild(s);
    li.appendChild(btn);
    list.appendChild(li);
  });
}

/* ===== Public API for Android ===== */
window.setHeaderPoints = function(value){
  points = Number(value) || 0;
  updateHeaderPoints();
};
window.renderChallengesFromJson = function(jsonString){
  try{
    const arr = JSON.parse(jsonString);
    renderChallengesArray(arr);
  }catch(e){
    console.error("Bad JSON:", e);
  }
};

/* ===== Browser fallback so it still works without Java ===== */
document.addEventListener("DOMContentLoaded", ()=>{
  updateHeaderPoints();
  const demo = [
    { id:1, title:"Cycle to Work",         sub:"Save CO₂ and stay fit!",      points:20 },
    { id:2, title:"Eat a Vegetarian Meal", sub:"Cut carbon, boost health!",   points:15 },
    { id:3, title:"Pick Up 5 Pieces of Trash", sub:"Make your area cleaner!", points:10 }
  ];
  renderChallengesArray(demo);
});