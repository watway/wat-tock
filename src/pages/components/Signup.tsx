import { useState } from 'react';
import styles from '@/styles/login.module.css';

const INITAL_STATE = {
  name: '',
  email: '',
  password: '',
};

export default function Signup({ showModal = false, closeModal, openLogin }) {
  const [state, setState] = useState(INITAL_STATE);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const doSignup = (e) => {
    e.preventDefault();
    alert('TODO: signup user');
  };

  return (
    <div className={`modal ${showModal ? 'is-active' : ''}`}>
      <div className="modal-background" onClick={() => closeModal()}></div>
      <div className="card">
        <div className="card-content">
          <div className="content">
            <div className="navbar-brand">
              <a className="navbar-item">
                <h1 className={styles.shadowText}>Signup and Post</h1>
              </a>
            </div>
            <form className={styles.form}>
              <input
                className={`${styles.inputItem} input`}
                type="text"
                placeholder="User Name"
                onChange={handleChange}
                name="name"
                value={state.name}
              />
              <input
                className={`${styles.inputItem} input`}
                type="text"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={state.email}
              />

              <input
                className={`${styles.inputItem} input`}
                type="password"
                placeholder="Password"
                onChange={handleChange}
                name="password"
                value={state.password}
              />

              <input
                className={`${styles.inputItem} input`}
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={handleChange}
              />

              <button className="button is-light" onClick={doSignup}>
                Sign up
              </button>
              <div className={styles.msg}>Already have an account?</div>
              <button
                className="button is-light"
                openlogin={openLogin}
                onClick={(e) => {
                  e.preventDefault();
                  openLogin();
                }}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={(e) => {
          e.preventDefault();
          openLogin();
        }}
      ></button>
    </div>
  );
}
