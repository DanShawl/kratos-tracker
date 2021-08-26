import './App.css';
import Workout from './Components/Workout';
//  Home Component

//  Workout Component
//    1.  Input for name of workout
//    2.  List of exercises
//    3.  Button for modal to add exercises

//  Modal Component
//    1.  Input for exercise name, notes, type
//    2.  Button to add to list

//  Exercise Component
//    1.  Take props from modal to create it
//    2.  edit, delete

function App() {
  return (
    <div className="App">
      <Workout />
    </div>
  );
}

export default App;
