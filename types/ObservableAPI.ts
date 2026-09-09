import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, mergeConfiguration } from '../configuration'
import type { Middleware } from '../middleware';
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { ALISSApiRequestFactory, ALISSApiResponseProcessor} from "../apis/ALISSApi";
export class ObservableALISSApi {
    private requestFactory: ALISSApiRequestFactory;
    private responseProcessor: ALISSApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ALISSApiRequestFactory,
        responseProcessor?: ALISSApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ALISSApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ALISSApiResponseProcessor();
    }

    /**
     * Returns the number of distinct ALISS services matching the supplied structured filters.
     * Count matching ALISS services
     * @param xMrdScopes MRD service scope required for ALISS endpoints.
     * @param [filters] Structured filters used to search ALISS services. Supported datasets are services, organisations, categories, service_areas, locations, accessibility_features and community_groups. Each filter requires field, value and operator. Every filter except the final filter must also contain condition.
     */
    public countAlissServicesWithHttpInfo(xMrdScopes: 'aliss', filters?: SearchAlissServicesFiltersParameter, _options?: ConfigurationOptions): Observable<HttpInfo<Array<AlissServiceCount>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.countAlissServices(xMrdScopes, filters, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.countAlissServicesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the number of distinct ALISS services matching the supplied structured filters.
     * Count matching ALISS services
     * @param xMrdScopes MRD service scope required for ALISS endpoints.
     * @param [filters] Structured filters used to search ALISS services. Supported datasets are services, organisations, categories, service_areas, locations, accessibility_features and community_groups. Each filter requires field, value and operator. Every filter except the final filter must also contain condition.
     */
    public countAlissServices(xMrdScopes: 'aliss', filters?: SearchAlissServicesFiltersParameter, _options?: ConfigurationOptions): Observable<Array<AlissServiceCount>> {
        return this.countAlissServicesWithHttpInfo(xMrdScopes, filters, _options).pipe(map((apiResponse: HttpInfo<Array<AlissServiceCount>>) => apiResponse.data));
    }

    /**
     * Retrieve ALISS accessibility features
     * @param xMrdScopes MRD service scope required for ALISS endpoints.
     */
    public getAlissAccessibilityFeaturesWithHttpInfo(xMrdScopes: 'aliss', _options?: ConfigurationOptions): Observable<HttpInfo<Array<AlissNamedSlugItem>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAlissAccessibilityFeatures(xMrdScopes, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAlissAccessibilityFeaturesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve ALISS accessibility features
     * @param xMrdScopes MRD service scope required for ALISS endpoints.
     */
    public getAlissAccessibilityFeatures(xMrdScopes: 'aliss', _options?: ConfigurationOptions): Observable<Array<AlissNamedSlugItem>> {
        return this.getAlissAccessibilityFeaturesWithHttpInfo(xMrdScopes, _options).pipe(map((apiResponse: HttpInfo<Array<AlissNamedSlugItem>>) => apiResponse.data));
    }

    /**
     * Retrieve ALISS categories
     * @param xMrdScopes MRD service scope required for ALISS endpoints.
     */
    public getAlissCategoriesWithHttpInfo(xMrdScopes: 'aliss', _options?: ConfigurationOptions): Observable<HttpInfo<Array<AlissNamedSlugItem>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAlissCategories(xMrdScopes, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAlissCategoriesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve ALISS categories
     * @param xMrdScopes MRD service scope required for ALISS endpoints.
     */
    public getAlissCategories(xMrdScopes: 'aliss', _options?: ConfigurationOptions): Observable<Array<AlissNamedSlugItem>> {
        return this.getAlissCategoriesWithHttpInfo(xMrdScopes, _options).pipe(map((apiResponse: HttpInfo<Array<AlissNamedSlugItem>>) => apiResponse.data));
    }

    /**
     * Retrieve ALISS community groups
     * @param xMrdScopes MRD service scope required for ALISS endpoints.
     */
    public getAlissCommunityGroupsWithHttpInfo(xMrdScopes: 'aliss', _options?: ConfigurationOptions): Observable<HttpInfo<Array<AlissNamedSlugItem>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAlissCommunityGroups(xMrdScopes, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAlissCommunityGroupsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve ALISS community groups
     * @param xMrdScopes MRD service scope required for ALISS endpoints.
     */
    public getAlissCommunityGroups(xMrdScopes: 'aliss', _options?: ConfigurationOptions): Observable<Array<AlissNamedSlugItem>> {
        return this.getAlissCommunityGroupsWithHttpInfo(xMrdScopes, _options).pipe(map((apiResponse: HttpInfo<Array<AlissNamedSlugItem>>) => apiResponse.data));
    }

    /**
     * Retrieve ALISS organisations
     * @param xMrdScopes MRD service scope required for ALISS endpoints.
     */
    public getAlissOrganisationsWithHttpInfo(xMrdScopes: 'aliss', _options?: ConfigurationOptions): Observable<HttpInfo<Array<AlissNamedSlugItem>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAlissOrganisations(xMrdScopes, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAlissOrganisationsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve ALISS organisations
     * @param xMrdScopes MRD service scope required for ALISS endpoints.
     */
    public getAlissOrganisations(xMrdScopes: 'aliss', _options?: ConfigurationOptions): Observable<Array<AlissNamedSlugItem>> {
        return this.getAlissOrganisationsWithHttpInfo(xMrdScopes, _options).pipe(map((apiResponse: HttpInfo<Array<AlissNamedSlugItem>>) => apiResponse.data));
    }

    /**
     * Retrieve ALISS service areas
     * @param xMrdScopes MRD service scope required for ALISS endpoints.
     */
    public getAlissServiceAreasWithHttpInfo(xMrdScopes: 'aliss', _options?: ConfigurationOptions): Observable<HttpInfo<Array<AlissServiceAreaReference>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAlissServiceAreas(xMrdScopes, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAlissServiceAreasWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve ALISS service areas
     * @param xMrdScopes MRD service scope required for ALISS endpoints.
     */
    public getAlissServiceAreas(xMrdScopes: 'aliss', _options?: ConfigurationOptions): Observable<Array<AlissServiceAreaReference>> {
        return this.getAlissServiceAreasWithHttpInfo(xMrdScopes, _options).pipe(map((apiResponse: HttpInfo<Array<AlissServiceAreaReference>>) => apiResponse.data));
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
    public getAlissServicesByIdsWithHttpInfo(xMrdScopes: 'aliss', serviceIds: string, orderBy?: 'services.id' | 'services.name' | 'organisations.name', order?: 'ASC' | 'DESC', geojson?: boolean, format?: 'JSON' | 'XML', _options?: ConfigurationOptions): Observable<HttpInfo<Array<AlissService>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAlissServicesByIds(xMrdScopes, serviceIds, orderBy, order, geojson, format, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAlissServicesByIdsWithHttpInfo(rsp)));
            }));
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
    public getAlissServicesByIds(xMrdScopes: 'aliss', serviceIds: string, orderBy?: 'services.id' | 'services.name' | 'organisations.name', order?: 'ASC' | 'DESC', geojson?: boolean, format?: 'JSON' | 'XML', _options?: ConfigurationOptions): Observable<Array<AlissService>> {
        return this.getAlissServicesByIdsWithHttpInfo(xMrdScopes, serviceIds, orderBy, order, geojson, format, _options).pipe(map((apiResponse: HttpInfo<Array<AlissService>>) => apiResponse.data));
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
    public searchAlissServicesWithHttpInfo(xMrdScopes: 'aliss', filters?: SearchAlissServicesFiltersParameter, orderBy?: 'services.id' | 'services.name' | 'organisations.name', order?: 'ASC' | 'DESC', limit?: number, after?: string, before?: string, geojson?: boolean, format?: 'JSON' | 'XML', _options?: ConfigurationOptions): Observable<HttpInfo<Array<AlissService>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.searchAlissServices(xMrdScopes, filters, orderBy, order, limit, after, before, geojson, format, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchAlissServicesWithHttpInfo(rsp)));
            }));
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
    public searchAlissServices(xMrdScopes: 'aliss', filters?: SearchAlissServicesFiltersParameter, orderBy?: 'services.id' | 'services.name' | 'organisations.name', order?: 'ASC' | 'DESC', limit?: number, after?: string, before?: string, geojson?: boolean, format?: 'JSON' | 'XML', _options?: ConfigurationOptions): Observable<Array<AlissService>> {
        return this.searchAlissServicesWithHttpInfo(xMrdScopes, filters, orderBy, order, limit, after, before, geojson, format, _options).pipe(map((apiResponse: HttpInfo<Array<AlissService>>) => apiResponse.data));
    }

}

import { ConditionsApiRequestFactory, ConditionsApiResponseProcessor} from "../apis/ConditionsApi";
export class ObservableConditionsApi {
    private requestFactory: ConditionsApiRequestFactory;
    private responseProcessor: ConditionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ConditionsApiRequestFactory,
        responseProcessor?: ConditionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ConditionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ConditionsApiResponseProcessor();
    }

    /**
     * Returns a Conditions page identified by one route segment. The response may contain HTML by default. Use no_html to return processed plain text and nhs_links to return eligible original NHS URLs.
     * Retrieve a first-level Conditions page
     * @param xMrdScopes MRD service scope required for Conditions endpoints.
     * @param param1 First Conditions route segment.
     * @param [noHtml] Removes HTML markup from returned content. When supplied, this parameter must be set to \&#39;true\&#39;.
     * @param [nhsLinks] Replaces eligible MRD URLs with their NHS website equivalents. When supplied, this parameter must be set to \&#39;true\&#39;.
     */
    public getConditionLevelOneWithHttpInfo(xMrdScopes: 'conditions', param1: string, noHtml?: 'true', nhsLinks?: 'true', _options?: ConfigurationOptions): Observable<HttpInfo<ConditionResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getConditionLevelOne(xMrdScopes, param1, noHtml, nhsLinks, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getConditionLevelOneWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a Conditions page identified by one route segment. The response may contain HTML by default. Use no_html to return processed plain text and nhs_links to return eligible original NHS URLs.
     * Retrieve a first-level Conditions page
     * @param xMrdScopes MRD service scope required for Conditions endpoints.
     * @param param1 First Conditions route segment.
     * @param [noHtml] Removes HTML markup from returned content. When supplied, this parameter must be set to \&#39;true\&#39;.
     * @param [nhsLinks] Replaces eligible MRD URLs with their NHS website equivalents. When supplied, this parameter must be set to \&#39;true\&#39;.
     */
    public getConditionLevelOne(xMrdScopes: 'conditions', param1: string, noHtml?: 'true', nhsLinks?: 'true', _options?: ConfigurationOptions): Observable<ConditionResponse> {
        return this.getConditionLevelOneWithHttpInfo(xMrdScopes, param1, noHtml, nhsLinks, _options).pipe(map((apiResponse: HttpInfo<ConditionResponse>) => apiResponse.data));
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
    public getConditionLevelThreeWithHttpInfo(xMrdScopes: 'conditions', param1: string, param2: string, param3: string, noHtml?: 'true', nhsLinks?: 'true', _options?: ConfigurationOptions): Observable<HttpInfo<ConditionResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getConditionLevelThree(xMrdScopes, param1, param2, param3, noHtml, nhsLinks, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getConditionLevelThreeWithHttpInfo(rsp)));
            }));
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
    public getConditionLevelThree(xMrdScopes: 'conditions', param1: string, param2: string, param3: string, noHtml?: 'true', nhsLinks?: 'true', _options?: ConfigurationOptions): Observable<ConditionResponse> {
        return this.getConditionLevelThreeWithHttpInfo(xMrdScopes, param1, param2, param3, noHtml, nhsLinks, _options).pipe(map((apiResponse: HttpInfo<ConditionResponse>) => apiResponse.data));
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
    public getConditionLevelTwoWithHttpInfo(xMrdScopes: 'conditions', param1: string, param2: string, noHtml?: 'true', nhsLinks?: 'true', _options?: ConfigurationOptions): Observable<HttpInfo<ConditionResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getConditionLevelTwo(xMrdScopes, param1, param2, noHtml, nhsLinks, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getConditionLevelTwoWithHttpInfo(rsp)));
            }));
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
    public getConditionLevelTwo(xMrdScopes: 'conditions', param1: string, param2: string, noHtml?: 'true', nhsLinks?: 'true', _options?: ConfigurationOptions): Observable<ConditionResponse> {
        return this.getConditionLevelTwoWithHttpInfo(xMrdScopes, param1, param2, noHtml, nhsLinks, _options).pipe(map((apiResponse: HttpInfo<ConditionResponse>) => apiResponse.data));
    }

    /**
     * Returns absolute URLs for the routes available in the NHS Conditions dataset.
     * Retrieve available Conditions routes
     * @param xMrdScopes MRD service scope required for Conditions endpoints.
     */
    public getConditionRoutesWithHttpInfo(xMrdScopes: 'conditions', _options?: ConfigurationOptions): Observable<HttpInfo<ConditionsRouteListResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getConditionRoutes(xMrdScopes, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getConditionRoutesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns absolute URLs for the routes available in the NHS Conditions dataset.
     * Retrieve available Conditions routes
     * @param xMrdScopes MRD service scope required for Conditions endpoints.
     */
    public getConditionRoutes(xMrdScopes: 'conditions', _options?: ConfigurationOptions): Observable<ConditionsRouteListResponse> {
        return this.getConditionRoutesWithHttpInfo(xMrdScopes, _options).pipe(map((apiResponse: HttpInfo<ConditionsRouteListResponse>) => apiResponse.data));
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
    public searchConditionsWithHttpInfo(xMrdScopes: 'conditions', filters: Array<ConditionSearchFilter>, noHtml?: 'true', nhsLinks?: 'true', searchAll?: 'true', _options?: ConfigurationOptions): Observable<HttpInfo<ConditionsSearchResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.searchConditions(xMrdScopes, filters, noHtml, nhsLinks, searchAll, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchConditionsWithHttpInfo(rsp)));
            }));
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
    public searchConditions(xMrdScopes: 'conditions', filters: Array<ConditionSearchFilter>, noHtml?: 'true', nhsLinks?: 'true', searchAll?: 'true', _options?: ConfigurationOptions): Observable<ConditionsSearchResponse> {
        return this.searchConditionsWithHttpInfo(xMrdScopes, filters, noHtml, nhsLinks, searchAll, _options).pipe(map((apiResponse: HttpInfo<ConditionsSearchResponse>) => apiResponse.data));
    }

}

