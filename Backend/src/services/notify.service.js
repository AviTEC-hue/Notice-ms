const BaseService = require('./base.service.js');
let _notifyRepository = null;

class NotifyService extends BaseService {
    constructor({ NotifyRepository }) {
        super(NotifyRepository);
        _notifyRepository = NotifyRepository;
    }
}
module.exports = NotifyService;