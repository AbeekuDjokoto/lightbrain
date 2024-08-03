import DetailedListingCard from "../components/detailedListingCard/DetailedListing";
import { DetailedListData } from "../mocks";

const DetailedListing = () => {
  return (
    <div>
      <div className="mx-auto w-90 max-w-custom flex flex-col gap-6">
        <div className="flex flex-col overflow-x-scroll whitespace-nowrap overflow-y-hidden gap-4">
          {DetailedListData.map((data) => {
            return (
              <div key={data.id}>
                <DetailedListingCard data={data} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DetailedListing;
