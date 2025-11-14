//as constant
// set of fixed string leteral make together


//type UserRole = 'admin'| 'editor'| 'viewer';

// enum UserRole {
//     admin = 'admin',
//     editor = 'editor',
//     viewer = 'viewer'
// }

const UserRole = {
    admin: 'admin',
    editor: 'editor',
    viewer: 'viewer'
} as const;



const canEdit = (role: keyof typeof UserRole) => {
    if (role === UserRole.admin || role === UserRole.editor) {
        return true
    }
    return false
}

const isEditPermissable = canEdit(UserRole.admin);
console.log(isEditPermissable);

