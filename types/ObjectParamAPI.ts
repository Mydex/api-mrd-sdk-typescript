import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';

import { AlissAccessibilityFeature } from '../models/AlissAccessibilityFeature';
import { AlissAccessibilityFeaturesFilter } from '../models/AlissAccessibilityFeaturesFilter';
import { AlissCategoriesFilter } from '../models/AlissCategoriesFilter';
import { AlissCommunityGroup } from '../models/AlissCommunityGroup';
import { AlissCommunityGroupsFilter } from '../models/AlissCommunityGroupsFilter';
import { AlissLocation } from '../models/AlissLocation';
import { AlissLocationsFilter } from '../models/AlissLocationsFilter';
import { AlissNamedSlugItem } from '../models/AlissNamedSlugItem';
import { AlissOrganisation } from '../models/AlissOrganisation';
import { AlissOrganisationsFilter } from '../models/AlissOrganisationsFilter';
import { AlissService } from '../models/AlissService';
import { AlissServiceArea } from '../models/AlissServiceArea';
import { AlissServiceAreaReference } from '../models/AlissServiceAreaReference';
import { AlissServiceAreasFilter } from '../models/AlissServiceAreasFilter';
import { AlissServiceCount } from '../models/AlissServiceCount';
import { AlissServicesFilter } from '../models/AlissServicesFilter';
import { AuthErrorResponse } from '../models/AuthErrorResponse';
import { AuthErrorResponseError } from '../models/AuthErrorResponseError';
import { ConditionAbout } from '../models/ConditionAbout';
import { ConditionAlternateName } from '../models/ConditionAlternateName';
import { ConditionBreadcrumb } from '../models/ConditionBreadcrumb';
import { ConditionBreadcrumbItemData } from '../models/ConditionBreadcrumbItemData';
import { ConditionBreadcrumbListItem } from '../models/ConditionBreadcrumbListItem';
import { ConditionContentNode } from '../models/ConditionContentNode';
import { ConditionErrorResponse } from '../models/ConditionErrorResponse';
import { ConditionExternalLinkObject } from '../models/ConditionExternalLinkObject';
import { ConditionHealthTopicContent } from '../models/ConditionHealthTopicContent';
import { ConditionKeywords } from '../models/ConditionKeywords';
import { ConditionLinkValue } from '../models/ConditionLinkValue';
import { ConditionMrdLinkObject } from '../models/ConditionMrdLinkObject';
import { ConditionOrganisation } from '../models/ConditionOrganisation';
import { ConditionPage } from '../models/ConditionPage';
import { ConditionPotentialAction } from '../models/ConditionPotentialAction';
import { ConditionRelatedLink } from '../models/ConditionRelatedLink';
import { ConditionResponse } from '../models/ConditionResponse';
import { ConditionSearchFilter } from '../models/ConditionSearchFilter';
import { ConditionVideoObject } from '../models/ConditionVideoObject';
import { ConditionVideoObjectIdentifier } from '../models/ConditionVideoObjectIdentifier';
import { ConditionWebPageElement } from '../models/ConditionWebPageElement';
import { ConditionsRouteListResponse } from '../models/ConditionsRouteListResponse';
import { ConditionsSearchResponse } from '../models/ConditionsSearchResponse';
import { CountriesErrorDetails } from '../models/CountriesErrorDetails';
import { CountriesErrorResponse } from '../models/CountriesErrorResponse';
import { Country } from '../models/Country';
import { CountryCapitalInfo } from '../models/CountryCapitalInfo';
import { CountryCar } from '../models/CountryCar';
import { CountryCoatOfArms } from '../models/CountryCoatOfArms';
import { CountryCurrency } from '../models/CountryCurrency';
import { CountryDemonym } from '../models/CountryDemonym';
import { CountryFlags } from '../models/CountryFlags';
import { CountryIdd } from '../models/CountryIdd';
import { CountryMaps } from '../models/CountryMaps';
import { CountryName } from '../models/CountryName';
import { CountryPostalCode } from '../models/CountryPostalCode';
import { CountryTranslation } from '../models/CountryTranslation';
import { ErrorResponse } from '../models/ErrorResponse';
import { GetAllCountries200Response } from '../models/GetAllCountries200Response';
import { GetCountryByCca2200Response } from '../models/GetCountryByCca2200Response';
import { GetLivewellLevelOne200Response } from '../models/GetLivewellLevelOne200Response';
import { GetMedicineLevelOne200Response } from '../models/GetMedicineLevelOne200Response';
import { GetMentalHealthLevelOne200Response } from '../models/GetMentalHealthLevelOne200Response';
import { GetPregnancyLevelOne200Response } from '../models/GetPregnancyLevelOne200Response';
import { LivewellAbout } from '../models/LivewellAbout';
import { LivewellAboutAlternateName } from '../models/LivewellAboutAlternateName';
import { LivewellAnswer } from '../models/LivewellAnswer';
import { LivewellAnswerLinksInner } from '../models/LivewellAnswerLinksInner';
import { LivewellAuthor } from '../models/LivewellAuthor';
import { LivewellBreadcrumb } from '../models/LivewellBreadcrumb';
import { LivewellBreadcrumbItemData } from '../models/LivewellBreadcrumbItemData';
import { LivewellBreadcrumbListItem } from '../models/LivewellBreadcrumbListItem';
import { LivewellContentElement } from '../models/LivewellContentElement';
import { LivewellContentElementMainEntityInner } from '../models/LivewellContentElementMainEntityInner';
import { LivewellCopyrightHolder } from '../models/LivewellCopyrightHolder';
import { LivewellData } from '../models/LivewellData';
import { LivewellDataHasPartInner } from '../models/LivewellDataHasPartInner';
import { LivewellErrorResponse } from '../models/LivewellErrorResponse';
import { LivewellExpanderGroup } from '../models/LivewellExpanderGroup';
import { LivewellExpanderItem } from '../models/LivewellExpanderItem';
import { LivewellHealthTopicContent } from '../models/LivewellHealthTopicContent';
import { LivewellLinkObject } from '../models/LivewellLinkObject';
import { LivewellNotFoundResponse } from '../models/LivewellNotFoundResponse';
import { LivewellRelatedLink } from '../models/LivewellRelatedLink';
import { LivewellRoutesResponse } from '../models/LivewellRoutesResponse';
import { LivewellSearchFilter } from '../models/LivewellSearchFilter';
import { LivewellVideoObject } from '../models/LivewellVideoObject';
import { LookupAllowedValuesResponse } from '../models/LookupAllowedValuesResponse';
import { LookupValidationResponse } from '../models/LookupValidationResponse';
import { MdsAllDatasetWithFields } from '../models/MdsAllDatasetWithFields';
import { MdsAllField } from '../models/MdsAllField';
import { MdsDatasetSummary } from '../models/MdsDatasetSummary';
import { MdsDatasetWithFields } from '../models/MdsDatasetWithFields';
import { MdsFieldDetails } from '../models/MdsFieldDetails';
import { MdsFieldSearchResponse } from '../models/MdsFieldSearchResponse';
import { MdsFieldSearchResponseMatchingFields } from '../models/MdsFieldSearchResponseMatchingFields';
import { MdsFieldType } from '../models/MdsFieldType';
import { MdsFieldTypeResponse } from '../models/MdsFieldTypeResponse';
import { MdsSummaryCounts } from '../models/MdsSummaryCounts';
import { MdsSummaryResponse } from '../models/MdsSummaryResponse';
import { MeasurementActivityType } from '../models/MeasurementActivityType';
import { MeasurementActivityTypeResult } from '../models/MeasurementActivityTypeResult';
import { MeasurementActivityTypesResult } from '../models/MeasurementActivityTypesResult';
import { MeasurementBloodPressureMeasurement } from '../models/MeasurementBloodPressureMeasurement';
import { MeasurementBloodPressureMeasurementResult } from '../models/MeasurementBloodPressureMeasurementResult';
import { MeasurementBloodPressureMeasurementsResult } from '../models/MeasurementBloodPressureMeasurementsResult';
import { MeasurementBloodSpecimenSource } from '../models/MeasurementBloodSpecimenSource';
import { MeasurementBloodSpecimenSourceResult } from '../models/MeasurementBloodSpecimenSourceResult';
import { MeasurementBloodSpecimenSourcesResult } from '../models/MeasurementBloodSpecimenSourcesResult';
import { MeasurementBodyPosition } from '../models/MeasurementBodyPosition';
import { MeasurementBodyPositionResult } from '../models/MeasurementBodyPositionResult';
import { MeasurementBodyPositionsResult } from '../models/MeasurementBodyPositionsResult';
import { MeasurementBodyTemperatureLocation } from '../models/MeasurementBodyTemperatureLocation';
import { MeasurementBodyTemperatureLocationResult } from '../models/MeasurementBodyTemperatureLocationResult';
import { MeasurementBodyTemperatureLocationsResult } from '../models/MeasurementBodyTemperatureLocationsResult';
import { MeasurementCervicalDilation } from '../models/MeasurementCervicalDilation';
import { MeasurementCervicalDilationResult } from '../models/MeasurementCervicalDilationResult';
import { MeasurementCervicalDilationsResult } from '../models/MeasurementCervicalDilationsResult';
import { MeasurementCervicalFirmness } from '../models/MeasurementCervicalFirmness';
import { MeasurementCervicalFirmnessResult } from '../models/MeasurementCervicalFirmnessResult';
import { MeasurementCervicalFirmnessValuesResult } from '../models/MeasurementCervicalFirmnessValuesResult';
import { MeasurementCervicalMucusAmount } from '../models/MeasurementCervicalMucusAmount';
import { MeasurementCervicalMucusAmountResult } from '../models/MeasurementCervicalMucusAmountResult';
import { MeasurementCervicalMucusAmountsResult } from '../models/MeasurementCervicalMucusAmountsResult';
import { MeasurementCervicalMucusTexture } from '../models/MeasurementCervicalMucusTexture';
import { MeasurementCervicalMucusTextureResult } from '../models/MeasurementCervicalMucusTextureResult';
import { MeasurementCervicalMucusTexturesResult } from '../models/MeasurementCervicalMucusTexturesResult';
import { MeasurementCervicalPosition } from '../models/MeasurementCervicalPosition';
import { MeasurementCervicalPositionResult } from '../models/MeasurementCervicalPositionResult';
import { MeasurementCervicalPositionsResult } from '../models/MeasurementCervicalPositionsResult';
import { MeasurementExerciseType } from '../models/MeasurementExerciseType';
import { MeasurementExerciseTypeResult } from '../models/MeasurementExerciseTypeResult';
import { MeasurementExerciseTypesResult } from '../models/MeasurementExerciseTypesResult';
import { MeasurementGroup } from '../models/MeasurementGroup';
import { MeasurementGroupResult } from '../models/MeasurementGroupResult';
import { MeasurementGroupsResult } from '../models/MeasurementGroupsResult';
import { MeasurementMealType } from '../models/MeasurementMealType';
import { MeasurementMealTypeResult } from '../models/MeasurementMealTypeResult';
import { MeasurementMealTypesResult } from '../models/MeasurementMealTypesResult';
import { MeasurementResistanceType } from '../models/MeasurementResistanceType';
import { MeasurementResistanceTypeResult } from '../models/MeasurementResistanceTypeResult';
import { MeasurementResistanceTypesResult } from '../models/MeasurementResistanceTypesResult';
import { MeasurementSleepSegmentType } from '../models/MeasurementSleepSegmentType';
import { MeasurementSleepSegmentTypeResult } from '../models/MeasurementSleepSegmentTypeResult';
import { MeasurementSleepSegmentTypesResult } from '../models/MeasurementSleepSegmentTypesResult';
import { MeasurementTemporalRelationToMeal } from '../models/MeasurementTemporalRelationToMeal';
import { MeasurementTemporalRelationToMealResult } from '../models/MeasurementTemporalRelationToMealResult';
import { MeasurementTemporalRelationToSleep } from '../models/MeasurementTemporalRelationToSleep';
import { MeasurementTemporalRelationToSleepResult } from '../models/MeasurementTemporalRelationToSleepResult';
import { MeasurementTemporalRelationsToMealResult } from '../models/MeasurementTemporalRelationsToMealResult';
import { MeasurementTemporalRelationsToSleepResult } from '../models/MeasurementTemporalRelationsToSleepResult';
import { MeasurementType } from '../models/MeasurementType';
import { MeasurementTypeResult } from '../models/MeasurementTypeResult';
import { MeasurementTypesResult } from '../models/MeasurementTypesResult';
import { MeasurementUnit } from '../models/MeasurementUnit';
import { MeasurementUnitResult } from '../models/MeasurementUnitResult';
import { MeasurementUnitsResult } from '../models/MeasurementUnitsResult';
import { MeasurementsDatabaseErrorResponse } from '../models/MeasurementsDatabaseErrorResponse';
import { MeasurementsErrorDetails } from '../models/MeasurementsErrorDetails';
import { MeasurementsErrorResponse } from '../models/MeasurementsErrorResponse';
import { MedicineAbout } from '../models/MedicineAbout';
import { MedicineAnswer } from '../models/MedicineAnswer';
import { MedicineAnswerLinksInner } from '../models/MedicineAnswerLinksInner';
import { MedicineAuthor } from '../models/MedicineAuthor';
import { MedicineBreadcrumb } from '../models/MedicineBreadcrumb';
import { MedicineBreadcrumbItemData } from '../models/MedicineBreadcrumbItemData';
import { MedicineBreadcrumbListItem } from '../models/MedicineBreadcrumbListItem';
import { MedicineContentElement } from '../models/MedicineContentElement';
import { MedicineContentElementMainEntity } from '../models/MedicineContentElementMainEntity';
import { MedicineCopyrightHolder } from '../models/MedicineCopyrightHolder';
import { MedicineData } from '../models/MedicineData';
import { MedicineHealthTopicContent } from '../models/MedicineHealthTopicContent';
import { MedicineLinkObject } from '../models/MedicineLinkObject';
import { MedicineNestedEntity } from '../models/MedicineNestedEntity';
import { MedicineRelatedLink } from '../models/MedicineRelatedLink';
import { MedicinesErrorResponse } from '../models/MedicinesErrorResponse';
import { MedicinesNotFoundResponse } from '../models/MedicinesNotFoundResponse';
import { MedicinesRoutesResponse } from '../models/MedicinesRoutesResponse';
import { MedicinesSearchFilter } from '../models/MedicinesSearchFilter';
import { MentalHealthAbout } from '../models/MentalHealthAbout';
import { MentalHealthAnswer } from '../models/MentalHealthAnswer';
import { MentalHealthAnswerLinksInner } from '../models/MentalHealthAnswerLinksInner';
import { MentalHealthAuthor } from '../models/MentalHealthAuthor';
import { MentalHealthBreadcrumb } from '../models/MentalHealthBreadcrumb';
import { MentalHealthBreadcrumbItemData } from '../models/MentalHealthBreadcrumbItemData';
import { MentalHealthBreadcrumbListItem } from '../models/MentalHealthBreadcrumbListItem';
import { MentalHealthContentElement } from '../models/MentalHealthContentElement';
import { MentalHealthContentElementMainEntity } from '../models/MentalHealthContentElementMainEntity';
import { MentalHealthContentElementMainEntityOfPageInner } from '../models/MentalHealthContentElementMainEntityOfPageInner';
import { MentalHealthCopyrightHolder } from '../models/MentalHealthCopyrightHolder';
import { MentalHealthData } from '../models/MentalHealthData';
import { MentalHealthErrorResponse } from '../models/MentalHealthErrorResponse';
import { MentalHealthExpanderGroup } from '../models/MentalHealthExpanderGroup';
import { MentalHealthExpanderItem } from '../models/MentalHealthExpanderItem';
import { MentalHealthHealthTopicContent } from '../models/MentalHealthHealthTopicContent';
import { MentalHealthLinkObject } from '../models/MentalHealthLinkObject';
import { MentalHealthMainEntityObject } from '../models/MentalHealthMainEntityObject';
import { MentalHealthNotFoundResponse } from '../models/MentalHealthNotFoundResponse';
import { MentalHealthRelatedLink } from '../models/MentalHealthRelatedLink';
import { MentalHealthRoutesResponse } from '../models/MentalHealthRoutesResponse';
import { MentalHealthSearchFilter } from '../models/MentalHealthSearchFilter';
import { MentalHealthVideoObject } from '../models/MentalHealthVideoObject';
import { MtsFeatureRecord } from '../models/MtsFeatureRecord';
import { MtsTemplateRecord } from '../models/MtsTemplateRecord';
import { PaginatedSearchResponse } from '../models/PaginatedSearchResponse';
import { PregnancyAbout } from '../models/PregnancyAbout';
import { PregnancyAnswer } from '../models/PregnancyAnswer';
import { PregnancyAnswerLinksInner } from '../models/PregnancyAnswerLinksInner';
import { PregnancyAuthor } from '../models/PregnancyAuthor';
import { PregnancyBreadcrumb } from '../models/PregnancyBreadcrumb';
import { PregnancyBreadcrumbItemData } from '../models/PregnancyBreadcrumbItemData';
import { PregnancyBreadcrumbListItem } from '../models/PregnancyBreadcrumbListItem';
import { PregnancyContentElement } from '../models/PregnancyContentElement';
import { PregnancyContentElementMainEntity } from '../models/PregnancyContentElementMainEntity';
import { PregnancyContentElementMainEntityOfPageInner } from '../models/PregnancyContentElementMainEntityOfPageInner';
import { PregnancyCopyrightHolder } from '../models/PregnancyCopyrightHolder';
import { PregnancyData } from '../models/PregnancyData';
import { PregnancyErrorResponse } from '../models/PregnancyErrorResponse';
import { PregnancyExpanderGroup } from '../models/PregnancyExpanderGroup';
import { PregnancyExpanderItem } from '../models/PregnancyExpanderItem';
import { PregnancyHealthTopicContent } from '../models/PregnancyHealthTopicContent';
import { PregnancyLinkObject } from '../models/PregnancyLinkObject';
import { PregnancyMainEntityObject } from '../models/PregnancyMainEntityObject';
import { PregnancyNotFoundResponse } from '../models/PregnancyNotFoundResponse';
import { PregnancyRelatedLink } from '../models/PregnancyRelatedLink';
import { PregnancyRoutesResponse } from '../models/PregnancyRoutesResponse';
import { PregnancySearchFilter } from '../models/PregnancySearchFilter';
import { PregnancyVideoObject } from '../models/PregnancyVideoObject';
import { SearchAlissServicesFiltersParameter } from '../models/SearchAlissServicesFiltersParameter';
import { SearchErrorDetails } from '../models/SearchErrorDetails';
import { SearchErrorResponse } from '../models/SearchErrorResponse';
import { SearchFilter } from '../models/SearchFilter';
import { SearchMrd200Response } from '../models/SearchMrd200Response';
import { SearchPagination } from '../models/SearchPagination';
import { SearchResultItem } from '../models/SearchResultItem';
import { UnpaginatedSearchResponse } from '../models/UnpaginatedSearchResponse';
import { ValidationsErrorDetails } from '../models/ValidationsErrorDetails';
import { ValidationsErrorResponse } from '../models/ValidationsErrorResponse';

import { ObservableALISSApi } from "./ObservableAPI";
import { ALISSApiRequestFactory, ALISSApiResponseProcessor} from "../apis/ALISSApi";

export interface ALISSApiCountAlissServicesRequest {
    /**
     * MRD service scope required for ALISS endpoints.
     * Defaults to: &#39;aliss&#39;
     * @type &#39;aliss&#39;
     * @memberof ALISSApicountAlissServices
     */
    xMrdScopes: 'aliss'
    /**
     * Structured filters used to search ALISS services. Supported datasets are services, organisations, categories, service_areas, locations, accessibility_features and community_groups. Each filter requires field, value and operator. Every filter except the final filter must also contain condition.
     * Defaults to: undefined
     * @type SearchAlissServicesFiltersParameter
     * @memberof ALISSApicountAlissServices
     */
    filters?: SearchAlissServicesFiltersParameter
}

export interface ALISSApiGetAlissAccessibilityFeaturesRequest {
    /**
     * MRD service scope required for ALISS endpoints.
     * Defaults to: &#39;aliss&#39;
     * @type &#39;aliss&#39;
     * @memberof ALISSApigetAlissAccessibilityFeatures
     */
    xMrdScopes: 'aliss'
}

export interface ALISSApiGetAlissCategoriesRequest {
    /**
     * MRD service scope required for ALISS endpoints.
     * Defaults to: &#39;aliss&#39;
     * @type &#39;aliss&#39;
     * @memberof ALISSApigetAlissCategories
     */
    xMrdScopes: 'aliss'
}

export interface ALISSApiGetAlissCommunityGroupsRequest {
    /**
     * MRD service scope required for ALISS endpoints.
     * Defaults to: &#39;aliss&#39;
     * @type &#39;aliss&#39;
     * @memberof ALISSApigetAlissCommunityGroups
     */
    xMrdScopes: 'aliss'
}

export interface ALISSApiGetAlissOrganisationsRequest {
    /**
     * MRD service scope required for ALISS endpoints.
     * Defaults to: &#39;aliss&#39;
     * @type &#39;aliss&#39;
     * @memberof ALISSApigetAlissOrganisations
     */
    xMrdScopes: 'aliss'
}

export interface ALISSApiGetAlissServiceAreasRequest {
    /**
     * MRD service scope required for ALISS endpoints.
     * Defaults to: &#39;aliss&#39;
     * @type &#39;aliss&#39;
     * @memberof ALISSApigetAlissServiceAreas
     */
    xMrdScopes: 'aliss'
}

