import './App.css';
import yellowBlob from "./yellowBlob.png"
import blueBlob from "./blueBlob.png"
import React from 'react';
import Question from './question.js'
import quesData from "./quesdata.js"

function App() {
  const [start, setStart] = React.useState(true);
  const [result, setResult] = React.useState(false);
  const [seloption, setSelOption] = React.useState([0,0,0,0,0]);
  const[score, setScore] = React.useState(0);

  function gamestart(){
    setStart(prevStart => !prevStart);
  }

  function calcscore(){
    var tempscore = 0;
    for(let i=0;i<5;i++){
      if(seloption[i]===quesData.data.questions[i].correctoptn){
        tempscore+=1;
      }
    }
    console.log(tempscore);
    setScore(tempscore);
  }

  function checkans(){
    if(result){
      window.location.reload();
    }
    else{
      calcscore();
      setResult(true);
    }
  }

  const allquestions = quesData.data.questions.map(q => {
    return (
        <Question
        id = {q.id} question = {q.question} optn1 = {q.optn1} optn2 = {q.optn2} optn3 = {q.optn3} optn4 = {q.optn4} correctoptn = {q.correctoptn} result={result} seloption={seloption} setSelOption={setSelOption}  
        />
    )
  })

  return (
    <div className="App">
      <div className="maindiv">
        <img src={yellowBlob} alt="" className="yellowBlob"></img>
        <img src={blueBlob} alt="" className="blueBlob"></img>
        {start && <div className="start">
          <h1 className="quizzy">Quizzy</h1>
          <p>Check your General Knowledge!!</p><br></br>
          <button onClick={gamestart} className="startbtn">Start Quiz</button>
        </div>}
        {!start && <div className="start">
          {allquestions}
          <button className="submit" onClick={checkans}>{result===true ? 'Retry' : 'Check Answers'}</button>
          {result && <p className="scoredisplay">You have score {score}/5 points.</p>}
        </div>}
      </div>
    </div>
  );
}

export default App;
