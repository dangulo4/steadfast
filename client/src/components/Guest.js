import React, { useState } from 'react';
import Page from '../pages/Page';
import Axios from 'axios';

function Guest() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await Axios.post('/api/register', { username, email, password });
      console.log('User was successfully created.');
    } catch (e) {
      console.log('There was an error.');
    }
  }

  return (
    <Page title="Welcome!" wide={true}>
      <div className="row align-items-center">
        <div className="col-lg-7 py-3 py-md-5">
          <h1 className="display-3">
            Want to easily access B2B contact and write notes?
          </h1>
          <p className="lead text-muted">
            The average salesperson spends 35.2% of their time selling, and 65%
            of their time on everything else*, which mostly involves dealing
            with administrative and research type tasks. These roadblocks keep a
            salesperson from selling and meeting their quota, leading to a loss
            of revenue for companies. Steadfast removes roadblocks for sales
            teams by providing a cohesive platform that allows fast access to
            contacts in companies and easy CMS storage for notes. Sales teams
            can focus on selling, and we take care of the administrative
            roadblocks
          </p>
        </div>
        <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username-register" className="text-muted mb-1">
                <small>Username</small>
              </label>
              <input
                onChange={(e) => setUsername(e.target.value)}
                id="username-register"
                name="username"
                className="form-control"
                type="text"
                placeholder="Create username"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email-register" className="text-muted mb-1">
                <small>Email</small>
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                id="email-register"
                name="email"
                className="form-control"
                type="text"
                placeholder="you@mail.com"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password-register" className="text-muted mb-1">
                <small>Password</small>
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                id="password-register"
                name="password"
                className="form-control"
                type="password"
                placeholder="Create a password"
              />
            </div>
            <button
              type="submit"
              className="py-3 mt-4 btn btn-lg btn-success btn-block"
            >
              Sign up for SteadFast
            </button>
          </form>
        </div>
      </div>
    </Page>
  );
}

export default Guest;
