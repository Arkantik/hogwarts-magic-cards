import { NavLink } from "react-router-dom";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import dataUsers from "../data_users.json";

import "react-toastify/dist/ReactToastify.css";

export default function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logged = () => {
    toast.success("Login succeeds", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const wrong = () => {
    toast.error("Wrong email or password !", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const foundUser = dataUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      window.location.replace("/");
      logged();
    } else {
      wrong();
    }
  };

  return (
    <div className="text-dark bg-[#ececec]/30 rounded-3xl w-[300px] px-12 py-8">
      <div className="flex-col space-y-2" onSubmit={handleSubmit}>
        <h2 className="flex justify-center text-xl">Login</h2>

        <form className="space-y-2">
          <div>
            <label htmlFor="email" className="text-base text-dark">
              Email
            </label>
            <input
              type="email"
              placeholder="username@gmail.com"
              className="placeholder:font-light w-full bg-white border rounded-md border-gray-300 focus:border-secondary text-xs outline-none text-dark leading-5 py-1 px-3 transition-colors duration-300 ease-in-out"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              pattern=".{5,25}"
              required
              title="5 to 25 characters"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-base text-dark">
              Password
            </label>
            <div className="flex items-center relative">
              <input
                type="Password"
                placeholder="Password"
                className="relative placeholder:font-light w-full bg-white border rounded-md border-gray-300 focus:border-secondary text-xs outline-none text-dark leading-5 py-1 pl-3 pr-8 duration-300 ease-in-out"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                pattern=".{4,12}"
                required
                title="4 to 12 characters"
              />
              <span className="flex absolute right-3">
                <img
                  className=""
                  src="./icon/pass-show.svg"
                  alt="show password icon"
                />
              </span>
            </div>
            <label htmlFor="Passchange" className="text-xs">
              <a href="/ChangePassword">Forgot password?</a>
            </label>
          </div>
          <button
            type="submit"
            className="text-secondary py-2 px-5 w-full bg-primary hover:bg-secondary hover:text-primary rounded border border-gray-200 duration-300 ease-in-out"
          >
            Sign in
          </button>
        </form>

        <p className="relative flex justify-center text-xs">
          <span className="line-login-before" />
          Or continue with
          <span className="line-login-after" />
        </p>

        <div className="flex justify-center">
          <button
            type="button"
            className="flex items-center justify-center rounded-3xl px-5 py-2.5 w-20 bg-white ring-1 ring-transparent hover:ring-secondary duration-300 ease-in-out"
          >
            <img src="./icon/google.svg" alt="Google login button" />
          </button>
        </div>
        <p className="flex justify-center text-xs">
          Don't have an account yet?
        </p>
        <NavLink to="/register">
          <p className="flex justify-center text-xs font-semibold">
            Register here!
          </p>
        </NavLink>
      </div>
      <ToastContainer />
    </div>
  );
}
