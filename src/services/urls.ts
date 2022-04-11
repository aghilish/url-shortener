import { nanoid } from "nanoid";
import { urls } from "../db";
import { shortenerRequest, shortenerResponse } from "../types";
import { validateUrl } from "../validation";
const base = 'tier.app';
async function shorten(req: shortenerRequest): Promise<shortenerResponse> {
    await validateUrl(req);
    let { slug, destination } = req;
    if (!slug) {
        slug = nanoid(5).toLowerCase();
    }
    slug = `${base}/${slug.toLowerCase()}`;
    return await urls.insert({ slug, destination });
}

async function fetch(slug: string): Promise<shortenerResponse> {
    return await urls.findOne({ slug: `${base}/${slug}` });
}

export { shorten, fetch }