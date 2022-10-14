type TemplateFunc = (...args: any[]) => void

// declare type EmitFn<
// Options = ObjectEmitsOptions,
// Event extends keyof Options = keyof Options> = Options extends Array<infer V> ? (event: V, ...args: any[]) => void : {} extends Options ?
//  (event: string, ...args: any[]) => void : UnionToIntersection<{
//   [key in Event]: Options[key] extends (...args: infer Args) => any ? (event: key, ...args: Args) => void : (event: key, ...args: any[]) => void;
// }[Event]>;




function createEventBus<Events extends Record<string, TemplateFunc>> () {


  const eventRecords: Record<string, undefined | TemplateFunc[]> = {

  }

  function on <K extends keyof Events> (name: K, hander: Events[K]) {
    const a = name
    console.log("name", name, eventRecords[name])
  }

  function emit<K extends keyof Events, V> (name: K, ...args: Parameters<Events[K]>) {
    
    console.log("通知", name)
  }

  return {
    on,
    emit
  }
}

const bus = createEventBus<{
  'test-A': (name: string, age: number) => void
  'test-B': () => void
}>()

bus.on('test-A', () => {})
bus.on('test-B', function () {
  return ''
})

bus.emit('test-A', '你好', 5)



export default createEventBus as any