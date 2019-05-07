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

  componentDidUpdate(){
    if (this.state.saved !== this.props.savedMessage) {
      this.setState({saved: this.props.savedMessage});
    }
  }
  
  saveToDatabase() {
    var timeToSave = 30;
    if (!document.cookie) {
      var dateNow = new Date();
      var newDateObj = moment.utc(dateNow).add(timeToSave, 'm');
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
        this.setState({
          saved: `Search saved to database for ${timeToSave} minutes`
        });
        this.props.newlySaved({timezones: this.props.timezones, times: this.props.times}, `Search saved to database for ${timeToSave} minutes`);
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