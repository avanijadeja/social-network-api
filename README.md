# social-network-api

Social Network API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

# Description.

Social Network API is for a social network web application where users can share their thoughts,react to friend's thoughts and create a friend list.In this application I used express.js for routing, a MongoDB database, and the Mongoose ODM.Here I used moment date library to modify current date format.using MongoDB this application can handle large amounts of unstructured data.

In this Social Network API,

- WHEN User enter the command to invoke the application, THEN server is started and the Mongoose models are synced to the MongoDB database.

- WHEN User open API GET routes in Insomnia for users and thoughts,THEN the data for each of these routes is displayed in a formatted JSON.

- WHEN User test API POST, PUT, and DELETE routes in Insomnia,THEN User able to successfully create, update, and delete users and thoughts in my database.

- WHEN User test API POST and DELETE routes in Insomnia,THEN User able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list.

- WHEN User delete paticular user, THEN for that particular user assoicated thought also deleted.

So through application, I learned mongodb, mongoose, express, moment so now I can now make application with mongodb.mongoose and express.

# Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

# Installation

This Social Network API,

- first user have to do npm init -y to generate package.json file.

- Then using npm install, User first have to install express,moment,mongodb,mongoose.

- Then using npm run start user can start application.

# Usage

![GET_ALL_USERS](./public/images/GET_ALL_Users.png)
![GET_ALL_THOUGHTS](./public/images/GET_ALL_THOUGHTS.png)
![CREATE_USER](./public/images/CREATE_User.png)
![CREATE_THOUGHT](./public/images/CREATE_Thought.png)
![CREATE_REACTION](./public/images/CREATE_Reaction.png)
![CREATE_FRIEND](./public/images/CREATE_Friend.png)
![GET_ALL_USERS_THOUGHTS](./public/images/GET_ALL_USERS_THOUGHTS.gif)
![GET_SINGLE_USER_THOUGHT_BYID](./public/images/GET_SINGLE_USER_THOUGHT_BYID.gif)
![POST_PUT_DELETE_USER](./public/images/CREATE_UPDATE_DELETE_USER.gif)
![POST_DELETE_USERFREIND](./public/images/POST_DELETE_FriendList.gif)
![POST_DELETE_REACTIONS](./public/images/POST_DELETE_Reaction.gif)

A walkthrough video demonstrating the functionality of the application - https://drive.google.com/file/d/1JlPLfVbdwa_GlckSDAT2WtbMNwAAD46S/view?usp=sharing

The URL of the GitHub repository - https://github.com/avanijadeja/social-network-api

# Credits

- https://mongoosejs.com/docs/guide.html

- https://www.mongodb.com/docs/

- https://devdocs.io/express/

- https://momentjs.com/

# License

This project is using the MIT License.

# Badges

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
