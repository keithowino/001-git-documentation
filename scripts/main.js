"use strict";

const appName = "git documentation";

document.title = appName.toUpperCase();

const titleElement = document.querySelector("#js-s-t-s");
const siteTileRefElement = document.querySelector(".js-site-title-ref");

titleElement.innerHTML = appName;
siteTileRefElement.innerHTML = appName;