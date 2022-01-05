import tmdb from './tmdb.js';

// PEGAR OBJETOS DO TMDB

let listaDeFilmes = [];

const carregarListas = async () => {
    let lista = await tmdb.pegarListaDeFilmes();
    listaDeFilmes = lista;
}
await carregarListas();

// RETORNAR OS POSTERS DOS FILMES

let sectionFilmes = document.getElementById('section-filmes');

async function retornarTitulosGeneros() {
    let titulos = listaDeFilmes.map((lista) => {
        return `
            <h1>${lista.titulo}</h1>
        `
    }).join("");

    sectionFilmes.innerHTML = titulos;
}

await retornarTitulosGeneros();


