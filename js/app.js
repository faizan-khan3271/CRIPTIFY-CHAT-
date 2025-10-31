// app.js
import { auth, db } from "./firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } 
  from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";
import { ref, set, push, onChildAdded } 
  from "https://www.gstatic.com/firebasejs/11.0.0/firebase-database.js";

// Temporary: basic signup/login simulation
document.querySelector("#signup-btn").onclick = async () => {
  const email = document.querySelector("#signup-email").value;
  const pass = document.querySelector("#signup-pass").value;
  await createUserWithEmailAndPassword(auth, email, pass);
  alert("Account created! You can now login.");
};

document.querySelector("#login-btn").onclick = async () => {
  const email = document.querySelector("#login-email").value;
  const pass = document.querySelector("#login-pass").value;
  await signInWithEmailAndPassword(auth, email, pass);
  alert("Login successful!");
};
