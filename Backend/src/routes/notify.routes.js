const { Router } = require("express");

module.exports = function({ NotifyController }) {
    const router = Router();

    router.get("/:notifyId", NotifyController.get);
    router.get("", NotifyController.getAll);
    router.post("", NotifyController.create);
    router.patch("/:notifyId", NotifyController.update);
    router.delete("/:notifyId", NotifyController.delete);

    return router;
};