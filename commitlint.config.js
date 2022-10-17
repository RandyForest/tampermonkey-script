/**
 * feat：新增功能
 * fix：bug 修复
 * docs：文档更新
 * style：不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)
 * refactor：重构代码(既没有新增功能，也没有修复 bug)
 * perf：性能, 体验优化
 * test：新增测试用例或是更新现有测试
 * build：主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
 * ci：主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
 * chore：不属于以上类型的其他类型，比如构建流程, 依赖管理
 * revert：回滚某个更早之前的提交
 */

export default {
  extends: ["@commitlint/config-conventional"],
  //   rules: {
  //     "type-enum": [
  //       2,
  //       "always",
  //       ["feat", "fix", "docs", "style", "refactor", "test", "chore", "revert"],
  //     ],
  //     "subject-full-stop": [0, "never"],
  //     "subject-case": [0, "never"],
  //   },
  prompt: {
    messages: {
      skip: "跳过",
      max: "最多 %d 个字符",
      min: "最少 %d 个字符",
      emptyWarning: "不能为空",
      upperLimitWarning: "超出字数限制",
      lowerLimitWarning: "低于字数限制",
    },
    questions: {
      type: {
        description: "选择提交类型",
        enum: {
          feat: {
            description: "一个新特性",
            title: "新特性",
            emoji: "✨",
          },
          fix: {
            description: "一个漏洞修复",
            title: "漏洞修复",
            emoji: "🐛",
          },
          docs: {
            description: "仅更改文档",
            title: "文档",
            emoji: "📚",
          },
          style: {
            description: "不影响代码含义的更改（空白符、格式化、缺少分号等)",
            title: "样式",
            emoji: "💎",
          },
          refactor: {
            description: "既不修复错误也不添加功能的代码更改",
            title: "重构",
            emoji: "📦",
          },
          perf: {
            description: "提高性能的代码更改",
            title: "性能提升",
            emoji: "🚀",
          },
          test: {
            description: "添加缺失的测试或纠正现有的测试",
            title: "测试",
            emoji: "🚨",
          },
          build: {
            description:
              "影响构建系统或外部依赖项的更改（例如：gulp、broccoli、npm）",
            title: "构建",
            emoji: "🛠",
          },
          ci: {
            description:
              "更改我们的集成配置文件和脚本（例如：Travis、Circle、BrowserStack、SauceLabs）",
            title: "集成",
            emoji: "⚙️",
          },
          chore: {
            description: "不修改源码或测试文件的其他更改",
            title: "杂项",
            emoji: "♻️",
          },
          revert: {
            description: "恢复之前的提交",
            title: "还原",
            emoji: "🗑",
          },
        },
      },
      scope: {
        description: "更改的范围（scope）（例：组件 或 文件名）",
      },
      subject: {
        description: "主题（subject）",
      },
      body: {
        description: "主体（body）",
      },
      isBreaking: {
        description: "是否有破坏性更改（BREAKING CHANGE）？",
      },
      breakingBody: {
        description:
          "破坏性更改（BREAKING CHANGE）需要一个主体（body），请输入详细描述",
      },
      breaking: {
        description: "描述破坏性更改（BREAKING CHANGE）",
      },
      isIssueAffected: {
        description: "此改变是否影响打开的问题（open ssues）",
      },
      issuesBody: {
        description: "如果问题关闭，则需要提交一个主体（body），请输入详细描述",
      },
      issues: {
        description:
          '添加问题参考（issue references） （例： "fix #123"、"re #123"）',
      },
    },
  },
};
