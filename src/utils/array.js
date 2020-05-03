export const addUniqueIdToArray = array => {
    let i = 0;
    return array.map(e => {
        return {
            uniqueId: i++,
            value: e,
        };
    });
};
