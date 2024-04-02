module.exports = function(app){
    app.get('/produtos', function(req,res){
        app.app.controllers.produtos.todos_produtos(app, req, res);
    });
}