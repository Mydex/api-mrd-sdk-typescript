# .ValidationsApi

All URIs are relative to *https://api-mrd.mydex.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getValidationLookupValues**](ValidationsApi.md#getValidationLookupValues) | **GET** /validations/lookup/{field_name} | Retrieve allowed values for a lookup field
[**getValidationMdsAllDatasetsAndFields**](ValidationsApi.md#getValidationMdsAllDatasetsAndFields) | **GET** /validations/mds/all-datasets-and-fields | Retrieve all MDS datasets with extended field information
[**getValidationMdsDatasetFieldTypes**](ValidationsApi.md#getValidationMdsDatasetFieldTypes) | **GET** /validations/mds/dataset/{dataset}/fieldtypes | Retrieve field types for an MDS dataset
[**getValidationMdsDatasetFields**](ValidationsApi.md#getValidationMdsDatasetFields) | **GET** /validations/mds/dataset/{dataset} | Retrieve full field definitions for an MDS dataset
[**getValidationMdsDatasets**](ValidationsApi.md#getValidationMdsDatasets) | **GET** /validations/mds/datasets | Retrieve MDS datasets
[**getValidationMdsDatasetsAndFields**](ValidationsApi.md#getValidationMdsDatasetsAndFields) | **GET** /validations/mds/datasets-and-fields | Retrieve MDS datasets and basic field information
[**getValidationMdsDatasetsByOneStatus**](ValidationsApi.md#getValidationMdsDatasetsByOneStatus) | **GET** /validations/mds/datasets/{status1} | Retrieve MDS datasets by one status
[**getValidationMdsDatasetsByThreeStatuses**](ValidationsApi.md#getValidationMdsDatasetsByThreeStatuses) | **GET** /validations/mds/datasets/{status1}/{status2}/{status3} | Retrieve MDS datasets by three statuses
[**getValidationMdsDatasetsByTwoStatuses**](ValidationsApi.md#getValidationMdsDatasetsByTwoStatuses) | **GET** /validations/mds/datasets/{status1}/{status2} | Retrieve MDS datasets by two statuses
[**getValidationMdsDatasetsByType**](ValidationsApi.md#getValidationMdsDatasetsByType) | **GET** /validations/mds/datasets/type/{type} | Retrieve MDS datasets by type
[**getValidationMdsFieldType**](ValidationsApi.md#getValidationMdsFieldType) | **GET** /validations/mds/field/type/{field} | Retrieve an MDS field\&#39;s data type
[**getValidationMdsSummary**](ValidationsApi.md#getValidationMdsSummary) | **GET** /validations/mds/summary | Retrieve an MDS summary
[**getValidationMtsFeatureByName**](ValidationsApi.md#getValidationMtsFeatureByName) | **GET** /validations/mts/features/{feature} | Retrieve an MTS feature by name
[**getValidationMtsFeatures**](ValidationsApi.md#getValidationMtsFeatures) | **GET** /validations/mts/features | Retrieve all MTS features
[**getValidationMtsFeaturesByGroup**](ValidationsApi.md#getValidationMtsFeaturesByGroup) | **GET** /validations/mts/features/group/{group} | Retrieve MTS features by group
[**getValidationMtsTemplateByModule**](ValidationsApi.md#getValidationMtsTemplateByModule) | **GET** /validations/mts/templates/{template}/{module} | Retrieve an MTS template module
[**getValidationMtsTemplateByName**](ValidationsApi.md#getValidationMtsTemplateByName) | **GET** /validations/mts/templates/{template} | Retrieve MTS template records by template name
[**getValidationMtsTemplateBySubsection**](ValidationsApi.md#getValidationMtsTemplateBySubsection) | **GET** /validations/mts/templates/{template}/{module}/{subsection} | Retrieve an MTS template subsection
[**getValidationMtsTemplates**](ValidationsApi.md#getValidationMtsTemplates) | **GET** /validations/mts/templates | Retrieve all MTS template records
[**searchValidationMdsFields**](ValidationsApi.md#searchValidationMdsFields) | **GET** /validations/mds/search/{search} | Search MDS field names
[**validateLookupValue**](ValidationsApi.md#validateLookupValue) | **GET** /validations/lookup/{field_name}/{user_input} | Validate a value against a lookup field


# **getValidationLookupValues**
> LookupAllowedValuesResponse getValidationLookupValues()

Returns allowed values from the requested validation lookup. Most lookup tables return an array of strings. Structured lookup tables such as race_ethnicity return an array of objects. The field name must map to a supported lu_<field_name> lookup table; country is additionally supported from the Countries database.

### Example


```typescript
import { createConfiguration, ValidationsApi } from '';
import type { ValidationsApiGetValidationLookupValuesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ValidationsApi(configuration);

const request: ValidationsApiGetValidationLookupValuesRequest = {
    // Supported validation lookup field. Only lookup datasets currently intended to provide useful values through the Validations API are exposed here.
  fieldName: "gender",
};

const data = await apiInstance.getValidationLookupValues(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldName** | [**&#39;bank_acc_type&#39; | &#39;comm_type&#39; | &#39;country&#39; | &#39;dl_group&#39; | &#39;dl_issuing_authority&#39; | &#39;edu_org_type&#39; | &#39;gender&#39; | &#39;home_tenancy&#39; | &#39;marital_status&#39; | &#39;medication_dosage_units&#39; | &#39;mode_of_study&#39; | &#39;pronouns&#39; | &#39;property_type&#39; | &#39;race_ethnicity&#39; | &#39;title&#39; | &#39;utility_service&#39;**]**Array<&#39;bank_acc_type&#39; &#124; &#39;comm_type&#39; &#124; &#39;country&#39; &#124; &#39;dl_group&#39; &#124; &#39;dl_issuing_authority&#39; &#124; &#39;edu_org_type&#39; &#124; &#39;gender&#39; &#124; &#39;home_tenancy&#39; &#124; &#39;marital_status&#39; &#124; &#39;medication_dosage_units&#39; &#124; &#39;mode_of_study&#39; &#124; &#39;pronouns&#39; &#124; &#39;property_type&#39; &#124; &#39;race_ethnicity&#39; &#124; &#39;title&#39; &#124; &#39;utility_service&#39; &#124; &#39;11184809&#39;>** | Supported validation lookup field. Only lookup datasets currently intended to provide useful values through the Validations API are exposed here. | defaults to undefined


### Return type

**LookupAllowedValuesResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Allowed lookup values. |  -  |
**400** | Invalid lookup field name or database error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getValidationMdsAllDatasetsAndFields**
> { [key: string]: Array<MdsAllDatasetWithFields>; } getValidationMdsAllDatasetsAndFields()

Returns all published datasets grouped dynamically by dataset status. Each dataset includes its PDS file type, derived deployment environment and extended information for its published fields.

### Example


```typescript
import { createConfiguration, ValidationsApi } from '';

const configuration = createConfiguration();
const apiInstance = new ValidationsApi(configuration);

const request = {};

const data = await apiInstance.getValidationMdsAllDatasetsAndFields(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**{ [key: string]: Array<MdsAllDatasetWithFields>; }**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Published datasets grouped by status with extended field and environment information. |  -  |
**400** | Database or processing error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getValidationMdsDatasetFieldTypes**
> { [key: string]: MdsFieldType; } getValidationMdsDatasetFieldTypes()

Returns an object keyed by field machine name containing the field name, display name and data type for fields belonging to the requested dataset.

### Example


```typescript
import { createConfiguration, ValidationsApi } from '';
import type { ValidationsApiGetValidationMdsDatasetFieldTypesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ValidationsApi(configuration);

const request: ValidationsApiGetValidationMdsDatasetFieldTypesRequest = {
    // MDS dataset machine name.
  dataset: "ds_employment",
};

const data = await apiInstance.getValidationMdsDatasetFieldTypes(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataset** | [**string**] | MDS dataset machine name. | defaults to undefined


### Return type

**{ [key: string]: MdsFieldType; }**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Field types keyed by field machine name. |  -  |
**400** | Invalid dataset name, database error or processing error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getValidationMdsDatasetFields**
> { [key: string]: MdsFieldDetails; } getValidationMdsDatasetFields()

Returns an object keyed by field machine name containing extended definitions for published fields belonging to the requested dataset.

### Example


```typescript
import { createConfiguration, ValidationsApi } from '';
import type { ValidationsApiGetValidationMdsDatasetFieldsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ValidationsApi(configuration);

const request: ValidationsApiGetValidationMdsDatasetFieldsRequest = {
    // MDS dataset machine name.
  dataset: "ds_employment",
};

const data = await apiInstance.getValidationMdsDatasetFields(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataset** | [**string**] | MDS dataset machine name. | defaults to undefined


### Return type

**{ [key: string]: MdsFieldDetails; }**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Full field definitions keyed by field machine name. |  -  |
**400** | Invalid dataset name, database error or processing error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getValidationMdsDatasets**
> Array<MdsDatasetSummary> getValidationMdsDatasets()

Returns published MDS datasets including their machine name, display name and status.

### Example


```typescript
import { createConfiguration, ValidationsApi } from '';

const configuration = createConfiguration();
const apiInstance = new ValidationsApi(configuration);

const request = {};

const data = await apiInstance.getValidationMdsDatasets(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<MdsDatasetSummary>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Published MDS datasets. |  -  |
**400** | Database or processing error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getValidationMdsDatasetsAndFields**
> { [key: string]: Array<MdsDatasetWithFields>; } getValidationMdsDatasetsAndFields()

Returns published datasets grouped dynamically by dataset status. Each dataset contains its machine name, display name, status, PDS file type and a map of published fields containing field name, display name and data type.

### Example


```typescript
import { createConfiguration, ValidationsApi } from '';

const configuration = createConfiguration();
const apiInstance = new ValidationsApi(configuration);

const request = {};

const data = await apiInstance.getValidationMdsDatasetsAndFields(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**{ [key: string]: Array<MdsDatasetWithFields>; }**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Published datasets grouped by status with basic field information. |  -  |
**400** | Database or processing error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getValidationMdsDatasetsByOneStatus**
> Array<MdsDatasetSummary> getValidationMdsDatasetsByOneStatus()

Returns published datasets matching the supplied dataset status.

### Example


```typescript
import { createConfiguration, ValidationsApi } from '';
import type { ValidationsApiGetValidationMdsDatasetsByOneStatusRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ValidationsApi(configuration);

const request: ValidationsApiGetValidationMdsDatasetsByOneStatusRequest = {
    // First MDS dataset status to include.
  status1: "Live",
};

const data = await apiInstance.getValidationMdsDatasetsByOneStatus(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status1** | [**&#39;Live&#39; | &#39;In Development&#39; | &#39;Implement&#39; | &#39;Hold&#39;**]**Array<&#39;Live&#39; &#124; &#39;In Development&#39; &#124; &#39;Implement&#39; &#124; &#39;Hold&#39; &#124; &#39;11184809&#39;>** | First MDS dataset status to include. | defaults to undefined


### Return type

**Array<MdsDatasetSummary>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Published datasets matching the supplied status. |  -  |
**400** | Invalid dataset status, database error or processing error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getValidationMdsDatasetsByThreeStatuses**
> Array<MdsDatasetSummary> getValidationMdsDatasetsByThreeStatuses()

Returns published datasets matching any of the supplied dataset statuses.

### Example


```typescript
import { createConfiguration, ValidationsApi } from '';
import type { ValidationsApiGetValidationMdsDatasetsByThreeStatusesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ValidationsApi(configuration);

const request: ValidationsApiGetValidationMdsDatasetsByThreeStatusesRequest = {
    // First MDS dataset status to include.
  status1: "Live",
    // Second MDS dataset status to include.
  status2: "Implement",
    // Third MDS dataset status to include.
  status3: "Hold",
};

const data = await apiInstance.getValidationMdsDatasetsByThreeStatuses(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status1** | [**&#39;Live&#39; | &#39;In Development&#39; | &#39;Implement&#39; | &#39;Hold&#39;**]**Array<&#39;Live&#39; &#124; &#39;In Development&#39; &#124; &#39;Implement&#39; &#124; &#39;Hold&#39; &#124; &#39;11184809&#39;>** | First MDS dataset status to include. | defaults to undefined
 **status2** | [**&#39;Live&#39; | &#39;In Development&#39; | &#39;Implement&#39; | &#39;Hold&#39;**]**Array<&#39;Live&#39; &#124; &#39;In Development&#39; &#124; &#39;Implement&#39; &#124; &#39;Hold&#39; &#124; &#39;11184809&#39;>** | Second MDS dataset status to include. | defaults to undefined
 **status3** | [**&#39;Live&#39; | &#39;In Development&#39; | &#39;Implement&#39; | &#39;Hold&#39;**]**Array<&#39;Live&#39; &#124; &#39;In Development&#39; &#124; &#39;Implement&#39; &#124; &#39;Hold&#39; &#124; &#39;11184809&#39;>** | Third MDS dataset status to include. | defaults to undefined


### Return type

**Array<MdsDatasetSummary>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Published datasets matching the supplied statuses. |  -  |
**400** | Invalid dataset status, database error or processing error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getValidationMdsDatasetsByTwoStatuses**
> Array<MdsDatasetSummary> getValidationMdsDatasetsByTwoStatuses()

Returns published datasets matching either of the supplied dataset statuses.

### Example


```typescript
import { createConfiguration, ValidationsApi } from '';
import type { ValidationsApiGetValidationMdsDatasetsByTwoStatusesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ValidationsApi(configuration);

const request: ValidationsApiGetValidationMdsDatasetsByTwoStatusesRequest = {
    // First MDS dataset status to include.
  status1: "Live",
    // Second MDS dataset status to include.
  status2: "Implement",
};

const data = await apiInstance.getValidationMdsDatasetsByTwoStatuses(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status1** | [**&#39;Live&#39; | &#39;In Development&#39; | &#39;Implement&#39; | &#39;Hold&#39;**]**Array<&#39;Live&#39; &#124; &#39;In Development&#39; &#124; &#39;Implement&#39; &#124; &#39;Hold&#39; &#124; &#39;11184809&#39;>** | First MDS dataset status to include. | defaults to undefined
 **status2** | [**&#39;Live&#39; | &#39;In Development&#39; | &#39;Implement&#39; | &#39;Hold&#39;**]**Array<&#39;Live&#39; &#124; &#39;In Development&#39; &#124; &#39;Implement&#39; &#124; &#39;Hold&#39; &#124; &#39;11184809&#39;>** | Second MDS dataset status to include. | defaults to undefined


### Return type

**Array<MdsDatasetSummary>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Published datasets matching the supplied statuses. |  -  |
**400** | Invalid dataset status, database error or processing error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getValidationMdsDatasetsByType**
> Array<MdsDatasetSummary> getValidationMdsDatasetsByType()

Returns published datasets belonging to the requested public dataset type. metadata is mapped internally to JSON and transactional is mapped internally to SQLite.

### Example


```typescript
import { createConfiguration, ValidationsApi } from '';
import type { ValidationsApiGetValidationMdsDatasetsByTypeRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ValidationsApi(configuration);

const request: ValidationsApiGetValidationMdsDatasetsByTypeRequest = {
    // Public dataset type. metadata maps to JSON-backed datasets and transactional maps to SQLite-backed datasets.
  type: "transactional",
};

const data = await apiInstance.getValidationMdsDatasetsByType(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | [**&#39;metadata&#39; | &#39;transactional&#39;**]**Array<&#39;metadata&#39; &#124; &#39;transactional&#39; &#124; &#39;11184809&#39;>** | Public dataset type. metadata maps to JSON-backed datasets and transactional maps to SQLite-backed datasets. | defaults to undefined


### Return type

**Array<MdsDatasetSummary>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Published datasets matching the supplied type. |  -  |
**400** | Invalid dataset type, database error or processing error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getValidationMdsFieldType**
> MdsFieldTypeResponse getValidationMdsFieldType()

Returns the field machine name, display name and data type for the requested MDS field.

### Example


```typescript
import { createConfiguration, ValidationsApi } from '';
import type { ValidationsApiGetValidationMdsFieldTypeRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ValidationsApi(configuration);

const request: ValidationsApiGetValidationMdsFieldTypeRequest = {
    // MDS field machine name.
  field: "field_country",
};

const data = await apiInstance.getValidationMdsFieldType(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **field** | [**string**] | MDS field machine name. | defaults to undefined


### Return type

**MdsFieldTypeResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Field name, display name and data type. |  -  |
**400** | Invalid field name, database error or processing error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getValidationMdsSummary**
> MdsSummaryResponse getValidationMdsSummary()

Returns counts of published datasets, published live datasets and published fields. The current API serializes these database count values as strings.

### Example


```typescript
import { createConfiguration, ValidationsApi } from '';

const configuration = createConfiguration();
const apiInstance = new ValidationsApi(configuration);

const request = {};

const data = await apiInstance.getValidationMdsSummary(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**MdsSummaryResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | MDS dataset and field count summary. |  -  |
**400** | Database or processing error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getValidationMtsFeatureByName**
> Array<MtsFeatureRecord> getValidationMtsFeatureByName()

Returns records whose feature_name matches the supplied feature name.

### Example


```typescript
import { createConfiguration, ValidationsApi } from '';
import type { ValidationsApiGetValidationMtsFeatureByNameRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ValidationsApi(configuration);

const request: ValidationsApiGetValidationMtsFeatureByNameRequest = {
    // Mydex Template System feature name. The endpoint matches this value against feature_name.
  feature: "View Measurements",
};

const data = await apiInstance.getValidationMtsFeatureByName(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **feature** | [**string**] | Mydex Template System feature name. The endpoint matches this value against feature_name. | defaults to undefined


### Return type

**Array<MtsFeatureRecord>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Matching feature records. |  -  |
**400** | Invalid feature name, database error or processing error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getValidationMtsFeatures**
> Array<MtsFeatureRecord> getValidationMtsFeatures()

Returns all Mydex Template System feature records.

### Example


```typescript
import { createConfiguration, ValidationsApi } from '';

const configuration = createConfiguration();
const apiInstance = new ValidationsApi(configuration);

const request = {};

const data = await apiInstance.getValidationMtsFeatures(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<MtsFeatureRecord>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | MTS feature records. |  -  |
**400** | Database or processing error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getValidationMtsFeaturesByGroup**
> Array<MtsFeatureRecord> getValidationMtsFeaturesByGroup()

Returns records whose feature_group matches the supplied feature group name.

### Example


```typescript
import { createConfiguration, ValidationsApi } from '';
import type { ValidationsApiGetValidationMtsFeaturesByGroupRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ValidationsApi(configuration);

const request: ValidationsApiGetValidationMtsFeaturesByGroupRequest = {
    // Mydex Template System feature group name. The endpoint matches this value against feature_group.
  group: "Measurements",
};

const data = await apiInstance.getValidationMtsFeaturesByGroup(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | [**string**] | Mydex Template System feature group name. The endpoint matches this value against feature_group. | defaults to undefined


### Return type

**Array<MtsFeatureRecord>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Features matching the supplied group. |  -  |
**400** | Invalid feature group name, database error or processing error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getValidationMtsTemplateByModule**
> Array<MtsTemplateRecord> getValidationMtsTemplateByModule()

Returns records whose template_name and module_name match the supplied values.

### Example


```typescript
import { createConfiguration, ValidationsApi } from '';
import type { ValidationsApiGetValidationMtsTemplateByModuleRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ValidationsApi(configuration);

const request: ValidationsApiGetValidationMtsTemplateByModuleRequest = {
    // Mydex Template System template name. The endpoint matches this value against template_name.
  template: "About Me",
    // Mydex Template System module name. The endpoint matches this value against module_name.
  module: "This is Me",
};

const data = await apiInstance.getValidationMtsTemplateByModule(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template** | [**string**] | Mydex Template System template name. The endpoint matches this value against template_name. | defaults to undefined
 **module** | [**string**] | Mydex Template System module name. The endpoint matches this value against module_name. | defaults to undefined


### Return type

**Array<MtsTemplateRecord>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Matching template-module records. |  -  |
**400** | Invalid template or module name, database error or processing error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getValidationMtsTemplateByName**
> Array<MtsTemplateRecord> getValidationMtsTemplateByName()

Returns records whose template_name matches the supplied template name.

### Example


```typescript
import { createConfiguration, ValidationsApi } from '';
import type { ValidationsApiGetValidationMtsTemplateByNameRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ValidationsApi(configuration);

const request: ValidationsApiGetValidationMtsTemplateByNameRequest = {
    // Mydex Template System template name. The endpoint matches this value against template_name.
  template: "About Me",
};

const data = await apiInstance.getValidationMtsTemplateByName(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template** | [**string**] | Mydex Template System template name. The endpoint matches this value against template_name. | defaults to undefined


### Return type

**Array<MtsTemplateRecord>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Matching template records. |  -  |
**400** | Invalid template name, database error or processing error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getValidationMtsTemplateBySubsection**
> Array<MtsTemplateRecord> getValidationMtsTemplateBySubsection()

Returns records whose template_name, module_name and module_subsection match the supplied values.

### Example


```typescript
import { createConfiguration, ValidationsApi } from '';
import type { ValidationsApiGetValidationMtsTemplateBySubsectionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ValidationsApi(configuration);

const request: ValidationsApiGetValidationMtsTemplateBySubsectionRequest = {
    // Mydex Template System template name. The endpoint matches this value against template_name.
  template: "About Me",
    // Mydex Template System module name. The endpoint matches this value against module_name.
  module: "This is Me",
    // Mydex Template System module subsection name. The endpoint matches this value against module_subsection.
  subsection: "Personal Details",
};

const data = await apiInstance.getValidationMtsTemplateBySubsection(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template** | [**string**] | Mydex Template System template name. The endpoint matches this value against template_name. | defaults to undefined
 **module** | [**string**] | Mydex Template System module name. The endpoint matches this value against module_name. | defaults to undefined
 **subsection** | [**string**] | Mydex Template System module subsection name. The endpoint matches this value against module_subsection. | defaults to undefined


### Return type

**Array<MtsTemplateRecord>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Matching template-subsection records. |  -  |
**400** | Invalid template, module or subsection name, database error or processing error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getValidationMtsTemplates**
> Array<MtsTemplateRecord> getValidationMtsTemplates()

Returns all records from the Mydex Template System templates_features table, including template, module, subsection and route information.

### Example


```typescript
import { createConfiguration, ValidationsApi } from '';

const configuration = createConfiguration();
const apiInstance = new ValidationsApi(configuration);

const request = {};

const data = await apiInstance.getValidationMtsTemplates(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<MtsTemplateRecord>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | MTS template records. |  -  |
**400** | Database or processing error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchValidationMdsFields**
> MdsFieldSearchResponse searchValidationMdsFields()

Searches published MDS field machine names for values containing the supplied search term.

### Example


```typescript
import { createConfiguration, ValidationsApi } from '';
import type { ValidationsApiSearchValidationMdsFieldsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ValidationsApi(configuration);

const request: ValidationsApiSearchValidationMdsFieldsRequest = {
    // Partial field machine name used to search published MDS fields.
  search: "birth",
};

const data = await apiInstance.searchValidationMdsFields(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | [**string**] | Partial field machine name used to search published MDS fields. | defaults to undefined


### Return type

**MdsFieldSearchResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Search term and matching field machine names. matching_fields is an empty string when no fields match. |  -  |
**400** | Database or processing error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **validateLookupValue**
> LookupValidationResponse validateLookupValue()

Checks whether the supplied value matches an allowed value associated with the requested lookup. Matching is case-insensitive because the endpoint converts both stored values and the supplied value to uppercase. The result is returned as the string true or false.

### Example


```typescript
import { createConfiguration, ValidationsApi } from '';
import type { ValidationsApiValidateLookupValueRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ValidationsApi(configuration);

const request: ValidationsApiValidateLookupValueRequest = {
    // Supported validation lookup field. Only lookup datasets currently intended to provide useful values through the Validations API are exposed here.
  fieldName: "gender",
    // Value to validate against the allowed values associated with the requested lookup.
  userInput: "Female",
};

const data = await apiInstance.validateLookupValue(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldName** | [**&#39;bank_acc_type&#39; | &#39;comm_type&#39; | &#39;country&#39; | &#39;dl_group&#39; | &#39;dl_issuing_authority&#39; | &#39;edu_org_type&#39; | &#39;gender&#39; | &#39;home_tenancy&#39; | &#39;marital_status&#39; | &#39;medication_dosage_units&#39; | &#39;mode_of_study&#39; | &#39;pronouns&#39; | &#39;property_type&#39; | &#39;race_ethnicity&#39; | &#39;title&#39; | &#39;utility_service&#39;**]**Array<&#39;bank_acc_type&#39; &#124; &#39;comm_type&#39; &#124; &#39;country&#39; &#124; &#39;dl_group&#39; &#124; &#39;dl_issuing_authority&#39; &#124; &#39;edu_org_type&#39; &#124; &#39;gender&#39; &#124; &#39;home_tenancy&#39; &#124; &#39;marital_status&#39; &#124; &#39;medication_dosage_units&#39; &#124; &#39;mode_of_study&#39; &#124; &#39;pronouns&#39; &#124; &#39;property_type&#39; &#124; &#39;race_ethnicity&#39; &#124; &#39;title&#39; &#124; &#39;utility_service&#39; &#124; &#39;11184809&#39;>** | Supported validation lookup field. Only lookup datasets currently intended to provide useful values through the Validations API are exposed here. | defaults to undefined
 **userInput** | [**string**] | Value to validate against the allowed values associated with the requested lookup. | defaults to undefined


### Return type

**LookupValidationResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Validation result. |  -  |
**400** | Invalid user input, invalid lookup field name or database error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


