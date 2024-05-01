import useApi from '../hooks/useApi'

export class PostsApiService {
    constructor() {
        this.apiMehods = useApi('/posts');
    }

    async getShirts() {
        return await this.apiMehods.getObjects();
    }

    async getShirtById(id) {
        return await this.apiMehods.getObjectById(id);
    }

}
