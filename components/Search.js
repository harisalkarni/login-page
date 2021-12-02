import React from 'react'

function Search() {
    return (
        <div>
            <h2>Selamat Datang di Skills.id</h2>
            <p>Silahkan cari dan pilih kursus yang menarik bagi anda di skill.id</p>
            <div>
                <input type="search" name="search" placeholder='search' ></input>
                <button>Find Course</button>
            </div>
        </div>
    )
}

export default Search
