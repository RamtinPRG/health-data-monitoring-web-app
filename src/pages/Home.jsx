import { Link } from "react-router-dom";

function Home() {
  return (
    <ul>
      <li>
        <Link to="login">Log in</Link>
      </li>
      <li>
        <Link to="signup">Sign up</Link>
      </li>
    </ul>
  );
}

export default Home;
