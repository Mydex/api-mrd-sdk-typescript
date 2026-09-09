// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AuthErrorResponse } from '../models/AuthErrorResponse';
import { GetPregnancyLevelOne200Response } from '../models/GetPregnancyLevelOne200Response';
import { PregnancyData } from '../models/PregnancyData';
import { PregnancyErrorResponse } from '../models/PregnancyErrorResponse';
import { PregnancyRoutesResponse } from '../models/PregnancyRoutesResponse';
import { PregnancySearchFilter } from '../models/PregnancySearchFilter';

/**
 * no description
 */
export class PregnancyApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Returns a first-level Pregnancy route. no_html=true removes HTML markup, while nhs_links=true rewrites eligible MRD API URLs to NHS website URLs. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a Pregnancy page
     * @param xMrdScopes MRD service scope required for Pregnancy endpoints.
     * @param param1 First Pregnancy route segment, normally identifying a Pregnancy topic, category or section.
     * @param noHtml When supplied, removes HTML markup from returned Pregnancy content. The only accepted value is \&#39;true\&#39;. Omit the parameter to retain HTML.
     * @param nhsLinks When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     */
    public async getPregnancyLevelOne(xMrdScopes: 'pregnancy', param1: string, noHtml?: 'true', nhsLinks?: 'true', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("PregnancyApi", "getPregnancyLevelOne", "xMrdScopes");
        }


        // verify required parameter 'param1' is not null or undefined
        if (param1 === null || param1 === undefined) {
            throw new RequiredError("PregnancyApi", "getPregnancyLevelOne", "param1");
        }




        // Path Params
        const localVarPath = '/pregnancy/{param1}'
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
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'pregnancy'", ""));


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
     * Returns a third-level Pregnancy route. no_html=true removes HTML markup, while nhs_links=true rewrites eligible MRD API URLs to NHS website URLs. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve deeply nested Pregnancy content
     * @param xMrdScopes MRD service scope required for Pregnancy endpoints.
     * @param param1 First Pregnancy route segment, normally identifying a Pregnancy topic, category or section.
     * @param param2 Second Pregnancy route segment, normally identifying a page within a Pregnancy topic.
     * @param param3 Third Pregnancy route segment identifying a deeply nested Pregnancy page, such as a specific pregnancy week or page within a nested category.
     * @param noHtml When supplied, removes HTML markup from returned Pregnancy content. The only accepted value is \&#39;true\&#39;. Omit the parameter to retain HTML.
     * @param nhsLinks When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     */
    public async getPregnancyLevelThree(xMrdScopes: 'pregnancy', param1: string, param2: string, param3: string, noHtml?: 'true', nhsLinks?: 'true', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("PregnancyApi", "getPregnancyLevelThree", "xMrdScopes");
        }


        // verify required parameter 'param1' is not null or undefined
        if (param1 === null || param1 === undefined) {
            throw new RequiredError("PregnancyApi", "getPregnancyLevelThree", "param1");
        }


        // verify required parameter 'param2' is not null or undefined
        if (param2 === null || param2 === undefined) {
            throw new RequiredError("PregnancyApi", "getPregnancyLevelThree", "param2");
        }


        // verify required parameter 'param3' is not null or undefined
        if (param3 === null || param3 === undefined) {
            throw new RequiredError("PregnancyApi", "getPregnancyLevelThree", "param3");
        }




        // Path Params
        const localVarPath = '/pregnancy/{param1}/{param2}/{param3}'
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
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'pregnancy'", ""));


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
     * Returns a second-level page within a Pregnancy topic. no_html=true removes HTML markup, while nhs_links=true rewrites eligible MRD API URLs to NHS website URLs. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a Pregnancy subpage
     * @param xMrdScopes MRD service scope required for Pregnancy endpoints.
     * @param param1 First Pregnancy route segment, normally identifying a Pregnancy topic, category or section.
     * @param param2 Second Pregnancy route segment, normally identifying a page within a Pregnancy topic.
     * @param noHtml When supplied, removes HTML markup from returned Pregnancy content. The only accepted value is \&#39;true\&#39;. Omit the parameter to retain HTML.
     * @param nhsLinks When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     */
    public async getPregnancyLevelTwo(xMrdScopes: 'pregnancy', param1: string, param2: string, noHtml?: 'true', nhsLinks?: 'true', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("PregnancyApi", "getPregnancyLevelTwo", "xMrdScopes");
        }


        // verify required parameter 'param1' is not null or undefined
        if (param1 === null || param1 === undefined) {
            throw new RequiredError("PregnancyApi", "getPregnancyLevelTwo", "param1");
        }


        // verify required parameter 'param2' is not null or undefined
        if (param2 === null || param2 === undefined) {
            throw new RequiredError("PregnancyApi", "getPregnancyLevelTwo", "param2");
        }




        // Path Params
        const localVarPath = '/pregnancy/{param1}/{param2}'
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
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'pregnancy'", ""));


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
     * Returns the available routes within the NHS Pregnancy dataset.
     * Retrieve available Pregnancy routes
     * @param xMrdScopes MRD service scope required for Pregnancy endpoints.
     */
    public async getPregnancyRoutes(xMrdScopes: 'pregnancy', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("PregnancyApi", "getPregnancyRoutes", "xMrdScopes");
        }


        // Path Params
        const localVarPath = '/pregnancy';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'pregnancy'", ""));


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
     * Searches the NHS Pregnancy dataset using structured filters. By default each filter searches the page description. When search_all=true, the search additionally checks page-content text and expander-group content. no_html removes HTML markup from returned content and nhs_links rewrites eligible MRD API links to NHS website links.
     * Search Pregnancy content
     * @param xMrdScopes MRD service scope required for Pregnancy endpoints.
     * @param filters Structured Pregnancy search filters supplied using indexed bracket notation, for example filters[0][value]&#x3D;antenatal appointments&amp;filters[0][operator]&#x3D;LIKE&amp;filters[0][condition]&#x3D;. Each filter must contain exactly value, operator and condition.
     * @param noHtml When supplied, removes HTML markup from returned Pregnancy content. The only accepted value is \&#39;true\&#39;. Omit the parameter to retain HTML.
     * @param nhsLinks When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     * @param searchAll When supplied, the search also checks Pregnancy page-content text and expander-group content in addition to the page description. The only accepted value is \&#39;true\&#39;. This parameter is only valid on the search endpoint.
     */
    public async searchPregnancy(xMrdScopes: 'pregnancy', filters: Array<PregnancySearchFilter>, noHtml?: 'true', nhsLinks?: 'true', searchAll?: 'true', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("PregnancyApi", "searchPregnancy", "xMrdScopes");
        }


        // verify required parameter 'filters' is not null or undefined
        if (filters === null || filters === undefined) {
            throw new RequiredError("PregnancyApi", "searchPregnancy", "filters");
        }





        // Path Params
        const localVarPath = '/pregnancy/search';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filters !== undefined) {
            const serializedParams = ObjectSerializer.serialize(filters, "Array<PregnancySearchFilter>", "");
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
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'pregnancy'", ""));


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

export class PregnancyApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPregnancyLevelOne
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPregnancyLevelOneWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetPregnancyLevelOne200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetPregnancyLevelOne200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetPregnancyLevelOne200Response", ""
            ) as GetPregnancyLevelOne200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: PregnancyErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PregnancyErrorResponse", ""
            ) as PregnancyErrorResponse;
            throw new ApiException<PregnancyErrorResponse>(response.httpStatusCode, "Query parameters were invalid or a database error occurred.", body, response.headers);
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
            const body: GetPregnancyLevelOne200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetPregnancyLevelOne200Response", ""
            ) as GetPregnancyLevelOne200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPregnancyLevelThree
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPregnancyLevelThreeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetPregnancyLevelOne200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetPregnancyLevelOne200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetPregnancyLevelOne200Response", ""
            ) as GetPregnancyLevelOne200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: PregnancyErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PregnancyErrorResponse", ""
            ) as PregnancyErrorResponse;
            throw new ApiException<PregnancyErrorResponse>(response.httpStatusCode, "Query parameters were invalid or a database error occurred.", body, response.headers);
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
            const body: GetPregnancyLevelOne200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetPregnancyLevelOne200Response", ""
            ) as GetPregnancyLevelOne200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPregnancyLevelTwo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPregnancyLevelTwoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetPregnancyLevelOne200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetPregnancyLevelOne200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetPregnancyLevelOne200Response", ""
            ) as GetPregnancyLevelOne200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: PregnancyErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PregnancyErrorResponse", ""
            ) as PregnancyErrorResponse;
            throw new ApiException<PregnancyErrorResponse>(response.httpStatusCode, "Query parameters were invalid or a database error occurred.", body, response.headers);
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
            const body: GetPregnancyLevelOne200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetPregnancyLevelOne200Response", ""
            ) as GetPregnancyLevelOne200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPregnancyRoutes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPregnancyRoutesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PregnancyRoutesResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PregnancyRoutesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PregnancyRoutesResponse", ""
            ) as PregnancyRoutesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: PregnancyErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PregnancyErrorResponse", ""
            ) as PregnancyErrorResponse;
            throw new ApiException<PregnancyErrorResponse>(response.httpStatusCode, "The route list could not be retrieved.", body, response.headers);
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
            const body: PregnancyRoutesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PregnancyRoutesResponse", ""
            ) as PregnancyRoutesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to searchPregnancy
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async searchPregnancyWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<PregnancyData> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<PregnancyData> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<PregnancyData>", ""
            ) as Array<PregnancyData>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: PregnancyErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PregnancyErrorResponse", ""
            ) as PregnancyErrorResponse;
            throw new ApiException<PregnancyErrorResponse>(response.httpStatusCode, "Filters or query parameters were missing or invalid, or a database error occurred.", body, response.headers);
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
            const body: Array<PregnancyData> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<PregnancyData>", ""
            ) as Array<PregnancyData>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
