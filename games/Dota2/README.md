# Dota2
>可控制角色类型：
>
>1. 「英雄级」：除了英雄之外，还包含类英雄级角色，如：英雄幻象、熊灵、酒仙大招、等。
>2. 「次英雄级」：强力召唤物，大部分是大招，如：术士地狱火、佣兽、等。
>3. 「普通召唤物」：大部分是小技能召唤物或魅惑/支配的野怪、小兵。

1. 英雄模型上血条的格子，一格250点血

    1. 小兵、塔、野怪、信使、召唤物、肉山、等模型上只有血条，没有格子
    2. 各种守卫的血条上格子表示能够承受特定几次攻击
2. 持续施法期间使用物品是否被打断？

    1. 不打断：暗影护符、微光披风、隐刃/白银之锋、刃甲、臂章
    2. 会打断：黑皇杖、幽魂权杖/虚灵刀、各种鞋、等绝大部分道具
3. 仇恨系统

    >[【Dota2】仇恨机制完全解析](https://www.bilibili.com/video/BV1s54y1A77m)、[wiki：仇恨](https://dota.huijiwiki.com/wiki/仇恨)。

    1. 吸引仇恨的范围（和射程不一致）

        1. 防御塔500
        2. 近战小兵500
        3. 远程小兵600
        4. 攻城单位800
        5. 野怪240（夜晚睡觉）
        6. 肉山140
    2. 哪些角色可以吸引仇恨、刷新仇恨

        1. 吸引仇恨（2种方式）

            1. A敌方英雄的指令：

                英雄级。
            2. 对敌方英雄开始攻击动作：

                英雄级、次英雄级。

            - 普通召唤物不能吸引仇恨。
        2. 刷新仇恨

            1. A友方单位：

                英雄级、次英雄级、普通召唤物
    3. A英雄吸引仇恨、刷新仇恨，可以无限远（敌方英雄、友方英雄均可）

        1. 可以直接A界面顶部头像（敌方英雄、友方英雄均可）
    4. 刷新仇恨（转移兵或塔的仇恨）

        1. 正在被攻击角色，A一下友方单位，会导致攻击者按优先级重新计算攻击对象（攻击优先级看上面wiki）
    5. 仇恨可变化的内置cd：3秒（A敌方英雄、A友方英雄共用一个cd）

        自下达攻击指令后开始计算。e.g. 若下达攻击指令时位于小兵的仇恨范围外，则3秒内进入小兵的攻击范围，无论下达多少次攻击指令，都不会吸引小兵仇恨。
    6. 自动施法状态下右击或者A英雄，会吸引仇恨

        1. 只有选择技能后再左击英雄施法才不会触发吸引仇恨
    7. 投石车仇恨距离800，如何保护投石车？

        1. 友方英雄不要在我方投石车仇恨范围内被任意敌方单位攻击，被攻击会导致投石车冲向攻击者，从而进入敌方单位射程，尤其是塔的射程
    - 野怪的仇恨不太一样，先只需要知道以下2点：

        1. 在1800距离内对它们造成伤害或对它们使用技能。吸引到中立生物的仇恨后，它们会遵守常规的自动攻击规则，这意味着它们优先攻击最靠近它们的敌人，而不是对他们造成伤害的敌人。
        2. 若仇恨范围内的一个英雄发出了攻击敌方英雄的指令，则该中立生物会立刻将攻击目标转换为那位发出攻击指令的英雄。
4. 设置

    ![设置1](./images/设置-1.png)
    ![设置2](./images/设置-2.png)
    ![设置3](./images/设置-3.png)
    ![设置4](./images/设置-4.png)
    ![设置5](./images/设置-5.png)
    ![设置6](./images/设置-6.png)
    ![设置7](./images/设置-7.png)
    ![设置8](./images/设置-8.png)
    ![设置9](./images/设置-9.jpg)
