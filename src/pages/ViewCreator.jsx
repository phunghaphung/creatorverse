import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../client";

const ViewCreator = () => {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    const fetchCreator = async () => {
      const { data } = await supabase
        .from("creators")
        .select()
        .eq("id", id)
        .single();
      setCreator(data);
    };
    fetchCreator();
  }, [id]);

  if (!creator) return <p>Loading...</p>;

  return (
    <div className="container" style={{ paddingTop: "40px" }}>
      <h1>{creator.name}</h1>
      <p>{creator.description}</p>
      <div style={{ marginBottom: "16px" }}>
        <a href={creator.url} target="_blank" rel="noopener noreferrer">
          Visit Channel
        </a>
      </div>
      {creator.imageURL && <img src={creator.imageURL} alt={creator.name} />}
    </div>
  );
};

export default ViewCreator;
