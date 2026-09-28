const formLogin = document.getElementById("formLogin");
const usuarioInput = document.getElementById("usuario");
const senhaInput = document.getElementById("senha");
const telaLogin = document.getElementById("telaLogin");
const telaProfessor = document.getElementById("telaProfessor");
const telaOrientador = document.getElementById("telaOrientador");
const agendaSemanal = document.getElementById("agendaSemanal");

const cardDia = document.createElement("div");
cardDia.classList.add("card-dia");
const tituloDia = document.createElement("h2");
tituloDia.textContent = "Segunda-feira";
cardDia.appendChild(tituloDia);
agendaSemanal.appendChild(cardDia);
const dataDia = document.createElement("p");
dataDia.textContent = "Data: 27/09/2026";
cardDia.appendChild(dataDia);

const listaDeHorarios = document.createElement("ul");
const horaInicio = 9;
for (let i = 0; i < 16; i++){
    const totalMinutos = i * 30;

    const horas = Math.floor(totalMinutos / 60) + horaInicio;
    const minutos = totalMinutos % 60;

    if (horas === 12) {
        continue;
    }


    const horaFormatada = String(horas).padStart(2, '0');
    const minutosFormatados = String(minutos).padStart(2, '0');
    
    const elementoHorario = document.createElement("li");
    elementoHorario.classList.add("card-horario");
    elementoHorario.textContent = `${horaFormatada}:${minutosFormatados}`;
    listaDeHorarios.appendChild(elementoHorario);

   
};

cardDia.appendChild(listaDeHorarios);

telaProfessor.style.display = "none";
telaOrientador.style.display = "none";

formLogin.addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário
    
    if (usuarioInput.value === "professor" && senhaInput.value === "1234") {
    alert("Login correto!");

    telaLogin.style.display = "none";    
    telaProfessor.style.display = "block";
    telaOrientador.style.display = "none";
    } else if (usuarioInput.value === "orientador" && senhaInput.value === "5678") {
        alert("Login correto!");

        telaLogin.style.display = "none";
        telaProfessor.style.display = "none";
        telaOrientador.style.display = "block";
    } else {
        alert("Usuário ou senha incorretos!");
    }

    console.log("Formulário enviado!");
    console.log("Usuário:", usuarioInput.value);
    console.log("Senha:", senhaInput.value);

});