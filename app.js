'use strict';

const translations = {
  "zh": {
    "skip": "跳转到正文",
    "welcome": "欢迎访问王雅琪的个人主页",
    "name": "王雅琪 / Yaqi Wang",
    "role": "博士研究生",
    "university": "东北大学，中国",
    "focusLabel": "研究方向：",
    "focus": "数据管理、学习型索引、度量空间相似性检索",
    "emailLabel": "邮箱：",
    "navigation": "网站导航：",
    "bioTitle": "个人简介",
    "newsTitle": "近期动态",
    "researchTitle": "研究方向",
    "papersTitle": "论文",
    "ongoingTitle": "在研工作",
    "contactTitle": "联系方式",
    "bio1": "我是王雅琪，现为<strong>东北大学博士研究生</strong>，于 2024 年入学。我的研究聚焦于<strong>学习型索引与度量空间相似性检索</strong>，探索学习模型与传统索引结构的融合方法，以提高检索效率并降低存储和维护开销。",
    "bio2": "我的研究从一维有序数据的索引构建与动态更新，逐步拓展至一般度量空间中的相似性检索。目前关注数据分布、查询工作负载与索引组织之间的关系，以及查询感知的索引优化、不相交节点组织和多度量空间索引。",
    "news1": "论文 <a href=\"https://doi.org/10.1145/3786665\" target=\"_blank\" rel=\"noopener noreferrer\">LM-Tree: A Hybrid Learned Index for Similarity Search in Metric Spaces</a> 发表于 <em>Proceedings of the ACM on Management of Data</em>，并列入 SIGMOD 2026 接收论文名单。",
    "news2": "论文 <a href=\"https://doi.org/10.1007/978-981-95-5722-6_4\" target=\"_blank\" rel=\"noopener noreferrer\">QUEST: Query-Aware Learned Metric Index for Similarity Search</a> 发表于 APWeb-WAIM 2025 论文集（论文集于 2026 年出版）。",
    "news3": "论文 <a href=\"https://doi.org/10.13328/j.cnki.jos.007220\" target=\"_blank\" rel=\"noopener noreferrer\">DRAMA：更新分布感知的学习型索引</a> 发表于《软件学报》2025 年第 36 卷第 8 期。",
    "researchIntro": "我主要研究如何利用数据分布和查询负载信息，构建高效、紧凑、易维护的索引结构。",
    "research1": "<strong>学习型索引：</strong>融合轻量学习模型与索引结构，研究数据分布感知的构建方法，以及动态更新过程中的低开销维护。",
    "research2": "<strong>度量空间相似性检索：</strong>结合树结构、局部枢轴与学习模型，提高剪枝能力，减少节点访问和距离计算。",
    "research3": "<strong>查询感知数据管理：</strong>将查询工作负载融入索引构建、节点组织与枢轴配置，降低实际查询代价。",
    "paperNote": "已发表论文 7 篇，已录用论文 1 篇，在投论文 1 篇。姓名加粗标示本人。",
    "paperLink": "论文",
    "lmSummary": "融合 M-Tree、局部枢轴与轻量学习模型，为度量空间相似性检索提供自适应的索引组织。",
    "questSummary": "利用查询工作负载引导数据聚类、枢轴变换与学习型索引构建，减少相似性查询的搜索开销。",
    "dramaAuthors": "郭娜，<strong>王雅琪</strong>，姜皓南，谷峪，夏秀峰。",
    "dramaTitle": "DRAMA：更新分布感知的学习型索引。",
    "dramaVenue": "<em>软件学报</em>，36(8): 3769–3786，2025。",
    "dramaSummary": "面向持续更新的数据，研究更新分布感知的学习型索引构建与维护。",
    "ongoingIntro": "围绕博士课题<strong>“面向度量空间的学习型索引研究”</strong>，我正在探索以下问题：",
    "ongoing1": "<strong>LM⁺-Tree：</strong>将查询工作负载融入混合学习型度量索引的构建、查询与维护。",
    "ongoing2": "<strong>不相交节点组织：</strong>研究对象覆盖与节点重叠之间的关系，减少查询过程中的无效访问。",
    "ongoing3": "<strong>多度量空间索引：</strong>面向多种距离关系，探索索引组织与检索策略的协同优化。",
    "contactIntro": "欢迎交流学习型索引、相似性检索与数据管理相关问题。",
    "copyEmail": "复制邮箱",
    "updated": "更新于 2026 年 10 月",
    "backTop": "返回顶部",
    "copyCitation": "复制引用",
    "close": "关闭",
    "closeAria": "关闭引用",
    "copiedEmail": "邮箱已复制",
    "copiedCitation": "BibTeX 已复制",
    "copyFailed": "请选中并复制内容",
    "publishedTitle": "已发表论文",
    "acceptedTitle": "已录用论文",
    "submittedTitle": "在投论文",
    "patentsTitle": "授权发明专利",
    "patentsIntro": "以下 2 项为已授权的中国发明专利，列出申请号及相关日期。",
    "pdfLink": "作者版 PDF",
    "copyEntry": "复制条目",
    "copiedEntry": "条目已复制"
  },
  "en": {
    "skip": "Skip to content",
    "welcome": "Welcome to Yaqi Wang’s Homepage",
    "name": "Yaqi Wang / 王雅琪",
    "role": "Ph.D. student",
    "university": "Northeastern University, China",
    "focusLabel": "Research: ",
    "focus": "Data management, Learned indexes, and similarity search in metric spaces",
    "emailLabel": "Email: ",
    "navigation": "Site Navigator: ",
    "bioTitle": "Bio",
    "newsTitle": "Recent Updates",
    "researchTitle": "Research Interests",
    "papersTitle": "Publications",
    "ongoingTitle": "Current Research",
    "contactTitle": "Contact",
    "bio1": "I am a <strong>Ph.D. student at Northeastern University, China</strong>, where I started my doctoral studies in 2024. My research focuses on <strong>learned indexes and similarity search in metric spaces</strong>. I explore how learning models can be integrated with traditional index structures to improve retrieval efficiency while reducing storage and maintenance costs.",
    "bio2": "My work spans index construction and dynamic updates for one-dimensional ordered data, as well as similarity search in general metric spaces. I am interested in the relationships among data distributions, query workloads, and index organization. My current interests include query-aware index optimization, non-overlapping node organization, and indexing in multi-metric spaces.",
    "news1": "Our paper <a href=\"https://doi.org/10.1145/3786665\" target=\"_blank\" rel=\"noopener noreferrer\">LM-Tree: A Hybrid Learned Index for Similarity Search in Metric Spaces</a> was published in <em>Proceedings of the ACM on Management of Data</em> and is listed among the accepted papers for SIGMOD 2026.",
    "news2": "Our paper <a href=\"https://doi.org/10.1007/978-981-95-5722-6_4\" target=\"_blank\" rel=\"noopener noreferrer\">QUEST: Query-Aware Learned Metric Index for Similarity Search</a> appeared in the APWeb-WAIM 2025 proceedings, published in 2026.",
    "news3": "Our paper <a href=\"https://doi.org/10.13328/j.cnki.jos.007220\" target=\"_blank\" rel=\"noopener noreferrer\">DRAMA: Update-distribution-aware Learned Index</a> was published in <em>Journal of Software</em>, 36(8), 2025.",
    "researchIntro": "I study how data distributions and query workloads can inform efficient, compact, and maintainable index structures.",
    "research1": "<strong>Learned indexes:</strong> Integrating lightweight learning models with index structures, with a focus on data-aware construction and efficient maintenance under dynamic updates.",
    "research2": "<strong>Similarity search in metric spaces:</strong> Combining tree structures, local pivots, and learning models to improve pruning and reduce node accesses and distance computations.",
    "research3": "<strong>Query-aware data management:</strong> Incorporating query workloads into index construction, node organization, and pivot configuration to reduce query costs.",
    "paperNote": "7 published papers, 1 accepted paper, and 1 manuscript under review. My name is shown in bold.",
    "paperLink": "Paper",
    "lmSummary": "Combining M-Tree, local pivots, and lightweight learning models for adaptive metric-space similarity indexing.",
    "questSummary": "Using query workloads to guide data clustering, pivot-based transformation, and learned indexing for similarity search.",
    "dramaAuthors": "Na Guo, <strong>Yaqi Wang</strong>, Haonan Jiang, Yu Gu, Xiufeng Xia.",
    "dramaTitle": "DRAMA: Update-distribution-aware Learned Index.",
    "dramaVenue": "<em>Journal of Software</em>, 36(8): 3769–3786, 2025. (In Chinese)",
    "dramaSummary": "Studying update-distribution-aware learned index construction and maintenance for changing data.",
    "ongoingIntro": "My doctoral research on <strong>learned indexing in metric spaces</strong> explores the following topics:",
    "ongoing1": "<strong>LM⁺-Tree:</strong> Incorporating query workloads into the construction, querying, and maintenance of hybrid learned metric indexes.",
    "ongoing2": "<strong>Non-overlapping node organization:</strong> Studying object coverage and node overlap to reduce unnecessary accesses during query processing.",
    "ongoing3": "<strong>Multi-metric indexing:</strong> Exploring the joint design of index organization and retrieval strategies under multiple distance relationships.",
    "contactIntro": "I welcome discussions on learned indexes, similarity search, and data management.",
    "copyEmail": "Copy email",
    "updated": "Last updated: October 2026",
    "backTop": "Back to top",
    "copyCitation": "Copy citation",
    "close": "Close",
    "closeAria": "Close citation",
    "copiedEmail": "Email address copied",
    "copiedCitation": "BibTeX copied",
    "copyFailed": "Please select and copy the text",
    "publishedTitle": "Published Papers",
    "acceptedTitle": "Accepted Paper",
    "submittedTitle": "Manuscript Under Review",
    "patentsTitle": "Granted Invention Patents",
    "patentsIntro": "Two granted Chinese invention patents, listed with their application numbers and associated dates.",
    "pdfLink": "Author PDF",
    "copyEntry": "Copy entry",
    "copiedEntry": "Entry copied"
  }
};

