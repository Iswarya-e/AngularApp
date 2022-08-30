import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent{
  constructor(private router:Router){
    let a=localStorage.getItem('uname');
    if(!(typeof a != 'undefined' && a)){
      this.router.navigate(["Login"])
    }

  }

  courseJson1=[
    {
      name:"Angular",
      description:"Angular is a development platform, built on TypeScript. As a platform, Angular includes: A component-based framework for building scalable web applications. A collection of well-integrated libraries that cover a wide variety of features.",
      logo:'../assets/angular.jpg'
    
    },
   {
    name:".Net",
    description:"NET is a free, cross-platform, open source developer platform for building many different types of applications.With .NET, you can use multiple languages, editors, and libraries to build for web, mobile, desktop, games, IoT, and more",
    logo:'../assets/net.jpg'
   },
   {
    name:"Python",
    description:"Python is a programming language that lets you work more quickly and integrate your systems more effectively.You can learn to use Python and see almost immediate gains in productivity and lower maintenance costs.",
    logo:'../assets/python.jpg'
   }
   
  ]
  courseJson2=[
    {
      name:"SQL",
      description:"SQL is a standard language for storing, manipulating and retrieving data in databases.Our SQL tutorial will teach you how to use SQL in: MySQL, SQL Server, MS Access, Oracle, Sybase, Informix, Postgres, and other database systems",
      logo:'../assets/sql.jpg'
  
     },
     {
      name:"JavaScript",
      description:"JavaScript is the world's most popular programming language.JavaScript is the programming language of the Web.JavaScript is easy to learn.This tutorial will teach you JavaScript from basic to advanced.",
      logo:'../assets/jscript.jpg'
  
     },
    {
      name:"TypeScript",
      description:"TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor",
      logo:'../assets/typescript.jpg'
    }
  ]
  courses:string[]=["Angular","SQL","Python","Typescript","AWS","Java",".Net","Javascript"];
  courseobj1={
    name:"Angular",
    description:"Angular is a development platform, built on TypeScript. As a platform, Angular includes: A component-based framework for building scalable web applications. A collection of well-integrated libraries that cover a wide variety of features, including routing, forms management, client-server communication, and more.",
    logo:'../assets/angular.jpg'
  
  }
  courseobj2={
    name:".Net",
    description:"NET is a free, cross-platform, open source developer platform for building many different types of applications.With .NET, you can use multiple languages, editors, and libraries to build for web, mobile, desktop, games, IoT, and more",
    logo:'../assets/net.jpg'
  
  }
  courseobj3={
    name:"Python",
    description:"Python is a programming language that lets you work more quickly and integrate your systems more effectively.You can learn to use Python and see almost immediate gains in productivity and lower maintenance costs.",
    logo:'../assets/python.jpg'
  
  }
  
  courseobj4={
    name:"SQL",
    description:"SQL is a standard language for storing, manipulating and retrieving data in databases.Our SQL tutorial will teach you how to use SQL in: MySQL, SQL Server, MS Access, Oracle, Sybase, Informix, Postgres, and other database systems",
    logo:'../assets/sql.jpg'
  
  }
  courseobj5={
    name:"JavaScript",
    description:"SQL is a standard language for storing, manipulating and retrieving data in databases.Our SQL tutorial will teach you how to use SQL in: MySQL, SQL Server, MS Access, Oracle, Sybase, Informix, Postgres, and other database systems",
    logo:'../assets/jscript.jpg'
  
  }
  courseobj6={
    name:"SQL",
    description:"SQL is a standard language for storing, manipulating and retrieving data in databases.Our SQL tutorial will teach you how to use SQL in: MySQL, SQL Server, MS Access, Oracle, Sybase, Informix, Postgres, and other database systems",
    logo:'../assets/sql.jpg'
  
  }
}
