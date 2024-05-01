import useApi from '../hooks/useApi'

export class CartApiService {

  async getCarItems() {
    let {getObjects} = useApi('/cart');
    
    return await getObjects();
  }

}