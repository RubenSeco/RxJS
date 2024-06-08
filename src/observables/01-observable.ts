import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {

  next: (value) => console.log("siguiente [next]:", value),
  error: (error) => console.warn("error[obs]:", error),
  complete: () => console.info("Completado [obs]")

};

const obs$ = new Observable<string>((subs) => {

  subs.next("Hola");
  subs.next("Mundo");

  subs.next("Hola");
  subs.next("Mundo");

  subs.complete(); // A partir de aquí el subscriber no recibe más mensajes. 

  subs.next("Hola");
  subs.next("Mundo");

});

// obs$.subscribe((resp) => {

//   console.log(resp);
// })

// obs$.subscribe(
//   (value) => console.log("next:", value),
//   (error) => console.warn("error:", error),
//   () => console.info("Completado")
// );

obs$.subscribe(observer);