import { CountriesApiRequestFactory, CountriesApiResponseProcessor} from "../apis/CountriesApi";
export class ObservableCountriesApi {
    private requestFactory: CountriesApiRequestFactory;
    private responseProcessor: CountriesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CountriesApiRequestFactory,
        responseProcessor?: CountriesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CountriesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CountriesApiResponseProcessor();
    }

    /**
     * Returns all available countries. Without filters, the model returns the complete country list inside an additional outer array. When filters are supplied, the response is the filtered country list directly.
     * Retrieve all countries
     * @param xMrdScopes MRD service scope required for Countries endpoints.
     * @param [filters] Country fields to include in the response. The API accepts comma-separated values such as filters&#x3D;region,subregion,idd and PHP-style array values such as filters[]&#x3D;capital&amp;filters[]&#x3D;maps. Duplicate filters are removed.
     */
    public getAllCountriesWithHttpInfo(xMrdScopes: 'countries', filters?: Set<'cca2' | 'cca3' | 'ccn3' | 'flag' | 'status' | 'independent' | 'unMember' | 'region' | 'subregion' | 'landlocked' | 'area' | 'population' | 'fifa' | 'startOfWeek' | 'name' | 'maps' | 'flags' | 'coatOfArms' | 'capitalInfo' | 'postalCode' | 'capital' | 'altSpellings' | 'timezones' | 'continents' | 'languages' | 'currencies' | 'translations' | 'demonyms' | 'gini' | 'car' | 'idd'>, _options?: ConfigurationOptions): Observable<HttpInfo<GetAllCountries200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAllCountries(xMrdScopes, filters, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllCountriesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns all available countries. Without filters, the model returns the complete country list inside an additional outer array. When filters are supplied, the response is the filtered country list directly.
     * Retrieve all countries
     * @param xMrdScopes MRD service scope required for Countries endpoints.
     * @param [filters] Country fields to include in the response. The API accepts comma-separated values such as filters&#x3D;region,subregion,idd and PHP-style array values such as filters[]&#x3D;capital&amp;filters[]&#x3D;maps. Duplicate filters are removed.
     */
    public getAllCountries(xMrdScopes: 'countries', filters?: Set<'cca2' | 'cca3' | 'ccn3' | 'flag' | 'status' | 'independent' | 'unMember' | 'region' | 'subregion' | 'landlocked' | 'area' | 'population' | 'fifa' | 'startOfWeek' | 'name' | 'maps' | 'flags' | 'coatOfArms' | 'capitalInfo' | 'postalCode' | 'capital' | 'altSpellings' | 'timezones' | 'continents' | 'languages' | 'currencies' | 'translations' | 'demonyms' | 'gini' | 'car' | 'idd'>, _options?: ConfigurationOptions): Observable<GetAllCountries200Response> {
        return this.getAllCountriesWithHttpInfo(xMrdScopes, filters, _options).pipe(map((apiResponse: HttpInfo<GetAllCountries200Response>) => apiResponse.data));
    }

    /**
     * Returns the country matching the supplied lookup value. The value is converted to uppercase before lookup. Without filters, a matching country is returned inside an array. With filters, the filtered country object is returned directly. An unknown value returns an empty array.
     * Retrieve a country by CCA2 code
     * @param xMrdScopes MRD service scope required for Countries endpoints.
     * @param cca2 Country CCA2 lookup value. The supplied value is converted to uppercase before the database lookup. For example, ad is looked up as AD.
     * @param [filters] Country fields to include in the response. The API accepts comma-separated values such as filters&#x3D;region,subregion,idd and PHP-style array values such as filters[]&#x3D;capital&amp;filters[]&#x3D;maps. Duplicate filters are removed.
     */
    public getCountryByCca2WithHttpInfo(xMrdScopes: 'countries', cca2: string, filters?: Set<'cca2' | 'cca3' | 'ccn3' | 'flag' | 'status' | 'independent' | 'unMember' | 'region' | 'subregion' | 'landlocked' | 'area' | 'population' | 'fifa' | 'startOfWeek' | 'name' | 'maps' | 'flags' | 'coatOfArms' | 'capitalInfo' | 'postalCode' | 'capital' | 'altSpellings' | 'timezones' | 'continents' | 'languages' | 'currencies' | 'translations' | 'demonyms' | 'gini' | 'car' | 'idd'>, _options?: ConfigurationOptions): Observable<HttpInfo<GetCountryByCca2200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCountryByCca2(xMrdScopes, cca2, filters, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCountryByCca2WithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the country matching the supplied lookup value. The value is converted to uppercase before lookup. Without filters, a matching country is returned inside an array. With filters, the filtered country object is returned directly. An unknown value returns an empty array.
     * Retrieve a country by CCA2 code
     * @param xMrdScopes MRD service scope required for Countries endpoints.
     * @param cca2 Country CCA2 lookup value. The supplied value is converted to uppercase before the database lookup. For example, ad is looked up as AD.
     * @param [filters] Country fields to include in the response. The API accepts comma-separated values such as filters&#x3D;region,subregion,idd and PHP-style array values such as filters[]&#x3D;capital&amp;filters[]&#x3D;maps. Duplicate filters are removed.
     */
    public getCountryByCca2(xMrdScopes: 'countries', cca2: string, filters?: Set<'cca2' | 'cca3' | 'ccn3' | 'flag' | 'status' | 'independent' | 'unMember' | 'region' | 'subregion' | 'landlocked' | 'area' | 'population' | 'fifa' | 'startOfWeek' | 'name' | 'maps' | 'flags' | 'coatOfArms' | 'capitalInfo' | 'postalCode' | 'capital' | 'altSpellings' | 'timezones' | 'continents' | 'languages' | 'currencies' | 'translations' | 'demonyms' | 'gini' | 'car' | 'idd'>, _options?: ConfigurationOptions): Observable<GetCountryByCca2200Response> {
        return this.getCountryByCca2WithHttpInfo(xMrdScopes, cca2, filters, _options).pipe(map((apiResponse: HttpInfo<GetCountryByCca2200Response>) => apiResponse.data));
    }

}

import { LivewellApiRequestFactory, LivewellApiResponseProcessor} from "../apis/LivewellApi";
export class ObservableLivewellApi {
    private requestFactory: LivewellApiRequestFactory;
    private responseProcessor: LivewellApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LivewellApiRequestFactory,
        responseProcessor?: LivewellApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LivewellApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LivewellApiResponseProcessor();
    }

    /**
     * Returns a first-level Live Well route. no_html removes HTML markup and nhs_links rewrites eligible MRD links to NHS website links. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a first-level Live Well page
     * @param xMrdScopes MRD service scope required for Live Well endpoints.
     * @param param1 First Live Well route segment, normally identifying a top-level topic or category.
     * @param [noHtml] Removes HTML markup from returned Live Well content. When supplied, this parameter must be set to \&#39;true\&#39;.
     * @param [nhsLinks] Replaces eligible MRD API links with their NHS website equivalents. When supplied, this parameter must be set to \&#39;true\&#39;.
     */
    public getLivewellLevelOneWithHttpInfo(xMrdScopes: 'live-well', param1: string, noHtml?: 'true', nhsLinks?: 'true', _options?: ConfigurationOptions): Observable<HttpInfo<GetLivewellLevelOne200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getLivewellLevelOne(xMrdScopes, param1, noHtml, nhsLinks, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getLivewellLevelOneWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a first-level Live Well route. no_html removes HTML markup and nhs_links rewrites eligible MRD links to NHS website links. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a first-level Live Well page
     * @param xMrdScopes MRD service scope required for Live Well endpoints.
     * @param param1 First Live Well route segment, normally identifying a top-level topic or category.
     * @param [noHtml] Removes HTML markup from returned Live Well content. When supplied, this parameter must be set to \&#39;true\&#39;.
     * @param [nhsLinks] Replaces eligible MRD API links with their NHS website equivalents. When supplied, this parameter must be set to \&#39;true\&#39;.
     */
    public getLivewellLevelOne(xMrdScopes: 'live-well', param1: string, noHtml?: 'true', nhsLinks?: 'true', _options?: ConfigurationOptions): Observable<GetLivewellLevelOne200Response> {
        return this.getLivewellLevelOneWithHttpInfo(xMrdScopes, param1, noHtml, nhsLinks, _options).pipe(map((apiResponse: HttpInfo<GetLivewellLevelOne200Response>) => apiResponse.data));
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
    public getLivewellLevelThreeWithHttpInfo(xMrdScopes: 'live-well', param1: string, param2: string, param3: string, noHtml?: 'true', nhsLinks?: 'true', _options?: ConfigurationOptions): Observable<HttpInfo<GetLivewellLevelOne200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getLivewellLevelThree(xMrdScopes, param1, param2, param3, noHtml, nhsLinks, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getLivewellLevelThreeWithHttpInfo(rsp)));
            }));
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
    public getLivewellLevelThree(xMrdScopes: 'live-well', param1: string, param2: string, param3: string, noHtml?: 'true', nhsLinks?: 'true', _options?: ConfigurationOptions): Observable<GetLivewellLevelOne200Response> {
        return this.getLivewellLevelThreeWithHttpInfo(xMrdScopes, param1, param2, param3, noHtml, nhsLinks, _options).pipe(map((apiResponse: HttpInfo<GetLivewellLevelOne200Response>) => apiResponse.data));
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
    public getLivewellLevelTwoWithHttpInfo(xMrdScopes: 'live-well', param1: string, param2: string, noHtml?: 'true', nhsLinks?: 'true', _options?: ConfigurationOptions): Observable<HttpInfo<GetLivewellLevelOne200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getLivewellLevelTwo(xMrdScopes, param1, param2, noHtml, nhsLinks, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getLivewellLevelTwoWithHttpInfo(rsp)));
            }));
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
    public getLivewellLevelTwo(xMrdScopes: 'live-well', param1: string, param2: string, noHtml?: 'true', nhsLinks?: 'true', _options?: ConfigurationOptions): Observable<GetLivewellLevelOne200Response> {
        return this.getLivewellLevelTwoWithHttpInfo(xMrdScopes, param1, param2, noHtml, nhsLinks, _options).pipe(map((apiResponse: HttpInfo<GetLivewellLevelOne200Response>) => apiResponse.data));
    }

    /**
     * Returns the available routes within the NHS Live Well dataset.
     * Retrieve available Live Well routes
     * @param xMrdScopes MRD service scope required for Live Well endpoints.
     */
    public getLivewellRoutesWithHttpInfo(xMrdScopes: 'live-well', _options?: ConfigurationOptions): Observable<HttpInfo<LivewellRoutesResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getLivewellRoutes(xMrdScopes, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getLivewellRoutesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the available routes within the NHS Live Well dataset.
     * Retrieve available Live Well routes
     * @param xMrdScopes MRD service scope required for Live Well endpoints.
     */
    public getLivewellRoutes(xMrdScopes: 'live-well', _options?: ConfigurationOptions): Observable<LivewellRoutesResponse> {
        return this.getLivewellRoutesWithHttpInfo(xMrdScopes, _options).pipe(map((apiResponse: HttpInfo<LivewellRoutesResponse>) => apiResponse.data));
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
    public searchLivewellWithHttpInfo(xMrdScopes: 'live-well', filters: Array<LivewellSearchFilter>, noHtml?: 'true', nhsLinks?: 'true', searchAll?: 'true', _options?: ConfigurationOptions): Observable<HttpInfo<Array<LivewellData>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.searchLivewell(xMrdScopes, filters, noHtml, nhsLinks, searchAll, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchLivewellWithHttpInfo(rsp)));
            }));
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
    public searchLivewell(xMrdScopes: 'live-well', filters: Array<LivewellSearchFilter>, noHtml?: 'true', nhsLinks?: 'true', searchAll?: 'true', _options?: ConfigurationOptions): Observable<Array<LivewellData>> {
        return this.searchLivewellWithHttpInfo(xMrdScopes, filters, noHtml, nhsLinks, searchAll, _options).pipe(map((apiResponse: HttpInfo<Array<LivewellData>>) => apiResponse.data));
    }

}

