let _notifyService = null;

class NotifyController {
    constructor({ NotifyService }) {
        _notifyService = NotifyService;
    }

    async get(req, res) {
        const { notifyId } = req.params;
        const notify = await _notifyService.get(notifyId);

        return res.send(notify);
    }

    async getAll(req, res) {
        const { pageSize, pageNum } = req.query;
        const notifications = await _notifyService.getAll(pageSize, pageNum);
        return res.send(notifications);
    }

    async update(req, res) {
        const { body } = req;
        const { notifyId } = req.params;
        const updatedNotify = await _notifyService.update(notifyId, body);
        return res.send(updatedNotify);
    }
    async create(req, res) {
        const { body } = req;
        const createdNotify = await _notifyService.create(body);
        return res.status(201).send(createdNotify);
    }

    async delete(req, res) {
        const { notifyId } = req.params;
        const deletedNotify = await _notifyService.delete(notifyId);
        return res.send(deletedNotify);
    }
}

module.exports = NotifyController;