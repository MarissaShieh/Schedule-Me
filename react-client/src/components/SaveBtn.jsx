import React from 'react';
import moment from 'moment';
import $ from 'jquery';

function SaveBtn(props) {
  console.log(props);

  function saveToDatabase() {
    if (!document.cookie) {
      var dateNow = new Date();
      var newDateObj = moment.utc(dateNow).add(1, 'm');
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
      .done(() => console.log('saved to database'))
      .fail(() => console.log('failed to save to database'))
    
  }

  return (
    <button onClick={saveToDatabase}>
      Save search
    </button>
  )
}

export default SaveBtn;