// selectors
let hero = document.querySelector('.hero');
let comment = document.querySelector('#commnet');
let name = document.querySelector('.name');
let job = document.querySelector('.job');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

async function get() {
  let url = "./data.json";
  let req = await fetch(url);
  let arr = await req.json();

  start(arr);
}
get();




function start(arr) {
  create(arr[0])

  let count = 0;

  prev.addEventListener('click', () => {
    count--;
    if (count < 0) {
      count = arr.length - 1;
    }
    create(arr[count]);
    show();
  });
  next.addEventListener('click', () => {
    count++;
    if(count > arr.length - 1) {
      count = 0;
    }
    create(arr[count]);
    show();
  });
};

// DOM
function create(ob) {
  for (let i in ob) {
    if (i == "src") {
      hero.src = ob[i];
    }else if (i == "comment") {
      comment.innerHTML = ob[i];
    }else if (i == "fullname") {
      typeWriting(ob[i], name);
    }else {
      job.textContent = ob[i];
    }
  }
}


function typeWriting(str, ele) {
  ele.innerHTML = '';
  let i = 0;
  let id = setInterval(() => {
    ele.textContent += str[i];
    i++;
    if (i == str.length) clearInterval(id);
  }, 100);
}

function show() {
  hero.classList.add('ani');
  setTimeout(() => {
    hero.classList.remove('ani');
  }, 200);
}