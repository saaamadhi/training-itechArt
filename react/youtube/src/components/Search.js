import React, {useState} from 'react';
import {API_KEY, BASE_URL} from './constants';
import '../styles/search.css';
import {useDispatch} from 'react-redux';
import {saveData} from '../redux/actions/index';

export default function Search() {
    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch();

    const getData = async() => {
        const url = `${BASE_URL}part=snippet&q=${searchValue}&key=${API_KEY}`;
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            const resultList = data.items;
            dispatch(saveData({arr: resultList}));
        } 
    }
    
    return (
        <div className="search">
            <input 
                className="search__input"
                type="text" 
                value={searchValue}
                placeholder="Enter smth..." 
                onChange={(event) => setSearchValue(event.target.value)}
             />
            <button className="search__btn" onClick={() => getData()}></button>
        </div>
    )
}
