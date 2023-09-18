import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiUrl } from '../../utils/api';
// import user from 'reducers/user';

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const mode = 'register';
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  // get accessToken from store
  const accessToken = useSelector((store) => store.user.accessToken);
  useEffect(() => {
    if (accessToken) {
      navigate(`/${username}`);
    }
  }, [accessToken]);

  const onGoToLoginButtonClick = () => {
    navigate('/login');
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // eslint-disable-next-line object-shorthand
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
          navigate('/login');
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
      <section className='register-section'>
        <p>Hi! Start your journey here</p>
        <h1 className='register-title'>Create account</h1>
        <div className='register-fields'>
          <form onSubmit={onFormSubmit}>
            <input
              type='email'
              id='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='password'
              id='password'
              placeholder='Password *'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className='register-btn2' type='submit'>
              Register
            </button>
          </form>
        </div>
        <div className='login-div'>
          <p>Do you already have an account?</p>
          <button className='login-btn2' type='button' onClick={onGoToLoginButtonClick}>
            {' '}
            Log in
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
