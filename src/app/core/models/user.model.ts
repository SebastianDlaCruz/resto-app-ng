export enum TypeUser {
  ADMIN = 'admin',
  USER = 'user'
}

export interface User {
  id: string;
  userName: string;
  zipCode: string;
  locality: string;
  street: string;
  floor: number;
  number: number;
  contact: number;
  email: string;
  clarification: string;
  type: TypeUser;
}

