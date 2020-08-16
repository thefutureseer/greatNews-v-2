import React from 'react';


export default class PersonList extends React.Component {
  state = {
    loading: true,
    persons: null
  };

  async componentDidMount() {
    const url = `https://api.randomuser.me/`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({persons: data.results[0], loading: false})
    console.log(data.results[0]);
  };

  render() {
    return (
      <div>
        {this.state.loading || !this.state.persons ? (
        <div>loading..</div>) : (
        <div>
          <div>{this.state.persons.name.title}</div>
          <div>{this.state.persons.name.last}</div>
          <div>{this.state.persons.name.first}</div>
          <img src={this.state.persons.picture.large} />
        </div>)}
      </div>
    )
  }
};