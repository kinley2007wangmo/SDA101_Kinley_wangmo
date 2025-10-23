// script.js (corrected)

document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("main-title");
  const paragraphs = document.querySelectorAll(".content");
  const container = document.getElementById("container");
  const changeTextBtn = document.getElementById("changeTextBtn");
  const addElementBtn = document.getElementById("addElementBtn");
  const removeElementBtn = document.getElementById("removeElementBtn");

  // Helpful logs (optional)
  console.log("container parent:", container.parentElement);
  console.log("container children:", container.children);
  console.log("container first element child:", container.firstElementChild);

  // Update title and first paragraph style (if present)
  title.textContent = "Welcome to the DOM Practice!";
  if (paragraphs.length > 0) {
    paragraphs[0].style.color = "green";
  }

  // Change title text on button click
  changeTextBtn.addEventListener("click", () => {
    title.textContent = "Text Changed via Button Click!";
  });

  // Add a new paragraph inside the container
  addElementBtn.addEventListener("click", () => {
    const newPara = document.createElement("p");
    newPara.textContent = "New paragraph added!";
    // match the CSS class name used in your HTML/CSS (you used 'hilight' in the stylesheet)
    newPara.classList.add("hilight");
    container.appendChild(newPara);
  });

  // Remove the last paragraph inside the container (but don't remove the <h3>)
  removeElementBtn.addEventListener("click", () => {
    const lastChild = container.lastElementChild;
    // only remove if it's a <p>
    if (lastChild && lastChild.tagName === "P") {
      container.removeChild(lastChild);
    } else {
      // optional: give user feedback in console if there's nothing removable
      console.log("No paragraph to remove (last element is not a <p>).");
    }
  });
});
