/**
 * Sonsuz parametre alan bir değere sahiptir ve içerisine istediğimiz verileri gönderebiliriz.
 */
const ex1 = [1, 2, 3].concat(4, 5, 6);

/**
 * concat içerisine aldığı arraylerin içerisindeki elemanları kendi dizisinin elemanları haline getirir.
 * 1 seviye derinlikte işlem yapar. Dizi içerisinde dizi oluşturulursa direkt diziyi eleman olarak kendi dizisine
 * ekler.
 */
const ex2 = [1, 2, 3].concat([4, 5, 6], [7]);

console.log(ex2);