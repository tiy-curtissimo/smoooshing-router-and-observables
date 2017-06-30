import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { UIRouterModule, Transition } from "@uirouter/angular";

import { AppComponent } from './app.component';
import { StateOneComponent } from './state-one/state-one.component';
import { StateTwoComponent } from './state-two/state-two.component';
import { StateTwoChildComponent } from './state-two-child/state-two-child.component';
import { UIRouter } from "@uirouter/core/lib";
import { Visualizer } from '@uirouter/visualizer';

function uiRouterConfig(router: UIRouter, injector: Injector) {
  router.plugin(Visualizer);
}

let PeopleService = {
  people: [
    {id: 1, name: 'Alberto', lessonLearned: 'I like Angular 4!'},
    {id: 2, name: 'Maria', lessonLearned: 'Imports are just weird.'}
  ],
  getAll() {
    return new Promise((good, bad) => good(this.people));
  },
  find(id) {
    id = Number.parseInt(id);
    return this.people.find(p => p.id === id);
  }
}

let stateOne = {
  name: 'state-one',
  url: '/',
  component: StateOneComponent
};

let stateTwo = {
  name: 'state-two',
  url: '/two',
  component: StateTwoComponent,
  resolve: [{
    token: 'children',
    resolveFn: () => PeopleService.getAll()
  }]
};

let stateTwoChild = {
  name: 'state-two.child',
  url: '/:childId',
  component: StateTwoChildComponent,
  resolve: [{
    token: 'child',
    deps: [Transition],
    resolveFn: (trans) => {
      return PeopleService.find(trans.params().childId);
    }
  }]
};

let states = [stateOne, stateTwo, stateTwoChild];

@NgModule({
  declarations: [
    AppComponent,
    StateOneComponent,
    StateTwoComponent,
    StateTwoChildComponent
  ],
  imports: [
    BrowserModule,
    UIRouterModule.forRoot({ states, config: uiRouterConfig })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
