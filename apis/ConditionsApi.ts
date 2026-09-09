// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AuthErrorResponse } from '../models/AuthErrorResponse';
import { ConditionErrorResponse } from '../models/ConditionErrorResponse';
import { ConditionResponse } from '../models/ConditionResponse';
import { ConditionSearchFilter } from '../models/ConditionSearchFilter';
import { ConditionsRouteListResponse } from '../models/ConditionsRouteListResponse';
import { ConditionsSearchResponse } from '../models/ConditionsSearchResponse';

/**
 * no description
 */
export class ConditionsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Returns a Conditions page identified by one route segment. The response may contain HTML by default. Use no_html to return processed plain text and nhs_links to return eligible original NHS URLs.
     * Retrieve a first-level Conditions page
     * @param xMrdScopes MRD service scope required for Conditions endpoints.
     * @param param1 First Conditions route segment.
     * @param noHtml Removes HTML markup from returned content. When supplied, this parameter must be set to \&#39;true\&#39;.
     * @param nhsLinks Replaces eligible MRD URLs with their NHS website equivalents. When supplied, this parameter must be set to \&#39;true\&#39;.
     */
    public async getConditionLevelOne(xMrdScopes: 'conditions', param1: string, noHtml?: 'true', nhsLinks?: 'true', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("ConditionsApi", "getConditionLevelOne", "xMrdScopes");
        }


        // verify required parameter 'param1' is not null or undefined
        if (param1 === null || param1 === undefined) {
            throw new RequiredError("ConditionsApi", "getConditionLevelOne", "param1");
        }




        // Path Params
        const localVarPath = '/conditions/{param1}'
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
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'conditions'", ""));


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
     * Returns a Conditions page identified by three route segments. Responses may contain recursively nested web-page elements and video objects.
     * Retrieve a third-level Conditions page
     * @param xMrdScopes MRD service scope required for Conditions endpoints.
     * @param param1 First Conditions route segment.
     * @param param2 Second Conditions route segment.
     * @param param3 Third Conditions route segment.
     * @param noHtml Removes HTML markup from returned content. When supplied, this parameter must be set to \&#39;true\&#39;.
     * @param nhsLinks Replaces eligible MRD URLs with their NHS website equivalents. When supplied, this parameter must be set to \&#39;true\&#39;.
     */
    public async getConditionLevelThree(xMrdScopes: 'conditions', param1: string, param2: string, param3: string, noHtml?: 'true', nhsLinks?: 'true', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("ConditionsApi", "getConditionLevelThree", "xMrdScopes");
        }


        // verify required parameter 'param1' is not null or undefined
        if (param1 === null || param1 === undefined) {
            throw new RequiredError("ConditionsApi", "getConditionLevelThree", "param1");
        }


        // verify required parameter 'param2' is not null or undefined
        if (param2 === null || param2 === undefined) {
            throw new RequiredError("ConditionsApi", "getConditionLevelThree", "param2");
        }


        // verify required parameter 'param3' is not null or undefined
        if (param3 === null || param3 === undefined) {
            throw new RequiredError("ConditionsApi", "getConditionLevelThree", "param3");
        }




        // Path Params
        const localVarPath = '/conditions/{param1}/{param2}/{param3}'
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
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'conditions'", ""));


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
     * Returns a Conditions page identified by two route segments. The no_html and nhs_links parameters can be used separately or together.
     * Retrieve a second-level Conditions page
     * @param xMrdScopes MRD service scope required for Conditions endpoints.
     * @param param1 First Conditions route segment.
     * @param param2 Second Conditions route segment.
     * @param noHtml Removes HTML markup from returned content. When supplied, this parameter must be set to \&#39;true\&#39;.
     * @param nhsLinks Replaces eligible MRD URLs with their NHS website equivalents. When supplied, this parameter must be set to \&#39;true\&#39;.
     */
    public async getConditionLevelTwo(xMrdScopes: 'conditions', param1: string, param2: string, noHtml?: 'true', nhsLinks?: 'true', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("ConditionsApi", "getConditionLevelTwo", "xMrdScopes");
        }


        // verify required parameter 'param1' is not null or undefined
        if (param1 === null || param1 === undefined) {
            throw new RequiredError("ConditionsApi", "getConditionLevelTwo", "param1");
        }


        // verify required parameter 'param2' is not null or undefined
        if (param2 === null || param2 === undefined) {
            throw new RequiredError("ConditionsApi", "getConditionLevelTwo", "param2");
        }




        // Path Params
        const localVarPath = '/conditions/{param1}/{param2}'
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
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'conditions'", ""));


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
     * Returns absolute URLs for the routes available in the NHS Conditions dataset.
     * Retrieve available Conditions routes
     * @param xMrdScopes MRD service scope required for Conditions endpoints.
     */
    public async getConditionRoutes(xMrdScopes: 'conditions', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("ConditionsApi", "getConditionRoutes", "xMrdScopes");
        }


        // Path Params
        const localVarPath = '/conditions';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'conditions'", ""));


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
     * Searches the NHS Conditions dataset. By default the search is performed against page descriptions. When search_all is enabled, page text and expander content are also searched. The no_html option removes HTML from textual content and nhs_links changes eligible MRD URLs to original NHS URLs.
     * Search Conditions content
     * @param xMrdScopes MRD service scope required for Conditions endpoints.
     * @param filters Structured Conditions search filters supplied using indexed bracket notation, for example filters[0][operator]&#x3D;LIKE&amp;filters[0][value]&#x3D;cancer&amp;filters[0][condition]&#x3D;AND&amp;filters[1][operator]&#x3D;LIKE&amp;filters[1][value]&#x3D;treatment&amp;filters[1][condition]&#x3D;. Each filter must contain exactly value, operator and condition.
     * @param noHtml Removes HTML markup from returned content. When supplied, this parameter must be set to \&#39;true\&#39;.
     * @param nhsLinks Replaces eligible MRD URLs with their NHS website equivalents. When supplied, this parameter must be set to \&#39;true\&#39;.
     * @param searchAll Extends Conditions search to page-content text and expander content in addition to the default page description. When supplied, this parameter must be set to \&#39;true\&#39;. This parameter is only valid on the search endpoint.
     */
    public async searchConditions(xMrdScopes: 'conditions', filters: Array<ConditionSearchFilter>, noHtml?: 'true', nhsLinks?: 'true', searchAll?: 'true', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("ConditionsApi", "searchConditions", "xMrdScopes");
        }


        // verify required parameter 'filters' is not null or undefined
        if (filters === null || filters === undefined) {
            throw new RequiredError("ConditionsApi", "searchConditions", "filters");
        }





        // Path Params
        const localVarPath = '/conditions/search';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filters !== undefined) {
            const serializedParams = ObjectSerializer.serialize(filters, "Array<ConditionSearchFilter>", "");
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
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'conditions'", ""));


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

export class ConditionsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getConditionLevelOne
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getConditionLevelOneWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ConditionResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ConditionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConditionResponse", ""
            ) as ConditionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ConditionErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConditionErrorResponse", ""
            ) as ConditionErrorResponse;
            throw new ApiException<ConditionErrorResponse>(response.httpStatusCode, "The route or query parameters were invalid.", body, response.headers);
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
            const body: ConditionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConditionResponse", ""
            ) as ConditionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getConditionLevelThree
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getConditionLevelThreeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ConditionResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ConditionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConditionResponse", ""
            ) as ConditionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ConditionErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConditionErrorResponse", ""
            ) as ConditionErrorResponse;
            throw new ApiException<ConditionErrorResponse>(response.httpStatusCode, "The route or query parameters were invalid.", body, response.headers);
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
            const body: ConditionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConditionResponse", ""
            ) as ConditionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getConditionLevelTwo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getConditionLevelTwoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ConditionResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ConditionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConditionResponse", ""
            ) as ConditionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ConditionErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConditionErrorResponse", ""
            ) as ConditionErrorResponse;
            throw new ApiException<ConditionErrorResponse>(response.httpStatusCode, "The route or query parameters were invalid.", body, response.headers);
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
            const body: ConditionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConditionResponse", ""
            ) as ConditionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getConditionRoutes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getConditionRoutesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ConditionsRouteListResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ConditionsRouteListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConditionsRouteListResponse", ""
            ) as ConditionsRouteListResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ConditionErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConditionErrorResponse", ""
            ) as ConditionErrorResponse;
            throw new ApiException<ConditionErrorResponse>(response.httpStatusCode, "The route list could not be retrieved.", body, response.headers);
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
            const body: ConditionsRouteListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConditionsRouteListResponse", ""
            ) as ConditionsRouteListResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to searchConditions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async searchConditionsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ConditionsSearchResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ConditionsSearchResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConditionsSearchResponse", ""
            ) as ConditionsSearchResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ConditionErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConditionErrorResponse", ""
            ) as ConditionErrorResponse;
            throw new ApiException<ConditionErrorResponse>(response.httpStatusCode, "The search parameters were missing or invalid.", body, response.headers);
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
            const body: ConditionsSearchResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConditionsSearchResponse", ""
            ) as ConditionsSearchResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
