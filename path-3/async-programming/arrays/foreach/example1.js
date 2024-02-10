const STOCKS = [
    { symbol: "XFX", price: 240.22, volume: 23432 },
    { symbol: "TNZ", price: 332.19, volume: 234 },
    { symbol: "JXJ", price: 120.22, volume: 5323 }
];

const getStockSymbols = (stocks) => {
    const symbols = [];

    /**
     * forEach herhangi bir çıktı üretmeden sadece dizinin elemanlarını tek tek dönmemizi sağlar.
     * Bu kısımda da stocks içerisindeki elemanları tek tek döndürerek symbol attributeunu almaya çalışıyoruz.
     */
    stocks.forEach((stock) => {
        symbols.push(stock.symbol);
    });

    return symbols;
}

console.log(getStockSymbols(STOCKS));