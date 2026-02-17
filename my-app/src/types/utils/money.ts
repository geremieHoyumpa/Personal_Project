export default function phMoney(priceCents:number){
  
  return (Math.round(priceCents) / 100).toFixed(2);//.toFixed(2) converts the number to a string with 2 decimal places
}