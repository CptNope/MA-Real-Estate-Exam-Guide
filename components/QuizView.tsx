import React, { useState, useEffect } from 'react';
import { QuizModule } from '../types';
import { RefreshIcon, CheckIcon, XIcon, ChevronRightIcon, BrainIcon, ListIcon } from './Icons';

interface QuizViewProps {
  module: QuizModule;
}

type QuizMode = 'study' | 'exam' | null;

const QuizView: React.FC<QuizViewProps> = ({ module }) => {
  const [mode, setMode] = useState<QuizMode>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // In exam mode, we store the user's selected index for each question to review later
  // Map<questionIndex, selectedOptionIndex>
  const [userAnswers, setUserAnswers] = useState<Map<number, number>>(new Map());
  
  // In Study mode, this tracks if the *current* question is revealed
  const [isAnswered, setIsAnswered] = useState(false);
  
  const [showSummary, setShowSummary] = useState(false);
  const [isReviewing, setIsReviewing] = useState(false);

  // Reset state when module changes
  useEffect(() => {
    resetQuiz();
  }, [module.id]);

  const resetQuiz = () => {
    setMode(null);
    setCurrentIndex(0);
    setUserAnswers(new Map());
    setIsAnswered(false);
    setShowSummary(false);
    setIsReviewing(false);
  };

  const startQuiz = (selectedMode: 'study' | 'exam') => {
    setMode(selectedMode);
    setCurrentIndex(0);
    setUserAnswers(new Map());
    setIsAnswered(false);
    setShowSummary(false);
  };

  const currentQuestion = module.questions[currentIndex];
  const userSelectedOption = userAnswers.get(currentIndex);

  const handleOptionClick = (index: number) => {
    if (mode === 'study' && isAnswered) return; // Lock choice in study mode
    
    // Save answer
    const newAnswers = new Map(userAnswers);
    newAnswers.set(currentIndex, index);
    setUserAnswers(newAnswers);

    if (mode === 'study') {
      setIsAnswered(true);
    }
  };

  const handleNext = () => {
    if (currentIndex < module.questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setIsAnswered(false);
    } else {
      setShowSummary(true);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    module.questions.forEach((q, idx) => {
      if (userAnswers.get(idx) === q.correctIndex) correct++;
    });
    return correct;
  };

  // Start Screen
  if (!mode) {
    return (
      <div className="w-full max-w-2xl mx-auto pt-12 px-4">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">
           <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-blue-900/30">
              <BrainIcon size={32} />
           </div>
           <h1 className="text-3xl font-bold text-slate-50 mb-3">{module.title}</h1>
           <p className="text-slate-400 mb-8">{module.description}</p>

           <div className="grid gap-4 md:grid-cols-2">
              <button 
                onClick={() => startQuiz('study')}
                className="p-5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-blue-500 transition-all group text-left"
              >
                 <h3 className="font-bold text-white mb-1 group-hover:text-blue-400">Study Mode</h3>
                 <p className="text-xs text-slate-400">Instant feedback. Explanations shown after every answer. Best for learning.</p>
              </button>
              <button 
                onClick={() => startQuiz('exam')}
                className="p-5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-red-500 transition-all group text-left"
              >
                 <h3 className="font-bold text-white mb-1 group-hover:text-red-400">Test Mode</h3>
                 <p className="text-xs text-slate-400">No feedback during quiz. Timer active. Results at the end. Simulates exam day.</p>
              </button>
           </div>
        </div>
      </div>
    );
  }

  // Summary Screen
  if (showSummary && !isReviewing) {
    const score = calculateScore();
    const percentage = Math.round((score / module.questions.length) * 100);
    const isPass = percentage >= 70;

    return (
      <div className="w-full max-w-2xl mx-auto pt-12 px-4">
        <div className="bg-slate-800 rounded-2xl p-8 text-center border border-slate-700 shadow-xl">
          <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 ring-8 ${isPass ? 'bg-green-600 ring-green-900/30' : 'bg-red-600 ring-red-900/30'}`}>
            <span className="text-4xl font-bold text-white">{percentage}%</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-100 mb-2">{isPass ? 'Passed!' : 'Keep Studying'}</h2>
          <p className="text-slate-400 mb-8">
            You scored {score} out of {module.questions.length} questions correctly.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
             <button
              onClick={() => setIsReviewing(true)}
              className="inline-flex items-center justify-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition-colors"
            >
              <ListIcon className="mr-2" size={20} />
              Review Answers
            </button>
            <button
              onClick={resetQuiz}
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors"
            >
              <RefreshIcon className="mr-2" size={20} />
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Determine rendering style for options based on mode
  const getOptionStyle = (optionIndex: number) => {
    const isSelected = userSelectedOption === optionIndex;
    const isCorrect = optionIndex === currentQuestion.correctIndex;
    
    // Default
    let style = "border-slate-700 hover:bg-slate-800 text-slate-300";
    let icon = null;

    if (isReviewing) {
       // Review Mode: Always show correct/incorrect
       if (isCorrect) {
         style = "bg-green-900/20 border-green-500/50 text-green-100";
         icon = <CheckIcon className="text-green-500" size={20} />;
       } else if (isSelected) {
         style = "bg-red-900/20 border-red-500/50 text-red-100";
         icon = <XIcon className="text-red-500" size={20} />;
       } else {
         style = "border-slate-800 text-slate-500 opacity-50";
       }
    } else if (mode === 'study') {
      // Study Mode: Show colors ONLY if answered
      if (isAnswered) {
        if (isCorrect) {
          style = "bg-green-900/20 border-green-500/50 text-green-100";
          icon = <CheckIcon className="text-green-500" size={20} />;
        } else if (isSelected) {
          style = "bg-red-900/20 border-red-500/50 text-red-100";
          icon = <XIcon className="text-red-500" size={20} />;
        } else {
          style = "border-slate-800 text-slate-500 opacity-50";
        }
      } else if (isSelected) {
         // Selected but not confirmed? (Currently study mode auto-confirms on click, so this case is rare unless we change logic)
         style = "bg-blue-600/20 border-blue-500 text-blue-100";
      }
    } else {
      // Exam Mode: Just show selection, no colors
      if (isSelected) {
         style = "bg-blue-600/20 border-blue-500 text-blue-100";
      }
    }
    
    return { style, icon };
  };

  // Handling "Next" vs "Finish"
  const isLastQuestion = currentIndex === module.questions.length - 1;

  return (
    <div className="w-full max-w-3xl mx-auto pt-8 pb-20 px-4 md:px-8">
      {/* Header */}
      <div className="mb-8">
        {isReviewing ? (
           <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-slate-50">Reviewing Answers</h1>
              <button onClick={() => setShowSummary(false)} className="text-sm text-blue-400 hover:underline">Back to Summary</button>
           </div>
        ) : (
            <div className="flex justify-between items-end mb-4">
              <h1 className="text-2xl font-bold text-slate-50">{module.title}</h1>
              <span className="text-sm font-medium text-slate-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                {currentIndex + 1} / {module.questions.length}
              </span>
            </div>
        )}
        
        {/* Progress Bar */}
        {!isReviewing && (
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-300 ease-out ${mode === 'exam' ? 'bg-red-500' : 'bg-blue-500'}`}
              style={{ width: `${((currentIndex + 1) / module.questions.length) * 100}%` }}
            />
          </div>
        )}
      </div>

      {/* Question Card */}
      <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden shadow-lg relative">
        
        {/* Mode Indicator */}
        {!isReviewing && (
          <div className={`absolute top-0 right-0 px-3 py-1 rounded-bl-lg text-xs font-bold uppercase tracking-wider ${mode === 'exam' ? 'bg-red-900/50 text-red-400' : 'bg-blue-900/50 text-blue-400'}`}>
            {mode} Mode
          </div>
        )}

        <div className="p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-semibold text-slate-100 mb-6 leading-relaxed">
            {currentQuestion.question}
          </h3>

          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const { style, icon } = getOptionStyle(index);
              // Disable clicking if:
              // 1. In Study Mode and already answered
              // 2. In Review Mode (always disabled)
              const isDisabled = isReviewing || (mode === 'study' && isAnswered);

              return (
                <button
                  key={index}
                  onClick={() => handleOptionClick(index)}
                  disabled={isDisabled}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 flex justify-between items-center ${style}`}
                >
                  <span className="font-medium">{option}</span>
                  {icon}
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer Logic */}
        <div className="bg-slate-800/50 border-t border-slate-800 p-6 flex justify-end items-center">
           {/* In Study Mode, show explanation if answered */}
           {mode === 'study' && isAnswered && (
              <div className="flex-1 mr-4 animate-in fade-in">
                 <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">Explanation</span>
                 <p className="text-slate-300 text-sm leading-relaxed">{currentQuestion.explanation}</p>
              </div>
           )}
           {/* In Review Mode, always show explanation */}
           {isReviewing && (
               <div className="flex-1 mr-4">
                 <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">Explanation</span>
                 <p className="text-slate-300 text-sm leading-relaxed">{currentQuestion.explanation}</p>
              </div>
           )}

           {/* Buttons */}
           {isReviewing ? (
             <div className="flex space-x-3">
                <button 
                  onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
                  disabled={currentIndex === 0}
                  className="px-4 py-2 rounded bg-slate-700 text-white disabled:opacity-50"
                >
                  Prev
                </button>
                <button 
                  onClick={() => setCurrentIndex(Math.min(module.questions.length - 1, currentIndex + 1))}
                  disabled={currentIndex === module.questions.length - 1}
                  className="px-4 py-2 rounded bg-slate-700 text-white disabled:opacity-50"
                >
                  Next
                </button>
             </div>
           ) : (
              <button
                onClick={handleNext}
                // In Exam mode, enable next immediately. In Study mode, wait for answer.
                disabled={mode === 'study' && !isAnswered}
                className="inline-flex items-center px-6 py-2.5 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 disabled:text-slate-500 text-white font-medium rounded-lg transition-colors shadow-lg shadow-blue-900/20"
              >
                {isLastQuestion ? 'Finish Quiz' : 'Next Question'}
                <ChevronRightIcon className="ml-2" size={18} />
              </button>
           )}
        </div>

      </div>
    </div>
  );
};

export default QuizView;