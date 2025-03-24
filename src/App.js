import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';

function App() {

  // Jira 연동 중
  // 자동화 테스트중(상태변경)
  // 자동화 테스트중(2)
  //22

  // 자동화 테스트중(3)
  const getredisTest = async () => {
    
    try{
      const res = await axios.get("http://localhost:8080/redis/get?key=hi123");
      console.log(res)
      console.log(res.data)
    }catch(err){
      console.error(err)
    }

  }

  const postredisTest = async () => {
    
    try{
      const res = await axios.post("http://localhost:8080/redis/set?key=hi123&value=sungjun1231541243");

      console.log(res.data)
    }catch(err){
      console.error(err)
    }

  }

  const test = async () => {
    try {
      const res = await axios.get("http://localhost:8080/test");

      console.log(res.data)

    }catch(e){
      console.error(e)
    }
  }


  useEffect(() => {
    getredisTest()
    test()
  }, [])


  
  return (
    <div className="App">
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

        <button onClick={getredisTest}>redis로 get 요청</button>
        <button onClick={postredisTest}>redis로 post 요청</button>
      </header>
    </div>
  );
}

export default App;
