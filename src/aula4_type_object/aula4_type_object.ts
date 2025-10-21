const objectA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: number;
  [key: string]: unknown;
} = {
  chaveA: "Valor A",
  chaveB: "Valor B",
};

// objectA.chaveA = "Outro valor"
objectA.chaveC = 123;
objectA.chaveD = "Posso criar novas chaves";

console.log(objectA);
