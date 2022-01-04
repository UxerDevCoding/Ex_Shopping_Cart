const frutas = [];

const fruta = prompt("🏪 Opencor 🍉 ¿qué fruta desea comprar?");

frutas.push(fruta);

while (confirm("Desea agregar otro elemento al 🛒")) {
    const fruta = prompt("¿qué fruta desea comprar");
    frutas.push(fruta);
}

console.log("Compraste:");
for (const fruta of frutas) {
    console.log(fruta);
}

// Es posible utilizar un forEach en luga del for of
console.log('Usted compró: ')
frutas.forEach((fruta, index) => (
    console.log(`${index + 1}: ${fruta}`)
))