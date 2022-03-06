export const getBasketToatal = (basket) => 
    basket.reduce((amount, iteam) => iteam.price + amount, 0)
