module.exports = function(app){
    app.get('/login', function(req,res){
        app.app.controllers.login.login_admin.login_admin(app, req, res);
    });

    app.post('/valida_login', function(req,res){
        app.app.controllers.login.login_admin.valida_login(app, req, res);
    });
}