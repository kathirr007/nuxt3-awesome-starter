import { Buffer } from 'buffer'

export const useGallery = () => {
  const config = useRuntimeConfig()

  const cloudinaryApiOptions = {
    headers: {
      Authorization: `Basic ${Buffer.from(
        config.CLOUDINARY_API_KEY + ':' + config.CLOUDINARY_API_SECRET
      ).toString('base64')}`,
      'Access-Control-Allow-Origin': '*',
    },
  }

  const getAllTags = async () => {
    const results = await $fetch(`/api/gallery/tags`, {
      method: 'get',
    })

    return results
  }

  const getAllImages = async (options: { [key: string]: any } = {}) => {
    const params = {
      ...options,
    }

    if (options.nextCursor) {
      params.next_cursor = options.nextCursor
      delete params.nextCursor
    }

    const paramString = Object.keys(params)
      .map((key) => `${key}=${encodeURIComponent(params[key])}`)
      .join('&')

    // const results = await $fetch(
    //   `https://api.cloudinary.com/v1_1/${config.CLOUDINARY_CLOUD_NAME}/resources/search?${paramString}`,
    //   cloudinaryApiOptions
    // )
    const results = await $fetch(`/api/gallery?${paramString}`, {
      method: 'get',
      ...cloudinaryApiOptions,
    })

    return results
  }

  const getFolders = async (options = {}) => {
    const response = await $fetch(
      `https://api.cloudinary.com/v1_1/${config.CLOUDINARY_CLOUD_NAME}/folders`,
      cloudinaryApiOptions
    )
    return response
  }

  const getPosts = async () => {
    const results = await $fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: 'get',
    })

    return results
  }

  return { getFolders, getAllImages, getAllTags, getPosts }
}
