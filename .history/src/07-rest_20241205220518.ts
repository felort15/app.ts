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
console.log("checkAminRole",rta);


export const checkRole =(role1: string, role2:string) => {
  if(currentUser.role === role1 || currentUser.role === role2){
    return true;
  }
  return false;
}
const rta2 = checkRole(ROLES.ADMIN, ROLES.SELLER);
console.log('checkRole',rta2);

export const checkRolev2 =(roles: string[]) => {
  if(roles.includes(currentUser.role)){
    return true;
  }
  return false;
}
const rta3 = checkRolev2([ROLES.ADMIN, ROLES.SELLER]);
console.log('checkRolev2',rta3);
