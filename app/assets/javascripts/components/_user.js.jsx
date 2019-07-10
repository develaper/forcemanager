class User extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      editable: false
    }
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleEdit(){
    if(this.state.editable){
      let name = this.name.value
      let email = this.email.value
      let quote = this.quote.value
      let id = this.props.user.id
      let user = {id: id, name: name, quote: quote, email: email}
      this.props.handleUpdate(user)
    }
    this.setState({
      editable: !this.state.editable
    })
  }
  render(){
    let name = this.state.editable ? <input type='text' ref={input => this.name = input} defaultValue={this.props.user.name}/>:<p>{this.props.user.name}</p>
    let email = this.state.editable ? <input type='text' ref={input => this.email = input} defaultValue={this.props.user.email}/>:<p>{this.props.user.email}</p>
    let quote = this.state.editable ? <input type='text' ref={input => this.quote = input} defaultValue={this.props.user.quote}/>:<p>{this.props.user.quote}</p>
    return(
      <div  style={divStyle}>
        <p  style={pStyle}>{name}</p>
        <p  style={pStyle}>{email}</p>
        <p  style={pStyle}>{quote}</p>
        <button onClick={() => this.handleEdit()}>{this.state.editable? 'Submit' : 'Edit'}</button>
        <button onClick={() => this.props.handleDelete(this.props.user.id)}>Delete</button>
      </div>
    )
  }
}
