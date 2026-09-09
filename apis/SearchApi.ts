// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AuthErrorResponse } from '../models/AuthErrorResponse';
import { SearchFilter } from '../models/SearchFilter';
import { SearchMrd200Response } from '../models/SearchMrd200Response';

/**
 * no description
 */
export class SearchApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Searches indexed MRD content using structured filters. Filter 0 must contain a keyword. Searchable fields are keyword and page description, using either = or LIKE. Indexed filters can be connected using AND, OR, NOT or AND NOT, with NOT converted internally to AND NOT. Results are restricted according to the MRD scopes authorised for the request. By default results are paginated. Supplying the all query parameter disables pagination regardless of the parameter value.
     * Search MRD content
     * @param xMrdScopes MRD service scope or scopes to include in global search. Supply one or more OAuth-authorised MRD service scopes, comma-delimited or space-delimited.
     * @param filters Structured Search filters supplied using indexed bracket notation. Filter 0 must contain keyword, operator and condition. Additional filters must contain operator and condition and may contain keyword, description or both. For example: filters[0][operator]&#x3D;LIKE&amp;filters[0][keyword]&#x3D;smoking&amp;filters[0][condition]&#x3D;AND&amp;filters[1][operator]&#x3D;LIKE&amp;filters[1][description]&#x3D;electronic cigarette&amp;filters[1][condition]&#x3D;. The final filter should normally use an empty condition.
     * @param page Page number used when pagination is enabled. The value is cast to an integer by the current implementation. If the resulting value is below 1, page 1 is used. The default is 1.
     * @param all Disables pagination when this query parameter is present. The current implementation checks only whether the parameter exists; its value is ignored. all&#x3D;true, all&#x3D;false and an empty all parameter all enable unpaginated results. Omit the parameter to use pagination.
     * @param limit Requested number of results per page when pagination is enabled. The value is cast to an integer. Values above 100 are reduced to 100. The default is 50.
     */
    public async searchMrd(xMrdScopes: string, filters: Array<SearchFilter>, page?: number, all?: string, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("SearchApi", "searchMrd", "xMrdScopes");
        }


        // verify required parameter 'filters' is not null or undefined
        if (filters === null || filters === undefined) {
            throw new RequiredError("SearchApi", "searchMrd", "filters");
        }





        // Path Params
        const localVarPath = '/search';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filters !== undefined) {
            const serializedParams = ObjectSerializer.serialize(filters, "Array<SearchFilter>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("filters", serializedParam);
            }
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }

        // Query Params
        if (all !== undefined) {
            requestContext.setQueryParam("all", ObjectSerializer.serialize(all, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "string", ""));


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

export class SearchApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to searchMrd
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async searchMrdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SearchMrd200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SearchMrd200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SearchMrd200Response", ""
            ) as SearchMrd200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "Authentication failed because the Bearer token is missing, invalid or expired.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SearchMrd200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SearchMrd200Response", ""
            ) as SearchMrd200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
