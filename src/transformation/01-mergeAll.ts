import { Observable, debounceTime, fromEvent, map, mergeAll } from "rxjs";
import { ajax } from "rxjs/ajax";
import { GithubUsersResp } from "../interfaces/github-users.interface";
import { GithubUser } from "../interfaces/github-user.interface";

const body = document.querySelector("body");

const textInput = document.createElement("input");

const orderList = document.createElement("ol");

body.append(textInput, orderList);


const showUsers = (users: GithubUser[]) => {
  console.log(users);
  orderList.innerHTML = "";

  for (const user of users) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = user.avatar_url;
    const anchor = document.createElement("a");
    anchor.href = user.html_url;
    anchor.text = "Ver página";
    anchor.target = "_blank";

    li.append(img);
    li.append(user.login + "");
    li.append(anchor);

    orderList.append(li);
  }
};


const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");

input$.pipe(
  debounceTime(500),
  map((event) => {
    const text = event.target["value"];
    return ajax.getJSON(`https://api.github.com/search/users?q=${text}`);
  }),
  mergeAll<Observable<GithubUsersResp>>(),
  map<GithubUsersResp, GithubUser[]>((data) => data.items)
).subscribe(showUsers);