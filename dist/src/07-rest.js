"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRolev2 = exports.checkRole = exports.checkAdminRole = void 0;
const _01_enum_20241205210511_1 = require("../.history/src/01-enum_20241205210511");
const currentUser = {
    userName: 'nicobytes',
    role: _01_enum_20241205210511_1.ROLES.CUSTOMER
};
const checkAdminRole = () => {
    if (currentUser.role === 'admin') {
        return true;
    }
    return false;
};
exports.checkAdminRole = checkAdminRole;
const rta = (0, exports.checkAdminRole)();
console.log("checkAminRole", rta);
const checkRole = (role1, role2) => {
    if (currentUser.role === role1 || currentUser.role === role2) {
        return true;
    }
    return false;
};
exports.checkRole = checkRole;
const rta2 = (0, exports.checkRole)(_01_enum_20241205210511_1.ROLES.ADMIN, _01_enum_20241205210511_1.ROLES.SELLER);
console.log('checkRole', rta2);
const checkRolev2 = (roles) => {
    if (roles.includes(currentUser.role)) {
        return true;
    }
    return false;
};
exports.checkRolev2 = checkRolev2;
const rta3 = (0, exports.checkRolev2)([_01_enum_20241205210511_1.ROLES.ADMIN, _01_enum_20241205210511_1.ROLES.SELLER]);
console.log('checkRolev2', rta3);
