import React from 'react'

const homePage = () => {
  return (
    <div style={{fontSize:'1.5em', marginTop:'2em'}}>
      Hi, this is a demo for the next gen backoffice, although the first generation hasn't been born yet...
      <br/>I hope we can make backoffice better than it is today, , and it has never been a better time to refactor it now for below reasons
      <ul>
        <li>it only contains three pages (so far, hopefully)</li>
        <li>we havn't started settlement page yet, so we would have to do it anyway</li>
        <li>the transaction page has architect problems, and is very very slow. we are re-factoring it right now</li>
        <li>the merchant page doesn't really fit our database, so we customized it, and it's a very small page</li>
      </ul>
   
      with this mock site (will do footer tmrw), 50% of work is already done. 
      <br/><br/>i hope it's not too radical for us...
    </div>
  )
}

export default homePage