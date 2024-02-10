const STOCKS = [
    { symbol: "XFX", price: 240.22, volume: 23432 },
    { symbol: "TNZ", price: 332.19, volume: 234 },
    { symbol: "JXJ", price: 120.22, volume: 5323 }
];

const getStockOver = (stocks, minPrice) => {
    /**
     * filter metodu dizinin bütün elemanlarını dönerek bir filtreleme yapar. Dizi içerisindeki elemanları taramak ve
     * istenilen attributeların yine istenilen değerleri uyuşuyorsa elemanı yeni bir dizde döndürmek için kullanılır.
     * Asıl diziyi bozmadığı için güvenilir bir yapı sunar.
     */
    return stocks.filter((stock) => stock.price >= minPrice);
}

console.log(getStockOver(STOCKS, 150.00));