const citations = {
  "lmtree": "@article{Wang2026LMTree,\n  author = {Wang, Yaqi and Wang, Bin and Zhu, Rui and Sun, Wenli and Yang, Xiaochun},\n  title = {{LM-Tree}: A Hybrid Learned Index for Similarity Search in Metric Spaces},\n  journal = {Proceedings of the ACM on Management of Data},\n  year = {2026},\n  volume = {4},\n  number = {1},\n  articleno = {51},\n  numpages = {25},\n  doi = {10.1145/3786665}\n}",
  "quest": "@inproceedings{Liu2026QUEST,\n  author = {Liu, Hongzhao and Wang, Yaqi and Wang, Bin and Yang, Xiaochun and Chu, Boce and Zhu, Jin},\n  title = {{QUEST}: Query-Aware Learned Metric Index for Similarity Search},\n  booktitle = {Web and Big Data: APWeb-WAIM 2025},\n  series = {Lecture Notes in Computer Science},\n  volume = {16116},\n  pages = {50--65},\n  publisher = {Springer},\n  year = {2026},\n  doi = {10.1007/978-981-95-5722-6_4}\n}",
  "drama": "@article{Guo2025DRAMA,\n  author = {Guo, Na and Wang, Yaqi and Jiang, Haonan and Gu, Yu and Xia, Xiufeng},\n  title = {{DRAMA}: Update-distribution-aware Learned Index},\n  journal = {Journal of Software},\n  volume = {36},\n  number = {8},\n  pages = {3769--3786},\n  year = {2025},\n  language = {Chinese},\n  doi = {10.13328/j.cnki.jos.007220}\n}",
  "chameleon": "@inproceedings{Guo2024Chameleon,\n  author = {Guo, Na and Wang, Yaqi and Sun, Wenli and Gu, Yu and Qi, Jianzhong and Liu, Zhenghao and Xia, Xiufeng and Yu, Ge},\n  title = {Chameleon: Towards Update-Efficient Learned Indexing for Locally Skewed Data},\n  booktitle = {2024 IEEE 40th International Conference on Data Engineering (ICDE)},\n  year = {2024},\n  pages = {4316--4328},\n  doi = {10.1109/ICDE60146.2024.00329}\n}",
  "tali": "@article{Guo2022TALI,\n  author = {Guo, Na and Wang, Yaqi and Jiang, Haonan and Xia, Xiufeng and Gu, Yu},\n  title = {TALI: An Update-Distribution-Aware Learned Index for Social Media Data},\n  journal = {Mathematics},\n  year = {2022},\n  volume = {10},\n  number = {23},\n  pages = {4507},\n  doi = {10.3390/math10234507}\n}",
  "highfreq": "@article{Guo2024HighFrequencyIndex,\n  author = {郭娜 and 孙文礼 and 王雅琪 and 蔡飞 and 姜皓南 and 夏秀峰},\n  title = {一种满足动态数据高频读写的高性能学习型索引},\n  journal = {小型微型计算机系统},\n  year = {2024},\n  language = {Chinese}\n}",
  "magic": "@inproceedings{Guo2024MAGIC,\n  author = {Guo, Na and Wang, Yaqi and Xia, Xiufeng},\n  title = {MAGIC: Memory Advanced General Index Compression for Learned Indexes},\n  booktitle = {2024 Sixth International Conference on Next Generation Data-driven Networks (NGDN)},\n  year = {2024},\n  pages = {370--374},\n  doi = {10.1109/NGDN61651.2024.10744056}\n}",
  "core": "@article{Dong2026QueryRefinement,\n  author = {Dong, Z. F. and Zong, C. Y. and Yang, X. C. and Wang, B. and Chu, B. C. and Wang, Y. Q. and Zhu, H. J.},\n  title = {Query Refinement for Radius-Bounded Core Queries},\n  journal = {IEEE Transactions on Knowledge and Data Engineering},\n  year = {2026},\n  note = {Accepted; to appear},\n  doi = {10.1109/TKDE.2026.3702049}\n}"
};

