import { ROLES } from '../.history/src/01-enum_20241205210511';


interface User {
    userName: string;
    role: string;
}
const currentUser: User  = {
    userName: 'nicobytes',
    role: ROLES.CUSTOMER
};

export const checkAdminRole = () =>{
  if(currentUser.role === 'admin'){
    return true;
}
  return false;
}

const rta = checkAdminRole();
console.log(rta);


export const checkRole =(role1: string, role2:string) => {
  if(currentUser.role === role1 || currentUser.role === role2){
    return true;
  }
  return false;
}