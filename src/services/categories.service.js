import httpService from './http.service'

const endPoint = 'products/categories'

const categoriesService = {
  async fetch() {
    const { data } = await httpService.get(endPoint)
    return data
  },
}

export default categoriesService
