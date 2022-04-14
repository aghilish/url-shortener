import { shortenerRequest } from "../types";
import { validateUrl } from "./urls";

const goodRequest: shortenerRequest = {
    destination: 'https://www.google.com'
};
const badRequest: shortenerRequest = {
    destination: 'google.de'
};
describe('validate url', () => {
    test('good request should validate alright', async () => {
        let result = await validateUrl(goodRequest);
        expect(result).toEqual(goodRequest);
    });
    test('bad request should not validate', async () => {
        await expect(async () => {
            await validateUrl(badRequest);
        }).rejects.toThrowError();
    });
});