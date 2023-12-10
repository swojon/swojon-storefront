

export default async function sitemap(){
    const baseUrl = "https://www.swojon.com"

    return [
        {url: baseUrl, lastModified: new Date()}
    ]
}