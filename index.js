fetch("https://quotes.rest/qod?language=en")
  .then((response) => response.json())
  .then((data) => {
    let quote = data.contents.quotes[0].quote;
    let author = data.contents.quotes[0].author;
    document.querySelector("#quote").innerHTML = `"${quote}" - ${author} `;
  });
