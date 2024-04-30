import Header from "./Components/Header";
import Hero from "./Components/Hero";

const App = () => {
  return (
    <div className="bg-primary min-h-screen w-full flex flex-col justify-between">
      <Header />
      <Hero />
      <div className="footer bg-[#ae77af]  w-full text-center mt-8">
        <p> © 2023. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default App;
