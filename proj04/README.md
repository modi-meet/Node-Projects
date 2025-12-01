# URL Shortener
A URL shortening service built with Node.js, Express, and MongoDB. This application allows users to shorten long URLs, tracks click analytics, and features a stateless authentication system using Server-Side Rendering (SSR) with EJS.

## Features

* **URL Shortening:** Convert long URLs into compact, shareable links.
* **Redirection:** Instant redirection from short IDs to original URLs.
* **Analytics:** Track total visits/clicks for every shortened URL.
* **User Authentication:**
    * User Signup and Login functionality.
    * Stateless authentication using JWT Tokens.
* **Server-Side Rendering:** Dynamic UI rendering using **EJS** templates.
* **MVC Architecture:** Clean code structure using Models, Views, Controllers, and Services.

## 🛠️ Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB
* **Templating Engine:** EJS (Embedded JavaScript)
* **Authentication:** JWT Tokens

## Routes

1. POST /URL - Generates a new URL
2. GET /:shortid - Redirects the user to original URL
3. GET /URL/analytics/:shortid - Returns the clicks for the provided shortened URL

## Topics : Hands-on practice

1. Stateless Authentication
2. JWT Tokens
3. Cookies vs Token based Authorization
4. Headers file include "authorization" key followed by the JWT token