import { MeasurementsApiRequestFactory, MeasurementsApiResponseProcessor} from "../apis/MeasurementsApi";
export class ObservableMeasurementsApi {
    private requestFactory: MeasurementsApiRequestFactory;
    private responseProcessor: MeasurementsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MeasurementsApiRequestFactory,
        responseProcessor?: MeasurementsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MeasurementsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MeasurementsApiResponseProcessor();
    }

    /**
     * Returns the activity type matching the supplied activity_type_id.
     * Retrieve an activity type by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getActivityTypeWithHttpInfo(xMrdScopes: 'measurements', id: number, _options?: ConfigurationOptions): Observable<HttpInfo<MeasurementActivityTypeResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getActivityType(xMrdScopes, id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getActivityTypeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the activity type matching the supplied activity_type_id.
     * Retrieve an activity type by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getActivityType(xMrdScopes: 'measurements', id: number, _options?: ConfigurationOptions): Observable<MeasurementActivityTypeResult> {
        return this.getActivityTypeWithHttpInfo(xMrdScopes, id, _options).pipe(map((apiResponse: HttpInfo<MeasurementActivityTypeResult>) => apiResponse.data));
    }

    /**
     * Returns activity types including the database record ID, activity type ID and description.
     * Retrieve all activity types
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getActivityTypesWithHttpInfo(xMrdScopes: 'measurements', _options?: ConfigurationOptions): Observable<HttpInfo<MeasurementActivityTypesResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getActivityTypes(xMrdScopes, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getActivityTypesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns activity types including the database record ID, activity type ID and description.
     * Retrieve all activity types
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getActivityTypes(xMrdScopes: 'measurements', _options?: ConfigurationOptions): Observable<MeasurementActivityTypesResult> {
        return this.getActivityTypesWithHttpInfo(xMrdScopes, _options).pipe(map((apiResponse: HttpInfo<MeasurementActivityTypesResult>) => apiResponse.data));
    }

    /**
     * Returns the blood pressure measurement type matching the supplied blood_pressure_measurement_id.
     * Retrieve a blood pressure measurement type by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getBloodPressureMeasurementWithHttpInfo(xMrdScopes: 'measurements', id: number, _options?: ConfigurationOptions): Observable<HttpInfo<MeasurementBloodPressureMeasurementResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getBloodPressureMeasurement(xMrdScopes, id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBloodPressureMeasurementWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the blood pressure measurement type matching the supplied blood_pressure_measurement_id.
     * Retrieve a blood pressure measurement type by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getBloodPressureMeasurement(xMrdScopes: 'measurements', id: number, _options?: ConfigurationOptions): Observable<MeasurementBloodPressureMeasurementResult> {
        return this.getBloodPressureMeasurementWithHttpInfo(xMrdScopes, id, _options).pipe(map((apiResponse: HttpInfo<MeasurementBloodPressureMeasurementResult>) => apiResponse.data));
    }

    /**
     * Returns blood pressure measurement types including the database record ID, blood pressure measurement ID and description.
     * Retrieve all blood pressure measurement types
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getBloodPressureMeasurementsWithHttpInfo(xMrdScopes: 'measurements', _options?: ConfigurationOptions): Observable<HttpInfo<MeasurementBloodPressureMeasurementsResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getBloodPressureMeasurements(xMrdScopes, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBloodPressureMeasurementsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns blood pressure measurement types including the database record ID, blood pressure measurement ID and description.
     * Retrieve all blood pressure measurement types
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getBloodPressureMeasurements(xMrdScopes: 'measurements', _options?: ConfigurationOptions): Observable<MeasurementBloodPressureMeasurementsResult> {
        return this.getBloodPressureMeasurementsWithHttpInfo(xMrdScopes, _options).pipe(map((apiResponse: HttpInfo<MeasurementBloodPressureMeasurementsResult>) => apiResponse.data));
    }

    /**
     * Returns the blood specimen source matching the supplied blood_specimen_source_id.
     * Retrieve a blood specimen source by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getBloodSpecimenSourceWithHttpInfo(xMrdScopes: 'measurements', id: number, _options?: ConfigurationOptions): Observable<HttpInfo<MeasurementBloodSpecimenSourceResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getBloodSpecimenSource(xMrdScopes, id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBloodSpecimenSourceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the blood specimen source matching the supplied blood_specimen_source_id.
     * Retrieve a blood specimen source by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getBloodSpecimenSource(xMrdScopes: 'measurements', id: number, _options?: ConfigurationOptions): Observable<MeasurementBloodSpecimenSourceResult> {
        return this.getBloodSpecimenSourceWithHttpInfo(xMrdScopes, id, _options).pipe(map((apiResponse: HttpInfo<MeasurementBloodSpecimenSourceResult>) => apiResponse.data));
    }

    /**
     * Returns blood specimen sources including the database record ID, blood specimen source ID and description.
     * Retrieve all blood specimen sources
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getBloodSpecimenSourcesWithHttpInfo(xMrdScopes: 'measurements', _options?: ConfigurationOptions): Observable<HttpInfo<MeasurementBloodSpecimenSourcesResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getBloodSpecimenSources(xMrdScopes, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBloodSpecimenSourcesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns blood specimen sources including the database record ID, blood specimen source ID and description.
     * Retrieve all blood specimen sources
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getBloodSpecimenSources(xMrdScopes: 'measurements', _options?: ConfigurationOptions): Observable<MeasurementBloodSpecimenSourcesResult> {
        return this.getBloodSpecimenSourcesWithHttpInfo(xMrdScopes, _options).pipe(map((apiResponse: HttpInfo<MeasurementBloodSpecimenSourcesResult>) => apiResponse.data));
    }

    /**
     * Returns the body position matching the supplied body_position_id.
     * Retrieve a body position by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getBodyPositionWithHttpInfo(xMrdScopes: 'measurements', id: number, _options?: ConfigurationOptions): Observable<HttpInfo<MeasurementBodyPositionResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getBodyPosition(xMrdScopes, id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBodyPositionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the body position matching the supplied body_position_id.
     * Retrieve a body position by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getBodyPosition(xMrdScopes: 'measurements', id: number, _options?: ConfigurationOptions): Observable<MeasurementBodyPositionResult> {
        return this.getBodyPositionWithHttpInfo(xMrdScopes, id, _options).pipe(map((apiResponse: HttpInfo<MeasurementBodyPositionResult>) => apiResponse.data));
    }

    /**
     * Returns body positions including the database record ID, body position ID and description.
     * Retrieve all body positions
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getBodyPositionsWithHttpInfo(xMrdScopes: 'measurements', _options?: ConfigurationOptions): Observable<HttpInfo<MeasurementBodyPositionsResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getBodyPositions(xMrdScopes, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBodyPositionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns body positions including the database record ID, body position ID and description.
     * Retrieve all body positions
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getBodyPositions(xMrdScopes: 'measurements', _options?: ConfigurationOptions): Observable<MeasurementBodyPositionsResult> {
        return this.getBodyPositionsWithHttpInfo(xMrdScopes, _options).pipe(map((apiResponse: HttpInfo<MeasurementBodyPositionsResult>) => apiResponse.data));
    }

    /**
     * Returns the body temperature location matching the supplied body_temperature_location_id.
     * Retrieve a body temperature location by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getBodyTemperatureLocationWithHttpInfo(xMrdScopes: 'measurements', id: number, _options?: ConfigurationOptions): Observable<HttpInfo<MeasurementBodyTemperatureLocationResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getBodyTemperatureLocation(xMrdScopes, id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBodyTemperatureLocationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the body temperature location matching the supplied body_temperature_location_id.
     * Retrieve a body temperature location by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getBodyTemperatureLocation(xMrdScopes: 'measurements', id: number, _options?: ConfigurationOptions): Observable<MeasurementBodyTemperatureLocationResult> {
        return this.getBodyTemperatureLocationWithHttpInfo(xMrdScopes, id, _options).pipe(map((apiResponse: HttpInfo<MeasurementBodyTemperatureLocationResult>) => apiResponse.data));
    }

    /**
     * Returns body temperature locations including the database record ID, body temperature location ID and description.
     * Retrieve all body temperature locations
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getBodyTemperatureLocationsWithHttpInfo(xMrdScopes: 'measurements', _options?: ConfigurationOptions): Observable<HttpInfo<MeasurementBodyTemperatureLocationsResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getBodyTemperatureLocations(xMrdScopes, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBodyTemperatureLocationsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns body temperature locations including the database record ID, body temperature location ID and description.
     * Retrieve all body temperature locations
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getBodyTemperatureLocations(xMrdScopes: 'measurements', _options?: ConfigurationOptions): Observable<MeasurementBodyTemperatureLocationsResult> {
        return this.getBodyTemperatureLocationsWithHttpInfo(xMrdScopes, _options).pipe(map((apiResponse: HttpInfo<MeasurementBodyTemperatureLocationsResult>) => apiResponse.data));
    }

    /**
     * Returns the cervical dilation matching the supplied cervical_dilation_id.
     * Retrieve a cervical dilation by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getCervicalDilationWithHttpInfo(xMrdScopes: 'measurements', id: number, _options?: ConfigurationOptions): Observable<HttpInfo<MeasurementCervicalDilationResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCervicalDilation(xMrdScopes, id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCervicalDilationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the cervical dilation matching the supplied cervical_dilation_id.
     * Retrieve a cervical dilation by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getCervicalDilation(xMrdScopes: 'measurements', id: number, _options?: ConfigurationOptions): Observable<MeasurementCervicalDilationResult> {
        return this.getCervicalDilationWithHttpInfo(xMrdScopes, id, _options).pipe(map((apiResponse: HttpInfo<MeasurementCervicalDilationResult>) => apiResponse.data));
    }

    /**
     * Returns cervical dilations including the database record ID, cervical dilation ID and description.
     * Retrieve all cervical dilations
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getCervicalDilationsWithHttpInfo(xMrdScopes: 'measurements', _options?: ConfigurationOptions): Observable<HttpInfo<MeasurementCervicalDilationsResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCervicalDilations(xMrdScopes, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCervicalDilationsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns cervical dilations including the database record ID, cervical dilation ID and description.
     * Retrieve all cervical dilations
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getCervicalDilations(xMrdScopes: 'measurements', _options?: ConfigurationOptions): Observable<MeasurementCervicalDilationsResult> {
        return this.getCervicalDilationsWithHttpInfo(xMrdScopes, _options).pipe(map((apiResponse: HttpInfo<MeasurementCervicalDilationsResult>) => apiResponse.data));
    }

    /**
     * Returns the cervical firmness value matching the supplied cervical_firmness_id.
     * Retrieve a cervical firmness value by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getCervicalFirmnessWithHttpInfo(xMrdScopes: 'measurements', id: number, _options?: ConfigurationOptions): Observable<HttpInfo<MeasurementCervicalFirmnessResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCervicalFirmness(xMrdScopes, id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCervicalFirmnessWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the cervical firmness value matching the supplied cervical_firmness_id.
     * Retrieve a cervical firmness value by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getCervicalFirmness(xMrdScopes: 'measurements', id: number, _options?: ConfigurationOptions): Observable<MeasurementCervicalFirmnessResult> {
        return this.getCervicalFirmnessWithHttpInfo(xMrdScopes, id, _options).pipe(map((apiResponse: HttpInfo<MeasurementCervicalFirmnessResult>) => apiResponse.data));
    }

    /**
     * Returns cervical firmness values including the database record ID, cervical firmness ID and description.
     * Retrieve all cervical firmness values
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getCervicalFirmnessValuesWithHttpInfo(xMrdScopes: 'measurements', _options?: ConfigurationOptions): Observable<HttpInfo<MeasurementCervicalFirmnessValuesResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCervicalFirmnessValues(xMrdScopes, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCervicalFirmnessValuesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns cervical firmness values including the database record ID, cervical firmness ID and description.
     * Retrieve all cervical firmness values
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getCervicalFirmnessValues(xMrdScopes: 'measurements', _options?: ConfigurationOptions): Observable<MeasurementCervicalFirmnessValuesResult> {
        return this.getCervicalFirmnessValuesWithHttpInfo(xMrdScopes, _options).pipe(map((apiResponse: HttpInfo<MeasurementCervicalFirmnessValuesResult>) => apiResponse.data));
    }

    /**
     * Returns the cervical mucus amount matching the supplied cervical_mucus_amount_id.
     * Retrieve a cervical mucus amount by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getCervicalMucusAmountWithHttpInfo(xMrdScopes: 'measurements', id: number, _options?: ConfigurationOptions): Observable<HttpInfo<MeasurementCervicalMucusAmountResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCervicalMucusAmount(xMrdScopes, id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCervicalMucusAmountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the cervical mucus amount matching the supplied cervical_mucus_amount_id.
     * Retrieve a cervical mucus amount by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getCervicalMucusAmount(xMrdScopes: 'measurements', id: number, _options?: ConfigurationOptions): Observable<MeasurementCervicalMucusAmountResult> {
        return this.getCervicalMucusAmountWithHttpInfo(xMrdScopes, id, _options).pipe(map((apiResponse: HttpInfo<MeasurementCervicalMucusAmountResult>) => apiResponse.data));
    }

    /**
     * Returns cervical mucus amounts including the database record ID, cervical mucus amount ID and description.
     * Retrieve all cervical mucus amounts
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getCervicalMucusAmountsWithHttpInfo(xMrdScopes: 'measurements', _options?: ConfigurationOptions): Observable<HttpInfo<MeasurementCervicalMucusAmountsResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCervicalMucusAmounts(xMrdScopes, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCervicalMucusAmountsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns cervical mucus amounts including the database record ID, cervical mucus amount ID and description.
     * Retrieve all cervical mucus amounts
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getCervicalMucusAmounts(xMrdScopes: 'measurements', _options?: ConfigurationOptions): Observable<MeasurementCervicalMucusAmountsResult> {
        return this.getCervicalMucusAmountsWithHttpInfo(xMrdScopes, _options).pipe(map((apiResponse: HttpInfo<MeasurementCervicalMucusAmountsResult>) => apiResponse.data));
    }

    /**
     * Returns the cervical mucus texture matching the supplied cervical_mucus_texture_id.
     * Retrieve a cervical mucus texture by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getCervicalMucusTextureWithHttpInfo(xMrdScopes: 'measurements', id: number, _options?: ConfigurationOptions): Observable<HttpInfo<MeasurementCervicalMucusTextureResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCervicalMucusTexture(xMrdScopes, id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCervicalMucusTextureWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the cervical mucus texture matching the supplied cervical_mucus_texture_id.
     * Retrieve a cervical mucus texture by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getCervicalMucusTexture(xMrdScopes: 'measurements', id: number, _options?: ConfigurationOptions): Observable<MeasurementCervicalMucusTextureResult> {
        return this.getCervicalMucusTextureWithHttpInfo(xMrdScopes, id, _options).pipe(map((apiResponse: HttpInfo<MeasurementCervicalMucusTextureResult>) => apiResponse.data));
    }

    /**
     * Returns cervical mucus textures including the database record ID, cervical mucus texture ID and description.
     * Retrieve all cervical mucus textures
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getCervicalMucusTexturesWithHttpInfo(xMrdScopes: 'measurements', _options?: ConfigurationOptions): Observable<HttpInfo<MeasurementCervicalMucusTexturesResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCervicalMucusTextures(xMrdScopes, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCervicalMucusTexturesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns cervical mucus textures including the database record ID, cervical mucus texture ID and description.
     * Retrieve all cervical mucus textures
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getCervicalMucusTextures(xMrdScopes: 'measurements', _options?: ConfigurationOptions): Observable<MeasurementCervicalMucusTexturesResult> {
        return this.getCervicalMucusTexturesWithHttpInfo(xMrdScopes, _options).pipe(map((apiResponse: HttpInfo<MeasurementCervicalMucusTexturesResult>) => apiResponse.data));
    }

    /**
     * Returns the cervical position matching the supplied cervical_position_id.
     * Retrieve a cervical position by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getCervicalPositionWithHttpInfo(xMrdScopes: 'measurements', id: number, _options?: ConfigurationOptions): Observable<HttpInfo<MeasurementCervicalPositionResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCervicalPosition(xMrdScopes, id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCervicalPositionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the cervical position matching the supplied cervical_position_id.
     * Retrieve a cervical position by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getCervicalPosition(xMrdScopes: 'measurements', id: number, _options?: ConfigurationOptions): Observable<MeasurementCervicalPositionResult> {
        return this.getCervicalPositionWithHttpInfo(xMrdScopes, id, _options).pipe(map((apiResponse: HttpInfo<MeasurementCervicalPositionResult>) => apiResponse.data));
    }

    /**
     * Returns cervical positions including the database record ID, cervical position ID and description.
     * Retrieve all cervical positions
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getCervicalPositionsWithHttpInfo(xMrdScopes: 'measurements', _options?: ConfigurationOptions): Observable<HttpInfo<MeasurementCervicalPositionsResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCervicalPositions(xMrdScopes, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCervicalPositionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns cervical positions including the database record ID, cervical position ID and description.
     * Retrieve all cervical positions
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getCervicalPositions(xMrdScopes: 'measurements', _options?: ConfigurationOptions): Observable<MeasurementCervicalPositionsResult> {
        return this.getCervicalPositionsWithHttpInfo(xMrdScopes, _options).pipe(map((apiResponse: HttpInfo<MeasurementCervicalPositionsResult>) => apiResponse.data));
    }

    /**
     * Returns the exercise type matching the supplied exercise_type_name.
     * Retrieve an exercise type by name
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param exerciseTypeName Exercise type name used to retrieve a specific exercise-type record.
     */
    public getExerciseTypeByNameWithHttpInfo(xMrdScopes: 'measurements', exerciseTypeName: string, _options?: ConfigurationOptions): Observable<HttpInfo<MeasurementExerciseTypeResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getExerciseTypeByName(xMrdScopes, exerciseTypeName, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getExerciseTypeByNameWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the exercise type matching the supplied exercise_type_name.
     * Retrieve an exercise type by name
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param exerciseTypeName Exercise type name used to retrieve a specific exercise-type record.
     */
    public getExerciseTypeByName(xMrdScopes: 'measurements', exerciseTypeName: string, _options?: ConfigurationOptions): Observable<MeasurementExerciseTypeResult> {
        return this.getExerciseTypeByNameWithHttpInfo(xMrdScopes, exerciseTypeName, _options).pipe(map((apiResponse: HttpInfo<MeasurementExerciseTypeResult>) => apiResponse.data));
    }

    /**
     * Returns exercise types including the database record ID, exercise type name and description.
     * Retrieve all exercise types
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getExerciseTypesWithHttpInfo(xMrdScopes: 'measurements', _options?: ConfigurationOptions): Observable<HttpInfo<MeasurementExerciseTypesResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getExerciseTypes(xMrdScopes, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getExerciseTypesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns exercise types including the database record ID, exercise type name and description.
     * Retrieve all exercise types
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getExerciseTypes(xMrdScopes: 'measurements', _options?: ConfigurationOptions): Observable<MeasurementExerciseTypesResult> {
        return this.getExerciseTypesWithHttpInfo(xMrdScopes, _options).pipe(map((apiResponse: HttpInfo<MeasurementExerciseTypesResult>) => apiResponse.data));
    }

    /**
     * Returns the meal type matching the supplied meal_type_id.
     * Retrieve a meal type by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getMealTypeWithHttpInfo(xMrdScopes: 'measurements', id: number, _options?: ConfigurationOptions): Observable<HttpInfo<MeasurementMealTypeResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getMealType(xMrdScopes, id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMealTypeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the meal type matching the supplied meal_type_id.
     * Retrieve a meal type by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getMealType(xMrdScopes: 'measurements', id: number, _options?: ConfigurationOptions): Observable<MeasurementMealTypeResult> {
        return this.getMealTypeWithHttpInfo(xMrdScopes, id, _options).pipe(map((apiResponse: HttpInfo<MeasurementMealTypeResult>) => apiResponse.data));
    }

    /**
     * Returns meal types including the database record ID, meal type ID and description.
     * Retrieve all meal types
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getMealTypesWithHttpInfo(xMrdScopes: 'measurements', _options?: ConfigurationOptions): Observable<HttpInfo<MeasurementMealTypesResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getMealTypes(xMrdScopes, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMealTypesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns meal types including the database record ID, meal type ID and description.
     * Retrieve all meal types
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getMealTypes(xMrdScopes: 'measurements', _options?: ConfigurationOptions): Observable<MeasurementMealTypesResult> {
        return this.getMealTypesWithHttpInfo(xMrdScopes, _options).pipe(map((apiResponse: HttpInfo<MeasurementMealTypesResult>) => apiResponse.data));
    }

    /**
     * Returns the measurement group matching the supplied database record ID.
     * Retrieve a measurement group by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getMeasurementGroupWithHttpInfo(xMrdScopes: 'measurements', id: number, _options?: ConfigurationOptions): Observable<HttpInfo<MeasurementGroupResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getMeasurementGroup(xMrdScopes, id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMeasurementGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the measurement group matching the supplied database record ID.
     * Retrieve a measurement group by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getMeasurementGroup(xMrdScopes: 'measurements', id: number, _options?: ConfigurationOptions): Observable<MeasurementGroupResult> {
        return this.getMeasurementGroupWithHttpInfo(xMrdScopes, id, _options).pipe(map((apiResponse: HttpInfo<MeasurementGroupResult>) => apiResponse.data));
    }

    /**
     * Returns the available measurement groups and their definitions.
     * Retrieve all measurement groups
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getMeasurementGroupsWithHttpInfo(xMrdScopes: 'measurements', _options?: ConfigurationOptions): Observable<HttpInfo<MeasurementGroupsResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getMeasurementGroups(xMrdScopes, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMeasurementGroupsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the available measurement groups and their definitions.
     * Retrieve all measurement groups
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getMeasurementGroups(xMrdScopes: 'measurements', _options?: ConfigurationOptions): Observable<MeasurementGroupsResult> {
        return this.getMeasurementGroupsWithHttpInfo(xMrdScopes, _options).pipe(map((apiResponse: HttpInfo<MeasurementGroupsResult>) => apiResponse.data));
    }

    /**
     * Returns the measurement definition matching the supplied measurement ID.
     * Retrieve a measurement type by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getMeasurementTypeWithHttpInfo(xMrdScopes: 'measurements', id: number, _options?: ConfigurationOptions): Observable<HttpInfo<MeasurementTypeResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getMeasurementType(xMrdScopes, id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMeasurementTypeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the measurement definition matching the supplied measurement ID.
     * Retrieve a measurement type by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getMeasurementType(xMrdScopes: 'measurements', id: number, _options?: ConfigurationOptions): Observable<MeasurementTypeResult> {
        return this.getMeasurementTypeWithHttpInfo(xMrdScopes, id, _options).pipe(map((apiResponse: HttpInfo<MeasurementTypeResult>) => apiResponse.data));
    }

    /**
     * Returns measurement definitions including the measurement name, group and unit.
     * Retrieve all measurement types
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getMeasurementTypesWithHttpInfo(xMrdScopes: 'measurements', _options?: ConfigurationOptions): Observable<HttpInfo<MeasurementTypesResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getMeasurementTypes(xMrdScopes, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMeasurementTypesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns measurement definitions including the measurement name, group and unit.
     * Retrieve all measurement types
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getMeasurementTypes(xMrdScopes: 'measurements', _options?: ConfigurationOptions): Observable<MeasurementTypesResult> {
        return this.getMeasurementTypesWithHttpInfo(xMrdScopes, _options).pipe(map((apiResponse: HttpInfo<MeasurementTypesResult>) => apiResponse.data));
    }

    /**
     * Returns the unit of measure matching the supplied database record ID.
     * Retrieve a unit of measure by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getMeasurementUnitWithHttpInfo(xMrdScopes: 'measurements', id: number, _options?: ConfigurationOptions): Observable<HttpInfo<MeasurementUnitResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getMeasurementUnit(xMrdScopes, id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMeasurementUnitWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the unit of measure matching the supplied database record ID.
     * Retrieve a unit of measure by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getMeasurementUnit(xMrdScopes: 'measurements', id: number, _options?: ConfigurationOptions): Observable<MeasurementUnitResult> {
        return this.getMeasurementUnitWithHttpInfo(xMrdScopes, id, _options).pipe(map((apiResponse: HttpInfo<MeasurementUnitResult>) => apiResponse.data));
    }

    /**
     * Returns available measurement units and their definitions.
     * Retrieve all units of measure
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getMeasurementUnitsWithHttpInfo(xMrdScopes: 'measurements', _options?: ConfigurationOptions): Observable<HttpInfo<MeasurementUnitsResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getMeasurementUnits(xMrdScopes, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMeasurementUnitsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns available measurement units and their definitions.
     * Retrieve all units of measure
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getMeasurementUnits(xMrdScopes: 'measurements', _options?: ConfigurationOptions): Observable<MeasurementUnitsResult> {
        return this.getMeasurementUnitsWithHttpInfo(xMrdScopes, _options).pipe(map((apiResponse: HttpInfo<MeasurementUnitsResult>) => apiResponse.data));
    }

    /**
     * Returns the resistance type matching the supplied resistance_type_id.
     * Retrieve a resistance type by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getResistanceTypeWithHttpInfo(xMrdScopes: 'measurements', id: number, _options?: ConfigurationOptions): Observable<HttpInfo<MeasurementResistanceTypeResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getResistanceType(xMrdScopes, id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getResistanceTypeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the resistance type matching the supplied resistance_type_id.
     * Retrieve a resistance type by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getResistanceType(xMrdScopes: 'measurements', id: number, _options?: ConfigurationOptions): Observable<MeasurementResistanceTypeResult> {
        return this.getResistanceTypeWithHttpInfo(xMrdScopes, id, _options).pipe(map((apiResponse: HttpInfo<MeasurementResistanceTypeResult>) => apiResponse.data));
    }

    /**
     * Returns resistance types including the database record ID, resistance type ID and description.
     * Retrieve all resistance types
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getResistanceTypesWithHttpInfo(xMrdScopes: 'measurements', _options?: ConfigurationOptions): Observable<HttpInfo<MeasurementResistanceTypesResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getResistanceTypes(xMrdScopes, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getResistanceTypesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns resistance types including the database record ID, resistance type ID and description.
     * Retrieve all resistance types
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getResistanceTypes(xMrdScopes: 'measurements', _options?: ConfigurationOptions): Observable<MeasurementResistanceTypesResult> {
        return this.getResistanceTypesWithHttpInfo(xMrdScopes, _options).pipe(map((apiResponse: HttpInfo<MeasurementResistanceTypesResult>) => apiResponse.data));
    }

    /**
     * Returns the sleep segment type matching the supplied sleep_segment_type_id.
     * Retrieve a sleep segment type by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getSleepSegmentTypeWithHttpInfo(xMrdScopes: 'measurements', id: number, _options?: ConfigurationOptions): Observable<HttpInfo<MeasurementSleepSegmentTypeResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSleepSegmentType(xMrdScopes, id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSleepSegmentTypeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the sleep segment type matching the supplied sleep_segment_type_id.
     * Retrieve a sleep segment type by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getSleepSegmentType(xMrdScopes: 'measurements', id: number, _options?: ConfigurationOptions): Observable<MeasurementSleepSegmentTypeResult> {
        return this.getSleepSegmentTypeWithHttpInfo(xMrdScopes, id, _options).pipe(map((apiResponse: HttpInfo<MeasurementSleepSegmentTypeResult>) => apiResponse.data));
    }

    /**
     * Returns sleep segment types including the database record ID, sleep segment type ID and description.
     * Retrieve all sleep segment types
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getSleepSegmentTypesWithHttpInfo(xMrdScopes: 'measurements', _options?: ConfigurationOptions): Observable<HttpInfo<MeasurementSleepSegmentTypesResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSleepSegmentTypes(xMrdScopes, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSleepSegmentTypesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns sleep segment types including the database record ID, sleep segment type ID and description.
     * Retrieve all sleep segment types
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getSleepSegmentTypes(xMrdScopes: 'measurements', _options?: ConfigurationOptions): Observable<MeasurementSleepSegmentTypesResult> {
        return this.getSleepSegmentTypesWithHttpInfo(xMrdScopes, _options).pipe(map((apiResponse: HttpInfo<MeasurementSleepSegmentTypesResult>) => apiResponse.data));
    }

    /**
     * Returns the temporal relation to meal matching the supplied temporal_relation_to_meal_id.
     * Retrieve a temporal relation to meals by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getTemporalRelationToMealWithHttpInfo(xMrdScopes: 'measurements', id: number, _options?: ConfigurationOptions): Observable<HttpInfo<MeasurementTemporalRelationToMealResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getTemporalRelationToMeal(xMrdScopes, id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTemporalRelationToMealWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the temporal relation to meal matching the supplied temporal_relation_to_meal_id.
     * Retrieve a temporal relation to meals by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getTemporalRelationToMeal(xMrdScopes: 'measurements', id: number, _options?: ConfigurationOptions): Observable<MeasurementTemporalRelationToMealResult> {
        return this.getTemporalRelationToMealWithHttpInfo(xMrdScopes, id, _options).pipe(map((apiResponse: HttpInfo<MeasurementTemporalRelationToMealResult>) => apiResponse.data));
    }

    /**
     * Returns the temporal relation to sleep matching the supplied temporal_relation_to_sleep_id.
     * Retrieve a temporal relation to sleep by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getTemporalRelationToSleepWithHttpInfo(xMrdScopes: 'measurements', id: number, _options?: ConfigurationOptions): Observable<HttpInfo<MeasurementTemporalRelationToSleepResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getTemporalRelationToSleep(xMrdScopes, id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTemporalRelationToSleepWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the temporal relation to sleep matching the supplied temporal_relation_to_sleep_id.
     * Retrieve a temporal relation to sleep by ID
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     * @param id Numeric lookup identifier used by the requested Measurements endpoint. The response may serialize identifiers as strings.
     */
    public getTemporalRelationToSleep(xMrdScopes: 'measurements', id: number, _options?: ConfigurationOptions): Observable<MeasurementTemporalRelationToSleepResult> {
        return this.getTemporalRelationToSleepWithHttpInfo(xMrdScopes, id, _options).pipe(map((apiResponse: HttpInfo<MeasurementTemporalRelationToSleepResult>) => apiResponse.data));
    }

    /**
     * Returns temporal relations to meals including the database record ID, relation ID and description.
     * Retrieve all temporal relations to meals
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getTemporalRelationsToMealWithHttpInfo(xMrdScopes: 'measurements', _options?: ConfigurationOptions): Observable<HttpInfo<MeasurementTemporalRelationsToMealResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getTemporalRelationsToMeal(xMrdScopes, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTemporalRelationsToMealWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns temporal relations to meals including the database record ID, relation ID and description.
     * Retrieve all temporal relations to meals
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getTemporalRelationsToMeal(xMrdScopes: 'measurements', _options?: ConfigurationOptions): Observable<MeasurementTemporalRelationsToMealResult> {
        return this.getTemporalRelationsToMealWithHttpInfo(xMrdScopes, _options).pipe(map((apiResponse: HttpInfo<MeasurementTemporalRelationsToMealResult>) => apiResponse.data));
    }

    /**
     * Returns temporal relations to sleep including the database record ID, relation ID and description.
     * Retrieve all temporal relations to sleep
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getTemporalRelationsToSleepWithHttpInfo(xMrdScopes: 'measurements', _options?: ConfigurationOptions): Observable<HttpInfo<MeasurementTemporalRelationsToSleepResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getTemporalRelationsToSleep(xMrdScopes, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTemporalRelationsToSleepWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns temporal relations to sleep including the database record ID, relation ID and description.
     * Retrieve all temporal relations to sleep
     * @param xMrdScopes MRD service scope required for Measurements endpoints.
     */
    public getTemporalRelationsToSleep(xMrdScopes: 'measurements', _options?: ConfigurationOptions): Observable<MeasurementTemporalRelationsToSleepResult> {
        return this.getTemporalRelationsToSleepWithHttpInfo(xMrdScopes, _options).pipe(map((apiResponse: HttpInfo<MeasurementTemporalRelationsToSleepResult>) => apiResponse.data));
    }

}

