// /*
//  * @Author: quling
//  * @Date: 2023-06-19 15:21:44
//  * @LastEditors: quling
//  * @LastEditTime: 2023-06-19 15:27:29
//  * @Description: 
//  * @FilePath: \studyNode\JavaScript\12ES6入门教程\03.字符串扩展\字符串扩展.js
//  */
// const data = {
//   "name": "邓铁",
//   "sex": 0,
//   "role": 1,
//   "time": 1640678098887
// }
// const invite = function (arrs, nameExp, sexExp, roleExp, timeExp) {
//   console.log(arrs); // [ '诚挚邀请', '', '作为', '于', '参加上海张江杯垂钓竞技大赛。\n主办方：上海市浦东钓鱼协会' ]
//   let strName = nameExp;
//   // 性别处理
//   let strSex = ['先生', '女士'][sexExp];
//   // 角色处理
//   const role = {
//       "1": "选手",
//       "2": "裁判",
//       "3": "记分员",
//       "4": "摄影师"
//   };
//   let strRole = role[roleExp];
//   // 日期处理
//   let strTime = new Date(timeExp).toLocaleDateString(undefined, {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//   });

//   // 输出内容
//   let output = [arrs[0]];

//   [strName, strSex, strRole, strTime].forEach((str, index) => {
//       output.push(str, arrs[index + 1] || '');
//   });

//   return output.join('');
// };

// let content = invite`诚挚邀请${data.name}${data.sex}作为${data.role}于${data.time}参加上海张江杯垂钓竞技大赛。
// 主办方：上海市浦东钓鱼协会`;

// console.log(content);

// let total = 30;
// let msg = passthru`The total is ${total} (${total*1.05} with tax)`;
// function passthru(literals) {
//   console.log("literals:",literals,"-",arguments);
//   let result = '';
//   let i = 0;

//   while (i < literals.length) {
//     result += literals[i++];
//     if (i < arguments.length) {
//       result += arguments[i];
//     }
//   }

//   return result;
// }
// console.log('msg:',msg);

let sender = '<script>alert("abc")</script>'; // 恶意代码
let message = SaferHTML`<p>${sender} has sent you a message.</p>`;

function SaferHTML(templateData) {
  console.log("templateData:",templateData);
  let s = templateData[0];
  for (let i = 1; i < arguments.length; i++) {
    let arg = String(arguments[i]);
    console.log(arg);
    // Escape special characters in the substitution.
    s += arg.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

    // Don't escape special characters in the template.
    s += templateData[i];
  }
  return s;
}

console.log("message:", message);