# .ConditionsApi

All URIs are relative to *https://api-mrd.mydex.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getConditionLevelOne**](ConditionsApi.md#getConditionLevelOne) | **GET** /conditions/{param1} | Retrieve a first-level Conditions page
[**getConditionLevelThree**](ConditionsApi.md#getConditionLevelThree) | **GET** /conditions/{param1}/{param2}/{param3} | Retrieve a third-level Conditions page
[**getConditionLevelTwo**](ConditionsApi.md#getConditionLevelTwo) | **GET** /conditions/{param1}/{param2} | Retrieve a second-level Conditions page
[**getConditionRoutes**](ConditionsApi.md#getConditionRoutes) | **GET** /conditions | Retrieve available Conditions routes
[**searchConditions**](ConditionsApi.md#searchConditions) | **GET** /conditions/search | Search Conditions content


# **getConditionLevelOne**
> ConditionResponse getConditionLevelOne()

Returns a Conditions page identified by one route segment. The response may contain HTML by default. Use no_html to return processed plain text and nhs_links to return eligible original NHS URLs.

### Example


```typescript
import { createConfiguration, ConditionsApi } from '';
import type { ConditionsApiGetConditionLevelOneRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConditionsApi(configuration);

const request: ConditionsApiGetConditionLevelOneRequest = {
    // MRD service scope required for Conditions endpoints.
  xMrdScopes: "conditions",
    // First Conditions route segment.
  param1: "adhd-adults",
    // Removes HTML markup from returned content. When supplied, this parameter must be set to \'true\'. (optional)
  noHtml: "true",
    // Replaces eligible MRD URLs with their NHS website equivalents. When supplied, this parameter must be set to \'true\'. (optional)
  nhsLinks: "true",
};

const data = await apiInstance.getConditionLevelOne(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;conditions&#39;**]**Array<&#39;conditions&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Conditions endpoints. | defaults to 'conditions'
 **param1** | [**string**] | First Conditions route segment. | defaults to undefined
 **noHtml** | [**&#39;true&#39;**]**Array<&#39;true&#39; &#124; &#39;11184809&#39;>** | Removes HTML markup from returned content. When supplied, this parameter must be set to \&#39;true\&#39;. | (optional) defaults to undefined
 **nhsLinks** | [**&#39;true&#39;**]**Array<&#39;true&#39; &#124; &#39;11184809&#39;>** | Replaces eligible MRD URLs with their NHS website equivalents. When supplied, this parameter must be set to \&#39;true\&#39;. | (optional) defaults to undefined


### Return type

**ConditionResponse**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Requested first-level Conditions page. |  -  |
**400** | The route or query parameters were invalid. |  -  |
**401** | The OAuth access token is missing or invalid. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getConditionLevelThree**
> ConditionResponse getConditionLevelThree()

Returns a Conditions page identified by three route segments. Responses may contain recursively nested web-page elements and video objects.

### Example


```typescript
import { createConfiguration, ConditionsApi } from '';
import type { ConditionsApiGetConditionLevelThreeRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConditionsApi(configuration);

const request: ConditionsApiGetConditionLevelThreeRequest = {
    // MRD service scope required for Conditions endpoints.
  xMrdScopes: "conditions",
    // First Conditions route segment.
  param1: "adhd-adults",
    // Second Conditions route segment.
  param2: "help-and-support",
    // Third Conditions route segment.
  param3: "help-for-families",
    // Removes HTML markup from returned content. When supplied, this parameter must be set to \'true\'. (optional)
  noHtml: "true",
    // Replaces eligible MRD URLs with their NHS website equivalents. When supplied, this parameter must be set to \'true\'. (optional)
  nhsLinks: "true",
};

const data = await apiInstance.getConditionLevelThree(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;conditions&#39;**]**Array<&#39;conditions&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Conditions endpoints. | defaults to 'conditions'
 **param1** | [**string**] | First Conditions route segment. | defaults to undefined
 **param2** | [**string**] | Second Conditions route segment. | defaults to undefined
 **param3** | [**string**] | Third Conditions route segment. | defaults to undefined
 **noHtml** | [**&#39;true&#39;**]**Array<&#39;true&#39; &#124; &#39;11184809&#39;>** | Removes HTML markup from returned content. When supplied, this parameter must be set to \&#39;true\&#39;. | (optional) defaults to undefined
 **nhsLinks** | [**&#39;true&#39;**]**Array<&#39;true&#39; &#124; &#39;11184809&#39;>** | Replaces eligible MRD URLs with their NHS website equivalents. When supplied, this parameter must be set to \&#39;true\&#39;. | (optional) defaults to undefined


### Return type

**ConditionResponse**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Requested third-level Conditions page. |  -  |
**400** | The route or query parameters were invalid. |  -  |
**401** | The OAuth access token is missing or invalid. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getConditionLevelTwo**
> ConditionResponse getConditionLevelTwo()

Returns a Conditions page identified by two route segments. The no_html and nhs_links parameters can be used separately or together.

### Example


```typescript
import { createConfiguration, ConditionsApi } from '';
import type { ConditionsApiGetConditionLevelTwoRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConditionsApi(configuration);

const request: ConditionsApiGetConditionLevelTwoRequest = {
    // MRD service scope required for Conditions endpoints.
  xMrdScopes: "conditions",
    // First Conditions route segment.
  param1: "adhd-adults",
    // Second Conditions route segment.
  param2: "help-and-support",
    // Removes HTML markup from returned content. When supplied, this parameter must be set to \'true\'. (optional)
  noHtml: "true",
    // Replaces eligible MRD URLs with their NHS website equivalents. When supplied, this parameter must be set to \'true\'. (optional)
  nhsLinks: "true",
};

const data = await apiInstance.getConditionLevelTwo(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;conditions&#39;**]**Array<&#39;conditions&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Conditions endpoints. | defaults to 'conditions'
 **param1** | [**string**] | First Conditions route segment. | defaults to undefined
 **param2** | [**string**] | Second Conditions route segment. | defaults to undefined
 **noHtml** | [**&#39;true&#39;**]**Array<&#39;true&#39; &#124; &#39;11184809&#39;>** | Removes HTML markup from returned content. When supplied, this parameter must be set to \&#39;true\&#39;. | (optional) defaults to undefined
 **nhsLinks** | [**&#39;true&#39;**]**Array<&#39;true&#39; &#124; &#39;11184809&#39;>** | Replaces eligible MRD URLs with their NHS website equivalents. When supplied, this parameter must be set to \&#39;true\&#39;. | (optional) defaults to undefined


### Return type

**ConditionResponse**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Requested second-level Conditions page. |  -  |
**400** | The route or query parameters were invalid. |  -  |
**401** | The OAuth access token is missing or invalid. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getConditionRoutes**
> ConditionsRouteListResponse getConditionRoutes()

Returns absolute URLs for the routes available in the NHS Conditions dataset.

### Example


```typescript
import { createConfiguration, ConditionsApi } from '';
import type { ConditionsApiGetConditionRoutesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConditionsApi(configuration);

const request: ConditionsApiGetConditionRoutesRequest = {
    // MRD service scope required for Conditions endpoints.
  xMrdScopes: "conditions",
};

const data = await apiInstance.getConditionRoutes(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;conditions&#39;**]**Array<&#39;conditions&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Conditions endpoints. | defaults to 'conditions'


### Return type

**ConditionsRouteListResponse**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Available Conditions routes. |  -  |
**400** | The route list could not be retrieved. |  -  |
**401** | The OAuth access token is missing or invalid. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchConditions**
> ConditionsSearchResponse searchConditions()

Searches the NHS Conditions dataset. By default the search is performed against page descriptions. When search_all is enabled, page text and expander content are also searched. The no_html option removes HTML from textual content and nhs_links changes eligible MRD URLs to original NHS URLs.

### Example


```typescript
import { createConfiguration, ConditionsApi } from '';
import type { ConditionsApiSearchConditionsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConditionsApi(configuration);

const request: ConditionsApiSearchConditionsRequest = {
    // MRD service scope required for Conditions endpoints.
  xMrdScopes: "conditions",
    // Structured Conditions search filters supplied using indexed bracket notation, for example filters[0][operator]=LIKE&filters[0][value]=cancer&filters[0][condition]=AND&filters[1][operator]=LIKE&filters[1][value]=treatment&filters[1][condition]=. Each filter must contain exactly value, operator and condition.
  filters: [
    {
      value: "cancer",
      operator: "LIKE",
      condition: "AND",
    },
  ],
    // Removes HTML markup from returned content. When supplied, this parameter must be set to \'true\'. (optional)
  noHtml: "true",
    // Replaces eligible MRD URLs with their NHS website equivalents. When supplied, this parameter must be set to \'true\'. (optional)
  nhsLinks: "true",
    // Extends Conditions search to page-content text and expander content in addition to the default page description. When supplied, this parameter must be set to \'true\'. This parameter is only valid on the search endpoint. (optional)
  searchAll: "true",
};

const data = await apiInstance.searchConditions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;conditions&#39;**]**Array<&#39;conditions&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Conditions endpoints. | defaults to 'conditions'
 **filters** | **Array&lt;ConditionSearchFilter&gt;** | Structured Conditions search filters supplied using indexed bracket notation, for example filters[0][operator]&#x3D;LIKE&amp;filters[0][value]&#x3D;cancer&amp;filters[0][condition]&#x3D;AND&amp;filters[1][operator]&#x3D;LIKE&amp;filters[1][value]&#x3D;treatment&amp;filters[1][condition]&#x3D;. Each filter must contain exactly value, operator and condition. | defaults to undefined
 **noHtml** | [**&#39;true&#39;**]**Array<&#39;true&#39; &#124; &#39;11184809&#39;>** | Removes HTML markup from returned content. When supplied, this parameter must be set to \&#39;true\&#39;. | (optional) defaults to undefined
 **nhsLinks** | [**&#39;true&#39;**]**Array<&#39;true&#39; &#124; &#39;11184809&#39;>** | Replaces eligible MRD URLs with their NHS website equivalents. When supplied, this parameter must be set to \&#39;true\&#39;. | (optional) defaults to undefined
 **searchAll** | [**&#39;true&#39;**]**Array<&#39;true&#39; &#124; &#39;11184809&#39;>** | Extends Conditions search to page-content text and expander content in addition to the default page description. When supplied, this parameter must be set to \&#39;true\&#39;. This parameter is only valid on the search endpoint. | (optional) defaults to undefined


### Return type

**ConditionsSearchResponse**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Conditions matching the supplied search filters. |  -  |
**400** | The search parameters were missing or invalid. |  -  |
**401** | The OAuth access token is missing or invalid. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


