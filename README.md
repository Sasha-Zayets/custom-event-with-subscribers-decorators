# custom-event-with-subscribers-decorators

This hooks for Angular components, which using Custom Event with library: [custom-event-with-subscribers](https://www.npmjs.com/package/custom-event-with-subscribers)

### Example:
```
import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { CustomEventService } from 'custom-event-with-subscribers-decorators';

@Component({
  selector: 'micro-silpo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private customEvent: CustomEventService) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        customEvent.dispatch("change-route", { url: event.url });
      }
    });
  }

  ngOnInit() {
    this.customEvent.subscribe("change-route-react", (data: any) => {
      this.router.navigate([data.url]);
    });
  }

  ngOnDestroy() {
    this.customEvent.unsubscribe("change-route-react");
  }
}
```


### See also:
* [custom-event-with-subscribers-react](https://www.npmjs.com/package/custom-event-with-subscribers-react)
* [custom-event-with-subscribers](https://www.npmjs.com/package/custom-event-with-subscribers)

