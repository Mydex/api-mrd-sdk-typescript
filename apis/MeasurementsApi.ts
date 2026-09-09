// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AuthErrorResponse } from '../models/AuthErrorResponse';
import { MeasurementActivityTypeResult } from '../models/MeasurementActivityTypeResult';
import { MeasurementActivityTypesResult } from '../models/MeasurementActivityTypesResult';
import { MeasurementBloodPressureMeasurementResult } from '../models/MeasurementBloodPressureMeasurementResult';
import { MeasurementBloodPressureMeasurementsResult } from '../models/MeasurementBloodPressureMeasurementsResult';
import { MeasurementBloodSpecimenSourceResult } from '../models/MeasurementBloodSpecimenSourceResult';
import { MeasurementBloodSpecimenSourcesResult } from '../models/MeasurementBloodSpecimenSourcesResult';
import { MeasurementBodyPositionResult } from '../models/MeasurementBodyPositionResult';
import { MeasurementBodyPositionsResult } from '../models/MeasurementBodyPositionsResult';
import { MeasurementBodyTemperatureLocationResult } from '../models/MeasurementBodyTemperatureLocationResult';
import { MeasurementBodyTemperatureLocationsResult } from '../models/MeasurementBodyTemperatureLocationsResult';
import { MeasurementCervicalDilationResult } from '../models/MeasurementCervicalDilationResult';
import { MeasurementCervicalDilationsResult } from '../models/MeasurementCervicalDilationsResult';
import { MeasurementCervicalFirmnessResult } from '../models/MeasurementCervicalFirmnessResult';
import { MeasurementCervicalFirmnessValuesResult } from '../models/MeasurementCervicalFirmnessValuesResult';
import { MeasurementCervicalMucusAmountResult } from '../models/MeasurementCervicalMucusAmountResult';
import { MeasurementCervicalMucusAmountsResult } from '../models/MeasurementCervicalMucusAmountsResult';
import { MeasurementCervicalMucusTextureResult } from '../models/MeasurementCervicalMucusTextureResult';
import { MeasurementCervicalMucusTexturesResult } from '../models/MeasurementCervicalMucusTexturesResult';
import { MeasurementCervicalPositionResult } from '../models/MeasurementCervicalPositionResult';
import { MeasurementCervicalPositionsResult } from '../models/MeasurementCervicalPositionsResult';
import { MeasurementExerciseTypeResult } from '../models/MeasurementExerciseTypeResult';
import { MeasurementExerciseTypesResult } from '../models/MeasurementExerciseTypesResult';
import { MeasurementGroupResult } from '../models/MeasurementGroupResult';
import { MeasurementGroupsResult } from '../models/MeasurementGroupsResult';
import { MeasurementMealTypeResult } from '../models/MeasurementMealTypeResult';
import { MeasurementMealTypesResult } from '../models/MeasurementMealTypesResult';
import { MeasurementResistanceTypeResult } from '../models/MeasurementResistanceTypeResult';
import { MeasurementResistanceTypesResult } from '../models/MeasurementResistanceTypesResult';
import { MeasurementSleepSegmentTypeResult } from '../models/MeasurementSleepSegmentTypeResult';
import { MeasurementSleepSegmentTypesResult } from '../models/MeasurementSleepSegmentTypesResult';
import { MeasurementTemporalRelationToMealResult } from '../models/MeasurementTemporalRelationToMealResult';
import { MeasurementTemporalRelationToSleepResult } from '../models/MeasurementTemporalRelationToSleepResult';
import { MeasurementTemporalRelationsToMealResult } from '../models/MeasurementTemporalRelationsToMealResult';
import { MeasurementTemporalRelationsToSleepResult } from '../models/MeasurementTemporalRelationsToSleepResult';
import { MeasurementTypeResult } from '../models/MeasurementTypeResult';
import { MeasurementTypesResult } from '../models/MeasurementTypesResult';
import { MeasurementUnitResult } from '../models/MeasurementUnitResult';
import { MeasurementUnitsResult } from '../models/MeasurementUnitsResult';
import { MeasurementsDatabaseErrorResponse } from '../models/MeasurementsDatabaseErrorResponse';

/**
 * no description
 */
