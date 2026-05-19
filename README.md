# Expense Tracker Backend App

A CRUD-based expense management system built using Node.js, Express.js and EJS.

## Features
- Add expenses
- View all expenses
- View single expense
- Update expenses
- Delete expenses

## Tech Stack
- Node.js
- Express.js
- EJS
- Method Override
- UUID

## REST Routes

| Method | Route | Purpose |
|--------|-------|---------|
| GET | /expenses | Show all expenses |
| GET | /expenses/new | Show new expense form |
| POST | /expenses | Create expense |
| GET | /expenses/:id | Show one expense |
| GET | /expenses/:id/edit | Show edit form |
| PATCH | /expenses/:id | Update expense |
| DELETE | /expenses/:id | Delete expense |

## Run Locally

```bash
npm install
node index.js
```