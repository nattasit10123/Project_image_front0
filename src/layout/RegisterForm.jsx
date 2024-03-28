import axios from "axios";
import { useState } from "react";

export default function RegisterForm() {
  const [input, setInput] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    phone: "",
  });

  const hdlChange = (e) => {
    setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();
      const { username, password, confirmPassword, email, phone } = input;
      if (!(username && password && confirmPassword && email && phone)) {
        return alert("Fulfill all inputs");
      }
      if (input.password !== input.confirmPassword) {
        return alert("plase check confirm password");
      }
      const rs = await axios.post("http://localhost:8889/auth/register", input);
      console.log(rs);
      if (rs.status === 200) {
        alert("Register Successful");
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div class="bg-my-Pencils bg-cover bg-center px-80 py-16 mt-1">
      <div className="p-8 border w-full mx-auto rounded mt-1  bg-gray-200/75 ">
        <div className="text-center text-3xl font-medium">Sign up</div>
        <form className="flex flex-col gap-2 mt-3" onSubmit={hdlSubmit}>
          <label className="form-control">
            <div className="flex gap-14 items-center">
              <span className="label-text pl-5 pr-1">username :</span>
              <input
                type="text"
                className="input input-bordered w-96"
                name="username"
                value={input.username}
                onChange={hdlChange}
              />
            </div>
          </label>

          <label className="form-control">
            <div className="flex gap-20 items-center">
              <span className="label-text pl-5 pr-1">E-mail :</span>
              <input
                type="email"
                className="input input-bordered w-96"
                name="email"
                value={input.email}
                onChange={hdlChange}
              />
            </div>
          </label>

          <label className="form-control">
            <div className="flex gap-16 items-center">
              <span className="label-text pl-5">password :</span>
              <input
                type="password"
                className="input input-bordered w-96"
                name="password"
                value={input.password}
                onChange={hdlChange}
              />
            </div>
          </label>

          <label className="form-control">
            <div className="flex gap-2 items-center">
              <span className="label-text pl-5">Confirm Password :</span>
              <input
                type="password"
                className="input input-bordered w-96"
                name="confirmPassword"
                value={input.confirmPassword}
                onChange={hdlChange}
              />
            </div>
          </label>

          <label className="form-control">
            <div className="flex gap-20 items-center">
              <span className="label-text pl-5 pr-1">Phone :</span>
              <input
                type="tel"
                className="input input-bordered w-96"
                name="phone"
                value={input.phone}
                onChange={hdlChange}
              />
            </div>
          </label>

          <div className="flex justify-center gap-4">
            <button type="submit" className="btn  btn-info mt-7">
              Sign-up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
