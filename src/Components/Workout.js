import React, { useState } from 'react';
import ExerciseItem from '../ExerciseItem';
import Modal from './Modal';
import './Workout.css';
import { BiPlus } from 'react-icons/bi';

const Workout = () => {
  const [openModal, setOpenModal] = useState(false);
  const [exerciseName, setExerciseName] = useState('');
  const [exerciseNote, setExerciseNote] = useState('');
  const [exerciseType, setExerciseType] = useState('');
  const [exercises, setExercises] = useState([]);

  return (
    <div>
      <BiPlus
        className="createExercise"
        onClick={() => {
          setOpenModal(true);
        }}
      />
      {openModal && (
        <Modal
          className="modal"
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
          className="workoutName font-link"
          id="workoutName"
          type="text"
          placeholder="Add a title"
        />

        {/* <BiPlus
          className="createExercise"
          onClick={() => {
            setOpenModal(true);
          }}
        /> */}
        {/* <button
          className="createExercise"
          onClick={() => {
            setOpenModal(true);
          }}
        >
        
          <BiPlus />
        </button> */}
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
