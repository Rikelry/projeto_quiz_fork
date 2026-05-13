import { useNavigate } from 'react-router-dom'
import LogoQuiz from '../assets/Logo-Quiz.png'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-quiz-dark flex flex-col items-center justify-center p-6 text-center">
      <div className="mb-12 flex flex-col items-center">
        <div className="relative">
          <img src={LogoQuiz} alt="Logo quiz" />
        </div>

        <h1 className="text-quiz-yellow text-7xl font-black mt-8 tracking-tighter uppercase italic">
          QUIZ
        </h1>
      </div>

      <div className="max-w-xs mb-10">
        <p className="text-quiz-yellow text-lg font-bold leading-tight">
          Está na hora de ser o especialista oficial em... nada específico!
        </p>
      </div>

      <button
        onClick={() => navigate('/quiz')}
        className="bg-pink-50 text-black w-full max-w-xs py-4 rounded-full text-xl font-bold shadow-lg"
      >
        Começar
      </button>
    </div>
  )
}