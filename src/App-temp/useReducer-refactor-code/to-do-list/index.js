import { useReducer, useRef } from 'react';
import { setJob, addJob, deleteJob } from './actions'
import logger from './logger';
import reducer, { initJobs } from './reducer'

/*
useReducer
1. Initial state
2. Actions
3. Reducer
4. Dispatch
*/

function App() {
  const [state, dispatch] = useReducer(logger(reducer), initJobs)
  const { job, jobs } = state

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
