const {sendData} = require('./data');

const searchProducts = (minPrice,maxPrice)=>{
    
    if(minPrice < 0 || maxPrice > 100000){
        return "prices are between 0 and 100000"
    }

    if(minPrice > maxPrice){
        const newMin = minPrice
        minPrice = maxPrice;
        maxPrice = newMin
    }
    var products = [];

    const getData = (min,max) =>{
        const response = sendData(min,max);
        if(response.total == response.count && max<= maxPrice){
            products = [...products, ...response.products]
            const newMax = 2*max - min;
            getData(max,newMax)
        }else if(response.count<response.total){
            const newMax = (min + max)/2;
            getData(min,newMax)
        }
    } 

    getData(minPrice,maxPrice)
    return products;
}

module.exports = { searchProducts };