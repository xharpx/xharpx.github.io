"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-03

      Project to create a table of headings from an article
      Author: harpreet kaur
      Date:   4/29/24

      Filename: project05-03.js
*/

let sourceDoc = document.getElementById("source_doc");
let toc = document.getElementById("toc");
let headingCount = 1;
const heading = "H2";

for(let n = sourceDoc.firstElementChild; n !== null; n = n.nextElementSibling){
    if(n.nodeName === heading){
        
        let anchor = document.createElement("a"); //a

        anchor.setAttribute("name", "doclink" + headingCount); //b

        n.insertBefore(anchor, n.firstChild); //c

        let listItem = document.createElement("li"); //d

        let link = document.createElement("a"); //d

        link.textContent = n.textContent; //e

        listItem.appendChild(link);

        link.setAttribute("href", "#doclink" + headingCount); //f

        toc.appendChild(listItem); //g

        headingCount++; //h
    }
}
