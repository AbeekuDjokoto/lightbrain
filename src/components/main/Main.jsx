import { mockData } from "../../mocks";
import Card from "../card/Card";

const Main = () => {
  return (
    <main>
      <div className="mx-auto w-90 max-w-custom flex flex-col gap-6">
        <div className="flex flex-col">
          <h2 className="text-[#1f2a37] font-bold leading-[30px] text-2xl">
            Thousands of properties globally
          </h2>
          <p className="text-base leading-6 text-black">
            Listings we thing you will love
          </p>
        </div>
        <div className="flex overflow-x-scroll whitespace-nowrap overflow-y-hidden gap-4">
          {mockData.map((data) => {
            return (
              <div key={data.id}>
                <Card data={data} />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Main;
