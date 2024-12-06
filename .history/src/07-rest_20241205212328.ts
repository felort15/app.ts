import { ROLES } from '../.history/src/01-enum_20241205210511';


const currentUser: User  = {
    userName: 'nicobytes',
    role: ROLES.CUSTOMER
}

export const checkAdminRole = () =>{
  if(currentUser.role === 'admin'){
    return true;
}
  return false;
}

const rta = checkAdminRole();
console.log(rta);
