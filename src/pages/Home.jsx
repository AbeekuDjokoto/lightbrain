import Header from "../components/header/Header";
import Main from "../components/main/Main";

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <Header />
      <Main />
    </div>
  );
};

export default Home;
