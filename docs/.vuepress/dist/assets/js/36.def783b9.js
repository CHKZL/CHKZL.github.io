(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{412:function(t,s,a){"use strict";a.r(s);var e=a(42),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ddtv-web-server安装教程-linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ddtv-web-server安装教程-linux"}},[t._v("#")]),t._v(" DDTV_WEB_Server安装教程（Linux）")]),t._v(" "),a("h2",{attrs:{id:"_1-下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载"}},[t._v("#")]),t._v(" 1.下载")]),t._v(" "),a("p",[t._v("从以下地方选一个下载DDTV最新版本"),a("br"),t._v(" "),a("a",{attrs:{href:"https://hub.fastgit.xyz/CHKZL/DDTV/releases/latest",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),a("OutboundLink")],1),a("br"),t._v("\nQQ群共享(其实我推荐这个(这里的人超好的，还能直接和我对线((("),a("br"),t._v("\nDDTV功能反馈讨论群:"),a("code",[t._v("338182356")]),t._v("\nDDTV聊天吹水群:"),a("code",[t._v("307156949")])]),t._v(" "),a("h2",{attrs:{id:"_2-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装"}},[t._v("#")]),t._v(" 2.安装")]),t._v(" "),a("p",[t._v("DDTV_WEB_Server是免安装的，把下载下来的压缩包解压到任意当前linux用户有"),a("strong",[t._v("读写权限")]),t._v("的路径即可")]),t._v(" "),a("h2",{attrs:{id:"_3-启动准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-启动准备"}},[t._v("#")]),t._v(" 3.启动准备")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("如果在这个步骤中出现了你本地并不存在的文件，请尝试先启动一次DDTV_WEB_Server，正常情况下会自动生成缺失的文件。当然也可以手动新建，但是在linux下请注意权限问题。")])]),t._v(" "),a("h3",{attrs:{id:"运行环境准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行环境准备"}},[t._v("#")]),t._v(" 运行环境准备")]),t._v(" "),a("ul",[a("li",[t._v("请从以下两种方法中选择适合你的")])]),t._v(" "),a("h3",{attrs:{id:"方法一-x86常见发行版本安装方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法一-x86常见发行版本安装方法"}},[t._v("#")]),t._v(" 方法一：x86常见发行版本安装方法：")]),t._v(" "),a("blockquote",[a("p",[t._v("DDTV_WEB_Server依赖于"),a("code",[t._v(".NET Runtime 6.0")]),t._v("和"),a("code",[t._v("ASP.NET Core Runtime 6.0")]),t._v("环境运行，请先安装"),a("code",[t._v(".NET Runtime 6.0")]),t._v("和"),a("code",[t._v("ASP.NET Core Runtime 6.0")]),t._v("："),a("br"),t._v("\n请根据你所使用的linux发行版本参考"),a("a",{attrs:{href:"https://dotnet.microsoft.com/en-us/download/dotnet/6.0",target:"_blank",rel:"noopener noreferrer"}},[t._v("微软文档"),a("OutboundLink")],1),t._v("进行环境的安装")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v(".NET版本提示")]),t._v(" "),a("p",[t._v("安装的版本只要高于.NET 6.0.1即可")])])]),t._v(" "),a("h3",{attrs:{id:"方法二-微软文档没有说明的发行版本或者arm等版本安装方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法二-微软文档没有说明的发行版本或者arm等版本安装方法"}},[t._v("#")]),t._v(" 方法二：微软文档没有说明的发行版本或者Arm等版本安装方法")]),t._v(" "),a("blockquote",[a("p",[t._v("(所有版本的linux也都可以用这个方法)"),a("br"),t._v("\n终端里输入以下内容")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" 不同cpu架构的下载地址 -O dotnet-sdk.tar.gz\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /usr/share/dotnet\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" /usr/share/dotnet/* -rf\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -xzvf dotnet-sdk.tar.gz -C /usr/share/dotnet/\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ln")]),t._v(" -s /usr/share/dotnet/dotnet /usr/bin/dotnet -f\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("不同cpu架构的下载地址哪里找？")]),t._v(" "),a("p",[t._v("在"),a("a",{attrs:{href:"https://dotnet.microsoft.com/en-us/download/dotnet/6.0",target:"_blank",rel:"noopener noreferrer"}},[t._v(".NET6 环境下载地址"),a("OutboundLink")],1),t._v("中选择对应的cpu架构版本"),a("br"),t._v(" "),a("img",{attrs:{src:t.$withBase("/dotnet下载地址1.png")}}),a("br"),t._v(" "),a("img",{attrs:{src:t.$withBase("/dotnet下载地址2.png")}}),a("br"),t._v("\nps1:查看cpu架构在终端里输入uname -m"),a("br"),t._v("\nps2:aarch就是Arm")])]),t._v(" "),a("p",[t._v("然后在终端里输入")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("dotnet --info\n")])])]),a("p",[t._v("如果出现了dotnet相关信息，那么恭喜你，环境配置成功了")])]),t._v(" "),a("h3",{attrs:{id:"配置房间文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置房间文件"}},[t._v("#")]),t._v(" 配置房间文件")]),t._v(" "),a("p",[t._v("默认房间文件"),a("code",[t._v("RoomListConfig.json")]),t._v("格式为json字符串，默认为空json，并且和DDTV_GUI通用"),a("br"),t._v("\n在API中支持一键导入"),a("br"),t._v("\n可以直接使用DDTV的房间配置文件复制过来即可"),a("br"),t._v("\n在下载的压缩包里附带了一个参考的文件，也可以参考那个文件进行手动编写"),a("br"),t._v("\n房间配置文件格式为")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"未来明-MiraiAkari"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//昵称")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//备注")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"RoomId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6792401")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//房间号")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"UID"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("238537745")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//账号UID")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"IsAutoRec"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//开播后是否自动录制")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"IsRemind"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//开播后是否提醒(DDTV_GUI特有，在本版本中无效)")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"IsRecDanmu"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//是否录制该房间弹幕(需要打开总弹幕录制开关)")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Like"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///特别标注(本版本无效)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[t._v("多个这种格式的内容组成")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),a("p",[t._v("手动编辑过后请检查JSON字符串的合法性，请保证确保符合参考文件的JSON文件格式！！！")])]),t._v(" "),a("h3",{attrs:{id:"web端口设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web端口设置"}},[t._v("#")]),t._v(" WEB端口设置")]),t._v(" "),a("p",[t._v("如果是部署在公网或者有需要从外部访问的需求，请在系统防火墙和可能存在的云平台安全组中打开DDTV_WEB_Server的WEB服务所需端口(默认为"),a("strong",[t._v("11419")]),t._v(")")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("第一次启动时，因为生成二维码而出现问题")]),t._v(" "),a("ul",[a("li",[t._v("终端中提示"),a("code",[t._v("Gdip")]),t._v("或者"),a("code",[t._v("libgdiplus")]),t._v("字样")])]),t._v(" "),a("blockquote",[a("p",[t._v("这是一个已知的问题，在Linux下缺少Mono库中的libgdiplus，该库用于对非Windows操作系统提供GDI+兼容的API，libgdiplus是mono中的System.Drawing依赖的一个组件，用于显示web页面基本颜色等。可用于生成netcore验证码，处理图片等。"),a("br"),t._v("\n解决方法:"),a("br"),t._v("\n在终端中执行以安装libgdiplus库")]),t._v(" "),a("ul",[a("li",[t._v("Centos")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" libgdiplus-devel\n")])])]),a("ul",[a("li",[t._v("Ubuntu")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" libgdiplus\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"_4-启动-初始化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-启动-初始化"}},[t._v("#")]),t._v(" 4.启动&初始化")]),t._v(" "),a("p",[t._v("1.根据你所使用的linux发行版本使用"),a("code",[t._v("dotnet ./DDTV_WEB_Server.dll")]),t._v("命令直接启动，如果要在无GUI的linux服务器上后台运行请使用"),a("code",[t._v("screen")]),t._v("进行启动，"),a("strong",[t._v("请勿使用"),a("code",[t._v("nohup")]),t._v("的方式进行启动")]),t._v("。"),a("br"),t._v("\n然后根据控制台窗口显示的内容操作即可")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("启动或运行出现其他错误请参考"),a("a",{attrs:{href:"../QFA"}},[t._v("常见问题")]),t._v("页面")])]),t._v(" "),a("h2",{attrs:{id:"其他功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他功能"}},[t._v("#")]),t._v(" 其他功能")]),t._v(" "),a("p",[t._v("其他高级功能请参考"),a("code",[t._v("配置说明")]),t._v("页面的内容进行相应功能的配置即可，如有任何疑问都可以加群338182356进行对线")])])}),[],!1,null,null,null);s.default=n.exports}}]);