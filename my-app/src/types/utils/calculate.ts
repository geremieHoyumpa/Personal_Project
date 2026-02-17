import { BuisnessInput } from "../businessInput";

export const totalRevenue = (input:BuisnessInput) : number => {
  return Number(input.revenuePerUnit) * Number(input.numberOfUnit);
};

const variableCost = (input:BuisnessInput) : number => {
  return Number(input.costPerUnit) * Number(input.numberOfUnit);
};

export const totalCost = (input:BuisnessInput) : number => {
  return variableCost(input) + Number(input.fixedCost);
};

