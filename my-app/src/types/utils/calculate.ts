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