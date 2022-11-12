console.log('Started: vars.js')

let x = 9
let y = 10

function printX() {
    console.log('vars x: ', x);
}

function changeX(v) {
    x = v
};

// exports.x = x
// exports.y = y

module.exports = {
    x,
    y,
    printX,
    changeX
};