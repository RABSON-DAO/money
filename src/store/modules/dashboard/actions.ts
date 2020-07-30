import { Country } from './types';

interface CountriesRequest {
  type: string;
}

interface CountriesSuccess {
  type: string;
  data: Country[];
}

interface SetCountry {
  type: string;
  country: Country;
}

interface YouSend {
  type: string;
  value: string;
}

interface DeliveryDate {
  type: string;
  date: string;
}

export function countriesRequest(): CountriesRequest {
  return {
    type: '@dashboard/GET_COUNTRIES_REQUEST',
  };
}

export function countriesSuccessRequest(data: Country[]): CountriesSuccess {
  return {
    type: '@dashboard/GET_COUNTRIES_SUCCESS',
    data,
  };
}

export function setFromCountry(country: Country): SetCountry {
  return {
    type: '@dashboard/SELECT_FROM',
    country,
  };
}

export function setToCountry(country: Country): SetCountry {
  return {
    type: '@dashboard/SELECT_TO',
    country,
  };
}

export function updateYouSend(value: string): YouSend {
  return {
    type: '@dashboard/UPDATE_YOU_SEND',
    value,
  };
}

export function updateDeliveryDate(date: string): DeliveryDate {
  return {
    type: '@dashboard/UPDATE_DELIVERY_DATE',
    date,
  };
}
