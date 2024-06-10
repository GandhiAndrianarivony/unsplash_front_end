import { useQuery } from "@apollo/client";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import GET_IMAGES from "../../../lib/graphql/queries/getImageList";
import ImageItem from "../../../components/images/ImageItem";

type PropsType = {
    searchedData?: any;
};

function InfiniteScrollComponent({
    searchedData,
}: PropsType): string | JSX.Element {
    const [hasMore, setHasMore] = useState(true);
    const [items, setItems] = useState<any[]>([]);

    const { loading, error, data, fetchMore } = useQuery(GET_IMAGES, {
      variables: { first: 10 },
      onCompleted: (data) => {
        if (data) {
            setItems(data.getImages.edges);
            setHasMore(data.getImages.pageInfo.hasNextPage);
        }
    },
    });

    if (loading) return "Loading ...";
    if (error) return `Error: ${error}`;

    const images = searchedData ?? data.getImages;

    // Fonction pour charger plus de données
    const fetchMoreData = () => {
        fetchMore({
            variables: {
              first: 10,
              after: data.getImages.pageInfo.endCursor,
            },
            updateQuery: (previousResult, { fetchMoreResult }) => {
                if (!fetchMoreResult) return previousResult;

                const newEdges = fetchMoreResult.getImages.edges;
                const pageInfo = fetchMoreResult.getImages.pageInfo;

                if (newEdges.length === 0 || !pageInfo.hasNextPage) {
                    setHasMore(false);
                }

                setItems(prevItems => [...prevItems, ...newEdges]);

                return {
                    getImages: {
                        __typename: previousResult.getImages.__typename,
                        edges: [...previousResult.getImages.edges, ...newEdges],
                        pageInfo,
                    },
                };
            },
        });
    };

    return (
        <div className="relative">
            <div className="container w-2/3 mx-auto">
                <InfiniteScroll
                    dataLength={images.edges.length}
                    next={fetchMoreData}
                    hasMore={hasMore}
                    loader={<h4>Loading...</h4>}
                    endMessage={<p>Yay! You have seen it all</p>}
                >
                    <div className="w-full gap-4 columns-1 md:columns-3 space-y-4">
                        {images.edges.map((item: any) => (
                            <div
                                key={item.node.id}
                                className="relative group border-none"
                            >
                                <ImageItem
                                    className="w-full contrast-125 opacity-85 group-hover:opacity-100 transition-opacity"
                                    item={item}
                                />
                            </div>
                        ))}
                    </div>
                </InfiniteScroll>
            </div>
        </div>
    );
}

export default InfiniteScrollComponent;
