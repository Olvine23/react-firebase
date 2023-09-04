import Form from "./components/common/Form";
import "./App.css";
import { Route, BrowserRouter as Router, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import app from "./firebaseConfig";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import HomePage from "./components/HomePage";

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    if (authToken) {
      navigate('/home')
    }
  }, [])
  let navigate = useNavigate()
  const handleAction = (id) => {
    console.log(id);
    console.log(email)
    const authentication = getAuth();
   

    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password).then(
        (res) => {
          navigate('/home')
          sessionStorage.setItem('Auth Token', res._tokenResponse.refreshToken)
        }
      );
    }
  };
  return (
 
      <div className="App">
        <>
          <Routes>
            <Route
              path="/login"
              element={
                <Form
                  setEmail={setEmail}
                  setPassword={setPassword}
                  title="Login"
                  handleAction={() => handleAction(1)}
                />
              }
            />
            <Route
              path="/register"
              element={
                <Form
                  setEmail={setEmail}
                  setPassword={setPassword}
                  title="Register"
                  handleAction={() => handleAction(2)}
                />
              }
            />

            <Route path="/home" element ={<HomePage/>} />
          </Routes>
        </>
      </div>
 
  );
}

export default App;
