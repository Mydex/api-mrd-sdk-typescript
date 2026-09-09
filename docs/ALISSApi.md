# .ALISSApi

All URIs are relative to *https://api-mrd.mydex.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**countAlissServices**](ALISSApi.md#countAlissServices) | **GET** /aliss/get-services/search/count | Count matching ALISS services
[**getAlissAccessibilityFeatures**](ALISSApi.md#getAlissAccessibilityFeatures) | **GET** /aliss/accessibility-features | Retrieve ALISS accessibility features
[**getAlissCategories**](ALISSApi.md#getAlissCategories) | **GET** /aliss/categories | Retrieve ALISS categories
[**getAlissCommunityGroups**](ALISSApi.md#getAlissCommunityGroups) | **GET** /aliss/community-groups | Retrieve ALISS community groups
[**getAlissOrganisations**](ALISSApi.md#getAlissOrganisations) | **GET** /aliss/organisations | Retrieve ALISS organisations
[**getAlissServiceAreas**](ALISSApi.md#getAlissServiceAreas) | **GET** /aliss/service-areas | Retrieve ALISS service areas
[**getAlissServicesByIds**](ALISSApi.md#getAlissServicesByIds) | **GET** /aliss/get-services/{service-ids} | Retrieve ALISS services by ID
[**searchAlissServices**](ALISSApi.md#searchAlissServices) | **GET** /aliss/get-services/search | Search ALISS services


# **countAlissServices**
> Array<AlissServiceCount> countAlissServices()

Returns the number of distinct ALISS services matching the supplied structured filters.

### Example


```typescript
import { createConfiguration, ALISSApi } from '';
import type { ALISSApiCountAlissServicesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ALISSApi(configuration);

const request: ALISSApiCountAlissServicesRequest = {
    // MRD service scope required for ALISS endpoints.
  xMrdScopes: "aliss",
    // Structured filters used to search ALISS services. Supported datasets are services, organisations, categories, service_areas, locations, accessibility_features and community_groups. Each filter requires field, value and operator. Every filter except the final filter must also contain condition. (optional)
  filters: {
    services: [
      {
        field: "name",
        value: "Community Support",
        operator: "LIKE",
        condition: "AND",
      },
    ],
    organisations: [
      {
        field: "name",
        value: "Example Organisation",
        operator: "LIKE",
        condition: "AND",
      },
    ],
    categories: [
      {
        field: "slug",
        value: "health-and-wellbeing",
        operator: "=",
        condition: "AND",
      },
    ],
    serviceAreas: [
      {
        field: "code",
        value: "S12000036",
        operator: "=",
        condition: "AND",
      },
    ],
    locations: [
      {
        field: "postal_code",
        value: "EH1 1AA",
        operator: "LIKE",
        condition: "AND",
      },
    ],
    accessibilityFeatures: [
      {
        field: "slug",
        value: "wheelchair-access",
        operator: "=",
        condition: "AND",
      },
    ],
    communityGroups: [
      {
        field: "slug",
        value: "older-people",
        operator: "=",
        condition: "OR",
      },
    ],
  },
};

const data = await apiInstance.countAlissServices(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;aliss&#39;**]**Array<&#39;aliss&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for ALISS endpoints. | defaults to 'aliss'
 **filters** | **SearchAlissServicesFiltersParameter** | Structured filters used to search ALISS services. Supported datasets are services, organisations, categories, service_areas, locations, accessibility_features and community_groups. Each filter requires field, value and operator. Every filter except the final filter must also contain condition. | (optional) defaults to undefined


### Return type

**Array<AlissServiceCount>**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Number of matching services. |  -  |
**400** | Invalid request or database error. |  -  |
**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAlissAccessibilityFeatures**
> Array<AlissNamedSlugItem> getAlissAccessibilityFeatures()


### Example


```typescript
import { createConfiguration, ALISSApi } from '';
import type { ALISSApiGetAlissAccessibilityFeaturesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ALISSApi(configuration);

const request: ALISSApiGetAlissAccessibilityFeaturesRequest = {
    // MRD service scope required for ALISS endpoints.
  xMrdScopes: "aliss",
};

const data = await apiInstance.getAlissAccessibilityFeatures(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;aliss&#39;**]**Array<&#39;aliss&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for ALISS endpoints. | defaults to 'aliss'


### Return type

**Array<AlissNamedSlugItem>**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ALISS accessibility features. |  -  |
**400** | Database error. |  -  |
**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAlissCategories**
> Array<AlissNamedSlugItem> getAlissCategories()


### Example


```typescript
import { createConfiguration, ALISSApi } from '';
import type { ALISSApiGetAlissCategoriesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ALISSApi(configuration);

const request: ALISSApiGetAlissCategoriesRequest = {
    // MRD service scope required for ALISS endpoints.
  xMrdScopes: "aliss",
};

const data = await apiInstance.getAlissCategories(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;aliss&#39;**]**Array<&#39;aliss&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for ALISS endpoints. | defaults to 'aliss'


### Return type

**Array<AlissNamedSlugItem>**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ALISS categories. |  -  |
**400** | Database error. |  -  |
**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAlissCommunityGroups**
> Array<AlissNamedSlugItem> getAlissCommunityGroups()


### Example


```typescript
import { createConfiguration, ALISSApi } from '';
import type { ALISSApiGetAlissCommunityGroupsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ALISSApi(configuration);

const request: ALISSApiGetAlissCommunityGroupsRequest = {
    // MRD service scope required for ALISS endpoints.
  xMrdScopes: "aliss",
};

const data = await apiInstance.getAlissCommunityGroups(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;aliss&#39;**]**Array<&#39;aliss&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for ALISS endpoints. | defaults to 'aliss'


### Return type

**Array<AlissNamedSlugItem>**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ALISS community groups. |  -  |
**400** | Database error. |  -  |
**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAlissOrganisations**
> Array<AlissNamedSlugItem> getAlissOrganisations()


### Example


```typescript
import { createConfiguration, ALISSApi } from '';
import type { ALISSApiGetAlissOrganisationsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ALISSApi(configuration);

const request: ALISSApiGetAlissOrganisationsRequest = {
    // MRD service scope required for ALISS endpoints.
  xMrdScopes: "aliss",
};

const data = await apiInstance.getAlissOrganisations(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;aliss&#39;**]**Array<&#39;aliss&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for ALISS endpoints. | defaults to 'aliss'


### Return type

**Array<AlissNamedSlugItem>**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ALISS organisations. |  -  |
**400** | Database error. |  -  |
**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAlissServiceAreas**
> Array<AlissServiceAreaReference> getAlissServiceAreas()


### Example


```typescript
import { createConfiguration, ALISSApi } from '';
import type { ALISSApiGetAlissServiceAreasRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ALISSApi(configuration);

const request: ALISSApiGetAlissServiceAreasRequest = {
    // MRD service scope required for ALISS endpoints.
  xMrdScopes: "aliss",
};

const data = await apiInstance.getAlissServiceAreas(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;aliss&#39;**]**Array<&#39;aliss&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for ALISS endpoints. | defaults to 'aliss'


### Return type

**Array<AlissServiceAreaReference>**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ALISS service areas. |  -  |
**400** | Database error. |  -  |
**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAlissServicesByIds**
> Array<AlissService> getAlissServicesByIds()

Retrieves one or more services using a comma-separated list of service IDs.

### Example


```typescript
import { createConfiguration, ALISSApi } from '';
import type { ALISSApiGetAlissServicesByIdsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ALISSApi(configuration);

const request: ALISSApiGetAlissServicesByIdsRequest = {
    // MRD service scope required for ALISS endpoints.
  xMrdScopes: "aliss",
    // One or more comma-separated ALISS service IDs.
  serviceIds: "123,456",
    // Field used to order matching services. (optional)
  orderBy: "services.name",
    // Direction used to order matching services. (optional)
  order: "ASC",
    // Controls whether GeoJSON is included with service-area data. The API accepts true or false case-insensitively. (optional)
  geojson: false,
    // Response format. (optional)
  format: "JSON",
};

const data = await apiInstance.getAlissServicesByIds(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;aliss&#39;**]**Array<&#39;aliss&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for ALISS endpoints. | defaults to 'aliss'
 **serviceIds** | [**string**] | One or more comma-separated ALISS service IDs. | defaults to undefined
 **orderBy** | [**&#39;services.id&#39; | &#39;services.name&#39; | &#39;organisations.name&#39;**]**Array<&#39;services.id&#39; &#124; &#39;services.name&#39; &#124; &#39;organisations.name&#39; &#124; &#39;11184809&#39;>** | Field used to order matching services. | (optional) defaults to 'services.id'
 **order** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39; &#124; &#39;11184809&#39;>** | Direction used to order matching services. | (optional) defaults to 'ASC'
 **geojson** | [**boolean**] | Controls whether GeoJSON is included with service-area data. The API accepts true or false case-insensitively. | (optional) defaults to false
 **format** | [**&#39;JSON&#39; | &#39;XML&#39;**]**Array<&#39;JSON&#39; &#124; &#39;XML&#39; &#124; &#39;11184809&#39;>** | Response format. | (optional) defaults to 'JSON'


### Return type

**Array<AlissService>**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Requested ALISS services. |  -  |
**400** | Invalid request or database error. |  -  |
**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchAlissServices**
> Array<AlissService> searchAlissServices()

Searches ALISS services using structured filters, ordering and keyset pagination.

### Example


```typescript
import { createConfiguration, ALISSApi } from '';
import type { ALISSApiSearchAlissServicesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ALISSApi(configuration);

const request: ALISSApiSearchAlissServicesRequest = {
    // MRD service scope required for ALISS endpoints.
  xMrdScopes: "aliss",
    // Structured filters used to search ALISS services. Supported datasets are services, organisations, categories, service_areas, locations, accessibility_features and community_groups. Each filter requires field, value and operator. Every filter except the final filter must also contain condition. (optional)
  filters: {
    services: [
      {
        field: "name",
        value: "Community Support",
        operator: "LIKE",
        condition: "AND",
      },
    ],
    organisations: [
      {
        field: "name",
        value: "Example Organisation",
        operator: "LIKE",
        condition: "AND",
      },
    ],
    categories: [
      {
        field: "slug",
        value: "health-and-wellbeing",
        operator: "=",
        condition: "AND",
      },
    ],
    serviceAreas: [
      {
        field: "code",
        value: "S12000036",
        operator: "=",
        condition: "AND",
      },
    ],
    locations: [
      {
        field: "postal_code",
        value: "EH1 1AA",
        operator: "LIKE",
        condition: "AND",
      },
    ],
    accessibilityFeatures: [
      {
        field: "slug",
        value: "wheelchair-access",
        operator: "=",
        condition: "AND",
      },
    ],
    communityGroups: [
      {
        field: "slug",
        value: "older-people",
        operator: "=",
        condition: "OR",
      },
    ],
  },
    // Field used to order matching services. (optional)
  orderBy: "services.name",
    // Direction used to order matching services. (optional)
  order: "ASC",
    // Maximum number of services to return. The API defaults to 20 and rejects values greater than 100. (optional)
  limit: 20,
    // Keyset pagination value used to retrieve records after the supplied position. Only alphanumeric characters, commas, hyphens, underscores and spaces are accepted. (optional)
  after: "123",
    // Keyset pagination value used to retrieve records before the supplied position. Only alphanumeric characters, commas, hyphens, underscores and spaces are accepted. (optional)
  before: "456",
    // Controls whether GeoJSON is included with service-area data. The API accepts true or false case-insensitively. (optional)
  geojson: false,
    // Response format. (optional)
  format: "JSON",
};

const data = await apiInstance.searchAlissServices(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xMrdScopes** | [**&#39;aliss&#39;**]**Array<&#39;aliss&#39; &#124; &#39;11184809&#39;>** | MRD service scope required for ALISS endpoints. | defaults to 'aliss'
 **filters** | **SearchAlissServicesFiltersParameter** | Structured filters used to search ALISS services. Supported datasets are services, organisations, categories, service_areas, locations, accessibility_features and community_groups. Each filter requires field, value and operator. Every filter except the final filter must also contain condition. | (optional) defaults to undefined
 **orderBy** | [**&#39;services.id&#39; | &#39;services.name&#39; | &#39;organisations.name&#39;**]**Array<&#39;services.id&#39; &#124; &#39;services.name&#39; &#124; &#39;organisations.name&#39; &#124; &#39;11184809&#39;>** | Field used to order matching services. | (optional) defaults to 'services.id'
 **order** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39; &#124; &#39;11184809&#39;>** | Direction used to order matching services. | (optional) defaults to 'ASC'
 **limit** | [**number**] | Maximum number of services to return. The API defaults to 20 and rejects values greater than 100. | (optional) defaults to 20
 **after** | [**string**] | Keyset pagination value used to retrieve records after the supplied position. Only alphanumeric characters, commas, hyphens, underscores and spaces are accepted. | (optional) defaults to undefined
 **before** | [**string**] | Keyset pagination value used to retrieve records before the supplied position. Only alphanumeric characters, commas, hyphens, underscores and spaces are accepted. | (optional) defaults to undefined
 **geojson** | [**boolean**] | Controls whether GeoJSON is included with service-area data. The API accepts true or false case-insensitively. | (optional) defaults to false
 **format** | [**&#39;JSON&#39; | &#39;XML&#39;**]**Array<&#39;JSON&#39; &#124; &#39;XML&#39; &#124; &#39;11184809&#39;>** | Response format. | (optional) defaults to 'JSON'


### Return type

**Array<AlissService>**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Services matching the supplied criteria. |  -  |
**400** | Invalid request or database error. |  -  |
**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


