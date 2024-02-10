const items = [10, 100000, 200];

items.sort((a, b) => a - b)

/**
 * Bir önceki örnekte de bahsettiğim gibi .sort() dizi elemanlarını binary dizilime göre sıralar. Bu yüzden
 * yukarıdaki örnekte olduğu gibi items içerisindeki 100000 değeri doğru şekilde sıraya girmeyecektir.
 * Bunu önlemek için sort bir callback parametre alır. Yukarıdaki gibi yazıldığında değer doğru bir şekilde
 * sıralanacaktır.
 */
console.log(items);