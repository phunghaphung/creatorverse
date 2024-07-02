import { useNavigate } from "react-router-dom";
import { supabase } from "../client";
import CreatorForm from "../components/CreatorForm";

const AddCreator = () => {
  const navigate = useNavigate();

  const handleAddCreator = async (creator) => {
    await supabase.from("creators").insert([creator]);
    navigate("/");
  };

  return (
    <div>
      <h1>Add New Creator</h1>
      <CreatorForm onSubmit={handleAddCreator} />
    </div>
  );
};

export default AddCreator;
