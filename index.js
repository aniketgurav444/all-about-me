#!/usr/bin/env node

"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

var prompt = inquirer.createPromptModule();

const data = {
  name: chalk.bold.blue("Aniket Gurav"),
  nickname: chalk.bold("aniketgurav444"),

  web: chalk.green("https://aniketgurav444.github.io/all-about-me/"),
  blog: chalk.green("https://aniketgurav444.github.io/blog/"),
  twitter: chalk.gray("https://twitter.com/") + chalk.cyan("aniket_gurav"),
  npm: chalk.gray("https://npmjs.com/") + chalk.red("~aniketgurav444"),
  github: chalk.gray("https://github.com/") + chalk.white("aniketgurav444"),
  linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("aniket-gurav"),
  npx: chalk.red("npx") + " " + chalk.white("aniketgurav444"),

  labelWeb: chalk.white.bold("Web:"),
  labelBlog: chalk.white.bold(" Blog:"),
  labelTwitter: chalk.white.bold("Twitter:"),
  labelNpm: chalk.white.bold("  npm:"),
  labelGitHub: chalk.white.bold("GitHub:"),
  labelLinkedIn: chalk.white.bold("  LinkedIn:"),
  labelCard: chalk.white.bold("Card:"),
};

const box = boxen(
  [
    `${data.name} | ${data.nickname} 🚀`,
    ``,
    `${data.labelWeb}  ${data.web}`,
    `${data.labelBlog}  ${data.blog}`,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelNpm}  ${data.npm}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    ``,
    `${data.npx}`,
    ``,
    `${chalk.italic.bold("I am an enthusiastic Cloud & DevOps Engineer.")}`,
    `${chalk.italic("Passionate about automation, cloud, and scalable pipelines.")}`,
    `${chalk.italic("Always learning, always building.")}`,
  ].join("\n"),
  {
    borderColor: "blue",
    borderStyle: "double",
    padding: 1,
    margin: 1,
    float: "center",
    textAlignment: "center",
  }
);

const questions = [
  {
    type: "list",
    name: "action",
    message: "What's next?",
    choices: [
      {
        name: `Send me an ${chalk.green.bold("email")}?`,
        value: () => {
          open("mailto:aniketgurav3398@gmail.com");
          console.log(
            "\nPlease wait, your email application will pop up soon,\nsee ya.\n"
          );
        },
      },
      {
        name: "Just quit.",
        value: () => {
          console.log("Ok, bye.\n");
        },
      },
    ],
  },
];

console.log(box);

const tip = [
  `${chalk.white.bold(
    "Tip"
  )}: if the terminal supports, try ${chalk.cyanBright.bold(
    "cmd/ctrl + click"
  )} the link above 😉`,
  "",
].join("\n");
console.log(tip);

prompt(questions).then((answer) => answer.action());
