import React from 'react'

const searchResult =  ({result})=>(
    <div name={result.id} className='margin-top-10'>
        <a href={result.siteUrl}>{result.siteUrl}</a>
        <div>{result.description}</div>
    </div>)

export default searchResult
