# Music Artist Review WebApp

Check out the web app in action here: 
https://nnealartistdatabase.herokuapp.com/

## General Information

This is a Javascript MEAN stack Web application. 

When the user navigates to the website they are prompted with a dropdown that has a list of genres. Upon choosing a genre they can press a button that displays artists from that genre. For each artist there are two horizontal nav bars. One has a description of the artist. The other displays a list of artist reviews and gives the user the option of creating an artist review themselves. Users can leave a review which is saved to a live database. 


## Technical High Level Info

There is an Angular controller that interacts with the HTML view. Various Angular directives are used to gather user input. The controller sends requests to an API based on the user input.  The API then interacts with a database (model).

The API will receive GET and PUT requests from the Angular controller. The API will then interact with a mongoDB database based on the requests. Changes to the database will be made as needed. The mongoDB database sends data back to the API which sends JSON data back to the Angular controller.

Based on the data, The Angular controller will make the front end html display different data reflecting the interactions with the MongoDB database.

