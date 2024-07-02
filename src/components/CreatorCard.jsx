import { Link } from "react-router-dom";

const CreatorCard = ({ creator, handleDelete }) => {
  return (
    <article
      className="card"
      style={{
        position: "relative",
        backgroundImage: `url(${creator.imageURL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        width: "300px",
      }}
    >
      <Link to={`/creator/${creator.id}`}>
        <div
          style={{
            position: "relative",
            zIndex: 2,
            padding: "10px",
          }}
        >
          <header>
            <h2>{creator.name}</h2>
          </header>
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "end",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <Link to={creator.url} className="button small primary">
              Channel
            </Link>
            <Link to={`/edit/${creator.id}`} className="button small secondary">
              Edit
            </Link>
            <button
              onClick={() => handleDelete(creator.id)}
              className="button small secondary"
            >
              Delete
            </button>
          </div>
        </div>
        {creator.imageURL && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              zIndex: 1,
            }}
          ></div>
        )}
      </Link>
    </article>
  );
};

export default CreatorCard;
