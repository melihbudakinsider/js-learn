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
            return results.push(...concatAll.apply(item, undefined));
        }
        
        results.push(item)
    });

    return results;
}

const getConcatedArray = concatAll.bind(EXCHANGES, undefined)

console.log(getConcatedArray())