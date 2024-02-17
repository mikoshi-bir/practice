export default function Character({ hero }) {
  return (
    <div>
      <h2>{hero.name}</h2>
      <p>{hero.characteristic}</p>
      <p>{hero.description}</p>
      <img src={hero.url} alt={hero.name} />
    </div>
  );
}
