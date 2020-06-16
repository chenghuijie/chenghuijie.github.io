# chenghuijie.github.io

这是一个犹抱琵琶半遮面的Demo。

### PS
1. GitHub的markdown文件中使用任何改变样式的行为都无效（内联、嵌入、外部）。

    >其他也无效的标签查看官方介绍：[gfm](https://github.github.com/gfm/#disallowed-raw-html-extension-)。
2. github.io居然无法识别`_`前缀的文件!
3. GitHub的commits居然是按照用户本地推送时间来记录的……
4. 图片引用的多种形式：

    ![文件相对位置](./source/images/github.png)
    ![外网可用](https://github.com/chenghuijie/chenghuijie.github.io/raw/master/source/images/github.png)
    ![外网可用](https://raw.github.com/chenghuijie/chenghuijie.github.io/master/source/images/github.png)

    <details>
    <summary>图片写法</summary>

    ```markdown
    1. 推荐相对位置：

        ![文件相对位置](./source/images/github.png)
    2. 与分支名耦合，但外网可用：

        1. ![外网可用](https://github.com/chenghuijie/chenghuijie.github.io/raw/master/source/images/github.png)
        2. ![外网可用](https://raw.github.com/chenghuijie/chenghuijie.github.io/master/source/images/github.png)
    ```
    </details>
5. github的markdown可以直接上HTML内容

    <details>
    <summary><del>简</del><code>直</code><strong>厉</strong>害</summary>

    >不过就是`<summary>`里面要也要用HTML内容，并且隐藏内容要空一行才可以用markdown语法。

    ```markdown
    <details>
    <summary><del>简</del><code>直</code><strong>厉</strong>害</summary>

    >不过就是`<summary>`里面要也要用HTML内容，并且隐藏内容要空一行才可以用markdown语法。
    </details>
    ```
    </details>
