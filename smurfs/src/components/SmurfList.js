import React from 'react';
import Smurf from './Smurf';

class SmurfList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: ''
    };
  }

  render() {
    return (
      <div className='smurf-list'>
        {this.props.smurfs.map(smurf => {
          return <Smurf smurf={smurf} key={smurf.id} />;
        })}
      </div>
    );
  }
}

export default SmurfList;
