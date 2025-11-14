var { Given, When, Then, DataTable } = require('@badeball/cypress-cucumber-preprocessor');
import api_functions from '../../api_functions/api_functions';

Given(`eu envio um GET para a API`, () => {
    api_functions.enviarGetApiTrello()
});

When(`o status code deve ser {int}`, (status) => {
    api_functions.validaStatusCode200GetApiTrello(status)
});

Then(`o campo {string} da estrutura {string} deve ser exibido`, (name, list) => {
    api_functions.validarStringResponseGetApiTrello(name, list)
});