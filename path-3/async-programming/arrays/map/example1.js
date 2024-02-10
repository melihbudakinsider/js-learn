const STOCKS = [
    { symbol: "XFX", price: 240.22, volume: 23432 },
    { symbol: "TNZ", price: 332.19, volume: 234 },
    { symbol: "JXJ", price: 120.22, volume: 5323 }
];

const getStockSymbols = (stocks) => {
    /**
     * Mantığı forEach ile aynı olan fakat stocks dizisinin her elemanını manipüle etmemizi sağlayan bir metottur.
     * Dizinin elemanları callback içerisinde döndürdüğümüz değerler ile tekrar oluşturulur ve yeni dizinin çıktısı
     * verilir.
     */
    return stocks.map((stock) => stock.symbol);
}

console.log(getStockSymbols(STOCKS));