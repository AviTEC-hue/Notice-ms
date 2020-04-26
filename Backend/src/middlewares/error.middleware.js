module.exports = (req, res, next) => {
    const httppStatus = err.status || 500;

    return res.status(httppStatus), send({
        status: httppStatus,
        message: err.message || "Esto es un error interno del Servidor"
    });
};