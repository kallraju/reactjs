import React, { Component } from 'react';
import './App.css';
import Xyz from './template';

class App extends Component {
  constructor() {
     super();
     this.state = {      
        data: 
        [
           {
              "id":1,
              "name":"Foo",
              "age":"20"
           },
           {
              "id":2,
              "name":"Bar",
              "age":"30"
           },
           {
              "id":3,
              "name":"Baz",
              "age":"40"
           }
        ]        
     }
  }
  render() {
     return (
        <div>
           <Header/>
           <table border="1">
             <thead>  
               <th>ID</th><th>Name</th><th>Age</th>
             </thead>
              <tbody>
                 {this.state.data.map((person, i) => <TableRow key = {i} 
                    data = {person} />)}
              </tbody>
           </table>           
           <Xyz name="WoW"/>        
           <Xyz name="WoW"/>        
        </div>
           
     );
  }
}
class Header extends React.Component {
  render() {
     return (
        <div>
           <h1>Header</h1>
        </div>
     );
  }
}
class TableRow extends React.Component {
  render() {
     return (
        <tr>
           <td>{this.props.data.id}</td>
           <td>{this.props.data.name}</td>
           <td>{this.props.data.age}</td>
        </tr>
     );
  }
}
export default App;