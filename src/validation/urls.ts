import * as yup from "yup";
import { shortenerRequest } from "../types";
const schema = yup.object().shape({
    destination: yup.string().trim().url().required(),
    slug: yup.string().trim(),
});

async function validateUrl(req: shortenerRequest) { return await schema.validate(req) };


export { validateUrl };