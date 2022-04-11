export type shortenerRequest = {
    destination: string;
    slug?: string;
};

export type shortenerResponse = {
    destination: string;
    slug: string;
}

export type ErrorResponse = {
    statusCode: number;
    message: string;
}