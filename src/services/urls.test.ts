import { shortenerRequest, shortenerResponse } from "../types";
import { shorten } from "./urls";
const goodRequest: shortenerRequest = {
    destination: 'https://www.google.com'
};
const badRequest: shortenerRequest = {
    destination: 'google.de'
};
describe('shorten', () => {
    test('good request should be shortened alright', async () => {
        let result = await shorten(goodRequest);
        expect(result.destination).toBe(goodRequest.destination);
        expect(result.slug).toHaveLength(14);
    });
    test('bad request should not be shortend', async () => {
        await expect(async () => {
            await shorten(badRequest);
        }).rejects.toThrowError();
    });
});