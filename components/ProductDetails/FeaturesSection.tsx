import React from "react";
import CardSlider from "../Products/CardSlider";
import { useRelatedListingQuery } from "@/apollograph/generated";
import ProductLoader from "../Loader/ProductLoader";

const FeaturesSection = ({ listingId }: { listingId: number | string }) => {
  const numericId = Number(listingId);

  const { data, loading, error } = useRelatedListingQuery({
    variables: { listingId: numericId },
    skip: !numericId,
  });

  const products = React.useMemo(() => {
    return data?.relatedListing?.items ?? [];
  }, [data]);

  if (error) {
    console.error("Related listing error:", error);
    return <p className="text-red-500">Failed to load related products.</p>;
  }


  return (
    <div>
      <h6 className="lg:text-2xl md:text-lg text-base font-semibold text-primaryColor text-center">
        Related Products
      </h6>

      <div className="mt-10">
        {loading && <ProductLoader />}

        {!loading && products.length > 0 && (
          <CardSlider products={products} />
        )}

        {!loading && products.length === 0 && (
          <p className="text-center text-gray-400">
            No related products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default FeaturesSection;
