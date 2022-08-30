import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { LogoutComponent } from './logout/logout.component';
import { PostComponent } from './post/post.component';
import { CommentsComponent } from './comments/comments.component';
import { AlbumsComponent } from './albums/albums.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CreateFeedbackComponent } from './create-feedback/create-feedback.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { CustomersComponent } from './customers/customers.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CartComponent } from './cart/cart.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';

const routes:Routes=[
    {path:"Home",component:HomeComponent},
    {path:"Help",component:HelpComponent},
    {path:"Contact",component:ContactComponent},
    {path:"Products",component:ProductComponent},
    {path:"Register",component:RegisterComponent},  
    {path:"Users",component:UsersComponent},
    {path:"Post",component:PostComponent},
    {path:"Comments",component:CommentsComponent},
    {path:"Album",component:AlbumsComponent},
    {path:"About",component:AboutComponent},
    {path:"Feedback",component:FeedbackComponent},
    {path:"CreateFeedback",component:CreateFeedbackComponent},
    {path:"Logout",component:LogoutComponent},
    {path:"Login",component:LoginComponent},
    {path:"Courses",component:CoursesComponent},
    {path:"Customers",component:CustomersComponent},
    {path:"CourseDetailsComponent/",component:CourseDetailsComponent},
    {path:"UserDetail/:id",component:UserDetailComponent},
    {path:"ProductDetail/:id",component:ProductDetailsComponent},
    {path:"Cart",component:CartComponent}


]
@NgModule({
  declarations: [
    HomeComponent,
    HelpComponent,
    LoginComponent,
    ContactComponent,
    PageNotFoundComponent,
    ProductDetailsComponent,
    ProductComponent,
    RegisterComponent,
    UserDetailComponent,
    UsersComponent,
    LogoutComponent,
    PostComponent,
    CommentsComponent,
    AlbumsComponent,
    FeedbackComponent,
    CreateFeedbackComponent,
    AboutComponent,
    CoursesComponent,
    CustomersComponent,
    UserDetailComponent,
    CourseDetailsComponent,
    CartComponent


  ],
  imports: [
    CommonModule,RouterModule.forRoot(routes),FormsModule,HttpClientModule,ReactiveFormsModule
    
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
