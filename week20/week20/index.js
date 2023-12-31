document.getElementById("search-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const { kind, id } = Object.fromEntries(formData);

  console.log(kind, id);
  document.getElementById("result").textContent = "";
  document.getElementById("error").textContent = "";


  document.getElementById("submit").disabled = true
  fetch(`https://swapi.nomoreparties.co/${kind}/${id}`)
    .then((d) => {
      if (!d.ok) {
        if (d.status === 404) {
          throw new Error("Элемент не найден");
        } else {
          throw new Error("Внутрення ошибка");
        }
      }

      return d.json();
    })
    .then((data) => {
      document.getElementById("result").textContent = `Результат поиска: ${[
        data.name || data.title,
        data.manufacturer,
      ]
        .filter((d) => !!d)
        .join(" — ")}`;
    })
    .catch((err) => {
      document.getElementById("error").textContent = err.message;
    })
    .finally(() => {
      document.getElementById("submit").disabled = false
    });
});

