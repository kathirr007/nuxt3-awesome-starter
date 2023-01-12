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
    console.log('fetching images from cloudinary...')

    // let results

    return (
      cloudinary.search
        // .expression(
        //   'resource_type:image AND tags=kitten AND uploaded_at>1d AND bytes>1m'
        // )
        .expression(
          `resource_type=(image OR video)${
            queryParams.expression ? ` AND ${queryParams.expression}` : ''
          }`
        )
        .sort_by('public_id', 'desc')
        // .max_results(30)
        .execute()
        .then((result) => {
          // results = result
          // console.log(result)
          console.log('fetched images from cloudinary')
          return result
        })
    )
  }
  if (method === 'POST') {
    const body = await readBody(e)

    return {}
  }
})
