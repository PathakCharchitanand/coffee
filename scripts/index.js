// Add the coffee to local storage with key "coffee"

const url = "https://masai-mock-api.herokuapp.com/coffee/menu";

async function getData() {

  try {
    let res = await fetch(url);

    let users = await res.json();

    // append(users.data);
    append(users.menu.data);

    // console.log(users.data);
    console.log(users.menu.data);
    console.log(users);

  } catch (err) {

    console.log(err);

  }
}


getData()



function append(x) {
  let container = document.getElementById('container');

  x.forEach(function (el) {

    let img = document.createElement('img');
    img.src = el.image;

    let h2 = document.createElement('h2');
    h2.innerText = el.title;

    let p = document.createElement('p');
    p.innerText = el.description;

    let h21 = document.createElement('h2');
    h21.innerText = el.price;

    let btn = document.createElement('button');
    btn.innerText = "Add to Bucket";

    let div = document.createElement('div');
    div.setAttribute("id", "innerdiv");

    div.append(img, h2, p, h21, btn);

    container.append(div);
  });
}
