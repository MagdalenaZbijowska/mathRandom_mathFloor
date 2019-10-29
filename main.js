const btn = document.querySelector('button');

const names = ['Magda', 'Ola', 'Monika', 'Blanka', 'Inga', 'Jola', 'Wiola'];
const div = document.querySelector('div');

const prefix = ['moim zdaniem', 'jak dla mnie', 'najlepiej'];



const nameGenerator = () => {
    const indexNames = Math.floor(Math.random() * names.length);
    const indexPrefix = Math.floor(Math.random() * prefix.length);
    div.textContent = `${prefix[indexPrefix]} wybierz imie ${names[indexNames]}`;
}


btn.addEventListener('click', nameGenerator);