import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchSignup } from '../../Actions/signupAction';
import { toggleHomeState } from '../../Actions/toggleAction';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

export default function SignupForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [currentStep, setCurrentStep] = useState(1);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [is_creator, setIsCreator] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      fetchSignup({
        username,
        email,
        password,
        password_confirmation,
        first_name,
        last_name,
        is_creator,
      })
    );
    history.push('/home');
    alert(`Your new account details: \n 
             Email: ${email} \n 
             Username: ${username} \n
             Password: ${password}`);
    dispatch(toggleHomeState());
  };

  const handleChange = e => {
    const { name, value } = e.target;
    // const name = e.target.name;
    // const value = e.target.value;
    // console.log({ name, value });
    console.log(name);
    console.log(value);
    console.log(username);
    switch (e.target.name) {
      case 'username':
        setUsername(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      case 'password_confirmation':
        setPasswordConfirmation(e.target.value);
        break;
      case 'first_name':
        setFirstName(e.target.value);
        break;
      case 'last_name':
        setLastName(e.target.value);
        break;
      case 'is_creator':
        setIsCreator(e.target.value);
        break;
      default:
        break;
    }
  };

  const _prev = () => {
    // If the current step is 2 or 3,
    // then subtract one on "previous" button click
    currentStep <= 1 ? setCurrentStep(1) : setCurrentStep(currentStep - 1);
  };

  const _next = () => {
    // If the current step is 1 or 2,
    // then add one on "next" button click
    currentStep >= 2 ? setCurrentStep(3) : setCurrentStep(currentStep + 1);
  };

  const previousButton = () => {
    if (currentStep !== 1) {
      return (
        <button
          className='mv2 f6 link dim br3 ph3 pv2 mb2 dib white bg-black fg-text-light'
          type='button'
          onClick={_prev}
        >
          Previous
        </button>
      );
    }
    return null;
  };

  const nextButton = () => {
    if (currentStep < 3) {
      return (
        <button
          className='mv2 f6 link dim br3 ph3 pv2 mb2 dib white bg-black fg-text-light'
          type='button'
          onClick={_next}
        >
          Next
        </button>
      );
    }
    return null;
  };

  return (
    <>
      {/* Form from https://css-tricks.com/the-magic-of-react-based-multi-step-forms/ */}
      <p>Step {currentStep} </p>

      <form onSubmit={handleSubmit}>
        <Step1
          currentStep={currentStep}
          handleChange={handleChange}
          email={email}
          username={username}
          password={password}
          password_confirmation={password_confirmation}
        />
        <Step2
          currentStep={currentStep}
          handleChange={handleChange}
          first_name={first_name}
          last_name={last_name}
        />
        <Step3
          currentStep={currentStep}
          handleChange={handleChange}
          is_creator={is_creator}
        />
        {previousButton()}
        {nextButton()}
      </form>
    </>
  );
}
