"use strict";
let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
canvas.width = screen.availWidth; // 设置宽度为可视宽度
canvas.height = screen.availHeight; // 设置宽度为可视宽度
let str = "QLJTZB010101".split("");
let Arr = Array(Math.ceil(canvas.width / 10)).fill(0);
const rain = () => {
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0f0";
    Arr.forEach((item, index) => {
        ctx.fillText(str[Math.floor(Math.random() * str.length)], index * 10, item + 10);
        Arr[index] = item > canvas.height || item > Math.random() * 10000
            ? 0 : item + 10;
    });
};
setInterval(rain, 40);
