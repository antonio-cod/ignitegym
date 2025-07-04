## START PROJET REACT NATIVE

- npx create-expo-app --template
- npx expo install expo-font @expo-google-fonts/roboto
- npm install @gluestack-ui/themed@1.1.34 @gluestack-style/react@1.0.57 @gluestack-ui/config@1.1.19 --legacy-peer-deps
- npx expo install react-native-svg
- npx gluestack-ui-scripts eject-theme
- npm install --save-dev react-native-svg-transformer --legacy-peer-deps


## CLEAN EXPO AND METRO CACHE

- npx expo start --clear

## REACT NAVIGATE

- npm install @react-navigation/native
- Add na raiz .npmrc (legacy-peer-deps=true)
- npx expo install react-native-screens
- npm install react-native-safe-area-context
- npm install @react-navigation/native-stack
- npm install @react-navigation/bottom-tabs

## REACT IMAGE

- npx expo install expo-image-picker
- ADD plugin em app.json
"expo-image-picker",
        {
          "photosPermission": "The app accesses your photos to let you share them with your friends."
        }

## MANIPULANDO O FILE

- nnpx expo install expo-file-system

## REACT HOOK FORMS

Documentação: react-hook-form.com
- npm install react-hook-form

Biblioteca de validação do imput
- npm install @hookform/resolvers yup

##  HTTP REQUESTS

- npm install axios

## SALVANDO OS DADOS DE AUTENTICAÇÃO DO USUÁRIO NO STORAGE

- npx expo install @react-native-async-storage/async-storage

## ALTERNATIVA PARA CORRIGIR O PROBLEMA DA ANIMAÇÃO DO GIF UTILIZAR UMA BIBLIOTECA PARA IMAGE

npm install expo-image
npm uninstall expo-image
// preferi aguardar a correção sair da propria biblioteca pois a utilização do expo-image pode implica no funcionamento da biblioteca Gluestack :(
  















