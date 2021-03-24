// I dalis

// 1. pasiimti MAIN elementą, jam priskirti klasę body
document.querySelector('main').classList.add('body');
// 2. pasiimti H1 elementą, jam priskirti klasę heading
document.querySelector('h1').classList.add('heading');
// 3. pasiimti FORM elementą, jam priskirti klasę form
document.querySelector('form').classList.add('form');
// 4. sukurti ir į UL elementą įterpti BENT vieną li elementą 
//su klase list-item.
const ul = document.getElementById('todo');
// const li = document.createElement('li');
// li.classList.add('list-item');
// li.innerText = 'blabla';
// ul.appendChild(li);

// II dalis

// 1. įgyvendinti sąrašo funkcionalumą: paspaudus ant li elemento, 
//jam pridedama (jei nėra) klasė .done, ir nuimama jei yra
// li.addEventListener('click',function(){
//     li.classList.toggle('done');
// });
// li.addEventListener('dblclick', function(){
//     li.remove();
// });

// III dalis

// panaudoti iki šiol parašytą kodą ir pabaigti programą:
// 1. vartotojui įvedus tekstą input laukelyje, tekstas pridedamas į sąrašą (kartojame veiksmus: elementas sukuriamas, jam priskiriamas input tekstas, klasė list-item, naujas elementas įtraukiamas į ul)
// 2. pridėjus tekstą į sąrašą input laukas išvalomas
// 3. du kartus paspaudus list elementą jis pašalinamas


const input = document.getElementById('input');
const button = document.getElementById('button');

button.addEventListener('click', function(){
    const li = document.createElement('li');
    li.classList.add('list-item');
    li.innerText = input.value;
    ul.appendChild(li);
    input.value = '';

    li.addEventListener('dblclick', function(){
        li.remove();
    });

    li.addEventListener('click', function(){
        li.classList.toggle('done');
    });
});



