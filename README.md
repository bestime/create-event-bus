
## 不再维护

#### 参数详解

| 参数        | 描述  | 
| --------   | -----:  |
| on      | 事件注册   |
| emit      | 事件触发  |

#### 安装
```
// 使用 npm
npm i create-event-bus
const CreateEventBus = require('create-event-bus'); // 引入方式01
import CreateEventBus from 'create-event-bus'; // 引入方式02

// 使用 cdn (版本可选 @xx.xx.xx)
<script src="https://cdn.jsdelivr.net/npm/create-event-bus@latest/create-event-bus.min.js"></script>

```

#### 第一步 - 实例化
```javascript
const bus = new CreateEventBus() // 实例化bus
```

#### 第二步 - 注册
```javascript
// 注册永久事件
var demo01 = bus.on('test01', function (res) {
  console.log(res)
})

// 注册永久事件
var demo02 = bus.on('test01', function (res) {
  console.log(res)
})

// 注册一次性事件
var demo03 = bus.once('test01', function (res) {
  console.log(res)
})

// 注册永久唯一事件, 将会覆盖名为 test01 的函数
var demo04 = bus.one('test01', function (res) {
  console.log(res)
})

// 注册一次性唯一事件, 将会覆盖名为 test01 的函数
var demo05 = bus.oneonce('test01', function (res) {
  console.log(res)
})
```
#### 第三步 - 事件触发
```javascript
bus.emit('test01', {
  msg: '这是附带的数据',
  data: [1, 2, 3, 4]
})
```

#### 清空bus实例（页面销毁前或者其他有需要得场景使用）
```javascript
bus.clear(demo01)
bus.clear(demo02)
bus.clear(demo03)
bus.clear(demo04)
bus.clear(demo05)
```

