import { useState, useEffect } from "react";
import "./Quiz.css";

const Quiz = ({ questions, questionNumber ,setQuestionNumber,setCorrectAnswer,correctAnswer}) => {
  const [displayQuestion, setDisplayQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [displayText , setDisplayText] = useState("Select an answer");
  const [answerStyle , setAnswerStyle ] = useState("cursor-pointer hover:bg-indigo-100 hover:border-2 hover:border-indigo-100 rounded mb-4 p-4 font-bold border-2");

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setAnswerStyle("cursor-pointer bg-indigo-100 border-2 rounded mb-4 p-4 font-bold ");
    delay(3000, () => {
      setAnswerStyle(
        a.correct ? "cursor-pointer bg-green-400 border-green-400 text-white border-2 rounded mb-4 p-4 font-bold " : "cursor-pointer bg-rose-500 text-white border-rose-500 border-2 rounded mb-4 p-4 font-bold");
    });


      delay(3000, () => {
     
      if (a.correct) {
        
        setDisplayText("Correct Answer !");
      

        delay(1500, () => {
          setQuestionNumber(questionNumber => questionNumber + 1);
          setCorrectAnswer(correctAnswer+1);
          localStorage.setItem("correctAnswer",JSON.stringify(correctAnswer+1))

          setSelectedAnswer(null);
          setDisplayText("Select an answer");
          
        });
        
      } else {
        setDisplayText("Wrong Answer !");
        
        delay(1500, () => {
          setQuestionNumber(questionNumber => questionNumber + 1);
          setSelectedAnswer(null);
          setDisplayText("Select an answer");
          
        });
      
      }
    // }, 5000);
      })
  };


  useEffect(() => {
    setDisplayQuestion(questions[questionNumber - 1]);
    
  }, [questions, questionNumber]);

  return (
    <>
      <div class="flex flex-wrap mt-16 ">
        <div class="w-full sm:w-3/4 md:w-3/4 flex flex-col p-3 mx-auto">
          <div class=" rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
            <div
              class="text-orange-200 bg-cover font-bold text-4xl border-b-2 border-gray-300 p-4 justify-left text-left "
            >
            <span className="p-3">Question {displayQuestion?.id} </span>
            <p className=" my-6  p-3 font-bold text-black text-3xl">
                {displayQuestion?.question}
                
            </p>
            </div>
            <div
              class="p-4 flex-1 flex flex-col"
            
            >
              <h3 class="mb-4 text-2xl">{displayText}</h3>
              <div class="mb-4 text-grey-darker text-sm flex-1">
                
                    {displayQuestion && displayQuestion.answers.map((a)=> (
                         
                        <p className={selectedAnswer ===a ? answerStyle : "cursor-pointer hover:bg-indigo-100 hover:border-2 hover:border-indigo-100 rounded mb-4 p-4 font-bold border-2"}
                           onClick={() => !selectedAnswer && handleClick(a)}  >
                            {a.text}
                        </p>
                        
                    ))}
              </div>
              <a
                href="/"
                class="border-t border-grey-light pt-2 text-xs text-grey hover:text-red uppercase no-underline tracking-wide"
                
              >
                How well do you know me ?
              </a>
            </div>
          </div>
        </div>

        

        
      </div>
    </>
  );
};

export default Quiz;
