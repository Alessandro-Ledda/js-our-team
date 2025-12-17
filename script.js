const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

//PARTE DI SETUP
const teamContainer = document.querySelector(".team-container");

//RICHIAMO ELEMENTI DEL FORM 
const form = document.getElementById("member-form")
const nameField = document.getElementById("name");
const roleField = document.getElementById("role");
const imgField = document.getElementById("img");
const emailField = document.getElementById("email")

//RICHIAMO LA FUNZIONE PER RENDERIZZARE LA LISTA MEMBRI
renderTeam(teamMembers, teamContainer);

//GESTIONE DI AGGIUNTA NUOVO MEMBRO
form.addEventListener("submit" , addMember);




//-----------------------SEZIONE FUNZIONI ------------------------------

//FUNZIONE CHE FA IL RENDERING COMPLETO DELLA CARD DEI MEMBRI DEL TEAM
function renderTeam(arrRef, outputEl) {
  //CREO VAR PER ACCUMULARE GLI ELEMENTI IN USCITA
  let cards = "";

  //CICLO L'ARRAY DI OGETTI
  for (let i = 0; i < arrRef.length; i++) {
    //RICHIAMO OGNI VOLTA UN ELEMENTO DIVERSO E PASSO AL PROSSIMO
    const memberTeam = arrRef[i];

    //DESTRUTTURAZIONE OGETTO
    //const { name, role, img, email } = memberTeam

    //AD OGNI GIRO INCREMENTIAMO IL CONTENUTO IN USCITA (OUTPUT)
    cards += createCard(memberTeam);


  }
  //STAMPO LE CARD SU HTML
  outputEl.innerHTML = cards;
}

//FUNZIONE CHE GENERA LA CARD (STRUTTURA)
function createCard(membrObj) {
  //AD OGNI GIRO AGGIUNGIAMO UNA CARD
  const card = `
  <div class="team-card">
    <div class="card-img">
        <img src="${membrObj.img}" alt="${membrObj.name}" />
    </div>
     <div class="card-dati">
        <h3>${membrObj.name} </h3>
        <h4>${membrObj.role}</h4>
        <h5>${membrObj.email}</h5>
      </div>
  </div>
 `;
  return card
}

//FUNZIONE CREAZIONE NUOVO MEMBRO (VALORI DA INSERIRE NELLA CARD)
function addMember(event) {
  //INTERROMPIAMO FLUSSO NATURALE
  event.preventDefault();

  //RECUPERO VALORI CAMPI
  const name = nameField.value;
  const role = roleField.value;
  const img = imgField.value;
  const email = emailField.value;


  //CREO IL NUOVO OGGETTO DEL MEMBRO(INIZILIZZAZIONE NUOVA CARD)
  const newMember = {
    name,
    role,
    img,
    email,
  }
  //AGGIUNTA DEL NUOVO OGGETTO ALL'ARRAY DI PARTENZA
  teamMembers.push(newMember);

  //RESET FORM
  event.target.reset();

  //AGGIORNO PAGINA
  //RENDERIZZARE LA LISTA MEMBRI
  renderTeam(teamMembers, teamContainer);
}