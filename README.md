# Weather UI Frontend + Deployment

To install, clone repository and run command "npm install" in root directory. If self-hosting backend, run "npm install" in "backend" directory as well.

This project consists of a React frontend and a Node.js backend. 
The Node.js backend code is being hosted on an AWS EC2 with ip available on request.

The frontend is a simple web page that takes in a 5 digit zip code and creates a POST request to the backend hosted in AWS.

The Node.js backend takes a POST request to its url in addition to the requested zip code as a query. It then creates a GET request to the Google Geocode API which returns location data (note, if self-hosting backend code, a .env file will need to be created containing your Google API key).
After the location data is fetched, the coordinates are then sent in a GET request to open-meteo.com, which returns a weather data object that is returned to the frontend.