export interface ALISSApiGetAlissServicesByIdsRequest {
    /**
     * MRD service scope required for ALISS endpoints.
     * Defaults to: &#39;aliss&#39;
     * @type &#39;aliss&#39;
     * @memberof ALISSApigetAlissServicesByIds
     */
    xMrdScopes: 'aliss'
    /**
     * One or more comma-separated ALISS service IDs.
     * Defaults to: undefined
     * @type string
     * @memberof ALISSApigetAlissServicesByIds
     */
    serviceIds: string
    /**
     * Field used to order matching services.
     * Defaults to: &#39;services.id&#39;
     * @type &#39;services.id&#39; | &#39;services.name&#39; | &#39;organisations.name&#39;
     * @memberof ALISSApigetAlissServicesByIds
     */
    orderBy?: 'services.id' | 'services.name' | 'organisations.name'
    /**
     * Direction used to order matching services.
     * Defaults to: &#39;ASC&#39;
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof ALISSApigetAlissServicesByIds
     */
    order?: 'ASC' | 'DESC'
    /**
     * Controls whether GeoJSON is included with service-area data. The API accepts true or false case-insensitively.
     * Defaults to: false
     * @type boolean
     * @memberof ALISSApigetAlissServicesByIds
     */
    geojson?: boolean
    /**
     * Response format.
     * Defaults to: &#39;JSON&#39;
     * @type &#39;JSON&#39; | &#39;XML&#39;
     * @memberof ALISSApigetAlissServicesByIds
     */
    format?: 'JSON' | 'XML'
}

export interface ALISSApiSearchAlissServicesRequest {
    /**
     * MRD service scope required for ALISS endpoints.
     * Defaults to: &#39;aliss&#39;
     * @type &#39;aliss&#39;
     * @memberof ALISSApisearchAlissServices
     */
    xMrdScopes: 'aliss'
    /**
     * Structured filters used to search ALISS services. Supported datasets are services, organisations, categories, service_areas, locations, accessibility_features and community_groups. Each filter requires field, value and operator. Every filter except the final filter must also contain condition.
     * Defaults to: undefined
     * @type SearchAlissServicesFiltersParameter
     * @memberof ALISSApisearchAlissServices
     */
    filters?: SearchAlissServicesFiltersParameter
    /**
     * Field used to order matching services.
     * Defaults to: &#39;services.id&#39;
     * @type &#39;services.id&#39; | &#39;services.name&#39; | &#39;organisations.name&#39;
     * @memberof ALISSApisearchAlissServices
     */
    orderBy?: 'services.id' | 'services.name' | 'organisations.name'
    /**
     * Direction used to order matching services.
     * Defaults to: &#39;ASC&#39;
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof ALISSApisearchAlissServices
     */
    order?: 'ASC' | 'DESC'
    /**
     * Maximum number of services to return. The API defaults to 20 and rejects values greater than 100.
     * Maximum: 100
     * Defaults to: 20
     * @type number
     * @memberof ALISSApisearchAlissServices
     */
    limit?: number
    /**
     * Keyset pagination value used to retrieve records after the supplied position. Only alphanumeric characters, commas, hyphens, underscores and spaces are accepted.
     * Defaults to: undefined
     * @type string
     * @memberof ALISSApisearchAlissServices
     */
    after?: string
    /**
     * Keyset pagination value used to retrieve records before the supplied position. Only alphanumeric characters, commas, hyphens, underscores and spaces are accepted.
     * Defaults to: undefined
     * @type string
     * @memberof ALISSApisearchAlissServices
     */
    before?: string
    /**
     * Controls whether GeoJSON is included with service-area data. The API accepts true or false case-insensitively.
     * Defaults to: false
     * @type boolean
     * @memberof ALISSApisearchAlissServices
     */
    geojson?: boolean
    /**
     * Response format.
     * Defaults to: &#39;JSON&#39;
     * @type &#39;JSON&#39; | &#39;XML&#39;
     * @memberof ALISSApisearchAlissServices
     */
    format?: 'JSON' | 'XML'
}

export class ObjectALISSApi {
    private api: ObservableALISSApi

