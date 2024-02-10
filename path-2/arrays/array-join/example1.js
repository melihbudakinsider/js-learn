const nameStr = "melih budak";

const upper = nameStr.split(' ')
    .map(word => word[0].toLocaleUpperCase() + word.slice(1))
    .join(" ");

console.log(upper);