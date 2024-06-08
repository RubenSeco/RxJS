
import { catchError, map, of } from 'rxjs';
import { AjaxError, ajax } from 'rxjs/ajax';


const url = "https://api.github.com/usexxxrs?per_page=5";


// const errorManage = (response: Response) => {

//   if (!response.ok) {
//     throw new Error(response.statusText);

//   }
//   return response;
// };

const catchErr = (err: AjaxError) => {
  console.warn("Error en: ", err.message);
  return of([]);
};

// const fetchPromise = fetch(url);



// fetchPromise
//   .then(errorManage)
//   .then((response) => response.json())
//   .then((data) => console.log("data: ", data))
//   .catch((error) => console.warn("Error de usuarios", error));

ajax(url).pipe(
  map((resp) => { resp.response; }),
  catchError(catchErr),
).subscribe((users) => console.log("users:", users));