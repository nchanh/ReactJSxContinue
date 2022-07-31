import { useReducer, useRef } from 'react';
import { setJob, addJob, deleteJob } from './actions'
import reducer, { initJobs } from './reducer'

/*
useReducer
1. Initial state
2. Actions
3. Reducer
4. Dispatch
*/

function App() {
  const [stateJob, dispatch] = useReducer(reducer, initJobs)
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
