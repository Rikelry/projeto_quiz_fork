import { useLocation, useNavigate } from 'react-router-dom'

type LocationState = {
  finalScore?: number
  total?: number
}

export default function Result() {
  const navigate = useNavigate()
  const location = useLocation()
  const state = location.state as LocationState | null

  const finalScore = state?.finalScore ?? 0
  const total = state?.total ?? 0

  return (
    <div className="min-h-screen bg-quiz-dark flex flex-col items-center justify-center p-6 text-center text-white">
      <h1 className="text-quiz-yellow text-4xl font-black mb-4">Resultado</h1>

      <p className="text-xl mb-8">
        Você acertou {finalScore} de {total} perguntas.
      </p>

      <button
        onClick={() => navigate('/')}
        className="bg-pink-50 text-black w-full max-w-xs py-4 rounded-full text-xl font-bold shadow-lg"
      >
        Voltar para início
      </button>
    </div>
  )
}