# Test Shop

Test Shop is a simple e-commerce application built with React. It features pages for home, product details, cart, login, and register.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Project Structure](#project-structure)
- [Pages](#pages)
  - [Home](#home)
  - [Product Details](#product-details)
  - [Cart](#cart)
  - [Login](#login)
  - [Register](#register)
  
## Getting Started

### Prerequisites

Ensure you have the following installed on your development machine:

- Node.js (version 12 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/megactek/miniature-ecom-fourcore-test.git
cd miniature-ecom-fourcore-test
```

2. Install dependencies:

```bash
npm install
```

### Running the App

To start the development server, run:

```bash
npm start
```

This will start the app on \`http://localhost:3000\`.

## Project Structure

The project structure is as follows:

```
test-shop/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   │   ├── Home.js
│   │   ├── ProductDetails.js
│   │   ├── Cart.js
│   │   ├── Login.js
│   │   ├── Register.js
│   ├── App.js
│   ├── index.js
├── package.json
└── README.md
```

- **public/**: Contains public assets and the main HTML file.
- **src/**: Contains the source code for the application.
  - **components/**: Contains reusable components.
  - **pages/**: Contains React components for each page of the application.
  - **App.js**: Main application component.
  - **index.js**: Entry point of the application.

## Pages

### Home

The Home page displays a list of products available in the store. Users can browse and select products to view their details.

### Product Details

The Product Details page displays detailed information about a selected product, including its name, description, price, and an option to add it to the cart.

### Cart

The Cart page allows users to view the products they have added to their cart. Users can update the quantity of each product or remove products from the cart.

### Login

The Login page provides a form for users to enter their credentials and log in to their account.

### Register

The Register page provides a form for new users to create an account.