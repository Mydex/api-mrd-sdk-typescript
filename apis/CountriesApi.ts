// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AuthErrorResponse } from '../models/AuthErrorResponse';
import { CountriesErrorResponse } from '../models/CountriesErrorResponse';
import { GetAllCountries200Response } from '../models/GetAllCountries200Response';
import { GetCountryByCca2200Response } from '../models/GetCountryByCca2200Response';

/**
 * no description
 */
export class CountriesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Returns all available countries. Without filters, the model returns the complete country list inside an additional outer array. When filters are supplied, the response is the filtered country list directly.
     * Retrieve all countries
     * @param xMrdScopes MRD service scope required for Countries endpoints.
     * @param filters Country fields to include in the response. The API accepts comma-separated values such as filters&#x3D;region,subregion,idd and PHP-style array values such as filters[]&#x3D;capital&amp;filters[]&#x3D;maps. Duplicate filters are removed.
     */
    public async getAllCountries(xMrdScopes: 'countries', filters?: Set<'cca2' | 'cca3' | 'ccn3' | 'flag' | 'status' | 'independent' | 'unMember' | 'region' | 'subregion' | 'landlocked' | 'area' | 'population' | 'fifa' | 'startOfWeek' | 'name' | 'maps' | 'flags' | 'coatOfArms' | 'capitalInfo' | 'postalCode' | 'capital' | 'altSpellings' | 'timezones' | 'continents' | 'languages' | 'currencies' | 'translations' | 'demonyms' | 'gini' | 'car' | 'idd'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("CountriesApi", "getAllCountries", "xMrdScopes");
        }



        // Path Params
        const localVarPath = '/countries';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filters !== undefined) {
            requestContext.setQueryParam("filters", ObjectSerializer.serialize(filters, "Set<'cca2' | 'cca3' | 'ccn3' | 'flag' | 'status' | 'independent' | 'unMember' | 'region' | 'subregion' | 'landlocked' | 'area' | 'population' | 'fifa' | 'startOfWeek' | 'name' | 'maps' | 'flags' | 'coatOfArms' | 'capitalInfo' | 'postalCode' | 'capital' | 'altSpellings' | 'timezones' | 'continents' | 'languages' | 'currencies' | 'translations' | 'demonyms' | 'gini' | 'car' | 'idd'>", ""));
        }

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'countries'", ""));


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
     * Returns the country matching the supplied lookup value. The value is converted to uppercase before lookup. Without filters, a matching country is returned inside an array. With filters, the filtered country object is returned directly. An unknown value returns an empty array.
     * Retrieve a country by CCA2 code
     * @param xMrdScopes MRD service scope required for Countries endpoints.
     * @param cca2 Country CCA2 lookup value. The supplied value is converted to uppercase before the database lookup. For example, ad is looked up as AD.
     * @param filters Country fields to include in the response. The API accepts comma-separated values such as filters&#x3D;region,subregion,idd and PHP-style array values such as filters[]&#x3D;capital&amp;filters[]&#x3D;maps. Duplicate filters are removed.
     */
    public async getCountryByCca2(xMrdScopes: 'countries', cca2: string, filters?: Set<'cca2' | 'cca3' | 'ccn3' | 'flag' | 'status' | 'independent' | 'unMember' | 'region' | 'subregion' | 'landlocked' | 'area' | 'population' | 'fifa' | 'startOfWeek' | 'name' | 'maps' | 'flags' | 'coatOfArms' | 'capitalInfo' | 'postalCode' | 'capital' | 'altSpellings' | 'timezones' | 'continents' | 'languages' | 'currencies' | 'translations' | 'demonyms' | 'gini' | 'car' | 'idd'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("CountriesApi", "getCountryByCca2", "xMrdScopes");
        }


        // verify required parameter 'cca2' is not null or undefined
        if (cca2 === null || cca2 === undefined) {
            throw new RequiredError("CountriesApi", "getCountryByCca2", "cca2");
        }



        // Path Params
        const localVarPath = '/countries/{cca2}'
            .replace('{cca2}', encodeURIComponent(String(cca2)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filters !== undefined) {
            requestContext.setQueryParam("filters", ObjectSerializer.serialize(filters, "Set<'cca2' | 'cca3' | 'ccn3' | 'flag' | 'status' | 'independent' | 'unMember' | 'region' | 'subregion' | 'landlocked' | 'area' | 'population' | 'fifa' | 'startOfWeek' | 'name' | 'maps' | 'flags' | 'coatOfArms' | 'capitalInfo' | 'postalCode' | 'capital' | 'altSpellings' | 'timezones' | 'continents' | 'languages' | 'currencies' | 'translations' | 'demonyms' | 'gini' | 'car' | 'idd'>", ""));
        }

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'countries'", ""));


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

export class CountriesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAllCountries
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllCountriesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetAllCountries200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetAllCountries200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetAllCountries200Response", ""
            ) as GetAllCountries200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: CountriesErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CountriesErrorResponse", ""
            ) as CountriesErrorResponse;
            throw new ApiException<CountriesErrorResponse>(response.httpStatusCode, "An unsupported filter was supplied, a database error occurred, or the Countries request could not be processed.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "Authentication or authorization failed.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetAllCountries200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetAllCountries200Response", ""
            ) as GetAllCountries200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCountryByCca2
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCountryByCca2WithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCountryByCca2200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCountryByCca2200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCountryByCca2200Response", ""
            ) as GetCountryByCca2200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: CountriesErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CountriesErrorResponse", ""
            ) as CountriesErrorResponse;
            throw new ApiException<CountriesErrorResponse>(response.httpStatusCode, "An unsupported filter was supplied, a database error occurred, or the Countries request could not be processed.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "Authentication or authorization failed.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetCountryByCca2200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCountryByCca2200Response", ""
            ) as GetCountryByCca2200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
