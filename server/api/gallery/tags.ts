// eslint-disable-next-line import/named
import { v2 as cloudinary } from 'cloudinary'
const config = useRuntimeConfig()

cloudinary.config({
  cloud_name: config.CLOUDINARY_CLOUD_NAME,
  api_key: config.CLOUDINARY_API_KEY,
  api_secret: config.CLOUDINARY_API_SECRET,
  secure: true,
})

export default defineEventHandler(async (e) => {
  const { method, url } = e.node.req
  const queryParams = getQuery(e)
  if (method === 'GET') {
    console.log('fetching all the available tags from cloudinary...')

    // let results

    return cloudinary.api
      .tags({
        max_results: 100,
      })
      .then((result) => {
        // results = result
        // console.log(result)
        console.log('fetched all the available tags from cloudinary')
        return result
      })
  }
  if (method === 'POST') {
    const body = await readBody(e)

    return {}
  }
})
