import useApi from '../hooks/useApi'

export class UserApiService{
    constructor() {
        this.apiMehods = useApi('/user');
    }

    async getUsers() {
        return await this.apiMehods.getObjects();
    }

    async createUser(user){
        return await this.apiMehods.postObject(user);
    }

    async getUserById(id){
        return await this.apiMehods.getObjectById(id);
    }
}