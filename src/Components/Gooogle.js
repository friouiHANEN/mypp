import React, { useState } from 'react'
import GoogleLogin from 'react-google-login'

const Gooogle = () =>  {
    const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')
    ? JSON.parse(localStorage.getItem('loginData'))
    : null
    );
    const handleFailure= (result) => {
       alert(result); 
    };
    const handleLogin = async(googleData) => {
        const res = await fetch('/api/google-login', {
            method: 'POST',
            body: JSON.stringify({
                token: googleData.tokenId,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
const data = await res.json();
setLoginData(data);
localStorage.setItem('loginData', JSON.stringify(data));
            };
    const handleLogout = () => {
        localStorage.removeItem('loginData');
        setLoginData(null);
    }
  return (
  <div>
       
        <div>
            {
                loginData ? (
                    <div>
                        <h3>You logged in as {loginData.email}</h3>
                
                <button  className="goolesign" onClick={handleLogout}> Logout</button>
            
        </div>
                )
                :(
                    <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Log in with Google"
            onSucess={handleLogin}
            onFailure={handleFailure}
            cookiePolicy={'single_host_origin'}
            >
        </GoogleLogin>

                )
}
        
 </div>
 </div>  
  )
}


export default Gooogle