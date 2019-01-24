# webpack-react-template
这是一个基于webpack4构建react的模板，整合了react-router和redux，可以用作的搭建单页应用的骨架。 
### 使用方法
```
git clone git@github.com:sf1010/webpack-react-template.git
cd webpack-react-template
npm install
npm run dev
or
npm run build
```
### 其他
- 做了图片，字体等文件引用的处理，可自行引用iconfont等第三方图标库，请放在./src/asset目录下
- 做了路由按需加载./src/router/asyncComponent.js为实现方法，方法是网上搜集的