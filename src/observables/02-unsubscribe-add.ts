import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {

  next: (value) => console.log("next:", value),
  error: (error) => console.warn("error:", error),
  complete: () => console.info("completado")

};


const interval$ = new Observable<number>((subs) => {

  let count = 0;
  // Crear un contador de segundos: 1,2,3,4,5,6....
  const interval = setInterval(() => {

    subs.next(count += 1);
  }, 1000);

  setTimeout(() => {
    subs.complete();

  }, 2500);

  return () => {
    clearInterval(interval);    // Limpia el setInterval para que el Observable deje de emitir
    console.log("Intervalo destruído");
  };



});

const subs1 = interval$.subscribe(observer);
const subs2 = interval$.subscribe(observer);
const subs3 = interval$.subscribe(observer);

subs1.add(subs2);
subs1.add(subs3);

setTimeout(() => {

  subs1.unsubscribe();
  // subs2.unsubscribe();
  // subs3.unsubscribe();

  console.log("Timeout completado");
}, 3000)


