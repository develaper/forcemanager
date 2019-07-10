const NewUser = (props) => {

  let formFields = {}

  return(
    <div  class='col-md-12'>
      <form onSubmit={ (e) => { e.preventDefault(); props.handleFormSubmit(formFields.name.value, formFields.email.value, formFields.quote.value); e.target.reset();}
}>
        <input ref={input => formFields.name = input} placeholder='Enter the name of the user' label='name'/>
        <input ref={input => formFields.email = input} placeholder='Enter the email of the user' label='email'/>
        <input ref={input => formFields.quote = input} placeholder='Enter a quote' label='quote'/>
        <button>Submit</button>
      </form>
    </div>
  )
}
