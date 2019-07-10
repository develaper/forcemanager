const AllUsers = (props) => {

var users = props.users.map((user) => {
    return(
      <div key={user.id}>
        <User user={user} handleDelete={props.handleDelete} handleUpdate={props.handleUpdate}/>
      </div>
    )
  })

return(
      <div class='col-md-12'>
        {users}
      </div>
    )
}
