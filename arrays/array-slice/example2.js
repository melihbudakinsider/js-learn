const person = {
    name: 'melih budak'
};

const filters = {
    'deslugify': x => x.replace('-', ' '),
    'uppercase': x => x.toUpperCase()
};

const input = 'name | deslugify | uppercase';
const sections = input.split('|').map(x => x.trim());
const ref = person[sections[0]];
const output = sections
    .slice(1)
    .reduce((prev, next) => {
        if (filters[next]) {
            return filters[next].call(null, prev);
        }
        return prev;
    }, ref);

/**
 * Bu örnekte de inputu parse ettikten sonra name'i objede kullanırken geri kalan 'deslugify | uppercase'
 * parametrelerini de filtre objesinde aratmak adına slice ile diziden alıyoruz.
 */
console.log(output)