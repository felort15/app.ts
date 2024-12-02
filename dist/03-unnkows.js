"use strict";
let anyVar;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar = [];
anyVar = {};
let isNew = anyVar;
anyVar.doSomething();
anyVar.touppercase();
let unknownVar;
unknownVar = true;
unknownVar = undefined;
unknownVar = null;
unknownVar = 1;
unknownVar = [];
unknownVar = {};
// unknowVar.doSomething();
if (typeof unknownVar === 'string') {
    unknownVar.toUpperCase();
}
if (typeof unknownVar === 'boolean') {
    let isNewV2 = unknownVar;
}
const parse = (str) => {
    return JSON.parse(str);
};
