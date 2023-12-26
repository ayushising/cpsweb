// LoginForm.js
import React, { useState } from 'react';
import './LoginForm.css'; // Import the CSS file

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
    console.log('Username:', username, 'Password:', password);
  };

  return (

    <div style={{textAlign:"center"}}>
      <div className="maintitle">Credit Processing System</div>
      <div className="login"> 
      <div>
      <input
             type="text"
             value={username}
            onChange={handleUsernameChange}
             placeholder="Username"
      />
      </div>
      <div>
      <input
             type="password"
             value={password}
             onChange={handlePasswordChange}
             placeholder="Enter your password"
      />
      </div>
      </div>

    <button style={{backgroundColor:"maroon", alignItems:"center", marginTop:"20px"}} type="submit" onClick={handleSubmit}>Proceed</button>
    </div>
    // <div className="login-container">
    //   <form onSubmit={handleSubmit}>
    //     <label>
    //       Username:
    //       <input
    //         type="text"
    //         value={username}
    //         onChange={handleUsernameChange}
    //         placeholder="Enter your username"
    //       />
    //     </label>
    //     <label>
    //       Password:
    //       <input
    //         type="password"
    //         value={password}
    //         onChange={handlePasswordChange}
    //         placeholder="Enter your password"
    //       />
    //     </label>
    //     <button type="submit">Login</button>
    //   </form>
    // </div>
  );
};

export default LoginForm;
