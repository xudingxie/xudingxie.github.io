var posts=["2022/10/09/AutoResetEvent与Waitone与set/","2022/09/05/Basler语法学习/","2022/10/27/C-PadLeft（）-PadRight（）用法/","2022/11/23/C-CsvHelper-学习日志（6）/","2023/03/12/C-DataTable-学习日志（8）/","2022/11/23/C-RPC-Client-学习日志（6）/","2022/11/23/C-RPC-Server-学习日志（6）/","2023/05/21/C-Sharp-SQL-Server的连接池/","2022/11/23/C-TCP-Client-学习日志（7）/","2022/09/21/C-事件学习-学习日志（1）/","2022/09/04/C-基础学习-1/","2022/11/23/C-TCP-server-学习日志（7）/","2023/03/13/C-字典取值/","2023/03/12/C-字节数组格式转换/","2022/10/27/C-字节流与图片转换/","2023/03/12/C-截取字节数组/","2023/03/12/C-异常学习-学习日志（9）/","2022/09/05/C-继承学习-学习日志（2）/","2022/09/14/C-语法学习-学习日志（4）/","2022/09/12/C-语法学习-学习日志（3）/","2023/03/13/CIP通讯/","2022/10/23/C-连接SQLServer/","2023/06/07/CSHARP-数据库连接插件/","2023/10/18/CSharp中logger4-知错就改-不生成对应元素/","2023/10/18/CSharp中事件，action等讲解/","2023/03/12/DNS与域名解析/","2022/10/09/Form操作-MessageBox/","2022/10/09/Form操作-TextBox仅数字等输入，离开检测/","2022/10/09/Form操作-TextBox显示服务状态/","2022/10/09/Form操作-二次确认弹窗/","2023/03/12/Form操作-全屏显示/","2022/11/23/C-Attribute-学习日志（5）/","2023/03/12/Form操作-切换页面/","2022/10/27/Form操作-程序功能保活/","2023/10/18/GitHub绑定域名/","2022/10/09/Form操作-菜单栏与下拉框/","2022/10/26/Form操作-打开文件弹窗/","2023/07/11/Github与JSDelivr与PicGo与Typora免费图床/","2023/04/25/HTML5中的aria与role/","2023/08/05/Hyper-v虚拟机安装-Ubuntu/","2022/10/09/IP设置/","2023/08/08/Mybatis-学习路线-开始使用/","2022/10/09/Navicat破解/","2022/10/09/OFFICE破解/","2023/04/19/Scss-语法/","2023/08/08/Swagger-学习路线-开始使用/","2023/07/02/Untitled/","2023/04/25/VNC/","2022/10/26/Visual-Studio快捷键/","2023/04/03/Vmware修改默认链接方案/","2023/04/03/Vue-dragable（一）/","2023/04/03/Vue-dragable（二）/","2023/04/03/Vue-el-table分页与搜索/","2023/04/03/Vue-el-table样式/","2023/04/03/Vue-table中一列处理多列数据/","2023/04/03/Vue-上传文件/","2023/04/03/Vue-下载文件/","2023/04/03/Vue-使用g6/","2023/04/06/Vue-图片放大/","2023/03/12/Vue-基础组件-实战学习（一）/","2023/04/03/Vue-安装scss/","2023/04/06/Vue-开发规范/","2023/04/06/Vue-添加端口访问/","2023/04/19/Vue-父组件与子组件之间互相传值/","2023/03/12/Vue-知错就改（一）/","2023/04/03/Vue-知错就改（四）/","2023/04/03/Vue-知错就该（三）/","2023/03/13/Vue-设置menu高亮/","2023/04/03/Vue-读取csv/","2023/04/03/Vue-跨页面传递参数/","2023/06/08/WPF-触发多个事件/","2023/03/13/Vue-路由跳转-问题解决/","2023/10/18/WPF拷贝项目引用全部失效/","2022/10/09/XML-RPC/","2022/10/26/XML使用/","2022/10/09/Win服务的创建与卸载/","2022/10/26/XML命名空间/","2022/10/26/XML命名规则/","2023/10/18/apifox中的mock的url错误/","2023/10/18/apifox的使用/","2023/04/06/arrayA-B结合-低时间复杂度方案/","2023/06/08/centos7-知错就改-正确密码却无法登录/","2023/06/08/cloudflare-优选节点/","2022/10/26/config文件使用/","2022/08/21/diyi/","2023/04/25/docker/","2023/04/03/dragable添加查询-未完成/","2023/04/19/elemen-plus-Virtualized-Table/","2023/10/18/es6的新增语法/","2023/03/13/github插件安装失败-知错就改/","2023/07/10/hexo-学习路线-tags与categories的认识/","2023/06/18/hello-world/","2023/07/10/hexo-学习路线-删除文章/","2023/04/05/hexo上传提示timeout/","2023/04/03/hexo结构介绍/","2023/03/12/html-css-inline-block/","2023/03/12/html-基础学习-基本组件/","2023/06/08/java-基本结构/","2023/05/21/mybatis学习/","2023/07/11/nginx-学习路线-基础配置/","2023/07/11/nginx-知错就改-http500/","2023/06/06/npm-save-save-dev-D-S的区别/","2023/06/07/npm-type-next/","2023/04/03/redmi刷入magisk/","2022/10/26/string转坐标点/","2023/04/03/sublime浏览器无法跳转/","2023/10/18/ts的特殊类型/","2023/04/25/vps协议认识/","2023/07/11/vps流量消失事件/","2023/04/25/vue-css与scss引入/","2023/04/25/vue-css处理顺序/","2023/03/15/vue-get与post-实战学习/","2023/06/05/vue-mixin混合/","2023/03/15/vue-ref与reactive-实战学习/","2023/06/07/vue-ref与reactive/","2023/03/15/vue-入门学习（一）/","2023/03/15/vue-入门学习（二）/","2023/07/31/vue-学习路线-Fragment/","2023/07/31/vue-学习路线-Teleport组件/","2023/07/31/vue-学习路线-customRef/","2023/07/31/vue-学习路线-Suspense组件/","2023/07/31/vue-学习路线-provide与inject/","2023/07/25/vue-学习路线-router-link的replace/","2023/07/31/vue-学习路线-toRow与markRow/","2023/07/31/vue-学习路线-vue3与2对比/","2023/07/14/vue-学习路线-动画效果/","2023/07/15/vue-学习路线-动画组/","2023/07/31/vue-学习路线-响应式数据的判断/","2023/07/20/vue-学习路线-插槽slot/","2023/07/16/vue-学习路线-第三方动画库/","2023/07/10/vue-学习路线-自定义事件的绑定/","2023/07/10/vue-学习路线-自定义事件的解绑/","2023/07/25/vue-学习路线-路由的params参数/","2023/07/25/vue-学习路线-路由的props配置/","2023/07/25/vue-学习路线-路由的query参数/","2023/07/11/vue-学习路线-部署项目/","2023/03/15/vue-实战学习（二）/","2023/03/15/vue-接口测试-实战学习/","2023/03/15/vue-知错就改/","2023/04/25/vue-踩坑记录-css与scss/","2023/04/25/vue-踩坑记录-控件不显示/","2023/10/18/vue中与ts中的遍历/","2023/10/18/vue实现字符串超出部分隐藏/","2023/04/25/vue中的命名规范/","2023/10/18/vue生产开发环境的分别配置/","2023/10/18/vue按需引入/","2023/10/18/vue运行提示创建文件夹权限错误/","2023/10/18/win服务-知错就改/","2022/10/26/win服务start失败/","2022/10/09/修改命名空间/","2023/10/18/区分不同的下载版本/","2023/04/25/域名证书/","2022/10/09/如何获取列的构造方法以及对应的参数列表/","2022/10/26/定期清理文件与文件夹/","2023/07/11/常见GitHub访问失败汇总/","2023/04/25/手机应用与小程序的开发/","2022/10/09/批处理-bat返回上一层目录/","2023/03/12/数据库-MD5加密/","2023/03/12/数据库-三大泛式/","2023/03/12/数据库-基础sql语句/","2023/03/12/数据库-基础分类/","2022/10/09/无法启动计算机-上的服务/","2022/10/26/日志创建/","2022/10/26/日期格式文件名/","2023/03/13/日记-反直觉的苹果/","2023/03/12/日记-小孩子与成年人/","2023/03/12/日记-彩礼/","2023/07/11/日记-放弃幻想认清现实/","2023/03/12/日记-无糖可乐想喝就喝？/","2023/03/12/日记-深入人心的句子/","2023/03/12/日记2023-3-8/","2023/03/12/服务器-内网穿透等/","2022/10/09/根据方法名与参数列表调用对应方法/","2023/07/02/水上漂流的奇妙之旅/","2023/07/11/生日祝福/","2022/10/09/管理员权限运行程序/","2023/04/03/背景动态线条/","2022/10/26/获取当前程序路径/","2023/03/12/装机-内存缓存/","2023/03/12/装机-基本知识/","2023/10/22/hexo/hexo在子文件夹中/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};