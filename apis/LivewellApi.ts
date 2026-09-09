// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AuthErrorResponse } from '../models/AuthErrorResponse';
import { GetLivewellLevelOne200Response } from '../models/GetLivewellLevelOne200Response';
import { LivewellData } from '../models/LivewellData';
import { LivewellErrorResponse } from '../models/LivewellErrorResponse';
import { LivewellRoutesResponse } from '../models/LivewellRoutesResponse';
import { LivewellSearchFilter } from '../models/LivewellSearchFilter';

/**
 * no description
 */
export class LivewellApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Returns a first-level Live Well route. no_html removes HTML markup and nhs_links rewrites eligible MRD links to NHS website links. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a first-level Live Well page
     * @param xMrdScopes MRD service scope required for Live Well endpoints.
     * @param param1 First Live Well route segment, normally identifying a top-level topic or category.
     * @param noHtml Removes HTML markup from returned Live Well content. When supplied, this parameter must be set to \&#39;true\&#39;.
     * @param nhsLinks Replaces eligible MRD API links with their NHS website equivalents. When supplied, this parameter must be set to \&#39;true\&#39;.
     */
    public async getLivewellLevelOne(xMrdScopes: 'live-well', param1: string, noHtml?: 'true', nhsLinks?: 'true', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("LivewellApi", "getLivewellLevelOne", "xMrdScopes");
        }


        // verify required parameter 'param1' is not null or undefined
        if (param1 === null || param1 === undefined) {
            throw new RequiredError("LivewellApi", "getLivewellLevelOne", "param1");
        }




        // Path Params
        const localVarPath = '/live-well/{param-1}'
            .replace('{param1}', encodeURIComponent(String(param1)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (noHtml !== undefined) {
            requestContext.setQueryParam("no_html", ObjectSerializer.serialize(noHtml, "'true'", ""));
        }

        // Query Params
        if (nhsLinks !== undefined) {
            requestContext.setQueryParam("nhs_links", ObjectSerializer.serialize(nhsLinks, "'true'", ""));
        }

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'live-well'", ""));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oauth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns deeply nested Live Well content. The response uses the same flexible NHS page structure as first-level and second-level routes. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a third-level Live Well page
     * @param xMrdScopes MRD service scope required for Live Well endpoints.
     * @param param1 First Live Well route segment, normally identifying a top-level topic or category.
     * @param param2 Second Live Well route segment, normally identifying a category or page within a top-level topic.
     * @param param3 Third Live Well route segment, normally identifying a deeply nested page within a Live Well category.
     * @param noHtml Removes HTML markup from returned Live Well content. When supplied, this parameter must be set to \&#39;true\&#39;.
     * @param nhsLinks Replaces eligible MRD API links with their NHS website equivalents. When supplied, this parameter must be set to \&#39;true\&#39;.
     */
    public async getLivewellLevelThree(xMrdScopes: 'live-well', param1: string, param2: string, param3: string, noHtml?: 'true', nhsLinks?: 'true', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("LivewellApi", "getLivewellLevelThree", "xMrdScopes");
        }


        // verify required parameter 'param1' is not null or undefined
        if (param1 === null || param1 === undefined) {
            throw new RequiredError("LivewellApi", "getLivewellLevelThree", "param1");
        }


        // verify required parameter 'param2' is not null or undefined
        if (param2 === null || param2 === undefined) {
            throw new RequiredError("LivewellApi", "getLivewellLevelThree", "param2");
        }


        // verify required parameter 'param3' is not null or undefined
        if (param3 === null || param3 === undefined) {
            throw new RequiredError("LivewellApi", "getLivewellLevelThree", "param3");
        }




        // Path Params
        const localVarPath = '/live-well/{param-1}/{param-2}/{param-3}'
            .replace('{param1}', encodeURIComponent(String(param1)))
            .replace('{param2}', encodeURIComponent(String(param2)))
            .replace('{param3}', encodeURIComponent(String(param3)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (noHtml !== undefined) {
            requestContext.setQueryParam("no_html", ObjectSerializer.serialize(noHtml, "'true'", ""));
        }

        // Query Params
        if (nhsLinks !== undefined) {
            requestContext.setQueryParam("nhs_links", ObjectSerializer.serialize(nhsLinks, "'true'", ""));
        }

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'live-well'", ""));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oauth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns a second-level page or category within a Live Well topic. HTML and link behaviour can be controlled using no_html and nhs_links. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a second-level Live Well page
     * @param xMrdScopes MRD service scope required for Live Well endpoints.
     * @param param1 First Live Well route segment, normally identifying a top-level topic or category.
     * @param param2 Second Live Well route segment, normally identifying a category or page within a top-level topic.
     * @param noHtml Removes HTML markup from returned Live Well content. When supplied, this parameter must be set to \&#39;true\&#39;.
     * @param nhsLinks Replaces eligible MRD API links with their NHS website equivalents. When supplied, this parameter must be set to \&#39;true\&#39;.
     */
    public async getLivewellLevelTwo(xMrdScopes: 'live-well', param1: string, param2: string, noHtml?: 'true', nhsLinks?: 'true', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("LivewellApi", "getLivewellLevelTwo", "xMrdScopes");
        }


        // verify required parameter 'param1' is not null or undefined
        if (param1 === null || param1 === undefined) {
            throw new RequiredError("LivewellApi", "getLivewellLevelTwo", "param1");
        }


        // verify required parameter 'param2' is not null or undefined
        if (param2 === null || param2 === undefined) {
            throw new RequiredError("LivewellApi", "getLivewellLevelTwo", "param2");
        }




        // Path Params
        const localVarPath = '/live-well/{param-1}/{param-2}'
            .replace('{param1}', encodeURIComponent(String(param1)))
            .replace('{param2}', encodeURIComponent(String(param2)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (noHtml !== undefined) {
            requestContext.setQueryParam("no_html", ObjectSerializer.serialize(noHtml, "'true'", ""));
        }

        // Query Params
        if (nhsLinks !== undefined) {
            requestContext.setQueryParam("nhs_links", ObjectSerializer.serialize(nhsLinks, "'true'", ""));
        }

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'live-well'", ""));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oauth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns the available routes within the NHS Live Well dataset.
     * Retrieve available Live Well routes
     * @param xMrdScopes MRD service scope required for Live Well endpoints.
     */
    public async getLivewellRoutes(xMrdScopes: 'live-well', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("LivewellApi", "getLivewellRoutes", "xMrdScopes");
        }


        // Path Params
        const localVarPath = '/live-well';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'live-well'", ""));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oauth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Searches the NHS Live Well dataset using structured filters. By default filters search page descriptions. When search_all is enabled, page-content text is also searched.
     * Search Live Well content
     * @param xMrdScopes MRD service scope required for Live Well endpoints.
     * @param filters Structured Live Well search filters supplied using indexed bracket notation, for example filters[0][operator]&#x3D;LIKE&amp;filters[0][value]&#x3D;healthy eating&amp;filters[0][condition]&#x3D;AND&amp;filters[1][operator]&#x3D;LIKE&amp;filters[1][value]&#x3D;diet&amp;filters[1][condition]&#x3D;. Each filter must contain exactly value, operator and condition.
     * @param noHtml Removes HTML markup from returned Live Well content. When supplied, this parameter must be set to \&#39;true\&#39;.
     * @param nhsLinks Replaces eligible MRD API links with their NHS website equivalents. When supplied, this parameter must be set to \&#39;true\&#39;.
     * @param searchAll Extends Live Well search to page-content text in addition to the default page description. When supplied, this parameter must be set to \&#39;true\&#39;. This parameter is only valid on the search endpoint.
     */
    public async searchLivewell(xMrdScopes: 'live-well', filters: Array<LivewellSearchFilter>, noHtml?: 'true', nhsLinks?: 'true', searchAll?: 'true', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("LivewellApi", "searchLivewell", "xMrdScopes");
        }


        // verify required parameter 'filters' is not null or undefined
        if (filters === null || filters === undefined) {
            throw new RequiredError("LivewellApi", "searchLivewell", "filters");
        }





        // Path Params
        const localVarPath = '/live-well/search';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filters !== undefined) {
            const serializedParams = ObjectSerializer.serialize(filters, "Array<LivewellSearchFilter>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("filters", serializedParam);
            }
        }

        // Query Params
        if (noHtml !== undefined) {
            requestContext.setQueryParam("no_html", ObjectSerializer.serialize(noHtml, "'true'", ""));
        }

        // Query Params
        if (nhsLinks !== undefined) {
            requestContext.setQueryParam("nhs_links", ObjectSerializer.serialize(nhsLinks, "'true'", ""));
        }

        // Query Params
        if (searchAll !== undefined) {
            requestContext.setQueryParam("search_all", ObjectSerializer.serialize(searchAll, "'true'", ""));
        }

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'live-well'", ""));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oauth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class LivewellApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getLivewellLevelOne
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getLivewellLevelOneWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetLivewellLevelOne200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetLivewellLevelOne200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetLivewellLevelOne200Response", ""
            ) as GetLivewellLevelOne200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: LivewellErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LivewellErrorResponse", ""
            ) as LivewellErrorResponse;
            throw new ApiException<LivewellErrorResponse>(response.httpStatusCode, "Invalid route, query parameters or database error.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "The OAuth access token is missing or invalid.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetLivewellLevelOne200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetLivewellLevelOne200Response", ""
            ) as GetLivewellLevelOne200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getLivewellLevelThree
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getLivewellLevelThreeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetLivewellLevelOne200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetLivewellLevelOne200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetLivewellLevelOne200Response", ""
            ) as GetLivewellLevelOne200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: LivewellErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LivewellErrorResponse", ""
            ) as LivewellErrorResponse;
            throw new ApiException<LivewellErrorResponse>(response.httpStatusCode, "Invalid route, query parameters or database error.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "The OAuth access token is missing or invalid.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetLivewellLevelOne200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetLivewellLevelOne200Response", ""
            ) as GetLivewellLevelOne200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getLivewellLevelTwo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getLivewellLevelTwoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetLivewellLevelOne200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetLivewellLevelOne200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetLivewellLevelOne200Response", ""
            ) as GetLivewellLevelOne200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: LivewellErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LivewellErrorResponse", ""
            ) as LivewellErrorResponse;
            throw new ApiException<LivewellErrorResponse>(response.httpStatusCode, "Invalid route, query parameters or database error.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "The OAuth access token is missing or invalid.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetLivewellLevelOne200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetLivewellLevelOne200Response", ""
            ) as GetLivewellLevelOne200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getLivewellRoutes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getLivewellRoutesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LivewellRoutesResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LivewellRoutesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LivewellRoutesResponse", ""
            ) as LivewellRoutesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: LivewellErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LivewellErrorResponse", ""
            ) as LivewellErrorResponse;
            throw new ApiException<LivewellErrorResponse>(response.httpStatusCode, "The route list could not be retrieved.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "The OAuth access token is missing or invalid.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LivewellRoutesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LivewellRoutesResponse", ""
            ) as LivewellRoutesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to searchLivewell
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async searchLivewellWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<LivewellData> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<LivewellData> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<LivewellData>", ""
            ) as Array<LivewellData>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: LivewellErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LivewellErrorResponse", ""
            ) as LivewellErrorResponse;
            throw new ApiException<LivewellErrorResponse>(response.httpStatusCode, "Filters were missing or invalid, or a database error occurred.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "The OAuth access token is missing or invalid.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<LivewellData> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<LivewellData>", ""
            ) as Array<LivewellData>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
