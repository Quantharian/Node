import { foo } from './module.js';
import 'dotenv/config';

const x: string = 'Hola';
console.log(x);

foo();

// console.log(globalThis.crypto.randomUUID());
// console.log(global.crypto.randomUUID());
// console.log(crypto.randomUUID());
// console.log(global);
// console.log(global.process.argv); // argumentos
// console.log(global.process.env); // Variables de entorno
// console.log(global.process.env.USERNAME); // Mananas
// console.log(global.process.pid);
// console.log(global.process.platform);
// // console.log(global.process);
// // console.log(global.process);

const mode = process.env.NODE_ENV?.toLowerCase().trim();
console.log(`Modo: ${mode}`);
const connect = (db_Uri: string) => {
    console.log(`Conectando a la base de datos en ${db_Uri}`);
};
let db_Uri = '';
if (mode === 'dev') {
    console.log('Estamos en desarrollo');
    db_Uri = 'http://localhost:27017';
    console.log(process.env.DB_PORT);
} else {
    console.log('Estamos en producción');
    db_Uri = 'http://production.com:27017';
    console.log(process.env.DB_PORT);
}
connect(db_Uri);
