"use strict";
class Dom {
    // 创建节点
    createElement(el) {
        return document.createElement(el);
    }
    // 填充文本
    setText(el, text) {
        el.textContent = text;
    }
    // 渲染函数
    render(data) {
        let root = this.createElement(data.tag);
        if (data.children && Array.isArray(data.children)) {
            data.children.forEach(item => {
                let child = this.render(item);
                root.appendChild(child);
            });
        }
        else {
            this.setText(root, data.text);
        }
        return root;
    }
}
// Vue继承了Dom具有render方法 通过implements关键字进行类型约束使得Vue的参数已经方法符合定义的vueCls
class Vue extends Dom {
    constructor(options) {
        super();
        this.options = options;
        this.init();
    }
    init() {
        // 虚拟dom 就是通过js去渲染真实dom
        let data = {
            tag: "div",
            children: [
                {
                    tag: "section",
                    text: "我是子节点1"
                },
                {
                    tag: "section",
                    text: "我是子节点2"
                }
            ]
        };
        let app = typeof this.options.el === "string" ? document.querySelector(this.options.el) : this.options.el;
        app === null || app === void 0 ? void 0 : app.appendChild(this.render(data));
    }
}
new Vue({
    el: "#app"
});
