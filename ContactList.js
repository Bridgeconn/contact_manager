// 



var React = require('react');
var ReactDOM = require('react-dom');
var ReactBsTable  = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;


// class ContactList extends React.Component { 

//    constructor() {
//       super();
    
//       this.state = {
//         person: [{
//       id: 1,
//       name: "abc",
//       email: "abc123@gmail.com"
//     },
//       {
//       id:2,
//       name: "def",
//       email: "def123@gmail.com"
//     },
//     {
//       id:3,
//       name: "ghi",
//       email: "ghi123@gmail.com"
//     },
//     {
//       id:4,
//       name: "jkl",
//       email: "jkl123@gmail.com"
//     },
//     {
//       id:5,
//       name: "mno",
//       email: "mno123@gmail.com"
//     }]  
//       }

//    }

//     cellEditProp(e){
//         var contact = this.state.person;
        
//         // this function should return an array of row keys
//         return contact.filter(p => p.id < 3).map(p => p.id);
      
//       }
// render(){
//   // var tableHeaderMarginBottom = {
//   //      marginBottom: 0+ 'px !important'
//   //    };

//   return(
//    <div className ="row">         
//   <div className ="col-md-8">
//   <BootstrapTable bodyHeight={'40em'} data={this.state.person} rowEdit={this.cellEditProp} insertRow={ true } onClick={this.cellEditProp} >
//       <TableHeaderColumn isKey dataField='id' className='th-width'>ID</TableHeaderColumn>
//       <TableHeaderColumn dataField='name' className='th-next-width'>Name</TableHeaderColumn>
//       <TableHeaderColumn dataField='email'>Email</TableHeaderColumn>
//   </BootstrapTable>
//   </div>
//   </div>
//   )
// }
  
// }
// export default ContactList;




class ContactList extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     data: [{
  //       id: 1,
  //       name: "Simon Bailey"
  //     }, {
  //       id: 2,
  //       name: "Thomas Burleson"
  //     }, {
  //       id: 3,
  //       name: "Will Button"
  //     }, {
  //       id: 4,
  //       name: "Ben Clinkinbeard"
  //     }, {
  //       id: 5,
  //       name: "Kent Dodds"
  //     }, {
  //       id: 6,
  //       name: "Trevor Ewen"
  //     }, {
  //       id: 7,
  //       name: "Aaron Frost"
  //     }, {
  //       id: 8,
  //       name: "Joel Hooks"
  //     }, {
  //       id: 9,
  //       name: "Jafar Husain"
  //     }, {
  //       id: 10,
  //       name: "Tim Kindberg"
  //     }, {
  //       id: 11,
  //       name: "John Lindquist"
  //     }, {
  //       id: 12,
  //       name: "Joe Maddalone"
  //     }, {
  //       id: 13,
  //       name: "Tyler McGinnis"
  //     }, {
  //       id: 14,
  //       name: "Scott Moss"
  //     }, {
  //       id: 15,
  //       name: "Robert Penner"
  //     }, {
  //       id: 16,
  //       name: "Keith Peters"
  //     }, {
  //       id: 17,
  //       name: "Lukas Ruebbelke"
  //     }, {
  //       id: 18,
  //       name: "Brett Shollenberger"
  //     }]
  //   }
  // }
  render() {
    // let rows = this.state.data.map(person => {
    //   return <PersonRow key = {
    //     person.id
    //   }
    //   data = {
    //     person
    //   }
    //   />
    // })
    return (
    <table>
  <tr>
    <th>Id</th>
    <th>Name</th>
    <th>Email</th>
  </tr>
  <tr>
    <td>1</td>
    <td><a href="/Maria">Maria Anders</a></td>
    <td><a href="/Maria">Maria123@gmail.com</a></td>
    
  </tr>
  <tr>
    <td>2</td>
    <td><a href="/Francisco">Francisco Chang</a></td>
    <td><a href="/Francisco">MexicoFrancisco@1344@gmail.com</a></td>
  </tr>
  <tr>
    <td>3</td>
    <td><a href="/Roland">Roland Mendel</a></td>
    <td><a href="/Roland" >Roland@123@gmail.com</a></td>
  </tr>
  <tr>
    <td>4</td>
    <td><a href="/Helen" >Helen Bennett</a></td>
    <td><a href="/Helen">Helen!233@gmail.com</a></td>
  </tr>
  <tr>
    <td>5</td>
    <td><a href="/Yoshi">Yoshi Tannamuri</a></td>
    <td><a href="/Yoshi">CanadaYoshi@gmail.com</a></td>
  </tr>
  <tr>
    <td>5</td>
    <td><a href="/Giovanni">Giovanni Rovelli</a></td>
    <td><a href="/Giovanni">efewrnf123@gmail.com</a></td>
  </tr>
</table>
    )
      
  }
}

const PersonRow = (props) => {
  return (
    <tr>
      <td>
        { props.data.id }
      </td>
      <td>
        { props.data.name }
      </td>
    </tr>
  );
}

export default ContactList;





