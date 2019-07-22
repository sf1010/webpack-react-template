# webpack-react-template
这是一个基于webpack4构建react的模板，整合了react-router和redux，可以用作的搭建单页应用的骨架。
 
## 使用方法
~~~
git clone git@github.com:sf1010/webpack-react-template.git
cd webpack-react-template
npm install
npm run dev
or
npm run build
~~~

## 使用框架
- [react](https://www.reactjs.org)
- [redux](https://www.reactjs.org)
- [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch)
- [normalize](http://necolas.github.io/normalize.css/)

## 项目结构
~~~
├─build                       webpack编译配置文件目录
│  ├─webpack.base.config.js   webpack基础配置文件
│  ├─webpack.dev.config.js    webpack开发配置文件
│  └─webpack.prod.config.js   webpack生产配置文件
├─dist                        build完成生成的目录
├─src                         前端代码目录
│  ├─assets                   静态资源目录
│  │  └─styles                公用样式目录
│  ├─components               公用组件目录
│  ├─framework                webpack入口目录
│  │  └─index.js              webpack主入口js，实例化react
│  ├─layout                   页面布局目录
│  │  └─index.js              页面根组件
│  ├─pages                    react页面目录
│  │  ├─home                  页面目录（示例）
│  │  │  ├─components         页面私有组件目录（推荐组件内再建文件夹，继续使用index命名vue文件）
│  │  │  ├─index.js           页面组件（推荐index命名文件）
│  │  │  └─index.less         页面样式（推荐index命名文件）
│  │  └─test                  页面目录（示例）
│  │     ├─components         页面私有组件目录（推荐组件内再建文件夹，继续使用index命名vue文件）
│  │     ├─index.js           页面组件（推荐index命名文件）
│  │     └─index.less         页面样式（推荐index命名文件）
│  ├─router                   路由目录
│  │  ├─asyncComponent.js     路由按需加载文件         
│  │  └─index.js              路由文件
│  ├─services                 请求api方法目录
│  ├─store                    redux目录
│  │  ├─actions               redux actions目录
│  │  │  └─home.js            home的actions（示例）
│  │  ├─constants             redux的action type目录
│  │  │  ├─basic.js           通用的的action type（示例）
│  │  │  └─home.js            home的action type（示例）
│  │  ├─reducers              redux的reducer目录
│  │  │  ├─home.js            home的reducer（示例）
│  │  │  └─index.js           reducer汇总文件
│  │  └─index.js              实例化redux文件
│  ├─tools                    公用方法，请求拦截器目录
│  │  ├─utils.js              公用方法目录
│  │  └─request.js            请求拦截器
│  ├─view                     index.html目录
│  │  └─index.html            html根
~~~

## 其他
- 做了图片，字体等文件引用的处理，可自行引用iconfont等第三方图标库，请放在./src/asset目录下
- 做了路由按需加载./src/router/asyncComponent.js为实现方法，方法是网上搜集的
