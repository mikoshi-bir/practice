import list from "./Content";
import Character from "./Character";

export function ListHeroes() {
  return (
    <>
      <h1>Список Супергероев</h1>
      <div>
        {list.map((hero) => {
          return <Character key={hero.id} hero={hero} />;
        })}
      </div>
    </>
  );
}
