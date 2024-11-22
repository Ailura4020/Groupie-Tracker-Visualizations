// let sorteNames = names.sort();

// const input = document.getElementById("search-input");
// const list = document.querySelector(".list");
// const suggestions = document.getElementById("suggestions");

// input.addEventListener("keyup", (e) => {
//   removeElements();

//   const inputValue = input.value.toLowerCase();
//   const filteredNames = sorteNames.filter((name) => {
//     return name.toLowerCase().startsWith(inputValue) && inputValue !== "";
//   });

//   const maxResults = 10;
//   let suggestionsList = filteredNames.slice(0, maxResults);

//   suggestionsList.forEach((name) => {
//     const option = document.createElement("option");
//     option.value = name;
//     option.text = name;
//     suggestions.appendChild(option);
//   });
// });

// function removeElements() {
//   const options = suggestions.options;
//   while (options.length > 0) {
//     options.remove(0);
//   }
// }