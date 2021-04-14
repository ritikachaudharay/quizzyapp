import Button from "../Button";
import './answer.css';

function Answer({answer, displayQuestionDeck}){
    return (
        <>
        <div className="answer-container">
        <h3 style={{textAlign:"center"}}>Answer</h3>
        <p className='answer'>{answer}</p>
        </div>
        <Button buttonStyles='next-button' label='Next' onClickHandler={displayQuestionDeck}/>
        </>
    )

}
export default Answer;