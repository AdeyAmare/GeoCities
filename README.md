# MM-FS-Test-Task

This repository contains the code for a full stack web application that allows users to login, register, search for countries, and view their search history.

## Frontend

The frontend of the application was built using React, with Redux Toolkit used for global state management. The styling solution used is TailwindCSS. 

## Backend

The backend of the application was built using NodeJS and ExpressJS. The data is stored in MongoDB. 

## Development Approach

1. I began by implementing the user authentication functionalities on the backend. To do this, I first set up a schema using Mongoose for the user and then defined endpoints with ExpressJS. This allowed me to verify user credentials and protect sensitive data.

2. Once the backend was set up, I moved on to implementing the user login, sign up, and logout functionalities on the frontend. I made calls to the endpoints I had set up and stored the data I received in a user slice in Redux. This ensured that user data was properly managed and that users could securely access the application.

3. Next, I explored the GEO DB Cities API to see what kinds of data I could work with. I then implemented an endpoint to take user input as a parameter and fetch data from the Country Details endpoint on the API. This allowed users to search for country information within the application.

4. Once the data was retrieved from the API, it needed to be stored in the database. To do this, I defined the schema for the country-related data I wanted to send back to the user and created a document on Mongo after receiving a response from the Country Details endpoint. This allowed the application to quickly retrieve data that had already been searched for, without needing to make additional API calls.

5. With the backend and API calls set up, I moved on to implementing the frontend search functionality. I made a call to the appropriate endpoint and stored the data I received in the Redux slice. This allowed users to view the country information they had searched for in the application.

6. The next step was to implement the search history functionality. To do this, I set up an endpoint to check whether an entry for a specific user ID existed in the database. I then implemented the search history functionality to make a call to this endpoint and store the data in the Redux slice. This allowed users to view their search history within the application.

7. To ensure that the application was secure, I implemented protected routes both for the frontend and the backend. This only allowed authorized users to access the search and search history functionalities. For the frontend, if the user tries to access the search functionality without being logged in, it redirects to the login page. This ensured that user data was protected and that only authorized users could access sensitive information.
   
8. I did input validation on the server side for the sign up and login functionalities. I also displayed the errors on the frontend. For the search and search history functionalities I did validation on the frontend to verify whether the user has selected a value before searching and displaying search history only when the user has one.  

## Authentication Mechanism
I used JWT tokens for authentication. I created tokens using the jsonwebtoken library, hashed passwords saved in the database, and sent back the token to the user whenever they signed up or logged in to store in local storage to keep them logged in. To protect the API routes, I sent back the token from the client side and verified it with the secret stored in the backend. This ensured that user data was kept secure and protected against unauthorized access.
Overall, these steps allowed me to build a full-stack application that was both functional and secure, with user authentication, country search functionality, and search history tracking.

## Running the App

## Backend

The server needs to be running first in order to access the api endpoints properly to have a fully operating app on the frontend. 

To run the application on your machine, you need to have Node.js, npm and Git installed. Then, follow these steps:

1. Clone this repository onto your local environment using the command :
  - ```https://github.com/AdeyAmare/MM-FS-Test-Task.git```
2. Navigate to the project directory using the command :
 -  ```cd backend```
3. Install any dependencies using the command :
  - ```npm install```
4. Create a .env file and add the following environment variables: 
    - ```PORT=4000``` - necessary because it's been set as proxy on the frontend
    - ```MONGO_URI=<mongo_uri>```
    - ```SECRET=<jwt_secret>```
    - ```API_KEY=<rapid_api_key>```
5. Start the server using the command: 
  - ```npm run dev```

## Frontend 

1. Clone this repository onto your local environment using the command :
 -  ```git clone https://github.com/AdeyAmare/MM-FS-Test-Task```
2. Navigate to the project directory using the command :
 - ```cd frontend```
 - ```cd fs-task-frontend```
3. Install any dependencies using the command :
 -  ```npm install```
4. Start the server using the command: 
 - ```npm start```

## Demo
## Frontend

1. Signup

![Screenshot (180)](https://github.com/AdeyAmare/MM-FS-Test-Task/assets/56384397/311d6623-29ae-4a88-94ac-ea123874d904)
2. Login

![Screenshot (178)](https://github.com/AdeyAmare/MM-FS-Test-Task/assets/56384397/52db8502-c73c-4b6e-953d-a151e9a6b039)
3. Search

![Screenshot (181)](https://github.com/AdeyAmare/MM-FS-Test-Task/assets/56384397/e853e7e5-56ac-4968-87ae-79c21c41fefd)
4. Search History

![Screenshot (177)](https://github.com/AdeyAmare/MM-FS-Test-Task/assets/56384397/8ad950f7-d634-42e3-b44e-d27e60db737c)

## Libraries Used
# Frontend
- React: a JavaScript library for building user interfaces
- React Router Dom: a popular routing library for React applications
- React Redux: a state container for JavaScript apps
- Redux Toolkit: a toolset for efficient Redux development
- React Icons: a collection of popular icons for React applications
- TailwindCSS: A utility-first CSS framework for UI development
# Backend 
- Node.js: a runtime environment that executes JavaScript code outside of a web browser. It is built on Chrome's V8 JavaScript engine.
- Express.js: a fast and lightweight web framework for Node.js that simplifies the process of building web applications and APIs.
- MongoDB: a powerful NoSQL document-oriented database that uses a flexible and scalable document data model.
- Mongoose: an Object Data Modeling (ODM) library for MongoDB and Node.js that provides a straightforward, schema-based solution to model application data.
- Axios: a Promise-based HTTP client that simplifies making HTTP requests from both the browser and Node.js.
- bcrypt: a JavaScript library for hashing passwords using the bcrypt algorithm, which adds an additional layer of security to user authentication.
- jsonwebtoken: a JavaScript library that allows for the generation and verification of JSON Web Tokens (JWT), which can be used for authentication and authorization in web applications.
- dotenv: a zero-dependency module for Node.js that loads environment variables from a .env file, making it easier to manage environment-specific configuration.

## API Endpoints
## User Authentication Endpoints
- ```POST /api/user/register```: Registers a new user. This is not a protected route and can be accessed by anyone.
- ```POST /api/user/login```: Logs in a user. This is not a protected route and can be accessed by anyone.
## Search and Search History Endpoints
- ```GET api/country/getCountryDetails```: Gets the country details for a specific country code. This is a protected route and requires authorization. It also needs a parameter from the user
- ```GET api/country/getSearchHistory```: Gets the search history for a specific user. This is a protected route and requires authorization.

## Folder Structures
## Frontend
1. The ```src``` folder contains all of the code for the frontend of the application
2. The ```src/components``` folder contains the different components used to build the pages of the application
3. The ```src/pages``` folder contains the pages that are to be rendered to the user.
4. The ```src/redux``` folder contains all the slices used for state management 
5. The ```assets``` folder contains all the images used for building the UI.

## Backend
1. The ```controllers``` folder contains all the functions for making HTTP requests. 
2. The ```route``` folder contains the route handling of the server
3. The ```middleware``` folder contains the middleware for the server. This is where the authentication for protecting routes is done. 
4. The ```server.js``` file contains the code to initialize the server

## Developed by
Adey Amare