function escapeHTML(value){return String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));}
function boldAuthor(value){return escapeHTML(value).replaceAll('Yaqi Wang','<strong>Yaqi Wang</strong>').replaceAll('王雅琪','<strong>王雅琪</strong>').replaceAll('Wang YQ','<strong>Wang YQ</strong>');}
function renderWorks(lang){
  document.querySelectorAll('[data-works]').forEach(list=>{
    list.innerHTML=academicWorks.filter(w=>w.group===list.dataset.works).map(work=>{
      const title=lang==='en'?(work.enTitle||work.title):work.title;
      const authors=lang==='en'?(work.enAuthors||work.authors):work.authors;
      const linkedTitle=work.url?`<a class="paper-title" href="${escapeHTML(work.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(title)}</a>`:`<span class="paper-title">${escapeHTML(title)}</span>`;
      const actions=[];
      if(work.url)actions.push(`[<a href="${escapeHTML(work.url)}" target="_blank" rel="noopener noreferrer">${translations[lang].paperLink}</a>]`);
      if(work.pdf)actions.push(`[<a href="${escapeHTML(work.pdf)}" target="_blank" rel="noopener noreferrer">${translations[lang].pdfLink}</a>]`);
      if(citations[work.key])actions.push(`[<button type="button" data-cite="${work.key}" aria-label="${escapeHTML(title.split(':')[0])} BibTeX">BibTeX</button>]`);
      if(work.group==='patents')actions.push(`[<button type="button" data-copy-work="${work.key}">${translations[lang].copyEntry}</button>]`);
      return `<li id="work-${work.key}" value="${work.n}"><p>${boldAuthor(authors)}<br>${linkedTitle}<br><em>${escapeHTML(work.venue[lang])}</em><br><span class="work-labels ${work.group}">${work.labels[lang].map(escapeHTML).join(' · ')}</span>${actions.length?'<br><span class="paper-actions">'+actions.join(' ')+'</span>':''}</p></li>`;
    }).join('');
  });
}

