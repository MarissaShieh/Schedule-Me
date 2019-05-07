import React from 'react';
import moment from 'moment';

function SaveBtn(props) {

  function saveToDatabase() {
    console.log('clicked',props);
    console.log('cookie', document.cookie);
    if (!document.cookie) {
      console.log('making new cookie');
      var dateNow = new Date();
      var newDateObj = moment.utc(dateNow).add(1, 'm');
      var generatedUsername = `${Math.ceil(Math.random() * 100000) + Math.floor(Math.random() * 5000)}`
      document.cookie = `username=${generatedUsername};expires=${newDateObj}`
    } else {
      console.log('cookie exists');
    }
  }

  return (
    <button onClick={saveToDatabase}>
      Save search
    </button>
  )
}

export default SaveBtn;