# Projects related to DOM

##project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?
file=index.html)

# Solution Code

## project 1
```javascript const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button){
  console.log(button);
  button.addEventListener('click',function (e){
    console.log(e);
    console.log(e.target);
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id;
    }
  }
  )
});

```

##Project 3 solution code
```const clock = document.getElementById('clock');
//const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  //console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```