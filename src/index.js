function generate(event) {
  event.preventDefault();
  let topic = document.querySelector("#topic");
  let apiKey = "ebet14afo803932798f53163dbb80c50";
  let prompt = `please generate the poem based on ${topic.value} and keep it short, clean and concise`;

  let context =
    "You are a poet who composes short lyrical poems that rhyme based on a given word, make sure to present is in basic HTML written in separate lines using <br/>";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a French poem about ${topic.value}</div>`;

  axios.get(apiURL).then(generatePoem);
}

function generatePoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

let generateBtn = document.querySelector("#generate-btn");

generateBtn.addEventListener("click", generate);
