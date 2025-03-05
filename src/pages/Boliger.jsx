import Boligertilsalg from "../components/boliger/boligertilsalg";
import Boligsearch from "../components/boliger/boligsearch";
import Boligerhero from "../components/boliger/heroboliger";

const boliger = () => {
  return (
    <main>
      <Boligerhero />
      <Boligsearch />
      <Boligertilsalg />
    </main>
  );
};

export default boliger;
