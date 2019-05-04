import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  componentDidMount() {
  }

  render () {
    return (<div>
      <h1>Item List</h1>
      <List items={this.state.items}/>
    </div>)
  }
}
