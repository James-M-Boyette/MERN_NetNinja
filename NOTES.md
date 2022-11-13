# MERN Stack (NetNinja) Notes

## Setup

Creating a basic Node + Express app is pretty simple. After creating a repo for your project, initializing it with npm or yarn, and updating the package.json (with scripts, declaring the project's type as ES6 module - `"type": "module",`) you can ...

1. Create a file like 'app.js' or 'server.js',
2. Add several packages to your project: (express, dotenv, and nodemon),
3. import express & dotenv packages + declare `dotenv.config()` (to ensure your app runs dotenv when it starts up),
4. and declare a local constant (like "app") as an 'express' instance (`const app = express();`) within your server logic.

At this point, you technically have a functioning server app. However, you'll want to be able to interact with it. To do this, first add the following logic at the end of your `server.js` file:

    app.listen(process.env.PORT, () => {
      console.log(`listening on port ${process.env.PORT} !`);
    });

If you've set up your `.env` properly, this should display the above message in your server's logs

In Video #3, there are several important sections:

- How to set up your server's basic logic
- How to shift your routes out of that file, and to their own 'routes' folder
- How to use postman

## Front End (React)

After deleting many of the initial files & import statements + the header, he ran `yarn add react-router-dom` / `npm install react-router-dom` in order to load multiple pages.

### CORS error:

Initially, we were using fetch requests with the following url:

    const response = await fetch("http://localhost:4043/api/workouts");

This causes a problem, however, since our FE is calling from the '3000' port to the '4043' port. A CORS error will be thrown. One option is to install the 'CORS' package in our backend. Another option, is to

1. Add `"proxy": "http://localhost:4000",` to our FE's package.json and

2. Remove the host+port portion of this url ...

   const response = await fetch("/api/workouts");

> Remember to restart your React server to register the change to 'package.json'

Note: I'm unsure whether this is a React-specific option (according to him, "React, when it cannot find the given resource, will use the 'proxy'") ... perhaps Vue has something similar?
