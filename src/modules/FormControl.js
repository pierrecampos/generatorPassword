import GeneratorPassword from './GeneratorPassword';


const passwordOutput = document.querySelector('.password-output');
const numberOfCharacters = document.querySelector('.amount');
const chkCapLetters = document.querySelector('#capital-letters');
const chkSmallLetters = document.querySelector('#small-letters');
const chkNumbers = document.querySelector('#numbers');
const chkSymbols = document.querySelector('#symbols');
const btnGeneratePass = document.querySelector('.gen-password');
const successMsg = document.querySelector('.successfully-copied');


export default () => {
    btnGeneratePass.addEventListener('click', () => {
        passwordOutput.innerHTML = generatePassword();
    });

    passwordOutput.addEventListener('click', () => {
        copyPassword(passwordOutput.innerHTML);        
    });
}


function generatePassword() {
    const newPassword = new GeneratorPassword(
        numberOfCharacters.value,
        chkCapLetters.checked,
        chkSmallLetters.checked,
        chkNumbers.checked,
        chkSymbols.checked
    );

    return newPassword.generatePassword() || 'Nada Selecionado';
}

function copyPassword(passwordToCopy) {
    if (passwordOutput.innerHTML === 'Nada Selecionado') return;
    if (passwordOutput.innerHTML === 'Selecione as opções') return;

    navigator.clipboard.writeText(passwordToCopy);
    successMsg.innerHTML = `<strong>${passwordToCopy}</strong> Copiado para área de transferência`;
}
