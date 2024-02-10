import "./App.css";
import { Chart } from "react-google-charts";

function App() {
  return (
    <div className="App">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
}

const data = [
  ["Task", "Hours per Day"],
  ["Работа", 9],
  ["Еда", 3],
  ["Общение", 1],
  ["Компьютерные игры", 2],
  ["Сон", 10],
];

const options = {
  title: "Мои ежедневные заботы",
};

export default App;
