const divList = dom.find("#text");
console.log(divList);
const div = dom.find("#text")[0];
console.log(div);

dom.style(div, 'color', 'red')
dom.each(divList, (n) => console.log(n)) // 遍历 divList 里的所有元素