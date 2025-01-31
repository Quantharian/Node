import { resolve, join } from 'path';
import fs from 'fs';

const dataPath = resolve('../data');
console.log(dataPath);
const file = join(dataPath, 'test.txt');

// fs.writeFileSync(file, 'Hola mundo');

// const content = fs.readFileSync(file, { encoding: 'utf-8' });
// console.log(content.toString());

fs.writeFile(file, 'Blood and Hell', (error) => {
    if (error) {
        console.error(error);
    }
});

fs.readFile(file, { encoding: 'utf-8' }, (error, content) => {
    console.log(content);
});
