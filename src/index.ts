import { Livro } from './Livro';
import { Revista } from './Revista';
import { LivroDigital } from './LivroDigital';
import { Usuario } from './Usuario';
import { Biblioteca } from './Biblioteca';

const livro1 = new Livro(1, 'O Senhor dos Anéis', 1954, 'J.R.R. Tolkien', 'Allen & Unwin', 1178);
const livro2 = new Livro(2, '1984', 1949, 'George Orwell', 'Secker & Warburg', 328);
const revista1 = new Revista(3, 'National Geographic', 2021, 250, 'Mensal');
const livroDigital1 = new LivroDigital(4, 'Clean Code', 2008, 'Robert C. Martin', 'Prentice Hall', 464, 'PDF', 5, 'http://example.com/clean-code');

const usuario1 = new Usuario(1, 'João Silva', 'joao.silva@example.com', '1234-5678');
const usuario2 = new Usuario(2, 'Maria Oliveira', 'maria.oliveira@example.com', '8765-4321');

const biblioteca = new Biblioteca();
biblioteca.adicionarItem(livro1);
biblioteca.adicionarItem(livro2);
biblioteca.adicionarItem(revista1);
biblioteca.adicionarItem(livroDigital1);

usuario1.emprestarItem(livro1);
usuario1.emprestarItem(revista1);
usuario2.emprestarItem(livro2);

console.log('Itens emprestados por João:', usuario1.itensEmprestados.map(item => item.exibirDetalhes()));
console.log('Itens emprestados por Maria:', usuario2.itensEmprestados.map(item => item.exibirDetalhes()));

usuario1.devolverItem(livro1.id);
console.log('Após devolução, itens emprestados por João:', usuario1.itensEmprestados.map(item => item.exibirDetalhes()));

const resultados = biblioteca.buscarItens('1984');
console.log('Resultados da busca por "1984":', resultados.map(item => item.exibirDetalhes()));