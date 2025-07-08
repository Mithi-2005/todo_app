
React Todo App - Simple Project
==============================

📁 Project Name:
----------------
Todo App using React

📜 Description:
---------------
This is a simple Todo List application built using React.js. The app allows users to:
- Add new tasks
- View the list of tasks
- Delete tasks from the list

🧰 Technologies Used:
---------------------
- React.js (Functional Components & Hooks)
- JavaScript (ES6+)
- Bootstrap (for styling)

📦 Features:
------------
✅ View default tasks  
✅ Add your own custom tasks  
✅ Delete individual tasks  
✅ Input validation (prevents adding empty tasks)

📁 Folder Structure:
--------------------
- App.js         => Main React component
- App.css        => Basic styling (optional/custom)
- index.js       => Entry point
- public/        => Static files
- package.json   => Project metadata & dependencies

▶️ How to Run the App Locally:
------------------------------
1. Make sure Node.js and npm are installed on your system.
   ➤ https://nodejs.org/

2. Create your React app if not already:
   npx create-react-app todo-app

3. Replace contents of App.js with the provided code.

4. Install Bootstrap (optional but recommended):
   npm install bootstrap

5. Import Bootstrap in `index.js` or `App.js`:
   import 'bootstrap/dist/css/bootstrap.min.css';

6. Start the app:
   npm start

7. The app will open in your browser at:
   http://localhost:3000

📌 Notes:
---------
- Ensure the `todoInput` is not empty before adding to the list.
- IDs are unique but `nextID` isn't stored in state — on every re-render, it resets. For production use, use `uuid` or a proper ID generator.

🛠️ Improvements (Optional):
---------------------------
- Store todos in `localStorage` to persist across refresh.
- Add Edit feature to modify existing tasks.
- Add timestamps or priority levels.
- Use UUIDs instead of hardcoded `nextID`.
- Add dark mode/theme switcher.

👨‍💻 Author:
------------
Mithilesh Konagalla

📅 Created:
----------
July 2025

