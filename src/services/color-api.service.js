import useApi from '../hooks/useApi'

export class ColorApiService{
    constructor() {
        this.apiMehods = useApi('/color');
    }

    async getColors() {
        return await this.apiMehods.getObjects();
    }
}