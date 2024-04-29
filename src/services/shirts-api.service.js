import useApi from '../hooks/useApi'

export class ShirtsApiService {

  async getShirts() {
    let {getObjects} = useApi('/shirts.data.json');

    return await getObjects();
  }

}
export class CartApiService {

  async getCarItems() {
    let {getObjects} = useApi('/cart.data.json');

    return await getObjects();
  }

}
