const body = document.querySelector('body');

//checar se o elemento não é nulo
if (body) body.style.background = 'red';

//usar o asserção de tipo
const body2 = document.querySelector('body') as HTMLBodyElement;
body2.style.background = 'red';

//outra forma de usar a asserção de tipo
const body3 = <HTMLBodyElement>document.querySelector('body');
body3.style.background = 'red';


/* forma não recomendada */

//usar o non-null assertion operator (!)
const body4 = document.querySelector('body')!;
body4.style.background = 'red';

