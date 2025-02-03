import { ODMLite } from '../odm/odm-lite.js';
import { Note } from '../types/types';
import { Repository, TypeODM } from '../types/types';

export class RepoNoteFile implements Repository<Note> {
    odm: TypeODM<Note>;
    collection: string;
    constructor(file = 'db.json', collection = 'item') {
        this.odm = new ODMLite<Note>(file);
        this.collection = collection;
    }

    async read(): Promise<Note[]> {
        return await this.odm.read(this.collection);
    }
    async readById(id: string) {
        return await this.odm.readById(this.collection, id);
    }
    async create(data: Omit<Note, 'id'>) {
        return await this.odm.create(this.collection, data);
    }
    async update(id: string, data: Partial<Omit<Note, 'id'>>) {
        return await this.odm.updateById(this.collection, id, data);
    }
    async delete(id: string) {
        return await this.odm.deleteById(this.collection, id);
    }
}

const repo = new RepoNoteFile();
repo.read().then(console.log);
