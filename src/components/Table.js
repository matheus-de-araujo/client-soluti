import React, { Component } from 'react';

// import { Table } from 'reactstrap';

  
class Table_user extends Component {
  state = { 
    users: [] 
  };

  getUser() {
    const Data = this.props.user[0];
    this.setState({ users: Data });
  }

  render() {
    const { users } = this.state;
    console.log(users);


    return (
      <div>
        {console.log(users)}
      </div>
    )
  }
}

export default Table_user;