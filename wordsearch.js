const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (let l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
    // transpose arrays to vertical letters
    let verticleArray = transpose(letters);

    const verticleJoin = verticleArray.map(ls => ls.join(''));

    for (let l of verticleJoin) {
        if (l.includes(word)) return true;
    }

    return false;

    //return grid
};

const transpose = (array) => {

    let newGrid = [];
    for (let row in array) {
        //for each row create new array
        let newOrder = [];
        for (let i = 0; i < array.length; i++) {
            newOrder.push(array[i][row]);
        }
        newGrid.push(newOrder);
    }
    return newGrid;
};

module.exports = wordSearch;

wordSearch([[1, 2, 3], [1, 2, 3], [1, 2, 3,]]);