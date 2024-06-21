import React, { useState } from 'react'
import styled from 'styled-components'  // Corrected the import statement
import BackgroundImage from '../components/BackgroundImage'
import Header from '../components/Header'
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { firebaseAuth } from '../utils/firebase-config'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate =useNavigate()

    const [showPassword, setShowPassword]=useState(false);
    const [formValues , setFormValues]=useState({
        email:"",
        password:"",
    });
    const handleSignIn= async ()=>{
        try{
          const {email , password} = formValues;
          await signInWithEmailAndPassword(firebaseAuth,email,password )
        }catch(Error){
            console.log("Error");
        }
    }
    onAuthStateChanged(firebaseAuth,(currentUser)=>{
        if(currentUser) navigate("/");
    })
  return (
    <Container >
      <BackgroundImage />
      <div className="content">
        <Header />
        <div className="form-container flex-column a-center j-center">
          <div className="form flex column a-center j-center">
            <h3>Login</h3>

          </div>
          <div className="container flex column">
            
          </div>
        </div>
      
      </div>
    </Container>
  )
}

const Container = styled.div`
 position: relative;
 .content{
    position : absolute;
    top:0;
    left:0;
    background-color:rgba(0 ,0, 0,0.5);
    height:100vh;
    width:100vw;
    display:grid;
    grid-template-rows:15vh ,85vh;
 .body{
    gap: 1rem;
    .text{
        gap: 1rem;
        text-align:center;
        font-size: 2rem;
        h1{
            padding: 0 25rem;
        }
    }
    .form{
        display:grid;
        grid-template-columns:${({showPassword})=>showPassword?"1fr 1fr":"2fr 1fr"  };
        width:60%;
        input{
            color : black;
            border:none;
            padding : 1.5rem;
            font-size:1.2rem;
            border: 1px solid black;
            &:focus{
                outline:none;
            }
        }
    }
    button{
    padding: 0.5rem 1rem;
    background-color:#e50914;
    border:none;
    cursor:pointer;
    color:white;
    border-radius :0.2rem;
    font-weight:bold;
    font-size: 1.05rem;

    }
    button{
        padding: 0.5rem 1rem;
    background-color:#e50914;
    border:none;
    cursor:pointer;
    color:white;
    border-radius :0.2rem;
    font-weight:bold;
    font-size: 1.05rem;

    }
 }
}
`;

export default Login;
