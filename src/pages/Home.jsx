import R01Banner from "../components/R01Banner";
import R02Carousel from "../components/R02Carousel";
import R03Cards from "../components/R03Cards";
import R04Ofertas from "../components/R04Ofertas";
import R05Tabs from "../components/R05Tabs";
import R06MasPedidos from "../components/R06MasPedidos";

export default function Home () {
  return (
    <>
      <R01Banner></R01Banner>
      <R02Carousel></R02Carousel>
      <h2 className="text-center">¿Qué quieres hacer?</h2>
      <R03Cards></R03Cards>
      <h2 className="text-center">Tenemos lo que estás buscando</h2>
      <R04Ofertas></R04Ofertas>
      <R05Tabs></R05Tabs>
      <R06MasPedidos></R06MasPedidos>
    </>
  );
}