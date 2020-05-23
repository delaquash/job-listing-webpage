import React, { useState, useEffect } from 'react';
import JobBoard from "./components/JobBoard";
import data from './data.json';
import './App.css';

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => setJobs(data) ,[]);
  return (
    <div className="App">
      <h1 className="text-4xl">Hello Olaide, You will be a great developer</h1>
      {
        jobs.length === 0 ? (
          <p>Jobs are fetching</p> )
          :
          (
            jobs.map(job => (
              <JobBoard job={job} key={job.id} />
            ))
          )
      }
    </div>
  );
}

export default App;
