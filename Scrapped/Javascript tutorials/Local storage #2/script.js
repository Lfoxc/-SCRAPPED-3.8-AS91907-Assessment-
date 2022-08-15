const inpkey = document.getElementById("inpkey");
const inpval = document.getElementById("inpval");
const btn = document.getElementById("btn");
const output = document.getElementById("1soutput");

btn.addEventListener("click", Gettext);

function Gettext () {
  const key = inpkey.value;
  const value = inpval.value;

  console.log(key);
  console.log(value);


  if (key && value) {
    localStorage.setItem(key, value);
  };

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    output.innerHTML += `${key}: ${value}<br />`;
  };
};
