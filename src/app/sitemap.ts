import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.logicit.com';

    // En un sitio real, aquí obtendríamos las rutas dinámicas de una base de datos o CMS
    // Para esta landing page, definimos las secciones principales como rutas o anclas importantes si fueran páginas separadas.
    // Dado que es una landing single-page, priorizamos la raíz.

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/#sistemas`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/#metodo`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/#proceso`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/#contacto`, // Footer/CTA section
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.9,
        },
    ];
}
