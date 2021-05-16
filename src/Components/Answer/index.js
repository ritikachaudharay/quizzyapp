import Button from "../Button";
import './answer.css';

function Answer({answer, displayQuestionDeck, displayFinalScore}){
    const usedQuestions= JSON.parse(localStorage.getItem('usedQuestions'));
    const wickets = JSON.parse(localStorage.getItem('wickets'));
    return (
        <>
        <div className="answer-container">
        <h3 style={{textAlign:"center"}}>Answer</h3>
        <p className='answer'>{answer}</p>
        </div>
        <Button buttonStyles='next-button' label='Next' onClickHandler={wickets===3||usedQuestions.length===30?displayFinalScore:displayQuestionDeck}/>
        </>
    )

}
export default Answer;