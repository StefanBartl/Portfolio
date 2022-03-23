/* ================ 
?   === page library ===
    ================ */
function translation(language) {
  if (language === "de") {
    //#region  navlist deutsch
    navlist_start.innerText = "start";
    navlist_start.title = "Zurück zum Start!";
    navlist_start.alt = "Zurück zum Start";
    navlist_projects.innerText = "projekte";
    navlist_projects.title = "Zu den Projekten!";
    navlist_projects.alt = "Zu den Projekten";
    navlist_contact.innerText = "kontakt";
    navlist_contact.title = "Zu den Kontaktöglichkeiten!";
    navlist_contact.alt = "Zu den Kontaktöglichkeiten";
    navlist_about.innerText = "über";
    navlist_about.title = "Über diese Seite!";
    navlist_about.alt = "Über diese Seite";
    navlist_language.innerText = "english";
    navlist_language.title = "Switch to English";
    navlist_language.alt = "Switch to English";
    navlist_myicon.title =
      "Mein Motto: Liebe die Wissenschaft, Technik & den Frieden! ";
    navlist_myicon.alt =
      "Logo mit meinen Motto: Liebe die Wissenschaft, Technik & den Frieden! ";
    //#endregion
    //#region introduction deutsch
    introduction_pageHeadline .innerText = "Portfolio von Stefan Bartl";
    introduction_image.title = "Energie tanken und Ideen nachgehen - in der Ruhe liegt die Kraft."
    introduction_image.alt = "Schwarz-Weißes Bild von mir sitzend auf einer Bank im Wald. Energie tanken für neue Projekte.";
    introduction_headlineOne.innerText = "Willkommen auf meiner Seite.";
    introduction_headlineTwo.innerText = "Enthusiasmus pur";
    introduction_headlineThree.innerText = "HTML, CSS & Javascript";
    introduction_headlineOutro.innerText = "Mit Liebe zur Wissenschaft, der Technik und dem Frieden !";
    introduction_paragraphOne.innerText = "Auf dieser Portfolio-Webppage bekommst du einen Einblick in die letzten Projekte die ich abgeschlossen habe. Als ich 2020 mit dem programmieren begann konnt eich noch nicht ahnen wie viel Spaß und Leidenschaft diese in mir entfesseln würde. Als Autodidakt bin ich stets auf der Suche nach neuen Herausforderungen. Web-Development kommt da wie gerufen...";
    introduction_paragraphTwo.innerText = "Derzeit beschäftige ich mich stark konzentriert auf diese 3 Bereiche, spezialisiert auf Front-End. Daher findest du hier auch ausschließlich Projekte die sich mit CSS & Javascript beschäftigen - teils spielerisch, teils mit praktischen Nutzen.";
    //#endregion

    console.log(`Page translated to Deutsch`);
  };
  if (language !== "de") {
  //#region navlist english
    navlist_start.innerText = "start";
    navlist_start.title = "Back to start!";
    navlist_start.alt = "Back to tart";
    navlist_projects.innerText = "projects";
    navlist_projects.title = "Go to projects!";
    navlist_projects.alt = "Go to projects";
    navlist_contact.innerText = "contact";
    navlist_contact.title = "Go to contact!";
    navlist_contact.alt = "To contact";
    navlist_about.innerText = "about";
    navlist_about.title = "About this site!";
    navlist_about.alt = "About this site";
    navlist_language.innerText = "deutsch";
    navlist_language.title = "Zu Deutsch wechseln!";
    navlist_language.alt = "Zu Deutsch wechseln";
    navlist_myicon.title = "My motto: love science, technology & peace!";
    navlist_myicon.alt =
      "Logo with my motto: love science, technology & peace!";
    //#endregion
    //#region introduction english
    introduction_pageHeadline.innerText = "Portfolio from Stefan Bartl";
    introduction_image.title = "Recharge your batteries and pursue ideas - strength lies in stillness."
    introduction_image.alt = "Black and white picture of me sitting on a bench in the forest. Recharge your batteries for new projects.";
    introduction_headlineOne.innerText = "Welcome to my site.";
    introduction_headlineTwo.innerText = "Pure enthusiasm";
    introduction_headlineThree.innerText = "HTML, CSS & Javascript";
    introduction_headlineOutro.innerText = "With love for science, technology and peace!";
    introduction_paragraphOne.innerText = "On this portfolio web page you get an insight into the last projects I have completed. When I started programming in 2020, I had no idea how much fun and passion it would unleash in me. As an autodidact, I am always looking for new challenges. Web development comes at just the right time...";
    introduction_paragraphTwo.innerText = "Currently I'm busy with a strong focus on these 3 areas, specializing in front-end. Therefore you will only find projects that deal with CSS & Javascript - partly playful, partly with practical use.";
    //#endregion

    console.log(`Page translated to english`);

  };
};

/* =============================
?   === navbar language toggle button ===
    ============================= */
document.querySelector(".navlist-language").addEventListener("click", () => {
  // if clicked set localstorage either to "de" or to "en"
  document.querySelector(".navlist-language").innerText === "english"
    ? (localStorage.language = "en")
    : (localStorage.language = "de");
  // invoke translation of page
  translation(localStorage.language);

  //console.log(`Language setted to ${localStorage.language}.`);
});
