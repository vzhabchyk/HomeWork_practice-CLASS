'use strict';

const elementHTML = new CustomHTML ('a', {id: 'link', className: 'link-style', href: 'https://google.com'}, 'Hello world!');
elementHTML.render('body');