export class MeasurementsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Returns the activity type matching the supplied activity_type_id.
     * Retrieve an activity type by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public async getActivityType(xMrdScopes: 'measurements', id: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("MeasurementsApi", "getActivityType", "xMrdScopes");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("MeasurementsApi", "getActivityType", "id");
        }


        // Path Params
        const localVarPath = '/measurements/activity-type/{id}'
            .replace('{id}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'measurements'", ""));


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
     * Returns activity types including the database record ID, activity type ID and description.
     * Retrieve all activity types
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public async getActivityTypes(xMrdScopes: 'measurements', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("MeasurementsApi", "getActivityTypes", "xMrdScopes");
        }


        // Path Params
        const localVarPath = '/measurements/activity-type';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'measurements'", ""));


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
     * Returns the blood pressure measurement type matching the supplied blood_pressure_measurement_id.
     * Retrieve a blood pressure measurement type by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public async getBloodPressureMeasurement(xMrdScopes: 'measurements', id: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("MeasurementsApi", "getBloodPressureMeasurement", "xMrdScopes");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("MeasurementsApi", "getBloodPressureMeasurement", "id");
        }


        // Path Params
        const localVarPath = '/measurements/blood-pressure-measurement/{id}'
            .replace('{id}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'measurements'", ""));


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
     * Returns blood pressure measurement types including the database record ID, blood pressure measurement ID and description.
     * Retrieve all blood pressure measurement types
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public async getBloodPressureMeasurements(xMrdScopes: 'measurements', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("MeasurementsApi", "getBloodPressureMeasurements", "xMrdScopes");
        }


        // Path Params
        const localVarPath = '/measurements/blood-pressure-measurement';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'measurements'", ""));


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
     * Returns the blood specimen source matching the supplied blood_specimen_source_id.
     * Retrieve a blood specimen source by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public async getBloodSpecimenSource(xMrdScopes: 'measurements', id: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("MeasurementsApi", "getBloodSpecimenSource", "xMrdScopes");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("MeasurementsApi", "getBloodSpecimenSource", "id");
        }


        // Path Params
        const localVarPath = '/measurements/blood-specimen-source/{id}'
            .replace('{id}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'measurements'", ""));


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
     * Returns blood specimen sources including the database record ID, blood specimen source ID and description.
     * Retrieve all blood specimen sources
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public async getBloodSpecimenSources(xMrdScopes: 'measurements', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("MeasurementsApi", "getBloodSpecimenSources", "xMrdScopes");
        }


        // Path Params
        const localVarPath = '/measurements/blood-specimen-source';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'measurements'", ""));


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
     * Returns the body position matching the supplied body_position_id.
     * Retrieve a body position by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public async getBodyPosition(xMrdScopes: 'measurements', id: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("MeasurementsApi", "getBodyPosition", "xMrdScopes");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("MeasurementsApi", "getBodyPosition", "id");
        }


        // Path Params
        const localVarPath = '/measurements/body-position/{id}'
            .replace('{id}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'measurements'", ""));


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
     * Returns body positions including the database record ID, body position ID and description.
     * Retrieve all body positions
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public async getBodyPositions(xMrdScopes: 'measurements', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("MeasurementsApi", "getBodyPositions", "xMrdScopes");
        }


        // Path Params
        const localVarPath = '/measurements/body-position';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'measurements'", ""));


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
     * Returns the body temperature location matching the supplied body_temperature_location_id.
     * Retrieve a body temperature location by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public async getBodyTemperatureLocation(xMrdScopes: 'measurements', id: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("MeasurementsApi", "getBodyTemperatureLocation", "xMrdScopes");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("MeasurementsApi", "getBodyTemperatureLocation", "id");
        }


        // Path Params
        const localVarPath = '/measurements/body-temperature-location/{id}'
            .replace('{id}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'measurements'", ""));


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
     * Returns body temperature locations including the database record ID, body temperature location ID and description.
     * Retrieve all body temperature locations
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public async getBodyTemperatureLocations(xMrdScopes: 'measurements', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("MeasurementsApi", "getBodyTemperatureLocations", "xMrdScopes");
        }


        // Path Params
        const localVarPath = '/measurements/body-temperature-location';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'measurements'", ""));


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
     * Returns the cervical dilation matching the supplied cervical_dilation_id.
     * Retrieve a cervical dilation by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public async getCervicalDilation(xMrdScopes: 'measurements', id: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("MeasurementsApi", "getCervicalDilation", "xMrdScopes");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("MeasurementsApi", "getCervicalDilation", "id");
        }


        // Path Params
        const localVarPath = '/measurements/cervical-dilation/{id}'
            .replace('{id}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'measurements'", ""));


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
     * Returns cervical dilations including the database record ID, cervical dilation ID and description.
     * Retrieve all cervical dilations
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public async getCervicalDilations(xMrdScopes: 'measurements', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("MeasurementsApi", "getCervicalDilations", "xMrdScopes");
        }


        // Path Params
        const localVarPath = '/measurements/cervical-dilation';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'measurements'", ""));


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
     * Returns the cervical firmness value matching the supplied cervical_firmness_id.
     * Retrieve a cervical firmness value by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public async getCervicalFirmness(xMrdScopes: 'measurements', id: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("MeasurementsApi", "getCervicalFirmness", "xMrdScopes");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("MeasurementsApi", "getCervicalFirmness", "id");
        }


        // Path Params
        const localVarPath = '/measurements/cervical-firmness/{id}'
            .replace('{id}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'measurements'", ""));


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
     * Returns cervical firmness values including the database record ID, cervical firmness ID and description.
     * Retrieve all cervical firmness values
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public async getCervicalFirmnessValues(xMrdScopes: 'measurements', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("MeasurementsApi", "getCervicalFirmnessValues", "xMrdScopes");
        }


        // Path Params
        const localVarPath = '/measurements/cervical-firmness';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'measurements'", ""));


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
     * Returns the cervical mucus amount matching the supplied cervical_mucus_amount_id.
     * Retrieve a cervical mucus amount by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public async getCervicalMucusAmount(xMrdScopes: 'measurements', id: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("MeasurementsApi", "getCervicalMucusAmount", "xMrdScopes");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("MeasurementsApi", "getCervicalMucusAmount", "id");
        }


        // Path Params
        const localVarPath = '/measurements/cervical-mucus-amount/{id}'
            .replace('{id}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'measurements'", ""));


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
     * Returns cervical mucus amounts including the database record ID, cervical mucus amount ID and description.
     * Retrieve all cervical mucus amounts
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public async getCervicalMucusAmounts(xMrdScopes: 'measurements', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("MeasurementsApi", "getCervicalMucusAmounts", "xMrdScopes");
        }


        // Path Params
        const localVarPath = '/measurements/cervical-mucus-amount';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'measurements'", ""));


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
     * Returns the cervical mucus texture matching the supplied cervical_mucus_texture_id.
     * Retrieve a cervical mucus texture by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public async getCervicalMucusTexture(xMrdScopes: 'measurements', id: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("MeasurementsApi", "getCervicalMucusTexture", "xMrdScopes");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("MeasurementsApi", "getCervicalMucusTexture", "id");
        }


        // Path Params
        const localVarPath = '/measurements/cervical-mucus-texture/{id}'
            .replace('{id}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'measurements'", ""));


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
     * Returns cervical mucus textures including the database record ID, cervical mucus texture ID and description.
     * Retrieve all cervical mucus textures
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public async getCervicalMucusTextures(xMrdScopes: 'measurements', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("MeasurementsApi", "getCervicalMucusTextures", "xMrdScopes");
        }


        // Path Params
        const localVarPath = '/measurements/cervical-mucus-texture';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'measurements'", ""));


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
     * Returns the cervical position matching the supplied cervical_position_id.
     * Retrieve a cervical position by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public async getCervicalPosition(xMrdScopes: 'measurements', id: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("MeasurementsApi", "getCervicalPosition", "xMrdScopes");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("MeasurementsApi", "getCervicalPosition", "id");
        }


        // Path Params
        const localVarPath = '/measurements/cervical-position/{id}'
            .replace('{id}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'measurements'", ""));


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
     * Returns cervical positions including the database record ID, cervical position ID and description.
     * Retrieve all cervical positions
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public async getCervicalPositions(xMrdScopes: 'measurements', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("MeasurementsApi", "getCervicalPositions", "xMrdScopes");
        }


        // Path Params
        const localVarPath = '/measurements/cervical-position';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'measurements'", ""));


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
     * Returns the exercise type matching the supplied exercise_type_name.
     * Retrieve an exercise type by name
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param exerciseTypeName Exercise type name used to retrieve a specific exercise-type record.
     */
    public async getExerciseTypeByName(xMrdScopes: 'measurements', exerciseTypeName: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("MeasurementsApi", "getExerciseTypeByName", "xMrdScopes");
        }


        // verify required parameter 'exerciseTypeName' is not null or undefined
        if (exerciseTypeName === null || exerciseTypeName === undefined) {
            throw new RequiredError("MeasurementsApi", "getExerciseTypeByName", "exerciseTypeName");
        }


        // Path Params
        const localVarPath = '/measurements/exercise-type/{exercise_type_name}'
            .replace('{exercise_type_name}', encodeURIComponent(String(exerciseTypeName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'measurements'", ""));


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
     * Returns exercise types including the database record ID, exercise type name and description.
     * Retrieve all exercise types
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public async getExerciseTypes(xMrdScopes: 'measurements', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("MeasurementsApi", "getExerciseTypes", "xMrdScopes");
        }


        // Path Params
        const localVarPath = '/measurements/exercise-type';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'measurements'", ""));


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
     * Returns the meal type matching the supplied meal_type_id.
     * Retrieve a meal type by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public async getMealType(xMrdScopes: 'measurements', id: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("MeasurementsApi", "getMealType", "xMrdScopes");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("MeasurementsApi", "getMealType", "id");
        }


        // Path Params
        const localVarPath = '/measurements/meal-type/{id}'
            .replace('{id}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'measurements'", ""));


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
     * Returns meal types including the database record ID, meal type ID and description.
     * Retrieve all meal types
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public async getMealTypes(xMrdScopes: 'measurements', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("MeasurementsApi", "getMealTypes", "xMrdScopes");
        }


        // Path Params
        const localVarPath = '/measurements/meal-type';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'measurements'", ""));


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
     * Returns the measurement group matching the supplied database record ID.
     * Retrieve a measurement group by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public async getMeasurementGroup(xMrdScopes: 'measurements', id: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("MeasurementsApi", "getMeasurementGroup", "xMrdScopes");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("MeasurementsApi", "getMeasurementGroup", "id");
        }


        // Path Params
        const localVarPath = '/measurements/groups/{id}'
            .replace('{id}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'measurements'", ""));


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
     * Returns the available measurement groups and their definitions.
     * Retrieve all measurement groups
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public async getMeasurementGroups(xMrdScopes: 'measurements', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("MeasurementsApi", "getMeasurementGroups", "xMrdScopes");
        }


        // Path Params
        const localVarPath = '/measurements/groups';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'measurements'", ""));


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
     * Returns the measurement definition matching the supplied measurement ID.
     * Retrieve a measurement type by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public async getMeasurementType(xMrdScopes: 'measurements', id: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("MeasurementsApi", "getMeasurementType", "xMrdScopes");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("MeasurementsApi", "getMeasurementType", "id");
        }


        // Path Params
        const localVarPath = '/measurements/types/{id}'
            .replace('{id}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'measurements'", ""));


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
     * Returns measurement definitions including the measurement name, group and unit.
     * Retrieve all measurement types
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public async getMeasurementTypes(xMrdScopes: 'measurements', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("MeasurementsApi", "getMeasurementTypes", "xMrdScopes");
        }


        // Path Params
        const localVarPath = '/measurements/types';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'measurements'", ""));


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
     * Returns the unit of measure matching the supplied database record ID.
     * Retrieve a unit of measure by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public async getMeasurementUnit(xMrdScopes: 'measurements', id: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("MeasurementsApi", "getMeasurementUnit", "xMrdScopes");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("MeasurementsApi", "getMeasurementUnit", "id");
        }


        // Path Params
        const localVarPath = '/measurements/units/{id}'
            .replace('{id}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'measurements'", ""));


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
     * Returns available measurement units and their definitions.
     * Retrieve all units of measure
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public async getMeasurementUnits(xMrdScopes: 'measurements', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("MeasurementsApi", "getMeasurementUnits", "xMrdScopes");
        }


        // Path Params
        const localVarPath = '/measurements/units';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'measurements'", ""));


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
     * Returns the resistance type matching the supplied resistance_type_id.
     * Retrieve a resistance type by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public async getResistanceType(xMrdScopes: 'measurements', id: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("MeasurementsApi", "getResistanceType", "xMrdScopes");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("MeasurementsApi", "getResistanceType", "id");
        }


        // Path Params
        const localVarPath = '/measurements/resistance-type/{id}'
            .replace('{id}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'measurements'", ""));


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
     * Returns resistance types including the database record ID, resistance type ID and description.
     * Retrieve all resistance types
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public async getResistanceTypes(xMrdScopes: 'measurements', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("MeasurementsApi", "getResistanceTypes", "xMrdScopes");
        }


        // Path Params
        const localVarPath = '/measurements/resistance-type';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'measurements'", ""));


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
     * Returns the sleep segment type matching the supplied sleep_segment_type_id.
     * Retrieve a sleep segment type by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public async getSleepSegmentType(xMrdScopes: 'measurements', id: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("MeasurementsApi", "getSleepSegmentType", "xMrdScopes");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("MeasurementsApi", "getSleepSegmentType", "id");
        }


        // Path Params
        const localVarPath = '/measurements/sleep-segment-type/{id}'
            .replace('{id}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'measurements'", ""));


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
     * Returns sleep segment types including the database record ID, sleep segment type ID and description.
     * Retrieve all sleep segment types
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public async getSleepSegmentTypes(xMrdScopes: 'measurements', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("MeasurementsApi", "getSleepSegmentTypes", "xMrdScopes");
        }


        // Path Params
        const localVarPath = '/measurements/sleep-segment-type';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'measurements'", ""));


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
     * Returns the temporal relation to meal matching the supplied temporal_relation_to_meal_id.
     * Retrieve a temporal relation to meals by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public async getTemporalRelationToMeal(xMrdScopes: 'measurements', id: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("MeasurementsApi", "getTemporalRelationToMeal", "xMrdScopes");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("MeasurementsApi", "getTemporalRelationToMeal", "id");
        }


        // Path Params
        const localVarPath = '/measurements/temporal-relation-to-meal/{id}'
            .replace('{id}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'measurements'", ""));


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
     * Returns the temporal relation to sleep matching the supplied temporal_relation_to_sleep_id.
     * Retrieve a temporal relation to sleep by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public async getTemporalRelationToSleep(xMrdScopes: 'measurements', id: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("MeasurementsApi", "getTemporalRelationToSleep", "xMrdScopes");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("MeasurementsApi", "getTemporalRelationToSleep", "id");
        }


        // Path Params
        const localVarPath = '/measurements/temporal-relation-to-sleep/{id}'
            .replace('{id}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'measurements'", ""));


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
     * Returns temporal relations to meals including the database record ID, relation ID and description.
     * Retrieve all temporal relations to meals
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public async getTemporalRelationsToMeal(xMrdScopes: 'measurements', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("MeasurementsApi", "getTemporalRelationsToMeal", "xMrdScopes");
        }


        // Path Params
        const localVarPath = '/measurements/temporal-relation-to-meal';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'measurements'", ""));


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
     * Returns temporal relations to sleep including the database record ID, relation ID and description.
     * Retrieve all temporal relations to sleep
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public async getTemporalRelationsToSleep(xMrdScopes: 'measurements', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xMrdScopes' is not null or undefined
        if (xMrdScopes === null || xMrdScopes === undefined) {
            throw new RequiredError("MeasurementsApi", "getTemporalRelationsToSleep", "xMrdScopes");
        }


        // Path Params
        const localVarPath = '/measurements/temporal-relation-to-sleep';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Mrd-Scopes", ObjectSerializer.serialize(xMrdScopes, "'measurements'", ""));


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

export class MeasurementsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getActivityType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getActivityTypeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MeasurementActivityTypeResult >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MeasurementActivityTypeResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementActivityTypeResult", ""
            ) as MeasurementActivityTypeResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MeasurementsDatabaseErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementsDatabaseErrorResponse", ""
            ) as MeasurementsDatabaseErrorResponse;
            throw new ApiException<MeasurementsDatabaseErrorResponse>(response.httpStatusCode, "Database error.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "Unauthorized.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MeasurementActivityTypeResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementActivityTypeResult", ""
            ) as MeasurementActivityTypeResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getActivityTypes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getActivityTypesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MeasurementActivityTypesResult >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MeasurementActivityTypesResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementActivityTypesResult", ""
            ) as MeasurementActivityTypesResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MeasurementsDatabaseErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementsDatabaseErrorResponse", ""
            ) as MeasurementsDatabaseErrorResponse;
            throw new ApiException<MeasurementsDatabaseErrorResponse>(response.httpStatusCode, "Database error.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "Unauthorized.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MeasurementActivityTypesResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementActivityTypesResult", ""
            ) as MeasurementActivityTypesResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBloodPressureMeasurement
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBloodPressureMeasurementWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MeasurementBloodPressureMeasurementResult >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MeasurementBloodPressureMeasurementResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementBloodPressureMeasurementResult", ""
            ) as MeasurementBloodPressureMeasurementResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MeasurementsDatabaseErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementsDatabaseErrorResponse", ""
            ) as MeasurementsDatabaseErrorResponse;
            throw new ApiException<MeasurementsDatabaseErrorResponse>(response.httpStatusCode, "Database error.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "Unauthorized.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MeasurementBloodPressureMeasurementResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementBloodPressureMeasurementResult", ""
            ) as MeasurementBloodPressureMeasurementResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBloodPressureMeasurements
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBloodPressureMeasurementsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MeasurementBloodPressureMeasurementsResult >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MeasurementBloodPressureMeasurementsResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementBloodPressureMeasurementsResult", ""
            ) as MeasurementBloodPressureMeasurementsResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MeasurementsDatabaseErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementsDatabaseErrorResponse", ""
            ) as MeasurementsDatabaseErrorResponse;
            throw new ApiException<MeasurementsDatabaseErrorResponse>(response.httpStatusCode, "Database error.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "Unauthorized.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MeasurementBloodPressureMeasurementsResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementBloodPressureMeasurementsResult", ""
            ) as MeasurementBloodPressureMeasurementsResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBloodSpecimenSource
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBloodSpecimenSourceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MeasurementBloodSpecimenSourceResult >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MeasurementBloodSpecimenSourceResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementBloodSpecimenSourceResult", ""
            ) as MeasurementBloodSpecimenSourceResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MeasurementsDatabaseErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementsDatabaseErrorResponse", ""
            ) as MeasurementsDatabaseErrorResponse;
            throw new ApiException<MeasurementsDatabaseErrorResponse>(response.httpStatusCode, "Database error.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "Unauthorized.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MeasurementBloodSpecimenSourceResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementBloodSpecimenSourceResult", ""
            ) as MeasurementBloodSpecimenSourceResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBloodSpecimenSources
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBloodSpecimenSourcesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MeasurementBloodSpecimenSourcesResult >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MeasurementBloodSpecimenSourcesResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementBloodSpecimenSourcesResult", ""
            ) as MeasurementBloodSpecimenSourcesResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MeasurementsDatabaseErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementsDatabaseErrorResponse", ""
            ) as MeasurementsDatabaseErrorResponse;
            throw new ApiException<MeasurementsDatabaseErrorResponse>(response.httpStatusCode, "Database error.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "Unauthorized.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MeasurementBloodSpecimenSourcesResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementBloodSpecimenSourcesResult", ""
            ) as MeasurementBloodSpecimenSourcesResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBodyPosition
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBodyPositionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MeasurementBodyPositionResult >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MeasurementBodyPositionResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementBodyPositionResult", ""
            ) as MeasurementBodyPositionResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MeasurementsDatabaseErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementsDatabaseErrorResponse", ""
            ) as MeasurementsDatabaseErrorResponse;
            throw new ApiException<MeasurementsDatabaseErrorResponse>(response.httpStatusCode, "Database error.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "Unauthorized.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MeasurementBodyPositionResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementBodyPositionResult", ""
            ) as MeasurementBodyPositionResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBodyPositions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBodyPositionsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MeasurementBodyPositionsResult >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MeasurementBodyPositionsResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementBodyPositionsResult", ""
            ) as MeasurementBodyPositionsResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MeasurementsDatabaseErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementsDatabaseErrorResponse", ""
            ) as MeasurementsDatabaseErrorResponse;
            throw new ApiException<MeasurementsDatabaseErrorResponse>(response.httpStatusCode, "Database error.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "Unauthorized.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MeasurementBodyPositionsResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementBodyPositionsResult", ""
            ) as MeasurementBodyPositionsResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBodyTemperatureLocation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBodyTemperatureLocationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MeasurementBodyTemperatureLocationResult >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MeasurementBodyTemperatureLocationResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementBodyTemperatureLocationResult", ""
            ) as MeasurementBodyTemperatureLocationResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MeasurementsDatabaseErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementsDatabaseErrorResponse", ""
            ) as MeasurementsDatabaseErrorResponse;
            throw new ApiException<MeasurementsDatabaseErrorResponse>(response.httpStatusCode, "Database error.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "Unauthorized.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MeasurementBodyTemperatureLocationResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementBodyTemperatureLocationResult", ""
            ) as MeasurementBodyTemperatureLocationResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBodyTemperatureLocations
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBodyTemperatureLocationsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MeasurementBodyTemperatureLocationsResult >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MeasurementBodyTemperatureLocationsResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementBodyTemperatureLocationsResult", ""
            ) as MeasurementBodyTemperatureLocationsResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MeasurementsDatabaseErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementsDatabaseErrorResponse", ""
            ) as MeasurementsDatabaseErrorResponse;
            throw new ApiException<MeasurementsDatabaseErrorResponse>(response.httpStatusCode, "Database error.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "Unauthorized.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MeasurementBodyTemperatureLocationsResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementBodyTemperatureLocationsResult", ""
            ) as MeasurementBodyTemperatureLocationsResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCervicalDilation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCervicalDilationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MeasurementCervicalDilationResult >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MeasurementCervicalDilationResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementCervicalDilationResult", ""
            ) as MeasurementCervicalDilationResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MeasurementsDatabaseErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementsDatabaseErrorResponse", ""
            ) as MeasurementsDatabaseErrorResponse;
            throw new ApiException<MeasurementsDatabaseErrorResponse>(response.httpStatusCode, "Database error.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "Unauthorized.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MeasurementCervicalDilationResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementCervicalDilationResult", ""
            ) as MeasurementCervicalDilationResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCervicalDilations
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCervicalDilationsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MeasurementCervicalDilationsResult >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MeasurementCervicalDilationsResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementCervicalDilationsResult", ""
            ) as MeasurementCervicalDilationsResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MeasurementsDatabaseErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementsDatabaseErrorResponse", ""
            ) as MeasurementsDatabaseErrorResponse;
            throw new ApiException<MeasurementsDatabaseErrorResponse>(response.httpStatusCode, "Database error.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "Unauthorized.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MeasurementCervicalDilationsResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementCervicalDilationsResult", ""
            ) as MeasurementCervicalDilationsResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCervicalFirmness
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCervicalFirmnessWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MeasurementCervicalFirmnessResult >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MeasurementCervicalFirmnessResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementCervicalFirmnessResult", ""
            ) as MeasurementCervicalFirmnessResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MeasurementsDatabaseErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementsDatabaseErrorResponse", ""
            ) as MeasurementsDatabaseErrorResponse;
            throw new ApiException<MeasurementsDatabaseErrorResponse>(response.httpStatusCode, "Database error.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "Unauthorized.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MeasurementCervicalFirmnessResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementCervicalFirmnessResult", ""
            ) as MeasurementCervicalFirmnessResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCervicalFirmnessValues
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCervicalFirmnessValuesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MeasurementCervicalFirmnessValuesResult >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MeasurementCervicalFirmnessValuesResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementCervicalFirmnessValuesResult", ""
            ) as MeasurementCervicalFirmnessValuesResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MeasurementsDatabaseErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementsDatabaseErrorResponse", ""
            ) as MeasurementsDatabaseErrorResponse;
            throw new ApiException<MeasurementsDatabaseErrorResponse>(response.httpStatusCode, "Database error.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "Unauthorized.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MeasurementCervicalFirmnessValuesResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementCervicalFirmnessValuesResult", ""
            ) as MeasurementCervicalFirmnessValuesResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCervicalMucusAmount
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCervicalMucusAmountWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MeasurementCervicalMucusAmountResult >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MeasurementCervicalMucusAmountResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementCervicalMucusAmountResult", ""
            ) as MeasurementCervicalMucusAmountResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MeasurementsDatabaseErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementsDatabaseErrorResponse", ""
            ) as MeasurementsDatabaseErrorResponse;
            throw new ApiException<MeasurementsDatabaseErrorResponse>(response.httpStatusCode, "Database error.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "Unauthorized.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MeasurementCervicalMucusAmountResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementCervicalMucusAmountResult", ""
            ) as MeasurementCervicalMucusAmountResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCervicalMucusAmounts
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCervicalMucusAmountsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MeasurementCervicalMucusAmountsResult >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MeasurementCervicalMucusAmountsResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementCervicalMucusAmountsResult", ""
            ) as MeasurementCervicalMucusAmountsResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MeasurementsDatabaseErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementsDatabaseErrorResponse", ""
            ) as MeasurementsDatabaseErrorResponse;
            throw new ApiException<MeasurementsDatabaseErrorResponse>(response.httpStatusCode, "Database error.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "Unauthorized.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MeasurementCervicalMucusAmountsResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementCervicalMucusAmountsResult", ""
            ) as MeasurementCervicalMucusAmountsResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCervicalMucusTexture
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCervicalMucusTextureWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MeasurementCervicalMucusTextureResult >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MeasurementCervicalMucusTextureResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementCervicalMucusTextureResult", ""
            ) as MeasurementCervicalMucusTextureResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MeasurementsDatabaseErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementsDatabaseErrorResponse", ""
            ) as MeasurementsDatabaseErrorResponse;
            throw new ApiException<MeasurementsDatabaseErrorResponse>(response.httpStatusCode, "Database error.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "Unauthorized.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MeasurementCervicalMucusTextureResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementCervicalMucusTextureResult", ""
            ) as MeasurementCervicalMucusTextureResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCervicalMucusTextures
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCervicalMucusTexturesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MeasurementCervicalMucusTexturesResult >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MeasurementCervicalMucusTexturesResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementCervicalMucusTexturesResult", ""
            ) as MeasurementCervicalMucusTexturesResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MeasurementsDatabaseErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementsDatabaseErrorResponse", ""
            ) as MeasurementsDatabaseErrorResponse;
            throw new ApiException<MeasurementsDatabaseErrorResponse>(response.httpStatusCode, "Database error.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "Unauthorized.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MeasurementCervicalMucusTexturesResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementCervicalMucusTexturesResult", ""
            ) as MeasurementCervicalMucusTexturesResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCervicalPosition
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCervicalPositionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MeasurementCervicalPositionResult >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MeasurementCervicalPositionResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementCervicalPositionResult", ""
            ) as MeasurementCervicalPositionResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MeasurementsDatabaseErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementsDatabaseErrorResponse", ""
            ) as MeasurementsDatabaseErrorResponse;
            throw new ApiException<MeasurementsDatabaseErrorResponse>(response.httpStatusCode, "Database error.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "Unauthorized.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MeasurementCervicalPositionResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementCervicalPositionResult", ""
            ) as MeasurementCervicalPositionResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCervicalPositions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCervicalPositionsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MeasurementCervicalPositionsResult >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MeasurementCervicalPositionsResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementCervicalPositionsResult", ""
            ) as MeasurementCervicalPositionsResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MeasurementsDatabaseErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementsDatabaseErrorResponse", ""
            ) as MeasurementsDatabaseErrorResponse;
            throw new ApiException<MeasurementsDatabaseErrorResponse>(response.httpStatusCode, "Database error.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "Unauthorized.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MeasurementCervicalPositionsResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementCervicalPositionsResult", ""
            ) as MeasurementCervicalPositionsResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getExerciseTypeByName
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getExerciseTypeByNameWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MeasurementExerciseTypeResult >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MeasurementExerciseTypeResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementExerciseTypeResult", ""
            ) as MeasurementExerciseTypeResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MeasurementsDatabaseErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementsDatabaseErrorResponse", ""
            ) as MeasurementsDatabaseErrorResponse;
            throw new ApiException<MeasurementsDatabaseErrorResponse>(response.httpStatusCode, "Database error.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "Unauthorized.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MeasurementExerciseTypeResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementExerciseTypeResult", ""
            ) as MeasurementExerciseTypeResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getExerciseTypes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getExerciseTypesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MeasurementExerciseTypesResult >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MeasurementExerciseTypesResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementExerciseTypesResult", ""
            ) as MeasurementExerciseTypesResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MeasurementsDatabaseErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementsDatabaseErrorResponse", ""
            ) as MeasurementsDatabaseErrorResponse;
            throw new ApiException<MeasurementsDatabaseErrorResponse>(response.httpStatusCode, "Database error.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "Unauthorized.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MeasurementExerciseTypesResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementExerciseTypesResult", ""
            ) as MeasurementExerciseTypesResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMealType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMealTypeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MeasurementMealTypeResult >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MeasurementMealTypeResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementMealTypeResult", ""
            ) as MeasurementMealTypeResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MeasurementsDatabaseErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementsDatabaseErrorResponse", ""
            ) as MeasurementsDatabaseErrorResponse;
            throw new ApiException<MeasurementsDatabaseErrorResponse>(response.httpStatusCode, "Database error.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "Unauthorized.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MeasurementMealTypeResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementMealTypeResult", ""
            ) as MeasurementMealTypeResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMealTypes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMealTypesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MeasurementMealTypesResult >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MeasurementMealTypesResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementMealTypesResult", ""
            ) as MeasurementMealTypesResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MeasurementsDatabaseErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementsDatabaseErrorResponse", ""
            ) as MeasurementsDatabaseErrorResponse;
            throw new ApiException<MeasurementsDatabaseErrorResponse>(response.httpStatusCode, "Database error.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "Unauthorized.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MeasurementMealTypesResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementMealTypesResult", ""
            ) as MeasurementMealTypesResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMeasurementGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMeasurementGroupWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MeasurementGroupResult >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MeasurementGroupResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementGroupResult", ""
            ) as MeasurementGroupResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MeasurementsDatabaseErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementsDatabaseErrorResponse", ""
            ) as MeasurementsDatabaseErrorResponse;
            throw new ApiException<MeasurementsDatabaseErrorResponse>(response.httpStatusCode, "Database error.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "Unauthorized.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MeasurementGroupResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementGroupResult", ""
            ) as MeasurementGroupResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMeasurementGroups
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMeasurementGroupsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MeasurementGroupsResult >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MeasurementGroupsResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementGroupsResult", ""
            ) as MeasurementGroupsResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MeasurementsDatabaseErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementsDatabaseErrorResponse", ""
            ) as MeasurementsDatabaseErrorResponse;
            throw new ApiException<MeasurementsDatabaseErrorResponse>(response.httpStatusCode, "Database error.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "Unauthorized.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MeasurementGroupsResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementGroupsResult", ""
            ) as MeasurementGroupsResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMeasurementType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMeasurementTypeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MeasurementTypeResult >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MeasurementTypeResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementTypeResult", ""
            ) as MeasurementTypeResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MeasurementsDatabaseErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementsDatabaseErrorResponse", ""
            ) as MeasurementsDatabaseErrorResponse;
            throw new ApiException<MeasurementsDatabaseErrorResponse>(response.httpStatusCode, "Database error.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "Unauthorized.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MeasurementTypeResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementTypeResult", ""
            ) as MeasurementTypeResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMeasurementTypes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMeasurementTypesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MeasurementTypesResult >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MeasurementTypesResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementTypesResult", ""
            ) as MeasurementTypesResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MeasurementsDatabaseErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementsDatabaseErrorResponse", ""
            ) as MeasurementsDatabaseErrorResponse;
            throw new ApiException<MeasurementsDatabaseErrorResponse>(response.httpStatusCode, "Database error.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "Unauthorized.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MeasurementTypesResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementTypesResult", ""
            ) as MeasurementTypesResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMeasurementUnit
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMeasurementUnitWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MeasurementUnitResult >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MeasurementUnitResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementUnitResult", ""
            ) as MeasurementUnitResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MeasurementsDatabaseErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementsDatabaseErrorResponse", ""
            ) as MeasurementsDatabaseErrorResponse;
            throw new ApiException<MeasurementsDatabaseErrorResponse>(response.httpStatusCode, "Database error.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "Unauthorized.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MeasurementUnitResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementUnitResult", ""
            ) as MeasurementUnitResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMeasurementUnits
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMeasurementUnitsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MeasurementUnitsResult >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MeasurementUnitsResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementUnitsResult", ""
            ) as MeasurementUnitsResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MeasurementsDatabaseErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementsDatabaseErrorResponse", ""
            ) as MeasurementsDatabaseErrorResponse;
            throw new ApiException<MeasurementsDatabaseErrorResponse>(response.httpStatusCode, "Database error.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "Unauthorized.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MeasurementUnitsResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementUnitsResult", ""
            ) as MeasurementUnitsResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getResistanceType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getResistanceTypeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MeasurementResistanceTypeResult >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MeasurementResistanceTypeResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementResistanceTypeResult", ""
            ) as MeasurementResistanceTypeResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MeasurementsDatabaseErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementsDatabaseErrorResponse", ""
            ) as MeasurementsDatabaseErrorResponse;
            throw new ApiException<MeasurementsDatabaseErrorResponse>(response.httpStatusCode, "Database error.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "Unauthorized.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MeasurementResistanceTypeResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementResistanceTypeResult", ""
            ) as MeasurementResistanceTypeResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getResistanceTypes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getResistanceTypesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MeasurementResistanceTypesResult >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MeasurementResistanceTypesResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementResistanceTypesResult", ""
            ) as MeasurementResistanceTypesResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MeasurementsDatabaseErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementsDatabaseErrorResponse", ""
            ) as MeasurementsDatabaseErrorResponse;
            throw new ApiException<MeasurementsDatabaseErrorResponse>(response.httpStatusCode, "Database error.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "Unauthorized.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MeasurementResistanceTypesResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementResistanceTypesResult", ""
            ) as MeasurementResistanceTypesResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSleepSegmentType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSleepSegmentTypeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MeasurementSleepSegmentTypeResult >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MeasurementSleepSegmentTypeResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementSleepSegmentTypeResult", ""
            ) as MeasurementSleepSegmentTypeResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MeasurementsDatabaseErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementsDatabaseErrorResponse", ""
            ) as MeasurementsDatabaseErrorResponse;
            throw new ApiException<MeasurementsDatabaseErrorResponse>(response.httpStatusCode, "Database error.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "Unauthorized.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MeasurementSleepSegmentTypeResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementSleepSegmentTypeResult", ""
            ) as MeasurementSleepSegmentTypeResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSleepSegmentTypes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSleepSegmentTypesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MeasurementSleepSegmentTypesResult >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MeasurementSleepSegmentTypesResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementSleepSegmentTypesResult", ""
            ) as MeasurementSleepSegmentTypesResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MeasurementsDatabaseErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementsDatabaseErrorResponse", ""
            ) as MeasurementsDatabaseErrorResponse;
            throw new ApiException<MeasurementsDatabaseErrorResponse>(response.httpStatusCode, "Database error.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "Unauthorized.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MeasurementSleepSegmentTypesResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementSleepSegmentTypesResult", ""
            ) as MeasurementSleepSegmentTypesResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTemporalRelationToMeal
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTemporalRelationToMealWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MeasurementTemporalRelationToMealResult >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MeasurementTemporalRelationToMealResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementTemporalRelationToMealResult", ""
            ) as MeasurementTemporalRelationToMealResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MeasurementsDatabaseErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementsDatabaseErrorResponse", ""
            ) as MeasurementsDatabaseErrorResponse;
            throw new ApiException<MeasurementsDatabaseErrorResponse>(response.httpStatusCode, "Database error.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "Unauthorized.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MeasurementTemporalRelationToMealResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementTemporalRelationToMealResult", ""
            ) as MeasurementTemporalRelationToMealResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTemporalRelationToSleep
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTemporalRelationToSleepWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MeasurementTemporalRelationToSleepResult >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MeasurementTemporalRelationToSleepResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementTemporalRelationToSleepResult", ""
            ) as MeasurementTemporalRelationToSleepResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MeasurementsDatabaseErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementsDatabaseErrorResponse", ""
            ) as MeasurementsDatabaseErrorResponse;
            throw new ApiException<MeasurementsDatabaseErrorResponse>(response.httpStatusCode, "Database error.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "Unauthorized.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MeasurementTemporalRelationToSleepResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementTemporalRelationToSleepResult", ""
            ) as MeasurementTemporalRelationToSleepResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTemporalRelationsToMeal
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTemporalRelationsToMealWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MeasurementTemporalRelationsToMealResult >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MeasurementTemporalRelationsToMealResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementTemporalRelationsToMealResult", ""
            ) as MeasurementTemporalRelationsToMealResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MeasurementsDatabaseErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementsDatabaseErrorResponse", ""
            ) as MeasurementsDatabaseErrorResponse;
            throw new ApiException<MeasurementsDatabaseErrorResponse>(response.httpStatusCode, "Database error.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "Unauthorized.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MeasurementTemporalRelationsToMealResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementTemporalRelationsToMealResult", ""
            ) as MeasurementTemporalRelationsToMealResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTemporalRelationsToSleep
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTemporalRelationsToSleepWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MeasurementTemporalRelationsToSleepResult >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MeasurementTemporalRelationsToSleepResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementTemporalRelationsToSleepResult", ""
            ) as MeasurementTemporalRelationsToSleepResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MeasurementsDatabaseErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementsDatabaseErrorResponse", ""
            ) as MeasurementsDatabaseErrorResponse;
            throw new ApiException<MeasurementsDatabaseErrorResponse>(response.httpStatusCode, "Database error.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "Unauthorized.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MeasurementTemporalRelationsToSleepResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementTemporalRelationsToSleepResult", ""
            ) as MeasurementTemporalRelationsToSleepResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
