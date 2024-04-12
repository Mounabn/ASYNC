// let Promis = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         resolve("Données récupérées avec succès");

//     }, 1000);

// });
//Task1
async function iterateWithAsyncAwait(array) {
    for (let value of array) {
      console.log(value);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
  


//Task2
async function fetchDataFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Données récupérées de l'API");
    }, 1000);
  });
}
awaitCall();


//task3
async function awaitCall() {
  try {
    const data = await fetchDataFromAPI();
    console.log(data);
  } catch (error) {
    console.error(
      "Une erreur s'est produite lors de la récupération des données."
    );
  }
}


async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function firstAsyncFunction() {
await delay(1000);
console.log("Première fonction asynchrone terminée");
}

async function secondAsyncFunction() {
await delay(1000);
console.log("Deuxième fonction asynchrone terminée");
}

async function thirdAsyncFunction() {
await delay(1000);
console.log("Troisième fonction asynchrone terminée");
}

async function chainedAsyncFunctions() {
await firstAsyncFunction();
await secondAsyncFunction();
await thirdAsyncFunction();
}


chainedAsyncFunctions();