let language = 'zh';
let toastTimer;
const languageButton = document.getElementById('language');
const dialog = document.getElementById('citation-dialog');
function setLanguage(next) {
  language = next;
  document.documentElement.lang = next === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n],[data-i18n-html]').forEach(element => {
    const key = element.dataset.i18n || element.dataset.i18nHtml;
    const value = translations[next][key];
    if (value === undefined) return;
    if (element.dataset.i18nHtml) element.innerHTML = value;
    else element.textContent = value;
  });
  renderWorks(next);
  languageButton.textContent = next === 'zh' ? 'English' : '中文';
  languageButton.setAttribute('aria-label',next === 'zh' ? 'Switch to English' : '切换为中文');
  document.getElementById('close-citation').setAttribute('aria-label',translations[next].closeAria);
  document.querySelector('meta[name=description]').content = next === 'zh' ? '王雅琪（Yaqi Wang），东北大学博士研究生。研究方向为学习型索引、度量空间相似性检索和查询感知数据管理。' : 'Yaqi Wang, Ph.D. student at Northeastern University, China. Learned indexes, similarity search in metric spaces, and query-aware data management.';
  try { localStorage.setItem('yw-language',next); } catch (_) {}
}
languageButton.addEventListener('click',()=>setLanguage(language === 'zh' ? 'en' : 'zh'));
try {setLanguage(localStorage.getItem('yw-language') === 'en' ? 'en' : 'zh');}catch(_){setLanguage('zh');}
document.addEventListener('click',event=>{
  const cite=event.target.closest('[data-cite]');
  if(cite){document.getElementById('citation-text').textContent=citations[cite.dataset.cite];document.getElementById('citation-heading').textContent=cite.getAttribute('aria-label');dialog.showModal();}
  const copy=event.target.closest('[data-copy-work]');
  if(copy){const work=academicWorks.find(w=>w.key===copy.dataset.copyWork);copyText([work.authors,work.title,work.venue[language],work.labels[language].join(' · ')].join('\n'),'copiedEntry');}
});
for(const id of ['close-citation','done-citation']) document.getElementById(id).addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target === dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
function showToast(message){
  const toast=document.getElementById('toast');clearTimeout(toastTimer);toast.textContent=message;toast.classList.add('visible');toastTimer=setTimeout(()=>toast.classList.remove('visible'),2600);
}
async function copyText(value,successKey){
  try{await navigator.clipboard.writeText(value);showToast(translations[language][successKey]);}
  catch(_){const textarea=document.createElement('textarea');textarea.value=value;textarea.style.cssText='position:fixed;opacity:0;pointer-events:none';(dialog.open?dialog:document.body).appendChild(textarea);textarea.select();let copied=false;try{copied=document.execCommand('copy');}catch(_){}textarea.remove();showToast(translations[language][copied?successKey:'copyFailed']);}
}
document.getElementById('copy-email').addEventListener('click',()=>copyText('wangyq@stumail.neu.edu.cn','copiedEmail'));
document.getElementById('copy-citation').addEventListener('click',()=>copyText(document.getElementById('citation-text').textContent,'copiedCitation'));
