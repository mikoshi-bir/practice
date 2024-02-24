import cx from "classnames";

export default function PlanCard({ plan }) {
  return (
    <div
      className={cx("card", plan.isHighlighted ? "highlighted" : null)}
      
    >
      <header className="header" style={{ background: plan.hearderColor }}>
        <h2>Безлимитный {plan.cost}</h2>
      </header>
      <main>
        <div className="cost" style={{ background: plan.mainColor }}>
          <p>руб</p>
          <h1>{plan.cost}</h1>
          <p>/мес</p>
        </div>
        <div className="speed">до {plan.speed} Мбит/сек</div>
      </main>
      <footer className="footer">Объем включеного трафика не ограничен</footer>
    </div>
  );
}
