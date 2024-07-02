import { useState } from "react";

const CreatorForm = ({ onSubmit, initialData = {} }) => {
  const [name, setName] = useState(initialData.name || "");
  const [url, setUrl] = useState(initialData.url || "");
  const [description, setDescription] = useState(initialData.description || "");
  const [imageURL, setImageURL] = useState(initialData.imageURL || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, url, description, imageURL });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="url">URL</label>
      <input
        type="url"
        id="url"
        name="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <label htmlFor="imageURL">Image URL</label>
      <input
        type="url"
        id="imageURL"
        name="imageURL"
        value={imageURL}
        onChange={(e) => setImageURL(e.target.value)}
      />

      <button type="submit" className="primary">
        Submit
      </button>
    </form>
  );
};

export default CreatorForm;
