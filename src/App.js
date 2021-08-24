import { useState } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import AppSearch from './components/AppSearch';
import CatItem from './components/CatItem';
import CatPost from './components/CatPost';
import cats from './data/cats';

function App() {
    const [selectedCat, setSelectedCat] = useState(null);
    const [searchText, setSearchText] = useState('');

    function onCatOpenClick(cat) {
        setSelectedCat(cat);
    }

    function onCatCloseClick() {
        setSelectedCat(null);
    }

    const catItems = cats.filter((cat) => {
        return cat.title.includes(searchText);
    }).map((cat, index) => {
        return <CatItem key={index} cat={cat} onCatClick={onCatOpenClick} />;
    });

    let catPost = null;
    if (!!selectedCat) {
        catPost = <CatPost cat={selectedCat} onBgClick={onCatCloseClick} />;
    }

    return (
        <div className="app">
            <AppHeader />
            <section className="app-section">
                <div className="app-container">
                    <AppSearch value={searchText} onValueChange={setSearchText} />
                    <div className="app-grid">
                        {catItems}
                    </div>
                </div>
            </section>
            {catPost}
        </div>
    );
}

export default App;
