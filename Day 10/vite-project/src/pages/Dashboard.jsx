import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { currentUser, setCurrentUser } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const logout = () => {
    setCurrentUser(null);
    navigate("/login");
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Dashboard</h1>

      <h3>
        Welcome, {currentUser?.name}
      </h3>

      <p>Email: {currentUser?.email}</p>

      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
}