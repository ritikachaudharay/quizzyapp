import './questionIcon.css';

function QuestionIcon({ item }) {
    return (
        <div className='ques-icon'>
            {item.difficultyLevel} Runs
        </div>
    )
}
export default QuestionIcon;