import { MedicinesApiRequestFactory, MedicinesApiResponseProcessor} from "../apis/MedicinesApi";
export class ObservableMedicinesApi {
    private requestFactory: MedicinesApiRequestFactory;
    private responseProcessor: MedicinesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MedicinesApiRequestFactory,
        responseProcessor?: MedicinesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MedicinesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MedicinesApiResponseProcessor();
    }

    /**
     * Returns a first-level Medicines page. HTML content is returned by default. no_html removes markup, while nhs_links rewrites eligible MRD links to NHS website links. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a Medicine page
     * @param xMrdScopes MRD service scope required for Medicines endpoints.
     * @param param1 First Medicines route segment, normally identifying a medicine, medicine category or medicine family.
     * @param [noHtml] When supplied, removes HTML markup from content text. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave HTML unchanged.
     * @param [nhsLinks] When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     */
    public getMedicineLevelOneWithHttpInfo(xMrdScopes: 'medicines', param1: string, noHtml?: 'true', nhsLinks?: 'true', _options?: ConfigurationOptions): Observable<HttpInfo<GetMedicineLevelOne200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getMedicineLevelOne(xMrdScopes, param1, noHtml, nhsLinks, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMedicineLevelOneWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a first-level Medicines page. HTML content is returned by default. no_html removes markup, while nhs_links rewrites eligible MRD links to NHS website links. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a Medicine page
     * @param xMrdScopes MRD service scope required for Medicines endpoints.
     * @param param1 First Medicines route segment, normally identifying a medicine, medicine category or medicine family.
     * @param [noHtml] When supplied, removes HTML markup from content text. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave HTML unchanged.
     * @param [nhsLinks] When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     */
    public getMedicineLevelOne(xMrdScopes: 'medicines', param1: string, noHtml?: 'true', nhsLinks?: 'true', _options?: ConfigurationOptions): Observable<GetMedicineLevelOne200Response> {
        return this.getMedicineLevelOneWithHttpInfo(xMrdScopes, param1, noHtml, nhsLinks, _options).pipe(map((apiResponse: HttpInfo<GetMedicineLevelOne200Response>) => apiResponse.data));
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
    public getMedicineLevelThreeWithHttpInfo(xMrdScopes: 'medicines', param1: string, param2: string, param3: string, noHtml?: 'true', nhsLinks?: 'true', _options?: ConfigurationOptions): Observable<HttpInfo<GetMedicineLevelOne200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getMedicineLevelThree(xMrdScopes, param1, param2, param3, noHtml, nhsLinks, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMedicineLevelThreeWithHttpInfo(rsp)));
            }));
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
    public getMedicineLevelThree(xMrdScopes: 'medicines', param1: string, param2: string, param3: string, noHtml?: 'true', nhsLinks?: 'true', _options?: ConfigurationOptions): Observable<GetMedicineLevelOne200Response> {
        return this.getMedicineLevelThreeWithHttpInfo(xMrdScopes, param1, param2, param3, noHtml, nhsLinks, _options).pipe(map((apiResponse: HttpInfo<GetMedicineLevelOne200Response>) => apiResponse.data));
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
    public getMedicineLevelTwoWithHttpInfo(xMrdScopes: 'medicines', param1: string, param2: string, noHtml?: 'true', nhsLinks?: 'true', _options?: ConfigurationOptions): Observable<HttpInfo<GetMedicineLevelOne200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getMedicineLevelTwo(xMrdScopes, param1, param2, noHtml, nhsLinks, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMedicineLevelTwoWithHttpInfo(rsp)));
            }));
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
    public getMedicineLevelTwo(xMrdScopes: 'medicines', param1: string, param2: string, noHtml?: 'true', nhsLinks?: 'true', _options?: ConfigurationOptions): Observable<GetMedicineLevelOne200Response> {
        return this.getMedicineLevelTwoWithHttpInfo(xMrdScopes, param1, param2, noHtml, nhsLinks, _options).pipe(map((apiResponse: HttpInfo<GetMedicineLevelOne200Response>) => apiResponse.data));
    }

    /**
     * Returns the available routes within the NHS Medicines dataset.
     * Retrieve available Medicines routes
     * @param xMrdScopes MRD service scope required for Medicines endpoints.
     */
    public getMedicinesRoutesWithHttpInfo(xMrdScopes: 'medicines', _options?: ConfigurationOptions): Observable<HttpInfo<MedicinesRoutesResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getMedicinesRoutes(xMrdScopes, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMedicinesRoutesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the available routes within the NHS Medicines dataset.
     * Retrieve available Medicines routes
     * @param xMrdScopes MRD service scope required for Medicines endpoints.
     */
    public getMedicinesRoutes(xMrdScopes: 'medicines', _options?: ConfigurationOptions): Observable<MedicinesRoutesResponse> {
        return this.getMedicinesRoutesWithHttpInfo(xMrdScopes, _options).pipe(map((apiResponse: HttpInfo<MedicinesRoutesResponse>) => apiResponse.data));
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
    public searchMedicinesWithHttpInfo(xMrdScopes: 'medicines', filters: Array<MedicinesSearchFilter>, noHtml?: 'true', nhsLinks?: 'true', searchAll?: 'true', _options?: ConfigurationOptions): Observable<HttpInfo<Array<MedicineData>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.searchMedicines(xMrdScopes, filters, noHtml, nhsLinks, searchAll, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchMedicinesWithHttpInfo(rsp)));
            }));
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
    public searchMedicines(xMrdScopes: 'medicines', filters: Array<MedicinesSearchFilter>, noHtml?: 'true', nhsLinks?: 'true', searchAll?: 'true', _options?: ConfigurationOptions): Observable<Array<MedicineData>> {
        return this.searchMedicinesWithHttpInfo(xMrdScopes, filters, noHtml, nhsLinks, searchAll, _options).pipe(map((apiResponse: HttpInfo<Array<MedicineData>>) => apiResponse.data));
    }

}

