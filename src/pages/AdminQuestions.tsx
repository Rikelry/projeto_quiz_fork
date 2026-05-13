import { useEffect, useState } from 'react'
import type { Question } from '../data/quizData'

export default function AdminQuestions() {
  const [questions, setQuestions] = useState<Question[]>([])
  const [newQuestion, setNewQuestion] = useState('')
  const [options, setOptions] = useState(['', '', '', ''])
  const [correctAnswer, setCorrectAnswer] = useState('')

  useEffect(() => {
    const saved = localStorage.getItem('@quiz_questions')
    if (saved) setQuestions(JSON.parse(saved))
  }, [])

  const handleSave = () => {
    if (!newQuestion.trim()) return alert('Digite a pergunta.')
    if (options.some((option) => !option.trim())) return alert('Preencha todas as alternativas.')
    if (!correctAnswer.trim()) return alert('Digite a resposta correta.')

    const questionData: Question = {
      id: Date.now(),
      question: newQuestion,
      options,
      answer: correctAnswer,
    }

    const updatedQuestions = [...questions, questionData]
    setQuestions(updatedQuestions)
    localStorage.setItem('@quiz_questions', JSON.stringify(updatedQuestions))

    setNewQuestion('')
    setOptions(['', '', '', ''])
    setCorrectAnswer('')
    alert('Pergunta salva com sucesso!')
  }

  return (
    <div className="min-h-screen bg-quiz-dark p-6 text-white">
      <h1 className="text-2xl font-black text-quiz-yellow mb-6">Cadastrar Pergunta</h1>

      <div className="max-w-xl space-y-4">
        <input
          className="w-full p-3 rounded-lg text-black"
          placeholder="Digite a pergunta"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        />

        {options.map((option, index) => (
          <input
            key={index}
            className="w-full p-3 rounded-lg text-black"
            placeholder={`Alternativa ${index + 1}`}
            value={option}
            onChange={(e) => {
              const updated = [...options]
              updated[index] = e.target.value
              setOptions(updated)
            }}
          />
        ))}

        <input
          className="w-full p-3 rounded-lg text-black"
          placeholder="Resposta correta"
          value={correctAnswer}
          onChange={(e) => setCorrectAnswer(e.target.value)}
        />

        <button
          onClick={handleSave}
          className="bg-quiz-yellow text-black font-bold px-6 py-3 rounded-full"
        >
          Salvar pergunta
        </button>
      </div>
    </div>
  )
}