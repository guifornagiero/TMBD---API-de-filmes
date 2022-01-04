const API_KEY = '757944ccecbaaed06207d283926a4435';
const API_BASE = 'https://api.themoviedb.org/3';

const fetchApi = async (endpoint) => {
    const requisition = await fetch(`${API_BASE}${endpoint}`);
    const json = await requisition.json();
    return json;
}

export default {
    pegarListaDeFilmes: async () => {
        return [
            {
                codigo: 'trending',
                titulo: 'Filmes em Alta',
                itens: await fetchApi(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                codigo: 'acao',
                titulo: 'Filmes de Ação',
                itens: await fetchApi(`/discover/movie/?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                codigo: 'aventura',
                titulo: 'Filmes de Aventura',
                itens: await fetchApi(`/discover/movie/?with_genres=12&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                codigo: 'comedia',
                titulo: 'Filmes de Comédia',
                itens: await fetchApi(`/discover/movie/?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                codigo: 'terror',
                titulo: 'Filmes de Terror',
                itens: await fetchApi(`/discover/movie/?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                codigo: 'romance',
                titulo: 'Filmes de Romance',
                itens: await fetchApi(`/discover/movie/?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                codigo: 'ficcao',
                titulo: 'Filmes de Ficção Científica',
                itens: await fetchApi(`/discover/movie/?with_genres=878&language=pt-BR&api_key=${API_KEY}`)
            }
        ]
    }
}