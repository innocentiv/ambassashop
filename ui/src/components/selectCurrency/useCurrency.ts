import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getConfig } from "../../libs/config";
import useFetch from "../../hooks/useFetch";
import { setCurrency as setCurrencyAction } from "./slice";

const config = getConfig();

export interface APILocationService {
  ip: string;
  version: string;
  city: string;
  region: string;
  region_code: string;
  country: string;
  country_name: string;
  country_code: string;
  country_code_iso3: string;
  country_capital: string;
  country_tld: string;
  continent_code: string;
  in_eu: boolean;
  postal: string;
  latitude: number;
  longitude: number;
  timezone: string;
  utc_offset: string;
  country_calling_code: string;
  currency: string;
  currency_name: string;
  languages: string;
  country_area: number;
  country_population: number;
  asn: string;
  org: string;
}

export const useCurrencyCode = () => useSelector((state) => state.currency);

export const useCurrency = () => {
  const dispatch = useDispatch();
  const storeCurrency = useCurrencyCode();
  const setCurrency = useCallback(
    (currencyCode: string) => {
      dispatch(setCurrencyAction(currencyCode));
    },
    [dispatch]
  );

  const { data, loading, error } = useFetch<APILocationService>(
    config.currencyServiceUrl
  );

  return useMemo(
    () => ({
      currency: storeCurrency || (data ? data.currency : undefined),
      loading,
      error,
      setCurrency,
    }),
    [data, loading, error, setCurrency, storeCurrency]
  );
};
