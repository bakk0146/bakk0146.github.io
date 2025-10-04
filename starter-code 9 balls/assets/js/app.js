// This array represents the weights of the 9 balls
const ballArray = [1, 1, 1, 1, 1, 1, 1, 1, 1];

// Ask for the oddball (the ball that will be heavier) and make the corresponding 
// ball in the array heavier
// This way, the user input is not stored in any variable so you can't cheat this way
const oddball = ballArray[prompt('Select the oddball [0-8]', 3)] = 1.2;


const ballList = document.getElementById("ball-list");

for (let i = 0; i < 9; i++) {
  // 1. Create a div
  const ball = document.createElement("div");

  // 2. Add classes (Bulma + your ball styles)
  ball.className = "ball column box m-4 has-background-primary-light";

  // 3. Set text inside (for example, its index)
  ball.textContent = i;

  // ⭐ If this is the heavier ball, change background
  if (ballArray[i] > 1) {
    ball.classList.remove("has-background-primary-light");
    ball.classList.add("has-background-primary");
  }

  // 4. Append to the container
  ballList.appendChild(ball);

}

// ---------- helpers ----------
function fmt(list) {
  return `[${list.join(', ')}]`;
}

function weigh(left, right) {
  const sum = arr => arr.reduce((s, idx) => s + ballArray[idx], 0);
  const ls = sum(left);
  const rs = sum(right);
  if (ls === rs) return 'balanced';
  return ls > rs ? 'left is heavier' : 'right is heavier';
}

function fillWeighing(k, left, right, result, conclusion) {
  document.getElementById(`left-${k}`).textContent = fmt(left);
  document.getElementById(`right-${k}`).textContent = fmt(right);
  document.getElementById(`result-${k}`).textContent = result;
  document.getElementById(`conclusion-${k}`).textContent = conclusion;
}

// ---------- algorithm (two weighings) ----------
(function runTwoWeighings() {
  const g1 = [0,1,2], g2 = [3,4,5], g3 = [6,7,8];

  // Weighing 1: [0,1,2] vs [3,4,5]
  const left1 = g1;
  const right1 = g2;
  const result1 = weigh(left1, right1);

  let candidate; // the group that must contain the oddball
  if (result1 === 'balanced') {
    candidate = g3;
    fillWeighing(
      1, left1, right1, result1,
      `oddball must be in ${fmt(candidate)}`
    );
  } else if (result1 === 'left is heavier') {
    candidate = g1;
    fillWeighing(
      1, left1, right1, result1,
      `oddball must be in ${fmt(candidate)}`
    );
  } else { // 'right is heavier'
    candidate = g2;
    fillWeighing(
      1, left1, right1, result1,
      `oddball must be in ${fmt(candidate)}`
    );
  }

  // Weighing 2: weigh first two of the candidate group
  const [a, b, c] = candidate;
  const left2 = [a];
  const right2 = [b];
  const result2 = weigh(left2, right2);

  let foundIndex;
  if (result2 === 'balanced') {
    foundIndex = c;
  } else if (result2 === 'left is heavier') {
    foundIndex = a;
  } else { // 'right is heavier'
    foundIndex = b;
  }

  fillWeighing(
    2, left2, right2, result2,
    `oddball is [${foundIndex}]`
  );

  // Highlight the found index with a darker border (visualization step)
  const ballListEl = document.getElementById('ball-list');
  const node = [...ballListEl.children].find(el => Number(el.textContent) === foundIndex);
  if (node) node.style.outline = '4px solid #363636';
})();

  if (balls[foundIndex]) {
    balls[foundIndex].classList.add('has-border-primary-dark');
  }