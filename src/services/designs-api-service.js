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

}
