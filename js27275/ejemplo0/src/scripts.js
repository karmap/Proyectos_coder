console.log('Inician mis scripts');

// const getCryptoPrice = (crypto, callback) => {
//     const URL = `https://api.coinbase.com/v2/prices/${crypto}-USD/spot`
//     let response = false
//     fetch( URL )
//         .then( res => res.json() )
//         .then( res => {
//             const {data: {amount: price}} = res
//             // console.log(res);
//             // console.log(price);
//             callback(price)
//         })
//         .catch( err => {
//             console.log('Hubo algún error', err);
//         })
// }

// function callback(price) {
//     console.log(price);
// }

const getCryptoPrice = async (crypto) => {
    const URL = `https://api.coinbase.com/v2/prices/${crypto}-USD/spot`
    
    const req = await fetch( URL )
    const res = await req.json()
    
    return res.data?.amount ?? false
}

const renderPrices = (...prices) => {
    const root = document.getElementById('root')
    root.innerHTML = null
    prices.forEach( e => {
        const li = document.createElement('li')
        li.innerText = `${e.label} - ${e.price}`
        root.appendChild(li)
    })
} 

const updatePrices = async () => {
    const btcPrice = await getCryptoPrice('BTC')
    const ethPrice = await getCryptoPrice('ETH')
    const adaPrice = await getCryptoPrice('ADA')
    renderPrices({label: 'BTC', price: btcPrice}, {label: 'ETH', price: ethPrice}, {label: 'ADA', price: adaPrice})
}

updatePrices()

const updateButton = document.getElementById('update')
updateButton.addEventListener('click', () => {
    console.log('actualiza precios');
    updatePrices()
})


