import useApi from '../hooks/useApi'

export class ShirtsApiService {
  constructor() {
    this.apiMehods = useApi('/shirts');
  }

  async getShirts() {
    return await this.apiMehods.getObjects();
  }

  async getShirtById(id) {
    return await this.apiMehods.getObjectById(id);
  }

}
export class CartApiService {

  async getCarItems() {
    let {getObjects} = useApi('/cart.data.json');

    return await getObjects();
  }

}
