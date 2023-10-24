export type User = {
  name: string;
  email: string;
  _id?: string;
  password?: string;
};

export type Iregister = {
  name: string;
  password: string;
  email: string;
};

export type Ilogin = {
  password: string;
  email: string;
};
