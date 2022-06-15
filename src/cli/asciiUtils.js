import asciify from "asciify-image";
import figlet from "figlet";

export async function pokemonToAscii(pokemonId) {
  let options = {
    fit: "box",
    width: 60,
    height: 60,
  };
  let asciiImage = await asciify(
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
    options
  );
  console.log(asciiImage);
  return;
}

export function textToAscii(text) {
  figlet(text, function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });
}
