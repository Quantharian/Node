// Todos las interfaces de los métodos definen en retorno como promesas
// - TypeODM
// - Repository

import { RepoNoteFile } from './repo-notes';

// Las funciones helpers son async y retornan promesas

// La clase ODMLite pasa a ser ODMLiteAsync

// Los test de ODMLite pasan a ser async

const repo = new RepoNoteFile();
repo.read().then(console.log);
