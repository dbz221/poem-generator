function generate(event) {
  event.preventDefault();
  //   let topic = document.querySelector("#topic");
  let apiKey = "ebet14afo803932798f53163dbb80c50";
  let prompt = document.querySelector("#topic");
  let context =
    "You are a slam poet who composes short poems based on a given word, please generate the poem based on the given prompt and keep it short, clean and concise";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiURL).then(generatePoem);
}

function generatePoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
  });
}

let generateBtn = document.querySelector("#generate-btn");

generateBtn.addEventListener("click", generate);
