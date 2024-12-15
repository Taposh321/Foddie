const Table =({name,weight})=>{
    const nutritionData = [
      { nutrient: 'Calories', amount: '500', },
      { nutrient: 'Total Fat', amount: '26g', },
      { nutrient: 'Cholesterol', amount: '70mg', },
      { nutrient: 'Total Carbohydrate', amount: '40g' },
      { nutrient: 'Sugars', amount: '6g'},
      { nutrient: 'Protein', amount: '25g'},
    ];
    return (
      <div className="nutrition-facts text-white text-sm">
        <p><strong>Serving Size:</strong> 1 {name} (Approx. {weight}g)</p>
        <table className="border-collapsed  ">
          <thead className="bg-gray-400">
            <tr>
              <th className="border px-2">Nutrient</th>
              <th className="border px-2">Amount</th>
            </tr>
          </thead>
          <tbody  className="border">
            {nutritionData.map((item, index) => (
              <tr key={index} className="border">
                <td  className="border px-2" >{item.nutrient}</td>
                <td  className="border px-2">{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
       
      </div>
    );
  };
  export default Table