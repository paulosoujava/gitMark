import { call } from 'redux-saga/effects';
import api from 'service/api';

export function* addFavoriteRequest(action){
    const response = yield call(api.get, `/repos/${action.payload.repoName}`);
    
}