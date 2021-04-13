import './questionIcon.css';

function QuestionIcon({ item }) {
    return (
        <div className='ques-icon'>
         <p className='ques-diff'>{item.difficultyLevel} {item.difficultyLevel == 1 ? 'Run' :'Runs'}</p>
        </div>
    )
}
export default QuestionIcon;
