const textElement = document.getElementById("typing-text");
const phrases = ["Web Developer.", "Hidden Genius Alumni.", "Problem Solver."];


const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function playLoop() {
  while (true) {
    for (const phrase of phrases) {
      for (let i = 0; i <= phrase.length; i++) {
        textElement.textContent = phrase.substring(0, i);
        await sleep(100); 
      }

      await sleep(1500);

      for (let i = phrase.length; i >= 0; i--) {
        textElement.textContent = phrase.substring(0, i);
        await sleep(50); 
      }

      await sleep(500);
    }
  }
}

document.addEventListener("DOMContentLoaded", playLoop);
