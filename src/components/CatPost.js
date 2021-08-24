import './CatPost.css';

function CatPost(props) {
    const { cat, onBgClick } = props;
    return (
        <div className="cat-post">
            <div className="cat-bg" onClick={onBgClick} />
            <div className="cat-content">
                <img src={cat.fullUrl} />
                <h3>{cat.title}</h3>
            </div>
        </div>
    );
}

export default CatPost;