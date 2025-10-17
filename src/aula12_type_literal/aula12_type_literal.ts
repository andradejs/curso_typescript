let x = 10 as const;

const pessoa = {
    nome: "Luiz" as const,
    sobrenome: "Miranda"
};

function escolhaCor(cor: "Vermelho" | "Amarelo" | "Azul") {
    return cor;
}

escolhaCor("Azul");

console.log(x);
