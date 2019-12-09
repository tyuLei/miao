大喵教育前端培训
================

## 阶段性测试 2019.12.06

### 大喵教育版权所有，请勿泄漏



01. 列出至少 7 个常用 Linux 命令及其基本使用方法
    cd  cd .访问当前目录 cd .. 访问上级目录 cd / 访问根目录
    rm  rm filename 删除文件
    ls  ls -l -h -a   查看全部的人性化的详细文件列表
    touch touch filename 创建文件
    mv  mv a.txt b.txt 修改文件名
    mkdir mkdir file 创建文件夹
    rmdir rmdir file 删除文件夹
    echo 打印 echo "hello world" >> a.txt

02. 什么是 html 实体？常见 html 实体有哪些？
    html中有些字符是预留的，有特殊意义，如果要使用这些字符，就必须使用实体字符。
    常见的实体字符有
    &quot "   
    &apos '   
    &amp &    
    &lt <      
    &gt >
    &nbsp 空格

03. 计算机为什么使用二进制？
    1.电路中容易实现
    2.物理上最容易实现存储
    3.便于进行加减运算和计算编码，易于转换
    4.二进制对应了数学中的布尔逻辑（命题逻辑）
    5.用二进制表示数据具有的抗干扰能力强
    6.二进制足够使用

04. 什么是 Unicode？如何表示，有什么作用？最通用的 Unicode 实现是？
    unicode是计算机科学领域里的一项业界标准、包括字符集、编码方案等。
    该标准为每个符号指定了唯一且不重复的编号。
    U+6211
    最通用的实现UTF-8

05. 什么是 GUI，什么是 CLI，什么是接口/界面？现实生活中有哪些例子？
    GUI graphics user interface 图形用户界面
    CLI command line interface 命令行界面

06. 在什么情况下 html 标签可以不需要闭合？
    无内容的标签不需要闭合
    自闭合标签不需要闭合
    非闭合标签在一些情况下也不需要闭合，因为它会自动闭合
      如p标签后跟ul标签，则p标签不用闭合
    
07. 在一些情况下某些非自闭合标签的结束标签可以省略的原因是什么？
    原因在与根据html标签分类等规则，则在某些嵌套方式下，已经可以推导出该标签必须闭合，
    则不用人为书写该闭合标签
    
08. 什么是费茨定律？它有哪些应用？
    费茨定律是指使用指点设备到达一个目标的时间同时与两个因素有关
    一是设备当前位置与目标位置的距离，距离越长所需时间越长。
    二是目标的大小，目标越大所需时间越短。
    可以应用在页面的小广告上

09. 为什么英文很重要？
    html的大量文献是英文文献，html的常用指令中很多英文单词

10. 将二进制 `10010` 数转换为十进制数
    18

11. 将十六进制数 `ABCDEF` 转换为十进制数
    11259361

12. 将十进制数 `435` 分别转换成二进制数和十六进制数
    1100110011   1b3

13. 列出 HTML 中常见的全局属性

14. 什么是操作系统的路径（Path）？它的作用及应用场景是？

15. 什么是文本文件？什么是二进制文件？它们最明显的区别是？

16. 为什么说 html 与数学公式有诸多相似之处？
    都是树状结构，树状结构具有自相似的特点

17. 几种常见图片格式有什么区别和特点？
    png jpg gif webp bmp
    jpg图片小，图片失帧
    png无损压缩，图片较大
    bmp位图，将图片所有信息完全保存下来
    webp支持透明通道，比jpg图片完整，比png小

18. `data-*` 属性一般是用来干嘛？
    自定义数据属性，它赋予了我们在所有html上嵌入自定义属性的权利

19. 用什么方法扩大一个 checkbox 的可点击区域？
    链接一个label

20. 什么是 MIME Type？
    Mimetype接口提供了包含以下信息MIME与特定插关联的类型
    NavigatorPlugins.mimeTypes返回此对象的数组

21. 哪些标签可以使用 target 属性？哪些标签可以使用 href 属性？
    target 有_blank链接在空白窗口显示，相当于新打开一个窗口
            _self,默认值，在当前窗口打开
            _ parent,链接在父窗体显示
            _top,链接在顶层窗体显示

22. 什么是 BOM 头？

23. group 类型的标签有哪些？
    ul ol dl

