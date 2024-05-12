import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { error } from 'console';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})


export class WelcomeComponent implements OnInit {

  welcomeMessageFromService: string=''
  errorMessageFromService:string=''
  name=''

  constructor(private route:ActivatedRoute,
    private service:WelcomeDataService) { }

  ngOnInit(): void {
    this.name=this.route.snapshot.params['name']
  }

  getWelcomeMessage(){
    // console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response=>this.handleSuccessfullResponse(response),
      error=>this.handleErrorMessage(error)
    );

    // console.log("Last line of getWelcomeMessage")
  
  }

  getWelcomeMessageWithVariable(){
    this.service.executeHelloWorldBeanServiceWithPath(this.name).subscribe(
      response=>this.handleSuccessfullResponse(response),
      error=>this.handleErrorMessage(error)
    )
  }


  handleSuccessfullResponse(response: any){
    this.welcomeMessageFromService=response.message

    // console.log(response)
    // console.log(response.message)

  }

  handleErrorMessage(error:any){
    this.errorMessageFromService=error.error.message;
  }



}
