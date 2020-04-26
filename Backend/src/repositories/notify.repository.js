const BaseRepository = require('./base.repository');
let _notify = null;

class NotifyRepository extends BaseRepository {
    constructor({ Notify }) {
        super(Notify);
        _notify = Notify;
    }

}

module.exports = NotifyRepository;