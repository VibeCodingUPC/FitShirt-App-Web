import useApi from '../hooks/useApi'

export class CartApiService {
  constructor() {
    this.apiMehods = useApi('/cart');
  }

  async getCartItems() {
    return await this.apiMehods.getObjects();
  }

  async deleteItemById(id) {
    await this.apiMehods.deleteObjectById(id);
  }
}