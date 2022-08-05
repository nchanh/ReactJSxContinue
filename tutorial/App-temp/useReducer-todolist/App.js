import { useReducer, useRef, useState } from 'react';
import './App.css';

/*
useReducer
1. Initial state
2. Actions
3. Reducer
4. Dispatch
*/

const initJobs = {
  job: '',
  jobs: []
}

const ACTION_SET_JOB = 'set_job'
const ACTION_ADD_JOB = 'add_job'
const ACTION_DELETE_JOB = 'delete_job'

const setJob = (payload) => {
  return {
    type: ACTION_SET_JOB,
    payload
  }
}

const addJob = (payload) => {
  return {
    type: ACTION_ADD_JOB,
    payload
  }
}

const deleteJob = (payload) => {
  return {
    type: ACTION_DELETE_JOB,
    payload
  }
}

const reducerJobs = (state, action) => {
  let newState = {};

  switch (action.type) {
    case ACTION_SET_JOB:
      newState = {
        ...state,
        job: action.payload
      }
      break

    case ACTION_ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload]
      }
      break

    case ACTION_DELETE_JOB:
      const newJobs = [...state.jobs]
      newJobs.splice(action.payload, 1)

      newState = {
        ...state,
        jobs: newJobs
      }

      break

    default:
      throw new Error('State is error')
  }

  return newState;
}

function App() {
  const [stateJob, dispatch] = useReducer(reducerJobs, initJobs)
  const { job, jobs } = stateJob

  const refInputJob = useRef()

  const handleAddJob = () => {
    dispatch(addJob(job))
    dispatch(setJob(''))
    refInputJob.current.focus()
  }

  return (
    <div style={{ padding: 20 }}>
      <input
        ref={refInputJob}
        type="text"
        value={job}
        onChange={ e => dispatch(setJob(e.target.value)) }
        placeholder="Input job..."
      />
      <button onClick={handleAddJob}>Add job</button>
      <ul>
        {jobs.map((job, i) => (
          <li key={i}>
            {job}&nbsp;
            <span
              style={{ cursor: 'pointer' }}
              onClick={() => dispatch(deleteJob(i))}
            >&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
