import { fromEvent } from "rxjs";

/**
 * Eventos del DOM
 */

const src1$ = fromEvent<PointerEvent>(document, "click");
const src2$ = fromEvent<KeyboardEvent>(document, "keyup");

const observer = {

  next: (value) => console.log("next", value)
};

// src1$.subscribe((event) => {
//   console.log(event.x, event.y);
// });


src1$.subscribe(({ x, y }) => {  // Desestructuración de event eligiendo las propiedades x, y
  console.log(x, y);
});


src2$.subscribe((event) => console.log(event.key));

