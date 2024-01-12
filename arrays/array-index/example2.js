const cat = {
    name: 'Cat'
}

const dog = {
    name: 'Dog'
}

const bird = {
    name: 'Bird'
}

const concatedAnimal = [cat, dog, bird]

/**
 * indexOf metodu bir objeyi de kontrol edebilir. Objeler referansları ile oluştuğu için indexOf referansın
 * bu dizide var olup olmadığını kontrol eder. Eğer varsa index değerini döndürür.
 */
console.log(concatedAnimal.indexOf(dog));