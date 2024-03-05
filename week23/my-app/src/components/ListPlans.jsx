import PlanCard from "./PlanCard";
import list from "../data/PlanList";
import { useState } from "react";

const ListOfPlansCards = () => {
  const [selectedPlan, setSelectedPlan] = useState(null)

  return (
    <>
      <h1>Список Тарифов</h1>
      <div className="listOfPlans">
        {list.map((plan) => {
          return <PlanCard onSelected={() => setSelectedPlan(prevValue => plan.cost === prevValue?.cost ? null : plan)} key={plan.id} plan={plan} />;
        })}
      </div>
      <div className="selectedPlan">{selectedPlan ? `Выбранный план: Безлимитный ${selectedPlan.cost}` : null}</div>
    </>
  );
};

export default ListOfPlansCards;
