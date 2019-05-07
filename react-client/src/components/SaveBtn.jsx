import React from 'react';
import moment from 'moment';
import $ from 'jquery';

function SaveBtn(props) {
  let saved;
  function saveToDatabase() {
    if (!document.cookie) {
      var dateNow = new Date();
      var newDateObj = moment.utc(dateNow).add(30, 'm');
      var generatedUsername = `${Math.ceil(Math.random() * 100000) + Math.floor(Math.random() * 5000)}`
      document.cookie = `username=${generatedUsername};expires=${newDateObj}`
    }
    $.ajax({
      type: 'POST',
      url: '/searches',
      data: {
        cookieID: document.cookie,
        timezones: props.timezones,
        times: props.times
      },
      // contentType: 'application/json'
    })
      .done(() => {
        console.log('saved to database'); 
        saved = "Search saved to database for 30 minutes"
      })
      .fail(() => console.log('failed to save to database'))
    
  }

  return (
    <div>
      <button onClick={saveToDatabase}>
        Save search
      </button>
      {saved}
    </div>
  )
}

export default SaveBtn;