# Global Giving UI

The frontend is generated with [Angular CLI](https://github.com/angular/angular-cli), and uses [TypeScript](https://www.typescriptlang.org).

The UI is mocked up from the globalgiving.org website. Look, I'll be honest, there's nothing particularly special going on here. The main point of this was just to showcase realtime updates. We are taking advantage of Observables to do some polling here. Probably better to do this with Websockets but ran out of time.

It's hosted in S3 and calls an api that is hosted on an EC2 instance.

