import './Start.css';
import Button from '../../Components/Button';

function Start() {
    return (
        <>
            <div class="form__group field">
                <input type="input" class="form__field" placeholder="Enter Your Name" name="name" id='name' required />
                <label for="name" class="form__label">Name</label>
            </div>

            <Button buttonStyles={'rules-button'} label={'Start Quiz'} />
        </>
    )


}

export default Start;