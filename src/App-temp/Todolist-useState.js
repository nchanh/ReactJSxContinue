import { useState } from 'react';
import './App.css';

const LS_JOB = 'job';

function App() {

  const [jobs, setJobs] = useState(() => {
    const lsJobs = JSON.parse(localStorage.getItem(LS_JOB)) ;

    return lsJobs ?? []
  });
  const [job, setJob] = useState('');

  const addJob = () => {
    setJobs(prev => {
      const newJobs = [...prev, job];

      localStorage.setItem(LS_JOB, JSON.stringify(newJobs));

      return newJobs;
    })
    setJob('');
  };

  const clearAllJobs = () => {
    setJobs([])
    setJob('');

    localStorage.clear(LS_JOB);
  };

  return (
    <div style={{ padding: 20 }}>
      <input
        input="text"
        value={job}
        onChange={e => setJob(e.target.value)}
      />
      <button onClick={addJob}>Add</button>
      <button onClick={clearAllJobs}>Clear all</button>

      <ul>
        {jobs.map((item, i) => (
            <li key={i}>{item}</li>
        ))}
      </ul>
      
    </div>
  );
}

export default App;
