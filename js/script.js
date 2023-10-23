myOurTeam()

function myOurTeam(){



// creo oggetto

const ourTeam = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        picture: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        picture: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        picture: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        picture: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        picture: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        picture: 'barbara-ramos-graphic-designer.jpg'
    },
]
// prendo il divRow
const divRow = document.getElementById('cardsRow');
//console.log( ourTeam);
// stampo le cards
for (let index = 0; index < ourTeam.length; index++) {
    const element = ourTeam[index];
    printCards(element);
}
//prendo il bottone sign-in
const btnSign = document.getElementById('btn-add');
btnSign.addEventListener('click', catchInput);


/********************************************************************************************** */
// FUNZIONI

// funzione che stampa le cards a schermo
function printCards(element) {


    
    const divCol = document.createElement('div');
    divCol.classList.add('col');

    let name = element.name;
    //console.log(index + " " + name);
    let role = element.role;
    //console.log(index + " " + role);
    let picture = element.picture;
    //console.log(index + " " + picture)
    //console.log('***********************');
    const template = `<div class="card my-card">
<img src="img/${picture}" class="card-img-top" alt="${name}">
<div class="card-body">
  <h5 class="card-title text-capitalize">${name} </h5>
  <p class="card-text text-capitalize">${role}</p>
  
</div>
</div>`;
    divCol.innerHTML = template;
    divRow.append(divCol);



}

//cattura input
function catchInput(){
    //const inputCollect = document.getElementsByName('photo');
    //console.dir(inputCollect[0].value);
    const newTeamPartner={
        name : document.getElementsByName('name')[0].value,
        role: document.getElementsByName('role')[0].value,
        picture:'paquito-navarro.jpg'
    }
    ourTeam.push(newTeamPartner);
    printCards(newTeamPartner);
    return newTeamPartner;
}



}
