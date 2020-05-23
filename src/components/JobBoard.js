import React from 'react';

const JobBoard =({ job: {
    id,
    company,
    location,
    logo,
    recent,
    role,
    featured,
    position,
    level,
    postedAt,
    contract,
    languages,
    tools

} })=>{
    return (
        <div className="flex bg-white shadow-lg m-4 p-4">
            <div>
                <img src={logo} alt={company} />
            </div>
            <div className="ml-2">
                <h3 className="font-bold text-xl text-teal-500">
                    {company}
                </h3>
                <h2>{position}</h2>
                <p>
                    {postedAt} . {contract} * {location}
                </p>
            </div>


        </div>
    )
}

export default JobBoard;
