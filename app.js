const api_url = "https://api.adviceslip.com/advice";
const btnAdvice = document.querySelector("#btn");
const adviceId = document.querySelector("#advice-id");
const advice = document.querySelector("#advice");

btnAdvice.onclick = async () => {
  const response = await fetch(api_url);
  const data = await response.json();
  adviceId.innerText = "Advice" + " " + "#" + data.slip.id;
  advice.innerText = `"` + data.slip.advice + `"`;
  console.log(data);
};
