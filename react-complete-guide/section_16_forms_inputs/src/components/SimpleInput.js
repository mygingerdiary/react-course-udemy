import {useRef, useState, useEffect} from 'react';


const SimpleInput = (props) => {
    const nameInputRef = useRef();

    const [enteredName, setEnteredName] = useState('');
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    useEffect(() => {
        if(enteredNameIsValid) {
            console.log("Correct input");
        }
    },[enteredNameIsValid]);

    const nameInputChangeHandler = event => {
        setEnteredName(event.target.value);
    };

    const formSubmissionHandler = event => {
        event.preventDefault();

        setEnteredNameTouched(true);

        if(enteredName.trim() === '') {
            setEnteredNameIsValid(false);
            return;
        }

        setEnteredNameIsValid(true);
        console.log(enteredName);

        const enteredVal = nameInputRef.current.value;
        console.log(enteredVal)

        // nameInputRef.current.value = ''; => don't manipulate the dom
        setEnteredName('');
    };

    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

    const nameInputClasses = nameInputIsInvalid
        ? 'form-control invalid'
        : 'form-control';

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input
                    ref={nameInputRef}
                    type='text'
                    id='name'
                    onChange={nameInputChangeHandler}
                    value={enteredName}
                />
                {nameInputIsInvalid && <p className="error-text">Name must not me empty</p>}
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
