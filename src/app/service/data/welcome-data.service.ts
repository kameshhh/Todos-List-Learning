import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

    export class HelloWorldBean {
      constructor(public message: string) {
        // Constructor logic here
      }
    }
  

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {
  constructor(private http:HttpClient) { }
  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>('http://localhost:8080/helloworldbean')
    // console.log("uhdubssu")
  }

  executeHelloWorldBeanServiceWithPath(name: any){
    return this.http.get<HelloWorldBean>(`http://localhost:8080/helloworld/pathvariable/${name}`)
  }
}
