// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { LookupAllowedValuesResponse } from '../models/LookupAllowedValuesResponse';
import { LookupValidationResponse } from '../models/LookupValidationResponse';
import { MdsAllDatasetWithFields } from '../models/MdsAllDatasetWithFields';
import { MdsDatasetSummary } from '../models/MdsDatasetSummary';
import { MdsDatasetWithFields } from '../models/MdsDatasetWithFields';
import { MdsFieldDetails } from '../models/MdsFieldDetails';
import { MdsFieldSearchResponse } from '../models/MdsFieldSearchResponse';
import { MdsFieldType } from '../models/MdsFieldType';
import { MdsFieldTypeResponse } from '../models/MdsFieldTypeResponse';
import { MdsSummaryResponse } from '../models/MdsSummaryResponse';
import { MtsFeatureRecord } from '../models/MtsFeatureRecord';
import { MtsTemplateRecord } from '../models/MtsTemplateRecord';
import { ValidationsErrorResponse } from '../models/ValidationsErrorResponse';

/**
 * no description
 */
export class ValidationsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Returns allowed values from the requested validation lookup. Most lookup tables return an array of strings. Structured lookup tables such as race_ethnicity return an array of objects. The field name must map to a supported lu_<field_name> lookup table; country is additionally supported from the Countries database.
     * Retrieve allowed values for a lookup field
     * @param fieldName Supported validation lookup field. Only lookup datasets currently intended to provide useful values through the Validations API are exposed here.
     */
    public async getValidationLookupValues(fieldName: 'bank_acc_type' | 'comm_type' | 'country' | 'dl_group' | 'dl_issuing_authority' | 'edu_org_type' | 'gender' | 'home_tenancy' | 'marital_status' | 'medication_dosage_units' | 'mode_of_study' | 'pronouns' | 'property_type' | 'race_ethnicity' | 'title' | 'utility_service', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'fieldName' is not null or undefined
        if (fieldName === null || fieldName === undefined) {
            throw new RequiredError("ValidationsApi", "getValidationLookupValues", "fieldName");
        }


        // Path Params
        const localVarPath = '/validations/lookup/{field_name}'
            .replace('{field_name}', encodeURIComponent(String(fieldName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns all published datasets grouped dynamically by dataset status. Each dataset includes its PDS file type, derived deployment environment and extended information for its published fields.
     * Retrieve all MDS datasets with extended field information
     */
    public async getValidationMdsAllDatasetsAndFields(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/validations/mds/all-datasets-and-fields';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns an object keyed by field machine name containing the field name, display name and data type for fields belonging to the requested dataset.
     * Retrieve field types for an MDS dataset
     * @param dataset MDS dataset machine name.
     */
    public async getValidationMdsDatasetFieldTypes(dataset: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'dataset' is not null or undefined
        if (dataset === null || dataset === undefined) {
            throw new RequiredError("ValidationsApi", "getValidationMdsDatasetFieldTypes", "dataset");
        }


        // Path Params
        const localVarPath = '/validations/mds/dataset/{dataset}/fieldtypes'
            .replace('{dataset}', encodeURIComponent(String(dataset)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns an object keyed by field machine name containing extended definitions for published fields belonging to the requested dataset.
     * Retrieve full field definitions for an MDS dataset
     * @param dataset MDS dataset machine name.
     */
    public async getValidationMdsDatasetFields(dataset: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'dataset' is not null or undefined
        if (dataset === null || dataset === undefined) {
            throw new RequiredError("ValidationsApi", "getValidationMdsDatasetFields", "dataset");
        }


        // Path Params
        const localVarPath = '/validations/mds/dataset/{dataset}'
            .replace('{dataset}', encodeURIComponent(String(dataset)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns published MDS datasets including their machine name, display name and status.
     * Retrieve MDS datasets
     */
    public async getValidationMdsDatasets(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/validations/mds/datasets';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns published datasets grouped dynamically by dataset status. Each dataset contains its machine name, display name, status, PDS file type and a map of published fields containing field name, display name and data type.
     * Retrieve MDS datasets and basic field information
     */
    public async getValidationMdsDatasetsAndFields(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/validations/mds/datasets-and-fields';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns published datasets matching the supplied dataset status.
     * Retrieve MDS datasets by one status
     * @param status1 First MDS dataset status to include.
     */
    public async getValidationMdsDatasetsByOneStatus(status1: 'Live' | 'In Development' | 'Implement' | 'Hold', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'status1' is not null or undefined
        if (status1 === null || status1 === undefined) {
            throw new RequiredError("ValidationsApi", "getValidationMdsDatasetsByOneStatus", "status1");
        }


        // Path Params
        const localVarPath = '/validations/mds/datasets/{status1}'
            .replace('{status1}', encodeURIComponent(String(status1)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns published datasets matching any of the supplied dataset statuses.
     * Retrieve MDS datasets by three statuses
     * @param status1 First MDS dataset status to include.
     * @param status2 Second MDS dataset status to include.
     * @param status3 Third MDS dataset status to include.
     */
    public async getValidationMdsDatasetsByThreeStatuses(status1: 'Live' | 'In Development' | 'Implement' | 'Hold', status2: 'Live' | 'In Development' | 'Implement' | 'Hold', status3: 'Live' | 'In Development' | 'Implement' | 'Hold', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'status1' is not null or undefined
        if (status1 === null || status1 === undefined) {
            throw new RequiredError("ValidationsApi", "getValidationMdsDatasetsByThreeStatuses", "status1");
        }


        // verify required parameter 'status2' is not null or undefined
        if (status2 === null || status2 === undefined) {
            throw new RequiredError("ValidationsApi", "getValidationMdsDatasetsByThreeStatuses", "status2");
        }


        // verify required parameter 'status3' is not null or undefined
        if (status3 === null || status3 === undefined) {
            throw new RequiredError("ValidationsApi", "getValidationMdsDatasetsByThreeStatuses", "status3");
        }


        // Path Params
        const localVarPath = '/validations/mds/datasets/{status1}/{status2}/{status3}'
            .replace('{status1}', encodeURIComponent(String(status1)))
            .replace('{status2}', encodeURIComponent(String(status2)))
            .replace('{status3}', encodeURIComponent(String(status3)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns published datasets matching either of the supplied dataset statuses.
     * Retrieve MDS datasets by two statuses
     * @param status1 First MDS dataset status to include.
     * @param status2 Second MDS dataset status to include.
     */
    public async getValidationMdsDatasetsByTwoStatuses(status1: 'Live' | 'In Development' | 'Implement' | 'Hold', status2: 'Live' | 'In Development' | 'Implement' | 'Hold', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'status1' is not null or undefined
        if (status1 === null || status1 === undefined) {
            throw new RequiredError("ValidationsApi", "getValidationMdsDatasetsByTwoStatuses", "status1");
        }


        // verify required parameter 'status2' is not null or undefined
        if (status2 === null || status2 === undefined) {
            throw new RequiredError("ValidationsApi", "getValidationMdsDatasetsByTwoStatuses", "status2");
        }


        // Path Params
        const localVarPath = '/validations/mds/datasets/{status1}/{status2}'
            .replace('{status1}', encodeURIComponent(String(status1)))
            .replace('{status2}', encodeURIComponent(String(status2)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns published datasets belonging to the requested public dataset type. metadata is mapped internally to JSON and transactional is mapped internally to SQLite.
     * Retrieve MDS datasets by type
     * @param type Public dataset type. metadata maps to JSON-backed datasets and transactional maps to SQLite-backed datasets.
     */
    public async getValidationMdsDatasetsByType(type: 'metadata' | 'transactional', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'type' is not null or undefined
        if (type === null || type === undefined) {
            throw new RequiredError("ValidationsApi", "getValidationMdsDatasetsByType", "type");
        }


        // Path Params
        const localVarPath = '/validations/mds/datasets/type/{type}'
            .replace('{type}', encodeURIComponent(String(type)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns the field machine name, display name and data type for the requested MDS field.
     * Retrieve an MDS field\'s data type
     * @param field MDS field machine name.
     */
    public async getValidationMdsFieldType(field: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'field' is not null or undefined
        if (field === null || field === undefined) {
            throw new RequiredError("ValidationsApi", "getValidationMdsFieldType", "field");
        }


        // Path Params
        const localVarPath = '/validations/mds/field/type/{field}'
            .replace('{field}', encodeURIComponent(String(field)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns counts of published datasets, published live datasets and published fields. The current API serializes these database count values as strings.
     * Retrieve an MDS summary
     */
    public async getValidationMdsSummary(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/validations/mds/summary';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns records whose feature_name matches the supplied feature name.
     * Retrieve an MTS feature by name
     * @param feature Mydex Template System feature name. The endpoint matches this value against feature_name.
     */
    public async getValidationMtsFeatureByName(feature: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'feature' is not null or undefined
        if (feature === null || feature === undefined) {
            throw new RequiredError("ValidationsApi", "getValidationMtsFeatureByName", "feature");
        }


        // Path Params
        const localVarPath = '/validations/mts/features/{feature}'
            .replace('{feature}', encodeURIComponent(String(feature)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns all Mydex Template System feature records.
     * Retrieve all MTS features
     */
    public async getValidationMtsFeatures(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/validations/mts/features';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns records whose feature_group matches the supplied feature group name.
     * Retrieve MTS features by group
     * @param group Mydex Template System feature group name. The endpoint matches this value against feature_group.
     */
    public async getValidationMtsFeaturesByGroup(group: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'group' is not null or undefined
        if (group === null || group === undefined) {
            throw new RequiredError("ValidationsApi", "getValidationMtsFeaturesByGroup", "group");
        }


        // Path Params
        const localVarPath = '/validations/mts/features/group/{group}'
            .replace('{group}', encodeURIComponent(String(group)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns records whose template_name and module_name match the supplied values.
     * Retrieve an MTS template module
     * @param template Mydex Template System template name. The endpoint matches this value against template_name.
     * @param module Mydex Template System module name. The endpoint matches this value against module_name.
     */
    public async getValidationMtsTemplateByModule(template: string, module: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'template' is not null or undefined
        if (template === null || template === undefined) {
            throw new RequiredError("ValidationsApi", "getValidationMtsTemplateByModule", "template");
        }


        // verify required parameter 'module' is not null or undefined
        if (module === null || module === undefined) {
            throw new RequiredError("ValidationsApi", "getValidationMtsTemplateByModule", "module");
        }


        // Path Params
        const localVarPath = '/validations/mts/templates/{template}/{module}'
            .replace('{template}', encodeURIComponent(String(template)))
            .replace('{module}', encodeURIComponent(String(module)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns records whose template_name matches the supplied template name.
     * Retrieve MTS template records by template name
     * @param template Mydex Template System template name. The endpoint matches this value against template_name.
     */
    public async getValidationMtsTemplateByName(template: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'template' is not null or undefined
        if (template === null || template === undefined) {
            throw new RequiredError("ValidationsApi", "getValidationMtsTemplateByName", "template");
        }


        // Path Params
        const localVarPath = '/validations/mts/templates/{template}'
            .replace('{template}', encodeURIComponent(String(template)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns records whose template_name, module_name and module_subsection match the supplied values.
     * Retrieve an MTS template subsection
     * @param template Mydex Template System template name. The endpoint matches this value against template_name.
     * @param module Mydex Template System module name. The endpoint matches this value against module_name.
     * @param subsection Mydex Template System module subsection name. The endpoint matches this value against module_subsection.
     */
    public async getValidationMtsTemplateBySubsection(template: string, module: string, subsection: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'template' is not null or undefined
        if (template === null || template === undefined) {
            throw new RequiredError("ValidationsApi", "getValidationMtsTemplateBySubsection", "template");
        }


        // verify required parameter 'module' is not null or undefined
        if (module === null || module === undefined) {
            throw new RequiredError("ValidationsApi", "getValidationMtsTemplateBySubsection", "module");
        }


        // verify required parameter 'subsection' is not null or undefined
        if (subsection === null || subsection === undefined) {
            throw new RequiredError("ValidationsApi", "getValidationMtsTemplateBySubsection", "subsection");
        }


        // Path Params
        const localVarPath = '/validations/mts/templates/{template}/{module}/{subsection}'
            .replace('{template}', encodeURIComponent(String(template)))
            .replace('{module}', encodeURIComponent(String(module)))
            .replace('{subsection}', encodeURIComponent(String(subsection)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns all records from the Mydex Template System templates_features table, including template, module, subsection and route information.
     * Retrieve all MTS template records
     */
    public async getValidationMtsTemplates(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/validations/mts/templates';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Searches published MDS field machine names for values containing the supplied search term.
     * Search MDS field names
     * @param search Partial field machine name used to search published MDS fields.
     */
    public async searchValidationMdsFields(search: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'search' is not null or undefined
        if (search === null || search === undefined) {
            throw new RequiredError("ValidationsApi", "searchValidationMdsFields", "search");
        }


        // Path Params
        const localVarPath = '/validations/mds/search/{search}'
            .replace('{search}', encodeURIComponent(String(search)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Checks whether the supplied value matches an allowed value associated with the requested lookup. Matching is case-insensitive because the endpoint converts both stored values and the supplied value to uppercase. The result is returned as the string true or false.
     * Validate a value against a lookup field
     * @param fieldName Supported validation lookup field. Only lookup datasets currently intended to provide useful values through the Validations API are exposed here.
     * @param userInput Value to validate against the allowed values associated with the requested lookup.
     */
    public async validateLookupValue(fieldName: 'bank_acc_type' | 'comm_type' | 'country' | 'dl_group' | 'dl_issuing_authority' | 'edu_org_type' | 'gender' | 'home_tenancy' | 'marital_status' | 'medication_dosage_units' | 'mode_of_study' | 'pronouns' | 'property_type' | 'race_ethnicity' | 'title' | 'utility_service', userInput: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'fieldName' is not null or undefined
        if (fieldName === null || fieldName === undefined) {
            throw new RequiredError("ValidationsApi", "validateLookupValue", "fieldName");
        }


        // verify required parameter 'userInput' is not null or undefined
        if (userInput === null || userInput === undefined) {
            throw new RequiredError("ValidationsApi", "validateLookupValue", "userInput");
        }


        // Path Params
        const localVarPath = '/validations/lookup/{field_name}/{user_input}'
            .replace('{field_name}', encodeURIComponent(String(fieldName)))
            .replace('{user_input}', encodeURIComponent(String(userInput)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class ValidationsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getValidationLookupValues
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getValidationLookupValuesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LookupAllowedValuesResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LookupAllowedValuesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LookupAllowedValuesResponse", ""
            ) as LookupAllowedValuesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValidationsErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValidationsErrorResponse", ""
            ) as ValidationsErrorResponse;
            throw new ApiException<ValidationsErrorResponse>(response.httpStatusCode, "Invalid lookup field name or database error.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LookupAllowedValuesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LookupAllowedValuesResponse", ""
            ) as LookupAllowedValuesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getValidationMdsAllDatasetsAndFields
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getValidationMdsAllDatasetsAndFieldsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<{ [key: string]: Array<MdsAllDatasetWithFields>; } >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: { [key: string]: Array<MdsAllDatasetWithFields>; } = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "{ [key: string]: Array<MdsAllDatasetWithFields>; }", ""
            ) as { [key: string]: Array<MdsAllDatasetWithFields>; };
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValidationsErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValidationsErrorResponse", ""
            ) as ValidationsErrorResponse;
            throw new ApiException<ValidationsErrorResponse>(response.httpStatusCode, "Database or processing error.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: { [key: string]: Array<MdsAllDatasetWithFields>; } = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "{ [key: string]: Array<MdsAllDatasetWithFields>; }", ""
            ) as { [key: string]: Array<MdsAllDatasetWithFields>; };
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getValidationMdsDatasetFieldTypes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getValidationMdsDatasetFieldTypesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<{ [key: string]: MdsFieldType; } >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: { [key: string]: MdsFieldType; } = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "{ [key: string]: MdsFieldType; }", ""
            ) as { [key: string]: MdsFieldType; };
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValidationsErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValidationsErrorResponse", ""
            ) as ValidationsErrorResponse;
            throw new ApiException<ValidationsErrorResponse>(response.httpStatusCode, "Invalid dataset name, database error or processing error.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: { [key: string]: MdsFieldType; } = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "{ [key: string]: MdsFieldType; }", ""
            ) as { [key: string]: MdsFieldType; };
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getValidationMdsDatasetFields
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getValidationMdsDatasetFieldsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<{ [key: string]: MdsFieldDetails; } >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: { [key: string]: MdsFieldDetails; } = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "{ [key: string]: MdsFieldDetails; }", ""
            ) as { [key: string]: MdsFieldDetails; };
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValidationsErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValidationsErrorResponse", ""
            ) as ValidationsErrorResponse;
            throw new ApiException<ValidationsErrorResponse>(response.httpStatusCode, "Invalid dataset name, database error or processing error.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: { [key: string]: MdsFieldDetails; } = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "{ [key: string]: MdsFieldDetails; }", ""
            ) as { [key: string]: MdsFieldDetails; };
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getValidationMdsDatasets
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getValidationMdsDatasetsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<MdsDatasetSummary> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<MdsDatasetSummary> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<MdsDatasetSummary>", ""
            ) as Array<MdsDatasetSummary>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValidationsErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValidationsErrorResponse", ""
            ) as ValidationsErrorResponse;
            throw new ApiException<ValidationsErrorResponse>(response.httpStatusCode, "Database or processing error.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<MdsDatasetSummary> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<MdsDatasetSummary>", ""
            ) as Array<MdsDatasetSummary>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getValidationMdsDatasetsAndFields
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getValidationMdsDatasetsAndFieldsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<{ [key: string]: Array<MdsDatasetWithFields>; } >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: { [key: string]: Array<MdsDatasetWithFields>; } = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "{ [key: string]: Array<MdsDatasetWithFields>; }", ""
            ) as { [key: string]: Array<MdsDatasetWithFields>; };
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValidationsErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValidationsErrorResponse", ""
            ) as ValidationsErrorResponse;
            throw new ApiException<ValidationsErrorResponse>(response.httpStatusCode, "Database or processing error.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: { [key: string]: Array<MdsDatasetWithFields>; } = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "{ [key: string]: Array<MdsDatasetWithFields>; }", ""
            ) as { [key: string]: Array<MdsDatasetWithFields>; };
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getValidationMdsDatasetsByOneStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getValidationMdsDatasetsByOneStatusWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<MdsDatasetSummary> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<MdsDatasetSummary> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<MdsDatasetSummary>", ""
            ) as Array<MdsDatasetSummary>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValidationsErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValidationsErrorResponse", ""
            ) as ValidationsErrorResponse;
            throw new ApiException<ValidationsErrorResponse>(response.httpStatusCode, "Invalid dataset status, database error or processing error.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<MdsDatasetSummary> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<MdsDatasetSummary>", ""
            ) as Array<MdsDatasetSummary>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getValidationMdsDatasetsByThreeStatuses
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getValidationMdsDatasetsByThreeStatusesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<MdsDatasetSummary> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<MdsDatasetSummary> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<MdsDatasetSummary>", ""
            ) as Array<MdsDatasetSummary>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValidationsErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValidationsErrorResponse", ""
            ) as ValidationsErrorResponse;
            throw new ApiException<ValidationsErrorResponse>(response.httpStatusCode, "Invalid dataset status, database error or processing error.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<MdsDatasetSummary> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<MdsDatasetSummary>", ""
            ) as Array<MdsDatasetSummary>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getValidationMdsDatasetsByTwoStatuses
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getValidationMdsDatasetsByTwoStatusesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<MdsDatasetSummary> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<MdsDatasetSummary> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<MdsDatasetSummary>", ""
            ) as Array<MdsDatasetSummary>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValidationsErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValidationsErrorResponse", ""
            ) as ValidationsErrorResponse;
            throw new ApiException<ValidationsErrorResponse>(response.httpStatusCode, "Invalid dataset status, database error or processing error.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<MdsDatasetSummary> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<MdsDatasetSummary>", ""
            ) as Array<MdsDatasetSummary>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getValidationMdsDatasetsByType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getValidationMdsDatasetsByTypeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<MdsDatasetSummary> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<MdsDatasetSummary> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<MdsDatasetSummary>", ""
            ) as Array<MdsDatasetSummary>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValidationsErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValidationsErrorResponse", ""
            ) as ValidationsErrorResponse;
            throw new ApiException<ValidationsErrorResponse>(response.httpStatusCode, "Invalid dataset type, database error or processing error.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<MdsDatasetSummary> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<MdsDatasetSummary>", ""
            ) as Array<MdsDatasetSummary>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getValidationMdsFieldType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getValidationMdsFieldTypeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MdsFieldTypeResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MdsFieldTypeResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MdsFieldTypeResponse", ""
            ) as MdsFieldTypeResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValidationsErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValidationsErrorResponse", ""
            ) as ValidationsErrorResponse;
            throw new ApiException<ValidationsErrorResponse>(response.httpStatusCode, "Invalid field name, database error or processing error.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MdsFieldTypeResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MdsFieldTypeResponse", ""
            ) as MdsFieldTypeResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getValidationMdsSummary
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getValidationMdsSummaryWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MdsSummaryResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MdsSummaryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MdsSummaryResponse", ""
            ) as MdsSummaryResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValidationsErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValidationsErrorResponse", ""
            ) as ValidationsErrorResponse;
            throw new ApiException<ValidationsErrorResponse>(response.httpStatusCode, "Database or processing error.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MdsSummaryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MdsSummaryResponse", ""
            ) as MdsSummaryResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getValidationMtsFeatureByName
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getValidationMtsFeatureByNameWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<MtsFeatureRecord> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<MtsFeatureRecord> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<MtsFeatureRecord>", ""
            ) as Array<MtsFeatureRecord>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValidationsErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValidationsErrorResponse", ""
            ) as ValidationsErrorResponse;
            throw new ApiException<ValidationsErrorResponse>(response.httpStatusCode, "Invalid feature name, database error or processing error.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<MtsFeatureRecord> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<MtsFeatureRecord>", ""
            ) as Array<MtsFeatureRecord>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getValidationMtsFeatures
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getValidationMtsFeaturesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<MtsFeatureRecord> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<MtsFeatureRecord> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<MtsFeatureRecord>", ""
            ) as Array<MtsFeatureRecord>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValidationsErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValidationsErrorResponse", ""
            ) as ValidationsErrorResponse;
            throw new ApiException<ValidationsErrorResponse>(response.httpStatusCode, "Database or processing error.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<MtsFeatureRecord> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<MtsFeatureRecord>", ""
            ) as Array<MtsFeatureRecord>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getValidationMtsFeaturesByGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getValidationMtsFeaturesByGroupWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<MtsFeatureRecord> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<MtsFeatureRecord> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<MtsFeatureRecord>", ""
            ) as Array<MtsFeatureRecord>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValidationsErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValidationsErrorResponse", ""
            ) as ValidationsErrorResponse;
            throw new ApiException<ValidationsErrorResponse>(response.httpStatusCode, "Invalid feature group name, database error or processing error.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<MtsFeatureRecord> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<MtsFeatureRecord>", ""
            ) as Array<MtsFeatureRecord>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getValidationMtsTemplateByModule
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getValidationMtsTemplateByModuleWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<MtsTemplateRecord> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<MtsTemplateRecord> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<MtsTemplateRecord>", ""
            ) as Array<MtsTemplateRecord>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValidationsErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValidationsErrorResponse", ""
            ) as ValidationsErrorResponse;
            throw new ApiException<ValidationsErrorResponse>(response.httpStatusCode, "Invalid template or module name, database error or processing error.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<MtsTemplateRecord> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<MtsTemplateRecord>", ""
            ) as Array<MtsTemplateRecord>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getValidationMtsTemplateByName
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getValidationMtsTemplateByNameWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<MtsTemplateRecord> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<MtsTemplateRecord> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<MtsTemplateRecord>", ""
            ) as Array<MtsTemplateRecord>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValidationsErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValidationsErrorResponse", ""
            ) as ValidationsErrorResponse;
            throw new ApiException<ValidationsErrorResponse>(response.httpStatusCode, "Invalid template name, database error or processing error.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<MtsTemplateRecord> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<MtsTemplateRecord>", ""
            ) as Array<MtsTemplateRecord>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getValidationMtsTemplateBySubsection
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getValidationMtsTemplateBySubsectionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<MtsTemplateRecord> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<MtsTemplateRecord> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<MtsTemplateRecord>", ""
            ) as Array<MtsTemplateRecord>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValidationsErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValidationsErrorResponse", ""
            ) as ValidationsErrorResponse;
            throw new ApiException<ValidationsErrorResponse>(response.httpStatusCode, "Invalid template, module or subsection name, database error or processing error.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<MtsTemplateRecord> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<MtsTemplateRecord>", ""
            ) as Array<MtsTemplateRecord>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getValidationMtsTemplates
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getValidationMtsTemplatesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<MtsTemplateRecord> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<MtsTemplateRecord> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<MtsTemplateRecord>", ""
            ) as Array<MtsTemplateRecord>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValidationsErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValidationsErrorResponse", ""
            ) as ValidationsErrorResponse;
            throw new ApiException<ValidationsErrorResponse>(response.httpStatusCode, "Database or processing error.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<MtsTemplateRecord> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<MtsTemplateRecord>", ""
            ) as Array<MtsTemplateRecord>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to searchValidationMdsFields
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async searchValidationMdsFieldsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MdsFieldSearchResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MdsFieldSearchResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MdsFieldSearchResponse", ""
            ) as MdsFieldSearchResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValidationsErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValidationsErrorResponse", ""
            ) as ValidationsErrorResponse;
            throw new ApiException<ValidationsErrorResponse>(response.httpStatusCode, "Database or processing error.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MdsFieldSearchResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MdsFieldSearchResponse", ""
            ) as MdsFieldSearchResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to validateLookupValue
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async validateLookupValueWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LookupValidationResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LookupValidationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LookupValidationResponse", ""
            ) as LookupValidationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValidationsErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValidationsErrorResponse", ""
            ) as ValidationsErrorResponse;
            throw new ApiException<ValidationsErrorResponse>(response.httpStatusCode, "Invalid user input, invalid lookup field name or database error.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LookupValidationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LookupValidationResponse", ""
            ) as LookupValidationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
