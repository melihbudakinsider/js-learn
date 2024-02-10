const EXCHANGES = [
    [
        [
            { symbol: "XFX", price: 240.22, volume: 23432 },
            { symbol: "TNZ", price: 332.19, volume: 234 }
        ]
    ],
    [
        { symbol: "JXJ", price: 120.22, volume: 5323 },
        { symbol: "NYN", price: 88.47, volume: 98275 }
    ]
];

const concatAll = function () {
    const results = [];

    this.forEach(item => {
        if(item instanceof Array) {
            return results.push.apply(results, concatAll.apply(item, arguments));
        }
        
        results.push(item)
    });

    return results;
}

console.log(concatAll.apply(EXCHANGES, arguments))