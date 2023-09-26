
const _ =require('lodash');
const values=[1,[2,[3,[4]]]]
const refineOrder=_.flattenDeep(values);
console.log(refineOrder);