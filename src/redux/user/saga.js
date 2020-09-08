import { put, takeLatest } from 'redux-saga/effects';
import { Auth, API, graphqlOperation } from 'aws-amplify';

import * as mutations from 'src/graphql/mutations';
import * as queries from 'src/graphql/queries';
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
    yield put(actions.userLoginSuccess(userInfo.data.getUser));
  } catch (err) {}
}

function* userSignup(actionData) {
  try {
    let userInfo = actionData.payload;
    userInfo = yield API.graphql(
      graphqlOperation(mutations.createUser, {
        input: {
          firstName: userInfo.firstName,
          lastName: userInfo.lastName,
          email: userInfo.email,
          phoneNumber: userInfo.phone,
          password: userInfo.password,
          status: 1,
          role: 2,
        },
      })
    );
    if (userInfo?.data?.createUser) {
      userInfo = userInfo?.data?.createUser;
      const authUser = yield Auth.signUp({
        username: userInfo.email,
        password: userInfo.password,
        attributes: {
          email: userInfo.email,
          'custom:userId': userInfo.id,
        },
      });
      if (authUser) {
        history.push('/auth/login');
      }
    }
  } catch (err) {}
}

export default function* userSaga() {
  yield takeLatest(actionTypes.USER_LOGIN, userLogin);
  yield takeLatest(actionTypes.USER_SIGNUP, userSignup);
}
