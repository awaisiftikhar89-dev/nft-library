import { useState } from "react";
import nftData from "../data/nftData";
import NFTCard from "../components/NFTCard";
import Modal from "../components/Modal";
import FilterBar from "../components/FilterBar";

function Home() {
    const [sortOption, setSortOption] = useState("");
    const [selectedNFT, setSelectedNFT] = useState(null);

    const sortedNFTs = [...nftData].sort((a, b) => {
        if (sortOption === "low") return a.price - b.price;
        if (sortOption === "high") return b.price - a.price;
        return 0;
    });

    return (
        <div className="container">
            <h1>NFT Gallery</h1>
            <FilterBar setSortOption={setSortOption} />

            <div className="grid">
                {sortedNFTs.map((nft) => (
                    <NFTCard
                        key={nft.id}
                        nft={nft}
                        onView={setSelectedNFT}
                    />
                ))}
            </div>

            <Modal nft={selectedNFT} onClose={() => setSelectedNFT(null)} />
        </div>
    );
}

export default Home;
