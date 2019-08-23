class ApiService {
  constructor(baseUrl) {
    this.url = baseUrl
  }

  async createPost(post) {
    try {
      const request = new Request(this.url + '/posts.json', {
        method: 'post',
        body: JSON.stringify(post)
      })
      const response = await fetch(request)
      console.log(response)
      return await response.json()
    } catch (error) {
      console.error(error)
    }
  }
}

export const apiService = new ApiService('https://tblog1908.firebaseio.com')