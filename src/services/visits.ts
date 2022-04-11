import { visits } from "../db";
async function setVisitsCounter(slug: string) {
    const visit = await visits.findOne({ slug: `${slug}` });
    if (!visit) {
        await visits.insert({ slug, visits: 1 });
    } else {
        await visits.update({ slug }, { $inc: { visits: 1 } })
    }
}



export { setVisitsCounter }