import "./questionDeck.css";
import QuestionIcon from '../QuestionIcon';

function QuestionDeck({ quizItems }) {
    return (
        <div className='ques-deck-container'>
            {quizItems ? quizItems.items.map((item, index) => {
                return (<QuestionIcon key={index} item={item} />);
            }) : null}


        </div>
    )

}

export default QuestionDeck;