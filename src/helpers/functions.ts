interface MyObject {
    [key: string]: any;
}

export const getObjectByProperty = <T extends MyObject>(
    array: T[],
    propKey: keyof T,
    propValue: T[keyof T]
): T | undefined => {
    return array.find((obj) => obj[propKey] === propValue);
};