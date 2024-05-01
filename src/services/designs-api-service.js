import useApi from '../hooks/useApi'

export class DesignsApiService {
    constructor() {
        this.apiMehods = useApi('/designs');
    }

    async getDesigns() {
        return await this.apiMehods.getObjects();
    }

    async getDesignsbyid(id) {
        return await this.apiMehods.getObjectById(id);
    }

}
