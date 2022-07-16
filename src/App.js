
import './App.css';
import { useState ,useEffect} from 'react';

function App() {

  const [formValues,setFormValues]=useState({});
  const [formErrors,setFormErrors]=useState({});
  const [isSubmit,setIsSubmit]=useState(false);
  const handleChange=(e)=>{
    console.log(e.target);
    const {name,value}=e.target;
    setFormValues({...formValues,[name]:value});
    console.log(formValues);
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  useEffect(()=>{
    console.log(formErrors);
    if(Object.keys(formErrors).length===0 && isSubmit){
      console.log(formValues);
    }
  })
  const validate=(values)=>{
const errors={};
const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
if(!values.username){
  errors.usename="username is required";
}
if(!values.email){
  errors.email="email is required";
}
else if(!regex.test(values.email)){
  errors.email="This is not valid email";
}
  if(!values.password){
  errors.password="password is required";
}else if(values.password.length<4){
  errors.password="Password must be more than 4 characters";
}
return errors;
  }
  return (
 <div className="container">
 {Object.keys(formErrors).length===0 && isSubmit ?(<div className='ui -message success'>Signed in successfully</div>):(
 <pre>{JSON.stringify(formValues,undefined,2)}</pre>)}
<form onSubmit={handleSubmit} style={{left:"50%",top: "50%",marginLeft: "-25%",position:"absolute",marginTop: "-25%",boxSizing:"border-box",padding:"2rem",border:"4px solid hsl(0,0%,90%)",display:"grid",gridTemplateColumns:"1fr,1fr",gap:"2rem",backgroundColor:"gray "}}>
  <h1>Login form</h1>
  <div className="ui divider"></div>
  <div className="ui form">
  <div className="field">
  <label>Username</label>
<input type="text" name="username" placeholder="Username" value={formValues.username} onChange={handleChange}/>
</div>
<p>{formErrors.usename}</p>
<div className="field">
<label>Email</label>
<input type="email" name="email" placeholder="email"  value={formValues.email} onChange={handleChange}/>
</div>
<p>{formErrors.email}</p>
<div className="field">
<label>password</label>
<input type="password" name="password" placeholder="password"  value={formValues.password} onChange={handleChange}/>
</div>
<p>{formErrors.password}</p>
<button className="btn btn-primary">Submit</button>
</div>

</form>


 </div>
  );
}

export default App;
