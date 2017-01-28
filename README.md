Check out the web app in action here: 
https://nnealartistdatabase.herokuapp.com/

This is a Javascript MEAN stack Web application. 

When the user navigates to the website, they are prompted with a dropdown that has a list of genres. Upon choosing a genre they can press a button that displays artists from that genre. For each artist there are two horizontal nav bars. One has a description of the artist. The other displays a list of artist reviews, and then gives the user the option of creating an artist review themselves.


Technical Info:

There is an Angular controller that interacts with the HTML view and sends requests to an API. The API then interacts with a database (model).

The API will receive GET and PUT requests and will make changes to a mongoDB database based on the requests. The API will then send JSON responses back to the angular controller.

Based on the JSON requests, The angular controller will make the front end html display different data reflecting the changes made to the MongoDB database.

