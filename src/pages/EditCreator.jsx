import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../client";
import CreatorForm from "../components/CreatorForm";

const EditCreator = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    const fetchCreator = async () => {
      const { data } = await supabase
        .from("creators")
        .select()
        .eq("id", id)
        .single();
      setInitialData(data);
    };
    fetchCreator();
  }, [id]);

  const handleEditCreator = async (creator) => {
    await supabase.from("creators").update(creator).eq("id", id);
    navigate("/");
  };

  if (!initialData) return <p>Loading...</p>;

  return (
    <div
      style={{
        marginTop: "30px",
        marginLeft: "30px",
        marginRight: "30px",
      }}
    >
      <h1>Edit Creator</h1>
      <CreatorForm onSubmit={handleEditCreator} initialData={initialData} />
    </div>
  );
};

export default EditCreator;