    public constructor(configuration: Configuration, requestFactory?: ALISSApiRequestFactory, responseProcessor?: ALISSApiResponseProcessor) {
        this.api = new ObservableALISSApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns the number of distinct ALISS services matching the supplied structured filters.
     * Count matching ALISS services
     * @param param the request object
     */
    public countAlissServicesWithHttpInfo(param: ALISSApiCountAlissServicesRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<AlissServiceCount>>> {
        return this.api.countAlissServicesWithHttpInfo(param.xMrdScopes, param.filters,  options).toPromise();
    }

    /**
     * Returns the number of distinct ALISS services matching the supplied structured filters.
     * Count matching ALISS services
     * @param param the request object
     */
    public countAlissServices(param: ALISSApiCountAlissServicesRequest, options?: ConfigurationOptions): Promise<Array<AlissServiceCount>> {
        return this.api.countAlissServices(param.xMrdScopes, param.filters,  options).toPromise();
    }

    /**
     * Retrieve ALISS accessibility features
     * @param param the request object
     */
    public getAlissAccessibilityFeaturesWithHttpInfo(param: ALISSApiGetAlissAccessibilityFeaturesRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<AlissNamedSlugItem>>> {
        return this.api.getAlissAccessibilityFeaturesWithHttpInfo(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Retrieve ALISS accessibility features
     * @param param the request object
     */
    public getAlissAccessibilityFeatures(param: ALISSApiGetAlissAccessibilityFeaturesRequest, options?: ConfigurationOptions): Promise<Array<AlissNamedSlugItem>> {
        return this.api.getAlissAccessibilityFeatures(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Retrieve ALISS categories
     * @param param the request object
     */
    public getAlissCategoriesWithHttpInfo(param: ALISSApiGetAlissCategoriesRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<AlissNamedSlugItem>>> {
        return this.api.getAlissCategoriesWithHttpInfo(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Retrieve ALISS categories
     * @param param the request object
     */
    public getAlissCategories(param: ALISSApiGetAlissCategoriesRequest, options?: ConfigurationOptions): Promise<Array<AlissNamedSlugItem>> {
        return this.api.getAlissCategories(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Retrieve ALISS community groups
     * @param param the request object
     */
    public getAlissCommunityGroupsWithHttpInfo(param: ALISSApiGetAlissCommunityGroupsRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<AlissNamedSlugItem>>> {
        return this.api.getAlissCommunityGroupsWithHttpInfo(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Retrieve ALISS community groups
     * @param param the request object
     */
    public getAlissCommunityGroups(param: ALISSApiGetAlissCommunityGroupsRequest, options?: ConfigurationOptions): Promise<Array<AlissNamedSlugItem>> {
        return this.api.getAlissCommunityGroups(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Retrieve ALISS organisations
     * @param param the request object
     */
    public getAlissOrganisationsWithHttpInfo(param: ALISSApiGetAlissOrganisationsRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<AlissNamedSlugItem>>> {
        return this.api.getAlissOrganisationsWithHttpInfo(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Retrieve ALISS organisations
     * @param param the request object
     */
    public getAlissOrganisations(param: ALISSApiGetAlissOrganisationsRequest, options?: ConfigurationOptions): Promise<Array<AlissNamedSlugItem>> {
        return this.api.getAlissOrganisations(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Retrieve ALISS service areas
     * @param param the request object
     */
    public getAlissServiceAreasWithHttpInfo(param: ALISSApiGetAlissServiceAreasRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<AlissServiceAreaReference>>> {
        return this.api.getAlissServiceAreasWithHttpInfo(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Retrieve ALISS service areas
     * @param param the request object
     */
    public getAlissServiceAreas(param: ALISSApiGetAlissServiceAreasRequest, options?: ConfigurationOptions): Promise<Array<AlissServiceAreaReference>> {
        return this.api.getAlissServiceAreas(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Retrieves one or more services using a comma-separated list of service IDs.
     * Retrieve ALISS services by ID
     * @param param the request object
     */
    public getAlissServicesByIdsWithHttpInfo(param: ALISSApiGetAlissServicesByIdsRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<AlissService>>> {
        return this.api.getAlissServicesByIdsWithHttpInfo(param.xMrdScopes, param.serviceIds, param.orderBy, param.order, param.geojson, param.format,  options).toPromise();
    }

    /**
     * Retrieves one or more services using a comma-separated list of service IDs.
     * Retrieve ALISS services by ID
     * @param param the request object
     */
    public getAlissServicesByIds(param: ALISSApiGetAlissServicesByIdsRequest, options?: ConfigurationOptions): Promise<Array<AlissService>> {
        return this.api.getAlissServicesByIds(param.xMrdScopes, param.serviceIds, param.orderBy, param.order, param.geojson, param.format,  options).toPromise();
    }

    /**
     * Searches ALISS services using structured filters, ordering and keyset pagination.
     * Search ALISS services
     * @param param the request object
     */
    public searchAlissServicesWithHttpInfo(param: ALISSApiSearchAlissServicesRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<AlissService>>> {
        return this.api.searchAlissServicesWithHttpInfo(param.xMrdScopes, param.filters, param.orderBy, param.order, param.limit, param.after, param.before, param.geojson, param.format,  options).toPromise();
    }

    /**
     * Searches ALISS services using structured filters, ordering and keyset pagination.
     * Search ALISS services
     * @param param the request object
     */
    public searchAlissServices(param: ALISSApiSearchAlissServicesRequest, options?: ConfigurationOptions): Promise<Array<AlissService>> {
        return this.api.searchAlissServices(param.xMrdScopes, param.filters, param.orderBy, param.order, param.limit, param.after, param.before, param.geojson, param.format,  options).toPromise();
    }

}

import { ObservableConditionsApi } from "./ObservableAPI";
import { ConditionsApiRequestFactory, ConditionsApiResponseProcessor} from "../apis/ConditionsApi";

export interface ConditionsApiGetConditionLevelOneRequest {
    /**
     * MRD service scope required for Conditions endpoints.
     * Defaults to: &#39;conditions&#39;
     * @type &#39;conditions&#39;
     * @memberof ConditionsApigetConditionLevelOne
     */
    xMrdScopes: 'conditions'
    /**
     * First Conditions route segment.
     * Defaults to: undefined
     * @type string
     * @memberof ConditionsApigetConditionLevelOne
     */
    param1: string
    /**
     * Removes HTML markup from returned content. When supplied, this parameter must be set to \&#39;true\&#39;.
     * Defaults to: undefined
     * @type &#39;true&#39;
     * @memberof ConditionsApigetConditionLevelOne
     */
    noHtml?: 'true'
    /**
     * Replaces eligible MRD URLs with their NHS website equivalents. When supplied, this parameter must be set to \&#39;true\&#39;.
     * Defaults to: undefined
     * @type &#39;true&#39;
     * @memberof ConditionsApigetConditionLevelOne
     */
    nhsLinks?: 'true'
}

export interface ConditionsApiGetConditionLevelThreeRequest {
    /**
     * MRD service scope required for Conditions endpoints.
     * Defaults to: &#39;conditions&#39;
     * @type &#39;conditions&#39;
     * @memberof ConditionsApigetConditionLevelThree
     */
    xMrdScopes: 'conditions'
    /**
     * First Conditions route segment.
     * Defaults to: undefined
     * @type string
     * @memberof ConditionsApigetConditionLevelThree
     */
    param1: string
    /**
     * Second Conditions route segment.
     * Defaults to: undefined
     * @type string
     * @memberof ConditionsApigetConditionLevelThree
     */
    param2: string
    /**
     * Third Conditions route segment.
     * Defaults to: undefined
     * @type string
     * @memberof ConditionsApigetConditionLevelThree
     */
    param3: string
    /**
     * Removes HTML markup from returned content. When supplied, this parameter must be set to \&#39;true\&#39;.
     * Defaults to: undefined
     * @type &#39;true&#39;
     * @memberof ConditionsApigetConditionLevelThree
     */
    noHtml?: 'true'
    /**
     * Replaces eligible MRD URLs with their NHS website equivalents. When supplied, this parameter must be set to \&#39;true\&#39;.
     * Defaults to: undefined
     * @type &#39;true&#39;
     * @memberof ConditionsApigetConditionLevelThree
     */
    nhsLinks?: 'true'
}

export interface ConditionsApiGetConditionLevelTwoRequest {
    /**
     * MRD service scope required for Conditions endpoints.
     * Defaults to: &#39;conditions&#39;
     * @type &#39;conditions&#39;
     * @memberof ConditionsApigetConditionLevelTwo
     */
    xMrdScopes: 'conditions'
    /**
     * First Conditions route segment.
     * Defaults to: undefined
     * @type string
     * @memberof ConditionsApigetConditionLevelTwo
     */
    param1: string
    /**
     * Second Conditions route segment.
     * Defaults to: undefined
     * @type string
     * @memberof ConditionsApigetConditionLevelTwo
     */
    param2: string
    /**
     * Removes HTML markup from returned content. When supplied, this parameter must be set to \&#39;true\&#39;.
     * Defaults to: undefined
     * @type &#39;true&#39;
     * @memberof ConditionsApigetConditionLevelTwo
     */
    noHtml?: 'true'
    /**
     * Replaces eligible MRD URLs with their NHS website equivalents. When supplied, this parameter must be set to \&#39;true\&#39;.
     * Defaults to: undefined
     * @type &#39;true&#39;
     * @memberof ConditionsApigetConditionLevelTwo
     */
    nhsLinks?: 'true'
}

export interface ConditionsApiGetConditionRoutesRequest {
    /**
     * MRD service scope required for Conditions endpoints.
     * Defaults to: &#39;conditions&#39;
     * @type &#39;conditions&#39;
     * @memberof ConditionsApigetConditionRoutes
     */
    xMrdScopes: 'conditions'
}

export interface ConditionsApiSearchConditionsRequest {
    /**
     * MRD service scope required for Conditions endpoints.
     * Defaults to: &#39;conditions&#39;
     * @type &#39;conditions&#39;
     * @memberof ConditionsApisearchConditions
     */
    xMrdScopes: 'conditions'
    /**
     * Structured Conditions search filters supplied using indexed bracket notation, for example filters[0][operator]&#x3D;LIKE&amp;filters[0][value]&#x3D;cancer&amp;filters[0][condition]&#x3D;AND&amp;filters[1][operator]&#x3D;LIKE&amp;filters[1][value]&#x3D;treatment&amp;filters[1][condition]&#x3D;. Each filter must contain exactly value, operator and condition.
     * Defaults to: undefined
     * @type Array&lt;ConditionSearchFilter&gt;
     * @memberof ConditionsApisearchConditions
     */
    filters: Array<ConditionSearchFilter>
    /**
     * Removes HTML markup from returned content. When supplied, this parameter must be set to \&#39;true\&#39;.
     * Defaults to: undefined
     * @type &#39;true&#39;
     * @memberof ConditionsApisearchConditions
     */
    noHtml?: 'true'
    /**
     * Replaces eligible MRD URLs with their NHS website equivalents. When supplied, this parameter must be set to \&#39;true\&#39;.
     * Defaults to: undefined
     * @type &#39;true&#39;
     * @memberof ConditionsApisearchConditions
     */
    nhsLinks?: 'true'
    /**
     * Extends Conditions search to page-content text and expander content in addition to the default page description. When supplied, this parameter must be set to \&#39;true\&#39;. This parameter is only valid on the search endpoint.
     * Defaults to: undefined
     * @type &#39;true&#39;
     * @memberof ConditionsApisearchConditions
     */
    searchAll?: 'true'
}

export class ObjectConditionsApi {
    private api: ObservableConditionsApi

    public constructor(configuration: Configuration, requestFactory?: ConditionsApiRequestFactory, responseProcessor?: ConditionsApiResponseProcessor) {
        this.api = new ObservableConditionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a Conditions page identified by one route segment. The response may contain HTML by default. Use no_html to return processed plain text and nhs_links to return eligible original NHS URLs.
     * Retrieve a first-level Conditions page
     * @param param the request object
     */
    public getConditionLevelOneWithHttpInfo(param: ConditionsApiGetConditionLevelOneRequest, options?: ConfigurationOptions): Promise<HttpInfo<ConditionResponse>> {
        return this.api.getConditionLevelOneWithHttpInfo(param.xMrdScopes, param.param1, param.noHtml, param.nhsLinks,  options).toPromise();
    }

    /**
     * Returns a Conditions page identified by one route segment. The response may contain HTML by default. Use no_html to return processed plain text and nhs_links to return eligible original NHS URLs.
     * Retrieve a first-level Conditions page
     * @param param the request object
     */
    public getConditionLevelOne(param: ConditionsApiGetConditionLevelOneRequest, options?: ConfigurationOptions): Promise<ConditionResponse> {
        return this.api.getConditionLevelOne(param.xMrdScopes, param.param1, param.noHtml, param.nhsLinks,  options).toPromise();
    }

    /**
     * Returns a Conditions page identified by three route segments. Responses may contain recursively nested web-page elements and video objects.
     * Retrieve a third-level Conditions page
     * @param param the request object
     */
    public getConditionLevelThreeWithHttpInfo(param: ConditionsApiGetConditionLevelThreeRequest, options?: ConfigurationOptions): Promise<HttpInfo<ConditionResponse>> {
        return this.api.getConditionLevelThreeWithHttpInfo(param.xMrdScopes, param.param1, param.param2, param.param3, param.noHtml, param.nhsLinks,  options).toPromise();
    }

    /**
     * Returns a Conditions page identified by three route segments. Responses may contain recursively nested web-page elements and video objects.
     * Retrieve a third-level Conditions page
     * @param param the request object
     */
    public getConditionLevelThree(param: ConditionsApiGetConditionLevelThreeRequest, options?: ConfigurationOptions): Promise<ConditionResponse> {
        return this.api.getConditionLevelThree(param.xMrdScopes, param.param1, param.param2, param.param3, param.noHtml, param.nhsLinks,  options).toPromise();
    }

    /**
     * Returns a Conditions page identified by two route segments. The no_html and nhs_links parameters can be used separately or together.
     * Retrieve a second-level Conditions page
     * @param param the request object
     */
    public getConditionLevelTwoWithHttpInfo(param: ConditionsApiGetConditionLevelTwoRequest, options?: ConfigurationOptions): Promise<HttpInfo<ConditionResponse>> {
        return this.api.getConditionLevelTwoWithHttpInfo(param.xMrdScopes, param.param1, param.param2, param.noHtml, param.nhsLinks,  options).toPromise();
    }

    /**
     * Returns a Conditions page identified by two route segments. The no_html and nhs_links parameters can be used separately or together.
     * Retrieve a second-level Conditions page
     * @param param the request object
     */
    public getConditionLevelTwo(param: ConditionsApiGetConditionLevelTwoRequest, options?: ConfigurationOptions): Promise<ConditionResponse> {
        return this.api.getConditionLevelTwo(param.xMrdScopes, param.param1, param.param2, param.noHtml, param.nhsLinks,  options).toPromise();
    }

    /**
     * Returns absolute URLs for the routes available in the NHS Conditions dataset.
     * Retrieve available Conditions routes
     * @param param the request object
     */
    public getConditionRoutesWithHttpInfo(param: ConditionsApiGetConditionRoutesRequest, options?: ConfigurationOptions): Promise<HttpInfo<ConditionsRouteListResponse>> {
        return this.api.getConditionRoutesWithHttpInfo(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Returns absolute URLs for the routes available in the NHS Conditions dataset.
     * Retrieve available Conditions routes
     * @param param the request object
     */
    public getConditionRoutes(param: ConditionsApiGetConditionRoutesRequest, options?: ConfigurationOptions): Promise<ConditionsRouteListResponse> {
        return this.api.getConditionRoutes(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Searches the NHS Conditions dataset. By default the search is performed against page descriptions. When search_all is enabled, page text and expander content are also searched. The no_html option removes HTML from textual content and nhs_links changes eligible MRD URLs to original NHS URLs.
     * Search Conditions content
     * @param param the request object
     */
    public searchConditionsWithHttpInfo(param: ConditionsApiSearchConditionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ConditionsSearchResponse>> {
        return this.api.searchConditionsWithHttpInfo(param.xMrdScopes, param.filters, param.noHtml, param.nhsLinks, param.searchAll,  options).toPromise();
    }

    /**
     * Searches the NHS Conditions dataset. By default the search is performed against page descriptions. When search_all is enabled, page text and expander content are also searched. The no_html option removes HTML from textual content and nhs_links changes eligible MRD URLs to original NHS URLs.
     * Search Conditions content
     * @param param the request object
     */
    public searchConditions(param: ConditionsApiSearchConditionsRequest, options?: ConfigurationOptions): Promise<ConditionsSearchResponse> {
        return this.api.searchConditions(param.xMrdScopes, param.filters, param.noHtml, param.nhsLinks, param.searchAll,  options).toPromise();
    }

}

import { ObservableCountriesApi } from "./ObservableAPI";
import { CountriesApiRequestFactory, CountriesApiResponseProcessor} from "../apis/CountriesApi";

export interface CountriesApiGetAllCountriesRequest {
    /**
     * MRD service scope required for Countries endpoints.
     * Defaults to: &#39;countries&#39;
     * @type &#39;countries&#39;
     * @memberof CountriesApigetAllCountries
     */
    xMrdScopes: 'countries'
    /**
     * Country fields to include in the response. The API accepts comma-separated values such as filters&#x3D;region,subregion,idd and PHP-style array values such as filters[]&#x3D;capital&amp;filters[]&#x3D;maps. Duplicate filters are removed.
     * Defaults to: undefined
     * @type Set&lt;&#39;cca2&#39; | &#39;cca3&#39; | &#39;ccn3&#39; | &#39;flag&#39; | &#39;status&#39; | &#39;independent&#39; | &#39;unMember&#39; | &#39;region&#39; | &#39;subregion&#39; | &#39;landlocked&#39; | &#39;area&#39; | &#39;population&#39; | &#39;fifa&#39; | &#39;startOfWeek&#39; | &#39;name&#39; | &#39;maps&#39; | &#39;flags&#39; | &#39;coatOfArms&#39; | &#39;capitalInfo&#39; | &#39;postalCode&#39; | &#39;capital&#39; | &#39;altSpellings&#39; | &#39;timezones&#39; | &#39;continents&#39; | &#39;languages&#39; | &#39;currencies&#39; | &#39;translations&#39; | &#39;demonyms&#39; | &#39;gini&#39; | &#39;car&#39; | &#39;idd&#39;&gt;
     * @memberof CountriesApigetAllCountries
     */
    filters?: Set<'cca2' | 'cca3' | 'ccn3' | 'flag' | 'status' | 'independent' | 'unMember' | 'region' | 'subregion' | 'landlocked' | 'area' | 'population' | 'fifa' | 'startOfWeek' | 'name' | 'maps' | 'flags' | 'coatOfArms' | 'capitalInfo' | 'postalCode' | 'capital' | 'altSpellings' | 'timezones' | 'continents' | 'languages' | 'currencies' | 'translations' | 'demonyms' | 'gini' | 'car' | 'idd'>
}

export interface CountriesApiGetCountryByCca2Request {
    /**
     * MRD service scope required for Countries endpoints.
     * Defaults to: &#39;countries&#39;
     * @type &#39;countries&#39;
     * @memberof CountriesApigetCountryByCca2
     */
    xMrdScopes: 'countries'
    /**
     * Country CCA2 lookup value. The supplied value is converted to uppercase before the database lookup. For example, ad is looked up as AD.
     * Defaults to: undefined
     * @type string
     * @memberof CountriesApigetCountryByCca2
     */
    cca2: string
    /**
     * Country fields to include in the response. The API accepts comma-separated values such as filters&#x3D;region,subregion,idd and PHP-style array values such as filters[]&#x3D;capital&amp;filters[]&#x3D;maps. Duplicate filters are removed.
     * Defaults to: undefined
     * @type Set&lt;&#39;cca2&#39; | &#39;cca3&#39; | &#39;ccn3&#39; | &#39;flag&#39; | &#39;status&#39; | &#39;independent&#39; | &#39;unMember&#39; | &#39;region&#39; | &#39;subregion&#39; | &#39;landlocked&#39; | &#39;area&#39; | &#39;population&#39; | &#39;fifa&#39; | &#39;startOfWeek&#39; | &#39;name&#39; | &#39;maps&#39; | &#39;flags&#39; | &#39;coatOfArms&#39; | &#39;capitalInfo&#39; | &#39;postalCode&#39; | &#39;capital&#39; | &#39;altSpellings&#39; | &#39;timezones&#39; | &#39;continents&#39; | &#39;languages&#39; | &#39;currencies&#39; | &#39;translations&#39; | &#39;demonyms&#39; | &#39;gini&#39; | &#39;car&#39; | &#39;idd&#39;&gt;
     * @memberof CountriesApigetCountryByCca2
     */
    filters?: Set<'cca2' | 'cca3' | 'ccn3' | 'flag' | 'status' | 'independent' | 'unMember' | 'region' | 'subregion' | 'landlocked' | 'area' | 'population' | 'fifa' | 'startOfWeek' | 'name' | 'maps' | 'flags' | 'coatOfArms' | 'capitalInfo' | 'postalCode' | 'capital' | 'altSpellings' | 'timezones' | 'continents' | 'languages' | 'currencies' | 'translations' | 'demonyms' | 'gini' | 'car' | 'idd'>
}

export class ObjectCountriesApi {
    private api: ObservableCountriesApi

    public constructor(configuration: Configuration, requestFactory?: CountriesApiRequestFactory, responseProcessor?: CountriesApiResponseProcessor) {
        this.api = new ObservableCountriesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns all available countries. Without filters, the model returns the complete country list inside an additional outer array. When filters are supplied, the response is the filtered country list directly.
     * Retrieve all countries
     * @param param the request object
     */
    public getAllCountriesWithHttpInfo(param: CountriesApiGetAllCountriesRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetAllCountries200Response>> {
        return this.api.getAllCountriesWithHttpInfo(param.xMrdScopes, param.filters,  options).toPromise();
    }

    /**
     * Returns all available countries. Without filters, the model returns the complete country list inside an additional outer array. When filters are supplied, the response is the filtered country list directly.
     * Retrieve all countries
     * @param param the request object
     */
    public getAllCountries(param: CountriesApiGetAllCountriesRequest, options?: ConfigurationOptions): Promise<GetAllCountries200Response> {
        return this.api.getAllCountries(param.xMrdScopes, param.filters,  options).toPromise();
    }

    /**
     * Returns the country matching the supplied lookup value. The value is converted to uppercase before lookup. Without filters, a matching country is returned inside an array. With filters, the filtered country object is returned directly. An unknown value returns an empty array.
     * Retrieve a country by CCA2 code
     * @param param the request object
     */
    public getCountryByCca2WithHttpInfo(param: CountriesApiGetCountryByCca2Request, options?: ConfigurationOptions): Promise<HttpInfo<GetCountryByCca2200Response>> {
        return this.api.getCountryByCca2WithHttpInfo(param.xMrdScopes, param.cca2, param.filters,  options).toPromise();
    }

    /**
     * Returns the country matching the supplied lookup value. The value is converted to uppercase before lookup. Without filters, a matching country is returned inside an array. With filters, the filtered country object is returned directly. An unknown value returns an empty array.
     * Retrieve a country by CCA2 code
     * @param param the request object
     */
    public getCountryByCca2(param: CountriesApiGetCountryByCca2Request, options?: ConfigurationOptions): Promise<GetCountryByCca2200Response> {
        return this.api.getCountryByCca2(param.xMrdScopes, param.cca2, param.filters,  options).toPromise();
    }

}

import { ObservableLivewellApi } from "./ObservableAPI";
import { LivewellApiRequestFactory, LivewellApiResponseProcessor} from "../apis/LivewellApi";

export interface LivewellApiGetLivewellLevelOneRequest {
    /**
     * MRD service scope required for Live Well endpoints.
     * Defaults to: &#39;live-well&#39;
     * @type &#39;live-well&#39;
     * @memberof LivewellApigetLivewellLevelOne
     */
    xMrdScopes: 'live-well'
    /**
     * First Live Well route segment, normally identifying a top-level topic or category.
     * Defaults to: undefined
     * @type string
     * @memberof LivewellApigetLivewellLevelOne
     */
    param1: string
    /**
     * Removes HTML markup from returned Live Well content. When supplied, this parameter must be set to \&#39;true\&#39;.
     * Defaults to: undefined
     * @type &#39;true&#39;
     * @memberof LivewellApigetLivewellLevelOne
     */
    noHtml?: 'true'
    /**
     * Replaces eligible MRD API links with their NHS website equivalents. When supplied, this parameter must be set to \&#39;true\&#39;.
     * Defaults to: undefined
     * @type &#39;true&#39;
     * @memberof LivewellApigetLivewellLevelOne
     */
    nhsLinks?: 'true'
}

export interface LivewellApiGetLivewellLevelThreeRequest {
    /**
     * MRD service scope required for Live Well endpoints.
     * Defaults to: &#39;live-well&#39;
     * @type &#39;live-well&#39;
     * @memberof LivewellApigetLivewellLevelThree
     */
    xMrdScopes: 'live-well'
    /**
     * First Live Well route segment, normally identifying a top-level topic or category.
     * Defaults to: undefined
     * @type string
     * @memberof LivewellApigetLivewellLevelThree
     */
    param1: string
    /**
     * Second Live Well route segment, normally identifying a category or page within a top-level topic.
     * Defaults to: undefined
     * @type string
     * @memberof LivewellApigetLivewellLevelThree
     */
    param2: string
    /**
     * Third Live Well route segment, normally identifying a deeply nested page within a Live Well category.
     * Defaults to: undefined
     * @type string
     * @memberof LivewellApigetLivewellLevelThree
     */
    param3: string
    /**
     * Removes HTML markup from returned Live Well content. When supplied, this parameter must be set to \&#39;true\&#39;.
     * Defaults to: undefined
     * @type &#39;true&#39;
     * @memberof LivewellApigetLivewellLevelThree
     */
    noHtml?: 'true'
    /**
     * Replaces eligible MRD API links with their NHS website equivalents. When supplied, this parameter must be set to \&#39;true\&#39;.
     * Defaults to: undefined
     * @type &#39;true&#39;
     * @memberof LivewellApigetLivewellLevelThree
     */
    nhsLinks?: 'true'
}

export interface LivewellApiGetLivewellLevelTwoRequest {
    /**
     * MRD service scope required for Live Well endpoints.
     * Defaults to: &#39;live-well&#39;
     * @type &#39;live-well&#39;
     * @memberof LivewellApigetLivewellLevelTwo
     */
    xMrdScopes: 'live-well'
    /**
     * First Live Well route segment, normally identifying a top-level topic or category.
     * Defaults to: undefined
     * @type string
     * @memberof LivewellApigetLivewellLevelTwo
     */
    param1: string
    /**
     * Second Live Well route segment, normally identifying a category or page within a top-level topic.
     * Defaults to: undefined
     * @type string
     * @memberof LivewellApigetLivewellLevelTwo
     */
    param2: string
    /**
     * Removes HTML markup from returned Live Well content. When supplied, this parameter must be set to \&#39;true\&#39;.
     * Defaults to: undefined
     * @type &#39;true&#39;
     * @memberof LivewellApigetLivewellLevelTwo
     */
    noHtml?: 'true'
    /**
     * Replaces eligible MRD API links with their NHS website equivalents. When supplied, this parameter must be set to \&#39;true\&#39;.
     * Defaults to: undefined
     * @type &#39;true&#39;
     * @memberof LivewellApigetLivewellLevelTwo
     */
    nhsLinks?: 'true'
}

export interface LivewellApiGetLivewellRoutesRequest {
    /**
     * MRD service scope required for Live Well endpoints.
     * Defaults to: &#39;live-well&#39;
     * @type &#39;live-well&#39;
     * @memberof LivewellApigetLivewellRoutes
     */
    xMrdScopes: 'live-well'
}

export interface LivewellApiSearchLivewellRequest {
    /**
     * MRD service scope required for Live Well endpoints.
     * Defaults to: &#39;live-well&#39;
     * @type &#39;live-well&#39;
     * @memberof LivewellApisearchLivewell
     */
    xMrdScopes: 'live-well'
    /**
     * Structured Live Well search filters supplied using indexed bracket notation, for example filters[0][operator]&#x3D;LIKE&amp;filters[0][value]&#x3D;healthy eating&amp;filters[0][condition]&#x3D;AND&amp;filters[1][operator]&#x3D;LIKE&amp;filters[1][value]&#x3D;diet&amp;filters[1][condition]&#x3D;. Each filter must contain exactly value, operator and condition.
     * Defaults to: undefined
     * @type Array&lt;LivewellSearchFilter&gt;
     * @memberof LivewellApisearchLivewell
     */
    filters: Array<LivewellSearchFilter>
    /**
     * Removes HTML markup from returned Live Well content. When supplied, this parameter must be set to \&#39;true\&#39;.
     * Defaults to: undefined
     * @type &#39;true&#39;
     * @memberof LivewellApisearchLivewell
     */
    noHtml?: 'true'
    /**
     * Replaces eligible MRD API links with their NHS website equivalents. When supplied, this parameter must be set to \&#39;true\&#39;.
     * Defaults to: undefined
     * @type &#39;true&#39;
     * @memberof LivewellApisearchLivewell
     */
    nhsLinks?: 'true'
    /**
     * Extends Live Well search to page-content text in addition to the default page description. When supplied, this parameter must be set to \&#39;true\&#39;. This parameter is only valid on the search endpoint.
     * Defaults to: undefined
     * @type &#39;true&#39;
     * @memberof LivewellApisearchLivewell
     */
    searchAll?: 'true'
}

export class ObjectLivewellApi {
    private api: ObservableLivewellApi

    public constructor(configuration: Configuration, requestFactory?: LivewellApiRequestFactory, responseProcessor?: LivewellApiResponseProcessor) {
        this.api = new ObservableLivewellApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a first-level Live Well route. no_html removes HTML markup and nhs_links rewrites eligible MRD links to NHS website links. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a first-level Live Well page
     * @param param the request object
     */
    public getLivewellLevelOneWithHttpInfo(param: LivewellApiGetLivewellLevelOneRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetLivewellLevelOne200Response>> {
        return this.api.getLivewellLevelOneWithHttpInfo(param.xMrdScopes, param.param1, param.noHtml, param.nhsLinks,  options).toPromise();
    }

    /**
     * Returns a first-level Live Well route. no_html removes HTML markup and nhs_links rewrites eligible MRD links to NHS website links. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a first-level Live Well page
     * @param param the request object
     */
    public getLivewellLevelOne(param: LivewellApiGetLivewellLevelOneRequest, options?: ConfigurationOptions): Promise<GetLivewellLevelOne200Response> {
        return this.api.getLivewellLevelOne(param.xMrdScopes, param.param1, param.noHtml, param.nhsLinks,  options).toPromise();
    }

    /**
     * Returns deeply nested Live Well content. The response uses the same flexible NHS page structure as first-level and second-level routes. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a third-level Live Well page
     * @param param the request object
     */
    public getLivewellLevelThreeWithHttpInfo(param: LivewellApiGetLivewellLevelThreeRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetLivewellLevelOne200Response>> {
        return this.api.getLivewellLevelThreeWithHttpInfo(param.xMrdScopes, param.param1, param.param2, param.param3, param.noHtml, param.nhsLinks,  options).toPromise();
    }

    /**
     * Returns deeply nested Live Well content. The response uses the same flexible NHS page structure as first-level and second-level routes. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a third-level Live Well page
     * @param param the request object
     */
    public getLivewellLevelThree(param: LivewellApiGetLivewellLevelThreeRequest, options?: ConfigurationOptions): Promise<GetLivewellLevelOne200Response> {
        return this.api.getLivewellLevelThree(param.xMrdScopes, param.param1, param.param2, param.param3, param.noHtml, param.nhsLinks,  options).toPromise();
    }

    /**
     * Returns a second-level page or category within a Live Well topic. HTML and link behaviour can be controlled using no_html and nhs_links. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a second-level Live Well page
     * @param param the request object
     */
    public getLivewellLevelTwoWithHttpInfo(param: LivewellApiGetLivewellLevelTwoRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetLivewellLevelOne200Response>> {
        return this.api.getLivewellLevelTwoWithHttpInfo(param.xMrdScopes, param.param1, param.param2, param.noHtml, param.nhsLinks,  options).toPromise();
    }

    /**
     * Returns a second-level page or category within a Live Well topic. HTML and link behaviour can be controlled using no_html and nhs_links. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a second-level Live Well page
     * @param param the request object
     */
    public getLivewellLevelTwo(param: LivewellApiGetLivewellLevelTwoRequest, options?: ConfigurationOptions): Promise<GetLivewellLevelOne200Response> {
        return this.api.getLivewellLevelTwo(param.xMrdScopes, param.param1, param.param2, param.noHtml, param.nhsLinks,  options).toPromise();
    }

    /**
     * Returns the available routes within the NHS Live Well dataset.
     * Retrieve available Live Well routes
     * @param param the request object
     */
    public getLivewellRoutesWithHttpInfo(param: LivewellApiGetLivewellRoutesRequest, options?: ConfigurationOptions): Promise<HttpInfo<LivewellRoutesResponse>> {
        return this.api.getLivewellRoutesWithHttpInfo(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Returns the available routes within the NHS Live Well dataset.
     * Retrieve available Live Well routes
     * @param param the request object
     */
    public getLivewellRoutes(param: LivewellApiGetLivewellRoutesRequest, options?: ConfigurationOptions): Promise<LivewellRoutesResponse> {
        return this.api.getLivewellRoutes(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Searches the NHS Live Well dataset using structured filters. By default filters search page descriptions. When search_all is enabled, page-content text is also searched.
     * Search Live Well content
     * @param param the request object
     */
    public searchLivewellWithHttpInfo(param: LivewellApiSearchLivewellRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<LivewellData>>> {
        return this.api.searchLivewellWithHttpInfo(param.xMrdScopes, param.filters, param.noHtml, param.nhsLinks, param.searchAll,  options).toPromise();
    }

    /**
     * Searches the NHS Live Well dataset using structured filters. By default filters search page descriptions. When search_all is enabled, page-content text is also searched.
     * Search Live Well content
     * @param param the request object
     */
    public searchLivewell(param: LivewellApiSearchLivewellRequest, options?: ConfigurationOptions): Promise<Array<LivewellData>> {
        return this.api.searchLivewell(param.xMrdScopes, param.filters, param.noHtml, param.nhsLinks, param.searchAll,  options).toPromise();
    }

}

import { ObservableMeasurementsApi } from "./ObservableAPI";
import { MeasurementsApiRequestFactory, MeasurementsApiResponseProcessor} from "../apis/MeasurementsApi";

export interface MeasurementsApiGetActivityTypeRequest {
    /**
     * MRD service scope required for Measurements endpoints.
     * Defaults to: &#39;measurements&#39;
     * @type &#39;measurements&#39;
     * @memberof MeasurementsApigetActivityType
     */
    xMrdScopes: 'measurements'
    /**
     * Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     * Defaults to: undefined
     * @type number
     * @memberof MeasurementsApigetActivityType
     */
    id: number
}

export interface MeasurementsApiGetActivityTypesRequest {
    /**
     * MRD service scope required for Measurements endpoints.
     * Defaults to: &#39;measurements&#39;
     * @type &#39;measurements&#39;
     * @memberof MeasurementsApigetActivityTypes
     */
    xMrdScopes: 'measurements'
}

export interface MeasurementsApiGetBloodPressureMeasurementRequest {
    /**
     * MRD service scope required for Measurements endpoints.
     * Defaults to: &#39;measurements&#39;
     * @type &#39;measurements&#39;
     * @memberof MeasurementsApigetBloodPressureMeasurement
     */
    xMrdScopes: 'measurements'
    /**
     * Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     * Defaults to: undefined
     * @type number
     * @memberof MeasurementsApigetBloodPressureMeasurement
     */
    id: number
}

export interface MeasurementsApiGetBloodPressureMeasurementsRequest {
    /**
     * MRD service scope required for Measurements endpoints.
     * Defaults to: &#39;measurements&#39;
     * @type &#39;measurements&#39;
     * @memberof MeasurementsApigetBloodPressureMeasurements
     */
    xMrdScopes: 'measurements'
}

export interface MeasurementsApiGetBloodSpecimenSourceRequest {
    /**
     * MRD service scope required for Measurements endpoints.
     * Defaults to: &#39;measurements&#39;
     * @type &#39;measurements&#39;
     * @memberof MeasurementsApigetBloodSpecimenSource
     */
    xMrdScopes: 'measurements'
    /**
     * Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     * Defaults to: undefined
     * @type number
     * @memberof MeasurementsApigetBloodSpecimenSource
     */
    id: number
}

export interface MeasurementsApiGetBloodSpecimenSourcesRequest {
    /**
     * MRD service scope required for Measurements endpoints.
     * Defaults to: &#39;measurements&#39;
     * @type &#39;measurements&#39;
     * @memberof MeasurementsApigetBloodSpecimenSources
     */
    xMrdScopes: 'measurements'
}

export interface MeasurementsApiGetBodyPositionRequest {
    /**
     * MRD service scope required for Measurements endpoints.
     * Defaults to: &#39;measurements&#39;
     * @type &#39;measurements&#39;
     * @memberof MeasurementsApigetBodyPosition
     */
    xMrdScopes: 'measurements'
    /**
     * Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     * Defaults to: undefined
     * @type number
     * @memberof MeasurementsApigetBodyPosition
     */
    id: number
}

export interface MeasurementsApiGetBodyPositionsRequest {
    /**
     * MRD service scope required for Measurements endpoints.
     * Defaults to: &#39;measurements&#39;
     * @type &#39;measurements&#39;
     * @memberof MeasurementsApigetBodyPositions
     */
    xMrdScopes: 'measurements'
}

export interface MeasurementsApiGetBodyTemperatureLocationRequest {
    /**
     * MRD service scope required for Measurements endpoints.
     * Defaults to: &#39;measurements&#39;
     * @type &#39;measurements&#39;
     * @memberof MeasurementsApigetBodyTemperatureLocation
     */
    xMrdScopes: 'measurements'
    /**
     * Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     * Defaults to: undefined
     * @type number
     * @memberof MeasurementsApigetBodyTemperatureLocation
     */
    id: number
}

export interface MeasurementsApiGetBodyTemperatureLocationsRequest {
    /**
     * MRD service scope required for Measurements endpoints.
     * Defaults to: &#39;measurements&#39;
     * @type &#39;measurements&#39;
     * @memberof MeasurementsApigetBodyTemperatureLocations
     */
    xMrdScopes: 'measurements'
}

export interface MeasurementsApiGetCervicalDilationRequest {
    /**
     * MRD service scope required for Measurements endpoints.
     * Defaults to: &#39;measurements&#39;
     * @type &#39;measurements&#39;
     * @memberof MeasurementsApigetCervicalDilation
     */
    xMrdScopes: 'measurements'
    /**
     * Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     * Defaults to: undefined
     * @type number
     * @memberof MeasurementsApigetCervicalDilation
     */
    id: number
}

export interface MeasurementsApiGetCervicalDilationsRequest {
    /**
     * MRD service scope required for Measurements endpoints.
     * Defaults to: &#39;measurements&#39;
     * @type &#39;measurements&#39;
     * @memberof MeasurementsApigetCervicalDilations
     */
    xMrdScopes: 'measurements'
}

export interface MeasurementsApiGetCervicalFirmnessRequest {
    /**
     * MRD service scope required for Measurements endpoints.
     * Defaults to: &#39;measurements&#39;
     * @type &#39;measurements&#39;
     * @memberof MeasurementsApigetCervicalFirmness
     */
    xMrdScopes: 'measurements'
    /**
     * Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     * Defaults to: undefined
     * @type number
     * @memberof MeasurementsApigetCervicalFirmness
     */
    id: number
}

export interface MeasurementsApiGetCervicalFirmnessValuesRequest {
    /**
     * MRD service scope required for Measurements endpoints.
     * Defaults to: &#39;measurements&#39;
     * @type &#39;measurements&#39;
     * @memberof MeasurementsApigetCervicalFirmnessValues
     */
    xMrdScopes: 'measurements'
}

export interface MeasurementsApiGetCervicalMucusAmountRequest {
    /**
     * MRD service scope required for Measurements endpoints.
     * Defaults to: &#39;measurements&#39;
     * @type &#39;measurements&#39;
     * @memberof MeasurementsApigetCervicalMucusAmount
     */
    xMrdScopes: 'measurements'
    /**
     * Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     * Defaults to: undefined
     * @type number
     * @memberof MeasurementsApigetCervicalMucusAmount
     */
    id: number
}

export interface MeasurementsApiGetCervicalMucusAmountsRequest {
    /**
     * MRD service scope required for Measurements endpoints.
     * Defaults to: &#39;measurements&#39;
     * @type &#39;measurements&#39;
     * @memberof MeasurementsApigetCervicalMucusAmounts
     */
    xMrdScopes: 'measurements'
}

export interface MeasurementsApiGetCervicalMucusTextureRequest {
    /**
     * MRD service scope required for Measurements endpoints.
     * Defaults to: &#39;measurements&#39;
     * @type &#39;measurements&#39;
     * @memberof MeasurementsApigetCervicalMucusTexture
     */
    xMrdScopes: 'measurements'
    /**
     * Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     * Defaults to: undefined
     * @type number
     * @memberof MeasurementsApigetCervicalMucusTexture
     */
    id: number
}

export interface MeasurementsApiGetCervicalMucusTexturesRequest {
    /**
     * MRD service scope required for Measurements endpoints.
     * Defaults to: &#39;measurements&#39;
     * @type &#39;measurements&#39;
     * @memberof MeasurementsApigetCervicalMucusTextures
     */
    xMrdScopes: 'measurements'
}

export interface MeasurementsApiGetCervicalPositionRequest {
    /**
     * MRD service scope required for Measurements endpoints.
     * Defaults to: &#39;measurements&#39;
     * @type &#39;measurements&#39;
     * @memberof MeasurementsApigetCervicalPosition
     */
    xMrdScopes: 'measurements'
    /**
     * Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     * Defaults to: undefined
     * @type number
     * @memberof MeasurementsApigetCervicalPosition
     */
    id: number
}

export interface MeasurementsApiGetCervicalPositionsRequest {
    /**
     * MRD service scope required for Measurements endpoints.
     * Defaults to: &#39;measurements&#39;
     * @type &#39;measurements&#39;
     * @memberof MeasurementsApigetCervicalPositions
     */
    xMrdScopes: 'measurements'
}

export interface MeasurementsApiGetExerciseTypeByNameRequest {
    /**
     * MRD service scope required for Measurements endpoints.
     * Defaults to: &#39;measurements&#39;
     * @type &#39;measurements&#39;
     * @memberof MeasurementsApigetExerciseTypeByName
     */
    xMrdScopes: 'measurements'
    /**
     * Exercise type name used to retrieve a specific exercise-type record.
     * Defaults to: undefined
     * @type string
     * @memberof MeasurementsApigetExerciseTypeByName
     */
    exerciseTypeName: string
}

export interface MeasurementsApiGetExerciseTypesRequest {
    /**
     * MRD service scope required for Measurements endpoints.
     * Defaults to: &#39;measurements&#39;
     * @type &#39;measurements&#39;
     * @memberof MeasurementsApigetExerciseTypes
     */
    xMrdScopes: 'measurements'
}

export interface MeasurementsApiGetMealTypeRequest {
    /**
     * MRD service scope required for Measurements endpoints.
     * Defaults to: &#39;measurements&#39;
     * @type &#39;measurements&#39;
     * @memberof MeasurementsApigetMealType
     */
    xMrdScopes: 'measurements'
    /**
     * Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     * Defaults to: undefined
     * @type number
     * @memberof MeasurementsApigetMealType
     */
    id: number
}

export interface MeasurementsApiGetMealTypesRequest {
    /**
     * MRD service scope required for Measurements endpoints.
     * Defaults to: &#39;measurements&#39;
     * @type &#39;measurements&#39;
     * @memberof MeasurementsApigetMealTypes
     */
    xMrdScopes: 'measurements'
}

export interface MeasurementsApiGetMeasurementGroupRequest {
    /**
     * MRD service scope required for Measurements endpoints.
     * Defaults to: &#39;measurements&#39;
     * @type &#39;measurements&#39;
     * @memberof MeasurementsApigetMeasurementGroup
     */
    xMrdScopes: 'measurements'
    /**
     * Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     * Defaults to: undefined
     * @type number
     * @memberof MeasurementsApigetMeasurementGroup
     */
    id: number
}

export interface MeasurementsApiGetMeasurementGroupsRequest {
    /**
     * MRD service scope required for Measurements endpoints.
     * Defaults to: &#39;measurements&#39;
     * @type &#39;measurements&#39;
     * @memberof MeasurementsApigetMeasurementGroups
     */
    xMrdScopes: 'measurements'
}

export interface MeasurementsApiGetMeasurementTypeRequest {
    /**
     * MRD service scope required for Measurements endpoints.
     * Defaults to: &#39;measurements&#39;
     * @type &#39;measurements&#39;
     * @memberof MeasurementsApigetMeasurementType
     */
    xMrdScopes: 'measurements'
    /**
     * Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     * Defaults to: undefined
     * @type number
     * @memberof MeasurementsApigetMeasurementType
     */
    id: number
}

export interface MeasurementsApiGetMeasurementTypesRequest {
    /**
     * MRD service scope required for Measurements endpoints.
     * Defaults to: &#39;measurements&#39;
     * @type &#39;measurements&#39;
     * @memberof MeasurementsApigetMeasurementTypes
     */
    xMrdScopes: 'measurements'
}

export interface MeasurementsApiGetMeasurementUnitRequest {
    /**
     * MRD service scope required for Measurements endpoints.
     * Defaults to: &#39;measurements&#39;
     * @type &#39;measurements&#39;
     * @memberof MeasurementsApigetMeasurementUnit
     */
    xMrdScopes: 'measurements'
    /**
     * Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     * Defaults to: undefined
     * @type number
     * @memberof MeasurementsApigetMeasurementUnit
     */
    id: number
}

export interface MeasurementsApiGetMeasurementUnitsRequest {
    /**
     * MRD service scope required for Measurements endpoints.
     * Defaults to: &#39;measurements&#39;
     * @type &#39;measurements&#39;
     * @memberof MeasurementsApigetMeasurementUnits
     */
    xMrdScopes: 'measurements'
}

export interface MeasurementsApiGetResistanceTypeRequest {
    /**
     * MRD service scope required for Measurements endpoints.
     * Defaults to: &#39;measurements&#39;
     * @type &#39;measurements&#39;
     * @memberof MeasurementsApigetResistanceType
     */
    xMrdScopes: 'measurements'
    /**
     * Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     * Defaults to: undefined
     * @type number
     * @memberof MeasurementsApigetResistanceType
     */
    id: number
}

export interface MeasurementsApiGetResistanceTypesRequest {
    /**
     * MRD service scope required for Measurements endpoints.
     * Defaults to: &#39;measurements&#39;
     * @type &#39;measurements&#39;
     * @memberof MeasurementsApigetResistanceTypes
     */
    xMrdScopes: 'measurements'
}

export interface MeasurementsApiGetSleepSegmentTypeRequest {
    /**
     * MRD service scope required for Measurements endpoints.
     * Defaults to: &#39;measurements&#39;
     * @type &#39;measurements&#39;
     * @memberof MeasurementsApigetSleepSegmentType
     */
    xMrdScopes: 'measurements'
    /**
     * Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     * Defaults to: undefined
     * @type number
     * @memberof MeasurementsApigetSleepSegmentType
     */
    id: number
}

export interface MeasurementsApiGetSleepSegmentTypesRequest {
    /**
     * MRD service scope required for Measurements endpoints.
     * Defaults to: &#39;measurements&#39;
     * @type &#39;measurements&#39;
     * @memberof MeasurementsApigetSleepSegmentTypes
     */
    xMrdScopes: 'measurements'
}

export interface MeasurementsApiGetTemporalRelationToMealRequest {
    /**
     * MRD service scope required for Measurements endpoints.
     * Defaults to: &#39;measurements&#39;
     * @type &#39;measurements&#39;
     * @memberof MeasurementsApigetTemporalRelationToMeal
     */
    xMrdScopes: 'measurements'
    /**
     * Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     * Defaults to: undefined
     * @type number
     * @memberof MeasurementsApigetTemporalRelationToMeal
     */
    id: number
}

export interface MeasurementsApiGetTemporalRelationToSleepRequest {
    /**
     * MRD service scope required for Measurements endpoints.
     * Defaults to: &#39;measurements&#39;
     * @type &#39;measurements&#39;
     * @memberof MeasurementsApigetTemporalRelationToSleep
     */
    xMrdScopes: 'measurements'
    /**
     * Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     * Defaults to: undefined
     * @type number
     * @memberof MeasurementsApigetTemporalRelationToSleep
     */
    id: number
}

export interface MeasurementsApiGetTemporalRelationsToMealRequest {
    /**
     * MRD service scope required for Measurements endpoints.
     * Defaults to: &#39;measurements&#39;
     * @type &#39;measurements&#39;
     * @memberof MeasurementsApigetTemporalRelationsToMeal
     */
    xMrdScopes: 'measurements'
}

export interface MeasurementsApiGetTemporalRelationsToSleepRequest {
    /**
     * MRD service scope required for Measurements endpoints.
     * Defaults to: &#39;measurements&#39;
     * @type &#39;measurements&#39;
     * @memberof MeasurementsApigetTemporalRelationsToSleep
     */
    xMrdScopes: 'measurements'
}

export class ObjectMeasurementsApi {
    private api: ObservableMeasurementsApi

    public constructor(configuration: Configuration, requestFactory?: MeasurementsApiRequestFactory, responseProcessor?: MeasurementsApiResponseProcessor) {
        this.api = new ObservableMeasurementsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns the activity type matching the supplied activity_type_id.
     * Retrieve an activity type by ID
     * @param param the request object
     */
    public getActivityTypeWithHttpInfo(param: MeasurementsApiGetActivityTypeRequest, options?: ConfigurationOptions): Promise<HttpInfo<MeasurementActivityTypeResult>> {
        return this.api.getActivityTypeWithHttpInfo(param.xMrdScopes, param.id,  options).toPromise();
    }

    /**
     * Returns the activity type matching the supplied activity_type_id.
     * Retrieve an activity type by ID
     * @param param the request object
     */
    public getActivityType(param: MeasurementsApiGetActivityTypeRequest, options?: ConfigurationOptions): Promise<MeasurementActivityTypeResult> {
        return this.api.getActivityType(param.xMrdScopes, param.id,  options).toPromise();
    }

    /**
     * Returns activity types including the database record ID, activity type ID and description.
     * Retrieve all activity types
     * @param param the request object
     */
    public getActivityTypesWithHttpInfo(param: MeasurementsApiGetActivityTypesRequest, options?: ConfigurationOptions): Promise<HttpInfo<MeasurementActivityTypesResult>> {
        return this.api.getActivityTypesWithHttpInfo(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Returns activity types including the database record ID, activity type ID and description.
     * Retrieve all activity types
     * @param param the request object
     */
    public getActivityTypes(param: MeasurementsApiGetActivityTypesRequest, options?: ConfigurationOptions): Promise<MeasurementActivityTypesResult> {
        return this.api.getActivityTypes(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Returns the blood pressure measurement type matching the supplied blood_pressure_measurement_id.
     * Retrieve a blood pressure measurement type by ID
     * @param param the request object
     */
    public getBloodPressureMeasurementWithHttpInfo(param: MeasurementsApiGetBloodPressureMeasurementRequest, options?: ConfigurationOptions): Promise<HttpInfo<MeasurementBloodPressureMeasurementResult>> {
        return this.api.getBloodPressureMeasurementWithHttpInfo(param.xMrdScopes, param.id,  options).toPromise();
    }

    /**
     * Returns the blood pressure measurement type matching the supplied blood_pressure_measurement_id.
     * Retrieve a blood pressure measurement type by ID
     * @param param the request object
     */
    public getBloodPressureMeasurement(param: MeasurementsApiGetBloodPressureMeasurementRequest, options?: ConfigurationOptions): Promise<MeasurementBloodPressureMeasurementResult> {
        return this.api.getBloodPressureMeasurement(param.xMrdScopes, param.id,  options).toPromise();
    }

    /**
     * Returns blood pressure measurement types including the database record ID, blood pressure measurement ID and description.
     * Retrieve all blood pressure measurement types
     * @param param the request object
     */
    public getBloodPressureMeasurementsWithHttpInfo(param: MeasurementsApiGetBloodPressureMeasurementsRequest, options?: ConfigurationOptions): Promise<HttpInfo<MeasurementBloodPressureMeasurementsResult>> {
        return this.api.getBloodPressureMeasurementsWithHttpInfo(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Returns blood pressure measurement types including the database record ID, blood pressure measurement ID and description.
     * Retrieve all blood pressure measurement types
     * @param param the request object
     */
    public getBloodPressureMeasurements(param: MeasurementsApiGetBloodPressureMeasurementsRequest, options?: ConfigurationOptions): Promise<MeasurementBloodPressureMeasurementsResult> {
        return this.api.getBloodPressureMeasurements(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Returns the blood specimen source matching the supplied blood_specimen_source_id.
     * Retrieve a blood specimen source by ID
     * @param param the request object
     */
    public getBloodSpecimenSourceWithHttpInfo(param: MeasurementsApiGetBloodSpecimenSourceRequest, options?: ConfigurationOptions): Promise<HttpInfo<MeasurementBloodSpecimenSourceResult>> {
        return this.api.getBloodSpecimenSourceWithHttpInfo(param.xMrdScopes, param.id,  options).toPromise();
    }

    /**
     * Returns the blood specimen source matching the supplied blood_specimen_source_id.
     * Retrieve a blood specimen source by ID
     * @param param the request object
     */
    public getBloodSpecimenSource(param: MeasurementsApiGetBloodSpecimenSourceRequest, options?: ConfigurationOptions): Promise<MeasurementBloodSpecimenSourceResult> {
        return this.api.getBloodSpecimenSource(param.xMrdScopes, param.id,  options).toPromise();
    }

    /**
     * Returns blood specimen sources including the database record ID, blood specimen source ID and description.
     * Retrieve all blood specimen sources
     * @param param the request object
     */
    public getBloodSpecimenSourcesWithHttpInfo(param: MeasurementsApiGetBloodSpecimenSourcesRequest, options?: ConfigurationOptions): Promise<HttpInfo<MeasurementBloodSpecimenSourcesResult>> {
        return this.api.getBloodSpecimenSourcesWithHttpInfo(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Returns blood specimen sources including the database record ID, blood specimen source ID and description.
     * Retrieve all blood specimen sources
     * @param param the request object
     */
    public getBloodSpecimenSources(param: MeasurementsApiGetBloodSpecimenSourcesRequest, options?: ConfigurationOptions): Promise<MeasurementBloodSpecimenSourcesResult> {
        return this.api.getBloodSpecimenSources(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Returns the body position matching the supplied body_position_id.
     * Retrieve a body position by ID
     * @param param the request object
     */
    public getBodyPositionWithHttpInfo(param: MeasurementsApiGetBodyPositionRequest, options?: ConfigurationOptions): Promise<HttpInfo<MeasurementBodyPositionResult>> {
        return this.api.getBodyPositionWithHttpInfo(param.xMrdScopes, param.id,  options).toPromise();
    }

    /**
     * Returns the body position matching the supplied body_position_id.
     * Retrieve a body position by ID
     * @param param the request object
     */
    public getBodyPosition(param: MeasurementsApiGetBodyPositionRequest, options?: ConfigurationOptions): Promise<MeasurementBodyPositionResult> {
        return this.api.getBodyPosition(param.xMrdScopes, param.id,  options).toPromise();
    }

    /**
     * Returns body positions including the database record ID, body position ID and description.
     * Retrieve all body positions
     * @param param the request object
     */
    public getBodyPositionsWithHttpInfo(param: MeasurementsApiGetBodyPositionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<MeasurementBodyPositionsResult>> {
        return this.api.getBodyPositionsWithHttpInfo(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Returns body positions including the database record ID, body position ID and description.
     * Retrieve all body positions
     * @param param the request object
     */
    public getBodyPositions(param: MeasurementsApiGetBodyPositionsRequest, options?: ConfigurationOptions): Promise<MeasurementBodyPositionsResult> {
        return this.api.getBodyPositions(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Returns the body temperature location matching the supplied body_temperature_location_id.
     * Retrieve a body temperature location by ID
     * @param param the request object
     */
    public getBodyTemperatureLocationWithHttpInfo(param: MeasurementsApiGetBodyTemperatureLocationRequest, options?: ConfigurationOptions): Promise<HttpInfo<MeasurementBodyTemperatureLocationResult>> {
        return this.api.getBodyTemperatureLocationWithHttpInfo(param.xMrdScopes, param.id,  options).toPromise();
    }

    /**
     * Returns the body temperature location matching the supplied body_temperature_location_id.
     * Retrieve a body temperature location by ID
     * @param param the request object
     */
    public getBodyTemperatureLocation(param: MeasurementsApiGetBodyTemperatureLocationRequest, options?: ConfigurationOptions): Promise<MeasurementBodyTemperatureLocationResult> {
        return this.api.getBodyTemperatureLocation(param.xMrdScopes, param.id,  options).toPromise();
    }

    /**
     * Returns body temperature locations including the database record ID, body temperature location ID and description.
     * Retrieve all body temperature locations
     * @param param the request object
     */
    public getBodyTemperatureLocationsWithHttpInfo(param: MeasurementsApiGetBodyTemperatureLocationsRequest, options?: ConfigurationOptions): Promise<HttpInfo<MeasurementBodyTemperatureLocationsResult>> {
        return this.api.getBodyTemperatureLocationsWithHttpInfo(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Returns body temperature locations including the database record ID, body temperature location ID and description.
     * Retrieve all body temperature locations
     * @param param the request object
     */
    public getBodyTemperatureLocations(param: MeasurementsApiGetBodyTemperatureLocationsRequest, options?: ConfigurationOptions): Promise<MeasurementBodyTemperatureLocationsResult> {
        return this.api.getBodyTemperatureLocations(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Returns the cervical dilation matching the supplied cervical_dilation_id.
     * Retrieve a cervical dilation by ID
     * @param param the request object
     */
    public getCervicalDilationWithHttpInfo(param: MeasurementsApiGetCervicalDilationRequest, options?: ConfigurationOptions): Promise<HttpInfo<MeasurementCervicalDilationResult>> {
        return this.api.getCervicalDilationWithHttpInfo(param.xMrdScopes, param.id,  options).toPromise();
    }

    /**
     * Returns the cervical dilation matching the supplied cervical_dilation_id.
     * Retrieve a cervical dilation by ID
     * @param param the request object
     */
    public getCervicalDilation(param: MeasurementsApiGetCervicalDilationRequest, options?: ConfigurationOptions): Promise<MeasurementCervicalDilationResult> {
        return this.api.getCervicalDilation(param.xMrdScopes, param.id,  options).toPromise();
    }

    /**
     * Returns cervical dilations including the database record ID, cervical dilation ID and description.
     * Retrieve all cervical dilations
     * @param param the request object
     */
    public getCervicalDilationsWithHttpInfo(param: MeasurementsApiGetCervicalDilationsRequest, options?: ConfigurationOptions): Promise<HttpInfo<MeasurementCervicalDilationsResult>> {
        return this.api.getCervicalDilationsWithHttpInfo(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Returns cervical dilations including the database record ID, cervical dilation ID and description.
     * Retrieve all cervical dilations
     * @param param the request object
     */
    public getCervicalDilations(param: MeasurementsApiGetCervicalDilationsRequest, options?: ConfigurationOptions): Promise<MeasurementCervicalDilationsResult> {
        return this.api.getCervicalDilations(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Returns the cervical firmness value matching the supplied cervical_firmness_id.
     * Retrieve a cervical firmness value by ID
     * @param param the request object
     */
    public getCervicalFirmnessWithHttpInfo(param: MeasurementsApiGetCervicalFirmnessRequest, options?: ConfigurationOptions): Promise<HttpInfo<MeasurementCervicalFirmnessResult>> {
        return this.api.getCervicalFirmnessWithHttpInfo(param.xMrdScopes, param.id,  options).toPromise();
    }

    /**
     * Returns the cervical firmness value matching the supplied cervical_firmness_id.
     * Retrieve a cervical firmness value by ID
     * @param param the request object
     */
    public getCervicalFirmness(param: MeasurementsApiGetCervicalFirmnessRequest, options?: ConfigurationOptions): Promise<MeasurementCervicalFirmnessResult> {
        return this.api.getCervicalFirmness(param.xMrdScopes, param.id,  options).toPromise();
    }

    /**
     * Returns cervical firmness values including the database record ID, cervical firmness ID and description.
     * Retrieve all cervical firmness values
     * @param param the request object
     */
    public getCervicalFirmnessValuesWithHttpInfo(param: MeasurementsApiGetCervicalFirmnessValuesRequest, options?: ConfigurationOptions): Promise<HttpInfo<MeasurementCervicalFirmnessValuesResult>> {
        return this.api.getCervicalFirmnessValuesWithHttpInfo(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Returns cervical firmness values including the database record ID, cervical firmness ID and description.
     * Retrieve all cervical firmness values
     * @param param the request object
     */
    public getCervicalFirmnessValues(param: MeasurementsApiGetCervicalFirmnessValuesRequest, options?: ConfigurationOptions): Promise<MeasurementCervicalFirmnessValuesResult> {
        return this.api.getCervicalFirmnessValues(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Returns the cervical mucus amount matching the supplied cervical_mucus_amount_id.
     * Retrieve a cervical mucus amount by ID
     * @param param the request object
     */
    public getCervicalMucusAmountWithHttpInfo(param: MeasurementsApiGetCervicalMucusAmountRequest, options?: ConfigurationOptions): Promise<HttpInfo<MeasurementCervicalMucusAmountResult>> {
        return this.api.getCervicalMucusAmountWithHttpInfo(param.xMrdScopes, param.id,  options).toPromise();
    }

    /**
     * Returns the cervical mucus amount matching the supplied cervical_mucus_amount_id.
     * Retrieve a cervical mucus amount by ID
     * @param param the request object
     */
    public getCervicalMucusAmount(param: MeasurementsApiGetCervicalMucusAmountRequest, options?: ConfigurationOptions): Promise<MeasurementCervicalMucusAmountResult> {
        return this.api.getCervicalMucusAmount(param.xMrdScopes, param.id,  options).toPromise();
    }

    /**
     * Returns cervical mucus amounts including the database record ID, cervical mucus amount ID and description.
     * Retrieve all cervical mucus amounts
     * @param param the request object
     */
    public getCervicalMucusAmountsWithHttpInfo(param: MeasurementsApiGetCervicalMucusAmountsRequest, options?: ConfigurationOptions): Promise<HttpInfo<MeasurementCervicalMucusAmountsResult>> {
        return this.api.getCervicalMucusAmountsWithHttpInfo(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Returns cervical mucus amounts including the database record ID, cervical mucus amount ID and description.
     * Retrieve all cervical mucus amounts
     * @param param the request object
     */
    public getCervicalMucusAmounts(param: MeasurementsApiGetCervicalMucusAmountsRequest, options?: ConfigurationOptions): Promise<MeasurementCervicalMucusAmountsResult> {
        return this.api.getCervicalMucusAmounts(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Returns the cervical mucus texture matching the supplied cervical_mucus_texture_id.
     * Retrieve a cervical mucus texture by ID
     * @param param the request object
     */
    public getCervicalMucusTextureWithHttpInfo(param: MeasurementsApiGetCervicalMucusTextureRequest, options?: ConfigurationOptions): Promise<HttpInfo<MeasurementCervicalMucusTextureResult>> {
        return this.api.getCervicalMucusTextureWithHttpInfo(param.xMrdScopes, param.id,  options).toPromise();
    }

    /**
     * Returns the cervical mucus texture matching the supplied cervical_mucus_texture_id.
     * Retrieve a cervical mucus texture by ID
     * @param param the request object
     */
    public getCervicalMucusTexture(param: MeasurementsApiGetCervicalMucusTextureRequest, options?: ConfigurationOptions): Promise<MeasurementCervicalMucusTextureResult> {
        return this.api.getCervicalMucusTexture(param.xMrdScopes, param.id,  options).toPromise();
    }

    /**
     * Returns cervical mucus textures including the database record ID, cervical mucus texture ID and description.
     * Retrieve all cervical mucus textures
     * @param param the request object
     */
    public getCervicalMucusTexturesWithHttpInfo(param: MeasurementsApiGetCervicalMucusTexturesRequest, options?: ConfigurationOptions): Promise<HttpInfo<MeasurementCervicalMucusTexturesResult>> {
        return this.api.getCervicalMucusTexturesWithHttpInfo(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Returns cervical mucus textures including the database record ID, cervical mucus texture ID and description.
     * Retrieve all cervical mucus textures
     * @param param the request object
     */
    public getCervicalMucusTextures(param: MeasurementsApiGetCervicalMucusTexturesRequest, options?: ConfigurationOptions): Promise<MeasurementCervicalMucusTexturesResult> {
        return this.api.getCervicalMucusTextures(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Returns the cervical position matching the supplied cervical_position_id.
     * Retrieve a cervical position by ID
     * @param param the request object
     */
    public getCervicalPositionWithHttpInfo(param: MeasurementsApiGetCervicalPositionRequest, options?: ConfigurationOptions): Promise<HttpInfo<MeasurementCervicalPositionResult>> {
        return this.api.getCervicalPositionWithHttpInfo(param.xMrdScopes, param.id,  options).toPromise();
    }

    /**
     * Returns the cervical position matching the supplied cervical_position_id.
     * Retrieve a cervical position by ID
     * @param param the request object
     */
    public getCervicalPosition(param: MeasurementsApiGetCervicalPositionRequest, options?: ConfigurationOptions): Promise<MeasurementCervicalPositionResult> {
        return this.api.getCervicalPosition(param.xMrdScopes, param.id,  options).toPromise();
    }

    /**
     * Returns cervical positions including the database record ID, cervical position ID and description.
     * Retrieve all cervical positions
     * @param param the request object
     */
    public getCervicalPositionsWithHttpInfo(param: MeasurementsApiGetCervicalPositionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<MeasurementCervicalPositionsResult>> {
        return this.api.getCervicalPositionsWithHttpInfo(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Returns cervical positions including the database record ID, cervical position ID and description.
     * Retrieve all cervical positions
     * @param param the request object
     */
    public getCervicalPositions(param: MeasurementsApiGetCervicalPositionsRequest, options?: ConfigurationOptions): Promise<MeasurementCervicalPositionsResult> {
        return this.api.getCervicalPositions(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Returns the exercise type matching the supplied exercise_type_name.
     * Retrieve an exercise type by name
     * @param param the request object
     */
    public getExerciseTypeByNameWithHttpInfo(param: MeasurementsApiGetExerciseTypeByNameRequest, options?: ConfigurationOptions): Promise<HttpInfo<MeasurementExerciseTypeResult>> {
        return this.api.getExerciseTypeByNameWithHttpInfo(param.xMrdScopes, param.exerciseTypeName,  options).toPromise();
    }

    /**
     * Returns the exercise type matching the supplied exercise_type_name.
     * Retrieve an exercise type by name
     * @param param the request object
     */
    public getExerciseTypeByName(param: MeasurementsApiGetExerciseTypeByNameRequest, options?: ConfigurationOptions): Promise<MeasurementExerciseTypeResult> {
        return this.api.getExerciseTypeByName(param.xMrdScopes, param.exerciseTypeName,  options).toPromise();
    }

    /**
     * Returns exercise types including the database record ID, exercise type name and description.
     * Retrieve all exercise types
     * @param param the request object
     */
    public getExerciseTypesWithHttpInfo(param: MeasurementsApiGetExerciseTypesRequest, options?: ConfigurationOptions): Promise<HttpInfo<MeasurementExerciseTypesResult>> {
        return this.api.getExerciseTypesWithHttpInfo(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Returns exercise types including the database record ID, exercise type name and description.
     * Retrieve all exercise types
     * @param param the request object
     */
    public getExerciseTypes(param: MeasurementsApiGetExerciseTypesRequest, options?: ConfigurationOptions): Promise<MeasurementExerciseTypesResult> {
        return this.api.getExerciseTypes(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Returns the meal type matching the supplied meal_type_id.
     * Retrieve a meal type by ID
     * @param param the request object
     */
    public getMealTypeWithHttpInfo(param: MeasurementsApiGetMealTypeRequest, options?: ConfigurationOptions): Promise<HttpInfo<MeasurementMealTypeResult>> {
        return this.api.getMealTypeWithHttpInfo(param.xMrdScopes, param.id,  options).toPromise();
    }

    /**
     * Returns the meal type matching the supplied meal_type_id.
     * Retrieve a meal type by ID
     * @param param the request object
     */
    public getMealType(param: MeasurementsApiGetMealTypeRequest, options?: ConfigurationOptions): Promise<MeasurementMealTypeResult> {
        return this.api.getMealType(param.xMrdScopes, param.id,  options).toPromise();
    }

    /**
     * Returns meal types including the database record ID, meal type ID and description.
     * Retrieve all meal types
     * @param param the request object
     */
    public getMealTypesWithHttpInfo(param: MeasurementsApiGetMealTypesRequest, options?: ConfigurationOptions): Promise<HttpInfo<MeasurementMealTypesResult>> {
        return this.api.getMealTypesWithHttpInfo(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Returns meal types including the database record ID, meal type ID and description.
     * Retrieve all meal types
     * @param param the request object
     */
    public getMealTypes(param: MeasurementsApiGetMealTypesRequest, options?: ConfigurationOptions): Promise<MeasurementMealTypesResult> {
        return this.api.getMealTypes(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Returns the measurement group matching the supplied database record ID.
     * Retrieve a measurement group by ID
     * @param param the request object
     */
    public getMeasurementGroupWithHttpInfo(param: MeasurementsApiGetMeasurementGroupRequest, options?: ConfigurationOptions): Promise<HttpInfo<MeasurementGroupResult>> {
        return this.api.getMeasurementGroupWithHttpInfo(param.xMrdScopes, param.id,  options).toPromise();
    }

    /**
     * Returns the measurement group matching the supplied database record ID.
     * Retrieve a measurement group by ID
     * @param param the request object
     */
    public getMeasurementGroup(param: MeasurementsApiGetMeasurementGroupRequest, options?: ConfigurationOptions): Promise<MeasurementGroupResult> {
        return this.api.getMeasurementGroup(param.xMrdScopes, param.id,  options).toPromise();
    }

    /**
     * Returns the available measurement groups and their definitions.
     * Retrieve all measurement groups
     * @param param the request object
     */
    public getMeasurementGroupsWithHttpInfo(param: MeasurementsApiGetMeasurementGroupsRequest, options?: ConfigurationOptions): Promise<HttpInfo<MeasurementGroupsResult>> {
        return this.api.getMeasurementGroupsWithHttpInfo(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Returns the available measurement groups and their definitions.
     * Retrieve all measurement groups
     * @param param the request object
     */
    public getMeasurementGroups(param: MeasurementsApiGetMeasurementGroupsRequest, options?: ConfigurationOptions): Promise<MeasurementGroupsResult> {
        return this.api.getMeasurementGroups(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Returns the measurement definition matching the supplied measurement ID.
     * Retrieve a measurement type by ID
     * @param param the request object
     */
    public getMeasurementTypeWithHttpInfo(param: MeasurementsApiGetMeasurementTypeRequest, options?: ConfigurationOptions): Promise<HttpInfo<MeasurementTypeResult>> {
        return this.api.getMeasurementTypeWithHttpInfo(param.xMrdScopes, param.id,  options).toPromise();
    }

    /**
     * Returns the measurement definition matching the supplied measurement ID.
     * Retrieve a measurement type by ID
     * @param param the request object
     */
    public getMeasurementType(param: MeasurementsApiGetMeasurementTypeRequest, options?: ConfigurationOptions): Promise<MeasurementTypeResult> {
        return this.api.getMeasurementType(param.xMrdScopes, param.id,  options).toPromise();
    }

    /**
     * Returns measurement definitions including the measurement name, group and unit.
     * Retrieve all measurement types
     * @param param the request object
     */
    public getMeasurementTypesWithHttpInfo(param: MeasurementsApiGetMeasurementTypesRequest, options?: ConfigurationOptions): Promise<HttpInfo<MeasurementTypesResult>> {
        return this.api.getMeasurementTypesWithHttpInfo(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Returns measurement definitions including the measurement name, group and unit.
     * Retrieve all measurement types
     * @param param the request object
     */
    public getMeasurementTypes(param: MeasurementsApiGetMeasurementTypesRequest, options?: ConfigurationOptions): Promise<MeasurementTypesResult> {
        return this.api.getMeasurementTypes(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Returns the unit of measure matching the supplied database record ID.
     * Retrieve a unit of measure by ID
     * @param param the request object
     */
    public getMeasurementUnitWithHttpInfo(param: MeasurementsApiGetMeasurementUnitRequest, options?: ConfigurationOptions): Promise<HttpInfo<MeasurementUnitResult>> {
        return this.api.getMeasurementUnitWithHttpInfo(param.xMrdScopes, param.id,  options).toPromise();
    }

    /**
     * Returns the unit of measure matching the supplied database record ID.
     * Retrieve a unit of measure by ID
     * @param param the request object
     */
    public getMeasurementUnit(param: MeasurementsApiGetMeasurementUnitRequest, options?: ConfigurationOptions): Promise<MeasurementUnitResult> {
        return this.api.getMeasurementUnit(param.xMrdScopes, param.id,  options).toPromise();
    }

    /**
     * Returns available measurement units and their definitions.
     * Retrieve all units of measure
     * @param param the request object
     */
    public getMeasurementUnitsWithHttpInfo(param: MeasurementsApiGetMeasurementUnitsRequest, options?: ConfigurationOptions): Promise<HttpInfo<MeasurementUnitsResult>> {
        return this.api.getMeasurementUnitsWithHttpInfo(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Returns available measurement units and their definitions.
     * Retrieve all units of measure
     * @param param the request object
     */
    public getMeasurementUnits(param: MeasurementsApiGetMeasurementUnitsRequest, options?: ConfigurationOptions): Promise<MeasurementUnitsResult> {
        return this.api.getMeasurementUnits(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Returns the resistance type matching the supplied resistance_type_id.
     * Retrieve a resistance type by ID
     * @param param the request object
     */
    public getResistanceTypeWithHttpInfo(param: MeasurementsApiGetResistanceTypeRequest, options?: ConfigurationOptions): Promise<HttpInfo<MeasurementResistanceTypeResult>> {
        return this.api.getResistanceTypeWithHttpInfo(param.xMrdScopes, param.id,  options).toPromise();
    }

    /**
     * Returns the resistance type matching the supplied resistance_type_id.
     * Retrieve a resistance type by ID
     * @param param the request object
     */
    public getResistanceType(param: MeasurementsApiGetResistanceTypeRequest, options?: ConfigurationOptions): Promise<MeasurementResistanceTypeResult> {
        return this.api.getResistanceType(param.xMrdScopes, param.id,  options).toPromise();
    }

    /**
     * Returns resistance types including the database record ID, resistance type ID and description.
     * Retrieve all resistance types
     * @param param the request object
     */
    public getResistanceTypesWithHttpInfo(param: MeasurementsApiGetResistanceTypesRequest, options?: ConfigurationOptions): Promise<HttpInfo<MeasurementResistanceTypesResult>> {
        return this.api.getResistanceTypesWithHttpInfo(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Returns resistance types including the database record ID, resistance type ID and description.
     * Retrieve all resistance types
     * @param param the request object
     */
    public getResistanceTypes(param: MeasurementsApiGetResistanceTypesRequest, options?: ConfigurationOptions): Promise<MeasurementResistanceTypesResult> {
        return this.api.getResistanceTypes(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Returns the sleep segment type matching the supplied sleep_segment_type_id.
     * Retrieve a sleep segment type by ID
     * @param param the request object
     */
    public getSleepSegmentTypeWithHttpInfo(param: MeasurementsApiGetSleepSegmentTypeRequest, options?: ConfigurationOptions): Promise<HttpInfo<MeasurementSleepSegmentTypeResult>> {
        return this.api.getSleepSegmentTypeWithHttpInfo(param.xMrdScopes, param.id,  options).toPromise();
    }

    /**
     * Returns the sleep segment type matching the supplied sleep_segment_type_id.
     * Retrieve a sleep segment type by ID
     * @param param the request object
     */
    public getSleepSegmentType(param: MeasurementsApiGetSleepSegmentTypeRequest, options?: ConfigurationOptions): Promise<MeasurementSleepSegmentTypeResult> {
        return this.api.getSleepSegmentType(param.xMrdScopes, param.id,  options).toPromise();
    }

    /**
     * Returns sleep segment types including the database record ID, sleep segment type ID and description.
     * Retrieve all sleep segment types
     * @param param the request object
     */
    public getSleepSegmentTypesWithHttpInfo(param: MeasurementsApiGetSleepSegmentTypesRequest, options?: ConfigurationOptions): Promise<HttpInfo<MeasurementSleepSegmentTypesResult>> {
        return this.api.getSleepSegmentTypesWithHttpInfo(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Returns sleep segment types including the database record ID, sleep segment type ID and description.
     * Retrieve all sleep segment types
     * @param param the request object
     */
    public getSleepSegmentTypes(param: MeasurementsApiGetSleepSegmentTypesRequest, options?: ConfigurationOptions): Promise<MeasurementSleepSegmentTypesResult> {
        return this.api.getSleepSegmentTypes(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Returns the temporal relation to meal matching the supplied temporal_relation_to_meal_id.
     * Retrieve a temporal relation to meals by ID
     * @param param the request object
     */
    public getTemporalRelationToMealWithHttpInfo(param: MeasurementsApiGetTemporalRelationToMealRequest, options?: ConfigurationOptions): Promise<HttpInfo<MeasurementTemporalRelationToMealResult>> {
        return this.api.getTemporalRelationToMealWithHttpInfo(param.xMrdScopes, param.id,  options).toPromise();
    }

    /**
     * Returns the temporal relation to meal matching the supplied temporal_relation_to_meal_id.
     * Retrieve a temporal relation to meals by ID
     * @param param the request object
     */
    public getTemporalRelationToMeal(param: MeasurementsApiGetTemporalRelationToMealRequest, options?: ConfigurationOptions): Promise<MeasurementTemporalRelationToMealResult> {
        return this.api.getTemporalRelationToMeal(param.xMrdScopes, param.id,  options).toPromise();
    }

    /**
     * Returns the temporal relation to sleep matching the supplied temporal_relation_to_sleep_id.
     * Retrieve a temporal relation to sleep by ID
     * @param param the request object
     */
    public getTemporalRelationToSleepWithHttpInfo(param: MeasurementsApiGetTemporalRelationToSleepRequest, options?: ConfigurationOptions): Promise<HttpInfo<MeasurementTemporalRelationToSleepResult>> {
        return this.api.getTemporalRelationToSleepWithHttpInfo(param.xMrdScopes, param.id,  options).toPromise();
    }

    /**
     * Returns the temporal relation to sleep matching the supplied temporal_relation_to_sleep_id.
     * Retrieve a temporal relation to sleep by ID
     * @param param the request object
     */
    public getTemporalRelationToSleep(param: MeasurementsApiGetTemporalRelationToSleepRequest, options?: ConfigurationOptions): Promise<MeasurementTemporalRelationToSleepResult> {
        return this.api.getTemporalRelationToSleep(param.xMrdScopes, param.id,  options).toPromise();
    }

    /**
     * Returns temporal relations to meals including the database record ID, relation ID and description.
     * Retrieve all temporal relations to meals
     * @param param the request object
     */
    public getTemporalRelationsToMealWithHttpInfo(param: MeasurementsApiGetTemporalRelationsToMealRequest, options?: ConfigurationOptions): Promise<HttpInfo<MeasurementTemporalRelationsToMealResult>> {
        return this.api.getTemporalRelationsToMealWithHttpInfo(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Returns temporal relations to meals including the database record ID, relation ID and description.
     * Retrieve all temporal relations to meals
     * @param param the request object
     */
    public getTemporalRelationsToMeal(param: MeasurementsApiGetTemporalRelationsToMealRequest, options?: ConfigurationOptions): Promise<MeasurementTemporalRelationsToMealResult> {
        return this.api.getTemporalRelationsToMeal(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Returns temporal relations to sleep including the database record ID, relation ID and description.
     * Retrieve all temporal relations to sleep
     * @param param the request object
     */
    public getTemporalRelationsToSleepWithHttpInfo(param: MeasurementsApiGetTemporalRelationsToSleepRequest, options?: ConfigurationOptions): Promise<HttpInfo<MeasurementTemporalRelationsToSleepResult>> {
        return this.api.getTemporalRelationsToSleepWithHttpInfo(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Returns temporal relations to sleep including the database record ID, relation ID and description.
     * Retrieve all temporal relations to sleep
     * @param param the request object
     */
    public getTemporalRelationsToSleep(param: MeasurementsApiGetTemporalRelationsToSleepRequest, options?: ConfigurationOptions): Promise<MeasurementTemporalRelationsToSleepResult> {
        return this.api.getTemporalRelationsToSleep(param.xMrdScopes,  options).toPromise();
    }

}

import { ObservableMedicinesApi } from "./ObservableAPI";
import { MedicinesApiRequestFactory, MedicinesApiResponseProcessor} from "../apis/MedicinesApi";

export interface MedicinesApiGetMedicineLevelOneRequest {
    /**
     * MRD service scope required for Medicines endpoints.
     * Defaults to: &#39;medicines&#39;
     * @type &#39;medicines&#39;
     * @memberof MedicinesApigetMedicineLevelOne
     */
    xMrdScopes: 'medicines'
    /**
     * First Medicines route segment, normally identifying a medicine, medicine category or medicine family.
     * Defaults to: undefined
     * @type string
     * @memberof MedicinesApigetMedicineLevelOne
     */
    param1: string
    /**
     * When supplied, removes HTML markup from content text. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave HTML unchanged.
     * Defaults to: undefined
     * @type &#39;true&#39;
     * @memberof MedicinesApigetMedicineLevelOne
     */
    noHtml?: 'true'
    /**
     * When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     * Defaults to: undefined
     * @type &#39;true&#39;
     * @memberof MedicinesApigetMedicineLevelOne
     */
    nhsLinks?: 'true'
}

export interface MedicinesApiGetMedicineLevelThreeRequest {
    /**
     * MRD service scope required for Medicines endpoints.
     * Defaults to: &#39;medicines&#39;
     * @type &#39;medicines&#39;
     * @memberof MedicinesApigetMedicineLevelThree
     */
    xMrdScopes: 'medicines'
    /**
     * First Medicines route segment, normally identifying a medicine, medicine category or medicine family.
     * Defaults to: undefined
     * @type string
     * @memberof MedicinesApigetMedicineLevelThree
     */
    param1: string
    /**
     * Second Medicines route segment, normally identifying a medicine page or a medicine within a broader medicine family.
     * Defaults to: undefined
     * @type string
     * @memberof MedicinesApigetMedicineLevelThree
     */
    param2: string
    /**
     * Third Medicines route segment identifying a page within a nested medicine, such as common questions, dosage, side effects or interactions.
     * Defaults to: undefined
     * @type string
     * @memberof MedicinesApigetMedicineLevelThree
     */
    param3: string
    /**
     * When supplied, removes HTML markup from content text. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave HTML unchanged.
     * Defaults to: undefined
     * @type &#39;true&#39;
     * @memberof MedicinesApigetMedicineLevelThree
     */
    noHtml?: 'true'
    /**
     * When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     * Defaults to: undefined
     * @type &#39;true&#39;
     * @memberof MedicinesApigetMedicineLevelThree
     */
    nhsLinks?: 'true'
}

export interface MedicinesApiGetMedicineLevelTwoRequest {
    /**
     * MRD service scope required for Medicines endpoints.
     * Defaults to: &#39;medicines&#39;
     * @type &#39;medicines&#39;
     * @memberof MedicinesApigetMedicineLevelTwo
     */
    xMrdScopes: 'medicines'
    /**
     * First Medicines route segment, normally identifying a medicine, medicine category or medicine family.
     * Defaults to: undefined
     * @type string
     * @memberof MedicinesApigetMedicineLevelTwo
     */
    param1: string
    /**
     * Second Medicines route segment, normally identifying a medicine page or a medicine within a broader medicine family.
     * Defaults to: undefined
     * @type string
     * @memberof MedicinesApigetMedicineLevelTwo
     */
    param2: string
    /**
     * When supplied, removes HTML markup from content text. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave HTML unchanged.
     * Defaults to: undefined
     * @type &#39;true&#39;
     * @memberof MedicinesApigetMedicineLevelTwo
     */
    noHtml?: 'true'
    /**
     * When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     * Defaults to: undefined
     * @type &#39;true&#39;
     * @memberof MedicinesApigetMedicineLevelTwo
     */
    nhsLinks?: 'true'
}

export interface MedicinesApiGetMedicinesRoutesRequest {
    /**
     * MRD service scope required for Medicines endpoints.
     * Defaults to: &#39;medicines&#39;
     * @type &#39;medicines&#39;
     * @memberof MedicinesApigetMedicinesRoutes
     */
    xMrdScopes: 'medicines'
}

export interface MedicinesApiSearchMedicinesRequest {
    /**
     * MRD service scope required for Medicines endpoints.
     * Defaults to: &#39;medicines&#39;
     * @type &#39;medicines&#39;
     * @memberof MedicinesApisearchMedicines
     */
    xMrdScopes: 'medicines'
    /**
     * Structured Medicines search filters supplied using indexed bracket notation, for example filters[0][operator]&#x3D;LIKE&amp;filters[0][value]&#x3D;rapid acting insulin&amp;filters[0][condition]&#x3D;AND&amp;filters[1][operator]&#x3D;LIKE&amp;filters[1][value]&#x3D;diabetes&amp;filters[1][condition]&#x3D;. Each filter must contain exactly value, operator and condition.
     * Defaults to: undefined
     * @type Array&lt;MedicinesSearchFilter&gt;
     * @memberof MedicinesApisearchMedicines
     */
    filters: Array<MedicinesSearchFilter>
    /**
     * When supplied, removes HTML markup from content text. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave HTML unchanged.
     * Defaults to: undefined
     * @type &#39;true&#39;
     * @memberof MedicinesApisearchMedicines
     */
    noHtml?: 'true'
    /**
     * When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     * Defaults to: undefined
     * @type &#39;true&#39;
     * @memberof MedicinesApisearchMedicines
     */
    nhsLinks?: 'true'
    /**
     * When supplied, the search also checks additional Medicines page content in addition to medicine descriptions. The only accepted value is \&#39;true\&#39;. This parameter is only valid on the search endpoint.
     * Defaults to: undefined
     * @type &#39;true&#39;
     * @memberof MedicinesApisearchMedicines
     */
    searchAll?: 'true'
}

export class ObjectMedicinesApi {
    private api: ObservableMedicinesApi

    public constructor(configuration: Configuration, requestFactory?: MedicinesApiRequestFactory, responseProcessor?: MedicinesApiResponseProcessor) {
        this.api = new ObservableMedicinesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a first-level Medicines page. HTML content is returned by default. no_html removes markup, while nhs_links rewrites eligible MRD links to NHS website links. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a Medicine page
     * @param param the request object
     */
    public getMedicineLevelOneWithHttpInfo(param: MedicinesApiGetMedicineLevelOneRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetMedicineLevelOne200Response>> {
        return this.api.getMedicineLevelOneWithHttpInfo(param.xMrdScopes, param.param1, param.noHtml, param.nhsLinks,  options).toPromise();
    }

    /**
     * Returns a first-level Medicines page. HTML content is returned by default. no_html removes markup, while nhs_links rewrites eligible MRD links to NHS website links. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a Medicine page
     * @param param the request object
     */
    public getMedicineLevelOne(param: MedicinesApiGetMedicineLevelOneRequest, options?: ConfigurationOptions): Promise<GetMedicineLevelOne200Response> {
        return this.api.getMedicineLevelOne(param.xMrdScopes, param.param1, param.noHtml, param.nhsLinks,  options).toPromise();
    }

    /**
     * Returns a third-level Medicines route. These responses use the same flexible NHS page structure as other Medicines routes and may include nested question and answer content. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a page within a nested Medicine
     * @param param the request object
     */
    public getMedicineLevelThreeWithHttpInfo(param: MedicinesApiGetMedicineLevelThreeRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetMedicineLevelOne200Response>> {
        return this.api.getMedicineLevelThreeWithHttpInfo(param.xMrdScopes, param.param1, param.param2, param.param3, param.noHtml, param.nhsLinks,  options).toPromise();
    }

    /**
     * Returns a third-level Medicines route. These responses use the same flexible NHS page structure as other Medicines routes and may include nested question and answer content. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a page within a nested Medicine
     * @param param the request object
     */
    public getMedicineLevelThree(param: MedicinesApiGetMedicineLevelThreeRequest, options?: ConfigurationOptions): Promise<GetMedicineLevelOne200Response> {
        return this.api.getMedicineLevelThree(param.xMrdScopes, param.param1, param.param2, param.param3, param.noHtml, param.nhsLinks,  options).toPromise();
    }

    /**
     * Returns a specific page within a medicine, or a medicine nested within a broader medicine family. HTML and link behaviour can be controlled using no_html and nhs_links. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a Medicine subpage or nested medicine
     * @param param the request object
     */
    public getMedicineLevelTwoWithHttpInfo(param: MedicinesApiGetMedicineLevelTwoRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetMedicineLevelOne200Response>> {
        return this.api.getMedicineLevelTwoWithHttpInfo(param.xMrdScopes, param.param1, param.param2, param.noHtml, param.nhsLinks,  options).toPromise();
    }

    /**
     * Returns a specific page within a medicine, or a medicine nested within a broader medicine family. HTML and link behaviour can be controlled using no_html and nhs_links. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a Medicine subpage or nested medicine
     * @param param the request object
     */
    public getMedicineLevelTwo(param: MedicinesApiGetMedicineLevelTwoRequest, options?: ConfigurationOptions): Promise<GetMedicineLevelOne200Response> {
        return this.api.getMedicineLevelTwo(param.xMrdScopes, param.param1, param.param2, param.noHtml, param.nhsLinks,  options).toPromise();
    }

    /**
     * Returns the available routes within the NHS Medicines dataset.
     * Retrieve available Medicines routes
     * @param param the request object
     */
    public getMedicinesRoutesWithHttpInfo(param: MedicinesApiGetMedicinesRoutesRequest, options?: ConfigurationOptions): Promise<HttpInfo<MedicinesRoutesResponse>> {
        return this.api.getMedicinesRoutesWithHttpInfo(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Returns the available routes within the NHS Medicines dataset.
     * Retrieve available Medicines routes
     * @param param the request object
     */
    public getMedicinesRoutes(param: MedicinesApiGetMedicinesRoutesRequest, options?: ConfigurationOptions): Promise<MedicinesRoutesResponse> {
        return this.api.getMedicinesRoutes(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Searches the NHS Medicines dataset using structured filters. By default filters search medicine descriptions. When search_all is enabled, additional searchable page content is included. no_html and nhs_links control content and link formatting.
     * Search Medicines content
     * @param param the request object
     */
    public searchMedicinesWithHttpInfo(param: MedicinesApiSearchMedicinesRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<MedicineData>>> {
        return this.api.searchMedicinesWithHttpInfo(param.xMrdScopes, param.filters, param.noHtml, param.nhsLinks, param.searchAll,  options).toPromise();
    }

    /**
     * Searches the NHS Medicines dataset using structured filters. By default filters search medicine descriptions. When search_all is enabled, additional searchable page content is included. no_html and nhs_links control content and link formatting.
     * Search Medicines content
     * @param param the request object
     */
    public searchMedicines(param: MedicinesApiSearchMedicinesRequest, options?: ConfigurationOptions): Promise<Array<MedicineData>> {
        return this.api.searchMedicines(param.xMrdScopes, param.filters, param.noHtml, param.nhsLinks, param.searchAll,  options).toPromise();
    }

}

import { ObservableMentalHealthApi } from "./ObservableAPI";
import { MentalHealthApiRequestFactory, MentalHealthApiResponseProcessor} from "../apis/MentalHealthApi";

export interface MentalHealthApiGetMentalHealthLevelFourRequest {
    /**
     * MRD service scope required for Mental Health endpoints.
     * Defaults to: &#39;mental-health&#39;
     * @type &#39;mental-health&#39;
     * @memberof MentalHealthApigetMentalHealthLevelFour
     */
    xMrdScopes: 'mental-health'
    /**
     * First Mental Health route segment, normally identifying a Mental Health topic, category or section.
     * Defaults to: undefined
     * @type string
     * @memberof MentalHealthApigetMentalHealthLevelFour
     */
    param1: string
    /**
     * Second Mental Health route segment, normally identifying a category or page within a Mental Health topic.
     * Defaults to: undefined
     * @type string
     * @memberof MentalHealthApigetMentalHealthLevelFour
     */
    param2: string
    /**
     * Third Mental Health route segment identifying a nested Mental Health page.
     * Defaults to: undefined
     * @type string
     * @memberof MentalHealthApigetMentalHealthLevelFour
     */
    param3: string
    /**
     * Fourth Mental Health route segment identifying deeply nested Mental Health content.
     * Defaults to: undefined
     * @type string
     * @memberof MentalHealthApigetMentalHealthLevelFour
     */
    param4: string
    /**
     * When supplied, removes HTML markup from returned Mental Health content. The only accepted value is \&#39;true\&#39;. Omit the parameter to retain HTML.
     * Defaults to: undefined
     * @type &#39;true&#39;
     * @memberof MentalHealthApigetMentalHealthLevelFour
     */
    noHtml?: 'true'
    /**
     * When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     * Defaults to: undefined
     * @type &#39;true&#39;
     * @memberof MentalHealthApigetMentalHealthLevelFour
     */
    nhsLinks?: 'true'
}

export interface MentalHealthApiGetMentalHealthLevelOneRequest {
    /**
     * MRD service scope required for Mental Health endpoints.
     * Defaults to: &#39;mental-health&#39;
     * @type &#39;mental-health&#39;
     * @memberof MentalHealthApigetMentalHealthLevelOne
     */
    xMrdScopes: 'mental-health'
    /**
     * First Mental Health route segment, normally identifying a Mental Health topic, category or section.
     * Defaults to: undefined
     * @type string
     * @memberof MentalHealthApigetMentalHealthLevelOne
     */
    param1: string
    /**
     * When supplied, removes HTML markup from returned Mental Health content. The only accepted value is \&#39;true\&#39;. Omit the parameter to retain HTML.
     * Defaults to: undefined
     * @type &#39;true&#39;
     * @memberof MentalHealthApigetMentalHealthLevelOne
     */
    noHtml?: 'true'
    /**
     * When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     * Defaults to: undefined
     * @type &#39;true&#39;
     * @memberof MentalHealthApigetMentalHealthLevelOne
     */
    nhsLinks?: 'true'
}

export interface MentalHealthApiGetMentalHealthLevelThreeRequest {
    /**
     * MRD service scope required for Mental Health endpoints.
     * Defaults to: &#39;mental-health&#39;
     * @type &#39;mental-health&#39;
     * @memberof MentalHealthApigetMentalHealthLevelThree
     */
    xMrdScopes: 'mental-health'
    /**
     * First Mental Health route segment, normally identifying a Mental Health topic, category or section.
     * Defaults to: undefined
     * @type string
     * @memberof MentalHealthApigetMentalHealthLevelThree
     */
    param1: string
    /**
     * Second Mental Health route segment, normally identifying a category or page within a Mental Health topic.
     * Defaults to: undefined
     * @type string
     * @memberof MentalHealthApigetMentalHealthLevelThree
     */
    param2: string
    /**
     * Third Mental Health route segment identifying a nested Mental Health page.
     * Defaults to: undefined
     * @type string
     * @memberof MentalHealthApigetMentalHealthLevelThree
     */
    param3: string
    /**
     * When supplied, removes HTML markup from returned Mental Health content. The only accepted value is \&#39;true\&#39;. Omit the parameter to retain HTML.
     * Defaults to: undefined
     * @type &#39;true&#39;
     * @memberof MentalHealthApigetMentalHealthLevelThree
     */
    noHtml?: 'true'
    /**
     * When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     * Defaults to: undefined
     * @type &#39;true&#39;
     * @memberof MentalHealthApigetMentalHealthLevelThree
     */
    nhsLinks?: 'true'
}

export interface MentalHealthApiGetMentalHealthLevelTwoRequest {
    /**
     * MRD service scope required for Mental Health endpoints.
     * Defaults to: &#39;mental-health&#39;
     * @type &#39;mental-health&#39;
     * @memberof MentalHealthApigetMentalHealthLevelTwo
     */
    xMrdScopes: 'mental-health'
    /**
     * First Mental Health route segment, normally identifying a Mental Health topic, category or section.
     * Defaults to: undefined
     * @type string
     * @memberof MentalHealthApigetMentalHealthLevelTwo
     */
    param1: string
    /**
     * Second Mental Health route segment, normally identifying a category or page within a Mental Health topic.
     * Defaults to: undefined
     * @type string
     * @memberof MentalHealthApigetMentalHealthLevelTwo
     */
    param2: string
    /**
     * When supplied, removes HTML markup from returned Mental Health content. The only accepted value is \&#39;true\&#39;. Omit the parameter to retain HTML.
     * Defaults to: undefined
     * @type &#39;true&#39;
     * @memberof MentalHealthApigetMentalHealthLevelTwo
     */
    noHtml?: 'true'
    /**
     * When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     * Defaults to: undefined
     * @type &#39;true&#39;
     * @memberof MentalHealthApigetMentalHealthLevelTwo
     */
    nhsLinks?: 'true'
}

export interface MentalHealthApiGetMentalHealthRoutesRequest {
    /**
     * MRD service scope required for Mental Health endpoints.
     * Defaults to: &#39;mental-health&#39;
     * @type &#39;mental-health&#39;
     * @memberof MentalHealthApigetMentalHealthRoutes
     */
    xMrdScopes: 'mental-health'
}

export interface MentalHealthApiSearchMentalHealthRequest {
    /**
     * MRD service scope required for Mental Health endpoints.
     * Defaults to: &#39;mental-health&#39;
     * @type &#39;mental-health&#39;
     * @memberof MentalHealthApisearchMentalHealth
     */
    xMrdScopes: 'mental-health'
    /**
     * Structured Mental Health search filters supplied using indexed bracket notation, for example filters[0][value]&#x3D;depression&amp;filters[0][operator]&#x3D;LIKE&amp;filters[0][condition]&#x3D;. Each filter must contain value, operator and condition. By default the search checks the page description. search_all&#x3D;true additionally searches page-content text and expander-group content.
     * Defaults to: undefined
     * @type Array&lt;MentalHealthSearchFilter&gt;
     * @memberof MentalHealthApisearchMentalHealth
     */
    filters: Array<MentalHealthSearchFilter>
    /**
     * When supplied, removes HTML markup from returned Mental Health content. The only accepted value is \&#39;true\&#39;. Omit the parameter to retain HTML.
     * Defaults to: undefined
     * @type &#39;true&#39;
     * @memberof MentalHealthApisearchMentalHealth
     */
    noHtml?: 'true'
    /**
     * When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     * Defaults to: undefined
     * @type &#39;true&#39;
     * @memberof MentalHealthApisearchMentalHealth
     */
    nhsLinks?: 'true'
    /**
     * When supplied, the search also checks page-content text and expander-group content in addition to the page description. The only accepted value is \&#39;true\&#39;. This parameter is only valid on the search endpoint.
     * Defaults to: undefined
     * @type &#39;true&#39;
     * @memberof MentalHealthApisearchMentalHealth
     */
    searchAll?: 'true'
}

export class ObjectMentalHealthApi {
    private api: ObservableMentalHealthApi

    public constructor(configuration: Configuration, requestFactory?: MentalHealthApiRequestFactory, responseProcessor?: MentalHealthApiResponseProcessor) {
        this.api = new ObservableMentalHealthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a fourth-level Mental Health route. no_html=true removes HTML markup and nhs_links=true rewrites eligible MRD API links to NHS website links. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve deeply nested Mental Health content
     * @param param the request object
     */
    public getMentalHealthLevelFourWithHttpInfo(param: MentalHealthApiGetMentalHealthLevelFourRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetMentalHealthLevelOne200Response>> {
        return this.api.getMentalHealthLevelFourWithHttpInfo(param.xMrdScopes, param.param1, param.param2, param.param3, param.param4, param.noHtml, param.nhsLinks,  options).toPromise();
    }

    /**
     * Returns a fourth-level Mental Health route. no_html=true removes HTML markup and nhs_links=true rewrites eligible MRD API links to NHS website links. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve deeply nested Mental Health content
     * @param param the request object
     */
    public getMentalHealthLevelFour(param: MentalHealthApiGetMentalHealthLevelFourRequest, options?: ConfigurationOptions): Promise<GetMentalHealthLevelOne200Response> {
        return this.api.getMentalHealthLevelFour(param.xMrdScopes, param.param1, param.param2, param.param3, param.param4, param.noHtml, param.nhsLinks,  options).toPromise();
    }

    /**
     * Returns a first-level Mental Health route. no_html=true removes HTML markup and nhs_links=true rewrites eligible MRD API links to NHS website links. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a Mental Health page
     * @param param the request object
     */
    public getMentalHealthLevelOneWithHttpInfo(param: MentalHealthApiGetMentalHealthLevelOneRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetMentalHealthLevelOne200Response>> {
        return this.api.getMentalHealthLevelOneWithHttpInfo(param.xMrdScopes, param.param1, param.noHtml, param.nhsLinks,  options).toPromise();
    }

    /**
     * Returns a first-level Mental Health route. no_html=true removes HTML markup and nhs_links=true rewrites eligible MRD API links to NHS website links. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a Mental Health page
     * @param param the request object
     */
    public getMentalHealthLevelOne(param: MentalHealthApiGetMentalHealthLevelOneRequest, options?: ConfigurationOptions): Promise<GetMentalHealthLevelOne200Response> {
        return this.api.getMentalHealthLevelOne(param.xMrdScopes, param.param1, param.noHtml, param.nhsLinks,  options).toPromise();
    }

    /**
     * Returns a third-level Mental Health page. no_html=true removes HTML markup and nhs_links=true rewrites eligible MRD API links to NHS website links. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve nested Mental Health content
     * @param param the request object
     */
    public getMentalHealthLevelThreeWithHttpInfo(param: MentalHealthApiGetMentalHealthLevelThreeRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetMentalHealthLevelOne200Response>> {
        return this.api.getMentalHealthLevelThreeWithHttpInfo(param.xMrdScopes, param.param1, param.param2, param.param3, param.noHtml, param.nhsLinks,  options).toPromise();
    }

    /**
     * Returns a third-level Mental Health page. no_html=true removes HTML markup and nhs_links=true rewrites eligible MRD API links to NHS website links. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve nested Mental Health content
     * @param param the request object
     */
    public getMentalHealthLevelThree(param: MentalHealthApiGetMentalHealthLevelThreeRequest, options?: ConfigurationOptions): Promise<GetMentalHealthLevelOne200Response> {
        return this.api.getMentalHealthLevelThree(param.xMrdScopes, param.param1, param.param2, param.param3, param.noHtml, param.nhsLinks,  options).toPromise();
    }

    /**
     * Returns a second-level Mental Health route. no_html=true removes HTML markup and nhs_links=true rewrites eligible MRD API links to NHS website links. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a Mental Health subcategory
     * @param param the request object
     */
    public getMentalHealthLevelTwoWithHttpInfo(param: MentalHealthApiGetMentalHealthLevelTwoRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetMentalHealthLevelOne200Response>> {
        return this.api.getMentalHealthLevelTwoWithHttpInfo(param.xMrdScopes, param.param1, param.param2, param.noHtml, param.nhsLinks,  options).toPromise();
    }

    /**
     * Returns a second-level Mental Health route. no_html=true removes HTML markup and nhs_links=true rewrites eligible MRD API links to NHS website links. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a Mental Health subcategory
     * @param param the request object
     */
    public getMentalHealthLevelTwo(param: MentalHealthApiGetMentalHealthLevelTwoRequest, options?: ConfigurationOptions): Promise<GetMentalHealthLevelOne200Response> {
        return this.api.getMentalHealthLevelTwo(param.xMrdScopes, param.param1, param.param2, param.noHtml, param.nhsLinks,  options).toPromise();
    }

    /**
     * Returns the available routes within the NHS Mental Health dataset.
     * Retrieve available Mental Health routes
     * @param param the request object
     */
    public getMentalHealthRoutesWithHttpInfo(param: MentalHealthApiGetMentalHealthRoutesRequest, options?: ConfigurationOptions): Promise<HttpInfo<MentalHealthRoutesResponse>> {
        return this.api.getMentalHealthRoutesWithHttpInfo(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Returns the available routes within the NHS Mental Health dataset.
     * Retrieve available Mental Health routes
     * @param param the request object
     */
    public getMentalHealthRoutes(param: MentalHealthApiGetMentalHealthRoutesRequest, options?: ConfigurationOptions): Promise<MentalHealthRoutesResponse> {
        return this.api.getMentalHealthRoutes(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Searches the NHS Mental Health dataset using structured filters. By default filters search the page description. search_all=true additionally searches page-content text and expander-group content.
     * Search Mental Health content
     * @param param the request object
     */
    public searchMentalHealthWithHttpInfo(param: MentalHealthApiSearchMentalHealthRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<MentalHealthData>>> {
        return this.api.searchMentalHealthWithHttpInfo(param.xMrdScopes, param.filters, param.noHtml, param.nhsLinks, param.searchAll,  options).toPromise();
    }

    /**
     * Searches the NHS Mental Health dataset using structured filters. By default filters search the page description. search_all=true additionally searches page-content text and expander-group content.
     * Search Mental Health content
     * @param param the request object
     */
    public searchMentalHealth(param: MentalHealthApiSearchMentalHealthRequest, options?: ConfigurationOptions): Promise<Array<MentalHealthData>> {
        return this.api.searchMentalHealth(param.xMrdScopes, param.filters, param.noHtml, param.nhsLinks, param.searchAll,  options).toPromise();
    }

}

import { ObservablePregnancyApi } from "./ObservableAPI";
import { PregnancyApiRequestFactory, PregnancyApiResponseProcessor} from "../apis/PregnancyApi";

export interface PregnancyApiGetPregnancyLevelOneRequest {
    /**
     * MRD service scope required for Pregnancy endpoints.
     * Defaults to: &#39;pregnancy&#39;
     * @type &#39;pregnancy&#39;
     * @memberof PregnancyApigetPregnancyLevelOne
     */
    xMrdScopes: 'pregnancy'
    /**
     * First Pregnancy route segment, normally identifying a Pregnancy topic, category or section.
     * Defaults to: undefined
     * @type string
     * @memberof PregnancyApigetPregnancyLevelOne
     */
    param1: string
    /**
     * When supplied, removes HTML markup from returned Pregnancy content. The only accepted value is \&#39;true\&#39;. Omit the parameter to retain HTML.
     * Defaults to: undefined
     * @type &#39;true&#39;
     * @memberof PregnancyApigetPregnancyLevelOne
     */
    noHtml?: 'true'
    /**
     * When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     * Defaults to: undefined
     * @type &#39;true&#39;
     * @memberof PregnancyApigetPregnancyLevelOne
     */
    nhsLinks?: 'true'
}

export interface PregnancyApiGetPregnancyLevelThreeRequest {
    /**
     * MRD service scope required for Pregnancy endpoints.
     * Defaults to: &#39;pregnancy&#39;
     * @type &#39;pregnancy&#39;
     * @memberof PregnancyApigetPregnancyLevelThree
     */
    xMrdScopes: 'pregnancy'
    /**
     * First Pregnancy route segment, normally identifying a Pregnancy topic, category or section.
     * Defaults to: undefined
     * @type string
     * @memberof PregnancyApigetPregnancyLevelThree
     */
    param1: string
    /**
     * Second Pregnancy route segment, normally identifying a page within a Pregnancy topic.
     * Defaults to: undefined
     * @type string
     * @memberof PregnancyApigetPregnancyLevelThree
     */
    param2: string
    /**
     * Third Pregnancy route segment identifying a deeply nested Pregnancy page, such as a specific pregnancy week or page within a nested category.
     * Defaults to: undefined
     * @type string
     * @memberof PregnancyApigetPregnancyLevelThree
     */
    param3: string
    /**
     * When supplied, removes HTML markup from returned Pregnancy content. The only accepted value is \&#39;true\&#39;. Omit the parameter to retain HTML.
     * Defaults to: undefined
     * @type &#39;true&#39;
     * @memberof PregnancyApigetPregnancyLevelThree
     */
    noHtml?: 'true'
    /**
     * When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     * Defaults to: undefined
     * @type &#39;true&#39;
     * @memberof PregnancyApigetPregnancyLevelThree
     */
    nhsLinks?: 'true'
}

export interface PregnancyApiGetPregnancyLevelTwoRequest {
    /**
     * MRD service scope required for Pregnancy endpoints.
     * Defaults to: &#39;pregnancy&#39;
     * @type &#39;pregnancy&#39;
     * @memberof PregnancyApigetPregnancyLevelTwo
     */
    xMrdScopes: 'pregnancy'
    /**
     * First Pregnancy route segment, normally identifying a Pregnancy topic, category or section.
     * Defaults to: undefined
     * @type string
     * @memberof PregnancyApigetPregnancyLevelTwo
     */
    param1: string
    /**
     * Second Pregnancy route segment, normally identifying a page within a Pregnancy topic.
     * Defaults to: undefined
     * @type string
     * @memberof PregnancyApigetPregnancyLevelTwo
     */
    param2: string
    /**
     * When supplied, removes HTML markup from returned Pregnancy content. The only accepted value is \&#39;true\&#39;. Omit the parameter to retain HTML.
     * Defaults to: undefined
     * @type &#39;true&#39;
     * @memberof PregnancyApigetPregnancyLevelTwo
     */
    noHtml?: 'true'
    /**
     * When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     * Defaults to: undefined
     * @type &#39;true&#39;
     * @memberof PregnancyApigetPregnancyLevelTwo
     */
    nhsLinks?: 'true'
}

export interface PregnancyApiGetPregnancyRoutesRequest {
    /**
     * MRD service scope required for Pregnancy endpoints.
     * Defaults to: &#39;pregnancy&#39;
     * @type &#39;pregnancy&#39;
     * @memberof PregnancyApigetPregnancyRoutes
     */
    xMrdScopes: 'pregnancy'
}

export interface PregnancyApiSearchPregnancyRequest {
    /**
     * MRD service scope required for Pregnancy endpoints.
     * Defaults to: &#39;pregnancy&#39;
     * @type &#39;pregnancy&#39;
     * @memberof PregnancyApisearchPregnancy
     */
    xMrdScopes: 'pregnancy'
    /**
     * Structured Pregnancy search filters supplied using indexed bracket notation, for example filters[0][value]&#x3D;antenatal appointments&amp;filters[0][operator]&#x3D;LIKE&amp;filters[0][condition]&#x3D;. Each filter must contain exactly value, operator and condition.
     * Defaults to: undefined
     * @type Array&lt;PregnancySearchFilter&gt;
     * @memberof PregnancyApisearchPregnancy
     */
    filters: Array<PregnancySearchFilter>
    /**
     * When supplied, removes HTML markup from returned Pregnancy content. The only accepted value is \&#39;true\&#39;. Omit the parameter to retain HTML.
     * Defaults to: undefined
     * @type &#39;true&#39;
     * @memberof PregnancyApisearchPregnancy
     */
    noHtml?: 'true'
    /**
     * When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     * Defaults to: undefined
     * @type &#39;true&#39;
     * @memberof PregnancyApisearchPregnancy
     */
    nhsLinks?: 'true'
    /**
     * When supplied, the search also checks Pregnancy page-content text and expander-group content in addition to the page description. The only accepted value is \&#39;true\&#39;. This parameter is only valid on the search endpoint.
     * Defaults to: undefined
     * @type &#39;true&#39;
     * @memberof PregnancyApisearchPregnancy
     */
    searchAll?: 'true'
}

export class ObjectPregnancyApi {
    private api: ObservablePregnancyApi

    public constructor(configuration: Configuration, requestFactory?: PregnancyApiRequestFactory, responseProcessor?: PregnancyApiResponseProcessor) {
        this.api = new ObservablePregnancyApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a first-level Pregnancy route. no_html=true removes HTML markup, while nhs_links=true rewrites eligible MRD API URLs to NHS website URLs. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a Pregnancy page
     * @param param the request object
     */
    public getPregnancyLevelOneWithHttpInfo(param: PregnancyApiGetPregnancyLevelOneRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetPregnancyLevelOne200Response>> {
        return this.api.getPregnancyLevelOneWithHttpInfo(param.xMrdScopes, param.param1, param.noHtml, param.nhsLinks,  options).toPromise();
    }

    /**
     * Returns a first-level Pregnancy route. no_html=true removes HTML markup, while nhs_links=true rewrites eligible MRD API URLs to NHS website URLs. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a Pregnancy page
     * @param param the request object
     */
    public getPregnancyLevelOne(param: PregnancyApiGetPregnancyLevelOneRequest, options?: ConfigurationOptions): Promise<GetPregnancyLevelOne200Response> {
        return this.api.getPregnancyLevelOne(param.xMrdScopes, param.param1, param.noHtml, param.nhsLinks,  options).toPromise();
    }

    /**
     * Returns a third-level Pregnancy route. no_html=true removes HTML markup, while nhs_links=true rewrites eligible MRD API URLs to NHS website URLs. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve deeply nested Pregnancy content
     * @param param the request object
     */
    public getPregnancyLevelThreeWithHttpInfo(param: PregnancyApiGetPregnancyLevelThreeRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetPregnancyLevelOne200Response>> {
        return this.api.getPregnancyLevelThreeWithHttpInfo(param.xMrdScopes, param.param1, param.param2, param.param3, param.noHtml, param.nhsLinks,  options).toPromise();
    }

    /**
     * Returns a third-level Pregnancy route. no_html=true removes HTML markup, while nhs_links=true rewrites eligible MRD API URLs to NHS website URLs. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve deeply nested Pregnancy content
     * @param param the request object
     */
    public getPregnancyLevelThree(param: PregnancyApiGetPregnancyLevelThreeRequest, options?: ConfigurationOptions): Promise<GetPregnancyLevelOne200Response> {
        return this.api.getPregnancyLevelThree(param.xMrdScopes, param.param1, param.param2, param.param3, param.noHtml, param.nhsLinks,  options).toPromise();
    }

    /**
     * Returns a second-level page within a Pregnancy topic. no_html=true removes HTML markup, while nhs_links=true rewrites eligible MRD API URLs to NHS website URLs. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a Pregnancy subpage
     * @param param the request object
     */
    public getPregnancyLevelTwoWithHttpInfo(param: PregnancyApiGetPregnancyLevelTwoRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetPregnancyLevelOne200Response>> {
        return this.api.getPregnancyLevelTwoWithHttpInfo(param.xMrdScopes, param.param1, param.param2, param.noHtml, param.nhsLinks,  options).toPromise();
    }

    /**
     * Returns a second-level page within a Pregnancy topic. no_html=true removes HTML markup, while nhs_links=true rewrites eligible MRD API URLs to NHS website URLs. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a Pregnancy subpage
     * @param param the request object
     */
    public getPregnancyLevelTwo(param: PregnancyApiGetPregnancyLevelTwoRequest, options?: ConfigurationOptions): Promise<GetPregnancyLevelOne200Response> {
        return this.api.getPregnancyLevelTwo(param.xMrdScopes, param.param1, param.param2, param.noHtml, param.nhsLinks,  options).toPromise();
    }

    /**
     * Returns the available routes within the NHS Pregnancy dataset.
     * Retrieve available Pregnancy routes
     * @param param the request object
     */
    public getPregnancyRoutesWithHttpInfo(param: PregnancyApiGetPregnancyRoutesRequest, options?: ConfigurationOptions): Promise<HttpInfo<PregnancyRoutesResponse>> {
        return this.api.getPregnancyRoutesWithHttpInfo(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Returns the available routes within the NHS Pregnancy dataset.
     * Retrieve available Pregnancy routes
     * @param param the request object
     */
    public getPregnancyRoutes(param: PregnancyApiGetPregnancyRoutesRequest, options?: ConfigurationOptions): Promise<PregnancyRoutesResponse> {
        return this.api.getPregnancyRoutes(param.xMrdScopes,  options).toPromise();
    }

    /**
     * Searches the NHS Pregnancy dataset using structured filters. By default each filter searches the page description. When search_all=true, the search additionally checks page-content text and expander-group content. no_html removes HTML markup from returned content and nhs_links rewrites eligible MRD API links to NHS website links.
     * Search Pregnancy content
     * @param param the request object
     */
    public searchPregnancyWithHttpInfo(param: PregnancyApiSearchPregnancyRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<PregnancyData>>> {
        return this.api.searchPregnancyWithHttpInfo(param.xMrdScopes, param.filters, param.noHtml, param.nhsLinks, param.searchAll,  options).toPromise();
    }

    /**
     * Searches the NHS Pregnancy dataset using structured filters. By default each filter searches the page description. When search_all=true, the search additionally checks page-content text and expander-group content. no_html removes HTML markup from returned content and nhs_links rewrites eligible MRD API links to NHS website links.
     * Search Pregnancy content
     * @param param the request object
     */
    public searchPregnancy(param: PregnancyApiSearchPregnancyRequest, options?: ConfigurationOptions): Promise<Array<PregnancyData>> {
        return this.api.searchPregnancy(param.xMrdScopes, param.filters, param.noHtml, param.nhsLinks, param.searchAll,  options).toPromise();
    }

}

import { ObservableSearchApi } from "./ObservableAPI";
import { SearchApiRequestFactory, SearchApiResponseProcessor} from "../apis/SearchApi";

export interface SearchApiSearchMrdRequest {
    /**
     * MRD service scope or scopes to include in global search. Supply one or more OAuth-authorised MRD service scopes, comma-delimited or space-delimited.
     * Defaults to: &#39;aliss&#39;
     * @type string
     * @memberof SearchApisearchMrd
     */
    xMrdScopes: string
    /**
     * Structured Search filters supplied using indexed bracket notation. Filter 0 must contain keyword, operator and condition. Additional filters must contain operator and condition and may contain keyword, description or both. For example: filters[0][operator]&#x3D;LIKE&amp;filters[0][keyword]&#x3D;smoking&amp;filters[0][condition]&#x3D;AND&amp;filters[1][operator]&#x3D;LIKE&amp;filters[1][description]&#x3D;electronic cigarette&amp;filters[1][condition]&#x3D;. The final filter should normally use an empty condition.
     * Defaults to: undefined
     * @type Array&lt;SearchFilter&gt;
     * @memberof SearchApisearchMrd
     */
    filters: Array<SearchFilter>
    /**
     * Page number used when pagination is enabled. The value is cast to an integer by the current implementation. If the resulting value is below 1, page 1 is used. The default is 1.
     * Defaults to: 1
     * @type number
     * @memberof SearchApisearchMrd
     */
    page?: number
    /**
     * Disables pagination when this query parameter is present. The current implementation checks only whether the parameter exists; its value is ignored. all&#x3D;true, all&#x3D;false and an empty all parameter all enable unpaginated results. Omit the parameter to use pagination.
     * Defaults to: undefined
     * @type string
     * @memberof SearchApisearchMrd
     */
    all?: string
    /**
     * Requested number of results per page when pagination is enabled. The value is cast to an integer. Values above 100 are reduced to 100. The default is 50.
     * Defaults to: 50
     * @type number
     * @memberof SearchApisearchMrd
     */
    limit?: number
}

export class ObjectSearchApi {
    private api: ObservableSearchApi

    public constructor(configuration: Configuration, requestFactory?: SearchApiRequestFactory, responseProcessor?: SearchApiResponseProcessor) {
        this.api = new ObservableSearchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Searches indexed MRD content using structured filters. Filter 0 must contain a keyword. Searchable fields are keyword and page description, using either = or LIKE. Indexed filters can be connected using AND, OR, NOT or AND NOT, with NOT converted internally to AND NOT. Results are restricted according to the MRD scopes authorised for the request. By default results are paginated. Supplying the all query parameter disables pagination regardless of the parameter value.
     * Search MRD content
     * @param param the request object
     */
    public searchMrdWithHttpInfo(param: SearchApiSearchMrdRequest, options?: ConfigurationOptions): Promise<HttpInfo<SearchMrd200Response>> {
        return this.api.searchMrdWithHttpInfo(param.xMrdScopes, param.filters, param.page, param.all, param.limit,  options).toPromise();
    }

    /**
     * Searches indexed MRD content using structured filters. Filter 0 must contain a keyword. Searchable fields are keyword and page description, using either = or LIKE. Indexed filters can be connected using AND, OR, NOT or AND NOT, with NOT converted internally to AND NOT. Results are restricted according to the MRD scopes authorised for the request. By default results are paginated. Supplying the all query parameter disables pagination regardless of the parameter value.
     * Search MRD content
     * @param param the request object
     */
    public searchMrd(param: SearchApiSearchMrdRequest, options?: ConfigurationOptions): Promise<SearchMrd200Response> {
        return this.api.searchMrd(param.xMrdScopes, param.filters, param.page, param.all, param.limit,  options).toPromise();
    }

}

import { ObservableValidationsApi } from "./ObservableAPI";
import { ValidationsApiRequestFactory, ValidationsApiResponseProcessor} from "../apis/ValidationsApi";

export interface ValidationsApiGetValidationLookupValuesRequest {
    /**
     * Supported validation lookup field. Only lookup datasets currently intended to provide useful values through the Validations API are exposed here.
     * Defaults to: undefined
     * @type &#39;bank_acc_type&#39; | &#39;comm_type&#39; | &#39;country&#39; | &#39;dl_group&#39; | &#39;dl_issuing_authority&#39; | &#39;edu_org_type&#39; | &#39;gender&#39; | &#39;home_tenancy&#39; | &#39;marital_status&#39; | &#39;medication_dosage_units&#39; | &#39;mode_of_study&#39; | &#39;pronouns&#39; | &#39;property_type&#39; | &#39;race_ethnicity&#39; | &#39;title&#39; | &#39;utility_service&#39;
     * @memberof ValidationsApigetValidationLookupValues
     */
    fieldName: 'bank_acc_type' | 'comm_type' | 'country' | 'dl_group' | 'dl_issuing_authority' | 'edu_org_type' | 'gender' | 'home_tenancy' | 'marital_status' | 'medication_dosage_units' | 'mode_of_study' | 'pronouns' | 'property_type' | 'race_ethnicity' | 'title' | 'utility_service'
}

export interface ValidationsApiGetValidationMdsAllDatasetsAndFieldsRequest {
}

export interface ValidationsApiGetValidationMdsDatasetFieldTypesRequest {
    /**
     * MDS dataset machine name.
     * Defaults to: undefined
     * @type string
     * @memberof ValidationsApigetValidationMdsDatasetFieldTypes
     */
    dataset: string
}

export interface ValidationsApiGetValidationMdsDatasetFieldsRequest {
    /**
     * MDS dataset machine name.
     * Defaults to: undefined
     * @type string
     * @memberof ValidationsApigetValidationMdsDatasetFields
     */
    dataset: string
}

export interface ValidationsApiGetValidationMdsDatasetsRequest {
}

export interface ValidationsApiGetValidationMdsDatasetsAndFieldsRequest {
}

export interface ValidationsApiGetValidationMdsDatasetsByOneStatusRequest {
    /**
     * First MDS dataset status to include.
     * Defaults to: undefined
     * @type &#39;Live&#39; | &#39;In Development&#39; | &#39;Implement&#39; | &#39;Hold&#39;
     * @memberof ValidationsApigetValidationMdsDatasetsByOneStatus
     */
    status1: 'Live' | 'In Development' | 'Implement' | 'Hold'
}

export interface ValidationsApiGetValidationMdsDatasetsByThreeStatusesRequest {
    /**
     * First MDS dataset status to include.
     * Defaults to: undefined
     * @type &#39;Live&#39; | &#39;In Development&#39; | &#39;Implement&#39; | &#39;Hold&#39;
     * @memberof ValidationsApigetValidationMdsDatasetsByThreeStatuses
     */
    status1: 'Live' | 'In Development' | 'Implement' | 'Hold'
    /**
     * Second MDS dataset status to include.
     * Defaults to: undefined
     * @type &#39;Live&#39; | &#39;In Development&#39; | &#39;Implement&#39; | &#39;Hold&#39;
     * @memberof ValidationsApigetValidationMdsDatasetsByThreeStatuses
     */
    status2: 'Live' | 'In Development' | 'Implement' | 'Hold'
    /**
     * Third MDS dataset status to include.
     * Defaults to: undefined
     * @type &#39;Live&#39; | &#39;In Development&#39; | &#39;Implement&#39; | &#39;Hold&#39;
     * @memberof ValidationsApigetValidationMdsDatasetsByThreeStatuses
     */
    status3: 'Live' | 'In Development' | 'Implement' | 'Hold'
}

export interface ValidationsApiGetValidationMdsDatasetsByTwoStatusesRequest {
    /**
     * First MDS dataset status to include.
     * Defaults to: undefined
     * @type &#39;Live&#39; | &#39;In Development&#39; | &#39;Implement&#39; | &#39;Hold&#39;
     * @memberof ValidationsApigetValidationMdsDatasetsByTwoStatuses
     */
    status1: 'Live' | 'In Development' | 'Implement' | 'Hold'
    /**
     * Second MDS dataset status to include.
     * Defaults to: undefined
     * @type &#39;Live&#39; | &#39;In Development&#39; | &#39;Implement&#39; | &#39;Hold&#39;
     * @memberof ValidationsApigetValidationMdsDatasetsByTwoStatuses
     */
    status2: 'Live' | 'In Development' | 'Implement' | 'Hold'
}

export interface ValidationsApiGetValidationMdsDatasetsByTypeRequest {
    /**
     * Public dataset type. metadata maps to JSON-backed datasets and transactional maps to SQLite-backed datasets.
     * Defaults to: undefined
     * @type &#39;metadata&#39; | &#39;transactional&#39;
     * @memberof ValidationsApigetValidationMdsDatasetsByType
     */
    type: 'metadata' | 'transactional'
}

export interface ValidationsApiGetValidationMdsFieldTypeRequest {
    /**
     * MDS field machine name.
     * Defaults to: undefined
     * @type string
     * @memberof ValidationsApigetValidationMdsFieldType
     */
    field: string
}

export interface ValidationsApiGetValidationMdsSummaryRequest {
}

export interface ValidationsApiGetValidationMtsFeatureByNameRequest {
    /**
     * Mydex Template System feature name. The endpoint matches this value against feature_name.
     * Defaults to: undefined
     * @type string
     * @memberof ValidationsApigetValidationMtsFeatureByName
     */
    feature: string
}

export interface ValidationsApiGetValidationMtsFeaturesRequest {
}

export interface ValidationsApiGetValidationMtsFeaturesByGroupRequest {
    /**
     * Mydex Template System feature group name. The endpoint matches this value against feature_group.
     * Defaults to: undefined
     * @type string
     * @memberof ValidationsApigetValidationMtsFeaturesByGroup
     */
    group: string
}

export interface ValidationsApiGetValidationMtsTemplateByModuleRequest {
    /**
     * Mydex Template System template name. The endpoint matches this value against template_name.
     * Defaults to: undefined
     * @type string
     * @memberof ValidationsApigetValidationMtsTemplateByModule
     */
    template: string
    /**
     * Mydex Template System module name. The endpoint matches this value against module_name.
     * Defaults to: undefined
     * @type string
     * @memberof ValidationsApigetValidationMtsTemplateByModule
     */
    module: string
}

export interface ValidationsApiGetValidationMtsTemplateByNameRequest {
    /**
     * Mydex Template System template name. The endpoint matches this value against template_name.
     * Defaults to: undefined
     * @type string
     * @memberof ValidationsApigetValidationMtsTemplateByName
     */
    template: string
}

export interface ValidationsApiGetValidationMtsTemplateBySubsectionRequest {
    /**
     * Mydex Template System template name. The endpoint matches this value against template_name.
     * Defaults to: undefined
     * @type string
     * @memberof ValidationsApigetValidationMtsTemplateBySubsection
     */
    template: string
    /**
     * Mydex Template System module name. The endpoint matches this value against module_name.
     * Defaults to: undefined
     * @type string
     * @memberof ValidationsApigetValidationMtsTemplateBySubsection
     */
    module: string
    /**
     * Mydex Template System module subsection name. The endpoint matches this value against module_subsection.
     * Defaults to: undefined
     * @type string
     * @memberof ValidationsApigetValidationMtsTemplateBySubsection
     */
    subsection: string
}

export interface ValidationsApiGetValidationMtsTemplatesRequest {
}

export interface ValidationsApiSearchValidationMdsFieldsRequest {
    /**
     * Partial field machine name used to search published MDS fields.
     * Defaults to: undefined
     * @type string
     * @memberof ValidationsApisearchValidationMdsFields
     */
    search: string
}

export interface ValidationsApiValidateLookupValueRequest {
    /**
     * Supported validation lookup field. Only lookup datasets currently intended to provide useful values through the Validations API are exposed here.
     * Defaults to: undefined
     * @type &#39;bank_acc_type&#39; | &#39;comm_type&#39; | &#39;country&#39; | &#39;dl_group&#39; | &#39;dl_issuing_authority&#39; | &#39;edu_org_type&#39; | &#39;gender&#39; | &#39;home_tenancy&#39; | &#39;marital_status&#39; | &#39;medication_dosage_units&#39; | &#39;mode_of_study&#39; | &#39;pronouns&#39; | &#39;property_type&#39; | &#39;race_ethnicity&#39; | &#39;title&#39; | &#39;utility_service&#39;
     * @memberof ValidationsApivalidateLookupValue
     */
    fieldName: 'bank_acc_type' | 'comm_type' | 'country' | 'dl_group' | 'dl_issuing_authority' | 'edu_org_type' | 'gender' | 'home_tenancy' | 'marital_status' | 'medication_dosage_units' | 'mode_of_study' | 'pronouns' | 'property_type' | 'race_ethnicity' | 'title' | 'utility_service'
    /**
     * Value to validate against the allowed values associated with the requested lookup.
     * Defaults to: undefined
     * @type string
     * @memberof ValidationsApivalidateLookupValue
     */
    userInput: string
}

export class ObjectValidationsApi {
    private api: ObservableValidationsApi

    public constructor(configuration: Configuration, requestFactory?: ValidationsApiRequestFactory, responseProcessor?: ValidationsApiResponseProcessor) {
        this.api = new ObservableValidationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns allowed values from the requested validation lookup. Most lookup tables return an array of strings. Structured lookup tables such as race_ethnicity return an array of objects. The field name must map to a supported lu_<field_name> lookup table; country is additionally supported from the Countries database.
     * Retrieve allowed values for a lookup field
     * @param param the request object
     */
    public getValidationLookupValuesWithHttpInfo(param: ValidationsApiGetValidationLookupValuesRequest, options?: ConfigurationOptions): Promise<HttpInfo<LookupAllowedValuesResponse>> {
        return this.api.getValidationLookupValuesWithHttpInfo(param.fieldName,  options).toPromise();
    }

    /**
     * Returns allowed values from the requested validation lookup. Most lookup tables return an array of strings. Structured lookup tables such as race_ethnicity return an array of objects. The field name must map to a supported lu_<field_name> lookup table; country is additionally supported from the Countries database.
     * Retrieve allowed values for a lookup field
     * @param param the request object
     */
    public getValidationLookupValues(param: ValidationsApiGetValidationLookupValuesRequest, options?: ConfigurationOptions): Promise<LookupAllowedValuesResponse> {
        return this.api.getValidationLookupValues(param.fieldName,  options).toPromise();
    }

    /**
     * Returns all published datasets grouped dynamically by dataset status. Each dataset includes its PDS file type, derived deployment environment and extended information for its published fields.
     * Retrieve all MDS datasets with extended field information
     * @param param the request object
     */
    public getValidationMdsAllDatasetsAndFieldsWithHttpInfo(param: ValidationsApiGetValidationMdsAllDatasetsAndFieldsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<{ [key: string]: Array<MdsAllDatasetWithFields>; }>> {
        return this.api.getValidationMdsAllDatasetsAndFieldsWithHttpInfo( options).toPromise();
    }

    /**
     * Returns all published datasets grouped dynamically by dataset status. Each dataset includes its PDS file type, derived deployment environment and extended information for its published fields.
     * Retrieve all MDS datasets with extended field information
     * @param param the request object
     */
    public getValidationMdsAllDatasetsAndFields(param: ValidationsApiGetValidationMdsAllDatasetsAndFieldsRequest = {}, options?: ConfigurationOptions): Promise<{ [key: string]: Array<MdsAllDatasetWithFields>; }> {
        return this.api.getValidationMdsAllDatasetsAndFields( options).toPromise();
    }

    /**
     * Returns an object keyed by field machine name containing the field name, display name and data type for fields belonging to the requested dataset.
     * Retrieve field types for an MDS dataset
     * @param param the request object
     */
    public getValidationMdsDatasetFieldTypesWithHttpInfo(param: ValidationsApiGetValidationMdsDatasetFieldTypesRequest, options?: ConfigurationOptions): Promise<HttpInfo<{ [key: string]: MdsFieldType; }>> {
        return this.api.getValidationMdsDatasetFieldTypesWithHttpInfo(param.dataset,  options).toPromise();
    }

    /**
     * Returns an object keyed by field machine name containing the field name, display name and data type for fields belonging to the requested dataset.
     * Retrieve field types for an MDS dataset
     * @param param the request object
     */
    public getValidationMdsDatasetFieldTypes(param: ValidationsApiGetValidationMdsDatasetFieldTypesRequest, options?: ConfigurationOptions): Promise<{ [key: string]: MdsFieldType; }> {
        return this.api.getValidationMdsDatasetFieldTypes(param.dataset,  options).toPromise();
    }

    /**
     * Returns an object keyed by field machine name containing extended definitions for published fields belonging to the requested dataset.
     * Retrieve full field definitions for an MDS dataset
     * @param param the request object
     */
    public getValidationMdsDatasetFieldsWithHttpInfo(param: ValidationsApiGetValidationMdsDatasetFieldsRequest, options?: ConfigurationOptions): Promise<HttpInfo<{ [key: string]: MdsFieldDetails; }>> {
        return this.api.getValidationMdsDatasetFieldsWithHttpInfo(param.dataset,  options).toPromise();
    }

    /**
     * Returns an object keyed by field machine name containing extended definitions for published fields belonging to the requested dataset.
     * Retrieve full field definitions for an MDS dataset
     * @param param the request object
     */
    public getValidationMdsDatasetFields(param: ValidationsApiGetValidationMdsDatasetFieldsRequest, options?: ConfigurationOptions): Promise<{ [key: string]: MdsFieldDetails; }> {
        return this.api.getValidationMdsDatasetFields(param.dataset,  options).toPromise();
    }

    /**
     * Returns published MDS datasets including their machine name, display name and status.
     * Retrieve MDS datasets
     * @param param the request object
     */
    public getValidationMdsDatasetsWithHttpInfo(param: ValidationsApiGetValidationMdsDatasetsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<MdsDatasetSummary>>> {
        return this.api.getValidationMdsDatasetsWithHttpInfo( options).toPromise();
    }

    /**
     * Returns published MDS datasets including their machine name, display name and status.
     * Retrieve MDS datasets
     * @param param the request object
     */
    public getValidationMdsDatasets(param: ValidationsApiGetValidationMdsDatasetsRequest = {}, options?: ConfigurationOptions): Promise<Array<MdsDatasetSummary>> {
        return this.api.getValidationMdsDatasets( options).toPromise();
    }

    /**
     * Returns published datasets grouped dynamically by dataset status. Each dataset contains its machine name, display name, status, PDS file type and a map of published fields containing field name, display name and data type.
     * Retrieve MDS datasets and basic field information
     * @param param the request object
     */
    public getValidationMdsDatasetsAndFieldsWithHttpInfo(param: ValidationsApiGetValidationMdsDatasetsAndFieldsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<{ [key: string]: Array<MdsDatasetWithFields>; }>> {
        return this.api.getValidationMdsDatasetsAndFieldsWithHttpInfo( options).toPromise();
    }

    /**
     * Returns published datasets grouped dynamically by dataset status. Each dataset contains its machine name, display name, status, PDS file type and a map of published fields containing field name, display name and data type.
     * Retrieve MDS datasets and basic field information
     * @param param the request object
     */
    public getValidationMdsDatasetsAndFields(param: ValidationsApiGetValidationMdsDatasetsAndFieldsRequest = {}, options?: ConfigurationOptions): Promise<{ [key: string]: Array<MdsDatasetWithFields>; }> {
        return this.api.getValidationMdsDatasetsAndFields( options).toPromise();
    }

    /**
     * Returns published datasets matching the supplied dataset status.
     * Retrieve MDS datasets by one status
     * @param param the request object
     */
    public getValidationMdsDatasetsByOneStatusWithHttpInfo(param: ValidationsApiGetValidationMdsDatasetsByOneStatusRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<MdsDatasetSummary>>> {
        return this.api.getValidationMdsDatasetsByOneStatusWithHttpInfo(param.status1,  options).toPromise();
    }

    /**
     * Returns published datasets matching the supplied dataset status.
     * Retrieve MDS datasets by one status
     * @param param the request object
     */
    public getValidationMdsDatasetsByOneStatus(param: ValidationsApiGetValidationMdsDatasetsByOneStatusRequest, options?: ConfigurationOptions): Promise<Array<MdsDatasetSummary>> {
        return this.api.getValidationMdsDatasetsByOneStatus(param.status1,  options).toPromise();
    }

    /**
     * Returns published datasets matching any of the supplied dataset statuses.
     * Retrieve MDS datasets by three statuses
     * @param param the request object
     */
    public getValidationMdsDatasetsByThreeStatusesWithHttpInfo(param: ValidationsApiGetValidationMdsDatasetsByThreeStatusesRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<MdsDatasetSummary>>> {
        return this.api.getValidationMdsDatasetsByThreeStatusesWithHttpInfo(param.status1, param.status2, param.status3,  options).toPromise();
    }

    /**
     * Returns published datasets matching any of the supplied dataset statuses.
     * Retrieve MDS datasets by three statuses
     * @param param the request object
     */
    public getValidationMdsDatasetsByThreeStatuses(param: ValidationsApiGetValidationMdsDatasetsByThreeStatusesRequest, options?: ConfigurationOptions): Promise<Array<MdsDatasetSummary>> {
        return this.api.getValidationMdsDatasetsByThreeStatuses(param.status1, param.status2, param.status3,  options).toPromise();
    }

    /**
     * Returns published datasets matching either of the supplied dataset statuses.
     * Retrieve MDS datasets by two statuses
     * @param param the request object
     */
    public getValidationMdsDatasetsByTwoStatusesWithHttpInfo(param: ValidationsApiGetValidationMdsDatasetsByTwoStatusesRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<MdsDatasetSummary>>> {
        return this.api.getValidationMdsDatasetsByTwoStatusesWithHttpInfo(param.status1, param.status2,  options).toPromise();
    }

    /**
     * Returns published datasets matching either of the supplied dataset statuses.
     * Retrieve MDS datasets by two statuses
     * @param param the request object
     */
    public getValidationMdsDatasetsByTwoStatuses(param: ValidationsApiGetValidationMdsDatasetsByTwoStatusesRequest, options?: ConfigurationOptions): Promise<Array<MdsDatasetSummary>> {
        return this.api.getValidationMdsDatasetsByTwoStatuses(param.status1, param.status2,  options).toPromise();
    }

    /**
     * Returns published datasets belonging to the requested public dataset type. metadata is mapped internally to JSON and transactional is mapped internally to SQLite.
     * Retrieve MDS datasets by type
     * @param param the request object
     */
    public getValidationMdsDatasetsByTypeWithHttpInfo(param: ValidationsApiGetValidationMdsDatasetsByTypeRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<MdsDatasetSummary>>> {
        return this.api.getValidationMdsDatasetsByTypeWithHttpInfo(param.type,  options).toPromise();
    }

    /**
     * Returns published datasets belonging to the requested public dataset type. metadata is mapped internally to JSON and transactional is mapped internally to SQLite.
     * Retrieve MDS datasets by type
     * @param param the request object
     */
    public getValidationMdsDatasetsByType(param: ValidationsApiGetValidationMdsDatasetsByTypeRequest, options?: ConfigurationOptions): Promise<Array<MdsDatasetSummary>> {
        return this.api.getValidationMdsDatasetsByType(param.type,  options).toPromise();
    }

    /**
     * Returns the field machine name, display name and data type for the requested MDS field.
     * Retrieve an MDS field\'s data type
     * @param param the request object
     */
    public getValidationMdsFieldTypeWithHttpInfo(param: ValidationsApiGetValidationMdsFieldTypeRequest, options?: ConfigurationOptions): Promise<HttpInfo<MdsFieldTypeResponse>> {
        return this.api.getValidationMdsFieldTypeWithHttpInfo(param.field,  options).toPromise();
    }

    /**
     * Returns the field machine name, display name and data type for the requested MDS field.
     * Retrieve an MDS field\'s data type
     * @param param the request object
     */
    public getValidationMdsFieldType(param: ValidationsApiGetValidationMdsFieldTypeRequest, options?: ConfigurationOptions): Promise<MdsFieldTypeResponse> {
        return this.api.getValidationMdsFieldType(param.field,  options).toPromise();
    }

    /**
     * Returns counts of published datasets, published live datasets and published fields. The current API serializes these database count values as strings.
     * Retrieve an MDS summary
     * @param param the request object
     */
    public getValidationMdsSummaryWithHttpInfo(param: ValidationsApiGetValidationMdsSummaryRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<MdsSummaryResponse>> {
        return this.api.getValidationMdsSummaryWithHttpInfo( options).toPromise();
    }

    /**
     * Returns counts of published datasets, published live datasets and published fields. The current API serializes these database count values as strings.
     * Retrieve an MDS summary
     * @param param the request object
     */
    public getValidationMdsSummary(param: ValidationsApiGetValidationMdsSummaryRequest = {}, options?: ConfigurationOptions): Promise<MdsSummaryResponse> {
        return this.api.getValidationMdsSummary( options).toPromise();
    }

    /**
     * Returns records whose feature_name matches the supplied feature name.
     * Retrieve an MTS feature by name
     * @param param the request object
     */
    public getValidationMtsFeatureByNameWithHttpInfo(param: ValidationsApiGetValidationMtsFeatureByNameRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<MtsFeatureRecord>>> {
        return this.api.getValidationMtsFeatureByNameWithHttpInfo(param.feature,  options).toPromise();
    }

    /**
     * Returns records whose feature_name matches the supplied feature name.
     * Retrieve an MTS feature by name
     * @param param the request object
     */
    public getValidationMtsFeatureByName(param: ValidationsApiGetValidationMtsFeatureByNameRequest, options?: ConfigurationOptions): Promise<Array<MtsFeatureRecord>> {
        return this.api.getValidationMtsFeatureByName(param.feature,  options).toPromise();
    }

    /**
     * Returns all Mydex Template System feature records.
     * Retrieve all MTS features
     * @param param the request object
     */
    public getValidationMtsFeaturesWithHttpInfo(param: ValidationsApiGetValidationMtsFeaturesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<MtsFeatureRecord>>> {
        return this.api.getValidationMtsFeaturesWithHttpInfo( options).toPromise();
    }

    /**
     * Returns all Mydex Template System feature records.
     * Retrieve all MTS features
     * @param param the request object
     */
    public getValidationMtsFeatures(param: ValidationsApiGetValidationMtsFeaturesRequest = {}, options?: ConfigurationOptions): Promise<Array<MtsFeatureRecord>> {
        return this.api.getValidationMtsFeatures( options).toPromise();
    }

    /**
     * Returns records whose feature_group matches the supplied feature group name.
     * Retrieve MTS features by group
     * @param param the request object
     */
    public getValidationMtsFeaturesByGroupWithHttpInfo(param: ValidationsApiGetValidationMtsFeaturesByGroupRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<MtsFeatureRecord>>> {
        return this.api.getValidationMtsFeaturesByGroupWithHttpInfo(param.group,  options).toPromise();
    }

    /**
     * Returns records whose feature_group matches the supplied feature group name.
     * Retrieve MTS features by group
     * @param param the request object
     */
    public getValidationMtsFeaturesByGroup(param: ValidationsApiGetValidationMtsFeaturesByGroupRequest, options?: ConfigurationOptions): Promise<Array<MtsFeatureRecord>> {
        return this.api.getValidationMtsFeaturesByGroup(param.group,  options).toPromise();
    }

    /**
     * Returns records whose template_name and module_name match the supplied values.
     * Retrieve an MTS template module
     * @param param the request object
     */
    public getValidationMtsTemplateByModuleWithHttpInfo(param: ValidationsApiGetValidationMtsTemplateByModuleRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<MtsTemplateRecord>>> {
        return this.api.getValidationMtsTemplateByModuleWithHttpInfo(param.template, param.module,  options).toPromise();
    }

    /**
     * Returns records whose template_name and module_name match the supplied values.
     * Retrieve an MTS template module
     * @param param the request object
     */
    public getValidationMtsTemplateByModule(param: ValidationsApiGetValidationMtsTemplateByModuleRequest, options?: ConfigurationOptions): Promise<Array<MtsTemplateRecord>> {
        return this.api.getValidationMtsTemplateByModule(param.template, param.module,  options).toPromise();
    }

    /**
     * Returns records whose template_name matches the supplied template name.
     * Retrieve MTS template records by template name
     * @param param the request object
     */
    public getValidationMtsTemplateByNameWithHttpInfo(param: ValidationsApiGetValidationMtsTemplateByNameRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<MtsTemplateRecord>>> {
        return this.api.getValidationMtsTemplateByNameWithHttpInfo(param.template,  options).toPromise();
    }

    /**
     * Returns records whose template_name matches the supplied template name.
     * Retrieve MTS template records by template name
     * @param param the request object
     */
    public getValidationMtsTemplateByName(param: ValidationsApiGetValidationMtsTemplateByNameRequest, options?: ConfigurationOptions): Promise<Array<MtsTemplateRecord>> {
        return this.api.getValidationMtsTemplateByName(param.template,  options).toPromise();
    }

    /**
     * Returns records whose template_name, module_name and module_subsection match the supplied values.
     * Retrieve an MTS template subsection
     * @param param the request object
     */
    public getValidationMtsTemplateBySubsectionWithHttpInfo(param: ValidationsApiGetValidationMtsTemplateBySubsectionRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<MtsTemplateRecord>>> {
        return this.api.getValidationMtsTemplateBySubsectionWithHttpInfo(param.template, param.module, param.subsection,  options).toPromise();
    }

    /**
     * Returns records whose template_name, module_name and module_subsection match the supplied values.
     * Retrieve an MTS template subsection
     * @param param the request object
     */
    public getValidationMtsTemplateBySubsection(param: ValidationsApiGetValidationMtsTemplateBySubsectionRequest, options?: ConfigurationOptions): Promise<Array<MtsTemplateRecord>> {
        return this.api.getValidationMtsTemplateBySubsection(param.template, param.module, param.subsection,  options).toPromise();
    }

    /**
     * Returns all records from the Mydex Template System templates_features table, including template, module, subsection and route information.
     * Retrieve all MTS template records
     * @param param the request object
     */
    public getValidationMtsTemplatesWithHttpInfo(param: ValidationsApiGetValidationMtsTemplatesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<MtsTemplateRecord>>> {
        return this.api.getValidationMtsTemplatesWithHttpInfo( options).toPromise();
    }

    /**
     * Returns all records from the Mydex Template System templates_features table, including template, module, subsection and route information.
     * Retrieve all MTS template records
     * @param param the request object
     */
    public getValidationMtsTemplates(param: ValidationsApiGetValidationMtsTemplatesRequest = {}, options?: ConfigurationOptions): Promise<Array<MtsTemplateRecord>> {
        return this.api.getValidationMtsTemplates( options).toPromise();
    }

    /**
     * Searches published MDS field machine names for values containing the supplied search term.
     * Search MDS field names
     * @param param the request object
     */
    public searchValidationMdsFieldsWithHttpInfo(param: ValidationsApiSearchValidationMdsFieldsRequest, options?: ConfigurationOptions): Promise<HttpInfo<MdsFieldSearchResponse>> {
        return this.api.searchValidationMdsFieldsWithHttpInfo(param.search,  options).toPromise();
    }

    /**
     * Searches published MDS field machine names for values containing the supplied search term.
     * Search MDS field names
     * @param param the request object
     */
    public searchValidationMdsFields(param: ValidationsApiSearchValidationMdsFieldsRequest, options?: ConfigurationOptions): Promise<MdsFieldSearchResponse> {
        return this.api.searchValidationMdsFields(param.search,  options).toPromise();
    }

    /**
     * Checks whether the supplied value matches an allowed value associated with the requested lookup. Matching is case-insensitive because the endpoint converts both stored values and the supplied value to uppercase. The result is returned as the string true or false.
     * Validate a value against a lookup field
     * @param param the request object
     */
    public validateLookupValueWithHttpInfo(param: ValidationsApiValidateLookupValueRequest, options?: ConfigurationOptions): Promise<HttpInfo<LookupValidationResponse>> {
        return this.api.validateLookupValueWithHttpInfo(param.fieldName, param.userInput,  options).toPromise();
    }

    /**
     * Checks whether the supplied value matches an allowed value associated with the requested lookup. Matching is case-insensitive because the endpoint converts both stored values and the supplied value to uppercase. The result is returned as the string true or false.
     * Validate a value against a lookup field
     * @param param the request object
     */
    public validateLookupValue(param: ValidationsApiValidateLookupValueRequest, options?: ConfigurationOptions): Promise<LookupValidationResponse> {
        return this.api.validateLookupValue(param.fieldName, param.userInput,  options).toPromise();
    }

}
