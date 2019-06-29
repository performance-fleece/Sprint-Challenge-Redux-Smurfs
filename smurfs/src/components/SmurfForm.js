import React from 'react';

class SmurfForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { age, height, name } = this.state;
    const newsmurf = { age, name, height };
    this.props.addSmurf(newsmurf);
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className='smurf-form'>
        <form>
          <input
            type='text'
            name='name'
            value={this.state.name}
            placeholder='Name...'
            onChange={this.handleChange}
          />
          <input
            type='number'
            name='age'
            value={this.state.age}
            placeholder='Age...'
            onChange={this.handleChange}
          />
          <input
            type='text'
            name='height'
            value={this.state.height}
            placeholder='Height...'
            onChange={this.handleChange}
          />
        </form>
        <button onClick={this.handleSubmit}>ADD TO VILLAGE</button>
      </div>
    );
  }
}

export default SmurfForm;
