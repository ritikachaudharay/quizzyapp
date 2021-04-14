import "./questionDeck.css";
import QuestionIcon from '../QuestionIcon';

function QuestionDeck({ quizItems ,displayQuestion }) {
    return (
        <div className='ques-deck-container'>

            {quizItems ? quizItems.items.sort(function(a,b){
                return a.difficultyLevel - b.difficultyLevel ;
            }).map((item, index) => {
                return (<QuestionIcon key={index} item={item} displayQuestion={displayQuestion}/>);
            }) : null}


        </div>
    )

}

export default QuestionDeck;