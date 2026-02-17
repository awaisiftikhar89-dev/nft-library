function NFTCard({ nft, onView }) {
    return (
        <div className="card">
            <img src={nft.image} alt={nft.name} />
            <h3>{nft.name}</h3>
            <p>Artist: {nft.artist}</p>
            <p>Price: {nft.price} RS</p>
            <button className="btn" onClick={() => onView(nft)}>
                View Details
            </button>
        </div>
    );
}

export default NFTCard;
