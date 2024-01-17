import math
from functions import *

#  Taking user Input and re-running if user enters invalid input
while True:
    try:
        prod_A_quant = int(input("How many quantaties of Product A do you want ? : "))
        prod_B_quant = int(input("How many quantaties of Product B do you want ? : "))
        prod_C_quant = int(input("How many quantaties of Product C do you want ? : "))
        isWrap = int(input("If you want to wrap your gift press any number other than 0 , else press 0 : "))

        break

    except ValueError:
        print("You can only enter whole number as Input")

# Predefined Values
priceProd_A = 20
priceProd_B = 40
priceProd_C = 50

totalQuant = prod_A_quant + prod_B_quant + prod_C_quant
cartTotal = (priceProd_A * prod_A_quant) + (priceProd_B * prod_B_quant) + (priceProd_C * prod_C_quant)

priceAfterFlat_10 = cartTotal
priceAfterBulk_5 = cartTotal
priceAfterBulk_10 = cartTotal
priceAfterTier_50 = cartTotal

if (cartTotal > 200):
    priceAfterFlat_10 = flat_10_discount(cartTotal)
 
totalPrice_A = bulk_5_discount(priceProd_A, prod_A_quant)
totalPrice_B = bulk_5_discount(priceProd_B, prod_B_quant)
totalPrice_C = bulk_5_discount(priceProd_C, prod_C_quant)

priceAfterBulk_5 = totalPrice_A + totalPrice_B + totalPrice_C

if (totalQuant > 20):
    priceAfterBulk_10 = bulk_10_discount(cartTotal)
 
if (totalQuant > 30 and (prod_A_quant > 15 or prod_B_quant > 15 or prod_C_quant > 15)):

    price_A = prod_A_quant * priceProd_A
    price_B = prod_B_quant * priceProd_B
    price_C = prod_C_quant * priceProd_C

    if (prod_A_quant > 15):
         price_A = tier_50_discount(priceProd_A, prod_A_quant)
     
    if (prod_B_quant > 15):
         price_B = tier_50_discount(priceProd_B, prod_B_quant)
    
    if (prod_C_quant > 15): 
         price_C = tier_50_discount(priceProd_C, prod_C_quant)
     
    priceAfterTier_50 = price_A + price_B + price_C
 
amountToShow = min(priceAfterFlat_10, priceAfterBulk_5, priceAfterBulk_10, priceAfterTier_50)

discName=""

if(amountToShow == cartTotal):
    discName="No Eligible discount"
elif(amountToShow == priceAfterFlat_10):
    discName="flat_10_discount"
elif(amountToShow==priceAfterBulk_10):
    discName="bulk_10_discount"
elif(amountToShow==priceAfterBulk_5):
    discName="bulk_5_discount"
else:
    discName="tiered_50_discount"

shippingFees = math.ceil(totalQuant/10) * 5

print("\n--------------------------------------------------")
print("--------------------------------------")
print("Name         Quantity        Price")
print("--------------------------------------\n")

print("Product A    ",prod_A_quant,"pcs         $",prod_A_quant*priceProd_A)
print("Product B    ",prod_B_quant,"pcs         $",prod_B_quant*priceProd_B)
print("Product C    ",prod_C_quant,"pcs         $",prod_C_quant*priceProd_C)

print()
print("Subtotal : $",cartTotal)
print("\nDiscount ",discName," has been applied")
print("\nDiscount Amount : $",cartTotal-amountToShow)
print("Shipping Fees   : $",shippingFees)  

amountToShow = amountToShow + shippingFees

if(isWrap != 0):
    print("Wrapping Fees    : $",totalQuant)
    amountToShow= amountToShow + totalQuant

print("\nTotal Amount  : $",amountToShow)
print("-------------------------------------------------------")
