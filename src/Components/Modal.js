import React, { useState } from 'react';
import './Modal.css';
const Modal = ({
  closeModal,
  setExerciseName,
  exerciseName,
  setExerciseNote,
  exerciseNote,
  setExerciseType,
  exerciseType,
  setExercises,
  exercises,
}) => {
  const addExercise = (e) => {
    e.preventDefault();
    // setExercises([...exercises, exerciseName]);
    setExercises([
      ...exercises,
      {
        exerciseName: exerciseName,
        exerciseNote: exerciseNote,
        exerciseType: exerciseType,
      },
    ]);
    closeModal(false);
    setExerciseName('');
    setExerciseNote('');
    setExerciseType('');
  };
  const cancelExercise = (e) => {
    closeModal(false);
    setExerciseName('');
    setExerciseNote('');
    setExerciseType('');
  };
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        {/* <h1>Add a new exercise</h1> */}
        <input
          type="text"
          className="modalInput nameInput"
          placeholder="New exercise"
          value={exerciseName}
          onChange={(e) => {
            setExerciseName(e.target.value);
          }}
        />
        <input
          type="text"
          className="modalInput noteInput"
          placeholder="Add your sets, reps, time, etc"
          value={exerciseNote}
          onChange={(e) => {
            setExerciseNote(e.target.value);
          }}
        />
        <input
          type="text"
          className="modalInput typeInput"
          placeholder="Type"
          value={exerciseType}
          onChange={(e) => {
            setExerciseType(e.target.value);
          }}
        />
        <div className="modalBtnContainer">
          <button className="modalBtn closeModalBtn" onClick={cancelExercise}>
            Cancel
          </button>
          <button
            className="modalBtn addModalBtn"
            // onClick={() => closeModal(false)}
            onClick={addExercise}
          >
            Add
          </button>
        </div>
        {/* change button and placeholders depending on instance */}
      </div>
    </div>
  );
};

export default Modal;
