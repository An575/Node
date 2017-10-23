//方式1
exports.world = function () {
    console.log('Hello World!');
}

//方式2
function Hello() {
    var name;
    this.setName = function (thyName) {
        name = thyName;
    };
    this.sayName = function () {
        console.log('Hello ' + name);
    };
};

module.exports = Hello;

//方式1与方式2不能共存
