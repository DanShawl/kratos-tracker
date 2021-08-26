import React, { useState } from 'react';
import ExerciseItem from '../ExerciseItem';
import Modal from './Modal';
import './Workout.css';
const Workout = () => {
  const [openModal, setOpenModal] = useState(false);
  const [exerciseName, setExerciseName] = useState('');
  const [exerciseNote, setExerciseNote] = useState('');
  const [exerciseType, setExerciseType] = useState('');
  const [exercises, setExercises] = useState([]);

  return (
    <div>
      {openModal && (
        <Modal
          closeModal={setOpenModal}
          setExerciseName={setExerciseName}
          exerciseName={exerciseName}
          setExerciseNote={setExerciseNote}
          exerciseNote={exerciseNote}
          setExerciseType={setExerciseType}
          exerciseType={exerciseType}
          setExercises={setExercises}
          exercises={exercises}
        />
      )}
      <div className="workoutCard">
        <input
          className="workoutName"
          type="text"
          placeholder="untitled workout"
        />
        <button
          className="createExercise"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Add Exercise
        </button>
        {/* {console.log(exercises)} */}
        <ExerciseItem
          exercises={exercises}
          exerciseName={exerciseName}
          exerciseNote={exerciseNote}
          exerciseType={exerciseType}
        />
      </div>
    </div>
  );
};

export default Workout;
