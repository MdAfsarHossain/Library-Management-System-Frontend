# [Library Management System]()

A full-featured library management web application built with `React`, `Redux Toolkit (RTK Query)`, `Zod`, `React Hook Form`, and `Tailwind CSS`. This system allows users to `manage books`, `borrow books`, and keep track of their `availability` and `quantity` in a sleek, responsive interface.

---

## 🚀 Features

- ✅ View a list of all books
- 📝 Add, Edit, and Delete book entries
- 🔍 View detailed information of a single book
- 📦 Borrow books with quantity and due date input
- ✅ Auto-update availability based on copies
- ⚙️ Form validation with Zod and RHF
- 🌐 API integration using RTK Query
- 🔄 Loading & Error handling
- 🧠 Type-safe form data with Zod
- ✨ Modern UI using Tailwind CSS and ShadCN

---

## 🛠️ Technologies Used

| **Layer**        | **Technology**                          |
| ---------------- | --------------------------------------- |
| Frontend         | React + TypeScript                      |
| State Management | Redux Toolkit + RTK Query               |
| Backend          | Node.js + Express.js                    |
| Database         | MongoDB + Mongoose                      |
| Styling          | Tailwind CSS or any basic CSS framework |

---

## 📁 Project Structure

```ts
src/
├── components/ # Reusable UI components (e.g., Buttons, Modal)
├── pages/ # Page components (BookList, AddBook, EditBook, etc.)
├── redux/ # Redux slices & API services
├── routes/ # React Router DOM routes
└── App.tsx # Root component
```

## 🧪 Local Development

1. **Clone the repo**

```bash
git clone https://github.com/MdAfsarHossain/Library-Management-System-Frontend
cd library-management-system-client
```

2. **Install dependencies**

```js
npm i
```

3. **Run the app**

```js
npm run dev

```

4. **Open in browser**

```ts
http://localhost:5173
```

## ⚙️ API Setup

This project uses RTK Query to fetch/update data from the backend. To use it:

Ensure your backend exposes endpoints like:

### 📘 Books

- `POST /books`: Create a new book.
- `GET /books`: Get all books (supports filtering and sorting).
- `GET /books/:bookId`: Get a book by ID.
- `PUT /books/:bookId`: Update a book.
- `DELETE /books/:bookId`: Delete a book.

### 📘 Borrow

- `POST /borrow`: Borrow a book.
- `GET /borrow`: Get a summary of borrowed books.

You can configure the base URL and endpoints in:

```npm
src / redux / api / baseApi.ts;
```

## 📌 Notes

- Availability is auto-set based on the number of copies
- Borrow form uses a modal with date picker and quantity
- `react-router-dom` is used for navigation
- Error and loading states are handled gracefully
