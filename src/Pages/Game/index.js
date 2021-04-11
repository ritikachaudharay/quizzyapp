import './game.css';
import QuestionDeck from "../../Components/QuestionDeck";
import Button from '../../Components/Button';

function Game() {
    return (
        <>
            <p className='game-label'>Choose Your Question {sessionStorage.getItem("name")} !</p>
            <div className='game-components'>
                <Button buttonStyles='declare-button' label='Declare' />
                <QuestionDeck />
            </div>

        </>

    )

}

export default Game;


