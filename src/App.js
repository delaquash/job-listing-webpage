/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import JobBoard from "./components/JobBoard";
import data from './data.json';
import './App.css';

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters]= useState([]);

  useEffect(() => setJobs(data) ,[]);
  const filterFunction = ({role, level, tools, languages}) =>{

    if(filters.length === 0){
      return true;
    }
    const tags =[role, level];
    if(tools){
        tags.push(...tools);
    }
     if(languages){
      tags.push(...languages);
    }
   return filters.every(filter => tags.includes(filter))
  };

  const handleTagClick = (tag) => {
    // Avoid re-adding the tag
    if (filters.includes(tag)) return;
    setFilters([...filters, tag]);
  };

  const handleFilterClick=(passedFilter) => {
    setFilters(filters.filter((f)=> f !== passedFilter)
    )};

    const clearFilters=()=> {
      setFilters([]);
    };

  const filteredJobs = jobs.filter(filterFunction);
  return (
    <>
     <header className="bg-teal-500 mb-12">
       <img src="/images/bg-header-desktop.svg"
       alt="bg-image" className="w-full"
        />
     </header>
     <div className="container m-auto">
       {filters.length > 0 && (
         <div className={`flex bg-white shadow-md
            mb-16 -my-20 mx-10 p-6 rounded relative z-10`}>
            {filters.map((filter) =>
                <span className="cursor-pointer"
                   onClick={() =>handleFilterClick(filter)}>
                   <span className="text-teal-400 bg-teal-150
                  font-bold mr-4 cursor-pointer
                  mb-4 p-2 rounded lg:mb-0">
                  {filter}
                  </span>
                  <span className="text-teal-400 bg-teal-150
                  font-bold mr-4 cursor-pointer
                  mb-4 p-2 rounded sm:mb-0">×</span>
                  </span>
       )}
       <button className='font-bold text-gray-700 ml-auto'
          onClick={clearFilters}>
         Clear
       </button>
       </div>
       )}
        {jobs.length === 0 ? (
          <p>Jobs are fetching</p> )
          :
          (
            filteredJobs.map((job => (
              <JobBoard
              job={job}
              key={job.id}
              handleTagClick={handleTagClick}
              />
            ))
          )
          )}
     </div>
    </>
  );
}

export default App;
