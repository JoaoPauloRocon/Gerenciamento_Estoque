module.exports.todos_produtos = function(app, req, res){
    res.render('produtos/lista_produtos', {flagAdmin : req.session.autorizado, codLogado: req.session.codLogado });
}
    
