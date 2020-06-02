import { lectureList } from "./data/data.js";

const header = document.querySelector("header");
const footer = document.querySelector("footer");
const h1 = document.querySelector("h1");
const wrapper = document.querySelector(".wrapper");

const changeTitle = (newTitle) => {
  h1.innerText = newTitle;
};

const removeQuestions = () => {
  const currentQuestions = document.querySelector("header ul");
  if (currentQuestions) {
    header.removeChild(currentQuestions);
  }
};

const addQuestions = (questions) => {
  removeQuestions();
  const ul = document.createElement("ul");
  if (questions.length > 0) {
    questions.forEach((question) => {
      const li = document.createElement("li");
      li.innerText = question;
      ul.appendChild(li);
    });
    header.appendChild(ul);
  }
};

const checkLocalSotage = () => {
  const position = localStorage.getItem("position");

  if (position) {
    const element = lectureList.lectures[position - 1];
    changeTitle(element.title);
    addQuestions(element.questions);
  } else {
    changeTitle(lectureList.documentTitle);
  }
};

const populateUI = () => {
  checkLocalSotage();

  lectureList.lectures.forEach((element, index) => {
    const button = document.createElement("button");
    const position = index + 1;
    const localStoragePosition = localStorage.getItem("position");

    button.innerText = position;

    if (localStoragePosition == position) {
      button.setAttribute("autofocus", "");
    }

    button.addEventListener("click", () => {
      changeTitle(element.title);
      addQuestions(element.questions);

      localStorage.setItem("position", position);
    });

    footer.appendChild(button);
  });
};

wrapper.addEventListener("click", (e) => {
  if (e.srcElement.nodeName !== "BUTTON") {
    changeTitle(lectureList.documentTitle);
    removeQuestions();
    localStorage.clear();
  }
});

populateUI();
