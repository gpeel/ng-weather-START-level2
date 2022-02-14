# Weather Roadmap

THe starting point given by https://www.angulartraining.com/ has been upgraded recently to NG13. but in Bootstrap 3.

https://stackblitz.com/edit/ng-certification?file=package.json

## This Starting point

- Angular 13.3.2
- eslint added (not included since version 12)
- bootstrap 5 and ngx-bootstrap 8 added
- logger @gpeel/plog => PlogModule.forRoot(environment),
- Change-Detection tools @gpeel/my-perf-tools => MyPerfModule  (not needed for the exercise)

If you don't want logger nor CD tools remove the 2 lines following from AppModule

````
    PlogModule.forRoot(environment),
    MyPerfModule,
````

## ZIP

For level2 certification the Country is hardcoded. If you don't provide any country alpha2 identification, the weather
API will default to the USA. You can choose to set the country as France if you like.

- Most countries have a ZIP format containing only number but some have a string (CANADA for example) or a mix of
  characters and number.
- in the USA ZIPs are a 5-digit numbers.
- I implemented a number input mask on the HTMLInpuElement but it is not required.

````
    "inputmask": "^5.0.7",
    "@ngneat/input-mask": "^5.1.0",
````

## STATIC Page

You have an example of the expected pages.

I migrated to bootstrap 5 + ngx-bootstrap 8 the pages given on stackblitz.




