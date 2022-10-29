let widgetName = document.querySelector('[data-widget-name]')
let widgetNameValue = widgetName.dataset.widgetName
console.log(widgetName)

let links = document.querySelectorAll('a')
for (const item of links) {
 let hrefHTMLvalue = item.getAttribute('href')
 if(hrefHTMLvalue && hrefHTMLvalue.includes('://') && !hrefHTMLvalue.startsWith('http://internal.com')) item.style.color = 'orange'
 //if( item.href.includes('://') && !item.href.includes('file://') && !item.href.startsWith('http://internal.com') ) item.style.color = 'orange'
}