import { MentalHealthApiRequestFactory, MentalHealthApiResponseProcessor} from "../apis/MentalHealthApi";
export class ObservableMentalHealthApi {
    private requestFactory: MentalHealthApiRequestFactory;
    private responseProcessor: MentalHealthApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MentalHealthApiRequestFactory,
        responseProcessor?: MentalHealthApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MentalHealthApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MentalHealthApiResponseProcessor();
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
    public getMentalHealthLevelFourWithHttpInfo(xMrdScopes: 'mental-health', param1: string, param2: string, param3: string, param4: string, noHtml?: 'true', nhsLinks?: 'true', _options?: ConfigurationOptions): Observable<HttpInfo<GetMentalHealthLevelOne200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getMentalHealthLevelFour(xMrdScopes, param1, param2, param3, param4, noHtml, nhsLinks, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMentalHealthLevelFourWithHttpInfo(rsp)));
            }));
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
    public getMentalHealthLevelFour(xMrdScopes: 'mental-health', param1: string, param2: string, param3: string, param4: string, noHtml?: 'true', nhsLinks?: 'true', _options?: ConfigurationOptions): Observable<GetMentalHealthLevelOne200Response> {
        return this.getMentalHealthLevelFourWithHttpInfo(xMrdScopes, param1, param2, param3, param4, noHtml, nhsLinks, _options).pipe(map((apiResponse: HttpInfo<GetMentalHealthLevelOne200Response>) => apiResponse.data));
    }

    /**
     * Returns a first-level Mental Health route. no_html=true removes HTML markup and nhs_links=true rewrites eligible MRD API links to NHS website links. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a Mental Health page
     * @param xMrdScopes MRD service scope required for Mental Health endpoints.
     * @param param1 First Mental Health route segment, normally identifying a Mental Health topic, category or section.
     * @param [noHtml] When supplied, removes HTML markup from returned Mental Health content. The only accepted value is \&#39;true\&#39;. Omit the parameter to retain HTML.
     * @param [nhsLinks] When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     */
    public getMentalHealthLevelOneWithHttpInfo(xMrdScopes: 'mental-health', param1: string, noHtml?: 'true', nhsLinks?: 'true', _options?: ConfigurationOptions): Observable<HttpInfo<GetMentalHealthLevelOne200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getMentalHealthLevelOne(xMrdScopes, param1, noHtml, nhsLinks, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMentalHealthLevelOneWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a first-level Mental Health route. no_html=true removes HTML markup and nhs_links=true rewrites eligible MRD API links to NHS website links. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a Mental Health page
     * @param xMrdScopes MRD service scope required for Mental Health endpoints.
     * @param param1 First Mental Health route segment, normally identifying a Mental Health topic, category or section.
     * @param [noHtml] When supplied, removes HTML markup from returned Mental Health content. The only accepted value is \&#39;true\&#39;. Omit the parameter to retain HTML.
     * @param [nhsLinks] When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     */
    public getMentalHealthLevelOne(xMrdScopes: 'mental-health', param1: string, noHtml?: 'true', nhsLinks?: 'true', _options?: ConfigurationOptions): Observable<GetMentalHealthLevelOne200Response> {
        return this.getMentalHealthLevelOneWithHttpInfo(xMrdScopes, param1, noHtml, nhsLinks, _options).pipe(map((apiResponse: HttpInfo<GetMentalHealthLevelOne200Response>) => apiResponse.data));
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
    public getMentalHealthLevelThreeWithHttpInfo(xMrdScopes: 'mental-health', param1: string, param2: string, param3: string, noHtml?: 'true', nhsLinks?: 'true', _options?: ConfigurationOptions): Observable<HttpInfo<GetMentalHealthLevelOne200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getMentalHealthLevelThree(xMrdScopes, param1, param2, param3, noHtml, nhsLinks, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMentalHealthLevelThreeWithHttpInfo(rsp)));
            }));
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
    public getMentalHealthLevelThree(xMrdScopes: 'mental-health', param1: string, param2: string, param3: string, noHtml?: 'true', nhsLinks?: 'true', _options?: ConfigurationOptions): Observable<GetMentalHealthLevelOne200Response> {
        return this.getMentalHealthLevelThreeWithHttpInfo(xMrdScopes, param1, param2, param3, noHtml, nhsLinks, _options).pipe(map((apiResponse: HttpInfo<GetMentalHealthLevelOne200Response>) => apiResponse.data));
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
    public getMentalHealthLevelTwoWithHttpInfo(xMrdScopes: 'mental-health', param1: string, param2: string, noHtml?: 'true', nhsLinks?: 'true', _options?: ConfigurationOptions): Observable<HttpInfo<GetMentalHealthLevelOne200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getMentalHealthLevelTwo(xMrdScopes, param1, param2, noHtml, nhsLinks, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMentalHealthLevelTwoWithHttpInfo(rsp)));
            }));
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
    public getMentalHealthLevelTwo(xMrdScopes: 'mental-health', param1: string, param2: string, noHtml?: 'true', nhsLinks?: 'true', _options?: ConfigurationOptions): Observable<GetMentalHealthLevelOne200Response> {
        return this.getMentalHealthLevelTwoWithHttpInfo(xMrdScopes, param1, param2, noHtml, nhsLinks, _options).pipe(map((apiResponse: HttpInfo<GetMentalHealthLevelOne200Response>) => apiResponse.data));
    }

    /**
     * Returns the available routes within the NHS Mental Health dataset.
     * Retrieve available Mental Health routes
     * @param xMrdScopes MRD service scope required for Mental Health endpoints.
     */
    public getMentalHealthRoutesWithHttpInfo(xMrdScopes: 'mental-health', _options?: ConfigurationOptions): Observable<HttpInfo<MentalHealthRoutesResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getMentalHealthRoutes(xMrdScopes, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMentalHealthRoutesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the available routes within the NHS Mental Health dataset.
     * Retrieve available Mental Health routes
     * @param xMrdScopes MRD service scope required for Mental Health endpoints.
     */
    public getMentalHealthRoutes(xMrdScopes: 'mental-health', _options?: ConfigurationOptions): Observable<MentalHealthRoutesResponse> {
        return this.getMentalHealthRoutesWithHttpInfo(xMrdScopes, _options).pipe(map((apiResponse: HttpInfo<MentalHealthRoutesResponse>) => apiResponse.data));
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
    public searchMentalHealthWithHttpInfo(xMrdScopes: 'mental-health', filters: Array<MentalHealthSearchFilter>, noHtml?: 'true', nhsLinks?: 'true', searchAll?: 'true', _options?: ConfigurationOptions): Observable<HttpInfo<Array<MentalHealthData>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.searchMentalHealth(xMrdScopes, filters, noHtml, nhsLinks, searchAll, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchMentalHealthWithHttpInfo(rsp)));
            }));
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
    public searchMentalHealth(xMrdScopes: 'mental-health', filters: Array<MentalHealthSearchFilter>, noHtml?: 'true', nhsLinks?: 'true', searchAll?: 'true', _options?: ConfigurationOptions): Observable<Array<MentalHealthData>> {
        return this.searchMentalHealthWithHttpInfo(xMrdScopes, filters, noHtml, nhsLinks, searchAll, _options).pipe(map((apiResponse: HttpInfo<Array<MentalHealthData>>) => apiResponse.data));
    }

}

