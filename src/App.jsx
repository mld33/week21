// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Chart } from 'react-google-charts';

const data = [
  ["Задача", "Часы в день"],
  ["Работа", 8],
  ["Еда", 2],
  ["Дорога", 2],
  ["Обучение", 4],
  ["Сон", 7],
];

const options = {
  title: "Мои ежедневные занятия",
  pieHole: 0.4, // график в стиле "торт" (опционально)
  is3D: true,   // 3D-эффект
  legend: {
    position: "bottom",
    alignment: "center",
    textStyle: {
      fontSize: 16,
    },
  },
  titleTextStyle: {
    fontSize: 24,
    bold: true,
  },
};

function App() {
  return (
    <div className="App">
      <h1>Пример круговой диаграммы</h1>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"80%"}
        height={"80vh"} // Диаграмма занимает 80% высоты окна
      />
    </div>
  );
}

export default App;
