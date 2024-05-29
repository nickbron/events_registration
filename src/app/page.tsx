import { getEvents } from "@/api/getEvents";
import Event from "@/components/Event/Event";

const getData = () => getEvents();

export default async function Home() {
  const data = await getData();
  console.log("GETDATA:", data);

  return <Event data={data} />;
}
