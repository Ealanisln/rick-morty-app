import Card from '@/components/Card/Card';
import { getLocations } from './services';

async function fetchLocations() {
  return await getLocations();
}

async function Locations() {
  const characters = await fetchLocations();

  return (
    <>
      {characters.map((Location) => (
        <Card key={Location.id} data={Location} />
      ))}
    </>
  );
}

export default Locations