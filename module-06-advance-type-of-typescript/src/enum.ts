//enum
// set of fixed string leteral make together


//type UserRole = 'admin'| 'editor'| 'viewer';

enum UserRole {
    admin = 'admin',
    editor = 'editor',
    viewer = 'viewer'
}

const canEdit = (role: UserRole) => {
    if (role === UserRole.admin || role === UserRole.editor) {
        return true
    }
    return false
}

const isEditPermissable = canEdit(UserRole.admin);
console.log(isEditPermissable);

