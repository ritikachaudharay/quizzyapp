import './Start.css';
import Button from '../../Components/Button';
import { useState, useEffect } from 'react';

function Start({ history }) {

    useEffect(()=>{
        if(localStorage.getItem('name')!== null){
            history.push('/game');
        }
    },[])


    const [userName, setUserName] = useState(null);
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const validateUserName = () => {
        return userName && userName.trim().length > 0;
    }

    const goToGameRoute = () => {

        if (validateUserName()) {
            localStorage.setItem("name", userName);

            history.push('/game');

        }
        else {
            setShowErrorMessage(true);
        }

    }



    const getUserName = (e) => {
        //  console.log("hiiiiiiiiiiiii", e.target.value);

        setUserName(e.target.value);

    }

    return (
        <>
            <div class="form__group field">
                <input type="input" class="form__field" placeholder="Enter Your Name" name="name" id='name' required onChange={getUserName} />
                <label for="name" class="form__label">Name</label>
                {showErrorMessage ? <p className="error-msg">Please enter a valid name.</p> : null}
            </div>


            <Button buttonStyles={'rules-button'} label={'Start Quiz'} onClickHandler={goToGameRoute} />
        </>
    )


}

export default Start;