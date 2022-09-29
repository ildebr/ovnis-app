import logo from './logo.svg';
// import './App.css';
import {useState} from 'react'
import axios from "axios";

function App() {

  const [formData, setFormData] = useState({
    email: "a@a.com",
    password: "a",
  });

  const { email, password } = formData;

  const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};




const body = JSON.stringify({
  email,
  password
});

const bodyy = JSON.stringify({

})

const continue_with_google = async () => {
  try{
    const res = await axios.post(`http://127.0.0.1:8000/api/token/`, body, config);
    console.log(res)

    const config2 = {
      headers: {
        'Accept': 'application/json',
        'Authorization': `JWT ${res.data.access}`,
      }
    }

    try{
      const resp = await axios.get(`http://127.0.0.1:8000/api/sightings/34a95e66-05eb-400e-be88-95a267ffb867`, config);
      console.log(resp)

    } catch(err2){}

  } catch(err){}

  // console.log(res)
}

continue_with_google()


// if (res.status === 200){
//   console.log('exito')
//   console.log(res)
// }
// else{
//   console.log('error')
// }
  return (
    <div className="App">
      {}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
