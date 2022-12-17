import httpService from './http.service'

const endPoint = 'products'
const endPoint2 = 'products/category/'

const productsService = {
  async fetch() {
    const { data } = await httpService.get(endPoint)
    return data
  },
  async getProductsByCat(cat) {
    const { data } = await httpService.get(endPoint2 + cat)
    return data
  },
  async getProductById(id) {
    const { data } = await httpService.get(endPoint + '/' + id)
    return data
  },
}

export default productsService
