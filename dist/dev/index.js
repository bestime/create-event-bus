
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':1501/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
var createEventBus = (function () {
'use strict';

// declare type EmitFn<
// Options = ObjectEmitsOptions,
// Event extends keyof Options = keyof Options> = Options extends Array<infer V> ? (event: V, ...args: any[]) => void : {} extends Options ?
//  (event: string, ...args: any[]) => void : UnionToIntersection<{
//   [key in Event]: Options[key] extends (...args: infer Args) => any ? (event: key, ...args: Args) => void : (event: key, ...args: any[]) => void;
// }[Event]>;
function createEventBus() {
    const eventRecords = {};
    function on(name, hander) {
        console.log("name", name, eventRecords[name]);
    }
    function emit(name, ...args) {
        console.log("通知", name);
    }
    return {
        on,
        emit
    };
}
const bus = createEventBus();
bus.on('test-A', () => { });
bus.on('test-B', function () {
    return '';
});
bus.emit('test-A', '你好', 5);

return createEventBus;

})();
//# sourceMappingURL=index.js.map
