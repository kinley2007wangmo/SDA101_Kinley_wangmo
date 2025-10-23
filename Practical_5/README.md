#  Hostel Room Maintenance Form

##  Overview
This project implements a **hostel room maintenance request form** using HTML and CSS.  
The form collects **student information**, **room details**, and **issue reports** so that hostel management can address maintenance issues efficiently.  

It includes input fields for:
- Student Name, ID, Email, Phone
- Block/Building, Room Number, Floor Number
- Issue Type, Priority, and Description

The form is styled for readability and user-friendliness with a clean and responsive layout.

---

##  Features
- **Student Information Section** – Basic details such as name, student ID, email, and phone number.  
- **Room Information Section** – Select block, room number, and floor.  
- **Issue Details Section** – Issue type, priority selection (radio buttons), and a detailed description.  
- **Responsive Design** – Works on desktops and mobile devices.  
- **Submit Button** – Sends form data to a server endpoint (currently `/submit-form`).

---

##  Technologies Used
- **HTML5** – Form structure and inputs  
- **CSS3** – Clean styling, responsive layout, and user-friendly design  

---

##  Project Files
- `index.html` → Form structure  
- `Form-style.css` → CSS styling for layout and elements  
- `README.md` → Documentation and instructions  
- `Reflection.md` → Developer reflection  

---

##  How to Run
1. Download or copy all files into a single folder.  
2. Open `index.html` in a web browser.  
3. Fill out the form fields and click **Submit**.  
4. Form data will be sent to the action endpoint specified (`/submit-form`).  

---

##  Example Behavior
- Form sections are clearly separated for Student, Room, and Issue information.  
- Validation prevents empty inputs for required fields (via HTML `required` attributes).  
- Issue priority uses radio buttons for clarity.  
- Textareas allow users to provide detailed descriptions of maintenance issues.  

---
