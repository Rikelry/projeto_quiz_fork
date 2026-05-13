export interface Question {
  id: number
  question: string
  options: string[]
  answer: string
}

export const defaultQuizData: Question[] = [
  {
    id: 1,
    question: "Quem escreveu 'Dom Casmurro'?",
    options: ["Machado de Assis", "José de Alencar", "Clarice Lispector", "Graciliano Ramos"],
    answer: "Machado de Assis",
  },
  {
    id: 2,
    question: "Qual a capital do Piauí?",
    options: ["Parnaíba", "Teresina", "Picos", "Piripiri"],
    answer: "Teresina",
  },
]