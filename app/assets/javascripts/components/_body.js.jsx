class Body extends React.Component {

constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.addNewUser = this.addNewUser.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateUser = this.updateUser.bind(this)
  }

componentDidMount(){
    fetch('/api/v1/users.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ users: data }) });
  }
handleFormSubmit(name, email, quote){
  let body = JSON.stringify({user: {name: name, email: email, quote: quote} })

fetch('http://localhost:3000/api/v1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: body,
  }).then((response) => {return response.json()})
  .then((user)=>{
    this.addNewUser(user)
  })

}

addNewUser(user){
  this.setState({
    users: this.state.users.concat(user)
  })
}

handleDelete(id){
    fetch(`http://localhost:3000/api/v1/users/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
        this.deleteUser(id)
      })
  }

deleteUser(id){
  newUsers = this.state.users.filter((user) => user.id !== id)
  this.setState({
    users: newUsers
  })
}

handleUpdate(user){
  fetch(`http://localhost:3000/api/v1/users/${user.id}`,
  {
    method: 'PUT',
    body: JSON.stringify({user: user}),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => {
      this.updateUser(user)
    })
}

updateUser(user){
  let newUsers = this.state.users.filter((f) => f.id !== user.id)
  newUsers.push(user)
  this.setState({
    users: newUsers
  })
}

render(){
    return(
      <div class="row" style={bodyStyle}>
        <div class='col-md-12'>
          <p>Team and Members</p>
        </div>
        <NewUser  handleFormSubmit={this.handleFormSubmit}/>
        <AllUsers users={this.state.users} handleDelete={this.handleDelete} handleUpdate = {this.handleUpdate}/>
      </div>
    )
  }
}
