import { MetadataRoute } from 'next'
import { products, archiveProjects } from '../seed/seed'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

  const routes = ['/', '/archive', '/shop', '/about', '/contact', '/policies/shipping', '/policies/returns', '/policies/privacy']

  const productRoutes = products.map((product) => `/product/${product.slug}`)
  const projectRoutes = archiveProjects.map((project) => `/archive/${project.slug}`)

  return [...routes, ...productRoutes, ...projectRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date()
  }))
}
