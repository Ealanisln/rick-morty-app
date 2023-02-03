import Card from '@/components/Card/Card';
import { getCharacters } from './services';

async function fetchCharacters() {
  return await getCharacters();
}

async function Characters() {
  const characters = await fetchCharacters();

  return (
    <>
      {characters.map((character, index) => (
        <Card key={index} data={character} />
      ))}
    </>
  );
}

export default Characters