import { API_ENDPOINT } from "./consts";

type Answer = "yes" | "no" | "maybe";
type AnswerResponse = {
  answer: Answer;
  forced: boolean;
  image: string;
};
const btn = document.getElementById("js-submit");
const input = document.getElementById("js-message") as HTMLInputElement;

if (btn) btn.addEventListener("click", () => fetchAnswer());
if (input) {
  input.addEventListener("keydown", (event) => onEnterKeyPress(event));
}

const showAnswer = (answer: Answer) => {
  const answerElement = document.getElementById("js-answer");
  if (answerElement) answerElement.textContent = answer;
};
const fetchAnswer = async () => {
  await fetch(API_ENDPOINT)
    .then((response) => response.json())
    .then((data: AnswerResponse) => showAnswer(data.answer));
};

const onEnterKeyPress = (e: KeyboardEvent) => {
  if (e.key === "Enter") fetchAnswer();
};

const question = input?.value;
