#  Reflection on DOM Manipulation Project

##  What I Built
In this project, I practiced how to use **JavaScript to interact with the DOM (Document Object Model)**.  
The webpage allows users to change a heading, add new paragraphs, and remove paragraphs dynamically by clicking buttons.

---

##  What I Learned
- How to use DOM selection methods like:
  - `getElementById()`  
  - `querySelectorAll()`  
- How to **manipulate content and attributes** dynamically using:
  - `textContent`, `style`, and `classList`
- How to **create and remove elements** using:
  - `createElement()`, `appendChild()`, `removeChild()`
- How to handle **events** like button clicks using `addEventListener()`.
- The importance of using `DOMContentLoaded` to ensure the script runs after the page fully loads.

---

##  Challenges I Faced
- Forgetting to match the correct CSS class name (`hilight` vs `highlight`).  
- The script didn’t work at first because the elements weren’t fully loaded before being accessed.  
- Making sure the “Remove” button only deleted paragraphs and not the `<h3>` element.

---

##  Improvements for the Future
If I had more time, I would:
- Add animations when elements are added or removed.  
- Show a message when no more paragraphs can be removed.  
- Allow users to edit or rename added paragraphs.  
- Add a counter showing the number of paragraphs currently in the container.

---

##  Conclusion
This project helped me strengthen my understanding of **how JavaScript controls HTML elements in real-time**.  
It showed how small DOM manipulations can make a webpage interactive and dynamic.  
Overall, it was a fun and practical exercise in event handling and DOM traversal.
