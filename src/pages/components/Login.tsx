import { useState } from 'react';
import styles from '@/styles/login.module.css';

export default function Login({ showModal = false, closeModal, openSignup }) {
  const loginUser = async (e) => {
    e.preventDefault();
    alert('TODO: login user');
  };

  const handleChange = (e) => {};

  return (
    <div className={`modal ${showModal ? 'is-active' : ''}`}>
      <div className="modal-background" onClick={() => closeModal()}></div>
      <div className="card">
        <div className="card-content">
          <div className="content">
            <div className="navbar-brand">
              <a className="navbar-item">
                <h1 className={styles.shadowText}>Make Your Day 😎</h1>
              </a>
            </div>
            <form className={styles.form}>
              <input
                className={`${styles.inputItem} input`}
                type="text"
                placeholder="Email"
                name="email"
                onChange={handleChange}
              />

              <input
                className={`${styles.inputItem} input`}
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />

              <button className="button is-light" onClick={loginUser}>
                Login
              </button>
              <div className={styles.msg}>Create an account to get started</div>
              <button
                className={`${styles.signupBtn} button is-light`}
                onClick={(e) => {
                  e.preventDefault();
                  openSignup();
                }}
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={() => closeModal()}
      ></button>
    </div>
  );
}
