import { GenerateCategoriesSitemapDocument, GenerateListingsSitemapDocument, GenerateSellersSitemapDocument } from "@/apollograph/generated"
import { DocumentNode } from "graphql"
import request from "graphql-request"
import { MetadataRoute } from "next"

const generateSitemap = async (a: DocumentNode, accessor: string) => {
    console.log("urls", process.env.NEXT_PUBLIC_GRAPHQL_URL)
    const sitemaps = await request({
        url: process.env.NEXT_PUBLIC_GRAPHQL_URL!,
        document: a,
    })
    var sitemapEntries:any = []
    //@ts-ignore
    if (sitemaps[accessor].items.length > 0) {
        //@ts-ignore
        sitemapEntries = sitemaps[accessor].items.map((item:any) => ({
            url: item.url,
            lastModified: new Date(item.lastmod ?? new Date()),
            priority: item.priority ??  0.8,
            changeFrequency: item.changefreq ?? "daily"
        }))
    }

    return sitemapEntries

}

export default async function sitemap(): Promise<MetadataRoute.Sitemap>{
    console.log("Generating sitemap")
    const baseUrl = "https://www.swojon.com"
    var sitemapEntries: MetadataRoute.Sitemap = [
        {url: baseUrl}
    ]

    try {
        const productEntries = await generateSitemap(GenerateListingsSitemapDocument, "generateListingsSitemap");
        if (productEntries.length > 0) {
            sitemapEntries = [...sitemapEntries, ...productEntries]
        }
    }catch(error){
        console.error("Error generating product sitemap", error)
    }

    try {
        const sellerEntries = await generateSitemap(GenerateSellersSitemapDocument, "generateSellersSitemap");
        if (sellerEntries.length > 0) {
            sitemapEntries = [...sitemapEntries, ...sellerEntries]
        }   
    } catch (error) {
        console.error("Error generating seller sitemap", error)
    }

    try {
        const categoryEntries = await generateSitemap(GenerateCategoriesSitemapDocument, "generateCategoriesSitemap");
        if (categoryEntries.length > 0) {
            sitemapEntries = [...sitemapEntries, ...categoryEntries]
        }
    } catch (error) {
        console.error("Error generating category sitemap", error)
    }
    
    return sitemapEntries;
} 