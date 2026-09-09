# .MentalHealthApi

All URIs are relative to *https://api-mrd.mydex.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMentalHealthLevelFour**](MentalHealthApi.md#getMentalHealthLevelFour) | **GET** /mental-health/{param1}/{param2}/{param3}/{param4} | Retrieve deeply nested Mental Health content
[**getMentalHealthLevelOne**](MentalHealthApi.md#getMentalHealthLevelOne) | **GET** /mental-health/{param1} | Retrieve a Mental Health page
[**getMentalHealthLevelThree**](MentalHealthApi.md#getMentalHealthLevelThree) | **GET** /mental-health/{param1}/{param2}/{param3} | Retrieve nested Mental Health content
[**getMentalHealthLevelTwo**](MentalHealthApi.md#getMentalHealthLevelTwo) | **GET** /mental-health/{param1}/{param2} | Retrieve a Mental Health subcategory
[**getMentalHealthRoutes**](MentalHealthApi.md#getMentalHealthRoutes) | **GET** /mental-health | Retrieve available Mental Health routes
[**searchMentalHealth**](MentalHealthApi.md#searchMentalHealth) | **GET** /mental-health/search | Search Mental Health content


# **getMentalHealthLevelFour**
> GetMentalHealthLevelOne200Response getMentalHealthLevelFour()

Returns a fourth-level Mental Health route. no_html=true removes HTML markup and nhs_links=true rewrites eligible MRD API links to NHS website links. A route that does not exist returns an application-level not-found object with HTTP 200.

### Example


```typescript
import { createConfiguration, MentalHealthApi } from '';
import type { MentalHealthApiGetMentalHealthLevelFourRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MentalHealthApi(configuration);

const request: MentalHealthApiGetMentalHealthLevelFourRequest = {
    // MRD service scope required for Mental Health endpoints.
  xMrdScopes: "mental-health",
    // First Mental Health route segment, normally identifying a Mental Health topic, category or section.
  param1: "feelings-symptoms-behaviours",
    // Second Mental Health route segment, normally identifying a category or page within a Mental Health topic.
  param2: "feelings-and-symptoms",
    // Third Mental Health route segment identifying a nested Mental Health page.
  param3: "stress",
    // Fourth Mental Health route segment identifying deeply nested Mental Health content.
  param4: "getting-help",
    // When supplied, removes HTML markup from returned Mental Health content. The only accepted value is \'true\'. Omit the parameter to retain HTML. (optional)
  noHtml: "true",
    // When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \'true\'. Omit the parameter to leave links in their default form. (optional)
  nhsLinks: "true",
};

const data = await apiInstance.getMentalHealthLevelFour(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;mental-health&#39;**]**Array<&#39;mental-health&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Mental Health endpoints. | defaults to 'mental-health'
 **param1** | [**string**] | First Mental Health route segment, normally identifying a Mental Health topic, category or section. | defaults to undefined
 **param2** | [**string**] | Second Mental Health route segment, normally identifying a category or page within a Mental Health topic. | defaults to undefined
 **param3** | [**string**] | Third Mental Health route segment identifying a nested Mental Health page. | defaults to undefined
 **param4** | [**string**] | Fourth Mental Health route segment identifying deeply nested Mental Health content. | defaults to undefined
 **noHtml** | [**&#39;true&#39;**]**Array<&#39;true&#39; &#124; &#39;11184809&#39;>** | When supplied, removes HTML markup from returned Mental Health content. The only accepted value is \&#39;true\&#39;. Omit the parameter to retain HTML. | (optional) defaults to undefined
 **nhsLinks** | [**&#39;true&#39;**]**Array<&#39;true&#39; &#124; &#39;11184809&#39;>** | When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form. | (optional) defaults to undefined


### Return type

**GetMentalHealthLevelOne200Response**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Requested Mental Health content or an application-level response indicating that the route does not exist. |  -  |
**400** | Query parameters were invalid or a database error occurred. |  -  |
**401** | The OAuth access token is missing or invalid. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getMentalHealthLevelOne**
> GetMentalHealthLevelOne200Response getMentalHealthLevelOne()

Returns a first-level Mental Health route. no_html=true removes HTML markup and nhs_links=true rewrites eligible MRD API links to NHS website links. A route that does not exist returns an application-level not-found object with HTTP 200.

### Example


```typescript
import { createConfiguration, MentalHealthApi } from '';
import type { MentalHealthApiGetMentalHealthLevelOneRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MentalHealthApi(configuration);

const request: MentalHealthApiGetMentalHealthLevelOneRequest = {
    // MRD service scope required for Mental Health endpoints.
  xMrdScopes: "mental-health",
    // First Mental Health route segment, normally identifying a Mental Health topic, category or section.
  param1: "feelings-symptoms-behaviours",
    // When supplied, removes HTML markup from returned Mental Health content. The only accepted value is \'true\'. Omit the parameter to retain HTML. (optional)
  noHtml: "true",
    // When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \'true\'. Omit the parameter to leave links in their default form. (optional)
  nhsLinks: "true",
};

const data = await apiInstance.getMentalHealthLevelOne(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;mental-health&#39;**]**Array<&#39;mental-health&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Mental Health endpoints. | defaults to 'mental-health'
 **param1** | [**string**] | First Mental Health route segment, normally identifying a Mental Health topic, category or section. | defaults to undefined
 **noHtml** | [**&#39;true&#39;**]**Array<&#39;true&#39; &#124; &#39;11184809&#39;>** | When supplied, removes HTML markup from returned Mental Health content. The only accepted value is \&#39;true\&#39;. Omit the parameter to retain HTML. | (optional) defaults to undefined
 **nhsLinks** | [**&#39;true&#39;**]**Array<&#39;true&#39; &#124; &#39;11184809&#39;>** | When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form. | (optional) defaults to undefined


### Return type

**GetMentalHealthLevelOne200Response**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Requested Mental Health content or an application-level response indicating that the route does not exist. |  -  |
**400** | Query parameters were invalid or a database error occurred. |  -  |
**401** | The OAuth access token is missing or invalid. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getMentalHealthLevelThree**
> GetMentalHealthLevelOne200Response getMentalHealthLevelThree()

Returns a third-level Mental Health page. no_html=true removes HTML markup and nhs_links=true rewrites eligible MRD API links to NHS website links. A route that does not exist returns an application-level not-found object with HTTP 200.

### Example


```typescript
import { createConfiguration, MentalHealthApi } from '';
import type { MentalHealthApiGetMentalHealthLevelThreeRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MentalHealthApi(configuration);

const request: MentalHealthApiGetMentalHealthLevelThreeRequest = {
    // MRD service scope required for Mental Health endpoints.
  xMrdScopes: "mental-health",
    // First Mental Health route segment, normally identifying a Mental Health topic, category or section.
  param1: "feelings-symptoms-behaviours",
    // Second Mental Health route segment, normally identifying a category or page within a Mental Health topic.
  param2: "feelings-and-symptoms",
    // Third Mental Health route segment identifying a nested Mental Health page.
  param3: "stress",
    // When supplied, removes HTML markup from returned Mental Health content. The only accepted value is \'true\'. Omit the parameter to retain HTML. (optional)
  noHtml: "true",
    // When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \'true\'. Omit the parameter to leave links in their default form. (optional)
  nhsLinks: "true",
};

const data = await apiInstance.getMentalHealthLevelThree(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;mental-health&#39;**]**Array<&#39;mental-health&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Mental Health endpoints. | defaults to 'mental-health'
 **param1** | [**string**] | First Mental Health route segment, normally identifying a Mental Health topic, category or section. | defaults to undefined
 **param2** | [**string**] | Second Mental Health route segment, normally identifying a category or page within a Mental Health topic. | defaults to undefined
 **param3** | [**string**] | Third Mental Health route segment identifying a nested Mental Health page. | defaults to undefined
 **noHtml** | [**&#39;true&#39;**]**Array<&#39;true&#39; &#124; &#39;11184809&#39;>** | When supplied, removes HTML markup from returned Mental Health content. The only accepted value is \&#39;true\&#39;. Omit the parameter to retain HTML. | (optional) defaults to undefined
 **nhsLinks** | [**&#39;true&#39;**]**Array<&#39;true&#39; &#124; &#39;11184809&#39;>** | When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form. | (optional) defaults to undefined


### Return type

**GetMentalHealthLevelOne200Response**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Requested Mental Health content or an application-level response indicating that the route does not exist. |  -  |
**400** | Query parameters were invalid or a database error occurred. |  -  |
**401** | The OAuth access token is missing or invalid. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getMentalHealthLevelTwo**
> GetMentalHealthLevelOne200Response getMentalHealthLevelTwo()

Returns a second-level Mental Health route. no_html=true removes HTML markup and nhs_links=true rewrites eligible MRD API links to NHS website links. A route that does not exist returns an application-level not-found object with HTTP 200.

### Example


```typescript
import { createConfiguration, MentalHealthApi } from '';
import type { MentalHealthApiGetMentalHealthLevelTwoRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MentalHealthApi(configuration);

const request: MentalHealthApiGetMentalHealthLevelTwoRequest = {
    // MRD service scope required for Mental Health endpoints.
  xMrdScopes: "mental-health",
    // First Mental Health route segment, normally identifying a Mental Health topic, category or section.
  param1: "feelings-symptoms-behaviours",
    // Second Mental Health route segment, normally identifying a category or page within a Mental Health topic.
  param2: "feelings-and-symptoms",
    // When supplied, removes HTML markup from returned Mental Health content. The only accepted value is \'true\'. Omit the parameter to retain HTML. (optional)
  noHtml: "true",
    // When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \'true\'. Omit the parameter to leave links in their default form. (optional)
  nhsLinks: "true",
};

const data = await apiInstance.getMentalHealthLevelTwo(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;mental-health&#39;**]**Array<&#39;mental-health&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Mental Health endpoints. | defaults to 'mental-health'
 **param1** | [**string**] | First Mental Health route segment, normally identifying a Mental Health topic, category or section. | defaults to undefined
 **param2** | [**string**] | Second Mental Health route segment, normally identifying a category or page within a Mental Health topic. | defaults to undefined
 **noHtml** | [**&#39;true&#39;**]**Array<&#39;true&#39; &#124; &#39;11184809&#39;>** | When supplied, removes HTML markup from returned Mental Health content. The only accepted value is \&#39;true\&#39;. Omit the parameter to retain HTML. | (optional) defaults to undefined
 **nhsLinks** | [**&#39;true&#39;**]**Array<&#39;true&#39; &#124; &#39;11184809&#39;>** | When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form. | (optional) defaults to undefined


### Return type

**GetMentalHealthLevelOne200Response**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Requested Mental Health content or an application-level response indicating that the route does not exist. |  -  |
**400** | Query parameters were invalid or a database error occurred. |  -  |
**401** | The OAuth access token is missing or invalid. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getMentalHealthRoutes**
> MentalHealthRoutesResponse getMentalHealthRoutes()

Returns the available routes within the NHS Mental Health dataset.

### Example


```typescript
import { createConfiguration, MentalHealthApi } from '';
import type { MentalHealthApiGetMentalHealthRoutesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MentalHealthApi(configuration);

const request: MentalHealthApiGetMentalHealthRoutesRequest = {
    // MRD service scope required for Mental Health endpoints.
  xMrdScopes: "mental-health",
};

const data = await apiInstance.getMentalHealthRoutes(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;mental-health&#39;**]**Array<&#39;mental-health&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Mental Health endpoints. | defaults to 'mental-health'


### Return type

**MentalHealthRoutesResponse**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Available Mental Health routes. |  -  |
**400** | The route list could not be retrieved. |  -  |
**401** | The OAuth access token is missing or invalid. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchMentalHealth**
> Array<MentalHealthData> searchMentalHealth()

Searches the NHS Mental Health dataset using structured filters. By default filters search the page description. search_all=true additionally searches page-content text and expander-group content.

### Example


```typescript
import { createConfiguration, MentalHealthApi } from '';
import type { MentalHealthApiSearchMentalHealthRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MentalHealthApi(configuration);

const request: MentalHealthApiSearchMentalHealthRequest = {
    // MRD service scope required for Mental Health endpoints.
  xMrdScopes: "mental-health",
    // Structured Mental Health search filters supplied using indexed bracket notation, for example filters[0][value]=depression&filters[0][operator]=LIKE&filters[0][condition]=. Each filter must contain value, operator and condition. By default the search checks the page description. search_all=true additionally searches page-content text and expander-group content.
  filters: [
    {
      value: "depression",
      operator: "LIKE",
      condition: "",
    },
  ],
    // When supplied, removes HTML markup from returned Mental Health content. The only accepted value is \'true\'. Omit the parameter to retain HTML. (optional)
  noHtml: "true",
    // When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \'true\'. Omit the parameter to leave links in their default form. (optional)
  nhsLinks: "true",
    // When supplied, the search also checks page-content text and expander-group content in addition to the page description. The only accepted value is \'true\'. This parameter is only valid on the search endpoint. (optional)
  searchAll: "true",
};

const data = await apiInstance.searchMentalHealth(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;mental-health&#39;**]**Array<&#39;mental-health&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Mental Health endpoints. | defaults to 'mental-health'
 **filters** | **Array&lt;MentalHealthSearchFilter&gt;** | Structured Mental Health search filters supplied using indexed bracket notation, for example filters[0][value]&#x3D;depression&amp;filters[0][operator]&#x3D;LIKE&amp;filters[0][condition]&#x3D;. Each filter must contain value, operator and condition. By default the search checks the page description. search_all&#x3D;true additionally searches page-content text and expander-group content. | defaults to undefined
 **noHtml** | [**&#39;true&#39;**]**Array<&#39;true&#39; &#124; &#39;11184809&#39;>** | When supplied, removes HTML markup from returned Mental Health content. The only accepted value is \&#39;true\&#39;. Omit the parameter to retain HTML. | (optional) defaults to undefined
 **nhsLinks** | [**&#39;true&#39;**]**Array<&#39;true&#39; &#124; &#39;11184809&#39;>** | When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form. | (optional) defaults to undefined
 **searchAll** | [**&#39;true&#39;**]**Array<&#39;true&#39; &#124; &#39;11184809&#39;>** | When supplied, the search also checks page-content text and expander-group content in addition to the page description. The only accepted value is \&#39;true\&#39;. This parameter is only valid on the search endpoint. | (optional) defaults to undefined


### Return type

**Array<MentalHealthData>**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Mental Health records matching the supplied search filters. An empty array is returned when no records match. |  -  |
**400** | Filters or query parameters were missing or invalid, or a database error occurred. |  -  |
**401** | The OAuth access token is missing or invalid. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


