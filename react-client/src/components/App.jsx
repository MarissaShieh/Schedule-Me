import React from 'react';
import User from './User.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      users: 2,
    }
  }

  componentDidMount() {
  }

  render () {
    const users = [];
    let usersLeftToRender = this.state.users;
    while (usersLeftToRender > 0) {
      users.unshift(<User key={usersLeftToRender} userNum={usersLeftToRender}/>);
      usersLeftToRender -= 1;
    }

    return (
      <div>
        {users}
      </div>
    );
  }
}

export default App;
