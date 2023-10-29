import { useState } from "react";
import "../css/style.css"
const FromControlle = () => {
    const [user,setUser] = useState({name:"",email:"",password:""});
    const {name,email,password} = user
    const handleSubmit = (e) =>{
        console.log("form submited");
        e.preventDefault();
        console.log(user);
    }
    const handleChange = (e) =>{
       
        setUser({...user,[e.target.name]:e.target.value})
        
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit} >
                <div className = 'formControlle' >
                <label htmlFor="">Name :  </label>
                <input type="text" name="name" 
                value={name}
                 id="name" required 
                onChange={handleChange} />
                </div>
                <div className = 'formControlle' >
                    <label htmlFor="">Email : </label>
                    <input type="email" name="email" id="email"
                    value={email}
                     required onChange={handleChange} />
                </div>
                <div className = 'formControlle' >
                    <label htmlFor="Password">Password : </label>
                    <input type="password" name="password" 
                    value={password}
                    id="password" onChange={handleChange} />
                </div>
                <div>
                    <button type="submit" > Register</button>
                </div>
            </form>
        </div>
    );
};

export default FromControlle;