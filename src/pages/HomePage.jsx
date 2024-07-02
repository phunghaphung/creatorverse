import { useState, useEffect } from "react";
import CreatorList from "../components/CreatorList";
import { Link } from "react-router-dom";
import { supabase } from "../client";

const HomePage = () => {
  const [creators, setCreators] = useState([]);
  const [showCreators, setShowCreators] = useState(true);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data } = await supabase.from("creators").select();
      setCreators(data);
    };
    fetchCreators();
  }, []);

  const handleDelete = async (id) => {
    await supabase.from("creators").delete().eq("id", id);
    setCreators(creators.filter((creator) => creator.id !== id));
  };

  return (
    <main className="container" style={{ paddingTop: "28px" }}>

      <nav
        style={{
          paddingBottom: "32px",
          display: "flex",
          justifyContent: "center",
          gap: "12px",
        }}
      >
        <Link to="/add" className="primary">
          <button>Add New Creator</button>
        </Link>
        <button
          onClick={() => setShowCreators(!showCreators)}
          className="button"
        >
          {showCreators ? "Hide Creators" : "Show Creators"}
        </button>
      </nav>
      {showCreators && (
        <section className="grid">
          <CreatorList creators={creators} handleDelete={handleDelete} />
        </section>
      )}
    </main>
  );
};

export default HomePage;
