
export function memo(func: Function) {
    let cachedDeps: any[];
    let cachedVal: any;
    return function (args: any[], deps: any[]) {
        if (areArraysShallowEqual(deps, cachedDeps)) {
            return cachedVal;
        }

        cachedDeps = deps;
        cachedVal = func(...args);
        return cachedVal;
    };
}

function areArraysShallowEqual(arr1: any[], arr2: any[]) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2) || arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (!Object.is(arr1[i], arr2[i])) {
            return false;
        }
    }

    return true;
}