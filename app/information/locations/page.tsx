import { Card, Navigator } from '@/components/';
import { Routes } from '@/models';
import { getLocations } from './services';

async function fetchLocations() {
  return await getLocations();
}

async function Locations() {
  const characters = await fetchLocations();

  return (
    <>
    <Navigator pathNames={[Routes.HOME, Routes.CHARACTERS]} />
      {characters.map((Location) => (
        <Card key={Location.id} data={Location} />
      ))}
    </>
  );
}

export default Locations