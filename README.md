# 📘 Online Library Management System

## 🧾 Project Overview

The **Online Library Management System** is a single-page web application built with **React.js** and **Tailwind CSS**, designed to simulate a digital library platform. Users can **browse**, **search**, and **add** books with a clean and responsive UI. This project demonstrates practical use of modern React features, routing, state management, and Tailwind for styling.

---

## 🛠️ Technologies Used

- **React JS** – Component-based frontend architecture  
- **React Router DOM** – Client-side routing and dynamic URL management  
- **Tailwind CSS** – Utility-first CSS framework for styling  
- **JavaScript (ES6)** – Logic and interactivity  
- **HTML5 & JSX** – Markup and structure

---

## 📂 Features and Structure

### 1. 🧭 Navbar (Fixed)
- Consistent, fixed header with links to:
  - `Home`
  - `Browse Books`
  - `Add Book`
- Styled with Tailwind: responsive layout, shadow, and hover effects.

---

### 2. 🏠 Home Page
- Displays a welcome message.
- Centered text inside a responsive container with `max-w-[800px]`.

---


### 3. 📚 Browse Books
- Responsive grid layout:  
  `grid-cols-1` on mobile, `md:grid-cols-2`, `lg:grid-cols-3` on larger screens.
- Each book card displays:
  - 📖 Title  
  - ✍️ Author  
  - 🏷️ Category  
  - ⭐ Rating  
  - 📷 Image (350×250 px)  
  - 📄 Short description
- Hover effects: smooth scale and shadow transitions.
- Clickable "View More" navigates to the detailed view.

---

### 4. 🔍 Search Functionality
- Input field to **search books by title**.
- Filters books in real-time.
- Displays message if no matching books are found.

---

### 5. 📖 Book Details Page
- Uses dynamic routing: `/book-details/:id`.
- Displays full book information in a styled flex layout.
- Responsive and visually clean with a `max-w-[800px]` container.

---

### 6. ➕ Add Book Page
- Well-structured form to add new books with fields:
  - Title  
  - Author  
  - Category  
  - Description  
  - Image URL
- Features:
  - Tailwind-styled form inputs  
  - Centered layout (`max-w-[800px]`)  
  - Smooth transitions and focus states  
  - Fixed-width submit button (`100px`, centered)
- On submission, the book is added to the book list.

---

### 7. 🚫 404 Page
- Custom page displayed when a route does not match any defined paths.

---

## 🚀 How to Use the Application

### 🔧 Run the Project

```bash
npm install
npm start


🧭 Navigate Using the Navbar
Home → /

Browse Books → /book-category

Add Book → /addbook

📚 Browse or Search
View all available books.

Use the search bar to filter by title.

🔍 View Book Details
Click "View More" to see the full information of a specific book.

➕ Add a New Book
Go to Add Book, fill out the form, and submit.

🌐 Live Link & GitHub
🔗 GitHub Repository: github.com/Manish019/Library_Management_System

✅ Conclusion
This project showcases your ability to build a structured, responsive, and user-friendly React application with Tailwind CSS. It implements real-world concepts like:

Dynamic routing

Component reusability

Search filtering

Clean, responsive UI

Perfect for learning and showcasing frontend development skills. 🎯

Made with ❤️ by Manish Aryan