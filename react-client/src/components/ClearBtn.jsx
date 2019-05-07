import React from 'react';
import styles from './ClearBtn.module.css';
import $ from 'jquery';

function ClearBtn (props) {

  function handleClearBtn(){
    $.ajax({
      type: 'DELETE',
      url: '/searches',
      data: {
        cookieID: document.cookie
      },
    })
      .done(() => {
        props.clearHistory();
      })
      .fail(() => console.log('failed to clear data from database'))
  }

  return(
    <button onClick={handleClearBtn}>
      Clear history
    </button>
  )

}

export default ClearBtn;