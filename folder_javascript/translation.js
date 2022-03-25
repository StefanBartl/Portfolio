/* =============================
?   === navbar language toggle button ===
    ============================= */
document.querySelector(".navlist-language").addEventListener("click", () => {
// if clicked set localstorage either to "de" or to "en"
document.querySelector(".navlist-language").innerText === "english"
    ? (localStorage.language = "en")
    : (localStorage.language = "de");
// invoke translation of page
general_translation(localStorage.language);
home_translation(localStorage.language);

//console.log(`Language setted to ${localStorage.language}.`);
});

/* =========================== 
?   === general components library ===
    =========================== */
function general_translation(language) {
  if(document.querySelector(".navlist")){
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

          //console.log(`General elements translated to Deutsch`);
        };
        if (language !== "de") {
        //#region navlist english
          navlist_start.innerText = "home";
          navlist_start.title = "Back to home!";
          navlist_start.alt = "Back to home";
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

          //console.log(`General elements translated to English`);
        };
  };
};
      
/* ================= 
?   === home library ===
    ================= */
function home_translation(language) {
  if(document.querySelector(".section-introduction")){
      if (language === "de") {
        //#region section introduction deutsch
        introduction_pageHeadline.innerText = "front-end. web-development";
        introduction_image.title = "Energie tanken und Ideen nachgehen - in der Ruhe liegt die Kraft."
        introduction_image.alt = "Schwarz-Weißes Bild von mir sitzend auf einer Bank im Wald. Energie tanken für neue Projekte.";
        introduction_headlineOne.innerText = "Mein Name ist Stefan Bartl. Willkommen auf meiner Seite.";
        introduction_headlineTwo.innerText = "Enthusiasmus pur";
        introduction_headlineThree.innerText = "HTML, CSS & Javascript";
        introduction_headlineOutro.innerText = "Mit Liebe zur Wissenschaft, der Technik und dem Frieden !";
        introduction_paragraphOne.innerText = "Auf dieser Portfolio-Webppage bekommst du einen Einblick in die letzten Projekte die ich abgeschlossen habe. Als ich 2020 mit dem programmieren begann konnt eich noch nicht ahnen wie viel Spaß und Leidenschaft diese in mir entfesseln würde. Als Autodidakt bin ich stets auf der Suche nach neuen Herausforderungen. Web-Development kommt da wie gerufen...";
        introduction_paragraphTwo.innerText = "Derzeit beschäftige ich mich stark konzentriert auf diese 3 Bereiche, spezialisiert auf Front-End Web-Development. Daher findest du hier auch ausschließlich Projekte die sich mit CSS & Javascript beschäftigen - teils spielerisch, teils mit praktischen Nutzen.";
        //#endregion
        //#region section projects deutsch
        projects_section_headline.innerText = "Projekte";
        project_one_image.title = "Weckt es Erinnerungen an dein Kinderzimmer?";
        project_one_image.alt = "Ein Etch-a-Sketch Spielapparat in rot mit weißen Knöpfen.";
        project_two_image.title = "4-Gewinnt: Die erweiterte Version des 'Doddel-Schach' !";
        project_two_image.alt = "Eine blaue 4-Gewinnt Spielkonsole mit gelben und roten Spielsteinen darin. Gelb hat gewonnen.";
        project_three_image.title = "Tic-Tac-Toe, 3-Gewinnt, Doddelschach. Dieses Spiel hat viele Namen!";
        project_three_image.alt = "Ein rotes 3-Gewinnt Spielfeld. Der Spieler/Die Spielerin mit 'O' hat diagonal gewonnen.";
        project_four_image.title = "Das allseits beliebte und bekannte Stein-Schere-Papier!";
        project_four_image.alt = "Drei weiße Hände im Comic-Stil die Stein-Schere-Papier spielen.";
        project_one_headline.innerText = "Etch-a-Sketch"; 
        project_two_headline.innerText = "4-Gewinnt";
        project_three_headline.innerText = "Tic-Tac-Toe";
        project_four_headline.innerText = "Stein-Schere-Papier";
        project_one_description.innerText = "Etch A Sketch™ ist eine Variante der Zaubertafel und war als Spielzeug besonders in den 1970er Jahren populär. Das Projekt versucht das Original so zu imitieren, dass es möglichst Spaß macht und dabei einige nützliche Features wie eine freie Farbwahl oder einstellbare Auflösung integriert. Das Projekt hat in der Entwicklung großen Spaß bereitet: Vor allem die Auseinandersetzung mit CSS-Grid sowie die Ereignissteuerung mit Javascript waren besonders lehrreich!";
        project_two_description.innerText = "Dieses war mein erste Projekt für das ich mir die Zeit genommen habe um es umfassend nach meinen Vorstellungen auszubauen: Als User kann man die Spielfeldgröße frei wählen, Spielsteinfarben tauschen, Statistiken und Einstellungen wie Name oder Sprache werden gespeichert, Serienspiele sind möglich, eine Gewinnanimation ist integriert und und und... Außerdem ist es responsiv und man kann es auch auf mobilen Endgeräten spielen! Das alles erforderte eine sehr weitreichende Auseinandersetzung mit zahlreichen Front-End-Development Themen.  Es würde mich sehr freuen wenn du es ausprobierst - viel Spaß !" ;
        project_three_description.innerText = "Das weltweit bekannte 'Tic-Tac-Toe' macht fast in jeder Situation Spaß zu sielen und ist auch ein guter Langeweile-Brecher. Die Umsetzung einer Online-Version erforerte einer erste Auseinandersetzung meinerseits mit der Programmierung einer Gaming-KI, die wenn sie fertig ist nicht wirkt wie ein lahmer Betrunkener um 3 Uhr nachts. Durch die deutlich geringere Anzahl an Spielmöglichkeiten war es eine sehr gute Vorbereitung für das '4-Gewinnt'-Projekt, dessen kleine Schwester es ist. Gerade die weniger hohe Komplexität und das dadurch schneller Spiel kann manchmal auch attraktiv sein! Wirst den Computer schlagen können ?";
        project_four_description.innerText = "Wer kennt es nicht ? Beliebt bei groß und klein - manchmal zum Spaß gespielt, manchmal aber auch zum Ausspielen von Bedeutendem! Die Programmierung war total lustig und spannend, ein guter Zufallsalgorhymtus wurde gefunden. Möchtest du wissen ob du mehr Glück hast als die Maschine vor dir?";
        project_one_link.innerText = "Probier die Zaubertafel aus !";
        project_two_link.innerText = "Eine Runde 4 - Gewinnt ?";
        project_three_link.innerText = "Drei gewinnt geht immer !";
        project_four_link.innerText = "Schnick, Schnack, Schnuck !";
        //#endregion
        //#region footer deutsch
        contact_headline.innerText = "Hier kannst du mich kontaktieren";
        contact_socialmedia_headline.innerText = "Über die sozialen Medien..."; 
        contact_myblog_headline.innerText = "...schau auf meinen Blog vorbei...";
        contact_myblog_image.title = "Hier gehts zu meinen deutschsprachigen Blog über die Gesellschaft, Politik und Wissenschaft!";
        contact_myblog_image.alt = "Eine rote Faust in einem grünen Kreis und zwei Sterne mit der Aufschrift: protestblog.eu - Be Heard!";
        contact_myemail.innerText = "...oder via E-Mail"; 
        //#endregion
        //console.log(`Home translated to Deutsch`);
      };
      if (language !== "de") {
        //#region section introduction english
        introduction_pageHeadline.innerText = "front-end. web-development";
        introduction_image.title = "Recharge your batteries and pursue ideas - strength lies in stillness."
        introduction_image.alt = "Black and white picture of me sitting on a bench in the forest. Recharge your batteries for new projects.";
        introduction_headlineOne.innerText = "My name is Stefan Bartl. Welcome to my site.";
        introduction_headlineTwo.innerText = "Pure enthusiasm";
        introduction_headlineThree.innerText = "HTML, CSS & Javascript";
        introduction_headlineOutro.innerText = "With love for science, technology and peace!";
        introduction_paragraphOne.innerText = "On this portfolio web page you get an insight into the last projects I have completed. When I started programming in 2020, I had no idea how much fun and passion it would unleash in me. As an autodidact, I am always looking for new challenges. Web development comes at just the right time...";
        introduction_paragraphTwo.innerText = "Currently I'm busy with a strong focus on these 3 areas, specializing in front-end web-development. Therefore you will only find projects that deal with CSS & Javascript - partly playful, partly with practical use.";
        //#endregion
        //#region section projects english
        projects_section_headline.innerText = "Projects";
        project_one_image.title = "Does it bring back memories of your childhood room?";
        project_one_image.alt = "An Etch-a-Sketch game machine in red with white buttons.";
        project_two_image.title = "4-in-a-row: The extended version of 'Noob Chess'!";
        project_two_image.alt = "A blue match 4 game console with yellow and red tiles inside. Yellow won.";
        project_three_image.title = "Tic-Tac-Toe, Match 3, Noob Chess. This game has many names!";
        project_three_image.alt = "A red match-3 board. The player with 'O' won diagonally.";
        project_four_image.title = "The well-loved and well-known rock-paper-scissors!";
        project_four_image.alt = "Comic style three white hands playing rock-paper-scissors.";
        project_one_headline.innerText = "Etch-a-Sketch"; 
        project_two_headline.innerText = "4-in-a-row";
        project_three_headline.innerText = "Tic-Tac-Toe";
        project_four_headline.innerText = "Rock-Paper-Scissors";
        project_one_description.innerText = "Etch A Sketch™ is a variant of the magic board and was particularly popular as a toy in the 1970s. The project tries to imitate the original in such a way that it is as fun as possible and integrates some useful features such as a free choice of color or adjustable resolution. The project was a lot of fun in the development: Above all, dealing with CSS grid and event control with Javascript were particularly instructive !";
        project_two_description.innerText = "This was my first project for which I took the time to expand it comprehensively according to my ideas: As a user, you can f.e. freely choose the size of the playing field, swap token colors,... Statistics and settings such as name or language are saved, series games are possible, a winning animation is integrated and and and... a lot of features are implemented! It's also responsive and you can also play it on mobile devices. All of this required a very extensive examination of numerous front-end development topics. I would be very happy if you try it out - have fun !" ;
        project_three_description.innerText = "The world-famous 'Tic-Tac-Toe' is fun to play in almost every situation and is also a good boredom breaker. Implementing an online version required my first exposure to programming a gaming AI that, when finished, wouldn't look like a lame drunk at 3am. Due to the significantly smaller number of game options, it was a very good preparation for the '4 in a row' project, of which it is the little sister. Especially the less high complexity and the resulting faster game can sometimes be attractive! Can you beat the computer ?";
        project_four_description.innerText = "Who does not know it ? Popular with big and small - sometimes played for fun, but sometimes to play out something significant! The programming was totally fun and exciting, a good random algorithm was found. Do you want to know if you are luckier than the machine in front of you ?";
        project_one_link.innerText = "Try the magic board !";
        project_two_link.innerText = "Wanna play a round 4-in-a-row ?";
        project_three_link.innerText = "3-in-a-row is always possible!";
        project_four_link.innerText = "Rock Paper Scissors !";
        //#endregion    
        //#region footer english
        contact_headline.innerText = "Here you can contact me";
        contact_socialmedia_headline.innerText = "via social media..."; 
        contact_myblog_headline.innerText = "...check out my (german) blog...";
        contact_myblog_image.title = "Click here for my german speaking blog about society, politics and science!";
        contact_myblog_image.alt = "Red fist with green circle, two stars and the text 'protestblog.eu - be heard!' around it.";
        contact_myemail.innerText = "...or via e-mail"; 
        //#endregion
        
        //console.log(`Home translated to english`);
      };
  };
};
    