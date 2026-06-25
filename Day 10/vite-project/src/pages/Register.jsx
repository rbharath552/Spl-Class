import { useContext, useState } from "react";

import { useNavigate, Link } from "react-router-dom";
import AuthProvider from "../context/AuthProvider";

export default function Register() {
  const { users, setUsers } = useContext(AuthProvider);

  const navigate = useNavigate();

  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const emailExists = users.find(
      (user) => user.email === form.email
    );

    if (emailExists) {
      alert("Email already registered");
      return;
    }

    const newUser = {
      name: form.name,
      email: form.email,
      password: form.password,
    };

    setUsers([...users, newUser]);

    setMessage("Registration Successful");

    setForm({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Register</h2>

      {message && <p style={{ color: "green" }}>{message}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">
          Register
        </button>
      </form>

      <br />

      <Link to="/login">
        Go To Login
      </Link>
    </div>
  );
}