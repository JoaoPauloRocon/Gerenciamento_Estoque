function EstoqueDAO(connection) {
    this._connection = connection;
}

EstoqueDAO.prototype.getLoginAdm = function (camposAdmin, callback) {
    this._connection.query("SELECT codAdmin FROM admin WHERE email = '" + camposAdmin.email + "'AND senha ='" + camposAdmin.senha + "'", callback)
};

module.exports = function () {
    return EstoqueDAO;
}