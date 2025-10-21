const cliente: readonly [number, string] = [1, "jorge"];
const cliente2: [number, string, ...string[]] = [1, "luiz", "miranda"];
let cliente3: [number, string, string?] = [1, "luiz", "miranda"];

cliente3 = [1, "luiz", "miranda"];

// cliente.pop() //não funciona por ser readonly
console.log(cliente);
