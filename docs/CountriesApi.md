# .CountriesApi

All URIs are relative to *https://api-mrd.mydex.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllCountries**](CountriesApi.md#getAllCountries) | **GET** /countries | Retrieve all countries
[**getCountryByCca2**](CountriesApi.md#getCountryByCca2) | **GET** /countries/{cca2} | Retrieve a country by CCA2 code


# **getAllCountries**
> GetAllCountries200Response getAllCountries()

Returns all available countries. Without filters, the model returns the complete country list inside an additional outer array. When filters are supplied, the response is the filtered country list directly.

### Example


```typescript
import { createConfiguration, CountriesApi } from '';
import type { CountriesApiGetAllCountriesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CountriesApi(configuration);

const request: CountriesApiGetAllCountriesRequest = {
    // MRD service scope required for Countries endpoints.
  xMrdScopes: "countries",
    // Country fields to include in the response. The API accepts comma-separated values such as filters=region,subregion,idd and PHP-style array values such as filters[]=capital&filters[]=maps. Duplicate filters are removed. (optional)
  filters: ["region","subregion","idd"],
};

const data = await apiInstance.getAllCountries(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;countries&#39;**]**Array<&#39;countries&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Countries endpoints. | defaults to 'countries'
 **filters** | **Array<&#39;cca2&#39; &#124; &#39;cca3&#39; &#124; &#39;ccn3&#39; &#124; &#39;flag&#39; &#124; &#39;status&#39; &#124; &#39;independent&#39; &#124; &#39;unMember&#39; &#124; &#39;region&#39; &#124; &#39;subregion&#39; &#124; &#39;landlocked&#39; &#124; &#39;area&#39; &#124; &#39;population&#39; &#124; &#39;fifa&#39; &#124; &#39;startOfWeek&#39; &#124; &#39;name&#39; &#124; &#39;maps&#39; &#124; &#39;flags&#39; &#124; &#39;coatOfArms&#39; &#124; &#39;capitalInfo&#39; &#124; &#39;postalCode&#39; &#124; &#39;capital&#39; &#124; &#39;altSpellings&#39; &#124; &#39;timezones&#39; &#124; &#39;continents&#39; &#124; &#39;languages&#39; &#124; &#39;currencies&#39; &#124; &#39;translations&#39; &#124; &#39;demonyms&#39; &#124; &#39;gini&#39; &#124; &#39;car&#39; &#124; &#39;idd&#39; &#124; &#39;11184809&#39;>** | Country fields to include in the response. The API accepts comma-separated values such as filters&#x3D;region,subregion,idd and PHP-style array values such as filters[]&#x3D;capital&amp;filters[]&#x3D;maps. Duplicate filters are removed. | (optional) defaults to undefined


### Return type

**GetAllCountries200Response**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Countries successfully retrieved. The response shape depends on whether filters were supplied. |  -  |
**400** | An unsupported filter was supplied, a database error occurred, or the Countries request could not be processed. |  -  |
**401** | Authentication or authorization failed. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCountryByCca2**
> GetCountryByCca2200Response getCountryByCca2()

Returns the country matching the supplied lookup value. The value is converted to uppercase before lookup. Without filters, a matching country is returned inside an array. With filters, the filtered country object is returned directly. An unknown value returns an empty array.

### Example


```typescript
import { createConfiguration, CountriesApi } from '';
import type { CountriesApiGetCountryByCca2Request } from '';

const configuration = createConfiguration();
const apiInstance = new CountriesApi(configuration);

const request: CountriesApiGetCountryByCca2Request = {
    // MRD service scope required for Countries endpoints.
  xMrdScopes: "countries",
    // Country CCA2 lookup value. The supplied value is converted to uppercase before the database lookup. For example, ad is looked up as AD.
  cca2: "ad",
    // Country fields to include in the response. The API accepts comma-separated values such as filters=region,subregion,idd and PHP-style array values such as filters[]=capital&filters[]=maps. Duplicate filters are removed. (optional)
  filters: ["region","subregion","idd"],
};

const data = await apiInstance.getCountryByCca2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;countries&#39;**]**Array<&#39;countries&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for Countries endpoints. | defaults to 'countries'
 **cca2** | [**string**] | Country CCA2 lookup value. The supplied value is converted to uppercase before the database lookup. For example, ad is looked up as AD. | defaults to undefined
 **filters** | **Array<&#39;cca2&#39; &#124; &#39;cca3&#39; &#124; &#39;ccn3&#39; &#124; &#39;flag&#39; &#124; &#39;status&#39; &#124; &#39;independent&#39; &#124; &#39;unMember&#39; &#124; &#39;region&#39; &#124; &#39;subregion&#39; &#124; &#39;landlocked&#39; &#124; &#39;area&#39; &#124; &#39;population&#39; &#124; &#39;fifa&#39; &#124; &#39;startOfWeek&#39; &#124; &#39;name&#39; &#124; &#39;maps&#39; &#124; &#39;flags&#39; &#124; &#39;coatOfArms&#39; &#124; &#39;capitalInfo&#39; &#124; &#39;postalCode&#39; &#124; &#39;capital&#39; &#124; &#39;altSpellings&#39; &#124; &#39;timezones&#39; &#124; &#39;continents&#39; &#124; &#39;languages&#39; &#124; &#39;currencies&#39; &#124; &#39;translations&#39; &#124; &#39;demonyms&#39; &#124; &#39;gini&#39; &#124; &#39;car&#39; &#124; &#39;idd&#39; &#124; &#39;11184809&#39;>** | Country fields to include in the response. The API accepts comma-separated values such as filters&#x3D;region,subregion,idd and PHP-style array values such as filters[]&#x3D;capital&amp;filters[]&#x3D;maps. Duplicate filters are removed. | (optional) defaults to undefined


### Return type

**GetCountryByCca2200Response**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Matching country, filtered country, or an empty array when no country matches. |  -  |
**400** | An unsupported filter was supplied, a database error occurred, or the Countries request could not be processed. |  -  |
**401** | Authentication or authorization failed. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


