const { select } = require('@inquirer/prompts');


let meta = {
  value: "ler um livro por mês",
  checked: false
};


let metas = [
  meta,
  {
    value: "caminhar 20 minutos todos os dias",
    checked: false
  }
];

const start = async () => {
  while(true) {
    const opcao = await select({
      message: "Menu >",
      choices: [
        {
          name: "Cadastrar meta",
          value: "cadastrar"
        },
        {
          name: "Listar metas",
          value: "listar"
        },
        {
          name: "Sair",
          value: "sair"
        }
      ]
    });



   

   switch(opcao) {
    case "cadastrar":
      console.log("vamos cadastrar")
      break
    case "listar":
      console.log("vamos listar")
      break
    case "sair":
      console.log("Até a próxima!")
      return
   }
  }
}

start()