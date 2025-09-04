import { useState } from "react";
import style from "../assets/css/quiz-card.module.css";

function QuizCard({ question , answer , icon }) {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const handleToggleQuiz = () => setIsAnswerVisible(!isAnswerVisible);

  return (
    <div className="grid grid-cols-12 min-h-screen">
      <div className="col-span-12 px-[15px] md:px-0 md:col-span-8 md:col-start-3 lg:col-span-6 lg:col-start-4 flex justify-center items-center min-h-screen">
        <div
          className={`${style.quizContainer} relative bg-white border-2 border-orange-400 p-12 text-center rounded-2xl shadow-lg overflow-x-hidden align-middle duration-300`}
        >
          {/* Question Icon */}
          <div className="inline-block mb-3">
            <img className="w-[5rem]" src={icon} alt="light-bulb" />
          </div>

          {/* Question Text */}
          <h2 className="text-[28px] font-bold capitalize mb-10">
            {question}
          </h2>

          {/* Toggle Button */}
          <button
            onClick={handleToggleQuiz}
            className="relative group mx-auto flex items-center justify-center h-14 pl-[5rem] pr-6 bg-yellow-400 text-slate-950 font-semibold rounded-lg shadow-lg shadow-yellow-400/30 hover:shadow-xl hover:rotate-[3deg] transition-all duration-300 will-change-transform whitespace-nowrap mb-6 cursor-pointer"
          >
            {/* SVG Icon */}
            <div className="absolute left-0 top-0 mt-1 ml-1 h-12 w-12 p-[0.35rem] bg-white text-slate-950 rounded-md bottom-1 transition-all duration-300">
              {isAnswerVisible ? (
                <svg
                  className="h-full w-full"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                  <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="3" y1="3" x2="21" y2="21" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg
                  className="h-full w-full"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              )}
            </div>

            {/* Button Text */}
            <span className="capitalize">{isAnswerVisible ? "Hide Answer" : "Show Answer"}</span>

            {/* Ping Notification */}
            <div className="absolute -top-2 -right-2">
              <div className="absolute h-5 w-5 bg-orange-400 rounded-full animate-ping opacity-75"></div>
              <div className="h-5 w-5 bg-orange-600 rounded-full scale-[90%] relative"></div>
            </div>
          </button>

          {/* Answer */}
          <div className={`${isAnswerVisible ? style.answerShow : style.answerHide}`}>
            <p className="text-xl font-bold capitalize bg-orange-300 p-2 rounded">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizCard;
