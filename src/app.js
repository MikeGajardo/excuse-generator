/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#excuse").innerHTML = excuseGenerator();
  console.log("Hello Rigo from the console!");
};

let excuseGenerator = function() {
  let pronoun = ["The", "A"];
  let subject = ["dog", "baby yoda", "cockroach", "pitbull", "Elon Musk"];
  let action = ["stole my", "ate my", "punched my", "laughed at my"];
  let what = ["car", "guitar", "laptop", "backpack", "girlfriend"];
  let where = ["on calle ocho", "in my coding class", "at my job"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    where[whereIndex]
  );
};
