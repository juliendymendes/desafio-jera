// Valida se a senha contém pelo menos 6 caracteres, uma letra maiúscula, um número e um caractere especial 
export function validatePassword(password: string) {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/;
    return regex.test(password);
}