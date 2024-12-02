"use strict";
var ROLES;
(function (ROLES) {
    ROLES["ADMIN"] = "admin";
    ROLES["SELLER"] = "seller";
    ROLES["CUSTOMER"] = "customer";
})(ROLES || (ROLES = {}));
const nicoUser = {
    username: 'nicobytes',
    role: ROLES.SELLER
};
