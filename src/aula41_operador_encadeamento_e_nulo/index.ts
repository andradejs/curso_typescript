

type Documento = {
  titulo:string;
  texto: string;
  data?: Date;
}


const documento: Documento = {
  titulo: 'deltora',
  texto: 'sd;lfasja',
  data: new Date(),
}

//Operador encadeamento
console.log(documento.data?.toString());

//Opearador coalescência Nula

console.log(documento.data ?? 'deu ruim')
