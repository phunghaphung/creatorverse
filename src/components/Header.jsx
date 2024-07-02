import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link
        to={"/"}
        style={{
          color: "orange",
          fontSize: "40px",
          paddingBottom: "20px",
          paddingTop: "36px",
          paddingLeft: "36px",
          fontWeight: "bold",
        }}
      >
        creatorverse
      </Link>
    </header>
  );
};

export default Header;
