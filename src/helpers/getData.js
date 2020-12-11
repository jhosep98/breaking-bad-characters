export const getData = async (character) => {
  const urlApi = `https://www.breakingbadapi.com/api/characters?name=${encodeURI(
    character
  )}`;
  const response = await fetch(urlApi);
  const data = await response.json();

  const characters = data.map((character) => ({
    id: character.char_id,
    name: character.name,
    nickname: character.nickname,
    img: character.img,
  }));
  return characters;
};
