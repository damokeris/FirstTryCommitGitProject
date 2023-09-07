# 总结一下安装新系统后需要安装的软件  

1. JDK(java)
   - JDK 8 的安装
  
            sudo apt install openjdk-8-jdk
   - JDK 17的安装

            sudo apt install openjdk-17-jdk

---

2. MySQL
    - MySQL服务器的安装

            sudo apt install mysql-server-8.0
    
    - 创建用户和数据库并授予用户远程登陆和对数据库操作的权限。
            
            sudo mysql -u root -p
            以管理员登陆mysql,这里会需要输入密码，为开机密码。

            使用mysql库
            use mysql;

            创建用户和密码
            create user 'username'@'%' identified by 'password';

            创建必要的库
            create database databasename;

            以下省略创建必要的表
            ...

            授予用户对特定库的所有操作权限
            grant all on databasename.* to 'username'@'%';

            刷新配置生效
            flush privileges;

---

3. snap商店的更新
    - 首先，关闭snap-store进程
  
            killall snap-store
    - 然后，以管理员身份更新snap-sore

            sudo snap refresh snap-sore

---

4. IDEA
    - IDEA的安装
      - 建议用snap商店内的版本，对于工作目录的创建比较友好。

---

5. Redis
    - Redis的安装
  
            sudo apt install redis

---

6. nvm及node
   - nvm 的安装
            
            官网推荐的下载方式：
            curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

            wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

            使环境变量生效：
            source ~/.bashrc

            检验是否成功：
            nvm -v
            出现版本号，则成功。失败详见[官网](https://github.com/nvm-sh/nvm)
   
   - node 的安装

            在nvm安装完成的基础下，利用nvm安装不同版本的node并进行版本的切换，默认node设置

            查看可安装的node版本：
            nvm ls-remote

            选择自己想要的版本进行安装：
            nvm install v16.20.0

            查看本地的node
            nvm ls

            切换/使用node
            nvm use v16.20.0

            查看node版本：
            node -v

            设置默认node版本
            nvm alias default v16.20.0

* 可选软件合集
     - QQ
        > QQ官网提供的 [下载](https://im.qq.com/linuxqq/index.shtml)

     - WPS
        > WPS官网提供的 [下载](https://www.wps.cn/product/wpslinux)

     - 腾讯会议
        > 腾讯视频官网提供的[下载](https://meeting.tencent.com/download/)
        - 腾讯会议下载后，在Ubuntu22.04.2LTS下，可能存在无法进入的问题，附上解决方案：

                sudo vim /etc/gdm3/custom.conf

                取消注释
                #WaylandEnable = false

                重启电脑

     - 谷歌浏览器
     - edge浏览器
     - VScode
     - syncthing(开源同步工具)
        > syncthing官网[下载](https://apt.syncthing.net/)地址
        
     - Apipost
        > Apipost官网[下载](https://www.apipost.cn/)地址

     - GIMP
     - conky
     - vim
     - neofetch 显示系统静态信息
     - tlp
     - 亿图图示
        > 亿图图示官网[下载](https://www.edrawsoft.cn/download-edrawmax.html)地址

        > 保存其他格式要开会员？取消网格线也要会员？没有linux精神，慎用。
     - Runner Go测试平台
 
     - steam deck 也是linux。如果要开steam商店，用UU加速器会方便一点。
     - Xmind有linux版
     - ubuntu 设置图表不见了的处理办法

         > sudo apt install gnome-control-center
         
         > 还有一条命令好像是针对右键呼不出来菜单的？：sudo apt install unity-control-center

         > 安装gnome优化：sudo apt install gnome-tweaks