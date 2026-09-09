// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AuthErrorResponse } from '../models/AuthErrorResponse';
import { GetMentalHealthLevelOne200Response } from '../models/GetMentalHealthLevelOne200Response';
import { MentalHealthData } from '../models/MentalHealthData';
import { MentalHealthErrorResponse } from '../models/MentalHealthErrorResponse';
import { MentalHealthRoutesResponse } from '../models/MentalHealthRoutesResponse';
import { MentalHealthSearchFilter } from '../models/MentalHealthSearchFilter';

/**
 * no description
 */
export class MentalHealthApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Returns a fourth-level Mental Health route. no_html=true removes HTML markup and nhs_links=true rewrites eligible MRD API links to NHS website links. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve deeply nested Mental Health content
     * @param xMrdScopes MRD service scope required for Mental Health endpoints.
     * @param param1 First Mental Health route segment, normally identifying a Mental Health topic, category or section.
     * @param param2 Second Mental Health route segment, normally identifying a category or page within a Mental Health topic.
     * @param param3 Third Mental Health route segment identifying a nested Mental Health page.
     * @param param4 Fourth Mental Health route segment identifying deeply nested Mental Health content.
     * @param noHtml When supplied, removes HTML markup from returned Mental Health content. The only accepted value is \&#39;true\&#39;. Omit the parameter to retain HTML.
     * @param nhsLinks When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     */
    public async getMentalHealthLevelFour(xMrdScopes: 'mental-health', param1: string, param2: string, param3: string, param4: string, noHtml?: 'true', nhsLinks?: 'true', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("MentalHealthApi", "getMentalHealthLevelFour", "xMrdScopes");
        }


        // verify required parameter 'param1' is not null or undefined
        if (param1 === null || param1 === undefined) {
            throw new RequiredError("MentalHealthApi", "getMentalHealthLevelFour", "param1");
        }


        // verify required parameter 'param2' is not null or undefined
        if (param2 === null || param2 === undefined) {
            throw new RequiredError("MentalHealthApi", "getMentalHealthLevelFour", "param2");
        }


        // verify required parameter 'param3' is not null or undefined
        if (param3 === null || param3 === undefined) {
            throw new RequiredError("MentalHealthApi", "getMentalHealthLevelFour", "param3");
        }


        // verify required parameter 'param4' is not null or undefined
        if (param4 === null || param4 === undefined) {
            throw new RequiredError("MentalHealthApi", "getMentalHealthLevelFour", "param4");
        }




        // Path Params
        const localVarPath = '/mental-health/{param1}/{param2}/{param3}/{param4}'
            .replace('{param1}', encodeURIComponent(String(param1)))
            .replace('{param2}', encodeURIComponent(String(param2)))
            .replace('{param3}', encodeURIComponent(String(param3)))
            .replace('{param4}', encodeURIComponent(String(param4)));

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
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'mental-health'", ""));


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
     * Returns a first-level Mental Health route. no_html=true removes HTML markup and nhs_links=true rewrites eligible MRD API links to NHS website links. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a Mental Health page
     * @param xMrdScopes MRD service scope required for Mental Health endpoints.
     * @param param1 First Mental Health route segment, normally identifying a Mental Health topic, category or section.
     * @param noHtml When supplied, removes HTML markup from returned Mental Health content. The only accepted value is \&#39;true\&#39;. Omit the parameter to retain HTML.
     * @param nhsLinks When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     */
    public async getMentalHealthLevelOne(xMrdScopes: 'mental-health', param1: string, noHtml?: 'true', nhsLinks?: 'true', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("MentalHealthApi", "getMentalHealthLevelOne", "xMrdScopes");
        }


        // verify required parameter 'param1' is not null or undefined
        if (param1 === null || param1 === undefined) {
            throw new RequiredError("MentalHealthApi", "getMentalHealthLevelOne", "param1");
        }




        // Path Params
        const localVarPath = '/mental-health/{param1}'
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
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'mental-health'", ""));


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
     * Returns a third-level Mental Health page. no_html=true removes HTML markup and nhs_links=true rewrites eligible MRD API links to NHS website links. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve nested Mental Health content
     * @param xMrdScopes MRD service scope required for Mental Health endpoints.
     * @param param1 First Mental Health route segment, normally identifying a Mental Health topic, category or section.
     * @param param2 Second Mental Health route segment, normally identifying a category or page within a Mental Health topic.
     * @param param3 Third Mental Health route segment identifying a nested Mental Health page.
     * @param noHtml When supplied, removes HTML markup from returned Mental Health content. The only accepted value is \&#39;true\&#39;. Omit the parameter to retain HTML.
     * @param nhsLinks When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     */
    public async getMentalHealthLevelThree(xMrdScopes: 'mental-health', param1: string, param2: string, param3: string, noHtml?: 'true', nhsLinks?: 'true', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("MentalHealthApi", "getMentalHealthLevelThree", "xMrdScopes");
        }


        // verify required parameter 'param1' is not null or undefined
        if (param1 === null || param1 === undefined) {
            throw new RequiredError("MentalHealthApi", "getMentalHealthLevelThree", "param1");
        }


        // verify required parameter 'param2' is not null or undefined
        if (param2 === null || param2 === undefined) {
            throw new RequiredError("MentalHealthApi", "getMentalHealthLevelThree", "param2");
        }


        // verify required parameter 'param3' is not null or undefined
        if (param3 === null || param3 === undefined) {
            throw new RequiredError("MentalHealthApi", "getMentalHealthLevelThree", "param3");
        }




        // Path Params
        const localVarPath = '/mental-health/{param1}/{param2}/{param3}'
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
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'mental-health'", ""));


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
     * Returns a second-level Mental Health route. no_html=true removes HTML markup and nhs_links=true rewrites eligible MRD API links to NHS website links. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a Mental Health subcategory
     * @param xMrdScopes MRD service scope required for Mental Health endpoints.
     * @param param1 First Mental Health route segment, normally identifying a Mental Health topic, category or section.
     * @param param2 Second Mental Health route segment, normally identifying a category or page within a Mental Health topic.
     * @param noHtml When supplied, removes HTML markup from returned Mental Health content. The only accepted value is \&#39;true\&#39;. Omit the parameter to retain HTML.
     * @param nhsLinks When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     */
    public async getMentalHealthLevelTwo(xMrdScopes: 'mental-health', param1: string, param2: string, noHtml?: 'true', nhsLinks?: 'true', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("MentalHealthApi", "getMentalHealthLevelTwo", "xMrdScopes");
        }


        // verify required parameter 'param1' is not null or undefined
        if (param1 === null || param1 === undefined) {
            throw new RequiredError("MentalHealthApi", "getMentalHealthLevelTwo", "param1");
        }


        // verify required parameter 'param2' is not null or undefined
        if (param2 === null || param2 === undefined) {
            throw new RequiredError("MentalHealthApi", "getMentalHealthLevelTwo", "param2");
        }




        // Path Params
        const localVarPath = '/mental-health/{param1}/{param2}'
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
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'mental-health'", ""));


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
     * Returns the available routes within the NHS Mental Health dataset.
     * Retrieve available Mental Health routes
     * @param xMrdScopes MRD service scope required for Mental Health endpoints.
     */
    public async getMentalHealthRoutes(xMrdScopes: 'mental-health', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("MentalHealthApi", "getMentalHealthRoutes", "xMrdScopes");
        }


        // Path Params
        const localVarPath = '/mental-health';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'mental-health'", ""));


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
     * Searches the NHS Mental Health dataset using structured filters. By default filters search the page description. search_all=true additionally searches page-content text and expander-group content.
     * Search Mental Health content
     * @param xMrdScopes MRD service scope required for Mental Health endpoints.
     * @param filters Structured Mental Health search filters supplied using indexed bracket notation, for example filters[0][value]&#x3D;depression&amp;filters[0][operator]&#x3D;LIKE&amp;filters[0][condition]&#x3D;. Each filter must contain value, operator and condition. By default the search checks the page description. search_all&#x3D;true additionally searches page-content text and expander-group content.
     * @param noHtml When supplied, removes HTML markup from returned Mental Health content. The only accepted value is \&#39;true\&#39;. Omit the parameter to retain HTML.
     * @param nhsLinks When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     * @param searchAll When supplied, the search also checks page-content text and expander-group content in addition to the page description. The only accepted value is \&#39;true\&#39;. This parameter is only valid on the search endpoint.
     */
    public async searchMentalHealth(xMrdScopes: 'mental-health', filters: Array<MentalHealthSearchFilter>, noHtml?: 'true', nhsLinks?: 'true', searchAll?: 'true', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("MentalHealthApi", "searchMentalHealth", "xMrdScopes");
        }


        // verify required parameter 'filters' is not null or undefined
        if (filters === null || filters === undefined) {
            throw new RequiredError("MentalHealthApi", "searchMentalHealth", "filters");
        }





        // Path Params
        const localVarPath = '/mental-health/search';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filters !== undefined) {
            const serializedParams = ObjectSerializer.serialize(filters, "Array<MentalHealthSearchFilter>", "");
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
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'mental-health'", ""));


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

export class MentalHealthApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMentalHealthLevelFour
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMentalHealthLevelFourWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetMentalHealthLevelOne200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetMentalHealthLevelOne200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetMentalHealthLevelOne200Response", ""
            ) as GetMentalHealthLevelOne200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MentalHealthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MentalHealthErrorResponse", ""
            ) as MentalHealthErrorResponse;
            throw new ApiException<MentalHealthErrorResponse>(response.httpStatusCode, "Query parameters were invalid or a database error occurred.", body, response.headers);
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
            const body: GetMentalHealthLevelOne200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetMentalHealthLevelOne200Response", ""
            ) as GetMentalHealthLevelOne200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMentalHealthLevelOne
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMentalHealthLevelOneWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetMentalHealthLevelOne200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetMentalHealthLevelOne200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetMentalHealthLevelOne200Response", ""
            ) as GetMentalHealthLevelOne200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MentalHealthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MentalHealthErrorResponse", ""
            ) as MentalHealthErrorResponse;
            throw new ApiException<MentalHealthErrorResponse>(response.httpStatusCode, "Query parameters were invalid or a database error occurred.", body, response.headers);
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
            const body: GetMentalHealthLevelOne200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetMentalHealthLevelOne200Response", ""
            ) as GetMentalHealthLevelOne200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMentalHealthLevelThree
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMentalHealthLevelThreeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetMentalHealthLevelOne200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetMentalHealthLevelOne200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetMentalHealthLevelOne200Response", ""
            ) as GetMentalHealthLevelOne200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MentalHealthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MentalHealthErrorResponse", ""
            ) as MentalHealthErrorResponse;
            throw new ApiException<MentalHealthErrorResponse>(response.httpStatusCode, "Query parameters were invalid or a database error occurred.", body, response.headers);
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
            const body: GetMentalHealthLevelOne200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetMentalHealthLevelOne200Response", ""
            ) as GetMentalHealthLevelOne200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMentalHealthLevelTwo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMentalHealthLevelTwoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetMentalHealthLevelOne200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetMentalHealthLevelOne200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetMentalHealthLevelOne200Response", ""
            ) as GetMentalHealthLevelOne200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MentalHealthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MentalHealthErrorResponse", ""
            ) as MentalHealthErrorResponse;
            throw new ApiException<MentalHealthErrorResponse>(response.httpStatusCode, "Query parameters were invalid or a database error occurred.", body, response.headers);
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
            const body: GetMentalHealthLevelOne200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetMentalHealthLevelOne200Response", ""
            ) as GetMentalHealthLevelOne200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMentalHealthRoutes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMentalHealthRoutesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MentalHealthRoutesResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MentalHealthRoutesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MentalHealthRoutesResponse", ""
            ) as MentalHealthRoutesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MentalHealthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MentalHealthErrorResponse", ""
            ) as MentalHealthErrorResponse;
            throw new ApiException<MentalHealthErrorResponse>(response.httpStatusCode, "The route list could not be retrieved.", body, response.headers);
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
            const body: MentalHealthRoutesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MentalHealthRoutesResponse", ""
            ) as MentalHealthRoutesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to searchMentalHealth
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async searchMentalHealthWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<MentalHealthData> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<MentalHealthData> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<MentalHealthData>", ""
            ) as Array<MentalHealthData>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MentalHealthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MentalHealthErrorResponse", ""
            ) as MentalHealthErrorResponse;
            throw new ApiException<MentalHealthErrorResponse>(response.httpStatusCode, "Filters or query parameters were missing or invalid, or a database error occurred.", body, response.headers);
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
            const body: Array<MentalHealthData> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<MentalHealthData>", ""
            ) as Array<MentalHealthData>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
