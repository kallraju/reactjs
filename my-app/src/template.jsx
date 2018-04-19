import React  from 'react';
class Xyz extends React.Component {
    render() {
       return (
          <div>
             <h1>xyz {this.props.name}</h1>
          </div>
       );
    }
  }
  export default Xyz