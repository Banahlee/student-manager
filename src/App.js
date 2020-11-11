import React, { Component } from 'react';
import './App.css';
import GetUsers from './components/GetUsers';
import Search from './components/Search';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      filterText: "",
      filterTags: "",
      tagArray: [],
      loading: true,
      users: []
    }
  }

  async componentDidMount() {
    const response = await fetch("https://api.hatchways.io/assessment/students");
    const data = await response.json();
    this.setState({ users: data.students, loading: false });
    this.state.users.map(user => {
      Object.assign(user, { userTags: [] });
    })
  }

  updateSearchResults = (value) => {
    this.setState({
      filterText: value
    })
  }

  updateTagResults = (value) => {
    this.setState({
      filterTags: value
    })
  }

  addTag = (newTag, id) => {
    this.setState((prevState) => {
      const currentUser = prevState.users.filter(user => user.id === id)[0];

      return {
        users: [
          {
            ...currentUser,
            userTags: [
              ...currentUser.userTags,
              {
                newTag,
                id,
              },
            ]
          },
          ...prevState.users.filter(user => user.id !== id),
        ]
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <GetUsers
          filterText={this.state.filterText}
          updateSearchResults={this.updateSearchResults.bind(this)}
          updateTagResults={this.updateTagResults}
          filterText={this.state.filterText}
          filterTags={this.state.filterTags}
          loading={this.state.loading}
          users={this.state.users}
          addTag={this.addTag.bind(this)}
        //tagArray = {this.state.tagArray}
        />
      </React.Fragment>

    );
  }

}

export default App;
