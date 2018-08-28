import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDatepickerModule , MatNativeDateModule }  from '@angular/material';


import { ScrollToModule } from 'ng2-scroll-to-el';

import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';

import { SlickModule } from 'ngx-slick';



import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { RechargeComponent } from './recharge/recharge.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { Recharge2Component } from './recharge2/recharge2.component';
import { Recharge5Component } from './recharge5/recharge5.component';
import { Recharge6Component } from './recharge6/recharge6.component';
import { Recharge4Component } from './recharge4/recharge4.component';
import { MyaccountComponent , AddCardDialog , BillingAddDialog , VirtualNumberDialog , ConfirmPopupDialog, EditProfileDialog , AddNumberDialog , AddEnrollDialog , AddNewDialog , AddNewDialog2 , SetUpCallForward } from './myaccount/myaccount.component'; 
import { PlanDetailsComponent } from './plan-details/plan-details.component';
import { Virtualnumber1Component , OpenVNLists } from './virtualnumber1/virtualnumber1.component';
import { Recharge1Component } from './recharge1/recharge1.component';
import { VirtualnumberSuccessComponent } from './virtualnumber-success/virtualnumber-success.component';
import { VnHowitworksComponent } from './vn-howitworks/vn-howitworks.component';
import { VnMyaccountComponent , VirtualNumber2Dialog } from './vn-myaccount/vn-myaccount.component';
import { VnMyaccountlistComponent } from './vn-myaccountlist/vn-myaccountlist.component';
import { VnMyaccountsetupComponent } from './vn-myaccountsetup/vn-myaccountsetup.component';
import { NewcustomerSigninComponent } from './newcustomer-signin/newcustomer-signin.component';
import { Becomeapartner2Component } from './becomeapartner2/becomeapartner2.component';
import { Header1Component } from './header1/header1.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageuflowSignComponent } from './homepageuflow-sign/homepageuflow-sign.component';
import { HomeuserPaymentComponent , RedeemPromoDialog} from './homeuser-payment/homeuser-payment.component';
import { CallasiaComponent } from './callasia/callasia.component';
import { CallafricaComponent } from './callafrica/callafrica.component';
import { Deal1Component } from './deal1/deal1.component';
import { Deal2Component } from './deal2/deal2.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { SigninexistingComponent } from './signinexisting/signinexisting.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { TermsandconditionComponent } from './termsandcondition/termsandcondition.component';
import { MobiletermsComponent } from './mobileterms/mobileterms.component';
import { Deal3Component } from './deal3/deal3.component';
import { Deal4Component } from './deal4/deal4.component';
import { Deal5Component } from './deal5/deal5.component';
import { Deal6Component } from './deal6/deal6.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { ReferafriendComponent } from './referafriend/referafriend.component';
import { FaqComponent } from './faq/faq.component';
import { SearchratesComponent } from './searchrates/searchrates.component';
import { MobiletopupComponent } from './mobiletopup/mobiletopup.component';
import { Features2Component , HowWorks , FaqPage , SetItUp} from './features2/features2.component';
import { ContactusComponent , CallUsDialog , MessageUsDialog } from './contactus/contactus.component';
import { UserflowpopupComponent ,GlobalCallDialog , PromoCodeDialog , OrderConfirmationDialog , PromoFailedDialog , ViewAllRatesDialog} from './userflowpopup/userflowpopup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LearnmoreComponent } from './learnmore/learnmore.component';
import { Faq2Component } from './faq2/faq2.component';
import { Referafriend2Component } from './referafriend2/referafriend2.component';
import { NewcustomeruserflowconfirmationComponent } from './newcustomeruserflowconfirmation/newcustomeruserflowconfirmation.component';
import { Page404Component } from './page404/page404.component';
import { NewcustomeremailComponent } from './newcustomeremail/newcustomeremail.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { VnMyaccountOptionsComponent } from './vn-myaccount-options/vn-myaccount-options.component';
import { VnMyaccountOrderhistoryComponent } from './vn-myaccount-orderhistory/vn-myaccount-orderhistory.component';
import { VnMyaccountCallComponent } from './vn-myaccount-call/vn-myaccount-call.component';


