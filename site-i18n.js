(() => {
  const STORAGE_KEY = "lyralab_lang";
  const SUPPORTED = ["zh", "en", "ja"];
  const page = location.pathname.split("/").pop() || "index.html";

  if (page === "index.html" || page.startsWith("sample_layout_")) {
    return;
  }

  const COMMON = {
    zh: {
      nav: {
        about: "关于我",
        projects: "项目",
        articles: "文章",
        media: "自媒体-旅游/Vlog"
      },
      logoSubtitle: "莱拉的实验田",
      homeLabel: "LyraLab 首页",
      footerLead: "如需讨论项目、合作、申请相关问题，或只是打个招呼，可以使用下面任一联系方式。",
      email: "Email: hj160@georgetown.edu",
      message: "留言板",
      xiaohongshu: "小红书",
      disclaimer1:
        "<strong>免责声明</strong>：本网站部分内容可能由 AI 基于公开信息自动检索、整理、摘要或辅助生成，仅供研究、作品展示与一般参考，不代表本人事实判断、法律意见或政治立场。",
      disclaimer2:
        "本网站项目、文字、图片、截图及相关资料受知识产权与隐私权益保护。未经本人事先许可，不得转载、改编、传播、用于模型训练或任何商业用途；如需引用或非商业使用，请先联系本人并注明出处，本站个人信息与图片亦不得擅自使用。"
    },
    en: {
      nav: {
        about: "About",
        projects: "Projects",
        articles: "Writing",
        media: "Media / Travel / Vlog"
      },
      logoSubtitle: "Lyra's Lab",
      homeLabel: "LyraLab Home",
      footerLead:
        "For project discussions, collaboration, application questions, or a quick hello, use any of the contact links below.",
      email: "Email: hj160@georgetown.edu",
      message: "Message Board",
      xiaohongshu: "Xiaohongshu",
      disclaimer1:
        "<strong>Disclaimer</strong>: Some content on this site may be collected, organized, summarized, or assisted by AI based on publicly available information and is provided for research, portfolio, and general reference only. It does not represent my factual conclusions, legal advice, or political position.",
      disclaimer2:
        "The projects, text, images, screenshots, and related materials on this site are protected by intellectual property and privacy rights. No copying, reposting, adaptation, redistribution, model training, or commercial use is permitted without my prior permission. Please contact me first for citation or non-commercial use, and do not use personal information or images from this site without authorization."
    },
    ja: {
      nav: {
        about: "私について",
        projects: "プロジェクト",
        articles: "文章",
        media: "メディア・旅行 / Vlog"
      },
      logoSubtitle: "ライラの実験室",
      homeLabel: "LyraLab ホーム",
      footerLead:
        "プロジェクトの相談、コラボレーション、出願に関する質問、または簡単なご連絡は、以下の連絡先をご利用ください。",
      email: "Email: hj160@georgetown.edu",
      message: "メッセージボード",
      xiaohongshu: "小红书",
      disclaimer1:
        "<strong>免責事項</strong>：本サイトの一部内容は、公開情報をもとに AI が自動収集・整理・要約・生成補助したものであり、研究、作品展示、一般的な参考のために提供されています。私個人の事実認定、法的助言、政治的立場を示すものではありません。",
      disclaimer2:
        "本サイトのプロジェクト、文章、画像、スクリーンショット、および関連資料は、知的財産権とプライバシー権によって保護されています。事前の許可なく、転載、改変、再配布、モデル学習への利用、商用利用を行わないでください。引用または非営利利用を希望する場合は、事前にご連絡のうえ、出典を明記してください。個人情報や画像の無断利用も禁止します。"
    }
  };

  const PAGES = {};

  Object.assign(PAGES, {
    "about.html": {
      title: {
        zh: "Lyra Lab - 关于我",
        en: "Lyra Lab - About",
        ja: "Lyra Lab - 私について"
      },
      single: {
        ".about-page-title": {
          zh: "关于我",
          en: "About",
          ja: "私について"
        },
        ".about-page-subtitle": {
          zh: "我把法律研究、政策追踪与信息表达做成可执行项目、结构化写作和可展示成果。",
          en: "I turn legal research, policy tracking, and information expression into executable projects, structured writing, and work people can quickly understand.",
          ja: "法律リサーチ、政策トラッキング、情報表現を、実行可能なプロジェクト、構造化された文章、理解しやすい成果物へ変えています。"
        },
        ".about-kicker": {
          zh: "About Lyra",
          en: "About Lyra",
          ja: "About Lyra"
        },
        ".about-title": {
          zh: "把复杂议题拆成可执行结构",
          en: "Turning complex topics into executable structure",
          ja: "複雑なテーマを実行可能な構造へ整理する"
        },
        ".about-p1": {
          zh: "你好，我是 Lyra。我的工作重点是把复杂议题拆成可执行结构，包括法律研究、政策追踪与信息可视化表达。这个网站会持续更新我的项目、写作与工具方法。",
          en: "Hi, I'm Lyra. I focus on turning complex topics into executable structures, including legal research, policy tracking, and visual storytelling. This site keeps a running record of my projects, writing, and tools.",
          ja: "こんにちは、Lyra です。法律リサーチ、政策トラッキング、可視化表現を含む複雑なテーマを、実行可能な構造へ整理することを主な仕事にしています。このサイトでは、プロジェクト、執筆、ツールの更新を継続的にまとめています。"
        },
        ".about-p2": {
          zh: "如果你希望了解我的背景、合作方向或过往成果，可以从这里开始。我更关注能被验证、能被复用、也能被别人快速理解的成果表达方式。",
          en: "If you want a quick sense of my background, collaboration focus, or prior work, this page is the right starting point. I care most about outputs that can be checked, reused, and understood quickly by other people.",
          ja: "経歴、協業の方向性、これまでの成果を手早く把握したい場合は、このページから見るのが最も分かりやすいです。私が重視しているのは、検証でき、再利用でき、他の人にも素早く理解される成果の形です。"
        },
        ".about-side-title": {
          zh: "Quick Profile",
          en: "Quick Profile",
          ja: "Quick Profile"
        }
      },
      lists: {
        ".about-list li": {
          zh: [
            "定位：法律 × 研究 × 数据表达",
            "方向：法律相关项目、效率系统、内容写作",
            "合作：研究协作、内容共创、咨询支持"
          ],
          en: [
            "Positioning: Law x Research x Data Expression",
            "Focus: Legal projects, productivity systems, and writing",
            "Collaboration: Research, content co-creation, and consulting support"
          ],
          ja: [
            "領域：法律 x リサーチ x データ表現",
            "テーマ：法律関連プロジェクト、生産性システム、執筆",
            "協業：リサーチ、共同制作、コンサルティング支援"
          ]
        },
        ".about-projects": {
          zh: ["查看项目"],
          en: ["View Projects"],
          ja: ["プロジェクトを見る"]
        },
        ".about-writing": {
          zh: ["查看文章"],
          en: ["View Writing"],
          ja: ["文章を見る"]
        },
        ".about-message": {
          zh: ["去留言板"],
          en: ["Go to Message Board"],
          ja: ["メッセージボードへ"]
        },
        ".focus-card h2": {
          zh: ["法律与政策研究", "工作流与工具", "写作与展示"],
          en: ["Legal and Policy Research", "Workflows and Tools", "Writing and Presentation"],
          ja: ["法律と政策リサーチ", "ワークフローとツール", "執筆と見せ方"]
        },
        ".focus-card p": {
          zh: [
            "把复杂规则、政策变化和行业背景整理成可以直接使用的研究框架、可视化页面和工作材料。",
            "我会把重复性的研究、阅读、整理和展示流程压缩成工具或模板，让后续工作更稳定、更容易复用。",
            "我关心的不只是内容本身，也包括如何让别人更快理解你的逻辑、证据和判断路径。"
          ],
          en: [
            "I turn complex rules, policy changes, and sector context into research frameworks, visual pages, and working materials that can be used directly.",
            "I compress repetitive research, reading, organization, and presentation work into tools or templates so the next cycle becomes more stable and reusable.",
            "I care not only about the content itself, but also about how other people can understand your logic, evidence, and decision path more quickly."
          ],
          ja: [
            "複雑なルール、政策変化、業界背景を、すぐ使えるリサーチ枠組み、可視化ページ、作業資料へ整理します。",
            "繰り返し発生するリサーチ、読書、整理、見せ方の作業を、ツールやテンプレートへ圧縮し、次の作業をより安定して再利用しやすくします。",
            "私が重視しているのは内容そのものだけでなく、他の人がロジック、証拠、判断の道筋をより速く理解できることです。"
          ]
        }
      }
    },
    "legal-projects.html": {
      title: {
        zh: "Lyra Lab - 法律相关项目",
        en: "Lyra Lab - Projects",
        ja: "Lyra Lab - プロジェクト"
      },
      single: {
        ".hero h1": {
          zh: "法律相关项目",
          en: "Projects",
          ja: "プロジェクト"
        },
        ".hero p": {
          zh: "这里是当前已上线、可直接访问的真实项目目录（持续更新）。",
          en: "A live directory of projects that are already published and directly accessible.",
          ja: "現在公開中で、実際にアクセスできるプロジェクトをまとめています。"
        },
        ".section-head h2": {
          zh: "项目目录",
          en: "Projects",
          ja: "プロジェクト一覧"
        },
        ".section-head span": {
          zh: "共 4 个真实条目",
          en: "4 live entries",
          ja: "公開中の実プロジェクト 4 件"
        }
      },
      lists: {
        ".tag": {
          zh: ["监管研究", "语音 AI", "阅读工具", "法律工具"],
          en: ["Regulation", "Speech AI", "Reader Tool", "Legal Tool"],
          ja: ["規制研究", "音声 AI", "読書ツール", "法律ツール"]
        },
        ".body h3": {
          zh: [
            "美国-伊朗交互分析看板",
            "声析 SenseVoice",
            "读得快 ReadQuicker",
            "FreeRedline"
          ],
          en: [
            "US-Iran Interactive Analysis Dashboard",
            "声析 SenseVoice",
            "读得快 ReadQuicker",
            "FreeRedline"
          ],
          ja: [
            "米国・イラン情勢インタラクティブ分析ダッシュボード",
            "声析 SenseVoice",
            "读得快 ReadQuicker",
            "FreeRedline"
          ]
        },
        ".body p": {
          zh: [
            "在伊朗发生战争的期间，用来监控政治和军事信息对于股市之类金融市场的影响。对标达里奥的《big debt》中的分析的历史时期，便于使用者进行分析。",
            "多语言语音识别与音频理解工具，覆盖转写、语种识别、情绪线索判断与声音事件检测。",
            "面向 Markdown 与长文阅读的笔记工具，支持逐句摘录、PDF OCR 与更专注的阅读模式。",
            "文档对比与 redline 生成工具，支持 Word、PDF、Excel 等文件格式，并可导出 HTML、PDF、Markdown 等结果。"
          ],
          en: [
            "Built to monitor how political and military developments during wartime in Iran affect financial markets such as equities. It is benchmarked against the historical periods analyzed in Ray Dalio's Big Debt Crises so users can compare patterns and run their own analysis.",
            "A multilingual speech and audio understanding tool covering transcription, language identification, emotion cues, and acoustic event detection.",
            "A reading and note-taking tool for Markdown and long-form materials, with sentence-level excerpts, PDF OCR, and a lower-friction reading mode.",
            "A document comparison and redline tool for Word, PDF, Excel, and more, with export to HTML, PDF, Markdown, and other formats."
          ],
          ja: [
            "イランで戦争が起きている期間に、政治・軍事情報が株式市場などの金融市場へ与える影響を追跡するための看板です。Ray Dalio の Big Debt Crises で分析される歴史局面を参照しながら、利用者が比較と分析をしやすいように設計しています。",
            "文字起こし、言語識別、感情の手がかり抽出、音響イベント検出をまとめた多言語音声理解ツールです。",
            "Markdown や長文資料向けの読書・ノートツールで、逐文抜粋、PDF OCR、集中しやすい読書モードを備えています。",
            "Word、PDF、Excel などに対応した文書比較・redline 生成ツールで、HTML、PDF、Markdown などへの出力も可能です。"
          ]
        },
        "main .chip": {
          zh: ["看板", "语音工具", "阅读工具", "GitHub 仓库"],
          en: ["Dashboard", "Speech Tool", "Reading Tool", "GitHub Repo"],
          ja: ["ダッシュボード", "音声ツール", "読書ツール", "GitHub リポジトリ"]
        },
        "main .meta .enter": {
          zh: ["点击进入 →", "详情 →", "详情 →", "查看项目 →"],
          en: ["Open →", "Details →", "Details →", "View Project →"],
          ja: ["開く →", "詳細 →", "詳細 →", "プロジェクトを見る →"]
        }
      },
      attrs: {
        ".hover-preview": {
          title: {
            zh: ["美国-伊朗交互分析看板预览"],
            en: ["US-Iran dashboard preview"],
            ja: ["米国・イラン情勢ダッシュボードのプレビュー"]
          }
        }
      }
    },
    "md-reader-project.html": {
      title: {
        zh: "Lyra Lab - 读得快 ReadQuicker",
        en: "Lyra Lab - ReadQuicker",
        ja: "Lyra Lab - ReadQuicker"
      },
      single: {
        ".hero h1": {
          zh: "读得快 ReadQuicker",
          en: "读得快 ReadQuicker",
          ja: "读得快 ReadQuicker"
        },
        ".hero p": {
          zh: "一个面向长文阅读与笔记整理的工具，适合把 Markdown、PDF 等材料拆成更易处理的阅读与摘录流程。",
          en: "A tool for long-form reading and note organization, designed to turn Markdown, PDF, and similar materials into a more manageable reading and excerpting workflow.",
          ja: "Markdown や PDF などの長文資料を、より扱いやすい読書と抜粋の流れへ変えるための読書・ノートツールです。"
        }
      },
      lists: {
        ".eyebrow": {
          zh: ["输入能力", "工作流", "阅读体验"],
          en: ["Input Formats", "Workflow", "Reading Experience"],
          ja: ["入力対応", "ワークフロー", "読書体験"]
        },
        "main .card h2": {
          zh: [
            "支持 Markdown、TXT、PDF、EPUB",
            "逐句摘录到笔记",
            "更专注的阅读模式"
          ],
          en: [
            "Supports Markdown, TXT, PDF, and EPUB",
            "Sentence-by-sentence excerpting into notes",
            "A calmer reading mode"
          ],
          ja: [
            "Markdown、TXT、PDF、EPUB に対応",
            "文ごとの抜粋からノート化へ",
            "より集中しやすい読書モード"
          ]
        },
        "main .card p": {
          zh: [
            "既能处理结构清晰的文本文件，也能结合 PDF OCR 处理扫描材料，适合混合型阅读工作流。",
            "核心交互是从正文中选句、摘录到右侧笔记区，再逐步沉淀成结构化记录，适合密集阅读和做卡片笔记。",
            "提供更大的字号、更松的行距和更低干扰的界面节奏，适合需要降低阅读摩擦、提升持续注意力的场景。"
          ],
          en: [
            "It handles both clean text files and scanned materials through PDF OCR, making it suitable for hybrid reading workflows.",
            "The core interaction is selecting sentences from the main text, clipping them into a note area, and gradually turning them into structured records.",
            "Larger type, looser spacing, and a lower-distraction interface make it better suited for sustained attention and lower-friction reading."
          ],
          ja: [
            "構造化されたテキストだけでなく、PDF OCR を通じてスキャン資料も扱えるため、混合型の読書ワークフローに向いています。",
            "本文から文を選び、右側のノート欄へ抜粋し、徐々に構造化した記録へ変えるのが中核操作です。",
            "文字を大きくし、行間を広げ、視覚ノイズを減らした設計で、読書摩擦を下げて集中を持続しやすくします。"
          ]
        },
        ".open-web": {
          zh: ["打开网页版"],
          en: ["Open Web Version"],
          ja: ["Web 版を開く"]
        },
        ".back-projects": {
          zh: ["返回项目页"],
          en: ["Back to Projects"],
          ja: ["プロジェクト一覧へ戻る"]
        },
        ".web-demo-title": {
          zh: ["网页版演示"],
          en: ["Web Demo"],
          ja: ["Web デモ"]
        },
        ".web-demo-copy": {
          zh: ["下面直接嵌入网页版，适合快速体验逐句阅读、摘录和笔记整理流程。"],
          en: ["The live web version is embedded below so people can quickly try the sentence-by-sentence reading, excerpting, and note workflow."],
          ja: ["下には Web 版をそのまま埋め込んであり、文ごとの読書・抜粋・ノート整理の流れをすぐ試せます。"]
        },
        ".web-demo__badge": {
          zh: ["点击进入网页版"],
          en: ["Click to Open Web Version"],
          ja: ["クリックして Web 版を開く"]
        },
        ".web-demo__hint": {
          zh: ["点击演示区域或上方“打开网页版”，会在新标签页中打开完整版本。"],
          en: ["Click the demo area or the button above to open the complete version in a new tab."],
          ja: ["デモ領域または上のボタンをクリックすると、完全版が新しいタブで開きます。"]
        }
      },
      attrs: {
        ".web-demo__frame": {
          title: {
            zh: ["读得快网页版演示"],
            en: ["ReadQuicker web demo"],
            ja: ["ReadQuicker Web デモ"]
          }
        },
        ".web-demo__overlay": {
          "aria-label": {
            zh: ["打开 ReadQuicker 网页版"],
            en: ["Open ReadQuicker web version"],
            ja: ["ReadQuicker の Web 版を開く"]
          }
        }
      }
    },
    "sensevoice-project.html": {
      title: {
        zh: "Lyra Lab - 声析 SenseVoice",
        en: "Lyra Lab - SenseVoice",
        ja: "Lyra Lab - SenseVoice"
      },
      single: {
        ".hero h1": {
          zh: "声析 SenseVoice",
          en: "声析 SenseVoice",
          ja: "声析 SenseVoice"
        },
        ".hero p": {
          zh: "一个面向多语言场景的语音理解工具，用来快速完成转写、语种识别、情绪线索提取和音频内容初步判断。",
          en: "A multilingual speech understanding tool for fast transcription, language identification, emotion cue extraction, and first-pass audio assessment.",
          ja: "文字起こし、言語識別、感情の手がかり抽出、音声内容の一次判断を素早く行うための多言語音声理解ツールです。"
        }
      },
      lists: {
        ".eyebrow": {
          zh: ["核心能力", "使用场景", "当前状态"],
          en: ["Core Capability", "Use Cases", "Current Status"],
          ja: ["中核能力", "利用シーン", "現在の状態"]
        },
        "main .card h2": {
          zh: [
            "语音识别与音频理解",
            "快速原型与研究辅助",
            "研究工作流中的能力组件"
          ],
          en: [
            "Speech Recognition and Audio Understanding",
            "Rapid Prototyping and Research Support",
            "A capability component inside a research workflow"
          ],
          ja: [
            "音声認識と音声理解",
            "高速な試作と研究支援",
            "研究ワークフローの能力コンポーネント"
          ]
        },
        "main .card p": {
          zh: [
            "它可以在一套流程里完成 ASR、语种识别、情绪识别和声音事件检测，适合做高频音频处理的基础层。",
            "适合研究访谈整理、会议录音转写、多语言音频浏览和轻量级语音实验，能明显降低前期处理成本。",
            "这个页面目前作为作品集展示入口使用，LyraLab 上还没有单独部署产品版，但上游仓库和文档已经公开。"
          ],
          en: [
            "It combines ASR, language identification, emotion recognition, and acoustic event detection in a single flow, which makes it a strong foundation for high-frequency audio processing.",
            "It works well for interview cleanup, meeting transcription, multilingual audio browsing, and lightweight speech experiments while lowering upfront handling cost.",
            "This page currently serves as a portfolio entry. A standalone product version is not deployed on LyraLab yet, but the upstream repository and documentation are public."
          ],
          ja: [
            "ASR、言語識別、感情認識、音響イベント検出を一つの流れにまとめており、高頻度の音声処理の土台として使いやすい構成です。",
            "研究インタビューの整理、会議録音の文字起こし、多言語音声の閲覧、軽量な音声実験に向いており、前処理コストを大きく下げられます。",
            "現在はポートフォリオ用の入口ページとして公開しており、LyraLab 上に単独製品版はまだありませんが、上流リポジトリとドキュメントは公開済みです。"
          ]
        },
        ".sensevoice-github": {
          zh: ["查看 GitHub 仓库"],
          en: ["View GitHub Repository"],
          ja: ["GitHub リポジトリを見る"]
        },
        ".sensevoice-zip": {
          zh: ["下载 ZIP 文件"],
          en: ["Download ZIP File"],
          ja: ["ZIP ファイルをダウンロード"]
        },
        ".sensevoice-back": {
          zh: ["返回项目页"],
          en: ["Back to Projects"],
          ja: ["プロジェクト一覧へ戻る"]
        },
        ".showcase-title": {
          zh: ["应用界面截图"],
          en: ["App Screenshot"],
          ja: ["アプリ画面スクリーンショット"]
        },
        ".showcase-copy": {
          zh: ["下面放的是 SenseVoice WebUI 的实际界面截图，可以直接看上传音频、语言选择和结果输出的布局。"],
          en: ["Below is a real screenshot of the SenseVoice WebUI, showing the upload area, language controls, and result output layout."],
          ja: ["下には SenseVoice WebUI の実際の画面を置いてあり、音声アップロード、言語選択、結果表示のレイアウトをそのまま確認できます。"]
        },
        ".showcase__caption": {
          zh: ["SenseVoice WebUI 截图：左侧上传 / 麦克风入口，右侧样例与结果区域。"],
          en: ["SenseVoice WebUI: upload and microphone entry on the left, examples and result area on the right."],
          ja: ["SenseVoice WebUI: 左側にアップロード / マイク入力、右側にサンプルと結果表示エリア。"]
        },
        ".showcase__note": {
          zh: ["当前 ZIP 下载入口提供的是官方仓库源码压缩包，便于直接获取代码与文档；如果后续整理出独立桌面打包版，可以再替换为安装包链接。"],
          en: ["The current ZIP entry points to the official source-code archive so people can pull the code and docs directly. If a packaged desktop build is prepared later, this link can be replaced with the installer package."],
          ja: ["現在の ZIP ダウンロード先は公式リポジトリのソースコード圧縮版です。コードと文書を直接取得しやすくするためのもので、独立したデスクトップ版を後で整理したら、ここをインストーラのリンクへ差し替えられます。"]
        }
      },
      attrs: {
        ".showcase-image": {
          alt: {
            zh: ["SenseVoice WebUI 截图"],
            en: ["SenseVoice WebUI screenshot"],
            ja: ["SenseVoice WebUI のスクリーンショット"]
          }
        }
      }
    },
    "freeredline-web-demo.html": {
      title: {
        zh: "Lyra Lab - FreeRedline 网页版",
        en: "Lyra Lab - FreeRedline Web Demo",
        ja: "Lyra Lab - FreeRedline Web Demo"
      },
      single: {
        ".hero h1": {
          zh: "FreeRedline 网页版",
          en: "FreeRedline Web Demo",
          ja: "FreeRedline Web Demo"
        },
        ".hero p": {
          zh: "这里展示 FreeRedline 的浏览器侧 redline 结果样式。完整的本地处理流程和打包版仍建议通过 ZIP 安装包使用。",
          en: "This page shows the browser-side FreeRedline output style. For the full local workflow and packaged app, the ZIP build remains the recommended path.",
          ja: "このページでは FreeRedline のブラウザ側出力スタイルを表示しています。完全なローカル処理フローとパッケージ版は ZIP 版の利用を推奨します。"
        }
      },
      lists: {
        ".eyebrow": {
          zh: ["网页预览", "GitHub", "ZIP 安装包"],
          en: ["Web Preview", "GitHub", "ZIP Package"],
          ja: ["Web Preview", "GitHub", "ZIP パッケージ"]
        },
        "main .card h2": {
          zh: ["直接打开结果页", "查看仓库与文档", "下载本地可运行版本"],
          en: ["Open the Result Page Directly", "View Repository and Docs", "Download a Local Runnable Build"],
          ja: ["結果ページを直接開く", "リポジトリとドキュメントを見る", "ローカル実行版をダウンロード"]
        },
        "main .card p": {
          zh: [
            "适合快速向别人展示 redline 输出长什么样，不需要先安装桌面环境，也不需要启动本地 Flask 服务。",
            "如果你要看安装说明、CLI 用法、依赖结构或后续版本记录，可以直接跳转到仓库主页。",
            "ZIP 版本更接近完整使用方式，适合本地文档对比、导出结果以及后续接入你自己的材料处理流程。"
          ],
          en: [
            "This is useful when you want to show the redline output format quickly without installing the desktop environment or starting a local Flask server.",
            "Go to the repository if you want installation notes, CLI usage, dependency structure, or version history.",
            "The ZIP package is closer to the full usage path and works better for local comparisons, export flows, and your own document-processing pipeline."
          ],
          ja: [
            "デスクトップ環境のインストールやローカル Flask サービスの起動なしで、redline 出力の見た目をすぐ共有したい場合に向いています。",
            "インストール手順、CLI の使い方、依存関係、今後のバージョン記録を確認したい場合はリポジトリへ進んでください。",
            "ZIP 版はより完全な利用形態に近く、ローカル比較、結果の書き出し、自分の資料処理フローへの接続に向いています。"
          ]
        },
        ".actions-row .cta": {
          zh: ["下载 ZIP 安装包", "查看 GitHub 仓库", "返回项目页"],
          en: ["Download ZIP Package", "View GitHub Repository", "Back to Projects"],
          ja: ["ZIP パッケージをダウンロード", "GitHub リポジトリを見る", "プロジェクト一覧へ戻る"]
        },
        ".demo-top h2": {
          zh: ["Git-Style Diff 示例"],
          en: ["Git-Style Diff Sample"],
          ja: ["Git-Style Diff サンプル"]
        },
        ".demo-top p": {
          zh: ["这一页展示的是公开可访问的输出预览，用于快速理解 FreeRedline 的结果版式。"],
          en: ["This page exposes a public output preview so the FreeRedline result layout can be understood quickly."],
          ja: ["このページは公開可能な出力プレビューを表示し、FreeRedline の結果レイアウトを素早く把握できるようにしています。"]
        },
        ".demo-badge": {
          zh: ["结果预览"],
          en: ["Output Preview"],
          ja: ["Output Preview"]
        },
        ".meta-note": {
          zh: ["示例统计：Lines +0 / -0 / ~1"],
          en: ["Sample stats: Lines +0 / -0 / ~1"],
          ja: ["サンプル統計: Lines +0 / -0 / ~1"]
        }
      }
    }
  });

  Object.assign(PAGES, {
    "legal-article-domain-launch.html": {
      title: {
        zh: "Lyra Lab - lyralab.app 上线与域名验证实操记录",
        en: "Lyra Lab - Launching lyralab.app and Verifying the Domain",
        ja: "Lyra Lab - lyralab.app 公開とドメイン検証メモ"
      },
      lists: {
        ".back": {
          zh: ["← 返回法律相关文章目录"],
          en: ["← Back to Legal Writing"],
          ja: ["← 法律系記事一覧へ戻る"]
        },
        "main h1": {
          zh: ["lyralab.app 上线与域名验证实操记录"],
          en: ["Launching lyralab.app and Verifying the Domain: A Practical Log"],
          ja: ["lyralab.app 公開とドメイン検証の実務ログ"]
        },
        ".meta": {
          zh: ["2026-03-06 · 部署记录"],
          en: ["2026-03-06 · Deployment Log"],
          ja: ["2026-03-06 · デプロイログ"]
        },
        "main h2": {
          zh: ["关键步骤", "排障结论", "当前状态"],
          en: ["Key Steps", "Debugging Conclusion", "Current Status"],
          ja: ["主要ステップ", "調整結果", "現在の状態"]
        }
      }
    },
    "legal-article-structure-workflow.html": {
      title: {
        zh: "Lyra Lab - 法律研究作品页结构",
        en: "Lyra Lab - Structuring Legal Research Work Pages",
        ja: "Lyra Lab - 法律研究ページ構造"
      },
      lists: {
        ".back": {
          zh: ["← 返回法律相关文章目录"],
          en: ["← Back to Legal Writing"],
          ja: ["← 法律系記事一覧へ戻る"]
        },
        "main h1": {
          zh: ["法律研究作品页结构：从项目到文章的目录化组织"],
          en: ["Structuring Legal Research Work Pages: From Projects to Writing"],
          ja: ["法律研究ワークページの構造：プロジェクトから文章までの整理方法"]
        },
        ".meta": {
          zh: ["2026-03-06 · 写作框架"],
          en: ["2026-03-06 · Writing Framework"],
          ja: ["2026-03-06 · 執筆フレーム"]
        },
        "main h2": {
          zh: ["三层结构", "65/35 布局的作用", "维护策略"],
          en: ["Three-layer Structure", "Why the 65/35 Layout Works", "Maintenance Strategy"],
          ja: ["三層構造", "65/35 レイアウトが効く理由", "保守戦略"]
        }
      }
    },
    "legal-article-us-iran-dashboard-notes.html": {
      title: {
        zh: "Lyra Lab - 美国-伊朗交互分析看板",
        en: "Lyra Lab - US-Iran Interactive Analysis Dashboard Notes",
        ja: "Lyra Lab - 米国・イラン分析ダッシュボードのノート"
      },
      lists: {
        ".back": {
          zh: ["← 返回法律相关文章目录"],
          en: ["← Back to Legal Writing"],
          ja: ["← 法律系記事一覧へ戻る"]
        },
        "main h1": {
          zh: ["美国-伊朗交互分析看板：页面结构与使用说明"],
          en: ["US-Iran Interactive Analysis Dashboard: Structure and Usage Notes"],
          ja: ["米国・イラン情勢インタラクティブ分析ダッシュボード：構造と利用メモ"]
        },
        ".meta": {
          zh: ["2026-03-06 · 项目说明"],
          en: ["2026-03-06 · Project Notes"],
          ja: ["2026-03-06 · プロジェクトノート"]
        },
        "main h2": {
          zh: ["页面关系", "为什么这样做", "后续扩展建议"],
          en: ["Page Relationship", "Why It Was Built This Way", "Suggested Next Extensions"],
          ja: ["ページ構成", "この形にした理由", "今後の拡張案"]
        }
      }
    },
    "other-articles.html": {
      title: {
        zh: "Lyra Lab - 文章（其他）",
        en: "Lyra Lab - Writing (Other Topics)",
        ja: "Lyra Lab - 文章（その他）"
      },
      single: {
        ".hero h1": {
          zh: "文章 · 其他",
          en: "Writing · Other Topics",
          ja: "文章・その他"
        },
        ".hero p": {
          zh: "这里放非法律主题的写作，比如学习方法、工作流、阅读笔记和工具实践；其中读书笔记会持续同步到我的小红书主页。",
          en: "This section covers non-legal writing: learning methods, workflows, reading notes, and tool practice.",
          ja: "ここには法律以外の文章を置いています。学習方法、ワークフロー、読書ノート、ツール実践などを扱います。"
        },
        ".side h3": {
          zh: "文章标签",
          en: "Tags",
          ja: "タグ"
        }
      },
      lists: {
        ".article a": {
          zh: ["前往小红书查看 →", "阅读全文 →", "阅读全文 →", "阅读全文 →"],
          en: ["Open on Xiaohongshu →", "Read Article →", "Read Article →", "Read Article →"],
          ja: ["小红书で見る →", "記事を読む →", "記事を読む →", "記事を読む →"]
        },
        ".chip": {
          zh: ["工作流", "效率工具", "阅读方法", "读书笔记", "小红书", "知识管理", "项目复盘"],
          en: ["Workflow", "Productivity Tools", "Reading Methods", "Reading Notes", "Xiaohongshu", "Knowledge Management", "Project Review"],
          ja: ["ワークフロー", "効率化ツール", "読書法", "読書ノート", "小红书", "知識管理", "プロジェクト振り返り"]
        }
      }
    },
    "life-travel.html": {
      title: {
        zh: "Lyra Lab - 生活，旅游",
        en: "Lyra Lab - Life & Travel",
        ja: "Lyra Lab - 生活と旅行"
      },
      single: {
        ".hero h1": {
          zh: "生活，旅游",
          en: "Life & Travel",
          ja: "生活と旅行"
        },
        ".hero p": {
          zh: "这里放生活感受、城市观察、旅行记录，以及那些不完全属于“项目”或“工作流”的个人片段。",
          en: "This page holds life notes, city observations, travel records, and more personal fragments that do not fully belong to “projects” or “workflow.”",
          ja: "ここには生活の感触、都市観察、旅の記録、そして“プロジェクト”や“ワークフロー”だけでは収まらない個人的な断片を置いています。"
        },
        ".side h3": {
          zh: "页面标签",
          en: "Tags",
          ja: "タグ"
        }
      },
      lists: {
        ".article a": {
          zh: ["阅读全文 →", "阅读全文 →", "阅读全文 →"],
          en: ["Read Article →", "Read Article →", "Read Article →"],
          ja: ["記事を読む →", "記事を読む →", "記事を読む →"]
        },
        ".chip": {
          zh: ["生活", "旅行", "城市观察", "日常记录", "慢速生活"],
          en: ["Life", "Travel", "City Notes", "Daily Notes", "Slow Living"],
          ja: ["生活", "旅行", "都市観察", "日常記録", "スローリビング"]
        }
      }
    },
    "vlog.html": {
      title: {
        zh: "Lyra Lab - Vlog",
        en: "Lyra Lab - Vlog",
        ja: "Lyra Lab - Vlog"
      },
      single: {
        ".hero p": {
          zh: "这里放视频日志、生活片段、旅行影像，以及更偏现场感和过程感的内容。",
          en: "This page is for video journals, fragments of daily life, travel footage, and material with more immediacy and process in it.",
          ja: "ここには動画日誌、生活の断片、旅の映像、そして現場感や過程の質感が強い内容を置いています。"
        },
        ".side h3": {
          zh: "页面标签",
          en: "Tags",
          ja: "タグ"
        }
      },
      lists: {
        ".article a": {
          zh: ["视频入口 →", "视频入口 →", "视频入口 →"],
          en: ["Open Video →", "Open Video →", "Open Video →"],
          ja: ["動画を見る →", "動画を見る →", "動画を見る →"]
        },
        ".chip": {
          zh: ["Vlog", "日常", "旅行影像", "幕后记录", "生活片段"],
          en: ["Vlog", "Daily Life", "Travel Video", "Behind the Scenes", "Life Fragments"],
          ja: ["Vlog", "日常", "旅の映像", "舞台裏", "生活の断片"]
        }
      }
    },
    "games-projects.html": {
      title: {
        zh: "Lyra Lab - 项目 · 游戏",
        en: "Lyra Lab - Game Projects",
        ja: "Lyra Lab - ゲームプロジェクト"
      },
      single: {
        ".hero h1": {
          zh: "项目 · 游戏",
          en: "Projects · Games",
          ja: "プロジェクト・ゲーム"
        }
      },
      lists: {
        ".tag": {
          zh: ["策略工具", "时间线", "分析", "下一个位置"],
          en: ["Strategy Tool", "Timeline", "Analysis", "Next Slot"],
          ja: ["戦略ツール", "タイムライン", "分析", "次の枠"]
        },
        ".body h3": {
          zh: [
            "Age of Empires IV 策略模拟器",
            "AoE4 时间线模拟器",
            "AoE4 最优策略分析",
            "下一个游戏项目入口"
          ],
          en: [
            "Age of Empires IV Strategy Simulator",
            "AoE4 Timeline Simulator",
            "AoE4 Best Strategy Analysis",
            "Next Game Project Slot"
          ],
          ja: [
            "Age of Empires IV 戦略シミュレーター",
            "AoE4 タイムラインシミュレーター",
            "AoE4 最適戦略分析",
            "次のゲームプロジェクト枠"
          ]
        },
        "main .meta > span:last-child": {
          zh: ["打开 →", "打开 →", "打开 →", "待接入"],
          en: ["Open →", "Open →", "Open →", "Reserved"],
          ja: ["開く →", "開く →", "開く →", "準備中"]
        }
      }
    },
    "us-iran-dashboard.html": {
      title: {
        zh: "Lyra Lab - 美国-伊朗交互分析看板",
        en: "Lyra Lab - US-Iran Interactive Analysis Dashboard",
        ja: "Lyra Lab - 米国・イラン情勢インタラクティブ分析ダッシュボード"
      },
      attrs: {
        ".dashboard-full": {
          title: {
            zh: ["美国-伊朗交互分析看板"],
            en: ["US-Iran Interactive Analysis Dashboard"],
            ja: ["米国・イラン情勢インタラクティブ分析ダッシュボード"]
          }
        }
      }
    }
  });

  Object.assign(PAGES, {
    "legal-projects.html": {
      title: {
        zh: "Lyra Lab - 项目",
        en: "Lyra Lab - Projects",
        ja: "Lyra Lab - プロジェクト"
      },
      single: {
        ".hero h1": {
          zh: "项目",
          en: "Projects",
          ja: "プロジェクト"
        },
        ".hero p": {
          zh: "这里按法律、金融、工作效率和游戏四个板块整理当前项目。",
          en: "Projects are organized here into four groups: Legal, Finance, Productivity, and Games.",
          ja: "ここでは現在のプロジェクトを、法務・金融・生産性・ゲームの4つに分けて整理しています。"
        },
        ".project-summary h2": {
          zh: "项目总览",
          en: "Project Overview",
          ja: "プロジェクト一覧"
        },
        ".project-summary span": {
          zh: "4 个板块 · 5 个公开入口 + 1 个内测工具",
          en: "4 categories · 5 public entries + 1 private beta tool",
          ja: "4カテゴリ・公開中5件 + 内測ツール1件"
        },
        ".group-legal h2": {
          zh: "法律相关",
          en: "Legal",
          ja: "法務"
        },
        ".group-legal span": {
          zh: "1 个公开项目 + 1 个内测工具",
          en: "1 public project + 1 private beta tool",
          ja: "公開中1件 + 内測ツール1件"
        },
        ".group-finance h2": {
          zh: "金融相关",
          en: "Finance",
          ja: "金融"
        },
        ".group-finance span": {
          zh: "1 个项目",
          en: "1 project",
          ja: "1件のプロジェクト"
        },
        ".group-productivity h2": {
          zh: "工作效率",
          en: "Productivity",
          ja: "生産性"
        },
        ".group-productivity span": {
          zh: "2 个项目",
          en: "2 projects",
          ja: "2件のプロジェクト"
        },
        ".group-games h2": {
          zh: "游戏",
          en: "Games",
          ja: "ゲーム"
        },
        ".group-games span": {
          zh: "1 个项目",
          en: "1 project",
          ja: "1件のプロジェクト"
        },
        ".card-redline .tag": {
          zh: "法律工具",
          en: "Legal Tool",
          ja: "法務ツール"
        },
        ".card-redaction .tag": {
          zh: "法律信息脱敏工具",
          en: "Legal Information Redaction Tool",
          ja: "法務情報脱敏ツール"
        },
        ".card-iran .tag": {
          zh: "宏观看板",
          en: "Macro Dashboard",
          ja: "マクロダッシュボード"
        },
        ".card-reader .tag": {
          zh: "阅读工具",
          en: "Reader Tool",
          ja: "読書ツール"
        },
        ".card-sensevoice .tag": {
          zh: "语音 AI",
          en: "Speech AI",
          ja: "音声AI"
        },
        ".card-aoe .tag": {
          zh: "策略游戏",
          en: "Strategy Game",
          ja: "ストラテジーゲーム"
        },
        ".card-redline .body h3": {
          zh: "FreeRedline",
          en: "FreeRedline",
          ja: "FreeRedline"
        },
        ".card-redaction .body h3": {
          zh: "法律信息脱敏工具（内测）",
          en: "Legal Information Redaction Tool (Private Beta)",
          ja: "法務情報脱敏ツール（内測）"
        },
        ".card-iran .body h3": {
          zh: "美国-伊朗交互分析看板",
          en: "US-Iran Interactive Analysis Dashboard",
          ja: "米国・イラン情勢インタラクティブ分析ダッシュボード"
        },
        ".card-reader .body h3": {
          zh: "读得快 ReadQuicker",
          en: "ReadQuicker",
          ja: "ReadQuicker"
        },
        ".card-sensevoice .body h3": {
          zh: "声析 SenseVoice",
          en: "SenseVoice",
          ja: "SenseVoice"
        },
        ".card-aoe .body h3": {
          zh: "Age of Empires IV 项目集",
          en: "Age of Empires IV Project Hub",
          ja: "Age of Empires IV プロジェクト集"
        },
        ".card-redline .body p": {
          zh: "文档对比与 redline 生成工具，支持 Word、PDF、Excel 等文件格式，并可导出 HTML、PDF、Markdown 等结果。",
          en: "A document comparison and redline tool for Word, PDF, Excel, and other formats, with export to HTML, PDF, Markdown, and more.",
          ja: "Word・PDF・Excel などに対応した文書比較 / redline 生成ツールで、HTML・PDF・Markdown などへの出力も可能です。"
        },
        ".card-redaction .body p": {
          zh: "方便法律 AI 的使用者，面向法律文件与材料整理的去标识化 / 脱敏工具，用于先清理个人与案件敏感信息，再进入分享、审阅或后续处理流程，便于进行 AI 分析的时候保护客户隐私，在极度合规的范围内使用 AI。",
          en: "A de-identification and redaction tool for legal documents and working materials. It helps legal AI users clean personal and case-sensitive information before sharing, review, or downstream processing, so AI analysis can protect client privacy within a highly compliant workflow.",
          ja: "法律 AI の利用者向けに、法律文書や作業資料を整理する前段で個人情報や案件の機微情報を除去する匿名化 / 脱敏ツールです。共有・レビュー・後続処理の前に情報を整え、厳格なコンプライアンスの範囲で AI 分析を使いながら顧客のプライバシーを守れるようにします。"
        },
        ".card-iran .body p": {
          zh: "在伊朗发生战争的期间，用来监控政治和军事信息对于股市之类金融市场的影响。对标达里奥的《big debt》中的分析的历史时期，便于使用者进行分析。",
          en: "Built to monitor how political and military developments during wartime in Iran affect financial markets such as equities. It is benchmarked against the historical periods analyzed in Ray Dalio's Big Debt Crises so users can compare patterns and run their own analysis.",
          ja: "イランで戦争が起きている期間に、政治・軍事情報が株式市場などの金融市場へ与える影響を追跡するための看板です。Ray Dalio の Big Debt Crises で分析される歴史局面を参照しながら、利用者が比較と分析をしやすいように設計しています。"
        },
        ".card-reader .body p": {
          zh: "面向 Markdown 与长文阅读的笔记工具，支持逐句摘录、PDF OCR 与更专注的阅读模式。",
          en: "A reading and note-taking tool for Markdown and long-form materials, with sentence-level excerpts, PDF OCR, and a calmer reading mode.",
          ja: "Markdown や長文資料向けの読書 / ノートツールで、逐文抜粋、PDF OCR、より集中しやすい閲読モードを備えています。"
        },
        ".card-sensevoice .body p": {
          zh: "多语言语音识别与音频理解工具，覆盖转写、语种识别、情绪线索判断与声音事件检测。",
          en: "A multilingual speech and audio understanding tool covering transcription, language identification, emotion cues, and acoustic event detection.",
          ja: "文字起こし、言語識別、感情手がかり抽出、音声イベント検知をまとめた多言語音声理解ツールです。"
        },
        ".card-aoe .body p": {
          zh: "整合策略模拟器、时间线模拟器与最优策略分析三个入口，适合做 build order 和文明路线对比。",
          en: "A hub that brings together the strategy simulator, timeline simulator, and best-strategy analysis for build-order and civilization-route comparisons.",
          ja: "戦略シミュレーター、タイムラインシミュレーター、最適戦略分析をまとめたハブで、build order や文明ルート比較に向いています。"
        },
        ".card-redline .chip": {
          zh: "3 个入口",
          en: "3 Entry Points",
          ja: "3つの入口"
        },
        ".card-redaction .chip": {
          zh: "内测中",
          en: "Private Beta",
          ja: "内測中"
        },
        ".card-iran .chip": {
          zh: "看板",
          en: "Dashboard",
          ja: "ダッシュボード"
        },
        ".card-reader .chip": {
          zh: "阅读工具",
          en: "Reading Tool",
          ja: "読書ツール"
        },
        ".card-sensevoice .chip": {
          zh: "语音工具",
          en: "Speech Tool",
          ja: "音声ツール"
        },
        ".card-aoe .chip": {
          zh: "游戏入口",
          en: "Game Hub",
          ja: "ゲームハブ"
        },
        ".card-redline .enter": {
          zh: "网页 / Repo / ZIP",
          en: "Web / Repo / ZIP",
          ja: "Web / Repo / ZIP"
        },
        ".card-redline .action-web": {
          zh: "使用网页版",
          en: "Use Web Demo",
          ja: "Web 版を使う"
        },
        ".card-redline .action-github": {
          zh: "GitHub 仓库",
          en: "GitHub Repo",
          ja: "GitHub リポジトリ"
        },
        ".card-redline .action-zip": {
          zh: "下载 ZIP",
          en: "Download ZIP",
          ja: "ZIP をダウンロード"
        },
        ".card-redaction .enter": {
          zh: "联系查看",
          en: "Contact Me",
          ja: "連絡して確認"
        },
        ".card-iran .enter": {
          zh: "点击进入 →",
          en: "Open →",
          ja: "開く →"
        },
        ".card-reader .enter": {
          zh: "详情 →",
          en: "Details →",
          ja: "詳細 →"
        },
        ".card-sensevoice .enter": {
          zh: "详情 →",
          en: "Details →",
          ja: "詳細 →"
        },
        ".card-aoe .enter": {
          zh: "查看项目 →",
          en: "View Project →",
          ja: "プロジェクトを見る →"
        }
      },
      attrs: {
        ".hover-preview": {
          title: {
            zh: ["美国-伊朗交互分析看板预览"],
            en: ["US-Iran dashboard preview"],
            ja: ["米国・イラン分析ダッシュボードのプレビュー"]
          }
        }
      }
    }
  });

  const RAW_DASHBOARD = {
    title: {
      zh: "美国-伊朗局势交互看板",
      en: "US-Iran Interactive Analysis Dashboard",
      ja: "米国・イラン情勢インタラクティブ分析ダッシュボード"
    },
    heroTitle: {
      zh: "美国-伊朗局势交互看板",
      en: "US-Iran Interactive Analysis Dashboard",
      ja: "米国・イラン情勢インタラクティブ分析ダッシュボード"
    },
    heroDesc: {
      zh: "核心判断（截至 2026-03-04）：美方“最大压力 + 定点军事行动 + 持续金融制裁”三线并行，市场主要通过“油价与风险溢价”通道反映局势。",
      en: "Core view as of 2026-03-04: the U.S. is running a three-track posture of maximum pressure, targeted military action, and sustained financial sanctions, with markets reflecting the situation mainly through oil prices and risk premia.",
      ja: "2026-03-04 時点の中核判断：米国は「最大圧力・限定的軍事行動・継続的金融制裁」を三本同時に進めており、市場は主に原油価格とリスクプレミアムを通じてこれを織り込んでいます。"
    },
    heroChips: {
      zh: [
        "数据快照时间：2026-03-04",
        "行情源：内置 Finance feed",
        "事件源：White House / U.S. Treasury / IAEA",
        "框架源：Ray Dalio《Big Debt Crises》"
      ],
      en: [
        "Snapshot date: 2026-03-04",
        "Market data: built-in finance feed",
        "Event sources: White House / U.S. Treasury / IAEA",
        "Framework: Ray Dalio, Big Debt Crises"
      ],
      ja: [
        "スナップショット日付：2026-03-04",
        "市場データ：内蔵 Finance feed",
        "イベント出典：White House / U.S. Treasury / IAEA",
        "分析枠組み：Ray Dalio『Big Debt Crises』"
      ]
    },
    sectionTitles: {
      zh: [
        "当前局势数据与新闻（60%）",
        "重大事件时间线（点击查看新闻）",
        "达里奥历史对标（40%）"
      ],
      en: [
        "Current Situation Data and News (60%)",
        "Major Event Timeline (click for news)",
        "Dalio Historical Benchmarks (40%)"
      ],
      ja: [
        "現在の情勢データとニュース（60%）",
        "主要イベントのタイムライン（クリックでニュース）",
        "ダリオの歴史比較（40%）"
      ]
    }
  };

  Object.assign(PAGES, {
    "legal-articles.html": {
      title: {
        zh: "Lyra Lab - 文章（法律相关）",
        en: "Lyra Lab - Writing",
        ja: "Lyra Lab - 文章"
      },
      single: {
        ".hero h1": {
          zh: "文章 · JD申请 / 法学院生活 / Big Law找工作",
          en: "Writing · JD Applications / Law School / Big Law Job Search",
          ja: "文章・JD 出願 / ロースクール生活 / Big Law 就職"
        },
        ".hero p": {
          zh: "这里整理申请、在读、求职三个阶段的内容，后续会持续更新。",
          en: "This page collects writing for the application, study, and recruiting stages, and will continue to expand.",
          ja: "出願、在学、就職の三つの段階に関する文章をまとめています。今後も継続的に更新します。"
        },
        ".side h3": {
          zh: "文章标签",
          en: "Tags",
          ja: "タグ"
        },
        ".note": {
          zh: "这页聚焦一个明确主题线：申请前、在读中、求职期。后续你只要按这三类继续加文章即可。",
          en: "This page follows a clear arc: before applying, during school, and during recruiting.",
          ja: "このページは、出願前・在学中・就職期という三本の軸で整理しています。"
        }
      },
      lists: {
        ".meta": {
          zh: [
            "2026-03-06 · JD 申请",
            "2026-03-06 · 法学院生活",
            "2026-03-06 · Big Law 求职"
          ],
          en: [
            "2026-03-06 · JD Applications",
            "2026-03-06 · Law School Life",
            "2026-03-06 · Big Law Career"
          ],
          ja: [
            "2026-03-06 · JD 出願",
            "2026-03-06 · ロースクール生活",
            "2026-03-06 · Big Law 就職"
          ]
        },
        ".article h2": {
          zh: [
            "JD 申请路线图：时间线、材料、推荐信与选校逻辑",
            "法学院生活实录：课程强度、阅读负荷与周计划模板",
            "Big Law 求职笔记：OCI、Networking 与面试准备清单"
          ],
          en: [
            "JD Application Roadmap: Timeline, Materials, Recommendation Letters, and School List Logic",
            "Law School Life Notes: Course Load, Reading Burden, and a Weekly Planning Template",
            "Big Law Job Search Notes: OCI, Networking, and Interview Prep Checklist"
          ],
          ja: [
            "JD 出願ロードマップ：タイムライン、出願資料、推薦状、学校選びのロジック",
            "ロースクール生活ノート：授業負荷、読書量、週間計画テンプレート",
            "Big Law 就職メモ：OCI、ネットワーキング、面接準備チェックリスト"
          ]
        },
        ".article a": {
          zh: ["阅读全文 →", "阅读全文 →", "阅读全文 →"],
          en: ["Read Article →", "Read Article →", "Read Article →"],
          ja: ["記事を読む →", "記事を読む →", "記事を読む →"]
        },
        ".chip": {
          zh: ["JD申请", "法学院生活", "Big Law", "求职准备", "申请文书"],
          en: ["JD Applications", "Law School", "Big Law", "Recruiting", "Application Essays"],
          ja: ["JD 出願", "ロースクール", "Big Law", "就職準備", "出願エッセイ"]
        }
      }
    },
    "article-biglaw-job-search-playbook.html": {
      title: {
        zh: "Lyra Lab - Big Law 求职笔记",
        en: "Lyra Lab - Big Law Job Search Notes",
        ja: "Lyra Lab - Big Law 就職メモ"
      },
      lists: {
        ".back": {
          zh: ["← 返回文章目录"],
          en: ["← Back to Writing"],
          ja: ["← 文章一覧へ戻る"]
        },
        "main h1": {
          zh: ["Big Law 求职笔记：OCI、Networking 与面试准备清单"],
          en: ["Big Law Job Search Notes: OCI, Networking, and Interview Prep Checklist"],
          ja: ["Big Law 就職メモ：OCI、ネットワーキング、面接準備チェックリスト"]
        },
        ".meta": {
          zh: ["2026-03-06 · Big Law 求职"],
          en: ["2026-03-06 · Big Law Career"],
          ja: ["2026-03-06 · Big Law 就職"]
        },
        "main p": {
          zh: [
            "Big Law 求职链条长、节点多。把任务拆成阶段动作，比临近申请季临时准备更有效。",
            "重点不是背答案，而是形成你的故事线：为什么法律、为什么这个方向、为什么这家所，以及你能立即带来的价值。"
          ],
          en: [
            "Big Law recruiting is long and node-heavy. Breaking it into stage-based actions works better than scrambling right before the season starts.",
            "The point is not memorizing answers, but building a coherent narrative: why law, why this practice direction, why this firm, and what value you can contribute immediately."
          ],
          ja: [
            "Big Law の就職活動は期間が長く、節目も多いです。直前に慌てるより、段階ごとにタスク化した方が効果的です。",
            "大事なのは答えを暗記することではなく、自分の物語線をつくることです。"
          ]
        },
        "main h2": {
          zh: ["阶段任务", "面试准备"],
          en: ["Stage Tasks", "Interview Prep"],
          ja: ["段階別タスク", "面接準備"]
        }
      }
    },
    "article-jd-application-roadmap.html": {
      title: {
        zh: "Lyra Lab - JD 申请路线图",
        en: "Lyra Lab - JD Application Roadmap",
        ja: "Lyra Lab - JD 出願ロードマップ"
      },
      lists: {
        ".back": {
          zh: ["← 返回文章目录"],
          en: ["← Back to Writing"],
          ja: ["← 文章一覧へ戻る"]
        },
        "main h1": {
          zh: ["JD 申请路线图：时间线、材料、推荐信与选校逻辑"],
          en: ["JD Application Roadmap: Timeline, Materials, Recommendation Letters, and School List Logic"],
          ja: ["JD 出願ロードマップ：タイムライン、出願資料、推薦状、学校選びのロジック"]
        },
        ".meta": {
          zh: ["2026-03-06 · JD 申请"],
          en: ["2026-03-06 · JD Applications"],
          ja: ["2026-03-06 · JD 出願"]
        },
        "main h2": {
          zh: ["时间线", "核心材料"],
          en: ["Timeline", "Core Materials"],
          ja: ["タイムライン", "主要資料"]
        }
      }
    },
    "article-law-school-life-playbook.html": {
      title: {
        zh: "Lyra Lab - 法学院生活实录",
        en: "Lyra Lab - Law School Life Notes",
        ja: "Lyra Lab - ロースクール生活ノート"
      },
      lists: {
        ".back": {
          zh: ["← 返回文章目录"],
          en: ["← Back to Writing"],
          ja: ["← 文章一覧へ戻る"]
        },
        "main h1": {
          zh: ["法学院生活实录：课程强度、阅读负荷与周计划模板"],
          en: ["Law School Life Notes: Course Load, Reading Burden, and a Weekly Planning Template"],
          ja: ["ロースクール生活ノート：授業負荷、読書量、週間計画テンプレート"]
        },
        ".meta": {
          zh: ["2026-03-06 · 法学院生活"],
          en: ["2026-03-06 · Law School Life"],
          ja: ["2026-03-06 · ロースクール生活"]
        },
        "main h2": {
          zh: ["每周结构", "执行要点"],
          en: ["Weekly Structure", "Execution Notes"],
          ja: ["週間構成", "実行の要点"]
        }
      }
    }
  });

  function qs(selector) {
    return document.querySelector(selector);
  }

  function qsa(selector) {
    return Array.from(document.querySelectorAll(selector));
  }

  function setText(selector, value) {
    const node = qs(selector);
    if (node && value != null) node.textContent = value;
  }

  function setListTexts(selector, values) {
    if (!Array.isArray(values)) return;
    qsa(selector).forEach((node, index) => {
      if (values[index] != null) node.textContent = values[index];
    });
  }

  function setAttrLists(selector, attr, values) {
    if (!Array.isArray(values)) return;
    qsa(selector).forEach((node, index) => {
      if (values[index] != null) node.setAttribute(attr, values[index]);
    });
  }

  function injectStyles() {
    if (document.getElementById("site-i18n-style")) return;
    const style = document.createElement("style");
    style.id = "site-i18n-style";
    style.textContent = `
      .topbar {
        gap: 10px;
        flex-wrap: wrap;
      }
      .topbar .actions,
      .topbar .topbar-actions {
        flex: 1 1 auto;
      }
      .lang-switch {
        margin-left: auto;
        display: flex;
        gap: 8px;
        align-items: center;
      }
      .lang-btn {
        appearance: none;
        border: 1px solid #d1d5db;
        background: rgba(255,255,255,0.92);
        color: #1d1d1f;
        border-radius: 999px;
        padding: 5px 10px;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
      }
      .lang-btn.active {
        background: #0a84ff;
        border-color: #0a84ff;
        color: #fff;
      }
      @media (max-width: 900px) {
        .lang-switch {
          width: 100%;
          justify-content: flex-end;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function resolveLang() {
    const urlLang = new URLSearchParams(location.search).get("lang");
    if (SUPPORTED.includes(urlLang)) return urlLang;
    const saved = localStorage.getItem(STORAGE_KEY);
    return SUPPORTED.includes(saved) ? saved : "zh";
  }

  function syncUrl(lang) {
    const url = new URL(location.href);
    url.searchParams.set("lang", lang);
    history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
  }

  function updateLinksAndFrames(lang) {
    qsa("a[href]").forEach((link) => {
      const href = link.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("javascript:")) return;
      let url;
      try {
        url = new URL(href, location.href);
      } catch {
        return;
      }
      if (url.origin !== location.origin || !url.pathname.endsWith(".html")) return;
      url.searchParams.set("lang", lang);
      link.setAttribute("href", `${url.pathname.replace(/^\//, "")}${url.search}${url.hash}`);
    });

    qsa("iframe[src]").forEach((frame) => {
      const src = frame.getAttribute("src");
      if (!src) return;
      let url;
      try {
        url = new URL(src, location.href);
      } catch {
        return;
      }
      if (url.origin !== location.origin || !url.pathname.endsWith(".html")) return;
      url.searchParams.set("lang", lang);
      frame.setAttribute("src", `${url.pathname.replace(/^\//, "")}${url.search}${url.hash}`);
    });
  }

  function ensureSwitch(lang) {
    const topbar = qs(".topbar");
    if (!topbar || qs(".lang-switch")) return;
    const wrap = document.createElement("div");
    wrap.className = "lang-switch";
    wrap.setAttribute("aria-label", "Language Switcher");
    [
      ["zh", "中文"],
      ["en", "EN"],
      ["ja", "日本語"]
    ].forEach(([code, label]) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `lang-btn${code === lang ? " active" : ""}`;
      button.dataset.lang = code;
      button.textContent = label;
      button.addEventListener("click", () => applyLanguage(code));
      wrap.appendChild(button);
    });
    topbar.appendChild(wrap);
  }

  function updateSwitch(lang) {
    qsa(".lang-btn").forEach((button) => {
      const active = button.dataset.lang === lang;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function updateCommon(lang) {
    const pack = COMMON[lang];
    document.documentElement.lang = lang === "zh" ? "zh-CN" : lang;

    qsa(".topbar a[href]").forEach((link) => {
      let url;
      try {
        url = new URL(link.href, location.href);
      } catch {
        return;
      }
      const pathname = url.pathname.split("/").pop();
      if (pathname === "about.html" || (pathname === "index.html" && url.hash === "#about")) link.textContent = pack.nav.about;
      if (pathname === "legal-projects.html") link.textContent = pack.nav.projects;
      if (pathname === "legal-articles.html") link.textContent = pack.nav.articles;
      if (pathname === "life-travel.html") link.textContent = pack.nav.media;
    });

    const floatingLogo = qs(".floating-logo");
    if (floatingLogo) floatingLogo.setAttribute("aria-label", pack.homeLabel);

    const logoSubtitle = qs(".floating-logo svg text:last-of-type");
    if (logoSubtitle) logoSubtitle.textContent = pack.logoSubtitle;

    const footerLogo = qs(".site-footer__logo-link");
    if (footerLogo) footerLogo.setAttribute("aria-label", pack.homeLabel);

    const footerLead = qs(".site-footer__content > .site-footer__section:not(.site-footer__disclaimer) p");
    if (footerLead) footerLead.textContent = pack.footerLead;

    const emailText = qs('.site-footer__links a[href^="mailto:"] span:last-child');
    if (emailText) emailText.textContent = pack.email;

    const boardLink = qs('.site-footer__links a[href*="#message"]');
    if (boardLink) boardLink.textContent = pack.message;

    const xhsText = qs('.site-footer__links a[href*="xhslink.com"] span:last-child');
    if (xhsText) xhsText.textContent = pack.xiaohongshu;

    const disclaimerPs = qsa(".site-footer__disclaimer p");
    if (disclaimerPs[0]) disclaimerPs[0].innerHTML = pack.disclaimer1;
    if (disclaimerPs[1]) disclaimerPs[1].textContent = pack.disclaimer2;
  }

  function applyPagePack(lang) {
    const pack = PAGES[page];
    if (!pack) return;
    if (pack.title) document.title = pack.title[lang];
    if (pack.single) {
      Object.entries(pack.single).forEach(([selector, translations]) => {
        setText(selector, translations[lang]);
      });
    }
    if (pack.lists) {
      Object.entries(pack.lists).forEach(([selector, translations]) => {
        setListTexts(selector, translations[lang]);
      });
    }
    if (pack.attrs) {
      Object.entries(pack.attrs).forEach(([selector, attrs]) => {
        Object.entries(attrs).forEach(([attr, translations]) => {
          setAttrLists(selector, attr, translations[lang]);
        });
      });
    }
  }

  function applyRawDashboard(lang) {
    if (page !== "iran_us_interactive_dashboard.html") return;
    document.title = RAW_DASHBOARD.title[lang];
    setText(".hero h1", RAW_DASHBOARD.heroTitle[lang]);
    setText(".hero p", RAW_DASHBOARD.heroDesc[lang]);
    setListTexts(".hero .chip", RAW_DASHBOARD.heroChips[lang]);
    setListTexts(".section-title", RAW_DASHBOARD.sectionTitles[lang]);
  }

  function applyLanguage(lang) {
    if (!SUPPORTED.includes(lang)) return;
    localStorage.setItem(STORAGE_KEY, lang);
    syncUrl(lang);
    updateSwitch(lang);
    updateLinksAndFrames(lang);
    updateCommon(lang);
    applyPagePack(lang);
    requestAnimationFrame(() => applyRawDashboard(lang));
  }

  injectStyles();
  const initialLang = resolveLang();
  ensureSwitch(initialLang);
  applyLanguage(initialLang);
})();
