const fs = require('fs')

const readData = () =>{
    const rawdata = fs.readFileSync(
        require('path').resolve(__dirname, '../mock.json'),
        'utf8',
        (err) => {
            if (err) {
                console.log('File read failed:', err)
                return
            }
        }
    )
    
    return JSON.parse(rawdata);
}

const sendData = (minPrice,maxPrice) =>{
    const data = readData();
    var products = []
    const result = data.filter(element => element.price >= minPrice && element.price <= maxPrice);
    const total = result.length;
    var count = 10;
    if(total < 10){
        count = total;
        products = result;
    }
    else{
        products = result.slice(0,10)
    }
 
    return {total:total, count:count, products:products}
}

module.exports = { sendData };