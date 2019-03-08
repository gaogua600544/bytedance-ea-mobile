// 系统
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// 第三方插件
import { WeUiModule } from 'ngx-weui';
import { NgxEchartsModule } from 'ngx-echarts';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
// 模块
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';
// 组件
import { AppComponent } from './app.component';
import { FundComponent } from './fund/fund.component';
import { HomeComponent } from './home/home.component';
import { CostComponent } from './cost/cost.component';
@NgModule({
   declarations: [
      AppComponent,
      FundComponent,
      HomeComponent,
      CostComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      WeUiModule.forRoot(),
      NgxEchartsModule,
      BrowserAnimationsModule,
      LayoutModule,
      AngularFontAwesomeModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
