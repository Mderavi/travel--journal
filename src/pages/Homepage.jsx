import { Link } from "react-router-dom";
import PageNav from "../Components/PageNav";

function Homepage() {
  return (
    <div>
      <PageNav />

      <h1>Home</h1>
      <Link to="/app">Go to the app</Link>
    </div>
  );
}

export default Homepage;
