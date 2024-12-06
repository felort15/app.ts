
export enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer",
}


type User = {
  userName: string;
  role: ROLES;
}

const nicoUser: User = {
  userName: 'nicobytes',
  role: ROLES.SELLER
}
