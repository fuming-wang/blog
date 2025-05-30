import { defineConfig } from 'vitepress'
import { set_sidebar } from "./utils/auto_sidebar.mjs";
import mathjax3 from "markdown-it-mathjax3";
const customElements = [
	"math",
	"maction",
	"maligngroup",
	"malignmark",
	"menclose",
	"merror",
	"mfenced",
	"mfrac",
	"mi",
	"mlongdiv",
	"mmultiscripts",
	"mn",
	"mo",
	"mover",
	"mpadded",
	"mphantom",
	"mroot",
	"mrow",
	"ms",
	"mscarries",
	"mscarry",
	"mscarries",
	"msgroup",
	"mstack",
	"mlongdiv",
	"msline",
	"mstack",
	"mspace",
	"msqrt",
	"msrow",
	"mstack",
	"mstack",
	"mstyle",
	"msub",
	"msup",
	"msubsup",
	"mtable",
	"mtd",
	"mtext",
	"mtr",
	"munder",
	"munderover",
	"semantics",
	"math",
	"mi",
	"mn",
	"mo",
	"ms",
	"mspace",
	"mtext",
	"menclose",
	"merror",
	"mfenced",
	"mfrac",
	"mpadded",
	"mphantom",
	"mroot",
	"mrow",
	"msqrt",
	"mstyle",
	"mmultiscripts",
	"mover",
	"mprescripts",
	"msub",
	"msubsup",
	"msup",
	"munder",
	"munderover",
	"none",
	"maligngroup",
	"malignmark",
	"mtable",
	"mtd",
	"mtr",
	"mlongdiv",
	"mscarries",
	"mscarry",
	"msgroup",
	"msline",
	"msrow",
	"mstack",
	"maction",
	"semantics",
	"annotation",
	"annotation-xml",
	"mjx-container",
	"mjx-assistive-mml",
];


// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/blog/",
  title: "知识库",
  description: "A VitePress Site",
  themeConfig: {
    outlineTitle: "目录",
    outline: [2, 6],
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Java',
        items: [
          {
            text: '📚 Java 面向对象和基础', // 模拟“加粗标题”，不可点击
            items: [
              { text: 'Java 基础 - 面向对象', link: '/Java/JUC/ThreadLocal详解.md' },
            ]
          },
          {
            text: '📚 Java 并发编程',
            items: [
              { text: 'ThreadLocal详解', link: '/Java/JUC/ThreadLocal详解.md' }
            ]
          }
        ]
        
      },
      {
        text: '算法',
        items: [
          {
            text: '📚 算法',
            items: [
              { text: '排序算法', link: '/Algorithm/排序算法详解.md' },
              { text: '负载均衡算法', link: '/Algorithm/负载均衡算法.md' }
            ]
          }
        ]
      }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    sidebar: {
      "/Java/JUC": set_sidebar("/Java/JUC"), 
      "/Algorithm": set_sidebar("/Algorithm")   
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fuming-wang' }
    ],
    footer: {

      copyright: 'Copyright © 2025 知识库'
    },
    search: {
      provider: 'local',
      options: {
        locales: {

          translations: {
            button: {
              buttonText: '搜索文档',
              buttonAriaLabel: '搜索文档'
            },
            modal: {
              noResultsText: '无法查询相关文档',
              resetButtonTitle: '清除搜索条件',
              footer: {
                selectText: '选择',
                navigateText: '导航'
              }
            }
          }
        }
      }
    }

  },
 	markdown: {
		config: (md) => {
			md.use(mathjax3);
		},
	},
	vue: {
		template: {
			compilerOptions: {
				isCustomElement: (tag) => customElements.includes(tag),
			},
		},
	},
})
