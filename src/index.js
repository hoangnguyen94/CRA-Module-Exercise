import React from 'react';
import ReactDOM from 'react-dom/client';
import { choice, remove } from "./helpers.js";
import items from "./foods.js"


let item = choice( items );

console.log( `I'd like one ${item}, please.` );
console.log( `Here you go: ${item}` );
console.log( `Delicious! May I have another?` );

let remaining = remove( item, items );

console.log(`I'm sorry, we're all out. We have ${remaining} left.`)