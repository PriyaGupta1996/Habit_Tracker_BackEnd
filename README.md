# Habit_Tracker_BackEnd
### About
This web app helps users to create beautiful habits that they struggle to build. With the help of this web app they will be frequently notified with the reminders, will take response if they completed the goal of the day. It also provides beautiful quotes on the basis of the habit category selected. Not only this , user can also visualize thier performance in the pictorial form i.e in charts and percentages. It helps the user to give a sense of achievement and also keep them consistent.

### Local setup instructions
- npm install 
- Run a postgres DBMS locally.
- Create a .env in root directory and configure the following variables with your postgres variables respectively. 
```
DB_HOST
DB_USER
DB_PASSWORD
DB_NAME
```
- npm run knex migrate:latest
- npm run devStart