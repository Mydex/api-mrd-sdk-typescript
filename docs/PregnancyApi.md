# .PregnancyApi

All URIs are relative to *https://api-mrd.mydex.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPregnancyLevelOne**](PregnancyApi.md#getPregnancyLevelOne) | **GET** /pregnancy/{param1} | Retrieve a Pregnancy page
[**getPregnancyLevelThree**](PregnancyApi.md#getPregnancyLevelThree) | **GET** /pregnancy/{param1}/{param2}/{param3} | Retrieve deeply nested Pregnancy content
[**getPregnancyLevelTwo**](PregnancyApi.md#getPregnancyLevelTwo) | **GET** /pregnancy/{param1}/{param2} | Retrieve a Pregnancy subpage
[**getPregnancyRoutes**](PregnancyApi.md#getPregnancyRoutes) | **GET** /pregnancy | Retrieve available Pregnancy routes
[**searchPregnancy**](PregnancyApi.md#searchPregnancy) | **GET** /pregnancy/search | Search Pregnancy content


# **getPregnancyLevelOne**
> GetPregnancyLevelOne200Response getPregnancyLevelOne()

Returns a first-level Pregnancy route. no_html=true removes HTML markup, while nhs_links=true rewrites eligible MRD API URLs to NHS website URLs. A route that does not exist returns an application-level not-found object with HTTP 200.

### Example


```typescript
import { createConfiguration, PregnancyApi } from '';
import type { PregnancyApiGetPregnancyLevelOneRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PregnancyApi(configuration);

const request: PregnancyApiGetPregnancyLevelOneRequest = {
    // MRD service scope required for Pregnancy endpoints.
  xMrdScopes: "pregnancy",
    // First Pregnancy route segment, normally identifying a Pregnancy topic, category or section.
  param1: "keeping-well",
    // When supplied, removes HTML markup from returned Pregnancy content. The only accepted value is \'true\'. Omit the parameter to retain HTML. (optional)
  noHtml: "true",
    // When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \'true\'. Omit the parameter to leave links in their default form. (optional)
  nhsLinks: "true",
};

const data = await apiInstance.getPregnancyLevelOne(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;pregnancy&#39;**]**Array<&#39;pregnancy&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Pregnancy endpoints. | defaults to 'pregnancy'
 **param1** | [**string**] | First Pregnancy route segment, normally identifying a Pregnancy topic, category or section. | defaults to undefined
 **noHtml** | [**&#39;true&#39;**]**Array<&#39;true&#39; &#124; &#39;11184809&#39;>** | When supplied, removes HTML markup from returned Pregnancy content. The only accepted value is \&#39;true\&#39;. Omit the parameter to retain HTML. | (optional) defaults to undefined
 **nhsLinks** | [**&#39;true&#39;**]**Array<&#39;true&#39; &#124; &#39;11184809&#39;>** | When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form. | (optional) defaults to undefined


### Return type

**GetPregnancyLevelOne200Response**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Requested Pregnancy content or an application-level response indicating that the route does not exist. |  -  |
**400** | Query parameters were invalid or a database error occurred. |  -  |
**401** | The OAuth access token is missing or invalid. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPregnancyLevelThree**
> GetPregnancyLevelOne200Response getPregnancyLevelThree()

Returns a third-level Pregnancy route. no_html=true removes HTML markup, while nhs_links=true rewrites eligible MRD API URLs to NHS website URLs. A route that does not exist returns an application-level not-found object with HTTP 200.

### Example


```typescript
import { createConfiguration, PregnancyApi } from '';
import type { PregnancyApiGetPregnancyLevelThreeRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PregnancyApi(configuration);

const request: PregnancyApiGetPregnancyLevelThreeRequest = {
    // MRD service scope required for Pregnancy endpoints.
  xMrdScopes: "pregnancy",
    // First Pregnancy route segment, normally identifying a Pregnancy topic, category or section.
  param1: "keeping-well",
    // Second Pregnancy route segment, normally identifying a page within a Pregnancy topic.
  param2: "pregnancy-and-covid-19",
    // Third Pregnancy route segment identifying a deeply nested Pregnancy page, such as a specific pregnancy week or page within a nested category.
  param3: "4-weeks",
    // When supplied, removes HTML markup from returned Pregnancy content. The only accepted value is \'true\'. Omit the parameter to retain HTML. (optional)
  noHtml: "true",
    // When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \'true\'. Omit the parameter to leave links in their default form. (optional)
  nhsLinks: "true",
};

const data = await apiInstance.getPregnancyLevelThree(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;pregnancy&#39;**]**Array<&#39;pregnancy&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Pregnancy endpoints. | defaults to 'pregnancy'
 **param1** | [**string**] | First Pregnancy route segment, normally identifying a Pregnancy topic, category or section. | defaults to undefined
 **param2** | [**string**] | Second Pregnancy route segment, normally identifying a page within a Pregnancy topic. | defaults to undefined
 **param3** | [**string**] | Third Pregnancy route segment identifying a deeply nested Pregnancy page, such as a specific pregnancy week or page within a nested category. | defaults to undefined
 **noHtml** | [**&#39;true&#39;**]**Array<&#39;true&#39; &#124; &#39;11184809&#39;>** | When supplied, removes HTML markup from returned Pregnancy content. The only accepted value is \&#39;true\&#39;. Omit the parameter to retain HTML. | (optional) defaults to undefined
 **nhsLinks** | [**&#39;true&#39;**]**Array<&#39;true&#39; &#124; &#39;11184809&#39;>** | When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form. | (optional) defaults to undefined


### Return type

**GetPregnancyLevelOne200Response**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Requested Pregnancy content or an application-level response indicating that the route does not exist. |  -  |
**400** | Query parameters were invalid or a database error occurred. |  -  |
**401** | The OAuth access token is missing or invalid. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPregnancyLevelTwo**
> GetPregnancyLevelOne200Response getPregnancyLevelTwo()

Returns a second-level page within a Pregnancy topic. no_html=true removes HTML markup, while nhs_links=true rewrites eligible MRD API URLs to NHS website URLs. A route that does not exist returns an application-level not-found object with HTTP 200.

### Example


```typescript
import { createConfiguration, PregnancyApi } from '';
import type { PregnancyApiGetPregnancyLevelTwoRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PregnancyApi(configuration);

const request: PregnancyApiGetPregnancyLevelTwoRequest = {
    // MRD service scope required for Pregnancy endpoints.
  xMrdScopes: "pregnancy",
    // First Pregnancy route segment, normally identifying a Pregnancy topic, category or section.
  param1: "keeping-well",
    // Second Pregnancy route segment, normally identifying a page within a Pregnancy topic.
  param2: "pregnancy-and-covid-19",
    // When supplied, removes HTML markup from returned Pregnancy content. The only accepted value is \'true\'. Omit the parameter to retain HTML. (optional)
  noHtml: "true",
    // When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \'true\'. Omit the parameter to leave links in their default form. (optional)
  nhsLinks: "true",
};

const data = await apiInstance.getPregnancyLevelTwo(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;pregnancy&#39;**]**Array<&#39;pregnancy&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Pregnancy endpoints. | defaults to 'pregnancy'
 **param1** | [**string**] | First Pregnancy route segment, normally identifying a Pregnancy topic, category or section. | defaults to undefined
 **param2** | [**string**] | Second Pregnancy route segment, normally identifying a page within a Pregnancy topic. | defaults to undefined
 **noHtml** | [**&#39;true&#39;**]**Array<&#39;true&#39; &#124; &#39;11184809&#39;>** | When supplied, removes HTML markup from returned Pregnancy content. The only accepted value is \&#39;true\&#39;. Omit the parameter to retain HTML. | (optional) defaults to undefined
 **nhsLinks** | [**&#39;true&#39;**]**Array<&#39;true&#39; &#124; &#39;11184809&#39;>** | When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form. | (optional) defaults to undefined


### Return type

**GetPregnancyLevelOne200Response**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Requested Pregnancy content or an application-level response indicating that the route does not exist. |  -  |
**400** | Query parameters were invalid or a database error occurred. |  -  |
**401** | The OAuth access token is missing or invalid. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPregnancyRoutes**
> PregnancyRoutesResponse getPregnancyRoutes()

Returns the available routes within the NHS Pregnancy dataset.

### Example


```typescript
import { createConfiguration, PregnancyApi } from '';
import type { PregnancyApiGetPregnancyRoutesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PregnancyApi(configuration);

const request: PregnancyApiGetPregnancyRoutesRequest = {
    // MRD service scope required for Pregnancy endpoints.
  xMrdScopes: "pregnancy",
};

const data = await apiInstance.getPregnancyRoutes(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;pregnancy&#39;**]**Array<&#39;pregnancy&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Pregnancy endpoints. | defaults to 'pregnancy'


### Return type

**PregnancyRoutesResponse**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Available Pregnancy routes. |  -  |
**400** | The route list could not be retrieved. |  -  |
**401** | The OAuth access token is missing or invalid. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchPregnancy**
> Array<PregnancyData> searchPregnancy()

Searches the NHS Pregnancy dataset using structured filters. By default each filter searches the page description. When search_all=true, the search additionally checks page-content text and expander-group content. no_html removes HTML markup from returned content and nhs_links rewrites eligible MRD API links to NHS website links.

### Example


```typescript
import { createConfiguration, PregnancyApi } from '';
import type { PregnancyApiSearchPregnancyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PregnancyApi(configuration);

const request: PregnancyApiSearchPregnancyRequest = {
    // MRD service scope required for Pregnancy endpoints.
  xMrdScopes: "pregnancy",
    // Structured Pregnancy search filters supplied using indexed bracket notation, for example filters[0][value]=antenatal appointments&filters[0][operator]=LIKE&filters[0][condition]=. Each filter must contain exactly value, operator and condition.
  filters: [
    {
      value: "antenatal appointments",
      operator: "LIKE",
      condition: "",
    },
  ],
    // When supplied, removes HTML markup from returned Pregnancy content. The only accepted value is \'true\'. Omit the parameter to retain HTML. (optional)
  noHtml: "true",
    // When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \'true\'. Omit the parameter to leave links in their default form. (optional)
  nhsLinks: "true",
    // When supplied, the search also checks Pregnancy page-content text and expander-group content in addition to the page description. The only accepted value is \'true\'. This parameter is only valid on the search endpoint. (optional)
  searchAll: "true",
};

const data = await apiInstance.searchPregnancy(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;pregnancy&#39;**]**Array<&#39;pregnancy&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Pregnancy endpoints. | defaults to 'pregnancy'
 **filters** | **Array&lt;PregnancySearchFilter&gt;** | Structured Pregnancy search filters supplied using indexed bracket notation, for example filters[0][value]&#x3D;antenatal appointments&amp;filters[0][operator]&#x3D;LIKE&amp;filters[0][condition]&#x3D;. Each filter must contain exactly value, operator and condition. | defaults to undefined
 **noHtml** | [**&#39;true&#39;**]**Array<&#39;true&#39; &#124; &#39;11184809&#39;>** | When supplied, removes HTML markup from returned Pregnancy content. The only accepted value is \&#39;true\&#39;. Omit the parameter to retain HTML. | (optional) defaults to undefined
 **nhsLinks** | [**&#39;true&#39;**]**Array<&#39;true&#39; &#124; &#39;11184809&#39;>** | When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form. | (optional) defaults to undefined
 **searchAll** | [**&#39;true&#39;**]**Array<&#39;true&#39; &#124; &#39;11184809&#39;>** | When supplied, the search also checks Pregnancy page-content text and expander-group content in addition to the page description. The only accepted value is \&#39;true\&#39;. This parameter is only valid on the search endpoint. | (optional) defaults to undefined


### Return type

**Array<PregnancyData>**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pregnancy records matching the supplied search filters. An empty array is returned when no records match. |  -  |
**400** | Filters or query parameters were missing or invalid, or a database error occurred. |  -  |
**401** | The OAuth access token is missing or invalid. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


