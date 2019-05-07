import React from 'react';
import styles from './PastSearches.module.css';
import ClearBtn from './ClearBtn.jsx'

function PastSearches(props) {
  return (
    <div className={styles.pastSearchesBox}>
    <hr />
    <div className={styles.titleAndClearBtn}>
      <h3>Past Searches: </h3>
      <ClearBtn clearHistory={props.clearHistory}/>
    </div>
      {props.pastSearches.map( (search, i) => {
        return (
          <div key={i} className={styles.eachPastSearch}>
            <b>Search {i+1}.</b>
            <div>
              <em>Person 1: </em>
              {search.timezones[0]}: {search.times[0]}
            </div>
            <div>
              <em>Person 2: </em>
              {search.timezones[1]}: {search.times[1]}
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default PastSearches;