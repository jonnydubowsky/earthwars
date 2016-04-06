import Ember from 'ember';

export function sumValues(params) {
  // return params[0].map((activity) => Number(activity.get('value'))).reduce((a,b)=> a + b);
  if (params[0].map((activity) => Number(activity.get('value'))) === []) {
    console.log('falsey called');
    return 0;
  } else {
  return params[0].map((activity) => Number(activity.get('value'))).reduce((a,b)=> a + b);
  }
}


export default Ember.Helper.helper(sumValues);