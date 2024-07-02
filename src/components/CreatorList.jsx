import CreatorCard from "./CreatorCard";

const CreatorList = ({ creators, handleDelete }) => {
  return (
    <div>
      {creators.length > 0 ? (
        creators.map((creator) => (
          <CreatorCard
            key={creator.id}
            creator={creator}
            handleDelete={handleDelete}
          />
        ))
      ) : (
        <p>No content creators found.</p>
      )}
    </div>
  );
};

export default CreatorList;
