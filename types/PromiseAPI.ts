import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, PromiseConfigurationOptions, wrapOptions } from '../configuration'
import { PromiseMiddleware, Middleware, PromiseMiddlewareWrapper } from '../middleware';

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
import { ObservableALISSApi } from './ObservableAPI';

import { ALISSApiRequestFactory, ALISSApiResponseProcessor} from "../apis/ALISSApi";
export class PromiseALISSApi {
    private api: ObservableALISSApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ALISSApiRequestFactory,
        responseProcessor?: ALISSApiResponseProcessor
    ) {
        this.api = new ObservableALISSApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns the number of distinct ALISS services matching the supplied structured filters.
     * Count matching ALISS services
     * @param xMrdScopes MRD service scope required for ALISS endpoints.
     * @param [filters] Structured filters used to search ALISS services. Supported datasets are services, organisations, categories, service_areas, locations, accessibility_features and community_groups. Each filter requires field, value and operator. Every filter except the final filter must also contain condition.
     */
    public countAlissServicesWithHttpInfo(xMrdScopes: 'aliss', filters?: SearchAlissServicesFiltersParameter, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<AlissServiceCount>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.countAlissServicesWithHttpInfo(xMrdScopes, filters, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the number of distinct ALISS services matching the supplied structured filters.
     * Count matching ALISS services
     * @param xMrdScopes MRD service scope required for ALISS endpoints.
     * @param [filters] Structured filters used to search ALISS services. Supported datasets are services, organisations, categories, service_areas, locations, accessibility_features and community_groups. Each filter requires field, value and operator. Every filter except the final filter must also contain condition.
     */
    public countAlissServices(xMrdScopes: 'aliss', filters?: SearchAlissServicesFiltersParameter, _options?: PromiseConfigurationOptions): Promise<Array<AlissServiceCount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.countAlissServices(xMrdScopes, filters, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve ALISS accessibility features
     * @param xMrdScopes MRD service scope required for ALISS endpoints.
     */
    public getAlissAccessibilityFeaturesWithHttpInfo(xMrdScopes: 'aliss', _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<AlissNamedSlugItem>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAlissAccessibilityFeaturesWithHttpInfo(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve ALISS accessibility features
     * @param xMrdScopes MRD service scope required for ALISS endpoints.
     */
    public getAlissAccessibilityFeatures(xMrdScopes: 'aliss', _options?: PromiseConfigurationOptions): Promise<Array<AlissNamedSlugItem>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAlissAccessibilityFeatures(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve ALISS categories
     * @param xMrdScopes MRD service scope required for ALISS endpoints.
     */
    public getAlissCategoriesWithHttpInfo(xMrdScopes: 'aliss', _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<AlissNamedSlugItem>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAlissCategoriesWithHttpInfo(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve ALISS categories
     * @param xMrdScopes MRD service scope required for ALISS endpoints.
     */
    public getAlissCategories(xMrdScopes: 'aliss', _options?: PromiseConfigurationOptions): Promise<Array<AlissNamedSlugItem>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAlissCategories(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve ALISS community groups
     * @param xMrdScopes MRD service scope required for ALISS endpoints.
     */
    public getAlissCommunityGroupsWithHttpInfo(xMrdScopes: 'aliss', _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<AlissNamedSlugItem>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAlissCommunityGroupsWithHttpInfo(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve ALISS community groups
     * @param xMrdScopes MRD service scope required for ALISS endpoints.
     */
    public getAlissCommunityGroups(xMrdScopes: 'aliss', _options?: PromiseConfigurationOptions): Promise<Array<AlissNamedSlugItem>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAlissCommunityGroups(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve ALISS organisations
     * @param xMrdScopes MRD service scope required for ALISS endpoints.
     */
    public getAlissOrganisationsWithHttpInfo(xMrdScopes: 'aliss', _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<AlissNamedSlugItem>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAlissOrganisationsWithHttpInfo(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve ALISS organisations
     * @param xMrdScopes MRD service scope required for ALISS endpoints.
     */
    public getAlissOrganisations(xMrdScopes: 'aliss', _options?: PromiseConfigurationOptions): Promise<Array<AlissNamedSlugItem>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAlissOrganisations(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve ALISS service areas
     * @param xMrdScopes MRD service scope required for ALISS endpoints.
     */
    public getAlissServiceAreasWithHttpInfo(xMrdScopes: 'aliss', _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<AlissServiceAreaReference>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAlissServiceAreasWithHttpInfo(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve ALISS service areas
     * @param xMrdScopes MRD service scope required for ALISS endpoints.
     */
    public getAlissServiceAreas(xMrdScopes: 'aliss', _options?: PromiseConfigurationOptions): Promise<Array<AlissServiceAreaReference>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAlissServiceAreas(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves one or more services using a comma-separated list of service IDs.
     * Retrieve ALISS services by ID
     * @param xMrdScopes MRD service scope required for ALISS endpoints.
     * @param serviceIds One or more comma-separated ALISS service IDs.
     * @param [orderBy] Field used to order matching services.
     * @param [order] Direction used to order matching services.
     * @param [geojson] Controls whether GeoJSON is included with service-area data. The API accepts true or false case-insensitively.
     * @param [format] Response format.
     */
    public getAlissServicesByIdsWithHttpInfo(xMrdScopes: 'aliss', serviceIds: string, orderBy?: 'services.id' | 'services.name' | 'organisations.name', order?: 'ASC' | 'DESC', geojson?: boolean, format?: 'JSON' | 'XML', _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<AlissService>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAlissServicesByIdsWithHttpInfo(xMrdScopes, serviceIds, orderBy, order, geojson, format, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves one or more services using a comma-separated list of service IDs.
     * Retrieve ALISS services by ID
     * @param xMrdScopes MRD service scope required for ALISS endpoints.
     * @param serviceIds One or more comma-separated ALISS service IDs.
     * @param [orderBy] Field used to order matching services.
     * @param [order] Direction used to order matching services.
     * @param [geojson] Controls whether GeoJSON is included with service-area data. The API accepts true or false case-insensitively.
     * @param [format] Response format.
     */
    public getAlissServicesByIds(xMrdScopes: 'aliss', serviceIds: string, orderBy?: 'services.id' | 'services.name' | 'organisations.name', order?: 'ASC' | 'DESC', geojson?: boolean, format?: 'JSON' | 'XML', _options?: PromiseConfigurationOptions): Promise<Array<AlissService>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAlissServicesByIds(xMrdScopes, serviceIds, orderBy, order, geojson, format, observableOptions);
        return result.toPromise();
    }

    /**
     * Searches ALISS services using structured filters, ordering and keyset pagination.
     * Search ALISS services
     * @param xMrdScopes MRD service scope required for ALISS endpoints.
     * @param [filters] Structured filters used to search ALISS services. Supported datasets are services, organisations, categories, service_areas, locations, accessibility_features and community_groups. Each filter requires field, value and operator. Every filter except the final filter must also contain condition.
     * @param [orderBy] Field used to order matching services.
     * @param [order] Direction used to order matching services.
     * @param [limit] Maximum number of services to return. The API defaults to 20 and rejects values greater than 100.
     * @param [after] Keyset pagination value used to retrieve records after the supplied position. Only alphanumeric characters, commas, hyphens, underscores and spaces are accepted.
     * @param [before] Keyset pagination value used to retrieve records before the supplied position. Only alphanumeric characters, commas, hyphens, underscores and spaces are accepted.
     * @param [geojson] Controls whether GeoJSON is included with service-area data. The API accepts true or false case-insensitively.
     * @param [format] Response format.
     */
    public searchAlissServicesWithHttpInfo(xMrdScopes: 'aliss', filters?: SearchAlissServicesFiltersParameter, orderBy?: 'services.id' | 'services.name' | 'organisations.name', order?: 'ASC' | 'DESC', limit?: number, after?: string, before?: string, geojson?: boolean, format?: 'JSON' | 'XML', _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<AlissService>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.searchAlissServicesWithHttpInfo(xMrdScopes, filters, orderBy, order, limit, after, before, geojson, format, observableOptions);
        return result.toPromise();
    }

    /**
     * Searches ALISS services using structured filters, ordering and keyset pagination.
     * Search ALISS services
     * @param xMrdScopes MRD service scope required for ALISS endpoints.
     * @param [filters] Structured filters used to search ALISS services. Supported datasets are services, organisations, categories, service_areas, locations, accessibility_features and community_groups. Each filter requires field, value and operator. Every filter except the final filter must also contain condition.
     * @param [orderBy] Field used to order matching services.
     * @param [order] Direction used to order matching services.
     * @param [limit] Maximum number of services to return. The API defaults to 20 and rejects values greater than 100.
     * @param [after] Keyset pagination value used to retrieve records after the supplied position. Only alphanumeric characters, commas, hyphens, underscores and spaces are accepted.
     * @param [before] Keyset pagination value used to retrieve records before the supplied position. Only alphanumeric characters, commas, hyphens, underscores and spaces are accepted.
     * @param [geojson] Controls whether GeoJSON is included with service-area data. The API accepts true or false case-insensitively.
     * @param [format] Response format.
     */
    public searchAlissServices(xMrdScopes: 'aliss', filters?: SearchAlissServicesFiltersParameter, orderBy?: 'services.id' | 'services.name' | 'organisations.name', order?: 'ASC' | 'DESC', limit?: number, after?: string, before?: string, geojson?: boolean, format?: 'JSON' | 'XML', _options?: PromiseConfigurationOptions): Promise<Array<AlissService>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.searchAlissServices(xMrdScopes, filters, orderBy, order, limit, after, before, geojson, format, observableOptions);
        return result.toPromise();
    }


}



import { ObservableConditionsApi } from './ObservableAPI';

import { ConditionsApiRequestFactory, ConditionsApiResponseProcessor} from "../apis/ConditionsApi";
export class PromiseConditionsApi {
    private api: ObservableConditionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ConditionsApiRequestFactory,
        responseProcessor?: ConditionsApiResponseProcessor
    ) {
        this.api = new ObservableConditionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a Conditions page identified by one route segment. The response may contain HTML by default. Use no_html to return processed plain text and nhs_links to return eligible original NHS URLs.
     * Retrieve a first-level Conditions page
     * @param xMrdScopes MRD service scope required for Conditions endpoints.
     * @param param1 First Conditions route segment.
     * @param [noHtml] Removes HTML markup from returned content. When supplied, this parameter must be set to \&#39;true\&#39;.
     * @param [nhsLinks] Replaces eligible MRD URLs with their NHS website equivalents. When supplied, this parameter must be set to \&#39;true\&#39;.
     */
    public getConditionLevelOneWithHttpInfo(xMrdScopes: 'conditions', param1: string, noHtml?: 'true', nhsLinks?: 'true', _options?: PromiseConfigurationOptions): Promise<HttpInfo<ConditionResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getConditionLevelOneWithHttpInfo(xMrdScopes, param1, noHtml, nhsLinks, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a Conditions page identified by one route segment. The response may contain HTML by default. Use no_html to return processed plain text and nhs_links to return eligible original NHS URLs.
     * Retrieve a first-level Conditions page
     * @param xMrdScopes MRD service scope required for Conditions endpoints.
     * @param param1 First Conditions route segment.
     * @param [noHtml] Removes HTML markup from returned content. When supplied, this parameter must be set to \&#39;true\&#39;.
     * @param [nhsLinks] Replaces eligible MRD URLs with their NHS website equivalents. When supplied, this parameter must be set to \&#39;true\&#39;.
     */
    public getConditionLevelOne(xMrdScopes: 'conditions', param1: string, noHtml?: 'true', nhsLinks?: 'true', _options?: PromiseConfigurationOptions): Promise<ConditionResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getConditionLevelOne(xMrdScopes, param1, noHtml, nhsLinks, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a Conditions page identified by three route segments. Responses may contain recursively nested web-page elements and video objects.
     * Retrieve a third-level Conditions page
     * @param xMrdScopes MRD service scope required for Conditions endpoints.
     * @param param1 First Conditions route segment.
     * @param param2 Second Conditions route segment.
     * @param param3 Third Conditions route segment.
     * @param [noHtml] Removes HTML markup from returned content. When supplied, this parameter must be set to \&#39;true\&#39;.
     * @param [nhsLinks] Replaces eligible MRD URLs with their NHS website equivalents. When supplied, this parameter must be set to \&#39;true\&#39;.
     */
    public getConditionLevelThreeWithHttpInfo(xMrdScopes: 'conditions', param1: string, param2: string, param3: string, noHtml?: 'true', nhsLinks?: 'true', _options?: PromiseConfigurationOptions): Promise<HttpInfo<ConditionResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getConditionLevelThreeWithHttpInfo(xMrdScopes, param1, param2, param3, noHtml, nhsLinks, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a Conditions page identified by three route segments. Responses may contain recursively nested web-page elements and video objects.
     * Retrieve a third-level Conditions page
     * @param xMrdScopes MRD service scope required for Conditions endpoints.
     * @param param1 First Conditions route segment.
     * @param param2 Second Conditions route segment.
     * @param param3 Third Conditions route segment.
     * @param [noHtml] Removes HTML markup from returned content. When supplied, this parameter must be set to \&#39;true\&#39;.
     * @param [nhsLinks] Replaces eligible MRD URLs with their NHS website equivalents. When supplied, this parameter must be set to \&#39;true\&#39;.
     */
    public getConditionLevelThree(xMrdScopes: 'conditions', param1: string, param2: string, param3: string, noHtml?: 'true', nhsLinks?: 'true', _options?: PromiseConfigurationOptions): Promise<ConditionResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getConditionLevelThree(xMrdScopes, param1, param2, param3, noHtml, nhsLinks, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a Conditions page identified by two route segments. The no_html and nhs_links parameters can be used separately or together.
     * Retrieve a second-level Conditions page
     * @param xMrdScopes MRD service scope required for Conditions endpoints.
     * @param param1 First Conditions route segment.
     * @param param2 Second Conditions route segment.
     * @param [noHtml] Removes HTML markup from returned content. When supplied, this parameter must be set to \&#39;true\&#39;.
     * @param [nhsLinks] Replaces eligible MRD URLs with their NHS website equivalents. When supplied, this parameter must be set to \&#39;true\&#39;.
     */
    public getConditionLevelTwoWithHttpInfo(xMrdScopes: 'conditions', param1: string, param2: string, noHtml?: 'true', nhsLinks?: 'true', _options?: PromiseConfigurationOptions): Promise<HttpInfo<ConditionResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getConditionLevelTwoWithHttpInfo(xMrdScopes, param1, param2, noHtml, nhsLinks, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a Conditions page identified by two route segments. The no_html and nhs_links parameters can be used separately or together.
     * Retrieve a second-level Conditions page
     * @param xMrdScopes MRD service scope required for Conditions endpoints.
     * @param param1 First Conditions route segment.
     * @param param2 Second Conditions route segment.
     * @param [noHtml] Removes HTML markup from returned content. When supplied, this parameter must be set to \&#39;true\&#39;.
     * @param [nhsLinks] Replaces eligible MRD URLs with their NHS website equivalents. When supplied, this parameter must be set to \&#39;true\&#39;.
     */
    public getConditionLevelTwo(xMrdScopes: 'conditions', param1: string, param2: string, noHtml?: 'true', nhsLinks?: 'true', _options?: PromiseConfigurationOptions): Promise<ConditionResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getConditionLevelTwo(xMrdScopes, param1, param2, noHtml, nhsLinks, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns absolute URLs for the routes available in the NHS Conditions dataset.
     * Retrieve available Conditions routes
     * @param xMrdScopes MRD service scope required for Conditions endpoints.
     */
    public getConditionRoutesWithHttpInfo(xMrdScopes: 'conditions', _options?: PromiseConfigurationOptions): Promise<HttpInfo<ConditionsRouteListResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getConditionRoutesWithHttpInfo(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns absolute URLs for the routes available in the NHS Conditions dataset.
     * Retrieve available Conditions routes
     * @param xMrdScopes MRD service scope required for Conditions endpoints.
     */
    public getConditionRoutes(xMrdScopes: 'conditions', _options?: PromiseConfigurationOptions): Promise<ConditionsRouteListResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getConditionRoutes(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Searches the NHS Conditions dataset. By default the search is performed against page descriptions. When search_all is enabled, page text and expander content are also searched. The no_html option removes HTML from textual content and nhs_links changes eligible MRD URLs to original NHS URLs.
     * Search Conditions content
     * @param xMrdScopes MRD service scope required for Conditions endpoints.
     * @param filters Structured Conditions search filters supplied using indexed bracket notation, for example filters[0][operator]&#x3D;LIKE&amp;filters[0][value]&#x3D;cancer&amp;filters[0][condition]&#x3D;AND&amp;filters[1][operator]&#x3D;LIKE&amp;filters[1][value]&#x3D;treatment&amp;filters[1][condition]&#x3D;. Each filter must contain exactly value, operator and condition.
     * @param [noHtml] Removes HTML markup from returned content. When supplied, this parameter must be set to \&#39;true\&#39;.
     * @param [nhsLinks] Replaces eligible MRD URLs with their NHS website equivalents. When supplied, this parameter must be set to \&#39;true\&#39;.
     * @param [searchAll] Extends Conditions search to page-content text and expander content in addition to the default page description. When supplied, this parameter must be set to \&#39;true\&#39;. This parameter is only valid on the search endpoint.
     */
    public searchConditionsWithHttpInfo(xMrdScopes: 'conditions', filters: Array<ConditionSearchFilter>, noHtml?: 'true', nhsLinks?: 'true', searchAll?: 'true', _options?: PromiseConfigurationOptions): Promise<HttpInfo<ConditionsSearchResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.searchConditionsWithHttpInfo(xMrdScopes, filters, noHtml, nhsLinks, searchAll, observableOptions);
        return result.toPromise();
    }

    /**
     * Searches the NHS Conditions dataset. By default the search is performed against page descriptions. When search_all is enabled, page text and expander content are also searched. The no_html option removes HTML from textual content and nhs_links changes eligible MRD URLs to original NHS URLs.
     * Search Conditions content
     * @param xMrdScopes MRD service scope required for Conditions endpoints.
     * @param filters Structured Conditions search filters supplied using indexed bracket notation, for example filters[0][operator]&#x3D;LIKE&amp;filters[0][value]&#x3D;cancer&amp;filters[0][condition]&#x3D;AND&amp;filters[1][operator]&#x3D;LIKE&amp;filters[1][value]&#x3D;treatment&amp;filters[1][condition]&#x3D;. Each filter must contain exactly value, operator and condition.
     * @param [noHtml] Removes HTML markup from returned content. When supplied, this parameter must be set to \&#39;true\&#39;.
     * @param [nhsLinks] Replaces eligible MRD URLs with their NHS website equivalents. When supplied, this parameter must be set to \&#39;true\&#39;.
     * @param [searchAll] Extends Conditions search to page-content text and expander content in addition to the default page description. When supplied, this parameter must be set to \&#39;true\&#39;. This parameter is only valid on the search endpoint.
     */
    public searchConditions(xMrdScopes: 'conditions', filters: Array<ConditionSearchFilter>, noHtml?: 'true', nhsLinks?: 'true', searchAll?: 'true', _options?: PromiseConfigurationOptions): Promise<ConditionsSearchResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.searchConditions(xMrdScopes, filters, noHtml, nhsLinks, searchAll, observableOptions);
        return result.toPromise();
    }


}



import { ObservableCountriesApi } from './ObservableAPI';

import { CountriesApiRequestFactory, CountriesApiResponseProcessor} from "../apis/CountriesApi";
export class PromiseCountriesApi {
    private api: ObservableCountriesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CountriesApiRequestFactory,
        responseProcessor?: CountriesApiResponseProcessor
    ) {
        this.api = new ObservableCountriesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns all available countries. Without filters, the model returns the complete country list inside an additional outer array. When filters are supplied, the response is the filtered country list directly.
     * Retrieve all countries
     * @param xMrdScopes MRD service scope required for Countries endpoints.
     * @param [filters] Country fields to include in the response. The API accepts comma-separated values such as filters&#x3D;region,subregion,idd and PHP-style array values such as filters[]&#x3D;capital&amp;filters[]&#x3D;maps. Duplicate filters are removed.
     */
    public getAllCountriesWithHttpInfo(xMrdScopes: 'countries', filters?: Set<'cca2' | 'cca3' | 'ccn3' | 'flag' | 'status' | 'independent' | 'unMember' | 'region' | 'subregion' | 'landlocked' | 'area' | 'population' | 'fifa' | 'startOfWeek' | 'name' | 'maps' | 'flags' | 'coatOfArms' | 'capitalInfo' | 'postalCode' | 'capital' | 'altSpellings' | 'timezones' | 'continents' | 'languages' | 'currencies' | 'translations' | 'demonyms' | 'gini' | 'car' | 'idd'>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetAllCountries200Response>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAllCountriesWithHttpInfo(xMrdScopes, filters, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns all available countries. Without filters, the model returns the complete country list inside an additional outer array. When filters are supplied, the response is the filtered country list directly.
     * Retrieve all countries
     * @param xMrdScopes MRD service scope required for Countries endpoints.
     * @param [filters] Country fields to include in the response. The API accepts comma-separated values such as filters&#x3D;region,subregion,idd and PHP-style array values such as filters[]&#x3D;capital&amp;filters[]&#x3D;maps. Duplicate filters are removed.
     */
    public getAllCountries(xMrdScopes: 'countries', filters?: Set<'cca2' | 'cca3' | 'ccn3' | 'flag' | 'status' | 'independent' | 'unMember' | 'region' | 'subregion' | 'landlocked' | 'area' | 'population' | 'fifa' | 'startOfWeek' | 'name' | 'maps' | 'flags' | 'coatOfArms' | 'capitalInfo' | 'postalCode' | 'capital' | 'altSpellings' | 'timezones' | 'continents' | 'languages' | 'currencies' | 'translations' | 'demonyms' | 'gini' | 'car' | 'idd'>, _options?: PromiseConfigurationOptions): Promise<GetAllCountries200Response> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAllCountries(xMrdScopes, filters, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the country matching the supplied lookup value. The value is converted to uppercase before lookup. Without filters, a matching country is returned inside an array. With filters, the filtered country object is returned directly. An unknown value returns an empty array.
     * Retrieve a country by CCA2 code
     * @param xMrdScopes MRD service scope required for Countries endpoints.
     * @param cca2 Country CCA2 lookup value. The supplied value is converted to uppercase before the database lookup. For example, ad is looked up as AD.
     * @param [filters] Country fields to include in the response. The API accepts comma-separated values such as filters&#x3D;region,subregion,idd and PHP-style array values such as filters[]&#x3D;capital&amp;filters[]&#x3D;maps. Duplicate filters are removed.
     */
    public getCountryByCca2WithHttpInfo(xMrdScopes: 'countries', cca2: string, filters?: Set<'cca2' | 'cca3' | 'ccn3' | 'flag' | 'status' | 'independent' | 'unMember' | 'region' | 'subregion' | 'landlocked' | 'area' | 'population' | 'fifa' | 'startOfWeek' | 'name' | 'maps' | 'flags' | 'coatOfArms' | 'capitalInfo' | 'postalCode' | 'capital' | 'altSpellings' | 'timezones' | 'continents' | 'languages' | 'currencies' | 'translations' | 'demonyms' | 'gini' | 'car' | 'idd'>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetCountryByCca2200Response>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCountryByCca2WithHttpInfo(xMrdScopes, cca2, filters, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the country matching the supplied lookup value. The value is converted to uppercase before lookup. Without filters, a matching country is returned inside an array. With filters, the filtered country object is returned directly. An unknown value returns an empty array.
     * Retrieve a country by CCA2 code
     * @param xMrdScopes MRD service scope required for Countries endpoints.
     * @param cca2 Country CCA2 lookup value. The supplied value is converted to uppercase before the database lookup. For example, ad is looked up as AD.
     * @param [filters] Country fields to include in the response. The API accepts comma-separated values such as filters&#x3D;region,subregion,idd and PHP-style array values such as filters[]&#x3D;capital&amp;filters[]&#x3D;maps. Duplicate filters are removed.
     */
    public getCountryByCca2(xMrdScopes: 'countries', cca2: string, filters?: Set<'cca2' | 'cca3' | 'ccn3' | 'flag' | 'status' | 'independent' | 'unMember' | 'region' | 'subregion' | 'landlocked' | 'area' | 'population' | 'fifa' | 'startOfWeek' | 'name' | 'maps' | 'flags' | 'coatOfArms' | 'capitalInfo' | 'postalCode' | 'capital' | 'altSpellings' | 'timezones' | 'continents' | 'languages' | 'currencies' | 'translations' | 'demonyms' | 'gini' | 'car' | 'idd'>, _options?: PromiseConfigurationOptions): Promise<GetCountryByCca2200Response> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCountryByCca2(xMrdScopes, cca2, filters, observableOptions);
        return result.toPromise();
    }


}



import { ObservableLivewellApi } from './ObservableAPI';

import { LivewellApiRequestFactory, LivewellApiResponseProcessor} from "../apis/LivewellApi";
export class PromiseLivewellApi {
    private api: ObservableLivewellApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LivewellApiRequestFactory,
        responseProcessor?: LivewellApiResponseProcessor
    ) {
        this.api = new ObservableLivewellApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a first-level Live Well route. no_html removes HTML markup and nhs_links rewrites eligible MRD links to NHS website links. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a first-level Live Well page
     * @param xMrdScopes MRD service scope required for Live Well endpoints.
     * @param param1 First Live Well route segment, normally identifying a top-level topic or category.
     * @param [noHtml] Removes HTML markup from returned Live Well content. When supplied, this parameter must be set to \&#39;true\&#39;.
     * @param [nhsLinks] Replaces eligible MRD API links with their NHS website equivalents. When supplied, this parameter must be set to \&#39;true\&#39;.
     */
    public getLivewellLevelOneWithHttpInfo(xMrdScopes: 'live-well', param1: string, noHtml?: 'true', nhsLinks?: 'true', _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetLivewellLevelOne200Response>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getLivewellLevelOneWithHttpInfo(xMrdScopes, param1, noHtml, nhsLinks, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a first-level Live Well route. no_html removes HTML markup and nhs_links rewrites eligible MRD links to NHS website links. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a first-level Live Well page
     * @param xMrdScopes MRD service scope required for Live Well endpoints.
     * @param param1 First Live Well route segment, normally identifying a top-level topic or category.
     * @param [noHtml] Removes HTML markup from returned Live Well content. When supplied, this parameter must be set to \&#39;true\&#39;.
     * @param [nhsLinks] Replaces eligible MRD API links with their NHS website equivalents. When supplied, this parameter must be set to \&#39;true\&#39;.
     */
    public getLivewellLevelOne(xMrdScopes: 'live-well', param1: string, noHtml?: 'true', nhsLinks?: 'true', _options?: PromiseConfigurationOptions): Promise<GetLivewellLevelOne200Response> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getLivewellLevelOne(xMrdScopes, param1, noHtml, nhsLinks, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns deeply nested Live Well content. The response uses the same flexible NHS page structure as first-level and second-level routes. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a third-level Live Well page
     * @param xMrdScopes MRD service scope required for Live Well endpoints.
     * @param param1 First Live Well route segment, normally identifying a top-level topic or category.
     * @param param2 Second Live Well route segment, normally identifying a category or page within a top-level topic.
     * @param param3 Third Live Well route segment, normally identifying a deeply nested page within a Live Well category.
     * @param [noHtml] Removes HTML markup from returned Live Well content. When supplied, this parameter must be set to \&#39;true\&#39;.
     * @param [nhsLinks] Replaces eligible MRD API links with their NHS website equivalents. When supplied, this parameter must be set to \&#39;true\&#39;.
     */
    public getLivewellLevelThreeWithHttpInfo(xMrdScopes: 'live-well', param1: string, param2: string, param3: string, noHtml?: 'true', nhsLinks?: 'true', _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetLivewellLevelOne200Response>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getLivewellLevelThreeWithHttpInfo(xMrdScopes, param1, param2, param3, noHtml, nhsLinks, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns deeply nested Live Well content. The response uses the same flexible NHS page structure as first-level and second-level routes. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a third-level Live Well page
     * @param xMrdScopes MRD service scope required for Live Well endpoints.
     * @param param1 First Live Well route segment, normally identifying a top-level topic or category.
     * @param param2 Second Live Well route segment, normally identifying a category or page within a top-level topic.
     * @param param3 Third Live Well route segment, normally identifying a deeply nested page within a Live Well category.
     * @param [noHtml] Removes HTML markup from returned Live Well content. When supplied, this parameter must be set to \&#39;true\&#39;.
     * @param [nhsLinks] Replaces eligible MRD API links with their NHS website equivalents. When supplied, this parameter must be set to \&#39;true\&#39;.
     */
    public getLivewellLevelThree(xMrdScopes: 'live-well', param1: string, param2: string, param3: string, noHtml?: 'true', nhsLinks?: 'true', _options?: PromiseConfigurationOptions): Promise<GetLivewellLevelOne200Response> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getLivewellLevelThree(xMrdScopes, param1, param2, param3, noHtml, nhsLinks, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a second-level page or category within a Live Well topic. HTML and link behaviour can be controlled using no_html and nhs_links. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a second-level Live Well page
     * @param xMrdScopes MRD service scope required for Live Well endpoints.
     * @param param1 First Live Well route segment, normally identifying a top-level topic or category.
     * @param param2 Second Live Well route segment, normally identifying a category or page within a top-level topic.
     * @param [noHtml] Removes HTML markup from returned Live Well content. When supplied, this parameter must be set to \&#39;true\&#39;.
     * @param [nhsLinks] Replaces eligible MRD API links with their NHS website equivalents. When supplied, this parameter must be set to \&#39;true\&#39;.
     */
    public getLivewellLevelTwoWithHttpInfo(xMrdScopes: 'live-well', param1: string, param2: string, noHtml?: 'true', nhsLinks?: 'true', _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetLivewellLevelOne200Response>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getLivewellLevelTwoWithHttpInfo(xMrdScopes, param1, param2, noHtml, nhsLinks, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a second-level page or category within a Live Well topic. HTML and link behaviour can be controlled using no_html and nhs_links. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a second-level Live Well page
     * @param xMrdScopes MRD service scope required for Live Well endpoints.
     * @param param1 First Live Well route segment, normally identifying a top-level topic or category.
     * @param param2 Second Live Well route segment, normally identifying a category or page within a top-level topic.
     * @param [noHtml] Removes HTML markup from returned Live Well content. When supplied, this parameter must be set to \&#39;true\&#39;.
     * @param [nhsLinks] Replaces eligible MRD API links with their NHS website equivalents. When supplied, this parameter must be set to \&#39;true\&#39;.
     */
    public getLivewellLevelTwo(xMrdScopes: 'live-well', param1: string, param2: string, noHtml?: 'true', nhsLinks?: 'true', _options?: PromiseConfigurationOptions): Promise<GetLivewellLevelOne200Response> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getLivewellLevelTwo(xMrdScopes, param1, param2, noHtml, nhsLinks, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the available routes within the NHS Live Well dataset.
     * Retrieve available Live Well routes
     * @param xMrdScopes MRD service scope required for Live Well endpoints.
     */
    public getLivewellRoutesWithHttpInfo(xMrdScopes: 'live-well', _options?: PromiseConfigurationOptions): Promise<HttpInfo<LivewellRoutesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getLivewellRoutesWithHttpInfo(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the available routes within the NHS Live Well dataset.
     * Retrieve available Live Well routes
     * @param xMrdScopes MRD service scope required for Live Well endpoints.
     */
    public getLivewellRoutes(xMrdScopes: 'live-well', _options?: PromiseConfigurationOptions): Promise<LivewellRoutesResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getLivewellRoutes(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Searches the NHS Live Well dataset using structured filters. By default filters search page descriptions. When search_all is enabled, page-content text is also searched.
     * Search Live Well content
     * @param xMrdScopes MRD service scope required for Live Well endpoints.
     * @param filters Structured Live Well search filters supplied using indexed bracket notation, for example filters[0][operator]&#x3D;LIKE&amp;filters[0][value]&#x3D;healthy eating&amp;filters[0][condition]&#x3D;AND&amp;filters[1][operator]&#x3D;LIKE&amp;filters[1][value]&#x3D;diet&amp;filters[1][condition]&#x3D;. Each filter must contain exactly value, operator and condition.
     * @param [noHtml] Removes HTML markup from returned Live Well content. When supplied, this parameter must be set to \&#39;true\&#39;.
     * @param [nhsLinks] Replaces eligible MRD API links with their NHS website equivalents. When supplied, this parameter must be set to \&#39;true\&#39;.
     * @param [searchAll] Extends Live Well search to page-content text in addition to the default page description. When supplied, this parameter must be set to \&#39;true\&#39;. This parameter is only valid on the search endpoint.
     */
    public searchLivewellWithHttpInfo(xMrdScopes: 'live-well', filters: Array<LivewellSearchFilter>, noHtml?: 'true', nhsLinks?: 'true', searchAll?: 'true', _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<LivewellData>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.searchLivewellWithHttpInfo(xMrdScopes, filters, noHtml, nhsLinks, searchAll, observableOptions);
        return result.toPromise();
    }

    /**
     * Searches the NHS Live Well dataset using structured filters. By default filters search page descriptions. When search_all is enabled, page-content text is also searched.
     * Search Live Well content
     * @param xMrdScopes MRD service scope required for Live Well endpoints.
     * @param filters Structured Live Well search filters supplied using indexed bracket notation, for example filters[0][operator]&#x3D;LIKE&amp;filters[0][value]&#x3D;healthy eating&amp;filters[0][condition]&#x3D;AND&amp;filters[1][operator]&#x3D;LIKE&amp;filters[1][value]&#x3D;diet&amp;filters[1][condition]&#x3D;. Each filter must contain exactly value, operator and condition.
     * @param [noHtml] Removes HTML markup from returned Live Well content. When supplied, this parameter must be set to \&#39;true\&#39;.
     * @param [nhsLinks] Replaces eligible MRD API links with their NHS website equivalents. When supplied, this parameter must be set to \&#39;true\&#39;.
     * @param [searchAll] Extends Live Well search to page-content text in addition to the default page description. When supplied, this parameter must be set to \&#39;true\&#39;. This parameter is only valid on the search endpoint.
     */
    public searchLivewell(xMrdScopes: 'live-well', filters: Array<LivewellSearchFilter>, noHtml?: 'true', nhsLinks?: 'true', searchAll?: 'true', _options?: PromiseConfigurationOptions): Promise<Array<LivewellData>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.searchLivewell(xMrdScopes, filters, noHtml, nhsLinks, searchAll, observableOptions);
        return result.toPromise();
    }


}



import { ObservableMeasurementsApi } from './ObservableAPI';

import { MeasurementsApiRequestFactory, MeasurementsApiResponseProcessor} from "../apis/MeasurementsApi";
export class PromiseMeasurementsApi {
    private api: ObservableMeasurementsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MeasurementsApiRequestFactory,
        responseProcessor?: MeasurementsApiResponseProcessor
    ) {
        this.api = new ObservableMeasurementsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns the activity type matching the supplied activity_type_id.
     * Retrieve an activity type by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getActivityTypeWithHttpInfo(xMrdScopes: 'measurements', id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MeasurementActivityTypeResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getActivityTypeWithHttpInfo(xMrdScopes, id, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the activity type matching the supplied activity_type_id.
     * Retrieve an activity type by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getActivityType(xMrdScopes: 'measurements', id: number, _options?: PromiseConfigurationOptions): Promise<MeasurementActivityTypeResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getActivityType(xMrdScopes, id, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns activity types including the database record ID, activity type ID and description.
     * Retrieve all activity types
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getActivityTypesWithHttpInfo(xMrdScopes: 'measurements', _options?: PromiseConfigurationOptions): Promise<HttpInfo<MeasurementActivityTypesResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getActivityTypesWithHttpInfo(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns activity types including the database record ID, activity type ID and description.
     * Retrieve all activity types
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getActivityTypes(xMrdScopes: 'measurements', _options?: PromiseConfigurationOptions): Promise<MeasurementActivityTypesResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getActivityTypes(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the blood pressure measurement type matching the supplied blood_pressure_measurement_id.
     * Retrieve a blood pressure measurement type by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getBloodPressureMeasurementWithHttpInfo(xMrdScopes: 'measurements', id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MeasurementBloodPressureMeasurementResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBloodPressureMeasurementWithHttpInfo(xMrdScopes, id, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the blood pressure measurement type matching the supplied blood_pressure_measurement_id.
     * Retrieve a blood pressure measurement type by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getBloodPressureMeasurement(xMrdScopes: 'measurements', id: number, _options?: PromiseConfigurationOptions): Promise<MeasurementBloodPressureMeasurementResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBloodPressureMeasurement(xMrdScopes, id, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns blood pressure measurement types including the database record ID, blood pressure measurement ID and description.
     * Retrieve all blood pressure measurement types
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getBloodPressureMeasurementsWithHttpInfo(xMrdScopes: 'measurements', _options?: PromiseConfigurationOptions): Promise<HttpInfo<MeasurementBloodPressureMeasurementsResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBloodPressureMeasurementsWithHttpInfo(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns blood pressure measurement types including the database record ID, blood pressure measurement ID and description.
     * Retrieve all blood pressure measurement types
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getBloodPressureMeasurements(xMrdScopes: 'measurements', _options?: PromiseConfigurationOptions): Promise<MeasurementBloodPressureMeasurementsResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBloodPressureMeasurements(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the blood specimen source matching the supplied blood_specimen_source_id.
     * Retrieve a blood specimen source by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getBloodSpecimenSourceWithHttpInfo(xMrdScopes: 'measurements', id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MeasurementBloodSpecimenSourceResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBloodSpecimenSourceWithHttpInfo(xMrdScopes, id, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the blood specimen source matching the supplied blood_specimen_source_id.
     * Retrieve a blood specimen source by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getBloodSpecimenSource(xMrdScopes: 'measurements', id: number, _options?: PromiseConfigurationOptions): Promise<MeasurementBloodSpecimenSourceResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBloodSpecimenSource(xMrdScopes, id, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns blood specimen sources including the database record ID, blood specimen source ID and description.
     * Retrieve all blood specimen sources
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getBloodSpecimenSourcesWithHttpInfo(xMrdScopes: 'measurements', _options?: PromiseConfigurationOptions): Promise<HttpInfo<MeasurementBloodSpecimenSourcesResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBloodSpecimenSourcesWithHttpInfo(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns blood specimen sources including the database record ID, blood specimen source ID and description.
     * Retrieve all blood specimen sources
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getBloodSpecimenSources(xMrdScopes: 'measurements', _options?: PromiseConfigurationOptions): Promise<MeasurementBloodSpecimenSourcesResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBloodSpecimenSources(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the body position matching the supplied body_position_id.
     * Retrieve a body position by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getBodyPositionWithHttpInfo(xMrdScopes: 'measurements', id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MeasurementBodyPositionResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBodyPositionWithHttpInfo(xMrdScopes, id, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the body position matching the supplied body_position_id.
     * Retrieve a body position by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getBodyPosition(xMrdScopes: 'measurements', id: number, _options?: PromiseConfigurationOptions): Promise<MeasurementBodyPositionResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBodyPosition(xMrdScopes, id, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns body positions including the database record ID, body position ID and description.
     * Retrieve all body positions
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getBodyPositionsWithHttpInfo(xMrdScopes: 'measurements', _options?: PromiseConfigurationOptions): Promise<HttpInfo<MeasurementBodyPositionsResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBodyPositionsWithHttpInfo(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns body positions including the database record ID, body position ID and description.
     * Retrieve all body positions
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getBodyPositions(xMrdScopes: 'measurements', _options?: PromiseConfigurationOptions): Promise<MeasurementBodyPositionsResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBodyPositions(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the body temperature location matching the supplied body_temperature_location_id.
     * Retrieve a body temperature location by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getBodyTemperatureLocationWithHttpInfo(xMrdScopes: 'measurements', id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MeasurementBodyTemperatureLocationResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBodyTemperatureLocationWithHttpInfo(xMrdScopes, id, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the body temperature location matching the supplied body_temperature_location_id.
     * Retrieve a body temperature location by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getBodyTemperatureLocation(xMrdScopes: 'measurements', id: number, _options?: PromiseConfigurationOptions): Promise<MeasurementBodyTemperatureLocationResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBodyTemperatureLocation(xMrdScopes, id, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns body temperature locations including the database record ID, body temperature location ID and description.
     * Retrieve all body temperature locations
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getBodyTemperatureLocationsWithHttpInfo(xMrdScopes: 'measurements', _options?: PromiseConfigurationOptions): Promise<HttpInfo<MeasurementBodyTemperatureLocationsResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBodyTemperatureLocationsWithHttpInfo(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns body temperature locations including the database record ID, body temperature location ID and description.
     * Retrieve all body temperature locations
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getBodyTemperatureLocations(xMrdScopes: 'measurements', _options?: PromiseConfigurationOptions): Promise<MeasurementBodyTemperatureLocationsResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBodyTemperatureLocations(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the cervical dilation matching the supplied cervical_dilation_id.
     * Retrieve a cervical dilation by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getCervicalDilationWithHttpInfo(xMrdScopes: 'measurements', id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MeasurementCervicalDilationResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCervicalDilationWithHttpInfo(xMrdScopes, id, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the cervical dilation matching the supplied cervical_dilation_id.
     * Retrieve a cervical dilation by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getCervicalDilation(xMrdScopes: 'measurements', id: number, _options?: PromiseConfigurationOptions): Promise<MeasurementCervicalDilationResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCervicalDilation(xMrdScopes, id, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns cervical dilations including the database record ID, cervical dilation ID and description.
     * Retrieve all cervical dilations
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getCervicalDilationsWithHttpInfo(xMrdScopes: 'measurements', _options?: PromiseConfigurationOptions): Promise<HttpInfo<MeasurementCervicalDilationsResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCervicalDilationsWithHttpInfo(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns cervical dilations including the database record ID, cervical dilation ID and description.
     * Retrieve all cervical dilations
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getCervicalDilations(xMrdScopes: 'measurements', _options?: PromiseConfigurationOptions): Promise<MeasurementCervicalDilationsResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCervicalDilations(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the cervical firmness value matching the supplied cervical_firmness_id.
     * Retrieve a cervical firmness value by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getCervicalFirmnessWithHttpInfo(xMrdScopes: 'measurements', id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MeasurementCervicalFirmnessResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCervicalFirmnessWithHttpInfo(xMrdScopes, id, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the cervical firmness value matching the supplied cervical_firmness_id.
     * Retrieve a cervical firmness value by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getCervicalFirmness(xMrdScopes: 'measurements', id: number, _options?: PromiseConfigurationOptions): Promise<MeasurementCervicalFirmnessResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCervicalFirmness(xMrdScopes, id, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns cervical firmness values including the database record ID, cervical firmness ID and description.
     * Retrieve all cervical firmness values
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getCervicalFirmnessValuesWithHttpInfo(xMrdScopes: 'measurements', _options?: PromiseConfigurationOptions): Promise<HttpInfo<MeasurementCervicalFirmnessValuesResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCervicalFirmnessValuesWithHttpInfo(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns cervical firmness values including the database record ID, cervical firmness ID and description.
     * Retrieve all cervical firmness values
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getCervicalFirmnessValues(xMrdScopes: 'measurements', _options?: PromiseConfigurationOptions): Promise<MeasurementCervicalFirmnessValuesResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCervicalFirmnessValues(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the cervical mucus amount matching the supplied cervical_mucus_amount_id.
     * Retrieve a cervical mucus amount by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getCervicalMucusAmountWithHttpInfo(xMrdScopes: 'measurements', id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MeasurementCervicalMucusAmountResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCervicalMucusAmountWithHttpInfo(xMrdScopes, id, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the cervical mucus amount matching the supplied cervical_mucus_amount_id.
     * Retrieve a cervical mucus amount by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getCervicalMucusAmount(xMrdScopes: 'measurements', id: number, _options?: PromiseConfigurationOptions): Promise<MeasurementCervicalMucusAmountResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCervicalMucusAmount(xMrdScopes, id, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns cervical mucus amounts including the database record ID, cervical mucus amount ID and description.
     * Retrieve all cervical mucus amounts
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getCervicalMucusAmountsWithHttpInfo(xMrdScopes: 'measurements', _options?: PromiseConfigurationOptions): Promise<HttpInfo<MeasurementCervicalMucusAmountsResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCervicalMucusAmountsWithHttpInfo(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns cervical mucus amounts including the database record ID, cervical mucus amount ID and description.
     * Retrieve all cervical mucus amounts
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getCervicalMucusAmounts(xMrdScopes: 'measurements', _options?: PromiseConfigurationOptions): Promise<MeasurementCervicalMucusAmountsResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCervicalMucusAmounts(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the cervical mucus texture matching the supplied cervical_mucus_texture_id.
     * Retrieve a cervical mucus texture by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getCervicalMucusTextureWithHttpInfo(xMrdScopes: 'measurements', id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MeasurementCervicalMucusTextureResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCervicalMucusTextureWithHttpInfo(xMrdScopes, id, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the cervical mucus texture matching the supplied cervical_mucus_texture_id.
     * Retrieve a cervical mucus texture by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getCervicalMucusTexture(xMrdScopes: 'measurements', id: number, _options?: PromiseConfigurationOptions): Promise<MeasurementCervicalMucusTextureResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCervicalMucusTexture(xMrdScopes, id, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns cervical mucus textures including the database record ID, cervical mucus texture ID and description.
     * Retrieve all cervical mucus textures
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getCervicalMucusTexturesWithHttpInfo(xMrdScopes: 'measurements', _options?: PromiseConfigurationOptions): Promise<HttpInfo<MeasurementCervicalMucusTexturesResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCervicalMucusTexturesWithHttpInfo(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns cervical mucus textures including the database record ID, cervical mucus texture ID and description.
     * Retrieve all cervical mucus textures
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getCervicalMucusTextures(xMrdScopes: 'measurements', _options?: PromiseConfigurationOptions): Promise<MeasurementCervicalMucusTexturesResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCervicalMucusTextures(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the cervical position matching the supplied cervical_position_id.
     * Retrieve a cervical position by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getCervicalPositionWithHttpInfo(xMrdScopes: 'measurements', id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MeasurementCervicalPositionResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCervicalPositionWithHttpInfo(xMrdScopes, id, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the cervical position matching the supplied cervical_position_id.
     * Retrieve a cervical position by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getCervicalPosition(xMrdScopes: 'measurements', id: number, _options?: PromiseConfigurationOptions): Promise<MeasurementCervicalPositionResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCervicalPosition(xMrdScopes, id, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns cervical positions including the database record ID, cervical position ID and description.
     * Retrieve all cervical positions
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getCervicalPositionsWithHttpInfo(xMrdScopes: 'measurements', _options?: PromiseConfigurationOptions): Promise<HttpInfo<MeasurementCervicalPositionsResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCervicalPositionsWithHttpInfo(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns cervical positions including the database record ID, cervical position ID and description.
     * Retrieve all cervical positions
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getCervicalPositions(xMrdScopes: 'measurements', _options?: PromiseConfigurationOptions): Promise<MeasurementCervicalPositionsResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCervicalPositions(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the exercise type matching the supplied exercise_type_name.
     * Retrieve an exercise type by name
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param exerciseTypeName Exercise type name used to retrieve a specific exercise-type record.
     */
    public getExerciseTypeByNameWithHttpInfo(xMrdScopes: 'measurements', exerciseTypeName: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MeasurementExerciseTypeResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getExerciseTypeByNameWithHttpInfo(xMrdScopes, exerciseTypeName, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the exercise type matching the supplied exercise_type_name.
     * Retrieve an exercise type by name
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param exerciseTypeName Exercise type name used to retrieve a specific exercise-type record.
     */
    public getExerciseTypeByName(xMrdScopes: 'measurements', exerciseTypeName: string, _options?: PromiseConfigurationOptions): Promise<MeasurementExerciseTypeResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getExerciseTypeByName(xMrdScopes, exerciseTypeName, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns exercise types including the database record ID, exercise type name and description.
     * Retrieve all exercise types
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getExerciseTypesWithHttpInfo(xMrdScopes: 'measurements', _options?: PromiseConfigurationOptions): Promise<HttpInfo<MeasurementExerciseTypesResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getExerciseTypesWithHttpInfo(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns exercise types including the database record ID, exercise type name and description.
     * Retrieve all exercise types
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getExerciseTypes(xMrdScopes: 'measurements', _options?: PromiseConfigurationOptions): Promise<MeasurementExerciseTypesResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getExerciseTypes(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the meal type matching the supplied meal_type_id.
     * Retrieve a meal type by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getMealTypeWithHttpInfo(xMrdScopes: 'measurements', id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MeasurementMealTypeResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMealTypeWithHttpInfo(xMrdScopes, id, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the meal type matching the supplied meal_type_id.
     * Retrieve a meal type by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getMealType(xMrdScopes: 'measurements', id: number, _options?: PromiseConfigurationOptions): Promise<MeasurementMealTypeResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMealType(xMrdScopes, id, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns meal types including the database record ID, meal type ID and description.
     * Retrieve all meal types
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getMealTypesWithHttpInfo(xMrdScopes: 'measurements', _options?: PromiseConfigurationOptions): Promise<HttpInfo<MeasurementMealTypesResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMealTypesWithHttpInfo(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns meal types including the database record ID, meal type ID and description.
     * Retrieve all meal types
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getMealTypes(xMrdScopes: 'measurements', _options?: PromiseConfigurationOptions): Promise<MeasurementMealTypesResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMealTypes(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the measurement group matching the supplied database record ID.
     * Retrieve a measurement group by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getMeasurementGroupWithHttpInfo(xMrdScopes: 'measurements', id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MeasurementGroupResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMeasurementGroupWithHttpInfo(xMrdScopes, id, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the measurement group matching the supplied database record ID.
     * Retrieve a measurement group by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getMeasurementGroup(xMrdScopes: 'measurements', id: number, _options?: PromiseConfigurationOptions): Promise<MeasurementGroupResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMeasurementGroup(xMrdScopes, id, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the available measurement groups and their definitions.
     * Retrieve all measurement groups
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getMeasurementGroupsWithHttpInfo(xMrdScopes: 'measurements', _options?: PromiseConfigurationOptions): Promise<HttpInfo<MeasurementGroupsResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMeasurementGroupsWithHttpInfo(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the available measurement groups and their definitions.
     * Retrieve all measurement groups
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getMeasurementGroups(xMrdScopes: 'measurements', _options?: PromiseConfigurationOptions): Promise<MeasurementGroupsResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMeasurementGroups(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the measurement definition matching the supplied measurement ID.
     * Retrieve a measurement type by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getMeasurementTypeWithHttpInfo(xMrdScopes: 'measurements', id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MeasurementTypeResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMeasurementTypeWithHttpInfo(xMrdScopes, id, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the measurement definition matching the supplied measurement ID.
     * Retrieve a measurement type by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getMeasurementType(xMrdScopes: 'measurements', id: number, _options?: PromiseConfigurationOptions): Promise<MeasurementTypeResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMeasurementType(xMrdScopes, id, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns measurement definitions including the measurement name, group and unit.
     * Retrieve all measurement types
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getMeasurementTypesWithHttpInfo(xMrdScopes: 'measurements', _options?: PromiseConfigurationOptions): Promise<HttpInfo<MeasurementTypesResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMeasurementTypesWithHttpInfo(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns measurement definitions including the measurement name, group and unit.
     * Retrieve all measurement types
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getMeasurementTypes(xMrdScopes: 'measurements', _options?: PromiseConfigurationOptions): Promise<MeasurementTypesResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMeasurementTypes(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the unit of measure matching the supplied database record ID.
     * Retrieve a unit of measure by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getMeasurementUnitWithHttpInfo(xMrdScopes: 'measurements', id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MeasurementUnitResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMeasurementUnitWithHttpInfo(xMrdScopes, id, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the unit of measure matching the supplied database record ID.
     * Retrieve a unit of measure by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getMeasurementUnit(xMrdScopes: 'measurements', id: number, _options?: PromiseConfigurationOptions): Promise<MeasurementUnitResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMeasurementUnit(xMrdScopes, id, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns available measurement units and their definitions.
     * Retrieve all units of measure
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getMeasurementUnitsWithHttpInfo(xMrdScopes: 'measurements', _options?: PromiseConfigurationOptions): Promise<HttpInfo<MeasurementUnitsResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMeasurementUnitsWithHttpInfo(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns available measurement units and their definitions.
     * Retrieve all units of measure
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getMeasurementUnits(xMrdScopes: 'measurements', _options?: PromiseConfigurationOptions): Promise<MeasurementUnitsResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMeasurementUnits(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the resistance type matching the supplied resistance_type_id.
     * Retrieve a resistance type by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getResistanceTypeWithHttpInfo(xMrdScopes: 'measurements', id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MeasurementResistanceTypeResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getResistanceTypeWithHttpInfo(xMrdScopes, id, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the resistance type matching the supplied resistance_type_id.
     * Retrieve a resistance type by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getResistanceType(xMrdScopes: 'measurements', id: number, _options?: PromiseConfigurationOptions): Promise<MeasurementResistanceTypeResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getResistanceType(xMrdScopes, id, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns resistance types including the database record ID, resistance type ID and description.
     * Retrieve all resistance types
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getResistanceTypesWithHttpInfo(xMrdScopes: 'measurements', _options?: PromiseConfigurationOptions): Promise<HttpInfo<MeasurementResistanceTypesResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getResistanceTypesWithHttpInfo(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns resistance types including the database record ID, resistance type ID and description.
     * Retrieve all resistance types
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getResistanceTypes(xMrdScopes: 'measurements', _options?: PromiseConfigurationOptions): Promise<MeasurementResistanceTypesResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getResistanceTypes(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the sleep segment type matching the supplied sleep_segment_type_id.
     * Retrieve a sleep segment type by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getSleepSegmentTypeWithHttpInfo(xMrdScopes: 'measurements', id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MeasurementSleepSegmentTypeResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSleepSegmentTypeWithHttpInfo(xMrdScopes, id, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the sleep segment type matching the supplied sleep_segment_type_id.
     * Retrieve a sleep segment type by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getSleepSegmentType(xMrdScopes: 'measurements', id: number, _options?: PromiseConfigurationOptions): Promise<MeasurementSleepSegmentTypeResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSleepSegmentType(xMrdScopes, id, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns sleep segment types including the database record ID, sleep segment type ID and description.
     * Retrieve all sleep segment types
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getSleepSegmentTypesWithHttpInfo(xMrdScopes: 'measurements', _options?: PromiseConfigurationOptions): Promise<HttpInfo<MeasurementSleepSegmentTypesResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSleepSegmentTypesWithHttpInfo(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns sleep segment types including the database record ID, sleep segment type ID and description.
     * Retrieve all sleep segment types
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getSleepSegmentTypes(xMrdScopes: 'measurements', _options?: PromiseConfigurationOptions): Promise<MeasurementSleepSegmentTypesResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSleepSegmentTypes(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the temporal relation to meal matching the supplied temporal_relation_to_meal_id.
     * Retrieve a temporal relation to meals by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getTemporalRelationToMealWithHttpInfo(xMrdScopes: 'measurements', id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MeasurementTemporalRelationToMealResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTemporalRelationToMealWithHttpInfo(xMrdScopes, id, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the temporal relation to meal matching the supplied temporal_relation_to_meal_id.
     * Retrieve a temporal relation to meals by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getTemporalRelationToMeal(xMrdScopes: 'measurements', id: number, _options?: PromiseConfigurationOptions): Promise<MeasurementTemporalRelationToMealResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTemporalRelationToMeal(xMrdScopes, id, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the temporal relation to sleep matching the supplied temporal_relation_to_sleep_id.
     * Retrieve a temporal relation to sleep by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getTemporalRelationToSleepWithHttpInfo(xMrdScopes: 'measurements', id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MeasurementTemporalRelationToSleepResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTemporalRelationToSleepWithHttpInfo(xMrdScopes, id, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the temporal relation to sleep matching the supplied temporal_relation_to_sleep_id.
     * Retrieve a temporal relation to sleep by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getTemporalRelationToSleep(xMrdScopes: 'measurements', id: number, _options?: PromiseConfigurationOptions): Promise<MeasurementTemporalRelationToSleepResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTemporalRelationToSleep(xMrdScopes, id, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns temporal relations to meals including the database record ID, relation ID and description.
     * Retrieve all temporal relations to meals
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getTemporalRelationsToMealWithHttpInfo(xMrdScopes: 'measurements', _options?: PromiseConfigurationOptions): Promise<HttpInfo<MeasurementTemporalRelationsToMealResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTemporalRelationsToMealWithHttpInfo(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns temporal relations to meals including the database record ID, relation ID and description.
     * Retrieve all temporal relations to meals
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getTemporalRelationsToMeal(xMrdScopes: 'measurements', _options?: PromiseConfigurationOptions): Promise<MeasurementTemporalRelationsToMealResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTemporalRelationsToMeal(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns temporal relations to sleep including the database record ID, relation ID and description.
     * Retrieve all temporal relations to sleep
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getTemporalRelationsToSleepWithHttpInfo(xMrdScopes: 'measurements', _options?: PromiseConfigurationOptions): Promise<HttpInfo<MeasurementTemporalRelationsToSleepResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTemporalRelationsToSleepWithHttpInfo(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns temporal relations to sleep including the database record ID, relation ID and description.
     * Retrieve all temporal relations to sleep
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getTemporalRelationsToSleep(xMrdScopes: 'measurements', _options?: PromiseConfigurationOptions): Promise<MeasurementTemporalRelationsToSleepResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTemporalRelationsToSleep(xMrdScopes, observableOptions);
        return result.toPromise();
    }


}



import { ObservableMedicinesApi } from './ObservableAPI';

import { MedicinesApiRequestFactory, MedicinesApiResponseProcessor} from "../apis/MedicinesApi";
export class PromiseMedicinesApi {
    private api: ObservableMedicinesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MedicinesApiRequestFactory,
        responseProcessor?: MedicinesApiResponseProcessor
    ) {
        this.api = new ObservableMedicinesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a first-level Medicines page. HTML content is returned by default. no_html removes markup, while nhs_links rewrites eligible MRD links to NHS website links. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a Medicine page
     * @param xMrdScopes MRD service scope required for Medicines endpoints.
     * @param param1 First Medicines route segment, normally identifying a medicine, medicine category or medicine family.
     * @param [noHtml] When supplied, removes HTML markup from content text. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave HTML unchanged.
     * @param [nhsLinks] When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     */
    public getMedicineLevelOneWithHttpInfo(xMrdScopes: 'medicines', param1: string, noHtml?: 'true', nhsLinks?: 'true', _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetMedicineLevelOne200Response>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMedicineLevelOneWithHttpInfo(xMrdScopes, param1, noHtml, nhsLinks, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a first-level Medicines page. HTML content is returned by default. no_html removes markup, while nhs_links rewrites eligible MRD links to NHS website links. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a Medicine page
     * @param xMrdScopes MRD service scope required for Medicines endpoints.
     * @param param1 First Medicines route segment, normally identifying a medicine, medicine category or medicine family.
     * @param [noHtml] When supplied, removes HTML markup from content text. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave HTML unchanged.
     * @param [nhsLinks] When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     */
    public getMedicineLevelOne(xMrdScopes: 'medicines', param1: string, noHtml?: 'true', nhsLinks?: 'true', _options?: PromiseConfigurationOptions): Promise<GetMedicineLevelOne200Response> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMedicineLevelOne(xMrdScopes, param1, noHtml, nhsLinks, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a third-level Medicines route. These responses use the same flexible NHS page structure as other Medicines routes and may include nested question and answer content. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a page within a nested Medicine
     * @param xMrdScopes MRD service scope required for Medicines endpoints.
     * @param param1 First Medicines route segment, normally identifying a medicine, medicine category or medicine family.
     * @param param2 Second Medicines route segment, normally identifying a medicine page or a medicine within a broader medicine family.
     * @param param3 Third Medicines route segment identifying a page within a nested medicine, such as common questions, dosage, side effects or interactions.
     * @param [noHtml] When supplied, removes HTML markup from content text. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave HTML unchanged.
     * @param [nhsLinks] When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     */
    public getMedicineLevelThreeWithHttpInfo(xMrdScopes: 'medicines', param1: string, param2: string, param3: string, noHtml?: 'true', nhsLinks?: 'true', _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetMedicineLevelOne200Response>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMedicineLevelThreeWithHttpInfo(xMrdScopes, param1, param2, param3, noHtml, nhsLinks, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a third-level Medicines route. These responses use the same flexible NHS page structure as other Medicines routes and may include nested question and answer content. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a page within a nested Medicine
     * @param xMrdScopes MRD service scope required for Medicines endpoints.
     * @param param1 First Medicines route segment, normally identifying a medicine, medicine category or medicine family.
     * @param param2 Second Medicines route segment, normally identifying a medicine page or a medicine within a broader medicine family.
     * @param param3 Third Medicines route segment identifying a page within a nested medicine, such as common questions, dosage, side effects or interactions.
     * @param [noHtml] When supplied, removes HTML markup from content text. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave HTML unchanged.
     * @param [nhsLinks] When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     */
    public getMedicineLevelThree(xMrdScopes: 'medicines', param1: string, param2: string, param3: string, noHtml?: 'true', nhsLinks?: 'true', _options?: PromiseConfigurationOptions): Promise<GetMedicineLevelOne200Response> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMedicineLevelThree(xMrdScopes, param1, param2, param3, noHtml, nhsLinks, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a specific page within a medicine, or a medicine nested within a broader medicine family. HTML and link behaviour can be controlled using no_html and nhs_links. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a Medicine subpage or nested medicine
     * @param xMrdScopes MRD service scope required for Medicines endpoints.
     * @param param1 First Medicines route segment, normally identifying a medicine, medicine category or medicine family.
     * @param param2 Second Medicines route segment, normally identifying a medicine page or a medicine within a broader medicine family.
     * @param [noHtml] When supplied, removes HTML markup from content text. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave HTML unchanged.
     * @param [nhsLinks] When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     */
    public getMedicineLevelTwoWithHttpInfo(xMrdScopes: 'medicines', param1: string, param2: string, noHtml?: 'true', nhsLinks?: 'true', _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetMedicineLevelOne200Response>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMedicineLevelTwoWithHttpInfo(xMrdScopes, param1, param2, noHtml, nhsLinks, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a specific page within a medicine, or a medicine nested within a broader medicine family. HTML and link behaviour can be controlled using no_html and nhs_links. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a Medicine subpage or nested medicine
     * @param xMrdScopes MRD service scope required for Medicines endpoints.
     * @param param1 First Medicines route segment, normally identifying a medicine, medicine category or medicine family.
     * @param param2 Second Medicines route segment, normally identifying a medicine page or a medicine within a broader medicine family.
     * @param [noHtml] When supplied, removes HTML markup from content text. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave HTML unchanged.
     * @param [nhsLinks] When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     */
    public getMedicineLevelTwo(xMrdScopes: 'medicines', param1: string, param2: string, noHtml?: 'true', nhsLinks?: 'true', _options?: PromiseConfigurationOptions): Promise<GetMedicineLevelOne200Response> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMedicineLevelTwo(xMrdScopes, param1, param2, noHtml, nhsLinks, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the available routes within the NHS Medicines dataset.
     * Retrieve available Medicines routes
     * @param xMrdScopes MRD service scope required for Medicines endpoints.
     */
    public getMedicinesRoutesWithHttpInfo(xMrdScopes: 'medicines', _options?: PromiseConfigurationOptions): Promise<HttpInfo<MedicinesRoutesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMedicinesRoutesWithHttpInfo(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the available routes within the NHS Medicines dataset.
     * Retrieve available Medicines routes
     * @param xMrdScopes MRD service scope required for Medicines endpoints.
     */
    public getMedicinesRoutes(xMrdScopes: 'medicines', _options?: PromiseConfigurationOptions): Promise<MedicinesRoutesResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMedicinesRoutes(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Searches the NHS Medicines dataset using structured filters. By default filters search medicine descriptions. When search_all is enabled, additional searchable page content is included. no_html and nhs_links control content and link formatting.
     * Search Medicines content
     * @param xMrdScopes MRD service scope required for Medicines endpoints.
     * @param filters Structured Medicines search filters supplied using indexed bracket notation, for example filters[0][operator]&#x3D;LIKE&amp;filters[0][value]&#x3D;rapid acting insulin&amp;filters[0][condition]&#x3D;AND&amp;filters[1][operator]&#x3D;LIKE&amp;filters[1][value]&#x3D;diabetes&amp;filters[1][condition]&#x3D;. Each filter must contain exactly value, operator and condition.
     * @param [noHtml] When supplied, removes HTML markup from content text. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave HTML unchanged.
     * @param [nhsLinks] When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     * @param [searchAll] When supplied, the search also checks additional Medicines page content in addition to medicine descriptions. The only accepted value is \&#39;true\&#39;. This parameter is only valid on the search endpoint.
     */
    public searchMedicinesWithHttpInfo(xMrdScopes: 'medicines', filters: Array<MedicinesSearchFilter>, noHtml?: 'true', nhsLinks?: 'true', searchAll?: 'true', _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<MedicineData>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.searchMedicinesWithHttpInfo(xMrdScopes, filters, noHtml, nhsLinks, searchAll, observableOptions);
        return result.toPromise();
    }

    /**
     * Searches the NHS Medicines dataset using structured filters. By default filters search medicine descriptions. When search_all is enabled, additional searchable page content is included. no_html and nhs_links control content and link formatting.
     * Search Medicines content
     * @param xMrdScopes MRD service scope required for Medicines endpoints.
     * @param filters Structured Medicines search filters supplied using indexed bracket notation, for example filters[0][operator]&#x3D;LIKE&amp;filters[0][value]&#x3D;rapid acting insulin&amp;filters[0][condition]&#x3D;AND&amp;filters[1][operator]&#x3D;LIKE&amp;filters[1][value]&#x3D;diabetes&amp;filters[1][condition]&#x3D;. Each filter must contain exactly value, operator and condition.
     * @param [noHtml] When supplied, removes HTML markup from content text. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave HTML unchanged.
     * @param [nhsLinks] When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     * @param [searchAll] When supplied, the search also checks additional Medicines page content in addition to medicine descriptions. The only accepted value is \&#39;true\&#39;. This parameter is only valid on the search endpoint.
     */
    public searchMedicines(xMrdScopes: 'medicines', filters: Array<MedicinesSearchFilter>, noHtml?: 'true', nhsLinks?: 'true', searchAll?: 'true', _options?: PromiseConfigurationOptions): Promise<Array<MedicineData>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.searchMedicines(xMrdScopes, filters, noHtml, nhsLinks, searchAll, observableOptions);
        return result.toPromise();
    }


}



import { ObservableMentalHealthApi } from './ObservableAPI';

import { MentalHealthApiRequestFactory, MentalHealthApiResponseProcessor} from "../apis/MentalHealthApi";
export class PromiseMentalHealthApi {
    private api: ObservableMentalHealthApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MentalHealthApiRequestFactory,
        responseProcessor?: MentalHealthApiResponseProcessor
    ) {
        this.api = new ObservableMentalHealthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a fourth-level Mental Health route. no_html=true removes HTML markup and nhs_links=true rewrites eligible MRD API links to NHS website links. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve deeply nested Mental Health content
     * @param xMrdScopes MRD service scope required for Mental Health endpoints.
     * @param param1 First Mental Health route segment, normally identifying a Mental Health topic, category or section.
     * @param param2 Second Mental Health route segment, normally identifying a category or page within a Mental Health topic.
     * @param param3 Third Mental Health route segment identifying a nested Mental Health page.
     * @param param4 Fourth Mental Health route segment identifying deeply nested Mental Health content.
     * @param [noHtml] When supplied, removes HTML markup from returned Mental Health content. The only accepted value is \&#39;true\&#39;. Omit the parameter to retain HTML.
     * @param [nhsLinks] When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     */
    public getMentalHealthLevelFourWithHttpInfo(xMrdScopes: 'mental-health', param1: string, param2: string, param3: string, param4: string, noHtml?: 'true', nhsLinks?: 'true', _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetMentalHealthLevelOne200Response>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMentalHealthLevelFourWithHttpInfo(xMrdScopes, param1, param2, param3, param4, noHtml, nhsLinks, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a fourth-level Mental Health route. no_html=true removes HTML markup and nhs_links=true rewrites eligible MRD API links to NHS website links. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve deeply nested Mental Health content
     * @param xMrdScopes MRD service scope required for Mental Health endpoints.
     * @param param1 First Mental Health route segment, normally identifying a Mental Health topic, category or section.
     * @param param2 Second Mental Health route segment, normally identifying a category or page within a Mental Health topic.
     * @param param3 Third Mental Health route segment identifying a nested Mental Health page.
     * @param param4 Fourth Mental Health route segment identifying deeply nested Mental Health content.
     * @param [noHtml] When supplied, removes HTML markup from returned Mental Health content. The only accepted value is \&#39;true\&#39;. Omit the parameter to retain HTML.
     * @param [nhsLinks] When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     */
    public getMentalHealthLevelFour(xMrdScopes: 'mental-health', param1: string, param2: string, param3: string, param4: string, noHtml?: 'true', nhsLinks?: 'true', _options?: PromiseConfigurationOptions): Promise<GetMentalHealthLevelOne200Response> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMentalHealthLevelFour(xMrdScopes, param1, param2, param3, param4, noHtml, nhsLinks, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a first-level Mental Health route. no_html=true removes HTML markup and nhs_links=true rewrites eligible MRD API links to NHS website links. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a Mental Health page
     * @param xMrdScopes MRD service scope required for Mental Health endpoints.
     * @param param1 First Mental Health route segment, normally identifying a Mental Health topic, category or section.
     * @param [noHtml] When supplied, removes HTML markup from returned Mental Health content. The only accepted value is \&#39;true\&#39;. Omit the parameter to retain HTML.
     * @param [nhsLinks] When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     */
    public getMentalHealthLevelOneWithHttpInfo(xMrdScopes: 'mental-health', param1: string, noHtml?: 'true', nhsLinks?: 'true', _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetMentalHealthLevelOne200Response>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMentalHealthLevelOneWithHttpInfo(xMrdScopes, param1, noHtml, nhsLinks, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a first-level Mental Health route. no_html=true removes HTML markup and nhs_links=true rewrites eligible MRD API links to NHS website links. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a Mental Health page
     * @param xMrdScopes MRD service scope required for Mental Health endpoints.
     * @param param1 First Mental Health route segment, normally identifying a Mental Health topic, category or section.
     * @param [noHtml] When supplied, removes HTML markup from returned Mental Health content. The only accepted value is \&#39;true\&#39;. Omit the parameter to retain HTML.
     * @param [nhsLinks] When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     */
    public getMentalHealthLevelOne(xMrdScopes: 'mental-health', param1: string, noHtml?: 'true', nhsLinks?: 'true', _options?: PromiseConfigurationOptions): Promise<GetMentalHealthLevelOne200Response> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMentalHealthLevelOne(xMrdScopes, param1, noHtml, nhsLinks, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a third-level Mental Health page. no_html=true removes HTML markup and nhs_links=true rewrites eligible MRD API links to NHS website links. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve nested Mental Health content
     * @param xMrdScopes MRD service scope required for Mental Health endpoints.
     * @param param1 First Mental Health route segment, normally identifying a Mental Health topic, category or section.
     * @param param2 Second Mental Health route segment, normally identifying a category or page within a Mental Health topic.
     * @param param3 Third Mental Health route segment identifying a nested Mental Health page.
     * @param [noHtml] When supplied, removes HTML markup from returned Mental Health content. The only accepted value is \&#39;true\&#39;. Omit the parameter to retain HTML.
     * @param [nhsLinks] When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     */
    public getMentalHealthLevelThreeWithHttpInfo(xMrdScopes: 'mental-health', param1: string, param2: string, param3: string, noHtml?: 'true', nhsLinks?: 'true', _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetMentalHealthLevelOne200Response>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMentalHealthLevelThreeWithHttpInfo(xMrdScopes, param1, param2, param3, noHtml, nhsLinks, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a third-level Mental Health page. no_html=true removes HTML markup and nhs_links=true rewrites eligible MRD API links to NHS website links. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve nested Mental Health content
     * @param xMrdScopes MRD service scope required for Mental Health endpoints.
     * @param param1 First Mental Health route segment, normally identifying a Mental Health topic, category or section.
     * @param param2 Second Mental Health route segment, normally identifying a category or page within a Mental Health topic.
     * @param param3 Third Mental Health route segment identifying a nested Mental Health page.
     * @param [noHtml] When supplied, removes HTML markup from returned Mental Health content. The only accepted value is \&#39;true\&#39;. Omit the parameter to retain HTML.
     * @param [nhsLinks] When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     */
    public getMentalHealthLevelThree(xMrdScopes: 'mental-health', param1: string, param2: string, param3: string, noHtml?: 'true', nhsLinks?: 'true', _options?: PromiseConfigurationOptions): Promise<GetMentalHealthLevelOne200Response> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMentalHealthLevelThree(xMrdScopes, param1, param2, param3, noHtml, nhsLinks, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a second-level Mental Health route. no_html=true removes HTML markup and nhs_links=true rewrites eligible MRD API links to NHS website links. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a Mental Health subcategory
     * @param xMrdScopes MRD service scope required for Mental Health endpoints.
     * @param param1 First Mental Health route segment, normally identifying a Mental Health topic, category or section.
     * @param param2 Second Mental Health route segment, normally identifying a category or page within a Mental Health topic.
     * @param [noHtml] When supplied, removes HTML markup from returned Mental Health content. The only accepted value is \&#39;true\&#39;. Omit the parameter to retain HTML.
     * @param [nhsLinks] When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     */
    public getMentalHealthLevelTwoWithHttpInfo(xMrdScopes: 'mental-health', param1: string, param2: string, noHtml?: 'true', nhsLinks?: 'true', _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetMentalHealthLevelOne200Response>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMentalHealthLevelTwoWithHttpInfo(xMrdScopes, param1, param2, noHtml, nhsLinks, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a second-level Mental Health route. no_html=true removes HTML markup and nhs_links=true rewrites eligible MRD API links to NHS website links. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a Mental Health subcategory
     * @param xMrdScopes MRD service scope required for Mental Health endpoints.
     * @param param1 First Mental Health route segment, normally identifying a Mental Health topic, category or section.
     * @param param2 Second Mental Health route segment, normally identifying a category or page within a Mental Health topic.
     * @param [noHtml] When supplied, removes HTML markup from returned Mental Health content. The only accepted value is \&#39;true\&#39;. Omit the parameter to retain HTML.
     * @param [nhsLinks] When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     */
    public getMentalHealthLevelTwo(xMrdScopes: 'mental-health', param1: string, param2: string, noHtml?: 'true', nhsLinks?: 'true', _options?: PromiseConfigurationOptions): Promise<GetMentalHealthLevelOne200Response> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMentalHealthLevelTwo(xMrdScopes, param1, param2, noHtml, nhsLinks, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the available routes within the NHS Mental Health dataset.
     * Retrieve available Mental Health routes
     * @param xMrdScopes MRD service scope required for Mental Health endpoints.
     */
    public getMentalHealthRoutesWithHttpInfo(xMrdScopes: 'mental-health', _options?: PromiseConfigurationOptions): Promise<HttpInfo<MentalHealthRoutesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMentalHealthRoutesWithHttpInfo(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the available routes within the NHS Mental Health dataset.
     * Retrieve available Mental Health routes
     * @param xMrdScopes MRD service scope required for Mental Health endpoints.
     */
    public getMentalHealthRoutes(xMrdScopes: 'mental-health', _options?: PromiseConfigurationOptions): Promise<MentalHealthRoutesResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMentalHealthRoutes(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Searches the NHS Mental Health dataset using structured filters. By default filters search the page description. search_all=true additionally searches page-content text and expander-group content.
     * Search Mental Health content
     * @param xMrdScopes MRD service scope required for Mental Health endpoints.
     * @param filters Structured Mental Health search filters supplied using indexed bracket notation, for example filters[0][value]&#x3D;depression&amp;filters[0][operator]&#x3D;LIKE&amp;filters[0][condition]&#x3D;. Each filter must contain value, operator and condition. By default the search checks the page description. search_all&#x3D;true additionally searches page-content text and expander-group content.
     * @param [noHtml] When supplied, removes HTML markup from returned Mental Health content. The only accepted value is \&#39;true\&#39;. Omit the parameter to retain HTML.
     * @param [nhsLinks] When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     * @param [searchAll] When supplied, the search also checks page-content text and expander-group content in addition to the page description. The only accepted value is \&#39;true\&#39;. This parameter is only valid on the search endpoint.
     */
    public searchMentalHealthWithHttpInfo(xMrdScopes: 'mental-health', filters: Array<MentalHealthSearchFilter>, noHtml?: 'true', nhsLinks?: 'true', searchAll?: 'true', _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<MentalHealthData>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.searchMentalHealthWithHttpInfo(xMrdScopes, filters, noHtml, nhsLinks, searchAll, observableOptions);
        return result.toPromise();
    }

    /**
     * Searches the NHS Mental Health dataset using structured filters. By default filters search the page description. search_all=true additionally searches page-content text and expander-group content.
     * Search Mental Health content
     * @param xMrdScopes MRD service scope required for Mental Health endpoints.
     * @param filters Structured Mental Health search filters supplied using indexed bracket notation, for example filters[0][value]&#x3D;depression&amp;filters[0][operator]&#x3D;LIKE&amp;filters[0][condition]&#x3D;. Each filter must contain value, operator and condition. By default the search checks the page description. search_all&#x3D;true additionally searches page-content text and expander-group content.
     * @param [noHtml] When supplied, removes HTML markup from returned Mental Health content. The only accepted value is \&#39;true\&#39;. Omit the parameter to retain HTML.
     * @param [nhsLinks] When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     * @param [searchAll] When supplied, the search also checks page-content text and expander-group content in addition to the page description. The only accepted value is \&#39;true\&#39;. This parameter is only valid on the search endpoint.
     */
    public searchMentalHealth(xMrdScopes: 'mental-health', filters: Array<MentalHealthSearchFilter>, noHtml?: 'true', nhsLinks?: 'true', searchAll?: 'true', _options?: PromiseConfigurationOptions): Promise<Array<MentalHealthData>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.searchMentalHealth(xMrdScopes, filters, noHtml, nhsLinks, searchAll, observableOptions);
        return result.toPromise();
    }


}



import { ObservablePregnancyApi } from './ObservableAPI';

import { PregnancyApiRequestFactory, PregnancyApiResponseProcessor} from "../apis/PregnancyApi";
export class PromisePregnancyApi {
    private api: ObservablePregnancyApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PregnancyApiRequestFactory,
        responseProcessor?: PregnancyApiResponseProcessor
    ) {
        this.api = new ObservablePregnancyApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a first-level Pregnancy route. no_html=true removes HTML markup, while nhs_links=true rewrites eligible MRD API URLs to NHS website URLs. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a Pregnancy page
     * @param xMrdScopes MRD service scope required for Pregnancy endpoints.
     * @param param1 First Pregnancy route segment, normally identifying a Pregnancy topic, category or section.
     * @param [noHtml] When supplied, removes HTML markup from returned Pregnancy content. The only accepted value is \&#39;true\&#39;. Omit the parameter to retain HTML.
     * @param [nhsLinks] When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     */
    public getPregnancyLevelOneWithHttpInfo(xMrdScopes: 'pregnancy', param1: string, noHtml?: 'true', nhsLinks?: 'true', _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetPregnancyLevelOne200Response>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPregnancyLevelOneWithHttpInfo(xMrdScopes, param1, noHtml, nhsLinks, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a first-level Pregnancy route. no_html=true removes HTML markup, while nhs_links=true rewrites eligible MRD API URLs to NHS website URLs. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a Pregnancy page
     * @param xMrdScopes MRD service scope required for Pregnancy endpoints.
     * @param param1 First Pregnancy route segment, normally identifying a Pregnancy topic, category or section.
     * @param [noHtml] When supplied, removes HTML markup from returned Pregnancy content. The only accepted value is \&#39;true\&#39;. Omit the parameter to retain HTML.
     * @param [nhsLinks] When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     */
    public getPregnancyLevelOne(xMrdScopes: 'pregnancy', param1: string, noHtml?: 'true', nhsLinks?: 'true', _options?: PromiseConfigurationOptions): Promise<GetPregnancyLevelOne200Response> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPregnancyLevelOne(xMrdScopes, param1, noHtml, nhsLinks, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a third-level Pregnancy route. no_html=true removes HTML markup, while nhs_links=true rewrites eligible MRD API URLs to NHS website URLs. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve deeply nested Pregnancy content
     * @param xMrdScopes MRD service scope required for Pregnancy endpoints.
     * @param param1 First Pregnancy route segment, normally identifying a Pregnancy topic, category or section.
     * @param param2 Second Pregnancy route segment, normally identifying a page within a Pregnancy topic.
     * @param param3 Third Pregnancy route segment identifying a deeply nested Pregnancy page, such as a specific pregnancy week or page within a nested category.
     * @param [noHtml] When supplied, removes HTML markup from returned Pregnancy content. The only accepted value is \&#39;true\&#39;. Omit the parameter to retain HTML.
     * @param [nhsLinks] When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     */
    public getPregnancyLevelThreeWithHttpInfo(xMrdScopes: 'pregnancy', param1: string, param2: string, param3: string, noHtml?: 'true', nhsLinks?: 'true', _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetPregnancyLevelOne200Response>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPregnancyLevelThreeWithHttpInfo(xMrdScopes, param1, param2, param3, noHtml, nhsLinks, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a third-level Pregnancy route. no_html=true removes HTML markup, while nhs_links=true rewrites eligible MRD API URLs to NHS website URLs. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve deeply nested Pregnancy content
     * @param xMrdScopes MRD service scope required for Pregnancy endpoints.
     * @param param1 First Pregnancy route segment, normally identifying a Pregnancy topic, category or section.
     * @param param2 Second Pregnancy route segment, normally identifying a page within a Pregnancy topic.
     * @param param3 Third Pregnancy route segment identifying a deeply nested Pregnancy page, such as a specific pregnancy week or page within a nested category.
     * @param [noHtml] When supplied, removes HTML markup from returned Pregnancy content. The only accepted value is \&#39;true\&#39;. Omit the parameter to retain HTML.
     * @param [nhsLinks] When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     */
    public getPregnancyLevelThree(xMrdScopes: 'pregnancy', param1: string, param2: string, param3: string, noHtml?: 'true', nhsLinks?: 'true', _options?: PromiseConfigurationOptions): Promise<GetPregnancyLevelOne200Response> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPregnancyLevelThree(xMrdScopes, param1, param2, param3, noHtml, nhsLinks, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a second-level page within a Pregnancy topic. no_html=true removes HTML markup, while nhs_links=true rewrites eligible MRD API URLs to NHS website URLs. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a Pregnancy subpage
     * @param xMrdScopes MRD service scope required for Pregnancy endpoints.
     * @param param1 First Pregnancy route segment, normally identifying a Pregnancy topic, category or section.
     * @param param2 Second Pregnancy route segment, normally identifying a page within a Pregnancy topic.
     * @param [noHtml] When supplied, removes HTML markup from returned Pregnancy content. The only accepted value is \&#39;true\&#39;. Omit the parameter to retain HTML.
     * @param [nhsLinks] When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     */
    public getPregnancyLevelTwoWithHttpInfo(xMrdScopes: 'pregnancy', param1: string, param2: string, noHtml?: 'true', nhsLinks?: 'true', _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetPregnancyLevelOne200Response>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPregnancyLevelTwoWithHttpInfo(xMrdScopes, param1, param2, noHtml, nhsLinks, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a second-level page within a Pregnancy topic. no_html=true removes HTML markup, while nhs_links=true rewrites eligible MRD API URLs to NHS website URLs. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a Pregnancy subpage
     * @param xMrdScopes MRD service scope required for Pregnancy endpoints.
     * @param param1 First Pregnancy route segment, normally identifying a Pregnancy topic, category or section.
     * @param param2 Second Pregnancy route segment, normally identifying a page within a Pregnancy topic.
     * @param [noHtml] When supplied, removes HTML markup from returned Pregnancy content. The only accepted value is \&#39;true\&#39;. Omit the parameter to retain HTML.
     * @param [nhsLinks] When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     */
    public getPregnancyLevelTwo(xMrdScopes: 'pregnancy', param1: string, param2: string, noHtml?: 'true', nhsLinks?: 'true', _options?: PromiseConfigurationOptions): Promise<GetPregnancyLevelOne200Response> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPregnancyLevelTwo(xMrdScopes, param1, param2, noHtml, nhsLinks, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the available routes within the NHS Pregnancy dataset.
     * Retrieve available Pregnancy routes
     * @param xMrdScopes MRD service scope required for Pregnancy endpoints.
     */
    public getPregnancyRoutesWithHttpInfo(xMrdScopes: 'pregnancy', _options?: PromiseConfigurationOptions): Promise<HttpInfo<PregnancyRoutesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPregnancyRoutesWithHttpInfo(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the available routes within the NHS Pregnancy dataset.
     * Retrieve available Pregnancy routes
     * @param xMrdScopes MRD service scope required for Pregnancy endpoints.
     */
    public getPregnancyRoutes(xMrdScopes: 'pregnancy', _options?: PromiseConfigurationOptions): Promise<PregnancyRoutesResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getPregnancyRoutes(xMrdScopes, observableOptions);
        return result.toPromise();
    }

    /**
     * Searches the NHS Pregnancy dataset using structured filters. By default each filter searches the page description. When search_all=true, the search additionally checks page-content text and expander-group content. no_html removes HTML markup from returned content and nhs_links rewrites eligible MRD API links to NHS website links.
     * Search Pregnancy content
     * @param xMrdScopes MRD service scope required for Pregnancy endpoints.
     * @param filters Structured Pregnancy search filters supplied using indexed bracket notation, for example filters[0][value]&#x3D;antenatal appointments&amp;filters[0][operator]&#x3D;LIKE&amp;filters[0][condition]&#x3D;. Each filter must contain exactly value, operator and condition.
     * @param [noHtml] When supplied, removes HTML markup from returned Pregnancy content. The only accepted value is \&#39;true\&#39;. Omit the parameter to retain HTML.
     * @param [nhsLinks] When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     * @param [searchAll] When supplied, the search also checks Pregnancy page-content text and expander-group content in addition to the page description. The only accepted value is \&#39;true\&#39;. This parameter is only valid on the search endpoint.
     */
    public searchPregnancyWithHttpInfo(xMrdScopes: 'pregnancy', filters: Array<PregnancySearchFilter>, noHtml?: 'true', nhsLinks?: 'true', searchAll?: 'true', _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<PregnancyData>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.searchPregnancyWithHttpInfo(xMrdScopes, filters, noHtml, nhsLinks, searchAll, observableOptions);
        return result.toPromise();
    }

    /**
     * Searches the NHS Pregnancy dataset using structured filters. By default each filter searches the page description. When search_all=true, the search additionally checks page-content text and expander-group content. no_html removes HTML markup from returned content and nhs_links rewrites eligible MRD API links to NHS website links.
     * Search Pregnancy content
     * @param xMrdScopes MRD service scope required for Pregnancy endpoints.
     * @param filters Structured Pregnancy search filters supplied using indexed bracket notation, for example filters[0][value]&#x3D;antenatal appointments&amp;filters[0][operator]&#x3D;LIKE&amp;filters[0][condition]&#x3D;. Each filter must contain exactly value, operator and condition.
     * @param [noHtml] When supplied, removes HTML markup from returned Pregnancy content. The only accepted value is \&#39;true\&#39;. Omit the parameter to retain HTML.
     * @param [nhsLinks] When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     * @param [searchAll] When supplied, the search also checks Pregnancy page-content text and expander-group content in addition to the page description. The only accepted value is \&#39;true\&#39;. This parameter is only valid on the search endpoint.
     */
    public searchPregnancy(xMrdScopes: 'pregnancy', filters: Array<PregnancySearchFilter>, noHtml?: 'true', nhsLinks?: 'true', searchAll?: 'true', _options?: PromiseConfigurationOptions): Promise<Array<PregnancyData>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.searchPregnancy(xMrdScopes, filters, noHtml, nhsLinks, searchAll, observableOptions);
        return result.toPromise();
    }


}



import { ObservableSearchApi } from './ObservableAPI';

import { SearchApiRequestFactory, SearchApiResponseProcessor} from "../apis/SearchApi";
export class PromiseSearchApi {
    private api: ObservableSearchApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SearchApiRequestFactory,
        responseProcessor?: SearchApiResponseProcessor
    ) {
        this.api = new ObservableSearchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Searches indexed MRD content using structured filters. Filter 0 must contain a keyword. Searchable fields are keyword and page description, using either = or LIKE. Indexed filters can be connected using AND, OR, NOT or AND NOT, with NOT converted internally to AND NOT. Results are restricted according to the MRD scopes authorised for the request. By default results are paginated. Supplying the all query parameter disables pagination regardless of the parameter value.
     * Search MRD content
     * @param xMrdScopes MRD service scope or scopes to include in global search. Supply one or more OAuth-authorised MRD service scopes, comma-delimited or space-delimited.
     * @param filters Structured Search filters supplied using indexed bracket notation. Filter 0 must contain keyword, operator and condition. Additional filters must contain operator and condition and may contain keyword, description or both. For example: filters[0][operator]&#x3D;LIKE&amp;filters[0][keyword]&#x3D;smoking&amp;filters[0][condition]&#x3D;AND&amp;filters[1][operator]&#x3D;LIKE&amp;filters[1][description]&#x3D;electronic cigarette&amp;filters[1][condition]&#x3D;. The final filter should normally use an empty condition.
     * @param [page] Page number used when pagination is enabled. The value is cast to an integer by the current implementation. If the resulting value is below 1, page 1 is used. The default is 1.
     * @param [all] Disables pagination when this query parameter is present. The current implementation checks only whether the parameter exists; its value is ignored. all&#x3D;true, all&#x3D;false and an empty all parameter all enable unpaginated results. Omit the parameter to use pagination.
     * @param [limit] Requested number of results per page when pagination is enabled. The value is cast to an integer. Values above 100 are reduced to 100. The default is 50.
     */
    public searchMrdWithHttpInfo(xMrdScopes: string, filters: Array<SearchFilter>, page?: number, all?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SearchMrd200Response>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.searchMrdWithHttpInfo(xMrdScopes, filters, page, all, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Searches indexed MRD content using structured filters. Filter 0 must contain a keyword. Searchable fields are keyword and page description, using either = or LIKE. Indexed filters can be connected using AND, OR, NOT or AND NOT, with NOT converted internally to AND NOT. Results are restricted according to the MRD scopes authorised for the request. By default results are paginated. Supplying the all query parameter disables pagination regardless of the parameter value.
     * Search MRD content
     * @param xMrdScopes MRD service scope or scopes to include in global search. Supply one or more OAuth-authorised MRD service scopes, comma-delimited or space-delimited.
     * @param filters Structured Search filters supplied using indexed bracket notation. Filter 0 must contain keyword, operator and condition. Additional filters must contain operator and condition and may contain keyword, description or both. For example: filters[0][operator]&#x3D;LIKE&amp;filters[0][keyword]&#x3D;smoking&amp;filters[0][condition]&#x3D;AND&amp;filters[1][operator]&#x3D;LIKE&amp;filters[1][description]&#x3D;electronic cigarette&amp;filters[1][condition]&#x3D;. The final filter should normally use an empty condition.
     * @param [page] Page number used when pagination is enabled. The value is cast to an integer by the current implementation. If the resulting value is below 1, page 1 is used. The default is 1.
     * @param [all] Disables pagination when this query parameter is present. The current implementation checks only whether the parameter exists; its value is ignored. all&#x3D;true, all&#x3D;false and an empty all parameter all enable unpaginated results. Omit the parameter to use pagination.
     * @param [limit] Requested number of results per page when pagination is enabled. The value is cast to an integer. Values above 100 are reduced to 100. The default is 50.
     */
    public searchMrd(xMrdScopes: string, filters: Array<SearchFilter>, page?: number, all?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<SearchMrd200Response> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.searchMrd(xMrdScopes, filters, page, all, limit, observableOptions);
        return result.toPromise();
    }


}



import { ObservableValidationsApi } from './ObservableAPI';

import { ValidationsApiRequestFactory, ValidationsApiResponseProcessor} from "../apis/ValidationsApi";
export class PromiseValidationsApi {
    private api: ObservableValidationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ValidationsApiRequestFactory,
        responseProcessor?: ValidationsApiResponseProcessor
    ) {
        this.api = new ObservableValidationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns allowed values from the requested validation lookup. Most lookup tables return an array of strings. Structured lookup tables such as race_ethnicity return an array of objects. The field name must map to a supported lu_<field_name> lookup table; country is additionally supported from the Countries database.
     * Retrieve allowed values for a lookup field
     * @param fieldName Supported validation lookup field. Only lookup datasets currently intended to provide useful values through the Validations API are exposed here.
     */
    public getValidationLookupValuesWithHttpInfo(fieldName: 'bank_acc_type' | 'comm_type' | 'country' | 'dl_group' | 'dl_issuing_authority' | 'edu_org_type' | 'gender' | 'home_tenancy' | 'marital_status' | 'medication_dosage_units' | 'mode_of_study' | 'pronouns' | 'property_type' | 'race_ethnicity' | 'title' | 'utility_service', _options?: PromiseConfigurationOptions): Promise<HttpInfo<LookupAllowedValuesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getValidationLookupValuesWithHttpInfo(fieldName, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns allowed values from the requested validation lookup. Most lookup tables return an array of strings. Structured lookup tables such as race_ethnicity return an array of objects. The field name must map to a supported lu_<field_name> lookup table; country is additionally supported from the Countries database.
     * Retrieve allowed values for a lookup field
     * @param fieldName Supported validation lookup field. Only lookup datasets currently intended to provide useful values through the Validations API are exposed here.
     */
    public getValidationLookupValues(fieldName: 'bank_acc_type' | 'comm_type' | 'country' | 'dl_group' | 'dl_issuing_authority' | 'edu_org_type' | 'gender' | 'home_tenancy' | 'marital_status' | 'medication_dosage_units' | 'mode_of_study' | 'pronouns' | 'property_type' | 'race_ethnicity' | 'title' | 'utility_service', _options?: PromiseConfigurationOptions): Promise<LookupAllowedValuesResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getValidationLookupValues(fieldName, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns all published datasets grouped dynamically by dataset status. Each dataset includes its PDS file type, derived deployment environment and extended information for its published fields.
     * Retrieve all MDS datasets with extended field information
     */
    public getValidationMdsAllDatasetsAndFieldsWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<{ [key: string]: Array<MdsAllDatasetWithFields>; }>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getValidationMdsAllDatasetsAndFieldsWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Returns all published datasets grouped dynamically by dataset status. Each dataset includes its PDS file type, derived deployment environment and extended information for its published fields.
     * Retrieve all MDS datasets with extended field information
     */
    public getValidationMdsAllDatasetsAndFields(_options?: PromiseConfigurationOptions): Promise<{ [key: string]: Array<MdsAllDatasetWithFields>; }> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getValidationMdsAllDatasetsAndFields(observableOptions);
        return result.toPromise();
    }

    /**
     * Returns an object keyed by field machine name containing the field name, display name and data type for fields belonging to the requested dataset.
     * Retrieve field types for an MDS dataset
     * @param dataset MDS dataset machine name.
     */
    public getValidationMdsDatasetFieldTypesWithHttpInfo(dataset: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<{ [key: string]: MdsFieldType; }>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getValidationMdsDatasetFieldTypesWithHttpInfo(dataset, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns an object keyed by field machine name containing the field name, display name and data type for fields belonging to the requested dataset.
     * Retrieve field types for an MDS dataset
     * @param dataset MDS dataset machine name.
     */
    public getValidationMdsDatasetFieldTypes(dataset: string, _options?: PromiseConfigurationOptions): Promise<{ [key: string]: MdsFieldType; }> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getValidationMdsDatasetFieldTypes(dataset, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns an object keyed by field machine name containing extended definitions for published fields belonging to the requested dataset.
     * Retrieve full field definitions for an MDS dataset
     * @param dataset MDS dataset machine name.
     */
    public getValidationMdsDatasetFieldsWithHttpInfo(dataset: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<{ [key: string]: MdsFieldDetails; }>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getValidationMdsDatasetFieldsWithHttpInfo(dataset, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns an object keyed by field machine name containing extended definitions for published fields belonging to the requested dataset.
     * Retrieve full field definitions for an MDS dataset
     * @param dataset MDS dataset machine name.
     */
    public getValidationMdsDatasetFields(dataset: string, _options?: PromiseConfigurationOptions): Promise<{ [key: string]: MdsFieldDetails; }> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getValidationMdsDatasetFields(dataset, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns published MDS datasets including their machine name, display name and status.
     * Retrieve MDS datasets
     */
    public getValidationMdsDatasetsWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<MdsDatasetSummary>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getValidationMdsDatasetsWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Returns published MDS datasets including their machine name, display name and status.
     * Retrieve MDS datasets
     */
    public getValidationMdsDatasets(_options?: PromiseConfigurationOptions): Promise<Array<MdsDatasetSummary>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getValidationMdsDatasets(observableOptions);
        return result.toPromise();
    }

    /**
     * Returns published datasets grouped dynamically by dataset status. Each dataset contains its machine name, display name, status, PDS file type and a map of published fields containing field name, display name and data type.
     * Retrieve MDS datasets and basic field information
     */
    public getValidationMdsDatasetsAndFieldsWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<{ [key: string]: Array<MdsDatasetWithFields>; }>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getValidationMdsDatasetsAndFieldsWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Returns published datasets grouped dynamically by dataset status. Each dataset contains its machine name, display name, status, PDS file type and a map of published fields containing field name, display name and data type.
     * Retrieve MDS datasets and basic field information
     */
    public getValidationMdsDatasetsAndFields(_options?: PromiseConfigurationOptions): Promise<{ [key: string]: Array<MdsDatasetWithFields>; }> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getValidationMdsDatasetsAndFields(observableOptions);
        return result.toPromise();
    }

    /**
     * Returns published datasets matching the supplied dataset status.
     * Retrieve MDS datasets by one status
     * @param status1 First MDS dataset status to include.
     */
    public getValidationMdsDatasetsByOneStatusWithHttpInfo(status1: 'Live' | 'In Development' | 'Implement' | 'Hold', _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<MdsDatasetSummary>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getValidationMdsDatasetsByOneStatusWithHttpInfo(status1, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns published datasets matching the supplied dataset status.
     * Retrieve MDS datasets by one status
     * @param status1 First MDS dataset status to include.
     */
    public getValidationMdsDatasetsByOneStatus(status1: 'Live' | 'In Development' | 'Implement' | 'Hold', _options?: PromiseConfigurationOptions): Promise<Array<MdsDatasetSummary>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getValidationMdsDatasetsByOneStatus(status1, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns published datasets matching any of the supplied dataset statuses.
     * Retrieve MDS datasets by three statuses
     * @param status1 First MDS dataset status to include.
     * @param status2 Second MDS dataset status to include.
     * @param status3 Third MDS dataset status to include.
     */
    public getValidationMdsDatasetsByThreeStatusesWithHttpInfo(status1: 'Live' | 'In Development' | 'Implement' | 'Hold', status2: 'Live' | 'In Development' | 'Implement' | 'Hold', status3: 'Live' | 'In Development' | 'Implement' | 'Hold', _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<MdsDatasetSummary>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getValidationMdsDatasetsByThreeStatusesWithHttpInfo(status1, status2, status3, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns published datasets matching any of the supplied dataset statuses.
     * Retrieve MDS datasets by three statuses
     * @param status1 First MDS dataset status to include.
     * @param status2 Second MDS dataset status to include.
     * @param status3 Third MDS dataset status to include.
     */
    public getValidationMdsDatasetsByThreeStatuses(status1: 'Live' | 'In Development' | 'Implement' | 'Hold', status2: 'Live' | 'In Development' | 'Implement' | 'Hold', status3: 'Live' | 'In Development' | 'Implement' | 'Hold', _options?: PromiseConfigurationOptions): Promise<Array<MdsDatasetSummary>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getValidationMdsDatasetsByThreeStatuses(status1, status2, status3, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns published datasets matching either of the supplied dataset statuses.
     * Retrieve MDS datasets by two statuses
     * @param status1 First MDS dataset status to include.
     * @param status2 Second MDS dataset status to include.
     */
    public getValidationMdsDatasetsByTwoStatusesWithHttpInfo(status1: 'Live' | 'In Development' | 'Implement' | 'Hold', status2: 'Live' | 'In Development' | 'Implement' | 'Hold', _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<MdsDatasetSummary>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getValidationMdsDatasetsByTwoStatusesWithHttpInfo(status1, status2, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns published datasets matching either of the supplied dataset statuses.
     * Retrieve MDS datasets by two statuses
     * @param status1 First MDS dataset status to include.
     * @param status2 Second MDS dataset status to include.
     */
    public getValidationMdsDatasetsByTwoStatuses(status1: 'Live' | 'In Development' | 'Implement' | 'Hold', status2: 'Live' | 'In Development' | 'Implement' | 'Hold', _options?: PromiseConfigurationOptions): Promise<Array<MdsDatasetSummary>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getValidationMdsDatasetsByTwoStatuses(status1, status2, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns published datasets belonging to the requested public dataset type. metadata is mapped internally to JSON and transactional is mapped internally to SQLite.
     * Retrieve MDS datasets by type
     * @param type Public dataset type. metadata maps to JSON-backed datasets and transactional maps to SQLite-backed datasets.
     */
    public getValidationMdsDatasetsByTypeWithHttpInfo(type: 'metadata' | 'transactional', _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<MdsDatasetSummary>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getValidationMdsDatasetsByTypeWithHttpInfo(type, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns published datasets belonging to the requested public dataset type. metadata is mapped internally to JSON and transactional is mapped internally to SQLite.
     * Retrieve MDS datasets by type
     * @param type Public dataset type. metadata maps to JSON-backed datasets and transactional maps to SQLite-backed datasets.
     */
    public getValidationMdsDatasetsByType(type: 'metadata' | 'transactional', _options?: PromiseConfigurationOptions): Promise<Array<MdsDatasetSummary>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getValidationMdsDatasetsByType(type, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the field machine name, display name and data type for the requested MDS field.
     * Retrieve an MDS field\'s data type
     * @param field MDS field machine name.
     */
    public getValidationMdsFieldTypeWithHttpInfo(field: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MdsFieldTypeResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getValidationMdsFieldTypeWithHttpInfo(field, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the field machine name, display name and data type for the requested MDS field.
     * Retrieve an MDS field\'s data type
     * @param field MDS field machine name.
     */
    public getValidationMdsFieldType(field: string, _options?: PromiseConfigurationOptions): Promise<MdsFieldTypeResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getValidationMdsFieldType(field, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns counts of published datasets, published live datasets and published fields. The current API serializes these database count values as strings.
     * Retrieve an MDS summary
     */
    public getValidationMdsSummaryWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<MdsSummaryResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getValidationMdsSummaryWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Returns counts of published datasets, published live datasets and published fields. The current API serializes these database count values as strings.
     * Retrieve an MDS summary
     */
    public getValidationMdsSummary(_options?: PromiseConfigurationOptions): Promise<MdsSummaryResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getValidationMdsSummary(observableOptions);
        return result.toPromise();
    }

    /**
     * Returns records whose feature_name matches the supplied feature name.
     * Retrieve an MTS feature by name
     * @param feature Mydex Template System feature name. The endpoint matches this value against feature_name.
     */
    public getValidationMtsFeatureByNameWithHttpInfo(feature: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<MtsFeatureRecord>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getValidationMtsFeatureByNameWithHttpInfo(feature, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns records whose feature_name matches the supplied feature name.
     * Retrieve an MTS feature by name
     * @param feature Mydex Template System feature name. The endpoint matches this value against feature_name.
     */
    public getValidationMtsFeatureByName(feature: string, _options?: PromiseConfigurationOptions): Promise<Array<MtsFeatureRecord>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getValidationMtsFeatureByName(feature, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns all Mydex Template System feature records.
     * Retrieve all MTS features
     */
    public getValidationMtsFeaturesWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<MtsFeatureRecord>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getValidationMtsFeaturesWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Returns all Mydex Template System feature records.
     * Retrieve all MTS features
     */
    public getValidationMtsFeatures(_options?: PromiseConfigurationOptions): Promise<Array<MtsFeatureRecord>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getValidationMtsFeatures(observableOptions);
        return result.toPromise();
    }

    /**
     * Returns records whose feature_group matches the supplied feature group name.
     * Retrieve MTS features by group
     * @param group Mydex Template System feature group name. The endpoint matches this value against feature_group.
     */
    public getValidationMtsFeaturesByGroupWithHttpInfo(group: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<MtsFeatureRecord>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getValidationMtsFeaturesByGroupWithHttpInfo(group, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns records whose feature_group matches the supplied feature group name.
     * Retrieve MTS features by group
     * @param group Mydex Template System feature group name. The endpoint matches this value against feature_group.
     */
    public getValidationMtsFeaturesByGroup(group: string, _options?: PromiseConfigurationOptions): Promise<Array<MtsFeatureRecord>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getValidationMtsFeaturesByGroup(group, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns records whose template_name and module_name match the supplied values.
     * Retrieve an MTS template module
     * @param template Mydex Template System template name. The endpoint matches this value against template_name.
     * @param module Mydex Template System module name. The endpoint matches this value against module_name.
     */
    public getValidationMtsTemplateByModuleWithHttpInfo(template: string, module: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<MtsTemplateRecord>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getValidationMtsTemplateByModuleWithHttpInfo(template, module, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns records whose template_name and module_name match the supplied values.
     * Retrieve an MTS template module
     * @param template Mydex Template System template name. The endpoint matches this value against template_name.
     * @param module Mydex Template System module name. The endpoint matches this value against module_name.
     */
    public getValidationMtsTemplateByModule(template: string, module: string, _options?: PromiseConfigurationOptions): Promise<Array<MtsTemplateRecord>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getValidationMtsTemplateByModule(template, module, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns records whose template_name matches the supplied template name.
     * Retrieve MTS template records by template name
     * @param template Mydex Template System template name. The endpoint matches this value against template_name.
     */
    public getValidationMtsTemplateByNameWithHttpInfo(template: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<MtsTemplateRecord>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getValidationMtsTemplateByNameWithHttpInfo(template, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns records whose template_name matches the supplied template name.
     * Retrieve MTS template records by template name
     * @param template Mydex Template System template name. The endpoint matches this value against template_name.
     */
    public getValidationMtsTemplateByName(template: string, _options?: PromiseConfigurationOptions): Promise<Array<MtsTemplateRecord>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getValidationMtsTemplateByName(template, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns records whose template_name, module_name and module_subsection match the supplied values.
     * Retrieve an MTS template subsection
     * @param template Mydex Template System template name. The endpoint matches this value against template_name.
     * @param module Mydex Template System module name. The endpoint matches this value against module_name.
     * @param subsection Mydex Template System module subsection name. The endpoint matches this value against module_subsection.
     */
    public getValidationMtsTemplateBySubsectionWithHttpInfo(template: string, module: string, subsection: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<MtsTemplateRecord>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getValidationMtsTemplateBySubsectionWithHttpInfo(template, module, subsection, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns records whose template_name, module_name and module_subsection match the supplied values.
     * Retrieve an MTS template subsection
     * @param template Mydex Template System template name. The endpoint matches this value against template_name.
     * @param module Mydex Template System module name. The endpoint matches this value against module_name.
     * @param subsection Mydex Template System module subsection name. The endpoint matches this value against module_subsection.
     */
    public getValidationMtsTemplateBySubsection(template: string, module: string, subsection: string, _options?: PromiseConfigurationOptions): Promise<Array<MtsTemplateRecord>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getValidationMtsTemplateBySubsection(template, module, subsection, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns all records from the Mydex Template System templates_features table, including template, module, subsection and route information.
     * Retrieve all MTS template records
     */
    public getValidationMtsTemplatesWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<MtsTemplateRecord>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getValidationMtsTemplatesWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Returns all records from the Mydex Template System templates_features table, including template, module, subsection and route information.
     * Retrieve all MTS template records
     */
    public getValidationMtsTemplates(_options?: PromiseConfigurationOptions): Promise<Array<MtsTemplateRecord>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getValidationMtsTemplates(observableOptions);
        return result.toPromise();
    }

    /**
     * Searches published MDS field machine names for values containing the supplied search term.
     * Search MDS field names
     * @param search Partial field machine name used to search published MDS fields.
     */
    public searchValidationMdsFieldsWithHttpInfo(search: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MdsFieldSearchResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.searchValidationMdsFieldsWithHttpInfo(search, observableOptions);
        return result.toPromise();
    }

    /**
     * Searches published MDS field machine names for values containing the supplied search term.
     * Search MDS field names
     * @param search Partial field machine name used to search published MDS fields.
     */
    public searchValidationMdsFields(search: string, _options?: PromiseConfigurationOptions): Promise<MdsFieldSearchResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.searchValidationMdsFields(search, observableOptions);
        return result.toPromise();
    }

    /**
     * Checks whether the supplied value matches an allowed value associated with the requested lookup. Matching is case-insensitive because the endpoint converts both stored values and the supplied value to uppercase. The result is returned as the string true or false.
     * Validate a value against a lookup field
     * @param fieldName Supported validation lookup field. Only lookup datasets currently intended to provide useful values through the Validations API are exposed here.
     * @param userInput Value to validate against the allowed values associated with the requested lookup.
     */
    public validateLookupValueWithHttpInfo(fieldName: 'bank_acc_type' | 'comm_type' | 'country' | 'dl_group' | 'dl_issuing_authority' | 'edu_org_type' | 'gender' | 'home_tenancy' | 'marital_status' | 'medication_dosage_units' | 'mode_of_study' | 'pronouns' | 'property_type' | 'race_ethnicity' | 'title' | 'utility_service', userInput: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LookupValidationResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.validateLookupValueWithHttpInfo(fieldName, userInput, observableOptions);
        return result.toPromise();
    }

    /**
     * Checks whether the supplied value matches an allowed value associated with the requested lookup. Matching is case-insensitive because the endpoint converts both stored values and the supplied value to uppercase. The result is returned as the string true or false.
     * Validate a value against a lookup field
     * @param fieldName Supported validation lookup field. Only lookup datasets currently intended to provide useful values through the Validations API are exposed here.
     * @param userInput Value to validate against the allowed values associated with the requested lookup.
     */
    public validateLookupValue(fieldName: 'bank_acc_type' | 'comm_type' | 'country' | 'dl_group' | 'dl_issuing_authority' | 'edu_org_type' | 'gender' | 'home_tenancy' | 'marital_status' | 'medication_dosage_units' | 'mode_of_study' | 'pronouns' | 'property_type' | 'race_ethnicity' | 'title' | 'utility_service', userInput: string, _options?: PromiseConfigurationOptions): Promise<LookupValidationResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.validateLookupValue(fieldName, userInput, observableOptions);
        return result.toPromise();
    }


}



