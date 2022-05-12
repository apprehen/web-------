window.onload = function () {
  // index设置为全局变量
  let index = 1;
  let imgs = document.querySelector(".imgs")
  let btn_next = document.querySelector(".next")
  let btn_pre = document.querySelector(".pre")
  let timer = null
  let dot = document.querySelector(".quet")
  let lis = dot.querySelectorAll("li")
  // 定义函数
  function change (a) {
    imgs.style.background = "url(../img/swift/" + a + ".jpg)";
    imgs.style.backgroundSize = "cover";
  }
  function next () {
    index++;
    if (index > 6){
      index = 1;
    }
    change(index);
    dotcur(index);
  }
  function pre () {
    index--;
    if (index < 1){
      index = 6;
    }
    change(index);
    dotcur(index);
  }
  function dotcur(arrlist) {
    for (let i=0;i<6;i++){
      lis[i].className='';
    }
    lis[arrlist-1].className="cur"
  }
  // 添加定时器
  timer = setInterval(()=>{
    next();
  },1500)
  // 给按钮添加点击监听事件
  btn_next.addEventListener('click',next);
  btn_pre.addEventListener('click',pre);
  //鼠标移入的时候取消定时器
  btn_pre.addEventListener('mouseover',() => {
    clearInterval(timer)
  })
  btn_next.addEventListener('mouseover',() => {
    clearInterval(timer)
  })
  imgs.addEventListener('mouseover',() => {
    clearInterval(timer)
  })
  dot.addEventListener('mouseover',() => {
    clearInterval(timer)
  })
  // 鼠标移出的时候开启定时器
  btn_pre.addEventListener('mouseout',() =>{
    timer = setInterval(()=>{
      next();
    },1500)
  })
  btn_next.addEventListener('mouseout',() =>{
    timer = setInterval(()=>{
      next();
    },1500)
  })
  imgs.addEventListener('mouseout',() => {
    timer = setInterval(()=>{
      next();
    },1500)
  })
  dot.addEventListener('mouseout',() => {   
    timer = setInterval(()=>{
      next();
    },1500)
  })
  //给图片下的小点添加点击事件和选中事件，给选中的index添加一个className
  lis[0].className="cur"
  //点击按钮会切换图片
  //遍历所有的小圆点    
  for(let j=0;j<6;j++) {
    lis[j].onclick=function(){
      index=j+1;
      change(index);
      dotcur(index);
    }
  }
}