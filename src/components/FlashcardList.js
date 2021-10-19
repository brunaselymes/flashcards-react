import React from 'react'
import Flashcard from './Flashcard'

const FlashcardList = ({ flashcards }) => {
    return (
        <div>
            <h1>Flashcards program 💻</h1>
            <div className="card-grid">
                {flashcards.map(flashcard => {
                    return <Flashcard flashcard={flashcard} key={flashcard.id} />
                })}
            </div>
        </div>
    );
}

export default FlashcardList