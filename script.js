/* Initialising typeahead-standalone.js: https://typeahead.digitalfortress.tech/ */
  
typeahead({
    input: document.querySelector('.searchterm'),
    source: {
    prefetch: {
        url: "https://raw.githubusercontent.com/webKythe/verifyChat/main/sources/everything.json",
        },
    identifier: 'name',
    transform: (data) => { 
    return data.verifyWith;
    }

},

debounceRemote: 200,
highlight: true,
className: 'typeahead-sgst',
minLength: 2,
preventSubmit: false,
hint: true,
autoSelect: true,
templates: {
    suggestion: (verifyChat) => (
    `<div  class="single-item"  >
    <div class="company_name">${verifyChat.name}</div>
    </div>`
    ),
    
header: () => 'Company Name',
notFound: () => 'Sorry!!!&#x1F61F;, Company details not available in our database <br> Please request it <a href="#"> here</a> ',
footer:() => 'Source: <a href="#"> Github</a>',
},
onSubmit: (e, selectedSuggestion) => {



 
if (selectedSuggestion) {
const myJSON = JSON.stringify(selectedSuggestion);
const outp=JSON.parse(myJSON);
const {name, url, email,supportPage, dataType, twitter} = outp;

document.getElementById('output'),innerHTML ="";

/* format to display content back as html
document.getElementById('nitter').innerHTML = '<a href=' + url +' target="_blank" style="color:green">' +  'Twitter   </a>';	

*/

document.getElementById('naam').innerHTML = `<h3 style="color:red";> Company: ${name} </h3>`;
document.getElementById('email').innerHTML = `<p>${email}` +'</p>';
document.getElementById('url').innerHTML = `<a href=${url} target="_blank" >Official Website </a>`;
document.getElementById('support').innerHTML = `<a href=${supportPage} target="_blank" >Customer Support Page</a>`;	
document.getElementById('nitter').innerHTML = `<a href=${twitter} target="_blank" >Twitter Page  </a>`;	
document.getElementById('dataType').innerHTML = `<p> Data Source - "${dataType}" </p>`;








}

}



});	 

