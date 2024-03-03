/* HomePage.jsx */
import { Container } from "react-bootstrap";

const HomePage = () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">
        Bienvenido maestro Pokemón
      </h1>
      <img
        height="300"
        src="/pikachu.png"
        alt=""
      />
    </Container>
  );
};
export default HomePage;
