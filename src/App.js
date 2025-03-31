import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';

function App() {

  // Jira 연동 중
  // 자동화 테스트중(상태변경)
  // 자동화 테스트중(2)
  // 자동화 테스트중(이번엔 될듯)
  // 로그인 구현
  // 코드리뷰 테스트 주석
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
// import React, { useEffect, useState } from "react";
// import "./App.css";

// // 불필요한 컴포넌트
// function UnusedComponent() {
//   return <div>Not used</div>;
// }

// function App() {


//   const [count, setCount] = useState(0);
//   const greeting = "Hello" + ", " + "World!"; // 문자열 연결 → 템플릿 리터럴로 추천 가능
//   const unused = 42; // 사용되지 않는 변수

//   let numbers = [1, 2, 3];
//   let doubled = [];
//   for (let i = 0; i < numbers.length; i++) {
//     doubled.push(numbers[i] * 2); // map으로 대체 가능
//   }

//   const getredisTest = async () => {
    
//     try{
//       const res = await axios.get("http://localhost:8080/redis/get?key=hi123");
//       console.log(res)
//       console.log(res.data)
//     }catch(err){
//       console.error(err)
//     }

//   }

//   const postredisTest = async () => {
    
//     try{
//       const res = await axios.post("http://localhost:8080/redis/set?key=hi123&value=sungjun1231541243");

//       console.log(res.data)
//     }catch(err){
//       console.error(err)
//     }

//   }

//   const test = async () => {
//     try {
//       const res = await axios.get("http://localhost:8080/test");

//       console.log(res.data)

//     }catch(e){
//       console.error(e)
//     }
//   }

//   useEffect(() => {
//     console.log("Component mounted");
//     // eslint-disable-next-line
//   }, []);

//   return (
//     <div className="App">
//       <h1>{greeting}</h1>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

// export default App;
