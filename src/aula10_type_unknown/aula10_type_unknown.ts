let x: unknown;

x = 100;
x = 'Luiz';
x = 900;
x = 10;

if (typeof x === "number") console.log(x + 100);
if (typeof x === "string") console.log(x.toUpperCase());
