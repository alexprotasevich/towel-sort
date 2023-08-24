
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix) return [];
    let newArr = matrix.reduce((accumulator, item, index) => {
        return accumulator.concat((index % 2 === 0) ? item : item.reverse());
    }, []);
    return newArr;
}
