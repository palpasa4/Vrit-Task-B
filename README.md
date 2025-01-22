# Vrit Task B

### Set up instructions:
1. Install Node.js:
   First, you need to install Node.js. Node.js is a JavaScript runtime used to build and run React apps.
- Download and install Node.js from the link: https://nodejs.org/en/download .
- During installation, npm (Node Package Manager) will be installed automatically. npm is used to install libraries and dependencies for your React project.
- To check if Node.js and npm were installed correctly, run these commands in your terminal:
node -v
npm -v

2. Create a React Project:
- To create a new React project, use the following command in your terminal:
npx create-react-app kanban-board-react
This will generate a new folder named kanban-board-react with all the necessary files for a React app.

3. Navigate to the Project Directory:
Change to the newly created project directory:
cd kanban-board-react

5. Clone the Repository Files:
Clone the Kanban board files from your GitHub repository:
bash
git clone https://github.com/palpasa4/Vrit-Task-B.git .
This will bring in the necessary Kanban board files into your project.

6. Install Project Dependencies:
Once the files are cloned, install the necessary dependencies such as react-beautiful-dnd using terminal command:
npm install react-beautiful-dnd

7. Start the Development Server:
After installing the dependencies, start the development server to view the Kanban board in your browser using the terminal command:
npm start
This will open the application at http://localhost:3000 in your default browser.

### Technology Choices and Rationales:
#### Technology and tools used:
- React, React DnD (Drag and Drop), JavaScript (ES6+ features), CSS, Conditional Rendering and State Management.

#### Rationales:
- React: 
- React DnD: A powerful library that simplifies drag-and-drop functionality in React
- JavaScript (ES6+ features) :Modern JavaScript syntax (e.g., arrow functions, destructuring, spread operator)
- CSS: Used for styling the components and layout of the Kanban board.
- Conditional Rendering: Allows the UI to change dynamically based on certain conditions (e.g., if there's no destination in a drag-and-drop action)
- State Management: React's useState hook allows for efficient tracking and updating of the application state (like the tasks in columns).

### Known Limitations:
- It only provides the basiclayout of the Kanban Board, listing out the tasks into categories.
- Basic and additional features are yet to be implemented such as Drag and drop feature, using TypeScript for strict mode and so on.
  
### Future improvements:
- To assure that the basic functionalities work well.
- To add the additional features like Add column creation/deletion, implement card search and filtering, etc.

### Basic layout of the Kanban Board:
![kanban](https://github.com/user-attachments/assets/2b1d4f55-6c4a-4c35-897e-b112c379d7fd)

