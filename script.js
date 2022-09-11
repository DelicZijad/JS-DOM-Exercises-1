/* JavaScript DOM Exercises 01 Tutorial: https://youtu.be/EHF7xBUAmrQ */

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/
const para=document.querySelector('p');

const body=document.querySelector('body')
const heading=document.querySelector('h1')
para.innerHTML=para.innerText.split(' ').map(x=>x.length>8?`<span style="background-color:yellow">${x}</span>`:x).join(' ')

/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (https://forcemipsum.com/)
*/

const link=document.createElement('a');
link.setAttribute('href','https://forcemipsum.com/');
link.setAttribute('target','_blank');
link.innerText='Link';
body.appendChild(link);


/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/
para.innerHTML=para.innerHTML.split(/\.[^\.|<]/).map(x=>x+'.'+`<br>`).join(' ')


/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/
const count=document.createElement('p')
count.innerText=para.innerText.split(' ').length+' '+'words';
heading.after(count)

/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/
para.innerHTML=para.innerHTML.replace(/\?/g,'🤔').replace(/\!/g,'😲')

