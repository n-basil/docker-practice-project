# Docker Practice Project


Project setup:
Create the following folder structure:
/api
/ui
README.md
	(record any notes here of what you did and lessons learned!)
docker-compose.yaml

## Dockerize a React Application
Navigate to the /ui folder
Build a Create-React-App (nothing fancy - out of the box app will work fine!)
Verify `npm start` - will start and run your application and that you can access the default App loading page.
Modify the App to indicate each application author’s name (just in the App.js is fine!) 
Add a Dockerfile for the CRA
Build the Docker image
Run the Docker Image as a Docker Container, 

GOAL: Make sure you can connect to that application on your localhost
	AFTER GOAL: remove the container and application.

##  Use Docker Compose to execute your ui application.
Create a service inside your docker-compose file at the root of the file system.
From the command line at the root of your application run: `docker-compose up`

GOAL: Make sure you can STILL connect to your application on localhost - but using ONLY the docker-compose command

AFTER GOAL: use `docker-compose down`, verify that you can no longer access your application.

Setup a BARE BONES express application.
Navigate to the /api folder
Create an express application set it up to listen to a desired PORT
Set up one root route to ensure the application works
‘/’ route is sufficient enough, when you hit your root route - send a response with something like “My API is up and running Yo!”
Create a Dockerfile for the Express API
Build the Docker image for the API
Run the Docker image as a Docker Container.

GOAL: Make sure you can connect to your API at localhost and you see your response string rendered to the application.

Use Docker Compose to execute your api.
Add a service to your docker-compose.yaml file at the root of your system.
From the command line at the root of your application run: `docker-compose up`

GOAL: Make sure you can STILL connect to your CRA application on localhost, AND that you can connect to your API - but using ONLY the docker-compose command

AFTER GOAL: use `docker-compose down`, verify that you can no longer access your CRA or your API.

Stretch Goals:
Set up your API to return your application author’s names to the CRA
Set up a new endpoint in your API to return the application author’s names in JSON.
Set up the CRA app to “fetch” the app author’s from the express application.
Render to the CRA using state/hooks
Set up a PG Data with application author information.
Using Knex migrations and seeds, create/seed the database with the application’s authors information.
Set up a database to run in docker-compose.
Retrieve the data from the database with your API so that you can send it as a response from the express application
Render the data from the database/express application to the CRA
Create a volume in docker-compose to persist data beyond the life of your containers
Using `docker-compose up` start your application suite.
Connect to the database via command line, using SQL insert a record into the database.
Run `docker-compose down’
Run `docker-compose up`
Navigate to your CRA and verify that the NEW entry you inserted is still visible from the CRA.
