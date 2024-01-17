export function flat_10_discount(cartTotal) {
    return cartTotal - 10;
  }
  
  export function bulk_5_discount(price, quant) {
  
    var totPrice = price * quant;
  
    if (quant >= 10) return (totPrice - ((totPrice * 5) / 100));
    else return totPrice;
  
  }
  
  export function bulk_10_discount(total) {
  
    return (total - (total * 10) / 100);
  }
  
  export function tier_50_discount(price, quant) {
    var remQuant = quant - 15;
    return (15 * price) + ((remQuant * price) - (remQuant * price * 50) / 100);
  }