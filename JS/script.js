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

const listaManha = document.createElement("ul");
const tituloManha = document.createElement("h3");
tituloManha.textContent = "Manhã";

const listaTarde = document.createElement("ul");
const tituloTarde = document.createElement("h3");
tituloTarde.textContent = "Tarde";

const agendamento= {

        nomeAluno: nomeAluno,
        turmaAluno: turmaAluno,
        motivoAtendimento: motivoAtendimento,
        horarioSelecionado: horarioSelecionado
    }

const horarioSelecionadoTexto = document.createElement("p");
horarioSelecionadoTexto.textContent = "Horário selecionado: Nenhum";
cardDia.appendChild(horarioSelecionadoTexto);

const formularioAgendamento = document.createElement("form");
formularioAgendamento.addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const nomeAluno = inputAluno.value;
    const turmaAluno = inputTurma.value;
    const motivoAtendimento = textareaMotivo.value;
    const horarioSelecionado = horarioSelecionadoTexto.textContent.replace("Horário selecionado: ", "");
    horarioSelecionadoCard.textContent = `${horarioSelecionado} - ${nomeAluno} - ${turmaAluno} - Agendado ` ;

    
    console.log(agendamento);
    console.log("Dados do agendamento:");
    console.log("Nome do Aluno:", nomeAluno);
    console.log("Turma:", turmaAluno);
    console.log("Motivo do Atendimento:", motivoAtendimento);
    console.log("Horário Selecionado:", horarioSelecionado);
    

});
formularioAgendamento.classList.add("form-agendamento");
const tituloFormulario = document.createElement("h3");
tituloFormulario.textContent = "Agendar Atendimento";
formularioAgendamento.appendChild(tituloFormulario);
formularioAgendamento.style.display = "none"; // Inicialmente oculto

const labelAluno = document.createElement("label");
labelAluno.textContent = "Nome do Aluno:";
const inputAluno = document.createElement("input");
inputAluno.type = "text";
const labelTurma = document.createElement("label");
labelTurma.textContent = "Turma:";
const inputTurma = document.createElement("input");
inputTurma.type = "text";
const labelMotivo = document.createElement("label");
labelMotivo.textContent = "Motivo do Atendimento:";
const textareaMotivo = document.createElement("textarea");
textareaMotivo.rows = 5;
const botaoAgendar = document.createElement("button");
botaoAgendar.type = "submit";
botaoAgendar.textContent = "Agendar Horário";

formularioAgendamento.appendChild(labelAluno);
formularioAgendamento.appendChild(inputAluno);
formularioAgendamento.appendChild(labelTurma);
formularioAgendamento.appendChild(inputTurma);
formularioAgendamento.appendChild(labelMotivo);
formularioAgendamento.appendChild(textareaMotivo);
formularioAgendamento.appendChild(botaoAgendar);
const horaInicio = 9;
let horarioSelecionadoCard = null;
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
    if (horas < 12) {
        listaManha.appendChild(elementoHorario);
    } else {
        listaTarde.appendChild(elementoHorario);
    }

    elementoHorario.addEventListener("click", function() {
        const horarioSelecionado = `${horaFormatada}:${minutosFormatados}`;

        console.log("Você clicou no horário ", horarioSelecionado);

        horarioSelecionadoTexto.textContent = `Horário selecionado: ${horarioSelecionado}`;

        formularioAgendamento.style.display = "block";

        horarioSelecionadoCard = elementoHorario;
    });
   
};


cardDia.appendChild(formularioAgendamento);
cardDia.appendChild(tituloManha);
cardDia.appendChild(listaManha);
cardDia.appendChild(tituloTarde);
cardDia.appendChild(listaTarde);


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