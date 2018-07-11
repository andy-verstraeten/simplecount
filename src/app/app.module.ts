import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { TrackerListComponent } from './tracker-list/tracker-list.component';
import {TrackerService} from './services/tracker.service';
import { AddButtonComponent } from './add-button/add-button.component';
import { OverviewComponent } from './overview/overview.component';
import { AddTrackerComponent } from './add-tracker/add-tracker.component';
import { ParticipantsComponent } from './add-tracker/participants/participants.component';
import { FormsModule } from '@angular/forms';
import { EditableParticipantComponent } from './add-tracker/participants/editable-participant/editable-participant.component';
import { EditTrackerComponent } from './edit-tracker/edit-tracker.component';
import { ExpensesListComponent } from './edit-tracker/expenses-list/expenses-list.component';
import { SaldoComponent } from './edit-tracker/saldo/saldo.component';
import { ItemListComponent } from './edit-tracker/expenses-list/item-list/item-list.component';
import { ExpensesFooterComponent } from './edit-tracker/expenses-list/expenses-footer/expenses-footer.component';
import {CurrentTrackerService} from './services/current-tracker.service';
import { ExpenseSummaryComponent } from './edit-tracker/expenses-list/item-list/expense-summary/expense-summary.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { ParticipantOptionComponent } from './add-expense/participant-option/participant-option.component';
import { ParticipantSelectorComponent } from './add-expense/participant-selector/participant-selector.component';
import {SaldoService} from './services/saldo.service';
import { ValueBlockComponent } from './edit-tracker/saldo/value-block/value-block.component';
import { BlockComponent } from './edit-tracker/saldo/value-block/block/block.component';



const routes = [ { path: 'overview', component: OverviewComponent },
                 { path: 'add-tracker', component: AddTrackerComponent },
                 { path: 'edit-tracker/:id', component: EditTrackerComponent,
                  children: [
                    {path: 'expenses', component: ExpensesListComponent},
                    {path: 'expenses/:id', component: AddExpenseComponent},
                    {path: 'saldo', component: SaldoComponent},
                    { path: '', redirectTo: 'expenses', pathMatch: 'full'}
                    ] },
                 { path: '', redirectTo: '/overview', pathMatch: 'full'},
                  { path: 'add-expense', component: AddExpenseComponent}]

@NgModule({
  declarations: [
    AppComponent,
    TrackerListComponent,
    AddButtonComponent,
    OverviewComponent,
    AddTrackerComponent,
    ParticipantsComponent,
    EditableParticipantComponent,
    EditTrackerComponent,
    ExpensesListComponent,
    SaldoComponent,
    ItemListComponent,
    ExpensesFooterComponent,
    ExpenseSummaryComponent,
    AddExpenseComponent,
    ParticipantOptionComponent,
    ParticipantSelectorComponent,
    ValueBlockComponent,
    BlockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot( InMemoryDataService, { dataEncapsulation: false })

  ],
  providers: [ TrackerService, CurrentTrackerService, SaldoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
