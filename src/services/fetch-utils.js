import { client } from './client';

export async function signUp(email, password) {

  const { user } = await client.auth.signUp({
    email: email,
    password: password,
  });

  return user;
}

export async function signIn(email, password) {
  const { user } = await client.auth.signIn({
    email: email,
    password: password,
  });
    
  return user;
}

export async function logout() {
  await client.auth.signOut();
}


export async function getClass() {
  const rawData = await fetch(`/.netlify/functions/dnd?classes`);
  
  const { data } = await rawData.json();
  
  
  return data;
}

export async function getRace() {
  const rawData = await fetch(`/.netlify/functions/dndr?races`);

  const { data } = await rawData.json();
  console.log(data);
  return data;
}