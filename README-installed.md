# My Usual setting for Angular 13

## eslint settings

In ng12+ no more migration from tslint to eslint, the project comes with no linter at all, so you just need to add
eslint with:

        ng add @angular-eslint/schematics

## eslint rules

https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md

## usual eslint plugins

to install because missing by default and used but my rules:

         npm i eslint-plugin-jsdoc
         npm i eslint-plugin-import
         npm i eslint-plugin-prefer-arrow

         npm i eslint-plugin-prefer-arrow eslint-plugin-import eslint-plugin-jsdoc

## Webstorm

- activate Eslint Automatic config + fix on save option
- and disable tslint !
- Go to Tools -> Actions On Save and check - reformat Code, Optimize Imports, Rearrange Code Run code cleanup and run
  eslint --fix

# @gpeel/plog /my-perf-tools /my-validators

A few custom lib that i coded: a logger, some perf tools to count the number of Angular DOM refresh cycles, a TS model
of well known Page, Slice to invoque Spring boot, and tools to validate easily forms and inputs

        npm i @gpeel/plog 
        npm i @gpeel/my-perf-tools 
        npm i @gpeel/my-rest-spring-data-model 
        npm i @gpeel/my-validators

    npm i @gpeel/plog @gpeel/my-perf-tools @gpeel/my-rest-spring-data-model @gpeel/my-validators 

## alias for nice import URLs

(not set on this project)

In tsconfig.json, add the following under the first {} just after the lib props:

    "paths": {
      "@libs/*": [
        "src/libs/*"
      ],
      "@shared/*": [
        "src/app/shared/*"
      ],
      "@core/*": [
        "src/app/core/*"
      ],
      "@optional/*": [
        "src/app/optional/*"
      ]
    }

## strict mode in template is not easy at first

I tried to switch to false in tsconfig.json

        "strictTemplates": false

Ok you don't have any problem, but no help either. So after testing it, I don't recommend it.

So the 2 syntax you will need to solve most typescript syntax errors is:  $any and the ! .... like in:

        <input (keyup)="value2=$any($event.target).value" />

https://www.tektutorialshub.com/angular/property-value-does-not-exist-on-type-eventtarget-error-in-angular/
https://www.designcise.com/web/tutorial/how-to-fix-property-does-not-exist-on-type-eventtarget-typescript-error

In TS with NG12 you are in strictNullCheck mode by default so if a variable is NOT initialized to a type directly, it
fails because the var cannot be of type undefined. To escape this check add the ! like in

        class Pipo {
             myTitle!: string; // will not raise any error even in stricNullCheck mode
        }

Otherwise ERROR : TS2564: Property 'myTitle' has no initializer and is not definitely assigned in the constructor.

# @gpeel/plog setup

To complete the plog setup (logger "a la log4J")

change the environment files as (for example):

For _prod

````typescript
export const environment = {
  production: true,
  plog: {
    // debug: 'color:limegreen;font-weight:bold',
    // info: 'color:blue',
    error: 'color:red',
    warn: 'color:orange',
  }
};

````

for dev

````typescript

