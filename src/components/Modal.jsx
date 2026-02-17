function Modal({ nft, onClose }) {
    if (!nft) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <span className="close" onClick={onClose}>×</span>
                <img src={nft.image} alt={nft.name} />
                <h2>{nft.name}</h2>
                <p><strong>Artist:</strong> {nft.artist}</p>
                <p><strong>Price:</strong> {nft.price} RS</p>
                <p>{nft.description}</p>
                <button className="modal-btn"> Buy </button>
            </div>
        </div>
    );
}

export default Modal;
