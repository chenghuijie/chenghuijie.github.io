# 饥荒联机（Don't Starve Together）
1. 运行本地服务器（macOS）：

    >来自：[饥荒Don't starve together Mac独立服务器搭建](http://teveillan.com/2017/03/03/饥荒Don-t-starve-together-Mac独立服务器搭建/)。

    1. 创建世界

        1. 先创建好世界，可以有洞穴（进去一次地图后再退出来，并确定是第几个世界）；
        2. 在刚登入游戏的界面，点击右下角的“个人资料”，会弹出来一个页面。随机生成一个专用服务器令牌，把它写入以下文件。

            ```shell
            cd /Users/Geoffrey/Documents/Klei/DoNotStarveTogether

            cd Cluster_数字    # 进入第几个世界

            echo 专用服务器令牌 > cluster_token.txt    # 大概是 pds- 开头的内容
            ```
    2. 创建脚本

        ```shell
        cd /Users/Geoffrey/Library/Application\ Support/Steam/steamapps/common/Don\'t\ Starve\ Together/dontstarve_steam.app/Contents/MacOS/

        # 创建世界脚本
        echo "./dontstarve_dedicated_server_nullrenderer -console -cluster Cluster_\$1 -shard Master" > start.sh && chmod +x start.sh

        # 创建洞穴脚本
        echo "./dontstarve_dedicated_server_nullrenderer -console -cluster Cluster_\$1 -shard Caves" > start_cave.sh && chmod +x start_cave.sh
        ```
    3. 打开服务器

        先打开饥荒联机游戏，再运行刚刚的脚本：

        1. 打开世界服务器

            ```shell
            cd /Users/Geoffrey/Library/Application\ Support/Steam/steamapps/common/Don\'t\ Starve\ Together/dontstarve_steam.app/Contents/MacOS/

            ./start.sh 数字       # 第几个世界
            ```
        2. 打开洞穴服务器

            ```shell
            cd /Users/Geoffrey/Library/Application\ Support/Steam/steamapps/common/Don\'t\ Starve\ Together/dontstarve_steam.app/Contents/MacOS/

            ./start_cave.sh 数字  # 第几个世界
            ```
2. 控制台命令：

    ```shell
    # 无消耗全部建造
    GetPlayer().components.builder:GiveAllRecipes()

    # 单人模式开图
    minimap = TheSim:FindFirstEntityWithTag("minimap")
    minimap.MiniMap:ShowArea(0,0,0, 10000)

    # 生成物品（https://www.gamersky.com/handbook/201701/859832.shtml）
    c_spawn('物品代码', 数量) # 地上
    c_give('物品代码', 数量)  # 物品栏

    # 删除鼠标指向的地上物品
    c_select():Remove()
    ```

    - 生成物品：

        小偷背包（`krampus_sack`）、树枝（`twigs`）、燧石（`flint`）、草（`cutgrass`）、绳子（`rope`）、木头（`log`）、木板（`boards`）、岩石（`rocks`）、石砖（`cutstone`）、黄金（`goldnugget`）、齿轮（`gears`）、猪皮（`pigskin`）、蜘蛛丝（`silk`）、噩梦燃料（`nightmarefuel`）、活木头（`livinglog`）

        ```shell
        c_give('krampus_sack', 1)
        c_give('twigs', 150)
        c_give('flint', 100)
        c_give('cutgrass', 150)
        c_give('rope', 50)
        c_give('log', 150)
        c_give('boards', 50)
        c_give('rocks', 150)
        c_give('cutstone', 50)
        c_give('goldnugget', 50)
        c_give('gears', 10)
        c_give('pigskin', 30)
        c_give('silk', 30)
        c_give('nightmarefuel', 15)
        c_give('livinglog', 15)
        ```
