// priority: 1000

// 函数：生存随机整数。要求提供最小值和最大值两个形参
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}