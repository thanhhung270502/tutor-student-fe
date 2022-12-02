import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import HeadessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import ClassItem from '~/components/ClassItem/index';
import './search.scss';
import { useEffect, useRef, useState } from 'react';

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);

    const inputRef = useRef();

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <HeadessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className="search__result" tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <div className="search__title">Class</div>
                        <ClassItem />
                        <ClassItem />
                        <ClassItem />
                        <ClassItem />
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className="search d-flex">
                {/* <div className="search__field"> */}
                <input
                    ref={inputRef}
                    value={searchValue}
                    className="border-end"
                    placeholder="Search..."
                    spellCheck={false}
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                        setSearchResult([1, 1, 1, 1]);
                    }}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && (
                    <button className="search__clear" onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} className="icon__clear" />
                    </button>
                )}
                {/* <button className="search__loading">
                    <FontAwesomeIcon icon={faSpinner} className="icon__clear" />
                </button> */}
                {/* </div> */}
                <button className="search__btn">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadessTippy>
    );
}

export default Search;
