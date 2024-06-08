import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

import { apiVersion, dataset, projectId, useCdn, token } from '../env'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token
})

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source).width(800).url();
}

export const assetsURL = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-03-25/assets/images/${process.env.NEXT_PUBLIC_SANITY_DATASET}`;