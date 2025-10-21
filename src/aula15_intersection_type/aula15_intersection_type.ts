type NameCustomer = { name: string };
type AgeCustomer = { age: number };
type LastNameCustomer = { lastName: string };
type Customer = NameCustomer & AgeCustomer & LastNameCustomer;

const customer: Customer = {
  name: "Fabricio",
  age: 30,
  lastName: "Silva",
};

console.log(customer);
