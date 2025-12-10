

type ObterChaveFn  = <O,K extends keyof O>(object: O, chave: K) => O[K]

const obterChaves: ObterChaveFn = (object,chave) => object[chave];

const animal = {
   cor: 'Rosa',
   vacinas: ['vacina 1', 'vacina 2'],
}

const vacinas = obterChaves(animal,'vacinas');
const cor = obterChaves(animal, 'cor');

console.log(`vacinas: ${vacinas}, cor: ${cor}`);
