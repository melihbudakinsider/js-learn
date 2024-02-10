const STOCKS = [
    { symbol: "XFX", price: 240.22, volume: 23432 },
    { symbol: "TNZ", price: 332.19, volume: 234 },
    { symbol: "JXJ", price: 120.22, volume: 5323 }
];

/**
 * array yapılarının metotları birbirleri ile doğrudan bağlanarak çalışabilirler. Bu örnekte .filter() bir dizi
 * üretmektedir. Bu dizi Array.prototype.map fonksiyonunu kalıtabildiği için .map() yazdığımızda chaining işlemini
 * sorunsuz gerçekleştirebiliriz. Sadece filter ve map değil, .find(), .flat(), .join() vb. gibi Array.prototype 
 * içerisinde bulunan bütün metotları da bu zincirde kullanabiliriz.
 */
const getFilteredStockSymbols = (stocks, minPrice) => stocks
    .filter((stock) => stock.price >= minPrice)
    .map((stock) => stock.symbol);

console.log(getFilteredStockSymbols(STOCKS, 150.00));