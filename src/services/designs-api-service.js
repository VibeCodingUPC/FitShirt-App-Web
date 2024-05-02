import useApi from '../hooks/useApi'

export class DesignsApiService {
    constructor() {
        this.apiMehods = useApi('/designs');
    }

    async getDesign() {
        return await this.apiMehods.getObjects();
    }

    async getDesignbyid(id) {
        return await this.apiMehods.getObjectById(id);
    }

    async creatingDesign(design) {
        return await this.apiMehods.postObject(design);
    }

    async editDesign(design) {
        return await this.apiMehods.putObject(design.id,design);
    }

    async deleteDesign(id) {
        return await this.apiMehods.deleteObjectById(id);
    }

}
