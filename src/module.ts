const state = 22;

export function foo() {
    baz();
}

export function bar() {}

function baz() {
    console.log(state);
}
