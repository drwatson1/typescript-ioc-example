abstract class SomeService {
    abstract doSomeWork(): string;
}

class SomeServiceImpl implements SomeService {
    doSomeWork(): string {
        return 'Hello from implementation';
    }
}

/// <reference path="./../../node_modules/typescript-ioc/index.d.ts"/>
const Container = require('typescript-ioc/es5.js').Container;

Container.bind(SomeService).to(SomeServiceImpl);

export {
    SomeService,
    Container
};