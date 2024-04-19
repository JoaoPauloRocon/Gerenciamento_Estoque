module.exports.login_admin = function (app, req, res) {
    res.render('login/login_admin', { validacao: {} });
}

module.exports.valida_login = function (app, req, res) {
    var camposAdmin = req.body;
    req.assert('email', 'Usuário é obrigatório').notEmpty();
    req.assert('senha', 'Senha é obrigatória').notEmpty();
    var erros = req.validationErrors();
    console.log(erros)
    if (erros) {
        res.render("login/login_admin", { validacao: erros, flagAdmin: req.session.autorizado, codLogado: req.session.codLogado });
        return;
    }

    var connection = app.config.dbConnection();
    var autentificacao = new app.app.models.EstoqueDAO(connection);
    console.log(camposAdmin)

    autentificacao.getLoginAdm(camposAdmin, function (error, result) {
        if (result.length != 0) {
            req.session.autorizado = 'adm';
            req.session.codLogado = result[0].codAdmin;
            res.redirect('/produtos');
            console.log(result, "logado")
            return;
        }
        var erro = [];
        erro.push({ msg: "Usuario ou Senha Incorretos!" })
        res.render('login/login_admin', { validacao: erro, flagAdmin: req.session.autorizado, codLogado: req.session.codLogado });
        return;
    });
}
