type verifyUserFn = (user: User, sentUser: User) => boolean;

type User = {
  id: number;
  name: string;
  email: string;
};

type Admin = {
  id: number;
  name: string;
  email: string;
};

const verifyUser: verifyUserFn = (user: User, sentUser: User) => {
  return user.id === sentUser.id && user.email === sentUser.email;
};

const user: User = {
  id: 1,
  name: "Fabricio",
  email: "111",
};

const admin: Admin = {
  id: 1,
  name: "Leprechaun",
  email: "222",
};

const userSent = {
  id: 1,
  name: "Fabricio",
  email: "111",
  permissions: ["read", "write"],
};

console.log(verifyUser(admin, userSent));
