import axios from "axios";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

export default function LoginForm() {
  const { setUser } = useAuth();
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const hdlChange = (e) => {
    setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();
      // validation
      const rs = await axios.post("http://localhost:8889/auth/login", input);
      console.log(rs.data.token);
      localStorage.setItem("token", rs.data.token);
      const rs1 = await axios.get("http://localhost:8889/auth/me", {
        headers: { Authorization: `Bearer ${rs.data.token}` },
      });
      console.log(rs1.data);
      setUser(rs1.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="flex flex-wrap  justify-center  ">
      <div className="flex bg-my-bubu bg-cover bg-center w-96  bg-black py-72"></div>

      {/* --------------------------------------------- */}
      {/* <!-- Left column container--> */}
      <div className="px-4 md:px- lg:w-1/3 bg-gray-200/75">
        <div className="h-full">
          {/* ------------------------------------ */}
          <div className="text-3xl text-center mt-7">SIGN IN</div>
          <form
            className="flex flex-col gap-2 items-center mt-10  "
            onSubmit={hdlSubmit}
          >
            <label className="input input-bordered flex items-center gap-2 bg-slate-200/75 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill=""
                className="w-4 h-4 opacity-70 "
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                name="username"
                id="username"
                type="text"
                className="grow bg-transparent"
                placeholder="| Username"
                value={input.username}
                onChange={hdlChange}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 bg-slate-200/75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70 bg-slate-200/75"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow bg-slate-200/75"
                name="password"
                placeholder="| Password"
                value={input.password}
                onChange={hdlChange}
              />
            </label>

            <div className="flex gap-5 ">
              <button type="submit" className="btn btn-success mt-2 px-24">
                Sign in
              </button>
            </div>
            <div className="text-xs flex relative right-16  underline underline-offset-1">
              forgot password?
            </div>
            <div className="mt-2 text-xl flex relative  ">
              ________ or ________
            </div>
          </form>

          <div className="flex gap-5 justify-center mt-3">
            <button
              type="button"
              className="flex rounded-full px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              style={{ backgroundColor: "#1877f2" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </button>

            <button
              type="button"
              className="flex rounded-full px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              style={{ backgroundColor: "#ea4335" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