## settings.json
{
    "workbench.startupEditor": "newUntitledFile",
    "editor.fontSize": 14,
    "editor.lineHeight": 1.8,
    "javascript.suggest.autoImports": true,
    "javascript.updateImportsOnFileMove.enabled": "always",
    "editor.rulers": [80, 120],
    "extensions.ignoreRecommendations": true,
    "typescript.tsserver.log": "off",
    "files.associations": {
      ".env.*": "dotenv",
      ".prettierrc": "json",
      "*.css": "css"
    },
    "symbols.files.associations": {
      "*.module.ts": "nest",
      "*.guard.ts": "typescript",
      "*.spec.ts": "ts-test",
      "*.e2e-spec.ts": "ts-test",
      "vitest.config.e2e.ts": "vite",
      ".env.example": "gear"
    },
    "tailwindCSS.experimental.classRegex": [
      ["tv\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
    ],
    "editor.parameterHints.enabled": false,
    "editor.renderLineHighlight": "gutter",
    "cSpell.language": "en,pt",
    "typescript.updateImportsOnFileMove.enabled": "always",
    "editor.suggestSelection": "first",
    "explorer.confirmDelete": false,
    "gitlens.codeLens.recentChange.enabled": false,
    "terminal.integrated.showExitAlert": false,
    "[prisma]": {
      "editor.formatOnSave": true
    },
    "typescript.suggest.autoImports": true,
    "terminal.integrated.env.osx": {
      "FIG_NEW_SESSION": "1"
    },
    "workbench.editor.labelFormat": "short",
    "editor.fontLigatures": true,
    "emmet.includeLanguages": {
      "javascript": "javascriptreact"
    },
    "emmet.syntaxProfiles": {
      "javascript": "jsx"
    },
    "cSpell.enableFiletypes": [
      "!asciidoc",
      "!c",
      "!cpp",
      "!csharp",
      "!go",
      "!handlebars",
      "!haskell",
      "!jade",
      "!java",
      "!latex",
      "!php",
      "!pug",
      "!python",
      "!restructuredtext",
      "!rust",
      "!scala",
      "!scss"
    ],
    "editor.acceptSuggestionOnCommitCharacter": false,
    "explorer.compactFolders": false,
    "git.enableSmartCommit": true,
    "editor.accessibilitySupport": "off",
    "explorer.confirmDragAndDrop": false,
    "terminal.integrated.fontSize": 14,
    // "terminal.integrated.fontFamily": "JetBrainsMono Nerd Font",
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit",
      "source.organizeImports": "explicit"
    },
    "eslint.validate": [
      "javascript",
      "javascriptreact",
      "graphql"
    ],
    "editor.semanticHighlighting.enabled": false,
    "breadcrumbs.enabled": false,
    "workbench.productIconTheme": "fluent-icons",
    // "editor.fontFamily": "JetBrains Mono",
    "gitlens.codeLens.authors.enabled": false,
    "editor.tabSize": 2,
    "security.workspace.trust.untrustedFiles": "newWindow",
    "files.exclude": {
      "**\/CVS": true,
      "**\/.DS_Store": true,
      "**\/.hg": true,
      "**\/.svn": true,
      "**\/.git": true,
      ".vscode": true
      // "node_modules": true
    },
    "workbench.iconTheme": "symbols",
    "update.mode": "start",
    "terminal.integrated.gpuAcceleration": "off",
    "terminal.integrated.defaultProfile.osx": "fish",
    "[jsonc]": {
      "editor.defaultFormatter": "vscode.json-language-features"
    },
    "[json]": {
      "editor.defaultFormatter": "vscode.json-language-features"
    },
    "window.commandCenter": true,
    "git.openRepositoryInParentFolders": "always",
    "symbols.hidesExplorerArrows": false,
    "[javascript]": {
      "editor.defaultFormatter": "vscode.typescript-language-features"
    },
    "console-ninja.featureSet": "Community",
    "workbench.editor.empty.hint": "hidden",
    "update.showReleaseNotes": false,
    "security.promptForLocalFileProtocolHandling": false,
    "apc.activityBar": {
      "position": "bottom",
      "hideSettings": true,
      "size": 48,
      "itemMargin": 8,
      "itemSize": 32
    },
    "editor.hideCursorInOverviewRuler": true,
    "editor.minimap.enabled": false,
    "window.titleBarStyle": "native",
    "apc.electron": {
      "titleBarStyle": "hiddenInset",
      "trafficLightPosition": {
        "x": 11,
        "y": 10
      },
      "frame": false
    },
    "apc.header": {
      "height": 36
    },
    "apc.listRow": {
      "height": 24
    },
    "apc.font.family": "Inter",
    "apc.stylesheet": {
      ".title-label > h2": "display: none",
      ".editor-actions": "display: none",
      ".nosidebar .inline-tabs-placeholder": "width: 75px",
      ".pane-header": "padding: 0 8px",
      ".pane-body": "padding: 8px",
      ".split-view-view:first-child .pane-header": "display: none !important;",
      ".monaco-list-row": "border-radius: 4px;",
      ".monaco-workbench .monaco-list:not(.element-focused):focus:before": "display: none;"
    },
    "editor.scrollbar.vertical": "hidden",
    "explorer.sortOrder": "foldersNestsFiles",
    "explorer.fileNesting.patterns": {
      "package.json": ".eslint*, prettier*, tsconfig*, vite*, pnpm-lock*, bun.lockb, nest*",
      "tailwind.config.js": "tailwind.config*, postcss.config*",
      ".env.local": ".env*",
      ".env": ".env*"
    },
    "explorer.fileNesting.enabled": true,
    "cSpell.userWords": [
      "bootcamp",
      "chakra",
      "checkin",
      "checkins",
      "clsx",
      "Codegen",
      "datadog",
      "Datetime",
      "dayjs",
      "Dotenv",
      "Elysia",
      "esbuild",
      "fastify",
      "Fastify",
      "feedbackwidget",
      "ffprobe",
      "Hasher",
      "Hono",
      "ilike",
      "IUGU",
      "jamjuree",
      "jupiter",
      "liveblocks",
      "LIVEBLOCKS",
      "Marguerita",
      "middlewares",
      "mixpanel",
      "monaco",
      "nestjs",
      "omni",
      "Omni",
      "Onboarded",
      "pallas",
      "postgres",
      "postgresql",
      "prefetch",
      "reactflow",
      "roboto",
      "rocketseat",
      "rotion",
      "rsxp",
      "Sandpack",
      "shiki",
      "skylab",
      "sqlite",
      "supergraph",
      "svgr",
      "sympla",
      "tailwindcss",
      "textblock",
      "tiptap",
      "trpc",
      "TRPC",
      "tsup",
      "unfollow",
      "Unfollow",
      "unform",
      "Unform",
      "unmark",
      "upsert",
      "Usuario",
      "WEBPUSH"
    ],
    "workbench.statusBar.visible": false,
    "workbench.colorTheme": "Omni",
    "explorer.confirmPasteNative": false,
    "files.autoSave": "afterDelay"
  }


