import {all, takeLatest, call, put} from 'redux-saga/effects'
import {Action} from "./redux";
import API from "../../api";

export default function* () {
    yield all([
        takeLatest(Action.Types.GET_USERS, function* () {
            const result = yield call(API.getUsers)
            console.log("@@[saga] getUsers", result);
            if(result?.data){
                yield put(Action.Creators.updateState({
                    users: result.data
                }))
            }
        })
    ])
}