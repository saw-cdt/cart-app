export const CatalogItem = ({ name, description, price }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">$ {price}</p>
        <button className="btn btn-primary">Add</button>
      </div>
    </div>
  );
};
