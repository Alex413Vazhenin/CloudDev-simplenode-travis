const favoriteWeather = process.env.BEST_WEATHER;
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  while (true) {
    console.log(`My favorite weather is ${favoriteWeather}`);
    await sleep(5000);
  }
}

main();
