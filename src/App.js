import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Quiz from "./components/Quiz";
import { useState , useEffect } from "react";
import Score from "./components/Score";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [name, setName] = useState(null);
  const questions = [
    {
      id: 1,
      question: "Last movie i watched ? ",
      answers: [
        {
          text: "Thor",
          correct: false,
        },
        {
          text: "Minions",
          correct: false,
        },
        {
          text: "Kotaro Lives Alone",
          correct: true,
        },
        {
          text: "Nice View",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "How many siblings i have ?",
      answers: [
        {
          text: "0",
          correct: false,
        },
        {
          text: "1",
          correct: true,
        },
        {
          text: "2",
          correct: false,
        },
        {
          text: "3",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Do I have any pets? if so, what kind ? ",
      answers: [
        {
          text: "Dog",
          correct: false,
        },
        {
          text: "Car",
          correct: false,
        },
        {
          text: "Goat",
          correct: false,
        },
        {
          text: "None",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "What is my MBTI personality type? ",
      answers: [
        {
          text: "ISTJ",
          correct: true,
        },
        {
          text: "INFJ",
          correct: false,
        },
        {
          text: "ENTJ",
          correct: false,
        },
        {
          text: "ESTJ",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "How many ex-girlfriend I have ? ",
      answers: [
        {
          text: "1",
          correct: false,
        },
        {
          text: "0",
          correct: true,
        },
        {
          text: "2",
          correct: false,
        },
        {
          text: "3/3+",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "What is the major I take in Uni ? ",
      answers: [
        {
          text: "Informatics Engineering",
          correct: false,
        },
        {
          text: "Information System",
          correct: false,
        },
        {
          text: "Computer Science w/ Artificial Intelligence",
          correct: false,
        },
        {
          text: "Computer Science",
          correct: true,
        },
      ],
    },
    {
      id: 7,
      question: "What are the tools I use for this project ? ",
      answers: [
        {
          text: "HTML + CSS + Javascript",
          correct: false,
        },
        {
          text: "React + Bootstrap ",
          correct: false,
        },
        {
          text: "React + Tailwind",
          correct: true,
        },
        {
          text: "Nextjs + Tailwind",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "How many populations in my home country (10 August 2022)",
      answers: [
        {
          text: "278,751,259",
          correct: false,
        },
        {
          text: "276,362,519 ",
          correct: false,
        },
        {
          text: "270,203,917",
          correct: false,
        },
        {
          text: "279,752,394",
          correct: false,
        },
      ],
    }

  ];

  return (
    <>
      {!name ? (
        <>
        <Nav/>
        <Home setName={setName} />

        </>
      ) : (
        <>
       
       { questionNumber !== 9 ? (
        <>
        <Nav/> 
       <Quiz questions={questions} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} setCorrectAnswer={setCorrectAnswer}/>  
      </>
       ) : (
      <Score correctAnswer={correctAnswer} name={name}/>
       )  
       }
      </>

      )}
    </>
  );
}

export default App;
