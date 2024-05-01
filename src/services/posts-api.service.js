import useApi from '../hooks/useApi'

export class PostsApiService {
    async getPostItems() {
        let {getObjects} = useApi('/posts.data.json');

        return await getObjects();
    }

}
