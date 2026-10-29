# Yaqi Wang — Academic Homepage

Personal academic website, published with GitHub Pages at https://luckwyq.github.io/ .

A bilingual static website with 9 papers and 2 granted invention patents. HTML, CSS and JavaScript; no dependencies or build step.

## 自己修改网站

| 想修改的内容 | 文件 |
| --- | --- |
| 论文、专利、作者、状态、链接、分类和奖项 | `works.js` |
| 简介、动态、中英文文案 | `app.js` 中的 `translations` |
| BibTeX 引用 | `app.js` 中的 `citations` |
| 页面结构、栏目顺序、初始中文内容 | `index.html` |
| 字体、颜色、间距 | `style.css` |

可以直接在 GitHub 中打开文件，点击编辑，修改后选择 Commit changes。Pages 会自动发布 main 分支根目录中的改动。

注意：脚本会用 `app.js` 的翻译内容替换对应文字，并用 `works.js` 生成论文、专利列表。因此不要只改 `index.html` 中的同名内容。主数据修改后，也应同步 `index.html` 的中文初始内容，以便无 JavaScript 阅读和搜索引擎抓取。

`works.js` 的 group 值为 `published`（已发表）、`accepted`（已录用）、`submitted`（在投）和 `patents`（专利）。编号 n 与标识 key 应唯一。状态变化时同步修改 venue 和 labels 的中英文措辞，以及 app.js 中的数量文案 paperNote。

## Preview locally

Run from this repository:

```bash
python3 -m http.server 8000
```

Open http://localhost:8000/ .

## GitHub Pages configuration

Settings → Pages → Deploy from a branch → main → /(root).

The `.nojekyll` file enables direct publication of the static files. No hosting tokens or secrets are stored in this repository.
