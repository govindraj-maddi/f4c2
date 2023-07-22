import React from 'react'
import {useState,useEffect} from 'react'
import search from '../search.png'

export const LISTDATA='';

export default function SearchComponent() {

const [input,setInput] =  useState('');

async function getBookList() {
    let url=`https://www.googleapis.com/books/v1/volumes?q=${input.split(" ").join("+")}`;
    const resp=await fetch(url);
    const data=await resp.json();
    LISTDATA=data;
}

  return (
    <div>
        <figure>
            <img src={search} alt="" />
        </figure>

        <input type="text" placeholder='Search for the book you want and read it now... Sherlock Holmes, Harry Pot...' onChange={(e) => setInput(e.target.value)}/>

        <button onClick={getBookList}>Search</button>
    </div>
  )
}
