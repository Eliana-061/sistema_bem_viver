// Importa a conexão com o serviço de autenticação
import { auth } from "./firebase.js";
import {
    onAuthStateChanged, //verifica se tem algum usuário logado
    signOut // pra sair
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

// Pega os elementos do formulário
const userEmail = document.getElementById("userEmail");
const logoutButton = document.getElementById("botaoSair");

//Verifica autenticação - para que o usuário não consiga acessar a página sem fazer o login
onAuthStateChanged( auth,(usuario) =>{
  if (!usuario) {
    window.location.href = "index.html";
    return;
  }
  userEmail.textContent = `Usuário: ${usuario.email}`;
});

//Botão sair
logoutButton.addEventListener("click", async () =>{
  try{
    await signOut(auth); //Encerra a sessão do usuário
    window.location.href ="index.html";
  }catch(error){
    console.error( "Erro ao sair:", error );
  }
});