24. 什么是 SEO？
    Search Engine Optimism 搜索引擎优化
    可以使用如 关键字 页面被引用次数 交换链接 使用https 使页面的html更符合语义等
    手段优化

25. 分别列出每种常见浏览器的内核名称（自己查）。
    Trident内核代表产品Internet Explorer，又称其为IE内核。
    Trident（又称为MSHTML），是微软开发的一种排版引擎。使用Trident渲染引擎的浏览器包括：IE、傲游、世界之窗浏览器、Avant、腾讯TT、Netscape 8、NetCaptor、Sleipnir、GOSURF、GreenBrowser和KKman等。
    Gecko内核代表作品Mozilla
    FirefoxGecko是一套开放源代码的、以C++编写的网页排版引擎。Gecko是最流行的排版引擎之一，仅次于Trident。使用它的最著名浏览器有Firefox、Netscape6至9。
    WebKit内核代表作品Safari、Chromewebkit
    是一个开源项目，包含了来自KDE项目和苹果公司的一些组件，主要用于Mac OS系统，它的特点在于源码结构清晰、渲染速度极快。缺点是对网页代码的兼容性不高，导致一些编写不标准的网页无法正常显示。主要代表作品有Safari和Google的浏览器Chrome。
    Presto内核代表作品OperaPresto
    是由Opera Software开发的浏览器排版引擎，供Opera 7.0及以上使用。它取代了旧版Opera 4至6版本使用的Elektra排版引擎，包括加入动态功能，例如网页或其部分可随着DOM及Script语法的事件而重新排版。


26. 列表类标签有哪些？分别如何使用？需要注意些什么？
    table thead tbody tr td
    需要注意边框线的层叠关系，粗线覆盖细线

28. 为什么不同类型的标签的 fallback 内容要以不同的形式提供？

29. 分别写出在 head 中设定页面编码，设定 icon，引入样式表的标签
    <mate charset="utf-8">
    <link rel="icon" href="https//www.baidu.com/favicon.ico">

30. 什么叫做可访问性，html 中为此做了什么工作？


31. 写出以下几个符号的 ascii 码：`a，A，0，CR，LF，空格，NBSP`。
32. 中英互翻
    * geek    极客
    * nerd    呆子
    * hacker  黑客
    * edge   页面
    * bleeding/cutting edge 前沿/尖端/可能存在风险的技术
    * HTML 实体
    * coordinate  坐标
    * polygon     多边形
    * bit 字节
    * byte        字节  
    * alternative  供选择的
    * 属性          property
    * obsolate      
    * 二进制        binary system
    * 十进制
    * 十六进制
    * octal       八进制
    * deprecate   反对
    * loop        循环
    * 行 row
    * 列 col
    * horizontal  水平线
    * 语义化       semantization
    * 可访问性      accessibility


33. 用文字描述如下选择器将选择哪些（个）元素
  ```css
  div, h1 {}  选择了div和h1元素
  div[class] [id="abc"] {}  选择类型选择器div中的class属性里的id为abc的元素
  div:hover ul li > div {}  选择当div被覆盖时里的ul类型选择器里的li类型选择器的子元素div
  body :active {}           选择当body被点击时的元素
  div:hover::after {}       选择当div被覆盖时的伪元素::after
  ::selection {}            选择所有元素的的::selection 伪元素
  :target {}                选择所有元素的:target 伪类
  input + ul + p ~ span {}  选择类型选择器 input 相邻的同级元素 ul 的同级元素 的相邻同级元素 p 的所有的同级元素 span
  ```

34. 分别写出如下几个选择器的优先级
    ```css
    * * * {} 
    div * span {} 
    div[title] {} 
    fieldset legend + input {} 
    #some #thing .not:hover .abc:hover {} 
    id选择器的优先级最高，其次是类选择器、属性选择器和伪类，最后是类型选择器和伪元素选择器
     (0 , 0 , 0 ,3) (0 ,2 ,0 ,1) (0 , 2 ,0 ,0) (0 ,3 ,0 , 0) (2 , 4 , 0 , 0)
    
    ```

35. `em,px,rem,vw,vh` 分别代表多长？
  em相对长度单位，这个单位表示元素的font-size的计算值。如果用在font-size 属性本身，它会继承父元素的font-size。
  px代表像素 
  rem这个单位代表根元素的 font-size 大小（例如 <html> 元素的font-size）。当用在根元素的font-size上面时 ，它代表了它的初始值
  vw视口宽度的 1/100
  wh视口高度的1/100

