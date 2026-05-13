import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { defaultQuizData } from '../data/quizData'
import type { Question } from '../data/quizData'

export default function Quiz() {
  const navigate = useNavigate()
  const [questions, setQuestions] = useState<Question[]>(defaultQuizData)
  const [currentStep, setCurrentStep] = useState(0)
  const [score, setScore] = useState(0)

  useEffect(() => {
    const saved = localStorage.getItem('@quiz_questions')
    if (saved) {
      const parsed = JSON.parse(saved) as Question[]
      if (parsed.length > 0) setQuestions(parsed)
    }
  }, [])

  const currentQuiz = questions[currentStep]

  const handleAnswer = (option: string) => {
    let newScore = score

    if (option === currentQuiz.answer) {
      newScore = score + 1
      setScore(newScore)
    }

    const nextStep = currentStep + 1

    if (nextStep < questions.length) {
      setCurrentStep(nextStep)
    } else {
      navigate('/resultado', { state: { finalScore: newScore, total: questions.length } })
    }
  }

  if (!currentQuiz) {
    return (
      <div className="min-h-screen bg-quiz-dark text-white flex items-center justify-center">
        Nenhuma pergunta encontrada.
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-quiz-dark flex flex-col items-center p-6 pt-12">
      <div className="mb-8">
        <h1 className="text-quiz-yellow text-2xl font-black italic">QUIZ</h1>
      </div>

      <div className="w-full max-w-md">
        <div className="bg-white p-8 rounded-t-quiz flex items-center gap-4 shadow-xl">
          <div className="bg-quiz-yellow p-3 rounded-full flex-shrink-0">
            <span className="text-xl">💡</span>
          </div>

          <h2 className="text-black font-semibold text-lg leading-tight">
            {currentQuiz.question}
          </h2>
        </div>

        <div className="bg-quiz-purple p-6 rounded-b-quiz space-y-4">
          {currentQuiz.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="w-full bg-white text-black py-4 px-6 rounded-full font-bold text-center hover:bg-quiz-yellow active:scale-95 transition-all shadow-md"
            >
              {option}
            </button>
          ))}
        </div>

        <p className="text-white/50 text-center mt-6 font-medium">
          Pergunta {currentStep + 1} de {questions.length}
        </p>
      </div>
    </div>
  )
}