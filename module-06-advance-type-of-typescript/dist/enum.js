"use strict";
//enum
// set of fixed string leteral make together
Object.defineProperty(exports, "__esModule", { value: true });
//type UserRole = 'admin'| 'editor'| 'viewer';
var UserRole;
(function (UserRole) {
    UserRole["admin"] = "admin";
    UserRole["editor"] = "editor";
    UserRole["viewer"] = "viewer";
})(UserRole || (UserRole = {}));
const canEdit = (role) => {
    if (role === UserRole.admin || role === UserRole.editor) {
        return true;
    }
    return false;
};
const isEditPermissable = canEdit(UserRole.admin);
console.log(isEditPermissable);
//# sourceMappingURL=enum.js.map