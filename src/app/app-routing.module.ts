import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { Becomeapartner2Component }  from './becomeapartner2/becomeapartner2.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RechargeComponent } from './recharge/recharge.component';
import { Recharge1Component } from './recharge1/recharge1.component';
import { Recharge2Component } from './recharge2/recharge2.component';
import { Recharge5Component } from './recharge5/recharge5.component';
import { Recharge4Component } from './recharge4/recharge4.component';
import { Recharge6Component } from './recharge6/recharge6.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { PlanDetailsComponent } from './plan-details/plan-details.component';
import { Virtualnumber1Component } from './virtualnumber1/virtualnumber1.component';
import { VirtualnumberSuccessComponent } from './virtualnumber-success/virtualnumber-success.component';
import { VnHowitworksComponent } from './vn-howitworks/vn-howitworks.component';
import { VnMyaccountComponent } from './vn-myaccount/vn-myaccount.component';
import { VnMyaccountlistComponent } from './vn-myaccountlist/vn-myaccountlist.component';
import { VnMyaccountOptionsComponent } from './vn-myaccount-options/vn-myaccount-options.component';
import { VnMyaccountOrderhistoryComponent } from './vn-myaccount-orderhistory/vn-myaccount-orderhistory.component';
import { VnMyaccountCallComponent } from './vn-myaccount-call/vn-myaccount-call.component';

import { VnMyaccountsetupComponent } from './vn-myaccountsetup/vn-myaccountsetup.component';
import { NewcustomerSigninComponent } from './newcustomer-signin/newcustomer-signin.component';
import { NewcustomeremailComponent } from './newcustomeremail/newcustomeremail.component';
import { HomepageuflowSignComponent } from './homepageuflow-sign/homepageuflow-sign.component';
import { HomeuserPaymentComponent } from './homeuser-payment/homeuser-payment.component';
import { CallasiaComponent } from './callasia/callasia.component';
import { CallafricaComponent } from './callafrica/callafrica.component';
import { Deal1Component } from './deal1/deal1.component';
import { Deal2Component } from './deal2/deal2.component';
import { Deal3Component } from './deal3/deal3.component';
import { Deal4Component } from './deal4/deal4.component';
import { Deal5Component } from './deal5/deal5.component';
import { Deal6Component } from './deal6/deal6.component';
import { FaqComponent } from './faq/faq.component';
import { Faq2Component } from './faq2/faq2.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { SigninexistingComponent } from './signinexisting/signinexisting.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { TermsandconditionComponent } from './termsandcondition/termsandcondition.component';
import { MobiletermsComponent } from './mobileterms/mobileterms.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { ReferafriendComponent } from './referafriend/referafriend.component';
import { Referafriend2Component } from './referafriend2/referafriend2.component';
import { SearchratesComponent } from './searchrates/searchrates.component';
import { MobiletopupComponent } from './mobiletopup/mobiletopup.component';
import { Features2Component } from './features2/features2.component';
import { UserflowpopupComponent } from './userflowpopup/userflowpopup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LearnmoreComponent } from './learnmore/learnmore.component';
import { NewcustomeruserflowconfirmationComponent } from './newcustomeruserflowconfirmation/newcustomeruserflowconfirmation.component';

import { Page404Component } from './page404/page404.component';



const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path : 'becomeapartner', component : Becomeapartner2Component},
  { path : 'contactus' , component : ContactusComponent },
  { path: 'recharge', component: RechargeComponent },
  { path: 'recharge1', component : Recharge1Component},
  { path: 'recharge2', component: Recharge2Component },
  { path: 'recharge4', component: Recharge4Component },
  { path: 'recharge5', component: Recharge5Component },
  { path: 'recharge6', component: Recharge6Component },
  { path: 'myaccount', component: MyaccountComponent},
  { path : 'plandetails', component : PlanDetailsComponent},
  { path : 'virtualnumber1' , component : Virtualnumber1Component},
  { path : 'vn-success' , component : VirtualnumberSuccessComponent},
  { path : 'vn-howitworks', component : VnHowitworksComponent},
  { path : 'vn-myaccount' , component : VnMyaccountComponent},
  { path : 'vn-myaccountlist' , component : VnMyaccountlistComponent},
  { path : 'vn-myaccount-options' , component : VnMyaccountOptionsComponent},
  { path : 'vn-myaccount-orderhistory' , component : VnMyaccountOrderhistoryComponent},
  { path : 'vn-myaccount-call' , component : VnMyaccountCallComponent},
  { path : 'vn-myaccountsetup' , component : VnMyaccountsetupComponent},
  { path :'newcustomer-mobile' , component : NewcustomerSigninComponent}, 
  { path : 'newcustomer-email' , component : NewcustomeremailComponent },
  { path : 'newcustomer-sign' , component : HomepageuflowSignComponent},
  { path : 'newcustomer-payment' , component : HomeuserPaymentComponent},
  { path : 'callasia', component : CallasiaComponent},
  { path : 'callafrica', component : CallafricaComponent},
  { path : 'deal1' , component : Deal1Component},
  { path : 'deal2' , component : Deal2Component},
  { path : 'deal3' , component : Deal3Component},
  { path : 'deal4' , component : Deal4Component},
  { path : 'deal5' , component : Deal5Component},
  { path : 'deal6' , component : Deal6Component},
  { path : 'mobilefaq' , component : FaqComponent},
  { path : 'faq' , component : Faq2Component},
  { path : 'forgotpass' , component : ForgetpasswordComponent},
  { path : 'existingcustomerlogin' , component : SigninexistingComponent},
  { path : 'aboutus' , component : AboutusComponent},
  { path : 'feedback' , component : FeedbackComponent},
  { path : 'privacypolicy' , component : PrivacypolicyComponent},
  { path : 'termsandcondition' , component : TermsandconditionComponent},
  { path : 'mobileterms' , component : MobiletermsComponent},
  { path : 'howitworks' , component : HowitworksComponent},
  { path : 'referafriend' , component : ReferafriendComponent},
  { path : 'referafriend-postlogin' , component : Referafriend2Component},
  { path : 'searchrates' , component : SearchratesComponent},
  { path : 'mobiletopup' , component : MobiletopupComponent},
  { path : 'features' , component : Features2Component},
  { path : 'popuppages' , component : UserflowpopupComponent},
  { path : 'homepage' , component : HomepageComponent},
  { path : 'learnmore' , component : LearnmoreComponent},
  { path : 'newcustomer-userflow-confirmation' , component : NewcustomeruserflowconfirmationComponent},
  {path : '404' , component : Page404Component}
  

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports : [RouterModule]

})
export class AppRoutingModule { }