36. 显示器的物理分辨率为 `1920x1080`，操作系统设置的分辨率为 `1280x720`，网页的放大倍数为 `110%`，请计算一个 CSS 像素对应多少个显示器物理像素（面积与长度）？1.65*1.65
37. 写出如下代码显示在浏览器后**每个单词**的字号
    ```html
    <style>
      html {
        font-size: 20px;
      }
      section {
        font-size: 10rem;
      }
      p {
        font-size: 24px;
      }
      span {
        font-size: 150%;
      }
      .sucks {
        font-size: inherit;
      }
    </style>
    <body>
      <section>
        <h2>Brown</h2>  
        <p>jumps <span>over <span>lazy</span> dog</span></p>
        <p class="sucks">sucks</p>
      </section>
    </body>
    Brown 200px   
    jumps 24px
    over  36px
    lazy  54px
    dog   36px
    sucks 200px

    ```

38. 如何给css添加注释 
<!-- -->

39. 指出如下css代码中的错误
    ```
    p,h1,{

        background-color: rgba:(abc)
        font-varient; abc;
        colr: #ff048;
        font: "serif" 25px;
    }
    rgba后没有: （abc）应该为(a b c)
    ```

40. 写出如下结构中div元素的所有后代/祖先/子/父/兄弟元素
    ```html
    <section>
      <h1><span></span></h1>
      <main>
        <h2></h2>
        <div>
          <ul>
            <li><a href=""><img src="" alt=""></a></li>
          </ul>
        </div>
        <aside>
          <h3></h3>
        </aside>
      </main>
    </section>
    div的后代元素 ul li , div的祖先元素 main section ,div的子元素 li, div的父元素mian, div的兄弟元素h2 aside
    ```

41. 常见的替换元素有哪些？它们与非替换元素最大的区别什么？
    img input 可以设置width height margin padding
 
42. 让 CSS 在 HTML 页面上生效有哪些方法，分别写出来。
    <style></style>
43. 如何让页面打印时应用不同的效果？

44. 假设 index.html 的路径为 http://user.coding.me/task/index.html ，如下引用的a.css和b.css路径分别为？
    ```html
    <!-- index.html的内容 -->
    <style>
        @import "../a.css";
    </style>
    ```
    ```css
    /* a.css的内容 */
    @import "b.css";
    ```

45. 写出满足如下条件的选择器
    * 第  8个子结点之后，倒数第 5 个子结点之前的li结点
      div:nth-child(n+8)div:nth-last-chlid(-n+5){}

    * 【类名】以“damiao-”开头的元素
      [herf$="damiao"]

    * rel 属性中有 nofollow 这个单词的标签
      [rel~="nofollow"]

46. 链接伪类的几种状态书写的顺序是什么？为什么？
    :focus :hover   :active :visited

47. 如下 font 属性的值哪一个是书写正确的？
    * font: serif 24px;
    * font: serif bold 24px/1.2;
    * font: bold 24px/1.2 serif;
48. 详述你对盒模型的理解。
    块元素是由margin padding content三个盒子构成的
    由margin-left margin-right padding-left padding-right content-width 构成了元素的宽度
    由margin-top margin-bottom padding-top padding-bottom content-height 构成了元素的高度

49. 元素的高度写百分比在什么情况下【无效】，为什么？在什么情况下【有效】，有效时是以哪个元素的高度为基准值？
    当没有声明父元素的高度时写高度的百分比无效
    声明html，body{
      height:100%;
    }

50. 字体的 italic 与 obsolete 的区别是？

51. 什么是模拟信号？什么是数字信号？它们的区别是？
    模拟信号：把设备里读出的物理量直接使用
    数字信号：把模拟信号理解为01，就称为数字信号
    模拟信号衰减比较小，合适远距离传输
    数字信号衰减严重，适合近距离传输

52. 将如下 markdown 转换成 html
    ```md
    ## 四季变换

    一年有四季，
    四季有其对应的节气

    * 春
        - 立春
        - 惊蛰
        - 元宵
    * 夏
        - **小米**发布会
        - 华为发布会
    * 秋
        - 开学了
        - 军训了
    * 冬
        - 下雪了
            + 打雪仗了
        - 来暖气了
        - 开空调了

    > 知识就是力量，法国就是培根。

    [春](http://baike.baidu.com/item/%E6%98%A5/6983693)
    ![春](https://www.google.com.hk/images/nav_logo242_hr.png)
    ```
