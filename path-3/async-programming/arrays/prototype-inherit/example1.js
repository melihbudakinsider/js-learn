const EXCHANGES = [
    [
        [
            { symbol: "XFX", price: 240.22, volume: 23432 },
            { symbol: "TNZ", price: 332.19, volume: 234 }
        ],
        [
            [
                { symbol: "XFX", price: 240.22, volume: 23432 },
                { symbol: "XFX", price: 240.22, volume: 23432 },
            ],
            { symbol: "TNZ", price: 332.19, volume: 234 }
        ]
    ],
    [
        { symbol: "JXJ", price: 120.22, volume: 5323 },
        { symbol: "NYN", price: 88.47, volume: 98275 }
    ]
];

/**
 * Bazen Array.prototype ile gelen özellikleri bizim için yetersiz kalabilir. Bu durumda bütün dizilerde
 * kullanabileceğimiz kalıtımsal fonksiyonları kendimiz de oluşturup Array sınıfına bağlayabiliriz. Sadece Array için
 * değil aynı zamanda Object gibi diğer sınıflar için de bu şekilde yeni fonksiyonlar oluşturup kullanılmasını 
 * sağlayabiliriz.
 */
Array.prototype.concatAll = function () {
    const results = [];

    /**
     * Şu an Array sınıfının içerisindeyiz. Bu yüzden "this" keywordünü kullanarak Array sınıfının kalıtılarak gelen
     * diğer metotlarına da erişebiliriz.
     */
    this.forEach(item => {
        if(item instanceof Array) {
            return results.push(...item.concatAll())
        }
        
        results.push(item)
    });


    return results;
}

console.log(EXCHANGES.concatAll())