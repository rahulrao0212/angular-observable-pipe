import { Component } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-observable-pipe';
  obs = new Observable((observer) => {
    observer.next(1)
    observer.next(2)
    observer.next(3)
    observer.next(4)
    observer.next(5)
    observer.complete()
  }).pipe(
    tap(data => console.log('tap ' + data)),
    filter(data => data > 2),
    tap(data => console.log('tap filter ' + data)),                    //filter Operator
    map((val) => { return val as number * 2 }),
    tap(data => console.log('tap map ' + data)),  //map operator
  )

  ngOnInit() {
    this.obs.subscribe(
      val => {
        console.log(val)
      }
    )
    console.log('----------------------------------------')
    this.customOperator(this.obs1).subscribe();
  }

  customOperator = pipe(
    tap(data => console.log('tap ' + data)),
    filter(data => data > 2),
    tap(data => console.log('tap filter ' + data)),                    //filter Operator
    map((val) => { return val as number * 2 }),
    tap(data => console.log('tap map ' + data)),  //map operator
  );

  obs1 = new Observable((observer) => {
    observer.next(1)
    observer.next(2)
    observer.next(3)
    observer.next(4)
    observer.next(5)
    observer.complete()
  })
}
