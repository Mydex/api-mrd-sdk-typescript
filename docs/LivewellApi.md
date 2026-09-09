# .LivewellApi

All URIs are relative to *https://api-mrd.mydex.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLivewellLevelOne**](LivewellApi.md#getLivewellLevelOne) | **GET** /live-well/{param-1} | Retrieve a first-level Live Well page
[**getLivewellLevelThree**](LivewellApi.md#getLivewellLevelThree) | **GET** /live-well/{param-1}/{param-2}/{param-3} | Retrieve a third-level Live Well page
[**getLivewellLevelTwo**](LivewellApi.md#getLivewellLevelTwo) | **GET** /live-well/{param-1}/{param-2} | Retrieve a second-level Live Well page
[**getLivewellRoutes**](LivewellApi.md#getLivewellRoutes) | **GET** /live-well | Retrieve available Live Well routes
[**searchLivewell**](LivewellApi.md#searchLivewell) | **GET** /live-well/search | Search Live Well content


# **getLivewellLevelOne**
> GetLivewellLevelOne200Response getLivewellLevelOne()

Returns a first-level Live Well route. no_html removes HTML markup and nhs_links rewrites eligible MRD links to NHS website links. A route that does not exist returns an application-level not-found object with HTTP 200.

### Example


```typescript
import { createConfiguration, LivewellApi } from '';
import type { LivewellApiGetLivewellLevelOneRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LivewellApi(configuration);

const request: LivewellApiGetLivewellLevelOneRequest = {
    // MRD service scope required for Live Well endpoints.
  xMrdScopes: "live-well",
    // First Live Well route segment, normally identifying a top-level topic or category.
  param1: "eat-well",
    // Removes HTML markup from returned Live Well content. When supplied, this parameter must be set to \'true\'. (optional)
  noHtml: "true",
    // Replaces eligible MRD API links with their NHS website equivalents. When supplied, this parameter must be set to \'true\'. (optional)
  nhsLinks: "true",
};

const data = await apiInstance.getLivewellLevelOne(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;live-well&#39;**]**Array<&#39;live-well&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Live Well endpoints. | defaults to 'live-well'
 **param1** | [**string**] | First Live Well route segment, normally identifying a top-level topic or category. | defaults to undefined
 **noHtml** | [**&#39;true&#39;**]**Array<&#39;true&#39; &#124; &#39;11184809&#39;>** | Removes HTML markup from returned Live Well content. When supplied, this parameter must be set to \&#39;true\&#39;. | (optional) defaults to undefined
 **nhsLinks** | [**&#39;true&#39;**]**Array<&#39;true&#39; &#124; &#39;11184809&#39;>** | Replaces eligible MRD API links with their NHS website equivalents. When supplied, this parameter must be set to \&#39;true\&#39;. | (optional) defaults to undefined


### Return type

**GetLivewellLevelOne200Response**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Requested Live Well content or an application-level response indicating that the route does not exist. |  -  |
**400** | Invalid route, query parameters or database error. |  -  |
**401** | The OAuth access token is missing or invalid. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getLivewellLevelThree**
> GetLivewellLevelOne200Response getLivewellLevelThree()

Returns deeply nested Live Well content. The response uses the same flexible NHS page structure as first-level and second-level routes. A route that does not exist returns an application-level not-found object with HTTP 200.

### Example


```typescript
import { createConfiguration, LivewellApi } from '';
import type { LivewellApiGetLivewellLevelThreeRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LivewellApi(configuration);

const request: LivewellApiGetLivewellLevelThreeRequest = {
    // MRD service scope required for Live Well endpoints.
  xMrdScopes: "live-well",
    // First Live Well route segment, normally identifying a top-level topic or category.
  param1: "eat-well",
    // Second Live Well route segment, normally identifying a category or page within a top-level topic.
  param2: "food-types",
    // Third Live Well route segment, normally identifying a deeply nested page within a Live Well category.
  param3: "milk-and-dairy-nutrition",
    // Removes HTML markup from returned Live Well content. When supplied, this parameter must be set to \'true\'. (optional)
  noHtml: "true",
    // Replaces eligible MRD API links with their NHS website equivalents. When supplied, this parameter must be set to \'true\'. (optional)
  nhsLinks: "true",
};

const data = await apiInstance.getLivewellLevelThree(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;live-well&#39;**]**Array<&#39;live-well&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Live Well endpoints. | defaults to 'live-well'
 **param1** | [**string**] | First Live Well route segment, normally identifying a top-level topic or category. | defaults to undefined
 **param2** | [**string**] | Second Live Well route segment, normally identifying a category or page within a top-level topic. | defaults to undefined
 **param3** | [**string**] | Third Live Well route segment, normally identifying a deeply nested page within a Live Well category. | defaults to undefined
 **noHtml** | [**&#39;true&#39;**]**Array<&#39;true&#39; &#124; &#39;11184809&#39;>** | Removes HTML markup from returned Live Well content. When supplied, this parameter must be set to \&#39;true\&#39;. | (optional) defaults to undefined
 **nhsLinks** | [**&#39;true&#39;**]**Array<&#39;true&#39; &#124; &#39;11184809&#39;>** | Replaces eligible MRD API links with their NHS website equivalents. When supplied, this parameter must be set to \&#39;true\&#39;. | (optional) defaults to undefined


### Return type

**GetLivewellLevelOne200Response**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Requested Live Well content or an application-level response indicating that the route does not exist. |  -  |
**400** | Invalid route, query parameters or database error. |  -  |
**401** | The OAuth access token is missing or invalid. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getLivewellLevelTwo**
> GetLivewellLevelOne200Response getLivewellLevelTwo()

Returns a second-level page or category within a Live Well topic. HTML and link behaviour can be controlled using no_html and nhs_links. A route that does not exist returns an application-level not-found object with HTTP 200.

### Example


```typescript
import { createConfiguration, LivewellApi } from '';
import type { LivewellApiGetLivewellLevelTwoRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LivewellApi(configuration);

const request: LivewellApiGetLivewellLevelTwoRequest = {
    // MRD service scope required for Live Well endpoints.
  xMrdScopes: "live-well",
    // First Live Well route segment, normally identifying a top-level topic or category.
  param1: "eat-well",
    // Second Live Well route segment, normally identifying a category or page within a top-level topic.
  param2: "food-types",
    // Removes HTML markup from returned Live Well content. When supplied, this parameter must be set to \'true\'. (optional)
  noHtml: "true",
    // Replaces eligible MRD API links with their NHS website equivalents. When supplied, this parameter must be set to \'true\'. (optional)
  nhsLinks: "true",
};

const data = await apiInstance.getLivewellLevelTwo(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;live-well&#39;**]**Array<&#39;live-well&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Live Well endpoints. | defaults to 'live-well'
 **param1** | [**string**] | First Live Well route segment, normally identifying a top-level topic or category. | defaults to undefined
 **param2** | [**string**] | Second Live Well route segment, normally identifying a category or page within a top-level topic. | defaults to undefined
 **noHtml** | [**&#39;true&#39;**]**Array<&#39;true&#39; &#124; &#39;11184809&#39;>** | Removes HTML markup from returned Live Well content. When supplied, this parameter must be set to \&#39;true\&#39;. | (optional) defaults to undefined
 **nhsLinks** | [**&#39;true&#39;**]**Array<&#39;true&#39; &#124; &#39;11184809&#39;>** | Replaces eligible MRD API links with their NHS website equivalents. When supplied, this parameter must be set to \&#39;true\&#39;. | (optional) defaults to undefined


### Return type

**GetLivewellLevelOne200Response**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Requested Live Well content or an application-level response indicating that the route does not exist. |  -  |
**400** | Invalid route, query parameters or database error. |  -  |
**401** | The OAuth access token is missing or invalid. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getLivewellRoutes**
> LivewellRoutesResponse getLivewellRoutes()

Returns the available routes within the NHS Live Well dataset.

### Example


```typescript
import { createConfiguration, LivewellApi } from '';
import type { LivewellApiGetLivewellRoutesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LivewellApi(configuration);

const request: LivewellApiGetLivewellRoutesRequest = {
    // MRD service scope required for Live Well endpoints.
  xMrdScopes: "live-well",
};

const data = await apiInstance.getLivewellRoutes(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;live-well&#39;**]**Array<&#39;live-well&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Live Well endpoints. | defaults to 'live-well'


### Return type

**LivewellRoutesResponse**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Available Live Well routes. |  -  |
**400** | The route list could not be retrieved. |  -  |
**401** | The OAuth access token is missing or invalid. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchLivewell**
> Array<LivewellData> searchLivewell()

Searches the NHS Live Well dataset using structured filters. By default filters search page descriptions. When search_all is enabled, page-content text is also searched.

### Example


```typescript
import { createConfiguration, LivewellApi } from '';
import type { LivewellApiSearchLivewellRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LivewellApi(configuration);

const request: LivewellApiSearchLivewellRequest = {
    // MRD service scope required for Live Well endpoints.
  xMrdScopes: "live-well",
    // Structured Live Well search filters supplied using indexed bracket notation, for example filters[0][operator]=LIKE&filters[0][value]=healthy eating&filters[0][condition]=AND&filters[1][operator]=LIKE&filters[1][value]=diet&filters[1][condition]=. Each filter must contain exactly value, operator and condition.
  filters: [
    {
      value: "healthy eating",
      operator: "LIKE",
      condition: "",
    },
  ],
    // Removes HTML markup from returned Live Well content. When supplied, this parameter must be set to \'true\'. (optional)
  noHtml: "true",
    // Replaces eligible MRD API links with their NHS website equivalents. When supplied, this parameter must be set to \'true\'. (optional)
  nhsLinks: "true",
    // Extends Live Well search to page-content text in addition to the default page description. When supplied, this parameter must be set to \'true\'. This parameter is only valid on the search endpoint. (optional)
  searchAll: "true",
};

const data = await apiInstance.searchLivewell(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;live-well&#39;**]**Array<&#39;live-well&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Live Well endpoints. | defaults to 'live-well'
 **filters** | **Array&lt;LivewellSearchFilter&gt;** | Structured Live Well search filters supplied using indexed bracket notation, for example filters[0][operator]&#x3D;LIKE&amp;filters[0][value]&#x3D;healthy eating&amp;filters[0][condition]&#x3D;AND&amp;filters[1][operator]&#x3D;LIKE&amp;filters[1][value]&#x3D;diet&amp;filters[1][condition]&#x3D;. Each filter must contain exactly value, operator and condition. | defaults to undefined
 **noHtml** | [**&#39;true&#39;**]**Array<&#39;true&#39; &#124; &#39;11184809&#39;>** | Removes HTML markup from returned Live Well content. When supplied, this parameter must be set to \&#39;true\&#39;. | (optional) defaults to undefined
 **nhsLinks** | [**&#39;true&#39;**]**Array<&#39;true&#39; &#124; &#39;11184809&#39;>** | Replaces eligible MRD API links with their NHS website equivalents. When supplied, this parameter must be set to \&#39;true\&#39;. | (optional) defaults to undefined
 **searchAll** | [**&#39;true&#39;**]**Array<&#39;true&#39; &#124; &#39;11184809&#39;>** | Extends Live Well search to page-content text in addition to the default page description. When supplied, this parameter must be set to \&#39;true\&#39;. This parameter is only valid on the search endpoint. | (optional) defaults to undefined


### Return type

**Array<LivewellData>**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Live Well records matching the supplied search filters. An empty array is returned when no records match. |  -  |
**400** | Filters were missing or invalid, or a database error occurred. |  -  |
**401** | The OAuth access token is missing or invalid. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


