//menu
// funçao Base de verificação (primos, pares e impares)
// Arrows functions das verificações

let continuar = true;

while (continuar) {
  console.log(
    "MENU DOS EXERCÍCIOS\n[1] Verificar quantos números primos existem até:\n[2] Verificar quantos números pares existem até:\n[3] Verificar quantos números ímpares existem até:\n[4] Sair"
  );
  let opcao = prompt("Escolha sua opção: ");

  if (opcao === "4") {
    console.log("Finalizando o sistema...");
    continuar = false;
    break;
  }

  switch (opcao) {
    case "1":
      buscaQuantidadeNumerosPrimos();
      break;
    case "2":
      buscaQuantidadeNumerosPares();
      break;
    case "3":
      buscaQuantidadeNumerosImpares();
      break;
    default:
      console.log("Opção inválida");
      break;
  }
}

function buscaQuantidadeNumerosPrimos() {
  let numPrimo = parseInt(
    prompt("Digite o número para verificar quantos primos existem até ele: ")
  );
  let quantidadeNumeroPrimos = 0;

  for (let contagem = 2; contagem <= numPrimo; contagem++) {
    let ehPrimo = true;

    for (let i = 2; i * i <= contagem; i++) {
      if (contagem % i === 0) {
        ehPrimo = false;
        break;
      }
    }

    if (ehPrimo) {
      quantidadeNumeroPrimos++;
    }
  }

  console.log(
    "Considerando o número " +
      numPrimo +
      ", temos " +
      quantidadeNumeroPrimos +
      " números primos."
  );
}

function buscaQuantidadeNumerosPares() {
  let num = parseInt(
    prompt("Digite o número para verificar quantos pares existem até ele: ")
  );
  let quantidadePares = 0;

  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      quantidadePares++;
    }
  }

  console.log(
    "Considerando o número " +
      num +
      ", temos " +
      quantidadePares +
      " números pares."
  );
}

function buscaQuantidadeNumerosImpares() {
  let num = parseInt(
    prompt("Digite o número para verificar quantos ímpares existem até ele: ")
  );
  let quantidadeImpares = 0;

  for (let i = 1; i <= num; i++) {
    if (i % 2 !== 0) {
      quantidadeImpares++;
    }
  }

  console.log(
    "Considerando o número " +
      num +
      ", temos " +
      quantidadeImpares +
      " números ímpares."
  );
}
