import { BusinessInput } from "../businessInput";

export const totalRevenue = (input:BusinessInput) : number => {
  return Number(input.revenuePerUnit) * Number(input.numberOfUnit);
};

const variableCost = (input:BusinessInput) : number => {
  return Number(input.costPerUnit) * Number(input.numberOfUnit);
};

export const totalCost = (input:BusinessInput) : number => {
  return variableCost(input) + Number(input.fixedCost);
};

export const breakEvenPoint = (input:BusinessInput) : number => {
  return Number(input.fixedCost) / (Number(input.revenuePerUnit) - Number(input.costPerUnit));
};

export const netProfit = (input:BusinessInput) : number => {
  return totalRevenue(input) - totalCost(input);
};

export const profitMargin = (input:BusinessInput) : number => {
  return (netProfit(input) / totalRevenue(input)) * 100;
};

export const generateProfitData = (input:BusinessInput) => {
  const data = [];
  
  for(let units = 0; units <= Number(input.numberOfUnit); units += 10){
    const revenue = Number(input.revenuePerUnit) * units;
    const variableCost = Number(input.costPerUnit) * units;
    const totalCost = variableCost + Number(input.fixedCost);
    const profit = revenue - totalCost;

    data.push({ units, profit }); 
  }

  return data;
};

export const generatePieData = (input: BusinessInput) => {
  const varCost = variableCost(input);
  const fixCost = Number(input.fixedCost);

  return [
    { name: "Variable Cost", value: varCost, color: '#0088FE' },
    { name: "Fixed Cost", value: fixCost, color:  '#00C49F' }
  ];
};