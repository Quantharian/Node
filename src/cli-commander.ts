import { join, resolve } from 'path';
import { program } from 'commander';
import { RepoNoteFile } from './services/repo-notes.js';

const dataBase = resolve('../data'); //dist/services
const file = join(dataBase, 'db.json');
const repo = new RepoNoteFile(file);

program.name('CLI').description('CLI sample').version('0.8.0');

const readAll = async () => {
    const data = await repo.read();
    console.table(data);
};

program.command('all').description('Mostrar todas las notas').action(readAll);

const findNote = async (key: string) => {
    const data = await repo.read();
    const note = data.find((note) => {
        note.content.includes(key);
    });
    if (!note) {
        console.log('Note not found');
        return;
    }
    console.table(note);
};

program
    .command('find <key>')
    .description('Mostrar las notas encontradas')
    .action(findNote);

const addNote = async (content: string) => {
    const newNote = { content: content };
    const finalNote = await repo.create(newNote);
    console.log('Nota añadida', finalNote);
};

program.command('add <note>').description('Añadir una nota').action(addNote);

const updateNote = async (content: string, { id }: { id: string }) => {
    const updatedNote = { content: content };
    const finalNote = await repo.update(id, updatedNote);
    console.log('Nota añadida', finalNote);
};

program
    .command('update <note>')
    .description('Actualizar nota dando su id')
    .option('--id -i <id')
    .action(updateNote);
// program.command('update <id> <note>');

const deleteNote = async ({ id }: { id: string }) => {
    const deletedNote = await repo.delete(id);
    console.log('Nota borrada', deletedNote);
};

program.command('delete <id>').option('--id -i <id').action(deleteNote);

program.command('help');

program.parse();
