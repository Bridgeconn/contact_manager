
var React = require('react');
var ReactDOM = require('react-dom');
var ReactBsTable  = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;

exports.name = function detail() {
  return 'name: xyz';
};
exports.address = 'address: kjfdhj';

class ContactList extends React.Component { 

   constructor() {
      super();
    
      this.state = {
      person: [{
      id: 1,
      name: "abc",
      email: "abc123@gmail.com",
      
    },
      {
      id:2,
      name: "def",
      email: "def123@gmail.com",
      
    },
    {
      id:3,
      name: "ghi",
      email: "ghi123@gmail.com",
      
    },
    {
      id:4,
      name: "jkl",
      email: "jkl123@gmail.com",
     
    },
    {
      id:5,
      name: "mno",
      email: "mno123@gmail.com",
     
    }],
     person_detail: [{
      id: 1,
      name: "abc",
      email: "abc123@gmail.com",
      address: "abc",
      education: "xyz"
    },
      {
      id:2,
      name: "def",
      email: "def123@gmail.com",
      address: "abc",
      education: "xyz"
    },
    {
      id:3,
      name: "ghi",
      email: "ghi123@gmail.com",
      address: "abc",
      education: "xyz"
    },
    {
      id:4,
      name: "jkl",
      email: "jkl123@gmail.com",
      address: "abc",
      education: "xyz"
    },
    {
      id:5,
      name: "mno",
      email: "mno123@gmail.com",
      address: "abc",
      education: "xyz"
    }] ,


      }
      this.person = this.person.bind(this);
      
   };
    person(){
      console.log("hi");
    }
    cellEditProp(e){
        var contact = this.state.person;
        
        // this function should return an array of row keys
        return contact.filter(p => p.id < 3).map(p => p.id);
      console.log("hi")
      }
   
render(){
  function buttonFormatter(cell, row){
  return '<BootstrapButton type="button" className="editButton"><a href="/Detail">view</a></BootstrapButton>';
}


  return(
  <div className ="row">         
  <div className ="col-md-8">
  <BootstrapTable data={this.state.person}>
      <TableHeaderColumn isKey dataField='id'>ID</TableHeaderColumn>
      <TableHeaderColumn dataField="name" >Name</TableHeaderColumn>
      <TableHeaderColumn dataField="email" className="th-td-width">Email</TableHeaderColumn>
      <TableHeaderColumn dataField="button" dataFormat={buttonFormatter}>View</TableHeaderColumn>
  </BootstrapTable>
  </div>
  </div>
  )
}
  
}
export default ContactList;

