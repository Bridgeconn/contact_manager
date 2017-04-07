// 



var React = require('react');
var ReactDOM = require('react-dom');
var ReactBsTable  = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;


class ContactList extends React.Component { 

   constructor() {
      super();
    
      this.state = {
        person: [{
      id: 1,
      name: "abc",
      email: "abc123@gmail.com"
    },
      {
      id:2,
      name: "def",
      email: "def123@gmail.com"
    },
    {
      id:3,
      name: "ghi",
      email: "ghi123@gmail.com"
    },
    {
      id:4,
      name: "jkl",
      email: "jkl123@gmail.com"
    },
    {
      id:5,
      name: "mno",
      email: "mno123@gmail.com"
    }]  
      }

   }

    cellEditProp(e){
        var contact = this.state.person;
        
        // this function should return an array of row keys
        return contact.filter(p => p.id < 3).map(p => p.id);
      
      }
render(){
  // var tableHeaderMarginBottom = {
  //      marginBottom: 0+ 'px !important'
  //    };

  return(
   <div className ="row">         
  <div className ="col-md-8">
  <BootstrapTable bodyHeight={'40em'} data={this.state.person} rowEdit={this.cellEditProp} insertRow={ true } onClick={this.cellEditProp} >
      <TableHeaderColumn isKey dataField='id' className='th-width'>ID</TableHeaderColumn>
      <TableHeaderColumn dataField='name' className='th-next-width'>Name</TableHeaderColumn>
      <TableHeaderColumn dataField='email'>Email</TableHeaderColumn>
  </BootstrapTable>
  </div>
  </div>
  )
}
  
}
export default ContactList;