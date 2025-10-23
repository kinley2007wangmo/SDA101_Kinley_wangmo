#  Basic Form Validation (Vanilla JavaScript)

##  Overview
This project demonstrates **client-side form validation** using **Vanilla JavaScript**.  
It validates user input in real-time (as the user types) without reloading the page.

The form includes:
- Username  
- Email  
- Password  
- Confirm Password  

Each field is validated according to specific rules, and helpful error messages are shown dynamically.  
The **Submit button** remains disabled until all validations pass successfully.

---

##  Features
- Real-time input validation  
- Clear and dynamic error messages  
- Prevents form submission until all inputs are valid  
- Highlights valid inputs with green borders  
- Clean and minimal UI  

---

##  Validation Rules

| Field | Validation Rule |
|--------|------------------|
| **Username** | Must be at least 3 characters long |
| **Email** | Must follow a valid email format (e.g., someone@example.com) |
| **Password** | Must include: <br> • Minimum 8 characters <br> • At least one uppercase letter <br> • At least one lowercase letter <br> • At least one special character (@, #, $, %, etc.) |
| **Confirm Password** | Must match the password field |

---

##  Technologies Used
- **HTML5** — Structure of the form  
- **CSS3** — Styling and visual feedback  
- **Vanilla JavaScript (ES6)** — Real-time validation logic  

---

##  Project Structure