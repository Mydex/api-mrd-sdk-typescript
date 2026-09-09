# .MeasurementsApi

All URIs are relative to *https://api-mrd.mydex.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getActivityType**](MeasurementsApi.md#getActivityType) | **GET** /measurements/activity-type/{id} | Retrieve an activity type by ID
[**getActivityTypes**](MeasurementsApi.md#getActivityTypes) | **GET** /measurements/activity-type | Retrieve all activity types
[**getBloodPressureMeasurement**](MeasurementsApi.md#getBloodPressureMeasurement) | **GET** /measurements/blood-pressure-measurement/{id} | Retrieve a blood pressure measurement type by ID
[**getBloodPressureMeasurements**](MeasurementsApi.md#getBloodPressureMeasurements) | **GET** /measurements/blood-pressure-measurement | Retrieve all blood pressure measurement types
[**getBloodSpecimenSource**](MeasurementsApi.md#getBloodSpecimenSource) | **GET** /measurements/blood-specimen-source/{id} | Retrieve a blood specimen source by ID
[**getBloodSpecimenSources**](MeasurementsApi.md#getBloodSpecimenSources) | **GET** /measurements/blood-specimen-source | Retrieve all blood specimen sources
[**getBodyPosition**](MeasurementsApi.md#getBodyPosition) | **GET** /measurements/body-position/{id} | Retrieve a body position by ID
[**getBodyPositions**](MeasurementsApi.md#getBodyPositions) | **GET** /measurements/body-position | Retrieve all body positions
[**getBodyTemperatureLocation**](MeasurementsApi.md#getBodyTemperatureLocation) | **GET** /measurements/body-temperature-location/{id} | Retrieve a body temperature location by ID
[**getBodyTemperatureLocations**](MeasurementsApi.md#getBodyTemperatureLocations) | **GET** /measurements/body-temperature-location | Retrieve all body temperature locations
[**getCervicalDilation**](MeasurementsApi.md#getCervicalDilation) | **GET** /measurements/cervical-dilation/{id} | Retrieve a cervical dilation by ID
[**getCervicalDilations**](MeasurementsApi.md#getCervicalDilations) | **GET** /measurements/cervical-dilation | Retrieve all cervical dilations
[**getCervicalFirmness**](MeasurementsApi.md#getCervicalFirmness) | **GET** /measurements/cervical-firmness/{id} | Retrieve a cervical firmness value by ID
[**getCervicalFirmnessValues**](MeasurementsApi.md#getCervicalFirmnessValues) | **GET** /measurements/cervical-firmness | Retrieve all cervical firmness values
[**getCervicalMucusAmount**](MeasurementsApi.md#getCervicalMucusAmount) | **GET** /measurements/cervical-mucus-amount/{id} | Retrieve a cervical mucus amount by ID
[**getCervicalMucusAmounts**](MeasurementsApi.md#getCervicalMucusAmounts) | **GET** /measurements/cervical-mucus-amount | Retrieve all cervical mucus amounts
[**getCervicalMucusTexture**](MeasurementsApi.md#getCervicalMucusTexture) | **GET** /measurements/cervical-mucus-texture/{id} | Retrieve a cervical mucus texture by ID
[**getCervicalMucusTextures**](MeasurementsApi.md#getCervicalMucusTextures) | **GET** /measurements/cervical-mucus-texture | Retrieve all cervical mucus textures
[**getCervicalPosition**](MeasurementsApi.md#getCervicalPosition) | **GET** /measurements/cervical-position/{id} | Retrieve a cervical position by ID
[**getCervicalPositions**](MeasurementsApi.md#getCervicalPositions) | **GET** /measurements/cervical-position | Retrieve all cervical positions
[**getExerciseTypeByName**](MeasurementsApi.md#getExerciseTypeByName) | **GET** /measurements/exercise-type/{exercise_type_name} | Retrieve an exercise type by name
[**getExerciseTypes**](MeasurementsApi.md#getExerciseTypes) | **GET** /measurements/exercise-type | Retrieve all exercise types
[**getMealType**](MeasurementsApi.md#getMealType) | **GET** /measurements/meal-type/{id} | Retrieve a meal type by ID
[**getMealTypes**](MeasurementsApi.md#getMealTypes) | **GET** /measurements/meal-type | Retrieve all meal types
[**getMeasurementGroup**](MeasurementsApi.md#getMeasurementGroup) | **GET** /measurements/groups/{id} | Retrieve a measurement group by ID
[**getMeasurementGroups**](MeasurementsApi.md#getMeasurementGroups) | **GET** /measurements/groups | Retrieve all measurement groups
[**getMeasurementType**](MeasurementsApi.md#getMeasurementType) | **GET** /measurements/types/{id} | Retrieve a measurement type by ID
[**getMeasurementTypes**](MeasurementsApi.md#getMeasurementTypes) | **GET** /measurements/types | Retrieve all measurement types
[**getMeasurementUnit**](MeasurementsApi.md#getMeasurementUnit) | **GET** /measurements/units/{id} | Retrieve a unit of measure by ID
[**getMeasurementUnits**](MeasurementsApi.md#getMeasurementUnits) | **GET** /measurements/units | Retrieve all units of measure
[**getResistanceType**](MeasurementsApi.md#getResistanceType) | **GET** /measurements/resistance-type/{id} | Retrieve a resistance type by ID
[**getResistanceTypes**](MeasurementsApi.md#getResistanceTypes) | **GET** /measurements/resistance-type | Retrieve all resistance types
[**getSleepSegmentType**](MeasurementsApi.md#getSleepSegmentType) | **GET** /measurements/sleep-segment-type/{id} | Retrieve a sleep segment type by ID
[**getSleepSegmentTypes**](MeasurementsApi.md#getSleepSegmentTypes) | **GET** /measurements/sleep-segment-type | Retrieve all sleep segment types
[**getTemporalRelationToMeal**](MeasurementsApi.md#getTemporalRelationToMeal) | **GET** /measurements/temporal-relation-to-meal/{id} | Retrieve a temporal relation to meals by ID
[**getTemporalRelationToSleep**](MeasurementsApi.md#getTemporalRelationToSleep) | **GET** /measurements/temporal-relation-to-sleep/{id} | Retrieve a temporal relation to sleep by ID
[**getTemporalRelationsToMeal**](MeasurementsApi.md#getTemporalRelationsToMeal) | **GET** /measurements/temporal-relation-to-meal | Retrieve all temporal relations to meals
[**getTemporalRelationsToSleep**](MeasurementsApi.md#getTemporalRelationsToSleep) | **GET** /measurements/temporal-relation-to-sleep | Retrieve all temporal relations to sleep


# **getActivityType**
> MeasurementActivityTypeResult getActivityType()

Returns the activity type matching the supplied activity_type_id.

### Example


```typescript
import { createConfiguration, MeasurementsApi } from '';
import type { MeasurementsApiGetActivityTypeRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeasurementsApi(configuration);

const request: MeasurementsApiGetActivityTypeRequest = {
    // MRD service scope required for Measurements endpoints.
  xMrdScopes: "measurements",
    // Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
  id: 1,
};

const data = await apiInstance.getActivityType(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;measurements&#39;**]**Array<&#39;measurements&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Measurements endpoints. | defaults to 'measurements'
 **id** | [**number**] | Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings. | defaults to undefined


### Return type

**MeasurementActivityTypeResult**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Requested activity type or an application-level error object. |  -  |
**400** | Database error. |  -  |
**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getActivityTypes**
> MeasurementActivityTypesResult getActivityTypes()

Returns activity types including the database record ID, activity type ID and description.

### Example


```typescript
import { createConfiguration, MeasurementsApi } from '';
import type { MeasurementsApiGetActivityTypesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeasurementsApi(configuration);

const request: MeasurementsApiGetActivityTypesRequest = {
    // MRD service scope required for Measurements endpoints.
  xMrdScopes: "measurements",
};

const data = await apiInstance.getActivityTypes(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;measurements&#39;**]**Array<&#39;measurements&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Measurements endpoints. | defaults to 'measurements'


### Return type

**MeasurementActivityTypesResult**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Available activity types or an application-level error object. |  -  |
**400** | Database error. |  -  |
**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBloodPressureMeasurement**
> MeasurementBloodPressureMeasurementResult getBloodPressureMeasurement()

Returns the blood pressure measurement type matching the supplied blood_pressure_measurement_id.

### Example


```typescript
import { createConfiguration, MeasurementsApi } from '';
import type { MeasurementsApiGetBloodPressureMeasurementRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeasurementsApi(configuration);

const request: MeasurementsApiGetBloodPressureMeasurementRequest = {
    // MRD service scope required for Measurements endpoints.
  xMrdScopes: "measurements",
    // Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
  id: 1,
};

const data = await apiInstance.getBloodPressureMeasurement(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;measurements&#39;**]**Array<&#39;measurements&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Measurements endpoints. | defaults to 'measurements'
 **id** | [**number**] | Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings. | defaults to undefined


### Return type

**MeasurementBloodPressureMeasurementResult**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Requested blood pressure measurement type or an application-level error object. |  -  |
**400** | Database error. |  -  |
**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBloodPressureMeasurements**
> MeasurementBloodPressureMeasurementsResult getBloodPressureMeasurements()

Returns blood pressure measurement types including the database record ID, blood pressure measurement ID and description.

### Example


```typescript
import { createConfiguration, MeasurementsApi } from '';
import type { MeasurementsApiGetBloodPressureMeasurementsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeasurementsApi(configuration);

const request: MeasurementsApiGetBloodPressureMeasurementsRequest = {
    // MRD service scope required for Measurements endpoints.
  xMrdScopes: "measurements",
};

const data = await apiInstance.getBloodPressureMeasurements(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;measurements&#39;**]**Array<&#39;measurements&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Measurements endpoints. | defaults to 'measurements'


### Return type

**MeasurementBloodPressureMeasurementsResult**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Available blood pressure measurement types or an application-level error object. |  -  |
**400** | Database error. |  -  |
**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBloodSpecimenSource**
> MeasurementBloodSpecimenSourceResult getBloodSpecimenSource()

Returns the blood specimen source matching the supplied blood_specimen_source_id.

### Example


```typescript
import { createConfiguration, MeasurementsApi } from '';
import type { MeasurementsApiGetBloodSpecimenSourceRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeasurementsApi(configuration);

const request: MeasurementsApiGetBloodSpecimenSourceRequest = {
    // MRD service scope required for Measurements endpoints.
  xMrdScopes: "measurements",
    // Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
  id: 1,
};

const data = await apiInstance.getBloodSpecimenSource(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;measurements&#39;**]**Array<&#39;measurements&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Measurements endpoints. | defaults to 'measurements'
 **id** | [**number**] | Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings. | defaults to undefined


### Return type

**MeasurementBloodSpecimenSourceResult**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Requested blood specimen source or an application-level error object. |  -  |
**400** | Database error. |  -  |
**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBloodSpecimenSources**
> MeasurementBloodSpecimenSourcesResult getBloodSpecimenSources()

Returns blood specimen sources including the database record ID, blood specimen source ID and description.

### Example


```typescript
import { createConfiguration, MeasurementsApi } from '';
import type { MeasurementsApiGetBloodSpecimenSourcesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeasurementsApi(configuration);

const request: MeasurementsApiGetBloodSpecimenSourcesRequest = {
    // MRD service scope required for Measurements endpoints.
  xMrdScopes: "measurements",
};

const data = await apiInstance.getBloodSpecimenSources(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;measurements&#39;**]**Array<&#39;measurements&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Measurements endpoints. | defaults to 'measurements'


### Return type

**MeasurementBloodSpecimenSourcesResult**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Available blood specimen sources or an application-level error object. |  -  |
**400** | Database error. |  -  |
**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBodyPosition**
> MeasurementBodyPositionResult getBodyPosition()

Returns the body position matching the supplied body_position_id.

### Example


```typescript
import { createConfiguration, MeasurementsApi } from '';
import type { MeasurementsApiGetBodyPositionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeasurementsApi(configuration);

const request: MeasurementsApiGetBodyPositionRequest = {
    // MRD service scope required for Measurements endpoints.
  xMrdScopes: "measurements",
    // Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
  id: 1,
};

const data = await apiInstance.getBodyPosition(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;measurements&#39;**]**Array<&#39;measurements&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Measurements endpoints. | defaults to 'measurements'
 **id** | [**number**] | Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings. | defaults to undefined


### Return type

**MeasurementBodyPositionResult**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Requested body position or an application-level error object. |  -  |
**400** | Database error. |  -  |
**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBodyPositions**
> MeasurementBodyPositionsResult getBodyPositions()

Returns body positions including the database record ID, body position ID and description.

### Example


```typescript
import { createConfiguration, MeasurementsApi } from '';
import type { MeasurementsApiGetBodyPositionsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeasurementsApi(configuration);

const request: MeasurementsApiGetBodyPositionsRequest = {
    // MRD service scope required for Measurements endpoints.
  xMrdScopes: "measurements",
};

const data = await apiInstance.getBodyPositions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;measurements&#39;**]**Array<&#39;measurements&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Measurements endpoints. | defaults to 'measurements'


### Return type

**MeasurementBodyPositionsResult**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Available body positions or an application-level error object. |  -  |
**400** | Database error. |  -  |
**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBodyTemperatureLocation**
> MeasurementBodyTemperatureLocationResult getBodyTemperatureLocation()

Returns the body temperature location matching the supplied body_temperature_location_id.

### Example


```typescript
import { createConfiguration, MeasurementsApi } from '';
import type { MeasurementsApiGetBodyTemperatureLocationRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeasurementsApi(configuration);

const request: MeasurementsApiGetBodyTemperatureLocationRequest = {
    // MRD service scope required for Measurements endpoints.
  xMrdScopes: "measurements",
    // Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
  id: 1,
};

const data = await apiInstance.getBodyTemperatureLocation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;measurements&#39;**]**Array<&#39;measurements&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Measurements endpoints. | defaults to 'measurements'
 **id** | [**number**] | Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings. | defaults to undefined


### Return type

**MeasurementBodyTemperatureLocationResult**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Requested body temperature location or an application-level error object. |  -  |
**400** | Database error. |  -  |
**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBodyTemperatureLocations**
> MeasurementBodyTemperatureLocationsResult getBodyTemperatureLocations()

Returns body temperature locations including the database record ID, body temperature location ID and description.

### Example


```typescript
import { createConfiguration, MeasurementsApi } from '';
import type { MeasurementsApiGetBodyTemperatureLocationsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeasurementsApi(configuration);

const request: MeasurementsApiGetBodyTemperatureLocationsRequest = {
    // MRD service scope required for Measurements endpoints.
  xMrdScopes: "measurements",
};

const data = await apiInstance.getBodyTemperatureLocations(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;measurements&#39;**]**Array<&#39;measurements&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Measurements endpoints. | defaults to 'measurements'


### Return type

**MeasurementBodyTemperatureLocationsResult**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Available body temperature locations or an application-level error object. |  -  |
**400** | Database error. |  -  |
**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCervicalDilation**
> MeasurementCervicalDilationResult getCervicalDilation()

Returns the cervical dilation matching the supplied cervical_dilation_id.

### Example


```typescript
import { createConfiguration, MeasurementsApi } from '';
import type { MeasurementsApiGetCervicalDilationRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeasurementsApi(configuration);

const request: MeasurementsApiGetCervicalDilationRequest = {
    // MRD service scope required for Measurements endpoints.
  xMrdScopes: "measurements",
    // Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
  id: 1,
};

const data = await apiInstance.getCervicalDilation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;measurements&#39;**]**Array<&#39;measurements&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Measurements endpoints. | defaults to 'measurements'
 **id** | [**number**] | Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings. | defaults to undefined


### Return type

**MeasurementCervicalDilationResult**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Requested cervical dilation or an application-level error object. |  -  |
**400** | Database error. |  -  |
**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCervicalDilations**
> MeasurementCervicalDilationsResult getCervicalDilations()

Returns cervical dilations including the database record ID, cervical dilation ID and description.

### Example


```typescript
import { createConfiguration, MeasurementsApi } from '';
import type { MeasurementsApiGetCervicalDilationsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeasurementsApi(configuration);

const request: MeasurementsApiGetCervicalDilationsRequest = {
    // MRD service scope required for Measurements endpoints.
  xMrdScopes: "measurements",
};

const data = await apiInstance.getCervicalDilations(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;measurements&#39;**]**Array<&#39;measurements&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Measurements endpoints. | defaults to 'measurements'


### Return type

**MeasurementCervicalDilationsResult**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Available cervical dilations or an application-level error object. |  -  |
**400** | Database error. |  -  |
**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCervicalFirmness**
> MeasurementCervicalFirmnessResult getCervicalFirmness()

Returns the cervical firmness value matching the supplied cervical_firmness_id.

### Example


```typescript
import { createConfiguration, MeasurementsApi } from '';
import type { MeasurementsApiGetCervicalFirmnessRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeasurementsApi(configuration);

const request: MeasurementsApiGetCervicalFirmnessRequest = {
    // MRD service scope required for Measurements endpoints.
  xMrdScopes: "measurements",
    // Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
  id: 1,
};

const data = await apiInstance.getCervicalFirmness(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;measurements&#39;**]**Array<&#39;measurements&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Measurements endpoints. | defaults to 'measurements'
 **id** | [**number**] | Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings. | defaults to undefined


### Return type

**MeasurementCervicalFirmnessResult**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Requested cervical firmness value or an application-level error object. |  -  |
**400** | Database error. |  -  |
**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCervicalFirmnessValues**
> MeasurementCervicalFirmnessValuesResult getCervicalFirmnessValues()

Returns cervical firmness values including the database record ID, cervical firmness ID and description.

### Example


```typescript
import { createConfiguration, MeasurementsApi } from '';
import type { MeasurementsApiGetCervicalFirmnessValuesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeasurementsApi(configuration);

const request: MeasurementsApiGetCervicalFirmnessValuesRequest = {
    // MRD service scope required for Measurements endpoints.
  xMrdScopes: "measurements",
};

const data = await apiInstance.getCervicalFirmnessValues(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;measurements&#39;**]**Array<&#39;measurements&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Measurements endpoints. | defaults to 'measurements'


### Return type

**MeasurementCervicalFirmnessValuesResult**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Available cervical firmness values or an application-level error object. |  -  |
**400** | Database error. |  -  |
**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCervicalMucusAmount**
> MeasurementCervicalMucusAmountResult getCervicalMucusAmount()

Returns the cervical mucus amount matching the supplied cervical_mucus_amount_id.

### Example


```typescript
import { createConfiguration, MeasurementsApi } from '';
import type { MeasurementsApiGetCervicalMucusAmountRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeasurementsApi(configuration);

const request: MeasurementsApiGetCervicalMucusAmountRequest = {
    // MRD service scope required for Measurements endpoints.
  xMrdScopes: "measurements",
    // Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
  id: 1,
};

const data = await apiInstance.getCervicalMucusAmount(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;measurements&#39;**]**Array<&#39;measurements&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Measurements endpoints. | defaults to 'measurements'
 **id** | [**number**] | Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings. | defaults to undefined


### Return type

**MeasurementCervicalMucusAmountResult**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Requested cervical mucus amount or an application-level error object. |  -  |
**400** | Database error. |  -  |
**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCervicalMucusAmounts**
> MeasurementCervicalMucusAmountsResult getCervicalMucusAmounts()

Returns cervical mucus amounts including the database record ID, cervical mucus amount ID and description.

### Example


```typescript
import { createConfiguration, MeasurementsApi } from '';
import type { MeasurementsApiGetCervicalMucusAmountsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeasurementsApi(configuration);

const request: MeasurementsApiGetCervicalMucusAmountsRequest = {
    // MRD service scope required for Measurements endpoints.
  xMrdScopes: "measurements",
};

const data = await apiInstance.getCervicalMucusAmounts(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;measurements&#39;**]**Array<&#39;measurements&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Measurements endpoints. | defaults to 'measurements'


### Return type

**MeasurementCervicalMucusAmountsResult**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Available cervical mucus amounts or an application-level error object. |  -  |
**400** | Database error. |  -  |
**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCervicalMucusTexture**
> MeasurementCervicalMucusTextureResult getCervicalMucusTexture()

Returns the cervical mucus texture matching the supplied cervical_mucus_texture_id.

### Example


```typescript
import { createConfiguration, MeasurementsApi } from '';
import type { MeasurementsApiGetCervicalMucusTextureRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeasurementsApi(configuration);

const request: MeasurementsApiGetCervicalMucusTextureRequest = {
    // MRD service scope required for Measurements endpoints.
  xMrdScopes: "measurements",
    // Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
  id: 1,
};

const data = await apiInstance.getCervicalMucusTexture(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;measurements&#39;**]**Array<&#39;measurements&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Measurements endpoints. | defaults to 'measurements'
 **id** | [**number**] | Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings. | defaults to undefined


### Return type

**MeasurementCervicalMucusTextureResult**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Requested cervical mucus texture or an application-level error object. |  -  |
**400** | Database error. |  -  |
**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCervicalMucusTextures**
> MeasurementCervicalMucusTexturesResult getCervicalMucusTextures()

Returns cervical mucus textures including the database record ID, cervical mucus texture ID and description.

### Example


```typescript
import { createConfiguration, MeasurementsApi } from '';
import type { MeasurementsApiGetCervicalMucusTexturesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeasurementsApi(configuration);

const request: MeasurementsApiGetCervicalMucusTexturesRequest = {
    // MRD service scope required for Measurements endpoints.
  xMrdScopes: "measurements",
};

const data = await apiInstance.getCervicalMucusTextures(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;measurements&#39;**]**Array<&#39;measurements&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Measurements endpoints. | defaults to 'measurements'


### Return type

**MeasurementCervicalMucusTexturesResult**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Available cervical mucus textures or an application-level error object. |  -  |
**400** | Database error. |  -  |
**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCervicalPosition**
> MeasurementCervicalPositionResult getCervicalPosition()

Returns the cervical position matching the supplied cervical_position_id.

### Example


```typescript
import { createConfiguration, MeasurementsApi } from '';
import type { MeasurementsApiGetCervicalPositionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeasurementsApi(configuration);

const request: MeasurementsApiGetCervicalPositionRequest = {
    // MRD service scope required for Measurements endpoints.
  xMrdScopes: "measurements",
    // Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
  id: 1,
};

const data = await apiInstance.getCervicalPosition(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;measurements&#39;**]**Array<&#39;measurements&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Measurements endpoints. | defaults to 'measurements'
 **id** | [**number**] | Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings. | defaults to undefined


### Return type

**MeasurementCervicalPositionResult**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Requested cervical position or an application-level error object. |  -  |
**400** | Database error. |  -  |
**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCervicalPositions**
> MeasurementCervicalPositionsResult getCervicalPositions()

Returns cervical positions including the database record ID, cervical position ID and description.

### Example


```typescript
import { createConfiguration, MeasurementsApi } from '';
import type { MeasurementsApiGetCervicalPositionsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeasurementsApi(configuration);

const request: MeasurementsApiGetCervicalPositionsRequest = {
    // MRD service scope required for Measurements endpoints.
  xMrdScopes: "measurements",
};

const data = await apiInstance.getCervicalPositions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;measurements&#39;**]**Array<&#39;measurements&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Measurements endpoints. | defaults to 'measurements'


### Return type

**MeasurementCervicalPositionsResult**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Available cervical positions or an application-level error object. |  -  |
**400** | Database error. |  -  |
**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getExerciseTypeByName**
> MeasurementExerciseTypeResult getExerciseTypeByName()

Returns the exercise type matching the supplied exercise_type_name.

### Example


```typescript
import { createConfiguration, MeasurementsApi } from '';
import type { MeasurementsApiGetExerciseTypeByNameRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeasurementsApi(configuration);

const request: MeasurementsApiGetExerciseTypeByNameRequest = {
    // MRD service scope required for Measurements endpoints.
  xMrdScopes: "measurements",
    // Exercise type name used to retrieve a specific exercise-type record.
  exerciseTypeName: "Running",
};

const data = await apiInstance.getExerciseTypeByName(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;measurements&#39;**]**Array<&#39;measurements&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Measurements endpoints. | defaults to 'measurements'
 **exerciseTypeName** | [**string**] | Exercise type name used to retrieve a specific exercise-type record. | defaults to undefined


### Return type

**MeasurementExerciseTypeResult**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Requested exercise type or an application-level error object. |  -  |
**400** | Database error. |  -  |
**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getExerciseTypes**
> MeasurementExerciseTypesResult getExerciseTypes()

Returns exercise types including the database record ID, exercise type name and description.

### Example


```typescript
import { createConfiguration, MeasurementsApi } from '';
import type { MeasurementsApiGetExerciseTypesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeasurementsApi(configuration);

const request: MeasurementsApiGetExerciseTypesRequest = {
    // MRD service scope required for Measurements endpoints.
  xMrdScopes: "measurements",
};

const data = await apiInstance.getExerciseTypes(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;measurements&#39;**]**Array<&#39;measurements&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Measurements endpoints. | defaults to 'measurements'


### Return type

**MeasurementExerciseTypesResult**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Available exercise types or an application-level error object. |  -  |
**400** | Database error. |  -  |
**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getMealType**
> MeasurementMealTypeResult getMealType()

Returns the meal type matching the supplied meal_type_id.

### Example


```typescript
import { createConfiguration, MeasurementsApi } from '';
import type { MeasurementsApiGetMealTypeRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeasurementsApi(configuration);

const request: MeasurementsApiGetMealTypeRequest = {
    // MRD service scope required for Measurements endpoints.
  xMrdScopes: "measurements",
    // Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
  id: 1,
};

const data = await apiInstance.getMealType(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;measurements&#39;**]**Array<&#39;measurements&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Measurements endpoints. | defaults to 'measurements'
 **id** | [**number**] | Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings. | defaults to undefined


### Return type

**MeasurementMealTypeResult**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Requested meal type or an application-level error object. |  -  |
**400** | Database error. |  -  |
**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getMealTypes**
> MeasurementMealTypesResult getMealTypes()

Returns meal types including the database record ID, meal type ID and description.

### Example


```typescript
import { createConfiguration, MeasurementsApi } from '';
import type { MeasurementsApiGetMealTypesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeasurementsApi(configuration);

const request: MeasurementsApiGetMealTypesRequest = {
    // MRD service scope required for Measurements endpoints.
  xMrdScopes: "measurements",
};

const data = await apiInstance.getMealTypes(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;measurements&#39;**]**Array<&#39;measurements&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Measurements endpoints. | defaults to 'measurements'


### Return type

**MeasurementMealTypesResult**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Available meal types or an application-level error object. |  -  |
**400** | Database error. |  -  |
**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getMeasurementGroup**
> MeasurementGroupResult getMeasurementGroup()

Returns the measurement group matching the supplied database record ID.

### Example


```typescript
import { createConfiguration, MeasurementsApi } from '';
import type { MeasurementsApiGetMeasurementGroupRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeasurementsApi(configuration);

const request: MeasurementsApiGetMeasurementGroupRequest = {
    // MRD service scope required for Measurements endpoints.
  xMrdScopes: "measurements",
    // Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
  id: 1,
};

const data = await apiInstance.getMeasurementGroup(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;measurements&#39;**]**Array<&#39;measurements&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Measurements endpoints. | defaults to 'measurements'
 **id** | [**number**] | Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings. | defaults to undefined


### Return type

**MeasurementGroupResult**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Requested measurement group or an application-level error object. |  -  |
**400** | Database error. |  -  |
**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getMeasurementGroups**
> MeasurementGroupsResult getMeasurementGroups()

Returns the available measurement groups and their definitions.

### Example


```typescript
import { createConfiguration, MeasurementsApi } from '';
import type { MeasurementsApiGetMeasurementGroupsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeasurementsApi(configuration);

const request: MeasurementsApiGetMeasurementGroupsRequest = {
    // MRD service scope required for Measurements endpoints.
  xMrdScopes: "measurements",
};

const data = await apiInstance.getMeasurementGroups(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;measurements&#39;**]**Array<&#39;measurements&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Measurements endpoints. | defaults to 'measurements'


### Return type

**MeasurementGroupsResult**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Available measurement groups or an application-level error object. |  -  |
**400** | Database error. |  -  |
**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getMeasurementType**
> MeasurementTypeResult getMeasurementType()

Returns the measurement definition matching the supplied measurement ID.

### Example


```typescript
import { createConfiguration, MeasurementsApi } from '';
import type { MeasurementsApiGetMeasurementTypeRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeasurementsApi(configuration);

const request: MeasurementsApiGetMeasurementTypeRequest = {
    // MRD service scope required for Measurements endpoints.
  xMrdScopes: "measurements",
    // Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
  id: 1,
};

const data = await apiInstance.getMeasurementType(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;measurements&#39;**]**Array<&#39;measurements&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Measurements endpoints. | defaults to 'measurements'
 **id** | [**number**] | Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings. | defaults to undefined


### Return type

**MeasurementTypeResult**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Requested measurement type or an application-level error object. |  -  |
**400** | Database error. |  -  |
**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getMeasurementTypes**
> MeasurementTypesResult getMeasurementTypes()

Returns measurement definitions including the measurement name, group and unit.

### Example


```typescript
import { createConfiguration, MeasurementsApi } from '';
import type { MeasurementsApiGetMeasurementTypesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeasurementsApi(configuration);

const request: MeasurementsApiGetMeasurementTypesRequest = {
    // MRD service scope required for Measurements endpoints.
  xMrdScopes: "measurements",
};

const data = await apiInstance.getMeasurementTypes(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;measurements&#39;**]**Array<&#39;measurements&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Measurements endpoints. | defaults to 'measurements'


### Return type

**MeasurementTypesResult**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Available measurement types or an application-level error object. |  -  |
**400** | Database error. |  -  |
**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getMeasurementUnit**
> MeasurementUnitResult getMeasurementUnit()

Returns the unit of measure matching the supplied database record ID.

### Example


```typescript
import { createConfiguration, MeasurementsApi } from '';
import type { MeasurementsApiGetMeasurementUnitRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeasurementsApi(configuration);

const request: MeasurementsApiGetMeasurementUnitRequest = {
    // MRD service scope required for Measurements endpoints.
  xMrdScopes: "measurements",
    // Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
  id: 1,
};

const data = await apiInstance.getMeasurementUnit(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;measurements&#39;**]**Array<&#39;measurements&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Measurements endpoints. | defaults to 'measurements'
 **id** | [**number**] | Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings. | defaults to undefined


### Return type

**MeasurementUnitResult**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Requested unit of measure or an application-level error object. |  -  |
**400** | Database error. |  -  |
**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getMeasurementUnits**
> MeasurementUnitsResult getMeasurementUnits()

Returns available measurement units and their definitions.

### Example


```typescript
import { createConfiguration, MeasurementsApi } from '';
import type { MeasurementsApiGetMeasurementUnitsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeasurementsApi(configuration);

const request: MeasurementsApiGetMeasurementUnitsRequest = {
    // MRD service scope required for Measurements endpoints.
  xMrdScopes: "measurements",
};

const data = await apiInstance.getMeasurementUnits(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;measurements&#39;**]**Array<&#39;measurements&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Measurements endpoints. | defaults to 'measurements'


### Return type

**MeasurementUnitsResult**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Available units of measure or an application-level error object. |  -  |
**400** | Database error. |  -  |
**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getResistanceType**
> MeasurementResistanceTypeResult getResistanceType()

Returns the resistance type matching the supplied resistance_type_id.

### Example


```typescript
import { createConfiguration, MeasurementsApi } from '';
import type { MeasurementsApiGetResistanceTypeRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeasurementsApi(configuration);

const request: MeasurementsApiGetResistanceTypeRequest = {
    // MRD service scope required for Measurements endpoints.
  xMrdScopes: "measurements",
    // Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
  id: 1,
};

const data = await apiInstance.getResistanceType(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;measurements&#39;**]**Array<&#39;measurements&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Measurements endpoints. | defaults to 'measurements'
 **id** | [**number**] | Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings. | defaults to undefined


### Return type

**MeasurementResistanceTypeResult**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Requested resistance type or an application-level error object. |  -  |
**400** | Database error. |  -  |
**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getResistanceTypes**
> MeasurementResistanceTypesResult getResistanceTypes()

Returns resistance types including the database record ID, resistance type ID and description.

### Example


```typescript
import { createConfiguration, MeasurementsApi } from '';
import type { MeasurementsApiGetResistanceTypesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeasurementsApi(configuration);

const request: MeasurementsApiGetResistanceTypesRequest = {
    // MRD service scope required for Measurements endpoints.
  xMrdScopes: "measurements",
};

const data = await apiInstance.getResistanceTypes(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;measurements&#39;**]**Array<&#39;measurements&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Measurements endpoints. | defaults to 'measurements'


### Return type

**MeasurementResistanceTypesResult**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Available resistance types or an application-level error object. |  -  |
**400** | Database error. |  -  |
**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSleepSegmentType**
> MeasurementSleepSegmentTypeResult getSleepSegmentType()

Returns the sleep segment type matching the supplied sleep_segment_type_id.

### Example


```typescript
import { createConfiguration, MeasurementsApi } from '';
import type { MeasurementsApiGetSleepSegmentTypeRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeasurementsApi(configuration);

const request: MeasurementsApiGetSleepSegmentTypeRequest = {
    // MRD service scope required for Measurements endpoints.
  xMrdScopes: "measurements",
    // Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
  id: 1,
};

const data = await apiInstance.getSleepSegmentType(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;measurements&#39;**]**Array<&#39;measurements&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Measurements endpoints. | defaults to 'measurements'
 **id** | [**number**] | Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings. | defaults to undefined


### Return type

**MeasurementSleepSegmentTypeResult**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Requested sleep segment type or an application-level error object. |  -  |
**400** | Database error. |  -  |
**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSleepSegmentTypes**
> MeasurementSleepSegmentTypesResult getSleepSegmentTypes()

Returns sleep segment types including the database record ID, sleep segment type ID and description.

### Example


```typescript
import { createConfiguration, MeasurementsApi } from '';
import type { MeasurementsApiGetSleepSegmentTypesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeasurementsApi(configuration);

const request: MeasurementsApiGetSleepSegmentTypesRequest = {
    // MRD service scope required for Measurements endpoints.
  xMrdScopes: "measurements",
};

const data = await apiInstance.getSleepSegmentTypes(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;measurements&#39;**]**Array<&#39;measurements&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Measurements endpoints. | defaults to 'measurements'


### Return type

**MeasurementSleepSegmentTypesResult**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Available sleep segment types or an application-level error object. |  -  |
**400** | Database error. |  -  |
**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTemporalRelationToMeal**
> MeasurementTemporalRelationToMealResult getTemporalRelationToMeal()

Returns the temporal relation to meal matching the supplied temporal_relation_to_meal_id.

### Example


```typescript
import { createConfiguration, MeasurementsApi } from '';
import type { MeasurementsApiGetTemporalRelationToMealRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeasurementsApi(configuration);

const request: MeasurementsApiGetTemporalRelationToMealRequest = {
    // MRD service scope required for Measurements endpoints.
  xMrdScopes: "measurements",
    // Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
  id: 1,
};

const data = await apiInstance.getTemporalRelationToMeal(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;measurements&#39;**]**Array<&#39;measurements&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Measurements endpoints. | defaults to 'measurements'
 **id** | [**number**] | Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings. | defaults to undefined


### Return type

**MeasurementTemporalRelationToMealResult**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Requested temporal relation to meal or an application-level error object. |  -  |
**400** | Database error. |  -  |
**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTemporalRelationToSleep**
> MeasurementTemporalRelationToSleepResult getTemporalRelationToSleep()

Returns the temporal relation to sleep matching the supplied temporal_relation_to_sleep_id.

### Example


```typescript
import { createConfiguration, MeasurementsApi } from '';
import type { MeasurementsApiGetTemporalRelationToSleepRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeasurementsApi(configuration);

const request: MeasurementsApiGetTemporalRelationToSleepRequest = {
    // MRD service scope required for Measurements endpoints.
  xMrdScopes: "measurements",
    // Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
  id: 1,
};

const data = await apiInstance.getTemporalRelationToSleep(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;measurements&#39;**]**Array<&#39;measurements&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Measurements endpoints. | defaults to 'measurements'
 **id** | [**number**] | Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings. | defaults to undefined


### Return type

**MeasurementTemporalRelationToSleepResult**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Requested temporal relation to sleep or an application-level error object. |  -  |
**400** | Database error. |  -  |
**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTemporalRelationsToMeal**
> MeasurementTemporalRelationsToMealResult getTemporalRelationsToMeal()

Returns temporal relations to meals including the database record ID, relation ID and description.

### Example


```typescript
import { createConfiguration, MeasurementsApi } from '';
import type { MeasurementsApiGetTemporalRelationsToMealRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeasurementsApi(configuration);

const request: MeasurementsApiGetTemporalRelationsToMealRequest = {
    // MRD service scope required for Measurements endpoints.
  xMrdScopes: "measurements",
};

const data = await apiInstance.getTemporalRelationsToMeal(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;measurements&#39;**]**Array<&#39;measurements&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Measurements endpoints. | defaults to 'measurements'


### Return type

**MeasurementTemporalRelationsToMealResult**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Available temporal relations to meals or an application-level error object. |  -  |
**400** | Database error. |  -  |
**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTemporalRelationsToSleep**
> MeasurementTemporalRelationsToSleepResult getTemporalRelationsToSleep()

Returns temporal relations to sleep including the database record ID, relation ID and description.

### Example


```typescript
import { createConfiguration, MeasurementsApi } from '';
import type { MeasurementsApiGetTemporalRelationsToSleepRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MeasurementsApi(configuration);

const request: MeasurementsApiGetTemporalRelationsToSleepRequest = {
    // MRD service scope required for Measurements endpoints.
  xMrdScopes: "measurements",
};

const data = await apiInstance.getTemporalRelationsToSleep(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;measurements&#39;**]**Array<&#39;measurements&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Measurements endpoints. | defaults to 'measurements'


### Return type

**MeasurementTemporalRelationsToSleepResult**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Available temporal relations to sleep or an application-level error object. |  -  |
**400** | Database error. |  -  |
**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


