import math
def flat_10_discount(cartTotal):
    return cartTotal - 10
 
def bulk_5_discount(price, quant):
    totPrice = price * quant
    if (quant >= 10):
        return (totPrice - ((totPrice * 5) / 100))
    else:
        return totPrice
 
def bulk_10_discount(total): 
    return (total - (total * 10) / 100)
 
def tier_50_discount(price, quant):
    remQuant = quant - 15
    return (15 * price) + ((remQuant * price) - (remQuant * price * 50) / 100)