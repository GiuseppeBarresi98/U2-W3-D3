window.onload = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        if (response.status === 400) {
          throw new Error("Bad Request");
        }
        if (response.status === 401) {
          throw new Error("Unauthorized");
        }
        if (response.status === 403) {
          throw new Error("Forbidden");
        }
        if (response.status === 404) {
          throw new Error("Not found");
        }

        throw new Error("Generic Fetching error");
      }
      return response.json();
    })
    .then((arrBooks) => {
      console.log(arrBooks);

      for (i = 0; i < 8; i++) {
        const div = document.querySelectorAll(".card")[i];
        console.log(div);
        const title = document.querySelectorAll(".card-title")[i];
        const img = document.querySelectorAll(".card-img-top")[i];
        const p = document.querySelectorAll(".card-text")[i];
        const ul = document.getElementById("ul");
        const button = document.getElementsByClassName("scarta");
        const buttonAdd = document.getElementsByClassName("add")[i];
        title.innerText = arrBooks[i].title;
        img.src = arrBooks[i].img;
        p.innerText = arrBooks[i].price + "$";
        buttonAdd.addEventListener("click", function () {
          arrBooks.forEach((books) => {
            let li = document.createElement("li");
            li.innerText = books.title;
            console.log(li);
            ul.appendChild(li);
            localStorage.setItem("li", li);
          });
        });

        button[i].addEventListener("click", function (e) {
          e.currentTarget.closest(div.remove());
        });
      }
    });
};
