document.addEventListener('DOMContentLoaded', () => {

  const formSubmit = document.querySelector('#horse-form');
  formSubmit.addEventListener('submit', handleSubmit);

  const deleteAll = document.querySelector('#delete-button');
  deleteAll.addEventListener('click', handleDelete);

})

  const handleSubmit = function (event) {
    event.preventDefault();

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

    const birthday = document.createElement('h2');
    birthday.textContent = form.birthday.value;
    newHorse.appendChild(birthday);

    const food = document.createElement('h2');
    food.textContent = form.food.value;
    newHorse.appendChild(food);

    const color = document.createElement('h2');
    color.textContent = form.color.value;
    newHorse.appendChild(color);

    return newHorse

  }

  const handleDelete = function (event) {
    const horseList = document.querySelector('#horse-list');
    while (horseList.firstChild) {
      horseList.removeChild(horseList.firstChild);}
  }
