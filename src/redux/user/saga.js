import { put, takeLatest } from 'redux-saga/effects';
import { Auth, API, graphqlOperation } from 'aws-amplify';

import * as mutations from 'src/graphql/mutations';
import * as queries from 'src/graphql/queries';
import * as Constants from 'src/utils/constants';
import history from 'src/utils/history';
import { validateEmail } from 'src/utils/utils';

import * as actionTypes from '../actionTypes';
import * as actions from './action';

function* userLogin(actionData) {
  try {
    const { email, password } = actionData.payload;
    let userInfo = null;
    if (validateEmail(email)) {
      userInfo = yield Auth.signIn(email, password);
    }
    if (userInfo) {
      userInfo = yield API.graphql(
        graphqlOperation(queries.getUser, {
          id: userInfo.attributes['custom:userId'],
        })
      );
    }
  } catch (err) {}
}

function* userSignup(actionData) {
  try {
    let userInfo = actionData.payload;
    userInfo = yield API.graphql(
      graphqlOperation(mutations.createUser, {
        input: userInfo,
      })
    );
    if (userInfo?.data?.createUser) {
      userInfo = userInfo.data.createUser;
      userInfo = yield Auth.signUp({
        password: userInfo.password,
        attributes: {
          email: userInfo.email,
          'custom:userId': userInfo.id,
        },
      });
    }
  } catch (err) {}
}

export default function* userSaga() {
  yield takeLatest(actionTypes.USER_LOGIN, userLogin);
  yield takeLatest(actionTypes.USER_SIGNUP, userSignup);
}
