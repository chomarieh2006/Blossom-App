# Blossom
# ![blossom_logo-removebg-preview](https://github.com/chomarieh2006/Blossom-App/assets/71354208/71737ae6-4593-491c-ae98-b169081bc7f2)  
Team Members: Sneha Shekhar, Marie Cho, Aanya Singh
## Project goals and features:
- Our goal is to fuel productivity in our users and give them motivation to do their daily tasks.
- Our app features a plant that grows based on the number of tasks completed.
- The plant resets every day.
- Our app also tracks the user's history of tasks (completed and non-completed) so the user can track their progress.
- Our users can create tasks that they need to complete throughout the day.
- Possible implementation of pre-set tasks (that stay the same on all the days).
## Project Architecture:
- Four screens:
  - Home Page (Plant that grows)
  - To-Do List (Create task, mark it as complete)
  - Task History/ Calendar (tracks progress)
  - Zoom in on a day (Select a day on the task history calendar, and this screen displays the stats from that day!)
- We have a nav bar on each page for easy navigation.
- [app layout.pdf](https://github.com/chomarieh2006/Blossom-App/files/14824910/app.layout.pdf)
### Elements:
- To-Do List:
  - Here, you can add new tasks for yourself to do.
  - When you’re done with something, check it so that it can count as completed. Uncheck to mark as incomplete again. This links to plant growth!
  - Resets every day.
- Plant Growth:
  - With each task completed, the plant grows! If you uncheck a task, then the plant un-grows. The plant maxes out at the 11th stage! Once you have completed more than 11 tasks, you have reached full growth and can keep doing tasks for your own satisfaction <3
  - The number of tasks complete and incomplete is also displayed below the plant.
  - ADDED PERK: You can name your plant :D
- Task History:
  - We wanted users to be able to access their task history and see how productive they were on previous days. We used AsyncStorage, a library provided by React Native, to store this information in the memory instead of using a database. The data is stored even after the app is closed. Users click on a day on the calendar which displays the number of complete and incomplete tasks they had by the end of the day
## Resources Used:
- Expo
- React Native
- Visual Studio Code
- NPX Calendar Component: https://www.npmjs.com/package/react-native-calendars/v/1.1286.0
- ASYNC Storage System: https://reactnative.dev/docs/asyncstorage


