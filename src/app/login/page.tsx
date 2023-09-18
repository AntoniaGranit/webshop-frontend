import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiUrl } from '../../utils/api';
// import user from 'reducers/user';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const mode = 'login';
  // dispatch to put access token into main component
  const dispatch = useDispatch();
  //   const onGoToRegistrationButtonClick = () => {
  //     navigate('/register');
  //   };

  const accessToken = useSelector((store) => store.user.accessToken);
  useEffect(() => {
    if (accessToken) {
      navigate(`/${username}`);
    }
  }, [accessToken]);
  const onFormSubmit = (event) => {
    // form not to reload page
    event.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, password: password }),
    };
    setLoading(true);
    fetch(apiUrl(mode), options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch(user.actions.setAccessToken(data.response.accessToken));
          dispatch(user.actions.setEmail(data.response.email));
          dispatch(user.actions.setUserId(data.response.id));
          dispatch(user.actions.setError(null));
        } else {
          dispatch(user.actions.setAccessToken(null));
          dispatch(user.actions.setEmail(null));
          dispatch(user.actions.setUserId(null));
          dispatch(user.actions.setError(data.response));
        }
      });
  };
  if (!loading) {
    return (
      <section className='login-section'>
        <p>Happy to see you again!</p>
        <h1 className='login-title'>Log in</h1>
        <div className='login-fields'>
          <form onSubmit={onFormSubmit}>
            <input
              type='text'
              id='email'
              placeholder='Email'
              value={username}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='password'
              id='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className='login-btn1' type='submit'>
              Login
            </button>
          </form>
        </div>
        <div className='register-div'>
          <p>You don't have an account?</p>
          <button className='register-btn1' type='button' onClick={onGoToRegistrationButtonClick}>
            {' '}
            Create one now!
          </button>
        </div>
      </section>
    );
  } else {
    return (
      <div>
        {' '}
        <Loading />
      </div>
    );
  }
};
