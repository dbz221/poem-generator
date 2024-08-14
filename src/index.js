function generate(event) {
  event.preventDefault();
  //   let topic = document.querySelector("#topic");

  new Typewriter("#poem", {
    strings: "Road not taken",
    autoStart: true,
    delay: 50,
  });
}

let generateBtn = document.querySelector("#generate-btn");
generateBtn.addEventListener("click", generate);
