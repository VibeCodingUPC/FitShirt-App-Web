import useApi from '../hooks/useApi'

export class PostsApiService {
    constructor() {
        this.apiMehods = useApi('/posts');
    }

    async getPosts() {
        return await this.apiMehods.getObjects();
    }

    async getPostById(id) {
        return await this.apiMehods.getObjectById(id);
    }

    async publishPost(post){
        return await this.apiMehods.postObject(post);
    }

    async editPost(post){
        return await this.apiMehods.putObject(post.id,post);
    }

    async deletePost(id){
        return await this.apiMehods.deleteObjectById(id);
    }

}
