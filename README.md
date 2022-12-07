# custom-event-with-subscribers-decorators

This hooks for Angular components, which using Custom Event with library: [custom-event-with-subscribers](https://www.npmjs.com/package/custom-event-with-subscribers)

## Decorators:

### @DispatchCustomEvent - Added to class, dispatch function with functionality create and run custom event
```ts
import { Component } from '@angular/core';
import { DispatchCustomEvent, IDispatchCustomEvent } from 'custom-event-with-subscribers-decorators';

@Component({
  selector: 'hello',
  template: `
    <button (click)="open()">Emit an open event</button>
  `
})
@DispatchCustomEvent
export class HelloComponent extends IDispatchCustomEvent {
  open() {
    this.dispatch('test', { data: 'test' });
  }
}
```

---

### @SubscribeManualCustomEvent - Added to class, methods subscribe, unsubscribe for working with Custom Event

NOTE: You need manual unsubscribe
```ts
import { Component, OnInit } from '@angular/core';
import { SubscribeManualCustomEvent, ISubscribeManualCustomEvent } from 'custom-event-with-subscribers-decorators';

@Component({
  selector: 'hello',
  template: `
    <div>{{ state?.name }}</div>
  `
})
@SubscribeManualCustomEvent
export class HelloComponent extends ISubscribeManualCustomEvent implements OnInit {
    state = {};
    ngOnInit() {
        this.subscribe("nameEvent", (data) => {
           this.state = data; 
        });
    }

    ngOnDestroy() {
        this.unsubscribe("nameEvent");
    }
}
```

---

### @SubscribeCustomEvent - Added to class, methods subscribe, unsubscribe, setStateComponent for working with Custom Event (AUTOMATICALLY)

#### Params:
```
    eventName: string,
    keyForState?: string,
    defaultState?: any
```

```ts
import { Component, OnInit } from '@angular/core';
import { SubscribeCustomEvent, ISubscribeCustomEvent } from 'custom-event-with-subscribers-decorators';

@Component({
  selector: 'hello',
  template: `
    <div>{{ state?.name }}</div>
  `
})
@SubscribeManualCustomEvent("nameEvent", "state")
export class HelloComponent extends ISubscribeCustomEvent implements OnInit {
    ngOnInit() {
        this.setStateComponent({ name: "test" });
    }
}
```


### NOTE:
For combine two decorators, you need import class for extends:

IDispatchAndManualSubscribeEvent, IDispatchAndSubscribeEvent
```ts
import { Component, OnInit } from '@angular/core';
import { DispatchCustomEvent, SubscribeCustomEvent, IDispatchAndSubscribeEvent } from 'custom-event-with-subscribers-decorators';

@Component({
  selector: 'hello',
  template: `
    <div>{{ state?.name }}</div>
    <button (click)="open"></button>
  `
})
@DispatchCustomEvent
@SubscribeManualCustomEvent("nameEvent", "state")
export class HelloComponent extends IDispatchAndSubscribeEvent implements OnInit {
    ngOnInit() {
        this.setStateComponent({ name: "test" });
    }

    open() {
        this.dispatch('test', { data: 'test' });
    }
}
```

```ts
import { Component, OnInit } from '@angular/core';
import { DispatchCustomEvent, SubscribeManualCustomEvent, IDispatchAndManualSubscribeEvent } from 'custom-event-with-subscribers-decorators';

@Component({
  selector: 'hello',
  template: `
    <div>{{ state?.name }}</div>
    <button (click)="open"></button>
  `
})
@DispatchCustomEvent
@SubscribeManualCustomEvent
export class HelloComponent extends IDispatchAndManualSubscribeEvent implements OnInit {
    state = {};
    ngOnInit() {
        this.subscribe("nameEvent", (data) => {
            this.state = data;
        });
    }

    ngOnDestroy() {
        this.unsubscribe("nameEvent");
    }
    
    open() {
        this.dispatch('test', { data: 'test' });
    }
}
```


### See also:
* [custom-event-with-subscribers-react](https://www.npmjs.com/package/custom-event-with-subscribers-react)
* [custom-event-with-subscribers](https://www.npmjs.com/package/custom-event-with-subscribers)