@NgModule({
  declarations: [
    AppComponent,
    RechargeComponent,
    HomeComponent,
    Recharge2Component,
    Recharge5Component,
    Recharge6Component,
    Recharge4Component,
    MyaccountComponent,
    AddCardDialog,
    BillingAddDialog,
    VirtualNumberDialog,
    VirtualNumber2Dialog,
    ConfirmPopupDialog,
    EditProfileDialog,
    AddNumberDialog,
    AddEnrollDialog,
    AddNewDialog,
    AddNewDialog2,
    SetUpCallForward,
    PlanDetailsComponent,
    Virtualnumber1Component,
    OpenVNLists,
    Recharge1Component,
    VirtualnumberSuccessComponent,
    VnHowitworksComponent,
    VnMyaccountComponent,
    VnMyaccountlistComponent,
    VnMyaccountsetupComponent,
    NewcustomerSigninComponent,
    Becomeapartner2Component,
    Header1Component,
    FooterComponent,
    HomepageuflowSignComponent,
    HomeuserPaymentComponent,
    RedeemPromoDialog,
    CallasiaComponent,
    CallafricaComponent,
    Deal1Component,
    Deal2Component,
    ForgetpasswordComponent,
    SigninexistingComponent,
    AboutusComponent,
    FeedbackComponent,
    PrivacypolicyComponent,
    TermsandconditionComponent,
    MobiletermsComponent,
    Deal3Component,
    Deal4Component,
    Deal5Component,
    Deal6Component,
    HowitworksComponent,
    ReferafriendComponent,
    FaqComponent,
    SearchratesComponent,
    MobiletopupComponent,
    Features2Component,
    ContactusComponent,
    CallUsDialog,
    MessageUsDialog,
    UserflowpopupComponent,
    GlobalCallDialog,
    PromoCodeDialog,
    HowWorks,
    FaqPage,
    SetItUp,
    OrderConfirmationDialog,
    PromoFailedDialog,
    ViewAllRatesDialog,
    HomepageComponent,
    LearnmoreComponent,
    Faq2Component,
    Referafriend2Component,
    NewcustomeruserflowconfirmationComponent,
    Page404Component,
    NewcustomeremailComponent,
    SidemenuComponent,
    VnMyaccountOptionsComponent,
    VnMyaccountOrderhistoryComponent,
    VnMyaccountCallComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    ScrollToModule.forRoot(),
    NgbModule.forRoot(),
    SlickModule.forRoot(),
    MatCheckboxModule,
    MatFormFieldModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatGridListModule,
    MatInputModule,
    AppRoutingModule,
    MatSelectModule,
    MatTabsModule,
    MatTableModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatTooltipModule,
    NgxCarouselModule,
    MatDatepickerModule ,
    MatNativeDateModule
  ],
  entryComponents: [MyaccountComponent , AddCardDialog, BillingAddDialog , VirtualNumberDialog , VirtualNumber2Dialog , ConfirmPopupDialog,  EditProfileDialog,AddNumberDialog, AddEnrollDialog , AddNewDialog , AddNewDialog2 , SetUpCallForward ,  OpenVNLists , RedeemPromoDialog , CallUsDialog , MessageUsDialog , GlobalCallDialog , PromoCodeDialog , OrderConfirmationDialog , PromoFailedDialog , ViewAllRatesDialog , HowWorks , FaqPage , SetItUp],

  providers: [MyaccountComponent , AddCardDialog, BillingAddDialog , VirtualNumberDialog ,  VirtualNumber2Dialog , ConfirmPopupDialog, EditProfileDialog,AddNumberDialog , AddEnrollDialog , AddNewDialog , AddNewDialog2 , SetUpCallForward , OpenVNLists , RedeemPromoDialog , CallUsDialog , MessageUsDialog , GlobalCallDialog , PromoCodeDialog , OrderConfirmationDialog , PromoFailedDialog , ViewAllRatesDialog , HowWorks , FaqPage , SetItUp],
  bootstrap: [AppComponent] 
})
export class AppModule { }
