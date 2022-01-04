import tmdb from './tmdb.js';

const carregarListas = async () => {
    let lista = await tmdb.pegarListaDeFilmes();
    console.log(lista)
}

carregarListas();