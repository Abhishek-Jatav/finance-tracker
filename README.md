
# 💰 Finance Data Processing & Access Control Backend

A backend system built for managing financial records with role-based access control and dashboard analytics.

This project was developed as part of a backend engineering assignment to demonstrate API design, data modeling, access control, and clean backend architecture.

---

## 🚀 Tech Stack

- **Framework:** NestJS
- **ORM:** Prisma
- **Database:** Neon (PostgreSQL)
- **Language:** TypeScript
- **Architecture:** Modular (Controller → Service → Prisma)

---

## 📌 Features

### 👤 User & Role Management
- Create and manage users
- Assign roles: `Viewer`, `Analyst`, `Admin`
- Control user status (active/inactive)
- Role-based permissions enforced at backend level

---

### 💳 Financial Records Management
- Create financial records
- Update & delete records
- View all records
- Filter records by:
  - Date
  - Category
  - Type (Income / Expense)

---

### 📊 Dashboard Summary APIs
- Total Income
- Total Expenses
- Net Balance
- Category-wise breakdown
- Recent transactions
- Monthly trends

---

### 🔐 Role-Based Access Control (RBAC)

| Role    | Permissions |
|--------|------------|
| Viewer | Read-only access |
| Analyst | Read + analytics access |
| Admin | Full access (CRUD + user management) |

---

### ✅ Validation & Error Handling
- DTO-based validation using class-validator
- Proper HTTP status codes
- Meaningful error messages
- Protection against invalid operations

---

### 💾 Data Persistence
- PostgreSQL database hosted on Neon
- Prisma used for schema modeling and queries

---

## 📁 Project Structure

```

src/
│
├── auth/              # Authentication logic (if implemented)
├── users/             # User management module
├── records/           # Financial records module
├── dashboard/         # Summary & analytics APIs
├── common/            # Guards, decorators, utilities
├── prisma/            # Prisma schema & config
│
└── main.ts

````

---

## 🔑 API Overview

### User APIs
- `POST /users` → Create user
- `GET /users` → Get all users
- `PATCH /users/:id` → Update user
- `DELETE /users/:id` → Delete user

---

### Records APIs
- `POST /records` → Create record
- `GET /records` → Get all records
- `GET /records?type=income&category=food` → Filter records
- `PATCH /records/:id` → Update record
- `DELETE /records/:id` → Delete record

---

### Dashboard APIs
- `GET /dashboard/summary` → Income, expenses, balance
- `GET /dashboard/category` → Category-wise totals
- `GET /dashboard/trends` → Monthly trends
- `GET /dashboard/recent` → Recent activity

---

## 🔐 Access Control Implementation

- Implemented using **Guards & Role Decorators**
- Middleware checks user role before allowing access
- Unauthorized actions return `403 Forbidden`

---

## ⚙️ Setup Instructions

### 1. Clone Repo
```bash
git clone https://github.com/Abhishek-Jatav/finance-tracker.git
cd finance-tracker
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create `.env` file:

```env
DATABASE_URL=your_neon_database_url
PORT=3000
```

### 4. Run Prisma

```bash
npx prisma generate
npx prisma migrate dev
```

### 5. Start Server

```bash
npm run start:dev
```

---

## 📦 Assumptions

* Authentication may be simplified or mocked
* Roles are statically defined
* Only backend logic is the focus (frontend optional)

---

## ⚖️ Trade-offs

* Used Prisma for faster development vs raw SQL flexibility
* RBAC implemented at application level (not DB level)
* Limited authentication to keep focus on core backend logic

---

## 🚧 Possible Improvements

* JWT Authentication
* Pagination for large datasets
* Unit & integration testing
* Swagger API documentation
* Rate limiting
* Caching for dashboard APIs

---

## 🌐 Live Demo / API

👉 [https://finance-tracker-abhishek-jatav.netlify.app/](https://finance-tracker-abhishek-jatav.netlify.app/)

---

## 👨‍💻 Author

**Abhishek Jatav**

---

## 📜 License

This project is for assessment purposes only.

