import "./style.css";
const Table = ({ netIncomes }) => {
  const totalIncome = netIncomes.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.income;
  }, 0);

  const averageIncome = totalIncome / netIncomes.length;

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th> Marca</th>
            <th>Ingreso Neto</th>
          </tr>
        </thead>
        <tbody>
          {netIncomes.map((date, index) => (
            <tr key={index}>
              <td>{date.brand}</td>
              <td>${date.income}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        El promedio de ingreso neto entre todas las marcas es: $
        {averageIncome.toFixed(2)}
      </p>
    </div>
  );
};

export default Table;
