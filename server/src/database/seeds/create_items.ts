import Knex from 'knex';


export async function seed (knex: Knex){
    knex('items').insert([
        { title: 'Lâmpadas', Image: 'lampada.svg' },
        { title: 'Pilhas e Baterias', Image: 'baterias.svg' },
        { title: 'Papéis e Papelão', Image: 'papeis-papelao.svg' },
        { title: 'Resíduos Eletrônicos', Image: 'eletronicos.svg' },
        { title: 'Resíduos Orgânicos', Image: 'organicos.svg' },
        { title: 'Óleo de Cozinha', Image: 'oleo.svg' },
    ]);
};