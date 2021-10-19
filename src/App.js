import React, { useState } from 'react'
import FlashcardList from './components/FlashcardList';
import './App.css'

function App() {
  const [cards] = useState(SAMPLE_CARDS);
  return (
    <FlashcardList flashcards={cards} />
  );
}

const SAMPLE_CARDS = [
  {
    id: 1,
    question: 'What does HTML stand for?',
    answer: 'Hyper Text Markup Language',
    options: ['a) Hyper Tag Markup Language', 'b) Hyper Text Markup Language', 'c) Hyperlinking Text Marking Language']
  },
  {
    id: 2,
    question: 'What is Django?',
    answer: 'Django is a high-level Python web framework that enables rapid development of secure and maintainable websites.',
    options: ['a) A programming language', 'b) A Styling library', 'c) A web framework that facilitates development of websites']
  },
  {
    id: 3,
    question: 'What is a Pull Request?',
    answer: 'A mechanism for a developer to notify team members that they have completed a feature. This lets everybody involved know that they need to review the code and merge it into the main branch.',
    options: ['a) When you ask to copy code from your collegue', 'b) A way of telling others about changes you\'ve pushed to a branch in a repository.', 'c) A way of assigning developing tasks to a team.']
  },
  {
    id: 4,
    question: 'What is Python?',
    answer: 'Python is an interpreted, object-oriented, high-level programming language with dynamic semantics.',
    options: ['a) An interpreted, OO, high-level programming language.', 'b) A code editor.', 'c) A design pattern']
  },
  {
    id: 5,
    question: 'What does DRF stands for?',
    answer: 'Django REST framework',
    options: ['a) Django React Framework', 'b) Django React Find', 'c) Django REST framework']
  },
  {
    id: 6,
    question: 'In JavaScript, what element is used to store multiple values in a single variable?',
    answer: 'Arrays',
    options: ['Arrays', 'Functions', 'Strings']
  }
]

export default App;
