import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';
import { NewsComponent } from './newsmain/news.component';
import { ContactComponent } from './contact/contact.component';
import { GridComponent } from './services/grid/grid.component';
import { ListComponent } from './services/list/list.component';
import { single } from 'rxjs';
import { SingleComponent } from './services/single/single.component';
import { ServicesmainComponent } from './servicesmain/servicesmain.component';
import { BlogGridComponent } from './news/blog-grid/blog-grid.component';
import { BlogListComponent } from './news/blog-list/blog-list.component';
import { BlogArticleComponent } from './news/blog-article/blog-article.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { TermsconditionsComponent } from './termsconditions/termsconditions.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { EnquiryComponent } from './enquiry/enquiry.component';

const routes: Routes = [
  {
  path: '',
    
  children: [
    {
      path: 'home',
      component: HomeComponent,
      data: {
        title: ''
      }
    },
    {
      path: 'about',
      component: AboutComponent,
      data: {
        title: ''
      }
    },
    {
      path: 'servicesmain',
      component: ServicesmainComponent,
      data: {
        title: ''
      }
    },
    {
      path: 'grid',
      component: GridComponent,
      data: {
        title: ''
      }
    },
    {
      path: 'list',
      component: ListComponent,
      data: {
        title: ''
      }
    },
    {
      path: 'single',
      component: SingleComponent,
      data: {
        title: ''
      }
    },
 
    {
      path: 'page',
      component: PageComponent,
      data: {
        title: ''
      }
    },
    {
      path: 'news',
      component: NewsComponent,
      data: {
        title: ''
      }
    },
    {
      path: 'blog-grid',
      component: BlogGridComponent,
      data: {
        title: ''
      }
    },
    {
      path: 'blog-list',
      component: BlogListComponent,
      data: {
        title: ''
      }
    },
    {
      path: 'blog-article',
      component: BlogArticleComponent,
      data: {
        title: ''
      }
    },

    {
      path: 'contact',
      component: ContactComponent,
      data: {
        title: ''
      }
    },
    {
      path: 'disclaimer',
      component: DisclaimerComponent,
      data: {
        title: ''
      }
    },
    {
      path: 'privacypolicy',
      component: PrivacypolicyComponent,
      data: {
        title: ''
      }
    },
    {
      path: 'termsconditions',
      component: TermsconditionsComponent,
      data: {
        title: ''
      }
    },
    {
      path: 'enquiry',
      component: EnquiryComponent,
      data: {
        title: ''
      }
    },
  ],
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
