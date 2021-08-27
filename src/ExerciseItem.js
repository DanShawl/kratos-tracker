import React, { useState } from 'react';
import './Components/ExerciseItem.css';
import { BiMenu, BiEdit, BiTrashAlt } from 'react-icons/bi';

const ExerciseItem = ({ exercises }) => {
  return (
    <div>
      <ul>
        {exercises.map((exercise) => {
          return (
            <li className="exerciseItem">
              <div className="exerciseItemLeft">
                <BiMenu className="dragBtn" />
                <div className="exerciseItemInfo">
                  <h3>{exercise.exerciseName}</h3>
                  <p>{exercise.exerciseNote}</p>
                </div>
              </div>
              <div className="exerciseItemRight">
                <div className="exerciseItemBtns">
                  <BiEdit />
                  <BiTrashAlt />
                </div>
                <p className="exerciseItemType">{exercise.exerciseType}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ExerciseItem;

// add the workout name to a workout object with the exercises array
// const [exerciseName, setExerciseName] = useState('');
// const [exerciseNote, setExerciseNote] = useState('');
// const [exerciseType, setExerciseType] = useState('');
// const [exercises, setExercises] = useState([]);

// const addExercise = (e) => {
//   e.preventDefault();
//   setExercises([
//     ...exercises,
//     {
//       exerciseName: exerciseName,
//       exerciseNote: exerciseNote,
//       exerciseType: exerciseType,
//     },
//   ]);
//   setExerciseName('');
//   setExerciseNote('');
//   setExerciseType('');
// };
// return (
//   <div>
//     <form action="">
//       <input
//         type="text"
//         placeholder="Exercise name"
//         value={exerciseName}
//         onChange={(e) => setExerciseName(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Exercise note"
//         value={exerciseNote}
//         onChange={(e) => setExerciseNote(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Exercise note"
//         value={exerciseType}
//         onChange={(e) => setExerciseType(e.target.value)}
//       />
//       <button onClick={addExercise}>Add Exercise</button>
//     </form>
