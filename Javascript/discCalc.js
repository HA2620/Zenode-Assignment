
import { bulk_5_discount } from "./func.js";
import { flat_10_discount } from "./func.js";
import { bulk_10_discount } from "./func.js";
import { tier_50_discount } from "./func.js";

import promptSync from 'prompt-sync';

const prompt = promptSync();

// Taking user Input
while (true) {
  var prod_A_quant = parseInt(prompt("How many quantaties of Product A do you want ? : "), 10);
  var prod_B_quant = parseInt(prompt("How many quantaties of Product B do you want ? : "), 10);
  var prod_C_quant = parseInt(prompt("How many quantaties of Product C do you want ? : "), 10);
  var isWrap = parseInt(prompt("Press 1 if you want to wrap product as a gift else 0 : "), 10);
  if (Number.isNaN(prod_A_quant) || Number.isNaN(prod_B_quant) || Number.isNaN(prod_C_quant) || Number.isNaN(isWrap)) {
    console.log("Invalid Input Please try again");
  }
  else {
    break;
  }
}

// Predefined Values
const priceProd_A = 20;
const priceProd_B = 40;
const priceProd_C = 50;

var totalQuant = prod_A_quant + prod_B_quant + prod_C_quant;

var cartTotal = (priceProd_A * prod_A_quant) + (priceProd_B * prod_B_quant) + (priceProd_C * prod_C_quant);

var priceAfterFlat_10 = cartTotal;
var priceAfterBulk_5 = cartTotal;
var priceAfterBulk_10 = cartTotal;
var priceAfterTier_50 = cartTotal;


if (cartTotal > 200) {
  priceAfterFlat_10 = flat_10_discount(cartTotal);
}

var totalPrice_A = bulk_5_discount(priceProd_A, prod_A_quant);
var totalPrice_B = bulk_5_discount(priceProd_B, prod_B_quant);
var totalPrice_C = bulk_5_discount(priceProd_C, prod_C_quant);

priceAfterBulk_5 = totalPrice_A + totalPrice_B + totalPrice_C;

if (totalQuant > 20) {
  priceAfterBulk_10 = bulk_10_discount(cartTotal);
}

if (totalQuant > 30 && (prod_A_quant > 15 || prod_B_quant > 15 || prod_C_quant > 15)) {
  var price_A = prod_A_quant * priceProd_A;
  var price_B = prod_B_quant * prod_B_quant;
  var price_C = prod_C_quant * priceProd_C;

  if (prod_A_quant > 15) {

    price_A = tier_50_discount(priceProd_A, prod_A_quant);
  }
  if (prod_B_quant > 15) {

    price_B = tier_50_discount(priceProd_B, prod_B_quant);
  }
  if (prod_C_quant > 15) {

    price_C = tier_50_discount(priceProd_C, prod_C_quant);
  }

  priceAfterTier_50 = price_A + price_B + price_C;
}

var amountToShow = Math.min(priceAfterFlat_10, priceAfterBulk_5, priceAfterBulk_10, priceAfterTier_50);

var discName="";

if(amountToShow === cartTotal)
    discName="No Eligible discount"
else if(amountToShow === priceAfterFlat_10)
    discName="flat_10_discount"
else if(amountToShow === priceAfterBulk_10)
    discName="bulk_10_discount"
else if(amountToShow === priceAfterBulk_5)
    discName="bulk_5_discount"
else
    discName="tiered_50_discount"

var shippingFees = Math.ceil(totalQuant/10) * 5

console.log("\n--------------------------------------------------")
console.log("--------------------------------------")
console.log("Name         Quantity        Price")
console.log("--------------------------------------\n")

console.log("Product A    ",prod_A_quant,"pcs         $",prod_A_quant*priceProd_A)
console.log("Product B    ",prod_B_quant,"pcs         $",prod_B_quant*priceProd_B)
console.log("Product C    ",prod_C_quant,"pcs         $",prod_C_quant*priceProd_C)

console.log()
console.log("Subtotal : $",cartTotal)
console.log("Discount ",discName," has been applied")
console.log("Discount Amount : $",cartTotal-amountToShow)
console.log("Shipping Fees   : $",shippingFees)  

amountToShow = amountToShow + shippingFees

if(isWrap !== 0)
    console.log("Wrapping Fees   : $",totalQuant)
    amountToShow= amountToShow + totalQuant

console.log("Total Amount    : $",amountToShow)
console.log("-------------------------------------------------------")


