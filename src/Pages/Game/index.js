import './game.css';
import QuestionDeck from "../../Components/QuestionDeck";
import Button from '../../Components/Button';
import { connect } from 'react-redux';
import { loadItems } from './State/action.js';
import { useEffect } from 'react';

function Game({ loadItems, quizItems }) {

    useEffect(() => {
        loadItems();
    }, [])

    return (
        <>
            <p className='game-label'>Choose Your Question {sessionStorage.getItem("name")} !</p>
            <div className='game-components'>
                <Button buttonStyles='declare-button' label='Declare' />
                <QuestionDeck quizItems={quizItems} />
            </div>

        </>

    )

}

function mapStateToProps({ items }) {
    return {
        quizItems: items.content
    }
}

const mapDispatchToProps = { loadItems };    //here loadItems is a prop

export default connect(mapStateToProps, mapDispatchToProps)(Game);


