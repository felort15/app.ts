import { ROLES } from '../.history/src/01-enum_20241205210511';


<<<<<<< Tabnine <<<<<<<
interface User {//+
    userName: string;//+
    role: string;//+
}//+
const currentUser: User  = {
    userName: 'nicobytes',
    role: ROLES.CUSTOMER
}//-
};//+
>>>>>>> Tabnine >>>>>>>// {"conversationId":"ac001f3d-b5b7-495f-9cca-abc12cfa3b39","source":"instruct"}

export const checkAdminRole = () =>{
  if(currentUser.role === 'admin'){
    return true;
}
  return false;
}

const rta = checkAdminRole();
console.log(rta);
