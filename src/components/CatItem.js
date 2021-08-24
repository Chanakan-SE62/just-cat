import './CatItem.css';

function CatItem(props) {
    const { cat, onCatClick } = props;
    return (
        <div className="cat-item">
            <img src={cat.thumbnailUrl} onClick={() => onCatClick(cat)} />
            <h4>{cat.title}</h4>
        </div>
    );
}

export default CatItem;