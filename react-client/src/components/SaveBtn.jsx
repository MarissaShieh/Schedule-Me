import React from 'react';

function SaveBtn(props) {

  function saveToDatabase() {
    console.log('clicked',props);
    console.log(document.cookie);
  }

  return (
    <button onClick={saveToDatabase}>
      Save search
    </button>
  )
}

export default SaveBtn;