# .MedicinesApi

All URIs are relative to *https://api-mrd.mydex.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMedicineLevelOne**](MedicinesApi.md#getMedicineLevelOne) | **GET** /medicines/{param1} | Retrieve a Medicine page
[**getMedicineLevelThree**](MedicinesApi.md#getMedicineLevelThree) | **GET** /medicines/{param1}/{param2}/{param3} | Retrieve a page within a nested Medicine
[**getMedicineLevelTwo**](MedicinesApi.md#getMedicineLevelTwo) | **GET** /medicines/{param1}/{param2} | Retrieve a Medicine subpage or nested medicine
[**getMedicinesRoutes**](MedicinesApi.md#getMedicinesRoutes) | **GET** /medicines | Retrieve available Medicines routes
[**searchMedicines**](MedicinesApi.md#searchMedicines) | **GET** /medicines/search | Search Medicines content


# **getMedicineLevelOne**
> GetMedicineLevelOne200Response getMedicineLevelOne()

Returns a first-level Medicines page. HTML content is returned by default. no_html removes markup, while nhs_links rewrites eligible MRD links to NHS website links. A route that does not exist returns an application-level not-found object with HTTP 200.

### Example


```typescript
import { createConfiguration, MedicinesApi } from '';
import type { MedicinesApiGetMedicineLevelOneRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MedicinesApi(configuration);

const request: MedicinesApiGetMedicineLevelOneRequest = {
    // MRD service scope required for Medicines endpoints.
  xMrdScopes: "medicines",
    // First Medicines route segment, normally identifying a medicine, medicine category or medicine family.
  param1: "insulin",
    // When supplied, removes HTML markup from content text. The only accepted value is \'true\'. Omit the parameter to leave HTML unchanged. (optional)
  noHtml: "true",
    // When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \'true\'. Omit the parameter to leave links in their default form. (optional)
  nhsLinks: "true",
};

const data = await apiInstance.getMedicineLevelOne(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;medicines&#39;**]**Array<&#39;medicines&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Medicines endpoints. | defaults to 'medicines'
 **param1** | [**string**] | First Medicines route segment, normally identifying a medicine, medicine category or medicine family. | defaults to undefined
 **noHtml** | [**&#39;true&#39;**]**Array<&#39;true&#39; &#124; &#39;11184809&#39;>** | When supplied, removes HTML markup from content text. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave HTML unchanged. | (optional) defaults to undefined
 **nhsLinks** | [**&#39;true&#39;**]**Array<&#39;true&#39; &#124; &#39;11184809&#39;>** | When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form. | (optional) defaults to undefined


### Return type

**GetMedicineLevelOne200Response**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Requested Medicine content or an application-level response indicating that the route does not exist. |  -  |
**400** | Query parameters were invalid or a database error occurred. |  -  |
**401** | The OAuth access token is missing or invalid. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getMedicineLevelThree**
> GetMedicineLevelOne200Response getMedicineLevelThree()

Returns a third-level Medicines route. These responses use the same flexible NHS page structure as other Medicines routes and may include nested question and answer content. A route that does not exist returns an application-level not-found object with HTTP 200.

### Example


```typescript
import { createConfiguration, MedicinesApi } from '';
import type { MedicinesApiGetMedicineLevelThreeRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MedicinesApi(configuration);

const request: MedicinesApiGetMedicineLevelThreeRequest = {
    // MRD service scope required for Medicines endpoints.
  xMrdScopes: "medicines",
    // First Medicines route segment, normally identifying a medicine, medicine category or medicine family.
  param1: "insulin",
    // Second Medicines route segment, normally identifying a medicine page or a medicine within a broader medicine family.
  param2: "rapid-acting-insulin",
    // Third Medicines route segment identifying a page within a nested medicine, such as common questions, dosage, side effects or interactions.
  param3: "common-questions-about-rapid-acting-insulin",
    // When supplied, removes HTML markup from content text. The only accepted value is \'true\'. Omit the parameter to leave HTML unchanged. (optional)
  noHtml: "true",
    // When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \'true\'. Omit the parameter to leave links in their default form. (optional)
  nhsLinks: "true",
};

const data = await apiInstance.getMedicineLevelThree(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;medicines&#39;**]**Array<&#39;medicines&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Medicines endpoints. | defaults to 'medicines'
 **param1** | [**string**] | First Medicines route segment, normally identifying a medicine, medicine category or medicine family. | defaults to undefined
 **param2** | [**string**] | Second Medicines route segment, normally identifying a medicine page or a medicine within a broader medicine family. | defaults to undefined
 **param3** | [**string**] | Third Medicines route segment identifying a page within a nested medicine, such as common questions, dosage, side effects or interactions. | defaults to undefined
 **noHtml** | [**&#39;true&#39;**]**Array<&#39;true&#39; &#124; &#39;11184809&#39;>** | When supplied, removes HTML markup from content text. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave HTML unchanged. | (optional) defaults to undefined
 **nhsLinks** | [**&#39;true&#39;**]**Array<&#39;true&#39; &#124; &#39;11184809&#39;>** | When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form. | (optional) defaults to undefined


### Return type

**GetMedicineLevelOne200Response**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Requested Medicine content or an application-level response indicating that the route does not exist. |  -  |
**400** | Query parameters were invalid or a database error occurred. |  -  |
**401** | The OAuth access token is missing or invalid. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getMedicineLevelTwo**
> GetMedicineLevelOne200Response getMedicineLevelTwo()

Returns a specific page within a medicine, or a medicine nested within a broader medicine family. HTML and link behaviour can be controlled using no_html and nhs_links. A route that does not exist returns an application-level not-found object with HTTP 200.

### Example


```typescript
import { createConfiguration, MedicinesApi } from '';
import type { MedicinesApiGetMedicineLevelTwoRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MedicinesApi(configuration);

const request: MedicinesApiGetMedicineLevelTwoRequest = {
    // MRD service scope required for Medicines endpoints.
  xMrdScopes: "medicines",
    // First Medicines route segment, normally identifying a medicine, medicine category or medicine family.
  param1: "insulin",
    // Second Medicines route segment, normally identifying a medicine page or a medicine within a broader medicine family.
  param2: "rapid-acting-insulin",
    // When supplied, removes HTML markup from content text. The only accepted value is \'true\'. Omit the parameter to leave HTML unchanged. (optional)
  noHtml: "true",
    // When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \'true\'. Omit the parameter to leave links in their default form. (optional)
  nhsLinks: "true",
};

const data = await apiInstance.getMedicineLevelTwo(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;medicines&#39;**]**Array<&#39;medicines&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Medicines endpoints. | defaults to 'medicines'
 **param1** | [**string**] | First Medicines route segment, normally identifying a medicine, medicine category or medicine family. | defaults to undefined
 **param2** | [**string**] | Second Medicines route segment, normally identifying a medicine page or a medicine within a broader medicine family. | defaults to undefined
 **noHtml** | [**&#39;true&#39;**]**Array<&#39;true&#39; &#124; &#39;11184809&#39;>** | When supplied, removes HTML markup from content text. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave HTML unchanged. | (optional) defaults to undefined
 **nhsLinks** | [**&#39;true&#39;**]**Array<&#39;true&#39; &#124; &#39;11184809&#39;>** | When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form. | (optional) defaults to undefined


### Return type

**GetMedicineLevelOne200Response**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Requested Medicine content or an application-level response indicating that the route does not exist. |  -  |
**400** | Query parameters were invalid or a database error occurred. |  -  |
**401** | The OAuth access token is missing or invalid. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getMedicinesRoutes**
> MedicinesRoutesResponse getMedicinesRoutes()

Returns the available routes within the NHS Medicines dataset.

### Example


```typescript
import { createConfiguration, MedicinesApi } from '';
import type { MedicinesApiGetMedicinesRoutesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MedicinesApi(configuration);

const request: MedicinesApiGetMedicinesRoutesRequest = {
    // MRD service scope required for Medicines endpoints.
  xMrdScopes: "medicines",
};

const data = await apiInstance.getMedicinesRoutes(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;medicines&#39;**]**Array<&#39;medicines&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Medicines endpoints. | defaults to 'medicines'


### Return type

**MedicinesRoutesResponse**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Available Medicines routes. |  -  |
**400** | The route list could not be retrieved. |  -  |
**401** | The OAuth access token is missing or invalid. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchMedicines**
> Array<MedicineData> searchMedicines()

Searches the NHS Medicines dataset using structured filters. By default filters search medicine descriptions. When search_all is enabled, additional searchable page content is included. no_html and nhs_links control content and link formatting.

### Example


```typescript
import { createConfiguration, MedicinesApi } from '';
import type { MedicinesApiSearchMedicinesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MedicinesApi(configuration);

const request: MedicinesApiSearchMedicinesRequest = {
    // MRD service scope required for Medicines endpoints.
  xMrdScopes: "medicines",
    // Structured Medicines search filters supplied using indexed bracket notation, for example filters[0][operator]=LIKE&filters[0][value]=rapid acting insulin&filters[0][condition]=AND&filters[1][operator]=LIKE&filters[1][value]=diabetes&filters[1][condition]=. Each filter must contain exactly value, operator and condition.
  filters: [
    {
      value: "rapid acting insulin",
      operator: "LIKE",
      condition: "",
    },
  ],
    // When supplied, removes HTML markup from content text. The only accepted value is \'true\'. Omit the parameter to leave HTML unchanged. (optional)
  noHtml: "true",
    // When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \'true\'. Omit the parameter to leave links in their default form. (optional)
  nhsLinks: "true",
    // When supplied, the search also checks additional Medicines page content in addition to medicine descriptions. The only accepted value is \'true\'. This parameter is only valid on the search endpoint. (optional)
  searchAll: "true",
};

const data = await apiInstance.searchMedicines(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;medicines&#39;**]**Array<&#39;medicines&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Medicines endpoints. | defaults to 'medicines'
 **filters** | **Array&lt;MedicinesSearchFilter&gt;** | Structured Medicines search filters supplied using indexed bracket notation, for example filters[0][operator]&#x3D;LIKE&amp;filters[0][value]&#x3D;rapid acting insulin&amp;filters[0][condition]&#x3D;AND&amp;filters[1][operator]&#x3D;LIKE&amp;filters[1][value]&#x3D;diabetes&amp;filters[1][condition]&#x3D;. Each filter must contain exactly value, operator and condition. | defaults to undefined
 **noHtml** | [**&#39;true&#39;**]**Array<&#39;true&#39; &#124; &#39;11184809&#39;>** | When supplied, removes HTML markup from content text. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave HTML unchanged. | (optional) defaults to undefined
 **nhsLinks** | [**&#39;true&#39;**]**Array<&#39;true&#39; &#124; &#39;11184809&#39;>** | When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form. | (optional) defaults to undefined
 **searchAll** | [**&#39;true&#39;**]**Array<&#39;true&#39; &#124; &#39;11184809&#39;>** | When supplied, the search also checks additional Medicines page content in addition to medicine descriptions. The only accepted value is \&#39;true\&#39;. This parameter is only valid on the search endpoint. | (optional) defaults to undefined


### Return type

**Array<MedicineData>**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Medicine records matching the supplied search filters. |  -  |
**400** | Filters or query parameters were missing or invalid, or a database error occurred. |  -  |
**401** | The OAuth access token is missing or invalid. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


