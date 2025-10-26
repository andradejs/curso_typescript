export class Person {

  constructor(
    public name: string,
    public lastName: string,
    private cpf: string
  ) { }

  getFullName(): string {
    return this.name + " " + this.lastName;
  }

  getLastName(): string {
    return this.lastName;
  }

  getName(): string {
    return this.name;
  }

  getCPF(): string {
    return this.cpf;
  }
}


// Cliente herda todos os elementos da class Person
export class Custumer extends Person {

  getName() {
    return "nome do cliente" + " " + this.name;
  }
}

export class Employee extends Person {

  getName(): string {
    return "nome do funcionario" + " " + this.name;
  }
}

const custumer = new Custumer("Leone", "Rodriges", "000.000.000-00");
const employee = new Employee("Leone", "Rodriges", "000.000.000-00");
const person = new Person("Leone", "Rodriges", "000.000.000-00");

console.log(custumer.getName());
console.log(employee.getName());
console.log(person.getName());
