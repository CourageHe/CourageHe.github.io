---
title: Hexo添加分类、标签、关于页(二)
date: 2020-09-14 01:53:59
tags: [Hexo ]
categories: Hexo
---

> 生成的新文件夹都在source下也就是和放文章的文件夹一块 以下所有命令都是在博客文件目录下执行

## 创建“分类”选项

生成“分类”页并添加tpye属性,进入博客目录。执行下方命令

```bash
$ hexo new page categories
```

categories文件夹下会有index.md这个文件，打开后默认内容是这样的：

```markdown
---
title: categories
date: 2019-04-22 14:47:40
---
```
<!-- more -->
添加type: "categories"到内容中，添加后是这样的：

```markdown
---
title: 分类
date: 2020-09-14 01:14:43
type: categories
---

```

保存并关闭文件。

给文章添加“categories”属性

打开需要添加分类的文章，为其添加categories属性。下方的categories:Hexo表示这篇文章添加到到“Hexo”这个分类。注意：一篇文章只会添加到一个分类中，如果是多个默认放到第一个分类中。

```markdown
---
title: 分类
date: 2020-09-14 01:14:43
type: categories
---
```

至此，成功给文章添加分类，点击首页的“分类”可以看到该分类下的所有文章。当然，只有添加了categories: xxx的文章才会被收录到首页的“分类”中。

## 创建“标签”选项

生成“标签”页并添加tpye属性

```bash
$ hexo new page tags
```

在tags文件夹下，找到index.md这个文件，打开后默认内容是这样的：

```markdown
---
title: tags
date: 2020-09-14 01:16:40
---
```

添加type: "tags"到内容中，添加后是这样的：

```markdown
---
title: 标签
date: 2020-09-14 01:16:40
type: tags
---
```

保存并关闭文件。

给文章添加“tags”属性,打开需要添加标签的文章，为其添加tags属性。

```markdown
---
title: Hexo博客安装
date: 2020-09-14 00:58:33
categories: Hexo
---
```

## 创建“关于”选项

生成“关于”页并添加tpye属性

```bash
$ hexo new page about
```

在tags文件夹下，找到index.md这个文件，打开后默认内容是这样的：

```markdown
---
title: about
date: 2020-09-14 01:31:57
---
```

添加type: "tags"到内容中，添加后是这样的：

```markdown
---
title: 关于我
date: 2020-09-14 01:31:57
type: about
---
## 个人简介
……
## 其他
……
```

保存并关闭文件。

点击首页的“关于”可以看到该文件所书写的内容。