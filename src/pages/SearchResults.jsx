import { useLocation } from "react-router";
import { DetailedListData } from "../mocks";
import DetailedListingCard from "../components/detailedListingCard/DetailedListing";

const SearchResults = () => {
  const findLocation = useLocation();
  const query = new URLSearchParams(findLocation.search).get("query");

  const filteredListings = DetailedListData.filter((listing) =>
    listing.title.toLowerCase().includes(query.toLowerCase())
  );

  const isQueryEmpty =
    query === null || query.trim() === "" || query === "undefined";

  return (
    <>
      <div className="mx-auto w-90 max-w-custom">
        {isQueryEmpty ? (
          <div className="flex flex-col gap-4">
            {DetailedListData.map((data) => (
              <div key={data.id}>
                <DetailedListingCard data={data} />
              </div>
            ))}
          </div>
        ) : filteredListings.length > 0 ? (
          <div className="flex flex-col gap-4">
            {filteredListings.map((data) => (
              <div key={data.id}>
                <DetailedListingCard data={data} />
              </div>
            ))}
          </div>
        ) : (
          <p>{`No results found for "${query}".`}</p>
        )}
      </div>
    </>
  );
};

export default SearchResults;
