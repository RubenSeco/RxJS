import { fromEvent } from "rxjs";

import { map, tap } from "rxjs/operators";


const text = document.createElement("div");

text.innerHTML = `Dolore enim sit ipsum ex. Enim culpa deserunt consequat anim aliqua. Non amet fugiat exercitation laborum mollit. Enim sint dolore tempor anim dolore id exercitation. Fugiat minim nisi eiusmod commodo in tempor irure laborum ipsum consectetur occaecat tempor. In anim occaecat sint nisi commodo labore eu anim fugiat id commodo magna. Velit minim elit irure deserunt duis proident voluptate quis."
 <br/><br/>
Labore ullamco sunt pariatur adipisicing magna minim veniam pariatur dolore cillum adipisicing. Cillum proident dolore id eiusmod magna culpa ipsum id exercitation sint nostrud. Magna in eu esse tempor dolore ea velit Lorem laboris sunt eu. Ut magna ea sit nulla ex deserunt quis."
<br/><br/>
"Et velit eu sunt laboris duis. Reprehenderit excepteur laborum cillum magna sint ipsum ex dolore aliqua esse. Laboris labore ex dolore labore duis officia cillum do do amet ut. Officia ullamco aliqua ad ex aute commodo qui.
<br/><br/>
Minim fugiat nisi nulla minim et esse excepteur quis laboris. Minim consectetur Lorem ullamco adipisicing est reprehenderit commodo tempor cillum ad. Aliqua ipsum ex tempor velit laboris. Laborum aliquip deserunt cupidatat fugiat. In adipisicing ex deserunt culpa tempor ipsum reprehenderit consequat. Aliquip consequat veniam id quis excepteur nisi sit occaecat id dolor.
<br/><br/>
Qui laboris sint eu fugiat culpa eu.Fugiat nulla voluptate aliquip aliqua eiusmod elit aute quis tempor laboris consectetur proident.Esse dolore irure tempor laborum voluptate commodo nostrud proident adipisicing adipisicing.
Dolore enim sit ipsum ex. Enim culpa deserunt consequat anim aliqua. Non amet fugiat exercitation laborum mollit. Enim sint dolore tempor anim dolore id exercitation. Fugiat minim nisi eiusmod commodo in tempor irure laborum ipsum consectetur occaecat tempor. In anim occaecat sint nisi commodo labore eu anim fugiat id commodo magna. Velit minim elit irure deserunt duis proident voluptate quis."
 <br/><br/>
Labore ullamco sunt pariatur adipisicing magna minim veniam pariatur dolore cillum adipisicing. Cillum proident dolore id eiusmod magna culpa ipsum id exercitation sint nostrud. Magna in eu esse tempor dolore ea velit Lorem laboris sunt eu. Ut magna ea sit nulla ex deserunt quis."
<br/><br/>
"Et velit eu sunt laboris duis. Reprehenderit excepteur laborum cillum magna sint ipsum ex dolore aliqua esse. Laboris labore ex dolore labore duis officia cillum do do amet ut. Officia ullamco aliqua ad ex aute commodo qui.
<br/><br/>
Minim fugiat nisi nulla minim et esse excepteur quis laboris. Minim consectetur Lorem ullamco adipisicing est reprehenderit commodo tempor cillum ad. Aliqua ipsum ex tempor velit laboris. Laborum aliquip deserunt cupidatat fugiat. In adipisicing ex deserunt culpa tempor ipsum reprehenderit consequat. Aliquip consequat veniam id quis excepteur nisi sit occaecat id dolor.
<br/><br/>
Qui laboris sint eu fugiat culpa eu.Fugiat nulla voluptate aliquip aliqua eiusmod elit aute quis tempor laboris consectetur proident.Esse dolore irure tempor laborum voluptate commodo nostrud proident adipisicing adipisicing.`;

const body = document.querySelector("body");
body.append(text);

const progressBar = document.createElement("div");

progressBar.setAttribute("class", "progress-bar");

body.append(progressBar);

// Función que haga el cálculo

const calcPecentageScroll = (event) => {

  const { scrollTop, scrollHeight, clientHeight } = event.target.documentElement;

  return ((scrollTop / (scrollHeight - clientHeight)) * 100);
  // console.log(((scrollTop / (scrollHeight - clientHeight)) * 100));

};

const scroll$ = fromEvent(document, "scroll");

const progress$ = scroll$.pipe(
  map(calcPecentageScroll),
  // tap(console.log)

);

progress$.subscribe((percentage) => {

  progressBar.style.width = `${percentage}%`;
});

