import Button from "../Button";
import './finalScore.css';

function FinalScore({goToRulesRoute}){
    return (
        <>
        <div className='final-score-container'>
        <p style={{textAlign:"center"}}>Thanks For playing {sessionStorage.getItem('name')}!</p>
        <h3 style={{textAlign:"center"}}>Final Score</h3>
        <h2 style={{textAlign:"center"}}>30/3</h2>
        </div>
        <Button buttonStyles='exit-button' label='EXIT' onClickHandler={goToRulesRoute}/>
        </>
    )
}
export default FinalScore;