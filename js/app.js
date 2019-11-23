document.addEventListener('DOMContentLoaded', () => {

  const formSubmit = document.querySelector('#horse-form');
  formSubmit.addEventListener('submit', handleSubmit);

})

  const handleSubmit = function (event) {
    event.preventDefault();
  console.log("hello");
    const newHorse = createNewHorse(event.target);
    const horseList = document.querySelector("#horse-list");
    horseList.appendChild(newHorse);

    event.target.reset();
  }

  const createNewHorse = function (form) {
    const newHorse = document.createElement("li");
    newHorse.classList.add('new-horse-detail');

    const name = document.createElement('h2');
    name.textContent = form.name.value;
    newHorse.appendChild(name);

    const speed = document.createElement('h2');
    speed.textContent = form.speed.value;
    newHorse.appendChild(speed);

    const food = document.createElement('h2');
    food.textContent = form.food.value;
    newHorse.appendChild(food);

    return newHorse

  }
