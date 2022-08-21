import './style/style.scss'; 
import React from 'react';

const questions = [
    {
      title: 'React is - ... ?',
      variants: ['library', 'framework', 'application'],
      correct: 0,
    },
    {
      title: 'Component - is ... ',
      variants: ['application', 'part of an application or page', 'i dont know'],
      correct: 1,
    },
    {
      title: ' What is JSX?',
      variants: [
        'simple HTML',
        'function',
        't  his is the same HTML, but with the ability to execute JS-code',
      ],
      correct: 2,
    },
  ];
  
  function Result({correct}) {
    return (
      <div className="result">
        <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
        <h2> {correct} correct answer from {questions.length}</h2>
        <a href='/'>
            <button>Retry</button>
        </a>
      </div>
    );
  }
  
  function Game({step, question, onClickVariant}) {
    const percentage = Math.round(step / questions.length * 100);
    console.log(percentage);

    return (
      <>
        <div className="progress">
          <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
        </div>
        <h1>{question.title}</h1>
        <ul>
            {
               question.variants.map((text, index) => (
               <li onClick={() => onClickVariant(index)} key={text}>{text}</li>)
            )}
        </ul>
      </>
    );
  }
  
  function App() {

    const [step, setStep] = React.useState(0);
    const [correct, setCorrect] = React.useState(0);
    const question = questions[step];

    const onClickVariant = (index) => {
        console.log(step, index);
        setStep(step + 1);

        if(index == question.correct) {
            setCorrect(correct + 1);
        }
    }

    return (
      <div className="App">
        {
            step != questions.length 
            ? <Game step={step} question={question} onClickVariant={onClickVariant}/>
            : (<Result correct={correct}/>
        )}
      </div>
    );
  }
  
  export default App;