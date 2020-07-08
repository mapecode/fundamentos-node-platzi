let nombre = process.env.NOMBRE || 'Sin nombre' /* default */; // NOMBRE=Mario node conceptos/entorno.js
let web = process.env.MI_WEB || 'no tengo web' /* default */;

console.log('Hola '+ nombre);
console.log('Mi web es '+ web);
