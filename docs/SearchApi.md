# .SearchApi

All URIs are relative to *https://api-mrd.mydex.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchMrd**](SearchApi.md#searchMrd) | **GET** /search | Search MRD content


# **searchMrd**
> SearchMrd200Response searchMrd()

Searches indexed MRD content using structured filters. Filter 0 must contain a keyword. Searchable fields are keyword and page description, using either = or LIKE. Indexed filters can be connected using AND, OR, NOT or AND NOT, with NOT converted internally to AND NOT. Results are restricted according to the MRD scopes authorised for the request. By default results are paginated. Supplying the all query parameter disables pagination regardless of the parameter value.

### Example


```typescript
import { createConfiguration, SearchApi } from '';
import type { SearchApiSearchMrdRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SearchApi(configuration);

const request: SearchApiSearchMrdRequest = {
    // MRD service scope or scopes to include in global search. Supply one or more OAuth-authorised MRD service scopes, comma-delimited or space-delimited.
  xMrdScopes: "aliss,conditions",
    // Structured Search filters supplied using indexed bracket notation. Filter 0 must contain keyword, operator and condition. Additional filters must contain operator and condition and may contain keyword, description or both. For example: filters[0][operator]=LIKE&filters[0][keyword]=smoking&filters[0][condition]=AND&filters[1][operator]=LIKE&filters[1][description]=electronic cigarette&filters[1][condition]=. The final filter should normally use an empty condition.
  filters: [
    {
      keyword: "smoking",
      description: "electronic cigarette",
      operator: "LIKE",
      condition: "",
    },
  ],
    // Page number used when pagination is enabled. The value is cast to an integer by the current implementation. If the resulting value is below 1, page 1 is used. The default is 1. (optional)
  page: 1,
    // Disables pagination when this query parameter is present. The current implementation checks only whether the parameter exists; its value is ignored. all=true, all=false and an empty all parameter all enable unpaginated results. Omit the parameter to use pagination. (optional)
  all: "true",
    // Requested number of results per page when pagination is enabled. The value is cast to an integer. Values above 100 are reduced to 100. The default is 50. (optional)
  limit: 50,
};

const data = await apiInstance.searchMrd(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**string**] | MRD service scope or scopes to include in global search. Supply one or more OAuth-authorised MRD service scopes, comma-delimited or space-delimited. | defaults to 'aliss'
 **filters** | **Array&lt;SearchFilter&gt;** | Structured Search filters supplied using indexed bracket notation. Filter 0 must contain keyword, operator and condition. Additional filters must contain operator and condition and may contain keyword, description or both. For example: filters[0][operator]&#x3D;LIKE&amp;filters[0][keyword]&#x3D;smoking&amp;filters[0][condition]&#x3D;AND&amp;filters[1][operator]&#x3D;LIKE&amp;filters[1][description]&#x3D;electronic cigarette&amp;filters[1][condition]&#x3D;. The final filter should normally use an empty condition. | defaults to undefined
 **page** | [**number**] | Page number used when pagination is enabled. The value is cast to an integer by the current implementation. If the resulting value is below 1, page 1 is used. The default is 1. | (optional) defaults to 1
 **all** | [**string**] | Disables pagination when this query parameter is present. The current implementation checks only whether the parameter exists; its value is ignored. all&#x3D;true, all&#x3D;false and an empty all parameter all enable unpaginated results. Omit the parameter to use pagination. | (optional) defaults to undefined
 **limit** | [**number**] | Requested number of results per page when pagination is enabled. The value is cast to an integer. Values above 100 are reduced to 100. The default is 50. | (optional) defaults to 50


### Return type

**SearchMrd200Response**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Paginated search results, unpaginated search results, or an application-level search error. |  -  |
**401** | Authentication failed because the Bearer token is missing, invalid or expired. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


