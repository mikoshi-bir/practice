import PlanCard from "./PlanCard";
import list from "../data/PlanList";

const ListOfPlansCards = () => {
  return (
    <>
      <h1>Список Тарифов</h1>
      <div className="listOfPlans">
        {list.map((plan) => {
          return <PlanCard key={plan.id} plan={plan} />;
        })}
      </div>
    </>
  );
};

export default ListOfPlansCards;