import { PregnancyApiRequestFactory, PregnancyApiResponseProcessor} from "../apis/PregnancyApi";
export class ObservablePregnancyApi {
    private requestFactory: PregnancyApiRequestFactory;
    private responseProcessor: PregnancyApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PregnancyApiRequestFactory,
        responseProcessor?: PregnancyApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PregnancyApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PregnancyApiResponseProcessor();
    }

    /**
     * Returns a first-level Pregnancy route. no_html=true removes HTML markup, while nhs_links=true rewrites eligible MRD API URLs to NHS website URLs. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a Pregnancy page
     * @param xMrdScopes MRD service scope required for Pregnancy endpoints.
     * @param param1 First Pregnancy route segment, normally identifying a Pregnancy topic, category or section.
     * @param [noHtml] When supplied, removes HTML markup from returned Pregnancy content. The only accepted value is \&#39;true\&#39;. Omit the parameter to retain HTML.
     * @param [nhsLinks] When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     */
    public getPregnancyLevelOneWithHttpInfo(xMrdScopes: 'pregnancy', param1: string, noHtml?: 'true', nhsLinks?: 'true', _options?: ConfigurationOptions): Observable<HttpInfo<GetPregnancyLevelOne200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getPregnancyLevelOne(xMrdScopes, param1, noHtml, nhsLinks, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPregnancyLevelOneWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a first-level Pregnancy route. no_html=true removes HTML markup, while nhs_links=true rewrites eligible MRD API URLs to NHS website URLs. A route that does not exist returns an application-level not-found object with HTTP 200.
     * Retrieve a Pregnancy page
     * @param xMrdScopes MRD service scope required for Pregnancy endpoints.
     * @param param1 First Pregnancy route segment, normally identifying a Pregnancy topic, category or section.
     * @param [noHtml] When supplied, removes HTML markup from returned Pregnancy content. The only accepted value is \&#39;true\&#39;. Omit the parameter to retain HTML.
     * @param [nhsLinks] When supplied, eligible MRD API links are replaced with their equivalent NHS website links. The only accepted value is \&#39;true\&#39;. Omit the parameter to leave links in their default form.
     */
    public getPregnancyLevelOne(xMrdScopes: 'pregnancy', param1: string, noHtml?: 'true', nhsLinks?: 'true', _options?: ConfigurationOptions): Observable<GetPregnancyLevelOne200Response> {
        return this.getPregnancyLevelOneWithHttpInfo(xMrdScopes, param1, noHtml, nhsLinks, _options).pipe(map((apiResponse: HttpInfo<GetPregnancyLevelOne200Response>) => apiResponse.data));
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
    public getPregnancyLevelThreeWithHttpInfo(xMrdScopes: 'pregnancy', param1: string, param2: string, param3: string, noHtml?: 'true', nhsLinks?: 'true', _options?: ConfigurationOptions): Observable<HttpInfo<GetPregnancyLevelOne200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getPregnancyLevelThree(xMrdScopes, param1, param2, param3, noHtml, nhsLinks, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPregnancyLevelThreeWithHttpInfo(rsp)));
            }));
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
    public getPregnancyLevelThree(xMrdScopes: 'pregnancy', param1: string, param2: string, param3: string, noHtml?: 'true', nhsLinks?: 'true', _options?: ConfigurationOptions): Observable<GetPregnancyLevelOne200Response> {
        return this.getPregnancyLevelThreeWithHttpInfo(xMrdScopes, param1, param2, param3, noHtml, nhsLinks, _options).pipe(map((apiResponse: HttpInfo<GetPregnancyLevelOne200Response>) => apiResponse.data));
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
    public getPregnancyLevelTwoWithHttpInfo(xMrdScopes: 'pregnancy', param1: string, param2: string, noHtml?: 'true', nhsLinks?: 'true', _options?: ConfigurationOptions): Observable<HttpInfo<GetPregnancyLevelOne200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getPregnancyLevelTwo(xMrdScopes, param1, param2, noHtml, nhsLinks, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPregnancyLevelTwoWithHttpInfo(rsp)));
            }));
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
    public getPregnancyLevelTwo(xMrdScopes: 'pregnancy', param1: string, param2: string, noHtml?: 'true', nhsLinks?: 'true', _options?: ConfigurationOptions): Observable<GetPregnancyLevelOne200Response> {
        return this.getPregnancyLevelTwoWithHttpInfo(xMrdScopes, param1, param2, noHtml, nhsLinks, _options).pipe(map((apiResponse: HttpInfo<GetPregnancyLevelOne200Response>) => apiResponse.data));
    }

    /**
     * Returns the available routes within the NHS Pregnancy dataset.
     * Retrieve available Pregnancy routes
     * @param xMrdScopes MRD service scope required for Pregnancy endpoints.
     */
    public getPregnancyRoutesWithHttpInfo(xMrdScopes: 'pregnancy', _options?: ConfigurationOptions): Observable<HttpInfo<PregnancyRoutesResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getPregnancyRoutes(xMrdScopes, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPregnancyRoutesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the available routes within the NHS Pregnancy dataset.
     * Retrieve available Pregnancy routes
     * @param xMrdScopes MRD service scope required for Pregnancy endpoints.
     */
    public getPregnancyRoutes(xMrdScopes: 'pregnancy', _options?: ConfigurationOptions): Observable<PregnancyRoutesResponse> {
        return this.getPregnancyRoutesWithHttpInfo(xMrdScopes, _options).pipe(map((apiResponse: HttpInfo<PregnancyRoutesResponse>) => apiResponse.data));
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
    public searchPregnancyWithHttpInfo(xMrdScopes: 'pregnancy', filters: Array<PregnancySearchFilter>, noHtml?: 'true', nhsLinks?: 'true', searchAll?: 'true', _options?: ConfigurationOptions): Observable<HttpInfo<Array<PregnancyData>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.searchPregnancy(xMrdScopes, filters, noHtml, nhsLinks, searchAll, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchPregnancyWithHttpInfo(rsp)));
            }));
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
    public searchPregnancy(xMrdScopes: 'pregnancy', filters: Array<PregnancySearchFilter>, noHtml?: 'true', nhsLinks?: 'true', searchAll?: 'true', _options?: ConfigurationOptions): Observable<Array<PregnancyData>> {
        return this.searchPregnancyWithHttpInfo(xMrdScopes, filters, noHtml, nhsLinks, searchAll, _options).pipe(map((apiResponse: HttpInfo<Array<PregnancyData>>) => apiResponse.data));
    }

}

