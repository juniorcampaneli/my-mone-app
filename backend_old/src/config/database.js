const { default: mongoose } = require('mongoose');
const moongose = require('mongoose');
moongose.Promise = global.Promise;

module.exports = moongose.connect('mongodb://localhost/mymoney'), {useNewUrlParse: true}

moongose.Error.messages.general.required = "O atributo '{PATH}' é Obrigatório."
/*mongoose.error.messages.Number.min = "O valor '{VALUE}' informado é menor que o limite de '{MIN}'"
mongoose.Error.messages.Number.max = "O valor '{VALUE}' informado é maior que o limite de '{MAX}'"
mongoose.Error.messages.String.enum = "O valor '{VALUE}' não é valido para o atributo."*/