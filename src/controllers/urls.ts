import { Body, Controller, Get, Path, Post, Request, Response, Route, SuccessResponse, Tsoa } from "tsoa";
import { fetch, shorten } from "../services";
import express from 'express';
import { shortenerRequest, shortenerResponse } from "../types";

@Route('')
class UrlsController extends Controller {
    @Get('/{slug}')
    @SuccessResponse(302, 'Redirect')
    public async fetch(@Request() request: express.Request, @Path() slug: string) {
        const result = await fetch(slug);
        this.setStatus(302);
        const response = (<any>request).res as express.Response;
        response.redirect(result.destination);
    }

    @Post('/create')
    public async shorten(@Body() requestBody: shortenerRequest): Promise<shortenerResponse> {
        const result = await shorten(requestBody);
        this.setStatus(201);
        return result;
    }
}

export { UrlsController };