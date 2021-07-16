
// 1. Composite function

const rokket = a => b => c => a * b * c;
console.log(rokket(2)(5)(3))
console.log(rokket(4)(2)(2))
console.log(rokket(8)(2)(1))


// 2. Longest string 

const rokket = (array) => {
  return array.sort( (a, b) => {   // Step1. Retorna un arreglo con los items ordenados (De mayor a menor segun el length de cada item)
    return b.length - a.length
  })[0]                            // Step2. resuelvo con el retorno del indice 0, que corresponde al Item del arreglo con el mayor length
}

console.log(rokket(['best', 'company', 'ever']))


// 3. String repetition

const rokket = (a, n) => {
  let value = ''
  while (n != 0) {
    value += a
    n -= 1
  } 
  return value
}

console.log(rokket('node', 5))

// 4. Only last names

const rokket = (contacts) => {
  return contacts.map(x => x.lastName)
}

const contacts = [
  { firstName: 'Juanito', lastName: 'Rokket' },
  { firstName: 'James', lastName: 'Bond' },
  { firstName: 'Harry', lastName: 'Potter' }
]

console.log(rokket(contacts))

// 5. Unique numbers

const rokket = (param1, param2) => {
  const array = [...param1, ...param2]
  return Array.from(new Set(array))
}
console.log(rokket([1, 2, 5], [2, 1, 6]))
console.log(rokket([1, 2, 3], [4, 5, 6])) 

const clients = [
  { id: 1, taxNumber: "86620855", name: "HECTOR ACUÑA BOLAÑOS" },
  { id: 2, taxNumber: "7317855K", name: "JESUS RODRIGUEZ ALVAREZ" },
  { id: 3, taxNumber: "73826497", name: "ANDRES NADAL MOLINA" },
  { id: 4, taxNumber: "88587715", name: "SALVADOR ARNEDO MANRIQUEZ" },
  { id: 5, taxNumber: "94020190", name: "VICTOR MANUEL ROJAS LUCAS" },
  { id: 6, taxNumber: "99804238", name: "MOHAMED FERRE SAMPER" },
];
const accounts = [
  { clientId: 6, bankId: 1, balance: 15000 },
  { clientId: 1, bankId: 3, balance: 18000 },
  { clientId: 5, bankId: 3, balance: 135000 },
  { clientId: 2, bankId: 2, balance: 5600 },
  { clientId: 3, bankId: 1, balance: 23000 },
  { clientId: 5, bankId: 2, balance: 15000 },
  { clientId: 3, bankId: 3, balance: 45900 },
  { clientId: 2, bankId: 3, balance: 19000 },
  { clientId: 4, bankId: 3, balance: 51000 },
  { clientId: 5, bankId: 1, balance: 89000 },
  { clientId: 1, bankId: 2, balance: 1600 },
  { clientId: 5, bankId: 3, balance: 37500 },
  { clientId: 6, bankId: 1, balance: 19200 },
  { clientId: 2, bankId: 3, balance: 10000 },
  { clientId: 3, bankId: 2, balance: 5400 },
  { clientId: 3, bankId: 1, balance: 9000 },
  { clientId: 4, bankId: 3, balance: 13500 },
  { clientId: 2, bankId: 1, balance: 38200 },
  { clientId: 5, bankId: 2, balance: 17000 },
  { clientId: 1, bankId: 3, balance: 1000 },
  { clientId: 5, bankId: 2, balance: 600 },
  { clientId: 6, bankId: 1, balance: 16200 },
  { clientId: 2, bankId: 2, balance: 10000 },
];
const banks = [
  { id: 1, name: "SANTANDER" },
  { id: 2, name: "CHILE" },
  { id: 3, name: "ESTADO" },
];

// 0 Arreglo con los ids de clientes
function listClientsIds() {
  return clients.map((client) => client.id);
}

// 1 Arreglo con los ids de clientes ordenados por rut
function listClientsIdsSortByTaxNumber() {
  return clients
    .map((c) => {
      return {
        id: c.id,
        taxNumber: c.taxNumber.slice(0, -1),
      };
    })
    .sort((a, b) => a.taxNumber - b.taxNumber)
    .map((c) => c.id);
}

// 2 Arreglo con los nombres de cliente ordenados de mayor a menor por la suma TOTAL de los saldos de cada cliente en los bancos que participa.
function sortClientsTotalBalances() {
  // CODE HERE
  return clients
    .map((c) => {
      return {
        ...c,
        totalBalance: accounts
          .filter((a) => a.clientId === c.id)
          .map((i) => i.balance)
          .reduce((a, b) => b + a, 0),
      };
    })
    .map((x) => {
      return {
        name: x.name,
        totalBalance: x.totalBalance,
      };
    })
    .sort((a, b) => b.totalBalance - a.totalBalance)
    .map((y) => y.name);
}

// 3 Objeto en que las claves sean los nombres de los bancos y los valores un arreglo con los ruts de sus clientes ordenados alfabeticamente por nombre.
function banksClientsTaxNumbers() {
  const mappedBanks = [];
  const banksName = banks.map((b) => {
    return {
      name: b.name,
      taxNumbers: accounts
        .filter((a) => a.bankId === b.id)
        .map((c) => {
          return {
            ...c,
            clientTaxNumber: clients.find((client) => client.id === c.clientId)
              .taxNumber,
            clientName: clients
              .find((client) => client.id === c.clientId)
              .name
          };
        }),
      clientName: accounts
        .filter((a) => a.bankId === b.id)
        .map((c) => {
          return clients.find((client) => client.id === c.clientId).name;
        }),
    };
  });
  for (const bank of banksName) {
    const data = banksName.find((b) => b.name === bank.name);
    mappedBanks.push(Object.values(data));
  }
  const banksObj = Object.fromEntries(mappedBanks);
  return banksObj;
}

console.log("Pregunta 0");
console.log(listClientsIds());
console.log("Pregunta 1");
console.log(listClientsIdsSortByTaxNumber());
console.log("Pregunta 2");
console.log(sortClientsTotalBalances());
console.log("Pregunta 3");
console.log(banksClientsTaxNumbers());



