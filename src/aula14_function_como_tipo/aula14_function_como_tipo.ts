type MapStringsCallback = (item: string) => string;

function mapStrings(array: string[], callbackfn: MapStringsCallback): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (item !== undefined) {
      newArray.push(callbackfn(item));
    }
  }

  return newArray;
}

const abc = ["fabricio", "stefany", "joao"];

console.log(mapStrings(abc, (item) => item.toUpperCase()));
console.log(mapStrings(abc, (item) => `Nome: ${item}`));
