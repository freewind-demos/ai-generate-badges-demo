# AI Generate Badges Demo

这是一个使用 [shields.io](https://shields.io/) 生成各种成就徽章的演示项目。项目使用React + TypeScript开发，展示了如何动态生成和展示不同样式、不同类型的徽章。

## 项目功能

- 展示各种成就徽章（工作年限、技术领域、项目成就等）
- 支持多种徽章样式（flat、flat-square、plastic、for-the-badge）
- 集成各种服务的logo（如GitHub、Microsoft、React等）
- 支持自定义颜色和描述文本

## 使用方法

1. 安装依赖：
```bash
npm install
# 或
pnpm install
```

2. 启动开发服务器：
```bash
npm run dev
# 或
pnpm dev
```

3. 访问 `http://localhost:5173` 查看效果

## Shields.io 使用指南

### 基本语法

shields.io的基本URL格式为：
```
https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>
```

例如：
```
https://img.shields.io/badge/hello-world-blue
```

### 样式选项

通过`style`参数可以设置不同的徽章样式：

- `flat`（默认）：扁平风格
- `flat-square`：扁平无圆角
- `plastic`：塑料风格（带渐变）
- `for-the-badge`：大号徽章

示例：
```
https://img.shields.io/badge/style-flat-green?style=flat
https://img.shields.io/badge/style-flat--square-green?style=flat-square
https://img.shields.io/badge/style-plastic-green?style=plastic
https://img.shields.io/badge/style-for--the--badge-green?style=for-the-badge
```

### 颜色支持

- 支持十六进制颜色码：`?color=ff69b4`
- 支持[内置颜色名](https://shields.io/#colors)：
  - `brightgreen`
  - `green`
  - `yellow`
  - `orange`
  - `red`
  - `blue`
  - `lightgrey`
  - 等等...

### Logo集成

通过`logo`参数可以添加超过150种预设的logo：

```
https://img.shields.io/badge/react-app-blue?logo=react
https://img.shields.io/badge/github-repo-black?logo=github
```

常用logo包括：
- `github`
- `react`
- `typescript`
- `javascript`
- `nodejs`
- `npm`
- `docker`
- 更多logo可以在[Simple Icons](https://simpleicons.org/)查看

### 高级参数

1. Logo颜色
```
?logoColor=violet
```

2. 徽章颜色
```
?color=green
```

3. 标签颜色
```
?labelColor=abcdef
```

4. Logo位置
```
?logoPosition=right
```

### URL编码

当标签或消息中包含特殊字符时，需要进行URL编码：

- 空格：用`%20`或`-`替换
- 连字符：用`--`替换
- 下划线：用`__`替换
- `_`或`-`开头：用`-`替换

### 实际应用示例

1. 带版本号的徽章：
```
https://img.shields.io/badge/version-1.0.0-blue
```

2. 带logo的技术栈徽章：
```
https://img.shields.io/badge/React-18.0.0-blue?logo=react
```

3. 自定义样式的成就徽章：
```
https://img.shields.io/badge/Achievement-Unlocked-success?style=for-the-badge
```

4. 多色组合的徽章：
```
https://img.shields.io/badge/Powered%20by-AI-blue?labelColor=gray&color=green
```

## 项目开发

### 添加新徽章

在`src/App.tsx`中的`achievements`数组中添加新的徽章配置：

```typescript
{
  title: '徽章标题',
  label: '徽章标签',
  description: '徽章描述',
  color: '颜色代码',
  icon: '图标',
  logo: 'logo名称',
  style: '徽章样式'
}
```

## 注意事项

1. 确保URL中的特殊字符都经过正确编码
2. logo名称必须与[Simple Icons](https://simpleicons.org/)中的名称完全匹配
3. 颜色代码不要带#号，直接使用六位十六进制数
4. 注意徽章宽度，避免文字太长导致显示不美观
