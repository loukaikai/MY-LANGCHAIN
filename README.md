# Getting Started with Create React App

### `npx create-react-app react-rdux-todolist`
### ` yarn add redux `

## 安装
### ` yarn add react-redux `

## api
###    https://www.redux.org.cn/docs/react-redux/api.html

## redux
## store
### createStore(reducer, [preloadedState], [enhancer])
#### reducer (Function): A reducing function that returns the next state tree, given the current state tree and an action to handle 用法： reducer(state = defaultStat, action);
#### [preloadedState] (any): The initial state. 
#### [enhancer] (Function): The store enhancer. 
### 使用实例
####  `Middleware 用例
所以我们可以用中间件做很多事！

当一个 middleware 遇到 dispatch 一个 action 时，它可以做到任何想做的事：

将某些内容记录到控制台
设置定时
进行异步 API 调用
修改 action
暂停 action，甚至完全停止
以及你能想到的任何其他事情。`
#### ` const delayedMessageMiddleware = storeAPI => next => action => {
  if (action.type === 'todos/todoAdded') {
    setTimeout(() => {
      console.log('Added a new todo: ', action.payload)
    }, 1000)
  }

  return next(action)
} 
const store = createStore(rootReducer, middlewareEnhancer)

const dispatchResult = store.dispatch({type: 'some/action'})
console.log(dispatchResult)  `

### 将 DevTools 添加到 Store


## subscribe(listener)
### Adds a change listener. It will be called any time an action is dispatched, and some part of the state tree may potentially have changed. You may then call getState() to read the current state tree inside the callback. 翻译：添加更改侦听器。任何时候调度一个动作时都会调用它，并且状态树的某些部分可能已经改变。然后，您可以调用 getState() 来读取回调中的当前状态树。

## 使用 Middleware
### 你可以使用 store enhancers 自定义 Redux store。Redux Middleware 实际上是在 Redux 内置的一个非常特殊的 store enhancer 之上实现的，称为 applyMiddleware。
### Middleware 围绕 store 的 dispatch 方法形成管线。当我们调用 store.dispatch(action) 时，实际上 调用了管线中的第一个 Middleware。 然后，该 Middleware 可以在看到该操作时做任何它想做的事情。通常，Middleware 会检查 action 是否是它关心的特定 type，就像 reducer 一样。如果它是匹配到的 type，Middleware 可能会运行一些自定义逻辑。否则，它将 dispatch 传递给管线中的下一个 Middleware。
### 编写自定义 Middleware
#### 我们也可以编写自己的 Middleware。你可能不需要一直这样做，但自定义 Middleware 是向 Redux 应用程序添加特定行为的好方法。
## 总计
 Redux 应用程序始终只有一个 store
使用 Redux createStore API 创建 store
每个 store 都有一个独立的根 reducer 方法
Stores 主要有三种方法
getState 返回当前 state
dispatch 向 reducer 发送一个 action 来更新 state
subscribe 接受一个监听器回调，该回调在每次 dispatch action 时运行
Store enhancers 让我们能够在创建 store 时进行自定义操作
Enhancers 包装了 store 并且可以覆盖它的方法
createStore 接受一个 enhancer 作为参数
可以使用 compose API 将多个 enhancers 合并在一起
Middleware 是自定义 store 的主要方式
使用 applyMiddleware enhancer 添加 middleware
Middleware 被写成三个相互嵌套的函数
每次 dispatch action 时都会运行 middleware
Middleware 内部可能有副作用
Redux DevTools 可让你查看应用程序随时间发生的变化
DevTools 扩展可以安装在你的浏览器中
Store 需要添加 DevTools enhancer，使用 composeWithDevTools
DevTools 显示已 dispatch action 和 state 随时间的变化


## <Provider store>
### <Provider store> 使组件层级中的 connect() 方法都能够获得 Redux store。     
### ` ReactDOM.render(
        <Provider store={store}>
            <MyRootComponent />
        </Provider>,
        rootEl
    ) `

## connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
### 连接 React 组件与 Redux store。
### 连接操作不会改变原来的组件类。
### 反而返回一个新的已与 Redux store 连接的组件类。    

        <Fragment>
                <div>
                    <label> 输入内容：</label>
                    <input placeholder="代办事项" value={this.props.inputValue}/>
                    <button style={{"margin-left" : "10px"}}>提交</button>
                </div>
                <div>
                    {this.state.list}
                </div>
        </Fragment>   