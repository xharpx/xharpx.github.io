"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-04

      Project to display footnotes in a popup window
      Author: Harpreet kaur
      Date:   4/30/24

      Filename: project05-04.js
*/

// Node list of phrases that are associated with footnotes
let phrases = document.querySelectorAll("article blockquote dfn");

for(let i = 0; i < phrases.length; i++){
    phrases[i].onclick = function(){
        let phrase = document.createElement("h1");
        phrase.textContent = this.textContent;

        let footnote = document.createElement("p");
        footnote.textContent = footnotes[i];
        footnote.style.fontStyle = "italilc";
        footnote.style.fontSize = "1.2em";

        let closeButton = document.createElement("input");
        closeButton.value = "Close Footnote";
        closeButton.type = "button";
        closeButton.style.display = "block";
        closeButton.style.margin = "10px auto";

        let popup = window.open("", "footnote", "width=300, height=200, top=100, left=100");

        popup.document.body.style.backgroundColor = "ivory";
        popup.document.body.style.fontSize = "16px";
        popup.document.body.style.padding = "10px";

        popup.document.body.appendChild(phrase);
        popup.document.body.appendChild(footnote);
        popup.document.body.appendChild(closeButton);

        closeButton.onclick = function(){
            popup.close();
        }
    }
}