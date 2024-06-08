import { catchError, of } from "rxjs";
import { AjaxError, ajax } from "rxjs/ajax";



const url = "https://httpbinxx.org/delay/1";


const errorManage = (resp: AjaxError) => {
  console.warn("error:", resp.message);
  return of({
    ok: false,
    users: []
  });
};

// const obs$ = ajax.getJSON(url).pipe(
//   catchError(errorManage)
// );
// const obs2$ = ajax(url).pipe(
//   catchError(errorManage)
// );


const obs$ = ajax.getJSON(url);
const obs2$ = ajax(url);

obs$.pipe(
  catchError(errorManage),
).subscribe({
  next: (value) => console.log("next: ", value),
  error: (err) => console.warn("Error en subs", err),
  complete: () => console.log("Complete",)
});



// obs2$.subscribe(data => console.log("ajax: ", data));