import { SearchApiRequestFactory, SearchApiResponseProcessor} from "../apis/SearchApi";
export class ObservableSearchApi {
    private requestFactory: SearchApiRequestFactory;
    private responseProcessor: SearchApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SearchApiRequestFactory,
        responseProcessor?: SearchApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SearchApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SearchApiResponseProcessor();
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
    public searchMrdWithHttpInfo(xMrdScopes: string, filters: Array<SearchFilter>, page?: number, all?: string, limit?: number, _options?: ConfigurationOptions): Observable<HttpInfo<SearchMrd200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.searchMrd(xMrdScopes, filters, page, all, limit, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchMrdWithHttpInfo(rsp)));
            }));
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
    public searchMrd(xMrdScopes: string, filters: Array<SearchFilter>, page?: number, all?: string, limit?: number, _options?: ConfigurationOptions): Observable<SearchMrd200Response> {
        return this.searchMrdWithHttpInfo(xMrdScopes, filters, page, all, limit, _options).pipe(map((apiResponse: HttpInfo<SearchMrd200Response>) => apiResponse.data));
    }

}

import { ValidationsApiRequestFactory, ValidationsApiResponseProcessor} from "../apis/ValidationsApi";
export class ObservableValidationsApi {
    private requestFactory: ValidationsApiRequestFactory;
    private responseProcessor: ValidationsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ValidationsApiRequestFactory,
        responseProcessor?: ValidationsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ValidationsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ValidationsApiResponseProcessor();
    }

    /**
     * Returns allowed values from the requested validation lookup. Most lookup tables return an array of strings. Structured lookup tables such as race_ethnicity return an array of objects. The field name must map to a supported lu_<field_name> lookup table; country is additionally supported from the Countries database.
     * Retrieve allowed values for a lookup field
     * @param fieldName Supported validation lookup field. Only lookup datasets currently intended to provide useful values through the Validations API are exposed here.
     */
    public getValidationLookupValuesWithHttpInfo(fieldName: 'bank_acc_type' | 'comm_type' | 'country' | 'dl_group' | 'dl_issuing_authority' | 'edu_org_type' | 'gender' | 'home_tenancy' | 'marital_status' | 'medication_dosage_units' | 'mode_of_study' | 'pronouns' | 'property_type' | 'race_ethnicity' | 'title' | 'utility_service', _options?: ConfigurationOptions): Observable<HttpInfo<LookupAllowedValuesResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getValidationLookupValues(fieldName, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getValidationLookupValuesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns allowed values from the requested validation lookup. Most lookup tables return an array of strings. Structured lookup tables such as race_ethnicity return an array of objects. The field name must map to a supported lu_<field_name> lookup table; country is additionally supported from the Countries database.
     * Retrieve allowed values for a lookup field
     * @param fieldName Supported validation lookup field. Only lookup datasets currently intended to provide useful values through the Validations API are exposed here.
     */
    public getValidationLookupValues(fieldName: 'bank_acc_type' | 'comm_type' | 'country' | 'dl_group' | 'dl_issuing_authority' | 'edu_org_type' | 'gender' | 'home_tenancy' | 'marital_status' | 'medication_dosage_units' | 'mode_of_study' | 'pronouns' | 'property_type' | 'race_ethnicity' | 'title' | 'utility_service', _options?: ConfigurationOptions): Observable<LookupAllowedValuesResponse> {
        return this.getValidationLookupValuesWithHttpInfo(fieldName, _options).pipe(map((apiResponse: HttpInfo<LookupAllowedValuesResponse>) => apiResponse.data));
    }

    /**
     * Returns all published datasets grouped dynamically by dataset status. Each dataset includes its PDS file type, derived deployment environment and extended information for its published fields.
     * Retrieve all MDS datasets with extended field information
     */
    public getValidationMdsAllDatasetsAndFieldsWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<{ [key: string]: Array<MdsAllDatasetWithFields>; }>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getValidationMdsAllDatasetsAndFields(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getValidationMdsAllDatasetsAndFieldsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns all published datasets grouped dynamically by dataset status. Each dataset includes its PDS file type, derived deployment environment and extended information for its published fields.
     * Retrieve all MDS datasets with extended field information
     */
    public getValidationMdsAllDatasetsAndFields(_options?: ConfigurationOptions): Observable<{ [key: string]: Array<MdsAllDatasetWithFields>; }> {
        return this.getValidationMdsAllDatasetsAndFieldsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<{ [key: string]: Array<MdsAllDatasetWithFields>; }>) => apiResponse.data));
    }

    /**
     * Returns an object keyed by field machine name containing the field name, display name and data type for fields belonging to the requested dataset.
     * Retrieve field types for an MDS dataset
     * @param dataset MDS dataset machine name.
     */
    public getValidationMdsDatasetFieldTypesWithHttpInfo(dataset: string, _options?: ConfigurationOptions): Observable<HttpInfo<{ [key: string]: MdsFieldType; }>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getValidationMdsDatasetFieldTypes(dataset, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getValidationMdsDatasetFieldTypesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns an object keyed by field machine name containing the field name, display name and data type for fields belonging to the requested dataset.
     * Retrieve field types for an MDS dataset
     * @param dataset MDS dataset machine name.
     */
    public getValidationMdsDatasetFieldTypes(dataset: string, _options?: ConfigurationOptions): Observable<{ [key: string]: MdsFieldType; }> {
        return this.getValidationMdsDatasetFieldTypesWithHttpInfo(dataset, _options).pipe(map((apiResponse: HttpInfo<{ [key: string]: MdsFieldType; }>) => apiResponse.data));
    }

    /**
     * Returns an object keyed by field machine name containing extended definitions for published fields belonging to the requested dataset.
     * Retrieve full field definitions for an MDS dataset
     * @param dataset MDS dataset machine name.
     */
    public getValidationMdsDatasetFieldsWithHttpInfo(dataset: string, _options?: ConfigurationOptions): Observable<HttpInfo<{ [key: string]: MdsFieldDetails; }>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getValidationMdsDatasetFields(dataset, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getValidationMdsDatasetFieldsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns an object keyed by field machine name containing extended definitions for published fields belonging to the requested dataset.
     * Retrieve full field definitions for an MDS dataset
     * @param dataset MDS dataset machine name.
     */
    public getValidationMdsDatasetFields(dataset: string, _options?: ConfigurationOptions): Observable<{ [key: string]: MdsFieldDetails; }> {
        return this.getValidationMdsDatasetFieldsWithHttpInfo(dataset, _options).pipe(map((apiResponse: HttpInfo<{ [key: string]: MdsFieldDetails; }>) => apiResponse.data));
    }

    /**
     * Returns published MDS datasets including their machine name, display name and status.
     * Retrieve MDS datasets
     */
    public getValidationMdsDatasetsWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<Array<MdsDatasetSummary>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getValidationMdsDatasets(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getValidationMdsDatasetsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns published MDS datasets including their machine name, display name and status.
     * Retrieve MDS datasets
     */
    public getValidationMdsDatasets(_options?: ConfigurationOptions): Observable<Array<MdsDatasetSummary>> {
        return this.getValidationMdsDatasetsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<MdsDatasetSummary>>) => apiResponse.data));
    }

    /**
     * Returns published datasets grouped dynamically by dataset status. Each dataset contains its machine name, display name, status, PDS file type and a map of published fields containing field name, display name and data type.
     * Retrieve MDS datasets and basic field information
     */
    public getValidationMdsDatasetsAndFieldsWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<{ [key: string]: Array<MdsDatasetWithFields>; }>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getValidationMdsDatasetsAndFields(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getValidationMdsDatasetsAndFieldsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns published datasets grouped dynamically by dataset status. Each dataset contains its machine name, display name, status, PDS file type and a map of published fields containing field name, display name and data type.
     * Retrieve MDS datasets and basic field information
     */
    public getValidationMdsDatasetsAndFields(_options?: ConfigurationOptions): Observable<{ [key: string]: Array<MdsDatasetWithFields>; }> {
        return this.getValidationMdsDatasetsAndFieldsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<{ [key: string]: Array<MdsDatasetWithFields>; }>) => apiResponse.data));
    }

    /**
     * Returns published datasets matching the supplied dataset status.
     * Retrieve MDS datasets by one status
     * @param status1 First MDS dataset status to include.
     */
    public getValidationMdsDatasetsByOneStatusWithHttpInfo(status1: 'Live' | 'In Development' | 'Implement' | 'Hold', _options?: ConfigurationOptions): Observable<HttpInfo<Array<MdsDatasetSummary>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getValidationMdsDatasetsByOneStatus(status1, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getValidationMdsDatasetsByOneStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns published datasets matching the supplied dataset status.
     * Retrieve MDS datasets by one status
     * @param status1 First MDS dataset status to include.
     */
    public getValidationMdsDatasetsByOneStatus(status1: 'Live' | 'In Development' | 'Implement' | 'Hold', _options?: ConfigurationOptions): Observable<Array<MdsDatasetSummary>> {
        return this.getValidationMdsDatasetsByOneStatusWithHttpInfo(status1, _options).pipe(map((apiResponse: HttpInfo<Array<MdsDatasetSummary>>) => apiResponse.data));
    }

    /**
     * Returns published datasets matching any of the supplied dataset statuses.
     * Retrieve MDS datasets by three statuses
     * @param status1 First MDS dataset status to include.
     * @param status2 Second MDS dataset status to include.
     * @param status3 Third MDS dataset status to include.
     */
    public getValidationMdsDatasetsByThreeStatusesWithHttpInfo(status1: 'Live' | 'In Development' | 'Implement' | 'Hold', status2: 'Live' | 'In Development' | 'Implement' | 'Hold', status3: 'Live' | 'In Development' | 'Implement' | 'Hold', _options?: ConfigurationOptions): Observable<HttpInfo<Array<MdsDatasetSummary>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getValidationMdsDatasetsByThreeStatuses(status1, status2, status3, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getValidationMdsDatasetsByThreeStatusesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns published datasets matching any of the supplied dataset statuses.
     * Retrieve MDS datasets by three statuses
     * @param status1 First MDS dataset status to include.
     * @param status2 Second MDS dataset status to include.
     * @param status3 Third MDS dataset status to include.
     */
    public getValidationMdsDatasetsByThreeStatuses(status1: 'Live' | 'In Development' | 'Implement' | 'Hold', status2: 'Live' | 'In Development' | 'Implement' | 'Hold', status3: 'Live' | 'In Development' | 'Implement' | 'Hold', _options?: ConfigurationOptions): Observable<Array<MdsDatasetSummary>> {
        return this.getValidationMdsDatasetsByThreeStatusesWithHttpInfo(status1, status2, status3, _options).pipe(map((apiResponse: HttpInfo<Array<MdsDatasetSummary>>) => apiResponse.data));
    }

    /**
     * Returns published datasets matching either of the supplied dataset statuses.
     * Retrieve MDS datasets by two statuses
     * @param status1 First MDS dataset status to include.
     * @param status2 Second MDS dataset status to include.
     */
    public getValidationMdsDatasetsByTwoStatusesWithHttpInfo(status1: 'Live' | 'In Development' | 'Implement' | 'Hold', status2: 'Live' | 'In Development' | 'Implement' | 'Hold', _options?: ConfigurationOptions): Observable<HttpInfo<Array<MdsDatasetSummary>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getValidationMdsDatasetsByTwoStatuses(status1, status2, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getValidationMdsDatasetsByTwoStatusesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns published datasets matching either of the supplied dataset statuses.
     * Retrieve MDS datasets by two statuses
     * @param status1 First MDS dataset status to include.
     * @param status2 Second MDS dataset status to include.
     */
    public getValidationMdsDatasetsByTwoStatuses(status1: 'Live' | 'In Development' | 'Implement' | 'Hold', status2: 'Live' | 'In Development' | 'Implement' | 'Hold', _options?: ConfigurationOptions): Observable<Array<MdsDatasetSummary>> {
        return this.getValidationMdsDatasetsByTwoStatusesWithHttpInfo(status1, status2, _options).pipe(map((apiResponse: HttpInfo<Array<MdsDatasetSummary>>) => apiResponse.data));
    }

    /**
     * Returns published datasets belonging to the requested public dataset type. metadata is mapped internally to JSON and transactional is mapped internally to SQLite.
     * Retrieve MDS datasets by type
     * @param type Public dataset type. metadata maps to JSON-backed datasets and transactional maps to SQLite-backed datasets.
     */
    public getValidationMdsDatasetsByTypeWithHttpInfo(type: 'metadata' | 'transactional', _options?: ConfigurationOptions): Observable<HttpInfo<Array<MdsDatasetSummary>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getValidationMdsDatasetsByType(type, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getValidationMdsDatasetsByTypeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns published datasets belonging to the requested public dataset type. metadata is mapped internally to JSON and transactional is mapped internally to SQLite.
     * Retrieve MDS datasets by type
     * @param type Public dataset type. metadata maps to JSON-backed datasets and transactional maps to SQLite-backed datasets.
     */
    public getValidationMdsDatasetsByType(type: 'metadata' | 'transactional', _options?: ConfigurationOptions): Observable<Array<MdsDatasetSummary>> {
        return this.getValidationMdsDatasetsByTypeWithHttpInfo(type, _options).pipe(map((apiResponse: HttpInfo<Array<MdsDatasetSummary>>) => apiResponse.data));
    }

    /**
     * Returns the field machine name, display name and data type for the requested MDS field.
     * Retrieve an MDS field\'s data type
     * @param field MDS field machine name.
     */
    public getValidationMdsFieldTypeWithHttpInfo(field: string, _options?: ConfigurationOptions): Observable<HttpInfo<MdsFieldTypeResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getValidationMdsFieldType(field, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getValidationMdsFieldTypeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the field machine name, display name and data type for the requested MDS field.
     * Retrieve an MDS field\'s data type
     * @param field MDS field machine name.
     */
    public getValidationMdsFieldType(field: string, _options?: ConfigurationOptions): Observable<MdsFieldTypeResponse> {
        return this.getValidationMdsFieldTypeWithHttpInfo(field, _options).pipe(map((apiResponse: HttpInfo<MdsFieldTypeResponse>) => apiResponse.data));
    }

    /**
     * Returns counts of published datasets, published live datasets and published fields. The current API serializes these database count values as strings.
     * Retrieve an MDS summary
     */
    public getValidationMdsSummaryWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<MdsSummaryResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getValidationMdsSummary(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getValidationMdsSummaryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns counts of published datasets, published live datasets and published fields. The current API serializes these database count values as strings.
     * Retrieve an MDS summary
     */
    public getValidationMdsSummary(_options?: ConfigurationOptions): Observable<MdsSummaryResponse> {
        return this.getValidationMdsSummaryWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<MdsSummaryResponse>) => apiResponse.data));
    }

    /**
     * Returns records whose feature_name matches the supplied feature name.
     * Retrieve an MTS feature by name
     * @param feature Mydex Template System feature name. The endpoint matches this value against feature_name.
     */
    public getValidationMtsFeatureByNameWithHttpInfo(feature: string, _options?: ConfigurationOptions): Observable<HttpInfo<Array<MtsFeatureRecord>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getValidationMtsFeatureByName(feature, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getValidationMtsFeatureByNameWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns records whose feature_name matches the supplied feature name.
     * Retrieve an MTS feature by name
     * @param feature Mydex Template System feature name. The endpoint matches this value against feature_name.
     */
    public getValidationMtsFeatureByName(feature: string, _options?: ConfigurationOptions): Observable<Array<MtsFeatureRecord>> {
        return this.getValidationMtsFeatureByNameWithHttpInfo(feature, _options).pipe(map((apiResponse: HttpInfo<Array<MtsFeatureRecord>>) => apiResponse.data));
    }

    /**
     * Returns all Mydex Template System feature records.
     * Retrieve all MTS features
     */
    public getValidationMtsFeaturesWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<Array<MtsFeatureRecord>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getValidationMtsFeatures(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getValidationMtsFeaturesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns all Mydex Template System feature records.
     * Retrieve all MTS features
     */
    public getValidationMtsFeatures(_options?: ConfigurationOptions): Observable<Array<MtsFeatureRecord>> {
        return this.getValidationMtsFeaturesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<MtsFeatureRecord>>) => apiResponse.data));
    }

    /**
     * Returns records whose feature_group matches the supplied feature group name.
     * Retrieve MTS features by group
     * @param group Mydex Template System feature group name. The endpoint matches this value against feature_group.
     */
    public getValidationMtsFeaturesByGroupWithHttpInfo(group: string, _options?: ConfigurationOptions): Observable<HttpInfo<Array<MtsFeatureRecord>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getValidationMtsFeaturesByGroup(group, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getValidationMtsFeaturesByGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns records whose feature_group matches the supplied feature group name.
     * Retrieve MTS features by group
     * @param group Mydex Template System feature group name. The endpoint matches this value against feature_group.
     */
    public getValidationMtsFeaturesByGroup(group: string, _options?: ConfigurationOptions): Observable<Array<MtsFeatureRecord>> {
        return this.getValidationMtsFeaturesByGroupWithHttpInfo(group, _options).pipe(map((apiResponse: HttpInfo<Array<MtsFeatureRecord>>) => apiResponse.data));
    }

    /**
     * Returns records whose template_name and module_name match the supplied values.
     * Retrieve an MTS template module
     * @param template Mydex Template System template name. The endpoint matches this value against template_name.
     * @param module Mydex Template System module name. The endpoint matches this value against module_name.
     */
    public getValidationMtsTemplateByModuleWithHttpInfo(template: string, module: string, _options?: ConfigurationOptions): Observable<HttpInfo<Array<MtsTemplateRecord>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getValidationMtsTemplateByModule(template, module, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getValidationMtsTemplateByModuleWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns records whose template_name and module_name match the supplied values.
     * Retrieve an MTS template module
     * @param template Mydex Template System template name. The endpoint matches this value against template_name.
     * @param module Mydex Template System module name. The endpoint matches this value against module_name.
     */
    public getValidationMtsTemplateByModule(template: string, module: string, _options?: ConfigurationOptions): Observable<Array<MtsTemplateRecord>> {
        return this.getValidationMtsTemplateByModuleWithHttpInfo(template, module, _options).pipe(map((apiResponse: HttpInfo<Array<MtsTemplateRecord>>) => apiResponse.data));
    }

    /**
     * Returns records whose template_name matches the supplied template name.
     * Retrieve MTS template records by template name
     * @param template Mydex Template System template name. The endpoint matches this value against template_name.
     */
    public getValidationMtsTemplateByNameWithHttpInfo(template: string, _options?: ConfigurationOptions): Observable<HttpInfo<Array<MtsTemplateRecord>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getValidationMtsTemplateByName(template, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getValidationMtsTemplateByNameWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns records whose template_name matches the supplied template name.
     * Retrieve MTS template records by template name
     * @param template Mydex Template System template name. The endpoint matches this value against template_name.
     */
    public getValidationMtsTemplateByName(template: string, _options?: ConfigurationOptions): Observable<Array<MtsTemplateRecord>> {
        return this.getValidationMtsTemplateByNameWithHttpInfo(template, _options).pipe(map((apiResponse: HttpInfo<Array<MtsTemplateRecord>>) => apiResponse.data));
    }

    /**
     * Returns records whose template_name, module_name and module_subsection match the supplied values.
     * Retrieve an MTS template subsection
     * @param template Mydex Template System template name. The endpoint matches this value against template_name.
     * @param module Mydex Template System module name. The endpoint matches this value against module_name.
     * @param subsection Mydex Template System module subsection name. The endpoint matches this value against module_subsection.
     */
    public getValidationMtsTemplateBySubsectionWithHttpInfo(template: string, module: string, subsection: string, _options?: ConfigurationOptions): Observable<HttpInfo<Array<MtsTemplateRecord>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getValidationMtsTemplateBySubsection(template, module, subsection, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getValidationMtsTemplateBySubsectionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns records whose template_name, module_name and module_subsection match the supplied values.
     * Retrieve an MTS template subsection
     * @param template Mydex Template System template name. The endpoint matches this value against template_name.
     * @param module Mydex Template System module name. The endpoint matches this value against module_name.
     * @param subsection Mydex Template System module subsection name. The endpoint matches this value against module_subsection.
     */
    public getValidationMtsTemplateBySubsection(template: string, module: string, subsection: string, _options?: ConfigurationOptions): Observable<Array<MtsTemplateRecord>> {
        return this.getValidationMtsTemplateBySubsectionWithHttpInfo(template, module, subsection, _options).pipe(map((apiResponse: HttpInfo<Array<MtsTemplateRecord>>) => apiResponse.data));
    }

    /**
     * Returns all records from the Mydex Template System templates_features table, including template, module, subsection and route information.
     * Retrieve all MTS template records
     */
    public getValidationMtsTemplatesWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<Array<MtsTemplateRecord>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getValidationMtsTemplates(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getValidationMtsTemplatesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns all records from the Mydex Template System templates_features table, including template, module, subsection and route information.
     * Retrieve all MTS template records
     */
    public getValidationMtsTemplates(_options?: ConfigurationOptions): Observable<Array<MtsTemplateRecord>> {
        return this.getValidationMtsTemplatesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<MtsTemplateRecord>>) => apiResponse.data));
    }

    /**
     * Searches published MDS field machine names for values containing the supplied search term.
     * Search MDS field names
     * @param search Partial field machine name used to search published MDS fields.
     */
    public searchValidationMdsFieldsWithHttpInfo(search: string, _options?: ConfigurationOptions): Observable<HttpInfo<MdsFieldSearchResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.searchValidationMdsFields(search, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchValidationMdsFieldsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Searches published MDS field machine names for values containing the supplied search term.
     * Search MDS field names
     * @param search Partial field machine name used to search published MDS fields.
     */
    public searchValidationMdsFields(search: string, _options?: ConfigurationOptions): Observable<MdsFieldSearchResponse> {
        return this.searchValidationMdsFieldsWithHttpInfo(search, _options).pipe(map((apiResponse: HttpInfo<MdsFieldSearchResponse>) => apiResponse.data));
    }

    /**
     * Checks whether the supplied value matches an allowed value associated with the requested lookup. Matching is case-insensitive because the endpoint converts both stored values and the supplied value to uppercase. The result is returned as the string true or false.
     * Validate a value against a lookup field
     * @param fieldName Supported validation lookup field. Only lookup datasets currently intended to provide useful values through the Validations API are exposed here.
     * @param userInput Value to validate against the allowed values associated with the requested lookup.
     */
    public validateLookupValueWithHttpInfo(fieldName: 'bank_acc_type' | 'comm_type' | 'country' | 'dl_group' | 'dl_issuing_authority' | 'edu_org_type' | 'gender' | 'home_tenancy' | 'marital_status' | 'medication_dosage_units' | 'mode_of_study' | 'pronouns' | 'property_type' | 'race_ethnicity' | 'title' | 'utility_service', userInput: string, _options?: ConfigurationOptions): Observable<HttpInfo<LookupValidationResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.validateLookupValue(fieldName, userInput, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.validateLookupValueWithHttpInfo(rsp)));
            }));
    }

    /**
     * Checks whether the supplied value matches an allowed value associated with the requested lookup. Matching is case-insensitive because the endpoint converts both stored values and the supplied value to uppercase. The result is returned as the string true or false.
     * Validate a value against a lookup field
     * @param fieldName Supported validation lookup field. Only lookup datasets currently intended to provide useful values through the Validations API are exposed here.
     * @param userInput Value to validate against the allowed values associated with the requested lookup.
     */
    public validateLookupValue(fieldName: 'bank_acc_type' | 'comm_type' | 'country' | 'dl_group' | 'dl_issuing_authority' | 'edu_org_type' | 'gender' | 'home_tenancy' | 'marital_status' | 'medication_dosage_units' | 'mode_of_study' | 'pronouns' | 'property_type' | 'race_ethnicity' | 'title' | 'utility_service', userInput: string, _options?: ConfigurationOptions): Observable<LookupValidationResponse> {
        return this.validateLookupValueWithHttpInfo(fieldName, userInput, _options).pipe(map((apiResponse: HttpInfo<LookupValidationResponse>) => apiResponse.data));
    }

}
