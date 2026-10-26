/* SCRIPT DO INDEX MENU */
// Cria a variável MenuToggle
/* document: É um objeto global no JavaScript que representa toda
pág Web (o DOM). */
/* getElementById ('mobile-menu'): É um método (uma função) do
objeto document. ELe busca na pág por um elemento HTML que tenha exatamente
o atributo id="mobile-menu". Se encontrar, ele "captura" esse elemento. */

const MenuToggle = document.getElementById('mobile-menu');
/* Cria a variável navList */
const navList = document.getElementById('nav-lis');

//Alterna a classe 'active' ao clicar no icone

/* .addEventListener ('click' ...): É um método que "fica ouvindo"
um evento acontecer no elemento. Neste caso, ele espera por um evento
de 'click' (um click do mouse ou click na tela). Quando o click acontece
ele executa a função que está dentro dele. */

/* .classList: É uma propriedade que permite ler e modificar as classes
CSS do elemento navList. */

/* .toggle('active'): É um método muito útil do classList. Ele
funciona com um "interruptor de luz": se a classe CSS chamada 'active'
já estiver no elemento, ele a remove; se não estiver, ele a adiciona.
É isso que faz o menu, abrir e fechar alternadamente. */

MenuToggle.addEventListener('click', () => {
    navList.classList.('toggle');
});
