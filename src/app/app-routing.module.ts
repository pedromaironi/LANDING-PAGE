import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangelogComponent } from './core/components/changelog/changelog.component';
import { DocumentationComponent } from './core/components/documentation/documentation.component';
import { IndexAppsComponent } from './core/components/index-apps/index-apps.component';
import { PageAboutusTwoComponent } from './core/components/page-aboutus-two/page-aboutus-two.component';
import { PageAboutusComponent } from './core/components/page-aboutus/page-aboutus.component';
import { PageHistoryComponent } from './core/components/page-history/page-history.component';
import { PagePrivacyComponent } from './core/components/page-privacy/page-privacy.component';
import { PageTermsComponent } from './core/components/page-terms/page-terms.component';
import { ServicesComponent } from './shared/services/services.component';

const routes: Routes = [
  {
    path: '',
    component: IndexAppsComponent,
  },
  {
    path: "page-aboutus",
    component: PageAboutusComponent
  },
  {
    path: "page-aboutus-two",
    component: PageAboutusTwoComponent
  },
  {
    path: "page-services",
    component: ServicesComponent
  },
  {
    path: "page-aboutus",
    component: PageAboutusComponent
  },
  {
    path: "page-history",
    component: PageHistoryComponent
  },
  {
    path: "documentation",
    component: DocumentationComponent
  },
  {
    path: "changelog",
    component: ChangelogComponent
  },
  {
    path: "page-terms",
    component: PageTermsComponent
  },
  {
    path:"page-privacy",
    component: PagePrivacyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
