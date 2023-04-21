export function mergeAllArrays(object: { [key: string]: any[] }): any[] {
    let mergedArray: any[] = [];

    for (const key in object) {
        if (object.hasOwnProperty(key) && Array.isArray(object[key])) {
            mergedArray = mergedArray.concat(object[key]);
        }
    }

    return mergedArray;
}
