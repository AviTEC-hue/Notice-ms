class BaseService {
    constructor(repository) {
        this.repository = repository;
    }

    async get(id) {
        if (!id) {
            const error = new Error()
            error.status = 400;
            error.message = "La notificacion no se puede hayar";
            throw error;
        }

        const currentEntity = await this.repository.get(id);
        if (!currentEntity) {
            const error = new Error()
            error.status = 404;
            error.message = "Entidad no Encontrada";
            throw error;
        }
        return currentEntity;
    }

    async getAll(pageSize, pageNum) {
        return await this.repository.getAll(pageNum, pageSize);
    }

    async create(entity) {
        return await this.repository.create(entity);
    }

    async update(id, entity) {
        if (!id) {
            const error = new Error()
            error.status = 400;
            error.message = "El ID puede ser encontrado";
            throw error;
        }

        return await this.repository.update(id, entity);
    }

    async delete(id) {
        if (!id) {
            const error = new Error()
            error.status = 400;
            error.message = "El ID debe ser encontrado";
            throw error;
        }

        return await this.repository.delete(id);
    }

}
module.exports = BaseService;