This is a Javascript MEAN stack Web application. 

When the user navigates to the website, they are prompted with a dropdown that has a list of genres. Upon choosing a genre they can press a button that displays artists from that genre. For each artist there are two horizontal nav bars. One has a description of the artist. The other one displays a list of artist reviews, and then gives the user the option of creating an artist review themselves.

There is an Angular controller that interacts with the HTML and sends requests to an API.

The API will receive GET and PUT requests and will make changes to a mongo db database based on the requests. The API will then send JSON responses back to the angular controller.

Based on the JSON requests, The angular controller will make the front end html display different data reflecting the changes made to the MongoDB database.

