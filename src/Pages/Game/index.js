import './game.css';
import QuestionDeck from "../../Components/QuestionDeck";
import Button from '../../Components/Button';
import { connect } from 'react-redux';
import { loadItems } from './State/action.js';
import { useEffect, useState } from 'react';
import Question from '../../Components/Question';
import Answer from '../../Components/Answer';
import FinalScore from '../../Components/FinalScore';

function Game({ loadItems, quizItems, history }) {

    const [showQuestionDeck, setShowQuestionDeck]=useState(true);   //flag
    const [showQuestion, setShowQuestion] = useState(false);
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [showAnswer,setShowAnswer]= useState(false);
    const [showFinalScore, setShowFinalScore] = useState(false);

    useEffect(() => {
        loadItems();
    }, [])


    const displayQuestion=(id)=>{
        setShowQuestionDeck(false);
        setShowQuestion(true);
        const selQuestion = quizItems.items.find((item)=>{
            return item.id ===id ;
        })
        setSelectedQuestion(selQuestion);
        
    }


    const displayAnswer=()=>{
        setShowAnswer(true);
        setShowQuestion(false);
    }

    const displayQuestionDeck=()=>{
        setShowQuestionDeck(true);
        setShowAnswer(false);
    }

    const displayFinalScore=()=>{
        setShowFinalScore(true);
        setShowQuestionDeck(false);
        setShowAnswer(false);
    }

    const goToRulesRoute=()=>{
        history.push('/')
    }

    return (
        <>
       {showQuestionDeck &&  <>
        
            <p className='game-label'>Choose Your Question {sessionStorage.getItem("name")} !</p>
            <div className='game-components'>
                <Button buttonStyles='declare-button' label='Declare' onClickHandler={displayFinalScore}/>
                <QuestionDeck quizItems={quizItems} displayQuestion={displayQuestion}/>
            </div>

        </> }
       { showQuestion && <Question selectedQuestion={selectedQuestion} displayAnswer={displayAnswer}/>}
       {showAnswer && <Answer answer={selectedQuestion.answer} displayQuestionDeck={displayQuestionDeck}/>}
       {showFinalScore && <FinalScore goToRulesRoute={goToRulesRoute}/>}
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


