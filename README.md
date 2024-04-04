## Simple Website to search universities from India and being able to add to favourites.

## SQL DATABASE INTEGRATION with FRONTEND WEB LAYOUT to assist you while searching for universities.

## clone the repository using git clone and run the server using npm run server/

API Endpoints
GET /favourites: Retrieve a list of favorite universities.
POST /favourites: Add a university to favorites. Requires the university name, state/province, and web page URL in the request body.

UNIVERSITIES api used https://github.com/Hipo/university-domains-list-api


Libraries and APIs Used
Frontend: HTML, CSS, Bootstrap
Backend: Node.js, Express.js
Database: MySQL
API: Hipo University Domains List API

Project Structure
index.html: Search and favorites page layout.
styles.css: Custom CSS styles.
index.js: Backend Node.js server for handling API requests and interacting with the database.

example :
[
  {
    "name": "Example University",
    "state_province": "Example State",
    "web_page": "https://example.com"
  }
]
