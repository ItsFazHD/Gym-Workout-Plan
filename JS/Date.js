const myLabel2 = document.getElementById("myLabel2");

update();
setInterval(update, 1000);

function update() {
  let date = new Date();
  myLabel2.innerHTML = formatDate(date);

  function formatDate(date) {
    let year = date.getFullYear();
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let day = ("0" + date.getDate()).slice(-2);

    return `${day}/${month}/${year}`;
  }
}
