import React from 'react';

function PastSearches(props) {
  console.log(props.pastSearches);
  return (
    <div>
      {props.pastSearches.map( (search, i) => {
        return (
          <div className="pastSearches" key={i}>
            <b>Search {i+1}.</b>
            <div>
              <em>Person 1: </em>
              {search.timezones[0]}: {search.times[0]}
            </div>
            <div>
              <em>Person 2:</em>
              {search.timezones[1]}: {search.times[1]}
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default PastSearches;