53. 如下表单提交后将跳转到什么地址
    ```html
    <form action="https://www.baidu.com/s" target="_blank">
      <input type="text" value="bb" name="a">
      <input type="checkbox" name="b" id="b" value="123" checked>
      <input type="checkbox" name="b" id="b" value="456" checked>
      <input type="checkbox" name="b" id="b" value="789">
      <input type="radio" name="c" id="c" value="a2">
      <input type="radio" name="c" id="c" value="a5" checked>
      <input type="radio" name="c" id="c" value="a4">
      <select name="select">
        <option value="01">0001</option>
        <option value="02">0002</option>
        <option value="03" selected>0003</option>
        <option value="04">0004</option>
        <option value="05">0005</option>
      </select>
      <button>提交</button>
    </form>
    ```

54. 列出 input 的 type 有哪些值，以及为各个值时分别需要怎么使用。
55. 想要让一个文本输入框在页面打开后自动获得光标要怎么办？
56. 如何在文本框里放置提示性文字？
    输入placeholder="Username"

57. option 标签的主体内容太长影响用户体验，你会如何解决？
58. 想要在 textarea 标签中默认显示一段 html 代码最安全的做法是什么？
59. 如何禁用一组输入框？
60. 如下表格渲染出来后是什么效果？不要直接将代码贴入jsbin中看效果
    ```html
    <table border=1>
      <caption>美国队长</caption>
      <col>
      <col bgcolor=red>
      <col>
      <colgroup bgcolor=pink>
        <col>
        <col>
        <col bgcolor=brown>
      </colgroup>
      <thead>
        <tr>
          <th>01</th>
          <th>02</th>
          <th>03</th>
          <th>04</th>
          <th>05</th>
          <th>06</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>abc</td>
          <td colspan=3 rowspan=2>abc</td>
          <td>abc</td>
          <td>abc</td>
        </tr>
        <tr>
          <td>abc</td>
          <td colspan=2 rowspan=3>abc</td>
        </tr>
        <tr bgcolor=lightgreen>
          <td colspan=2 rowspan=2>abc</td>
          <td>abc</td>
          <td>abc</td>
        </tr>
        <tr>
          <td>abc</td>
          <td>abc</td>
        </tr>
      </tbody>
    </table>
    ```

61. 写出如下标签或属性值的英文全称

    标签：html,div,p,a,em,tr,th,td,col,ul,ol,li,dl,dt,dd,pre,nav

    属性：coord,rect,poly,href,src

62. 请说出你对命令行程序的理解，以及其与 GUI 程序的区别
63. 请确认以下标签分别属性什么类别（Content Category）？

    p, meta, h1, fieldset, option, input, area
64. 解释 box-sizing 可以取哪些值，以及每个值的意义
    content-box border-box默认情况下是content-box

65. 简述 ie7 市场份额比 ie6 低的原因并在网络上找出目前各大浏览器在中国和全球的市场份额
66. 画出如下代码中 div 及其子元素的渲染结果，并指出 p 标签中【每个行内元素的，内容区，行内框的范围】，p 元素的行框，并指明理论的行框高度。有尺子的可以以 1mm 为 2px 来绘制。
    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>JS Bin</title>
      <style>
        p {
          font-size: 20px;
          line-height: 120%;
          margin: 30px;
          margin-left: auto;
          margin-right: -20px;
          width: 300px;
          background-color: tan;
        }

        .a {
          display: inline-block;
        }

        .b {
          font-size: 30px;
          vertical-align: 15px;
        }

        .c {
          display: inline-block;
          width: 60px;
          height: 60px;
          background-color: pink;
          margin: 8px;
        }

        img {
          box-sizing: border-box;
          width: 50px;
          height: 50px;
          border: 2px solid;
          margin: 4px;
          vertical-align: -10px;
          margin-bottom: -5px;
        }
        div {
          width: 400px;
          border: 1px dotted;
        }
      </style>
    </head>
    <body>
      <div>
        <p>
          <span class=a>foo</span>
          <span class=b>bar</span>
          <span class=c></span>
          <img src="https://drscdn.500px.org/photo/205228769/m%3D1170_k%3D1/d721302d063d447aa3bd6301dc1cba87" alt="">
        </p>
      </div>
    </body>
    </html>
    ```
