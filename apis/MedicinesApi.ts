// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AuthErrorResponse } from '../models/AuthErrorResponse';
import { GetMedicineLevelOne200Response } from '../models/GetMedicineLevelOne200Response';
import { MedicineData } from '../models/MedicineData';
import { MedicinesErrorResponse } from '../models/MedicinesErrorResponse';
import { MedicinesRoutesResponse } from '../models/MedicinesRoutesResponse';
import { MedicinesSearchFilter } from '../models/MedicinesSearchFilter';

/**
 * no description
 */
export class MedicinesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Returns a first-level Medicines page. HTML content is returned by default. no_html removes markup, while nhs_links rewrites eligible MRD links to NHS website links. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a Medicine page
     * @param xMrdScopes MRD service scope required for Medicines endpoints.
     * @param param1 First Medicines route segment, normally identifying a medicine, medicine category or medicine family.
     * @param noHtml When supplied, removes HTML markup from content text. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave HTML unchanged.
     * @param nhsLinks When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     */
    public async getMedicineLevelOne(xMrdScopes: 'medicines', param1: string, noHtml?: 'true', nhsLinks?: 'true', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("MedicinesApi", "getMedicineLevelOne", "xMrdScopes");
        }


        // verify required parameter 'param1' is not null or undefined
        if (param1 === null || param1 === undefined) {
            throw new RequiredError("MedicinesApi", "getMedicineLevelOne", "param1");
        }




        // Path Params
        const localVarPath = '/medicines/{param1}'
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
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'medicines'", ""));


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
     * Returns a third-level Medicines route. These responses use the same flexible NHS page structure as other Medicines routes and may include nested question and answer content. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a page within a nested Medicine
     * @param xMrdScopes MRD service scope required for Medicines endpoints.
     * @param param1 First Medicines route segment, normally identifying a medicine, medicine category or medicine family.
     * @param param2 Second Medicines route segment, normally identifying a medicine page or a medicine within a broader medicine family.
     * @param param3 Third Medicines route segment identifying a page within a nested medicine, such as common questions, dosage, side effects or interactions.
     * @param noHtml When supplied, removes HTML markup from content text. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave HTML unchanged.
     * @param nhsLinks When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     */
    public async getMedicineLevelThree(xMrdScopes: 'medicines', param1: string, param2: string, param3: string, noHtml?: 'true', nhsLinks?: 'true', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("MedicinesApi", "getMedicineLevelThree", "xMrdScopes");
        }


        // verify required parameter 'param1' is not null or undefined
        if (param1 === null || param1 === undefined) {
            throw new RequiredError("MedicinesApi", "getMedicineLevelThree", "param1");
        }


        // verify required parameter 'param2' is not null or undefined
        if (param2 === null || param2 === undefined) {
            throw new RequiredError("MedicinesApi", "getMedicineLevelThree", "param2");
        }


        // verify required parameter 'param3' is not null or undefined
        if (param3 === null || param3 === undefined) {
            throw new RequiredError("MedicinesApi", "getMedicineLevelThree", "param3");
        }




        // Path Params
        const localVarPath = '/medicines/{param1}/{param2}/{param3}'
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
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'medicines'", ""));


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
     * Returns a specific page within a medicine, or a medicine nested within a broader medicine family. HTML and link behaviour can be controlled using no_html and nhs_links. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a Medicine subpage or nested medicine
     * @param xMrdScopes MRD service scope required for Medicines endpoints.
     * @param param1 First Medicines route segment, normally identifying a medicine, medicine category or medicine family.
     * @param param2 Second Medicines route segment, normally identifying a medicine page or a medicine within a broader medicine family.
     * @param noHtml When supplied, removes HTML markup from content text. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave HTML unchanged.
     * @param nhsLinks When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     */
    public async getMedicineLevelTwo(xMrdScopes: 'medicines', param1: string, param2: string, noHtml?: 'true', nhsLinks?: 'true', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("MedicinesApi", "getMedicineLevelTwo", "xMrdScopes");
        }


        // verify required parameter 'param1' is not null or undefined
        if (param1 === null || param1 === undefined) {
            throw new RequiredError("MedicinesApi", "getMedicineLevelTwo", "param1");
        }


        // verify required parameter 'param2' is not null or undefined
        if (param2 === null || param2 === undefined) {
            throw new RequiredError("MedicinesApi", "getMedicineLevelTwo", "param2");
        }




        // Path Params
        const localVarPath = '/medicines/{param1}/{param2}'
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
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'medicines'", ""));


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
     * Returns the available routes within the NHS Medicines dataset.
     * Retrieve available Medicines routes
     * @param xMrdScopes MRD service scope required for Medicines endpoints.
     */
    public async getMedicinesRoutes(xMrdScopes: 'medicines', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("MedicinesApi", "getMedicinesRoutes", "xMrdScopes");
        }


        // Path Params
        const localVarPath = '/medicines';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'medicines'", ""));


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
     * Searches the NHS Medicines dataset using structured filters. By default filters search medicine descriptions. When search_all is enabled, additional searchable page content is included. no_html and nhs_links control content and link formatting.
     * Search Medicines content
     * @param xMrdScopes MRD service scope required for Medicines endpoints.
     * @param filters Structured Medicines search filters supplied using indexed bracket notation, for example filters[0][operator]&#x3D;LIKE&amp;filters[0][value]&#x3D;rapid acting insulin&amp;filters[0][condition]&#x3D;AND&amp;filters[1][operator]&#x3D;LIKE&amp;filters[1][value]&#x3D;diabetes&amp;filters[1][condition]&#x3D;. Each filter must contain exactly value, operator and condition.
     * @param noHtml When supplied, removes HTML markup from content text. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave HTML unchanged.
     * @param nhsLinks When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     * @param searchAll When supplied, the search also checks additional Medicines page content in addition to medicine descriptions. The only accepted value is \&#39;true\&#39;. This parameter is only valid on the search endpoint.
     */
    public async searchMedicines(xMrdScopes: 'medicines', filters: Array<MedicinesSearchFilter>, noHtml?: 'true', nhsLinks?: 'true', searchAll?: 'true', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("MedicinesApi", "searchMedicines", "xMrdScopes");
        }


        // verify required parameter 'filters' is not null or undefined
        if (filters === null || filters === undefined) {
            throw new RequiredError("MedicinesApi", "searchMedicines", "filters");
        }





        // Path Params
        const localVarPath = '/medicines/search';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filters !== undefined) {
            const serializedParams = ObjectSerializer.serialize(filters, "Array<MedicinesSearchFilter>", "");
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
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'medicines'", ""));


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

export class MedicinesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMedicineLevelOne
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMedicineLevelOneWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetMedicineLevelOne200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetMedicineLevelOne200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetMedicineLevelOne200Response", ""
            ) as GetMedicineLevelOne200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MedicinesErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MedicinesErrorResponse", ""
            ) as MedicinesErrorResponse;
            throw new ApiException<MedicinesErrorResponse>(response.httpStatusCode, "Query parameters were invalid or a database error occurred.", body, response.headers);
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
            const body: GetMedicineLevelOne200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetMedicineLevelOne200Response", ""
            ) as GetMedicineLevelOne200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMedicineLevelThree
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMedicineLevelThreeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetMedicineLevelOne200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetMedicineLevelOne200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetMedicineLevelOne200Response", ""
            ) as GetMedicineLevelOne200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MedicinesErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MedicinesErrorResponse", ""
            ) as MedicinesErrorResponse;
            throw new ApiException<MedicinesErrorResponse>(response.httpStatusCode, "Query parameters were invalid or a database error occurred.", body, response.headers);
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
            const body: GetMedicineLevelOne200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetMedicineLevelOne200Response", ""
            ) as GetMedicineLevelOne200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMedicineLevelTwo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMedicineLevelTwoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetMedicineLevelOne200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetMedicineLevelOne200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetMedicineLevelOne200Response", ""
            ) as GetMedicineLevelOne200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MedicinesErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MedicinesErrorResponse", ""
            ) as MedicinesErrorResponse;
            throw new ApiException<MedicinesErrorResponse>(response.httpStatusCode, "Query parameters were invalid or a database error occurred.", body, response.headers);
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
            const body: GetMedicineLevelOne200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetMedicineLevelOne200Response", ""
            ) as GetMedicineLevelOne200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMedicinesRoutes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMedicinesRoutesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MedicinesRoutesResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MedicinesRoutesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MedicinesRoutesResponse", ""
            ) as MedicinesRoutesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MedicinesErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MedicinesErrorResponse", ""
            ) as MedicinesErrorResponse;
            throw new ApiException<MedicinesErrorResponse>(response.httpStatusCode, "The route list could not be retrieved.", body, response.headers);
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
            const body: MedicinesRoutesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MedicinesRoutesResponse", ""
            ) as MedicinesRoutesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to searchMedicines
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async searchMedicinesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<MedicineData> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<MedicineData> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<MedicineData>", ""
            ) as Array<MedicineData>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MedicinesErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MedicinesErrorResponse", ""
            ) as MedicinesErrorResponse;
            throw new ApiException<MedicinesErrorResponse>(response.httpStatusCode, "Filters or query parameters were missing or invalid, or a database error occurred.", body, response.headers);
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
            const body: Array<MedicineData> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<MedicineData>", ""
            ) as Array<MedicineData>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