export const environment = {
  production: false,
  plog: {
    debug: 'color:limegreen',
    info: 'color:blue',
    error: 'color:red',
    warn: 'color:orange',

    // Performance logs
    perf: 'color:darkturquoise',
    perfComponent: ['color:darkturquoise', 'PERF-¤¤'],
    perfCD: ['color:darkturquoise', 'PERF-¤¤¤¤¤¤¤'],
    perfDom: ['color:darkturquoise', 'PERF-¤-¤-¤-¤'],

    // NG hooks
    ngOnChanges: ['color:orange', 'OnChange'],
    ngOnInit: ['color:orange', 'OnInit'],
    ngOnDestroy: ['color:orange', 'OnDestroy'],
    ngDoCheck: ['color:orange', 'DoCheck'],
    ngAfterContentInit: ['color:orange', 'AfterContentInit'],
    ngAfterContentChecked: ['color:orange', 'AfterContentChecked'],
    ngAfterViewInit: ['color:orange', 'AfterViewInit'],
    ngAfterViewChecked: ['color:orange', 'AfterViewChecked'],

    // constructor logs
    create: ['color:green', 'new'],
    createComponent: ['color:green', 'New-@Comp'],
    createDirective: ['color:green', 'New-@Dir'],
    createService: ['color:green', 'New-Svc'],
    createPipe: ['color:green', 'New-@Pipe'],
    createGuard: ['color:green', 'New-@Guard'],
    createResolver: ['color:green', 'New-@Resolver'],

    // NG types
    resolve: ['color:brown', 'RESOLVE'],
    guard: ['color:sandybrown', 'GUARD'],
    validator: 'color:plum',
    pipe: 'color:brown',
    callback: 'color:violet',

    state: 'color:blueviolet', // Redux style or BehaviorSubject, as you want
    // specific logs for NGXS, Akita
    action: ['color:#8f72cf', '@ACTION'], // to log inside Action method
    data: ['color:coral', 'DATA'],
    event: ['color:dodgerblue', 'EVENT'],
    select: ['color:#84467c', '@SELECT'], // to log inside select method
    errorState: ['color:#cf3c04', '@ERROR'], // to log error in Store
    effect: ['color:8F72CF', '@EFFECT'], // to log inside effect method (even if using @Effet is not advised)
    cache: ['color:blueviolet', 'CACHE'],

    formValueChanges: ['orange', 'FORM-VALUE'],
    formEvent: ['greenyellow', 'FORM-EVENT'],
    streamEvent: ['darkorange', 'STREAM'],
    subscription: ['coral', 'SUBSCRIBED-DATA'],
    unsubscription: ['coral', 'UN-SUBSCRIPTION'],

    // Specific loggers for @gpeel/my-validators
    validationCompute: ['color:orange', '@VALID'], // tracing validators when they compute
    validationErrorMsgRefresh: ['color:orange', '@VALID_PERF'], // tracing refresh of <my-error-msg>
    validationErrorMsgCreation: ['color:orange', '@ERROR_MSG_NEW'], // tracing creation of component <my-error-msg>
    errorMsg: ['color:orange', '@VALID'], // used by <error-msg> deprecated

    // network actions (interceptors)
    network: ['color:blue', 'HTTP'],
    networkRequest: ['color:blue', 'HTTP-Request'],
    networkResponse: ['color:blue', 'HTTP-Response'],
    networkError: ['color:red', 'HTTP-Error'],
    networkCreate: ['color:green', 'NEW-HTTP'],

    httpCall: ['color:springgreen', 'HTTP-CALL'], // http prefix : for service logic
    httpSuccess: ['color:springgreen', 'HTTP-SUCCESS'],
    httpError: ['color:red', 'HTTP-ERROR'],
    httpDebug: ['color:springgreen', 'HTTP-TAP'],

    obsSubscribe: ['color:springgreen', 'OBS-sub'],
    obsSuccess: ['color:springgreen', 'OBS-SUCCESS'],
    obsError: ['color:red', 'OBS-ERROR'],
    obsDebug: ['color:springgreen', 'OBS-DEBUG'],


    // tests
    tu: ['color:slateblue', 'tu'],
    tuBeforeEach: ['color:slateblue', 'tu-BEFORE-EACH'],
    tuBeforeAll: ['color:slateblue', 'tu-BEFORE-ALL'],
    tuAfterEach: ['color:tomato', 'tu-AFTER-EACH'],
    tuAfterAll: ['color:tomato', 'tu-AFTER-ALL'],
    tuArrange: ['color:blue', 'tu'],
    tuAct: ['color:blueviolet', 'tu'],
    tuAssert: ['color:brown', 'tu'],
    ti: ['color:green', 'ti'],
    te2e: ['color:green', 'e2e'],

    // colors
    pink: ['color:#FF40BD;', '############'], // pink flashy
    red: ['color:red', '############'],
    orange: ['color:orange', '############'],
    green: ['color:springgreen', '############'],
    blue: ['color:cadetblue', '############'],
    lightBlue: ['color:darkturquoise', '############'],
    violet: ['color:blueviolet', '############'],

    // same color-loggers with a prefix 'color' (easier to find with intellisense)
    colorPink: ['color:#FF40BD;', '############'], // pink flashy
    colorRed: 'color:red', // red without the console.error() stacktrace
    colorOrange: ['color:orange', '############'],
    colorGreen: ['color:springgreen', '############'],
    colorBlue: ['color:cadetblue', '############'],
    colorLightBlue: ['color:darkturquoise', '############'],
    colorViolet: ['color:blueviolet', '############'],

    feature1: ['color:blueviolet', 'FEATURE1'],
    feature2: ['color:dodgerblue', 'FEATURE2'],
    feature3: ['color:blue', 'FEATURE3'],
    feature4: ['color:deepskyblue', 'FEATURE4'],
    feature5: ['color:hotpink', 'FEATURE5'],
    feature6: ['color:deeppink', 'FEATURE6'],
    feature7: ['color:mediumspringgreen', 'FEATURE7'],
    feature8: ['color:greenyellow', 'FEATURE8'],
    feature9: ['color:green', 'FEATURE9'],

    step1: ['color:blueviolet', 'STEP1'],
    step2: ['color:dodgerblue', 'STEP2'],
    step3: ['color:blue', 'STEP3'],
    step4: ['color:deepskyblue', 'STEP4'],
    step5: ['color:hotpink', 'STEP5'],
    step6: ['color:deeppink', 'STEP6'],
    step7: ['color:mediumspringgreen', 'STEP7'],
    step8: ['color:greenyellow', 'STEP8'],
    step9: ['color:green', 'STEP9'],

    usecase1: ['color:blueviolet', 'USECASE1'],
    usecase2: ['color:dodgerblue', 'USECASE2'],
    usecase3: ['color:blue', 'USECASE3'],
    usecase4: ['color:deepskyblue', 'USECASE4'],
    usecase5: ['color:hotpink', 'USECASE5'],
    usecase6: ['color:deeppink', 'USECASE6'],
    usecase7: ['color:mediumspringgreen', 'USECASE7'],
    usecase8: ['color:greenyellow', 'USECASE8'],
    usecase9: ['color:green', 'USECASE9'],

    event1: ['color:blueviolet', 'EVENT1'],
    event2: ['color:dodgerblue', 'EVENT2'],
    event3: ['color:blue', 'EVENT3'],
    event4: ['color:deepskyblue', 'EVENT4'],
    event5: ['color:hotpink', 'EVENT5'],
    event6: ['color:deeppink', 'EVENT6'],
    event7: ['color:mediumspringgreen', 'EVENT7'],
    event8: ['color:greenyellow', 'EVENT8'],
    event9: ['color:green', 'EVENT9'],

  }
};

````
