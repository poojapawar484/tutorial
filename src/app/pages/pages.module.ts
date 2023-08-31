import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


import { PageComponent } from './page/page.component';
import { NewsComponent } from './newsmain/news.component';
import { ContactComponent } from './contact/contact.component';
import { GridComponent } from './services/grid/grid.component';
import { ListComponent } from './services/list/list.component';
import { SingleComponent } from './services/single/single.component';
import { ServicesmainComponent } from './servicesmain/servicesmain.component';
import { BlogGridComponent } from './news/blog-grid/blog-grid.component';
import { BlogListComponent } from './news/blog-list/blog-list.component';
import { BlogArticleComponent } from './news/blog-article/blog-article.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgOtpInputModule } from 'ng-otp-input';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { TermsconditionsComponent } from './termsconditions/termsconditions.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { SharedModule } from '../shared/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
    declarations: [
        HomeComponent,
        AboutComponent,
        PageComponent,
        NewsComponent,
        ContactComponent,
        GridComponent,
        ListComponent,
        SingleComponent,
        ServicesmainComponent,
        BlogGridComponent,
        BlogListComponent,
        BlogArticleComponent,
        DisclaimerComponent,
        PrivacypolicyComponent,
        TermsconditionsComponent,
        EnquiryComponent,
    ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        NgOtpInputModule,
        NgxDropzoneModule,
        SharedModule,
        NgxSpinnerModule
    ]
})
export class PagesModule { }
