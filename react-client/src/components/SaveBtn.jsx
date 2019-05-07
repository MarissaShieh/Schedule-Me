import React from 'react';
import moment from 'moment';
import $ from 'jquery';
import styles from './SaveBtn.module.css';

class SaveBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: ''
    }
    this.saveToDatabase = this.saveToDatabase.bind(this);
  }
  
  saveToDatabase() {
    if (!document.cookie) {
      var dateNow = new Date();
      var newDateObj = moment.utc(dateNow).add(1, 'm');
      var generatedUsername = `${Math.ceil(Math.random() * 100000) + Math.floor(Math.random() * 5000)}`;
      document.cookie = `username=${generatedUsername};expires=${newDateObj}`
    }
    
    $.ajax({
      type: 'POST',
      url: '/searches',
      data: {
        cookieID: document.cookie,
        timezones: this.props.timezones,
        times: this.props.times
      },
      // contentType: 'application/json'
    })
      .done(() => {
        this.setState({saved: "Search saved to database for 30 minutes"});
      })
      .fail(() => console.log('failed to save to database'))
    
  }

  render() {
    return (
      <div className={styles.savedBtnBox}>
        <button onClick={this.saveToDatabase}>
          Save search
        </button>
        <div className={styles.savedAlert}>
          {this.state.saved}
        </div>
      </div>
    );
  }
}

export default SaveBtn;