const inquirer = require("inquirer");
const colors = require("colors");

async function startGame() {
  console.log(colors.yellow("Welcome to the Text Adventure Game!"));

  // Start the game
  await adventure();
}

async function adventure() {
  const { choice } = await inquirer.prompt({
    type: "list",
    name: "choice",
    message: "What do you want to do?",
    choices: [
      "Explore the cave",
      "Talk to the wizard",
      "Go to the forest",
      "Quit",
    ],
  });

  switch (choice) {
    case "Explore the cave":
      await exploreCave();
      break;
    case "Talk to the wizard":
      await talkToWizard();
      break;
    case "Go to the forest":
      await goToForest();
      break;
    case "Quit":
      console.log(colors.yellow("Thanks for playing!"));
      return;
  }
}

async function exploreCave() {
  console.log(colors.cyan("\nYou enter the dark cave..."));
  const { direction } = await inquirer.prompt({
    type: "list",
    name: "direction",
    message: "Which way do you want to go?",
    choices: ["Left", "Right", "Back"],
  });

  if (direction === "Left") {
    console.log(colors.green("\nYou found a treasure chest! You win!"));
  } else if (direction === "Right") {
    console.log(colors.red("\nOh no! You fell into a pit and lost the game."));
  } else {
    console.log(colors.yellow("\nYou decide to leave the cave."));
  }

  adventure();
}

async function talkToWizard() {
  console.log(colors.cyan("\nYou approach the mysterious wizard..."));
  console.log(
    colors.yellow("Wizard: Welcome, adventurer! What brings you here?")
  );
  const { response } = await inquirer.prompt({
    type: "input",
    name: "response",
    message: "Your response:",
  });

  console.log(colors.yellow(`Wizard: Ah, "${response}"! Interesting...`));
  console.log(colors.yellow("Wizard: Be careful on your journey!"));

  adventure();
}

async function goToForest() {
  console.log(colors.cyan("\nYou venture into the dense forest..."));
  const { action } = await inquirer.prompt({
    type: "list",
    name: "action",
    message: "What do you want to do?",
    choices: ["Search for herbs", "Chop wood", "Return to town"],
  });

  if (action === "Search for herbs") {
    console.log(colors.green("\nYou found some rare herbs!"));
  } else if (action === "Chop wood") {
    console.log(colors.green("\nYou gather some firewood."));
  } else {
    console.log(colors.yellow("\nYou decide to head back to town."));
  }

  adventure();
}

startGame();
//node index.js
