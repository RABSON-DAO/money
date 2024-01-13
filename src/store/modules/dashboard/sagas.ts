import axios from 'axios';
import { call, put, all, takeLatest } from 'redux-saga/effects';

import * as ActionTypes from './actionTypes';
import { Country } from './types';

import { countriesSuccessRequest } from './actions';

function* getCountries() {
  const response = yield call(
    axios.get,
    'https://github.com/apilayer/currency-conversion/blob/master/test/data/currencies.json',
  );

  // Added filter to remove (Romania) with inconsistent data,
  // Adjusting this item, the filter will be unnecessary.
  // return only 'response.data'
  const filter = response.data.filter(
    (country: Country) => country.label !== 'RON',
  );

  yield put(countriesSuccessRequest(filter));
}

export default all([
  takeLatest(ActionTypes.DASHBOARD_COUNTRIES_REQUEST, getCountries),
]);
