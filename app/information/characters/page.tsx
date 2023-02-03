import { Card, Navigator} from '@/components/';
import { Routes } from '@/models';
import { getCharacters } from './services';

async function fetchCharacters() {
  return await getCharacters();
}

async function Characters() {
  const characters = await fetchCharacters();

  return (
    <>
      <Navigator pathNames={[Routes.HOME, Routes.LOCATIONS]} />
      {characters.map((character, index) => (
        <Card key={index} data={character} />
      ))}
    </>
  );
}

export default Characters