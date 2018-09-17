(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{166:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[e("a",{attrs:{href:"https://qiita.com/kinchiki/items/57e9391128d07819c321",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://qiita.com/kinchiki/items/57e9391128d07819c321"),e("OutboundLink")],1),t._v("\nを参考に設定した。")]),t._v(" "),t._m(1),t._v(" "),e("ol",[e("li",[t._v("以下のページ下部からテーマのzipファイルをダウンロード。"),e("br"),t._v(" "),e("a",{attrs:{href:"http://cocopon.github.io/iceberg.vim/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://cocopon.github.io/iceberg.vim/"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("ダウンロードしたzipファイルを解凍")]),t._v(" "),e("li",[t._v("Terminal > Preferencesで歯車マークをクリックしてImport...で解凍したファイルを読み込み")]),t._v(" "),e("li",[t._v("ProfilesのBackgroundで背景を半透明に")])]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),e("p",[t._v("/etc/bashsに以下を追加")]),t._v(" "),t._m(5),e("p",[t._v("ログインシェル変更")]),t._v(" "),t._m(6),e("p",[t._v("exitしてログインしなおし。")]),t._v(" "),t._m(7),t._v(" "),e("p",[t._v("Zshに便利な設定いろいろ入れてくれるフレームワーク、"),e("a",{attrs:{href:"https://github.com/sorin-ionescu/prezto",target:"_blank",rel:"noopener noreferrer"}},[t._v("Prezto"),e("OutboundLink")],1),t._v("をインストール。")]),t._v(" "),t._m(8),e("p",[t._v("Preztoの設定は~/.zpreztorcに書いてある。\nプロンプトを設定。")]),t._v(" "),t._m(9),t._m(10),t._v(" "),e("p",[t._v("Preztoをアップデートするにはこんな感じにすればいいらしい。")]),t._v(" "),t._m(11)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"ターミナル"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ターミナル","aria-hidden":"true"}},[this._v("#")]),this._v(" ターミナル")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"テーマ変更"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#テーマ変更","aria-hidden":"true"}},[this._v("#")]),this._v(" テーマ変更")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"シェル"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#シェル","aria-hidden":"true"}},[this._v("#")]),this._v(" シェル")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"zshインストール"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#zshインストール","aria-hidden":"true"}},[this._v("#")]),this._v(" zshインストール")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("$ brew update\n$ brew "),s("span",{attrs:{class:"token function"}},[this._v("install")]),this._v(" zsh\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-diff extra-class"},[s("pre",{pre:!0,attrs:{class:"language-diff"}},[s("code",[this._v("/bin/bash\n/bin/csh\n/bin/ksh\n/bin/sh\n/bin/tcsh\n"),s("span",{attrs:{class:"token inserted"}},[this._v("+ /usr/local/bin/zsh")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("$ chsh -s /usr/local/bin/zsh\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"preztoインストール・設定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#preztoインストール・設定","aria-hidden":"true"}},[this._v("#")]),this._v(" Preztoインストール・設定")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" clone --recursive https://github.com/sorin-ionescu/prezto.git "),e("span",{attrs:{class:"token string"}},[t._v('"'),e("span",{attrs:{class:"token variable"}},[t._v("${ZDOTDIR:-$HOME}")]),t._v('/.zprezto"')]),t._v("\n$ setopt EXTENDED_GLOB\n  "),e("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" rcfile "),e("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"'),e("span",{attrs:{class:"token variable"}},[t._v("${ZDOTDIR:-$HOME}")]),t._v('"')]),t._v("/.zprezto/runcoms/^README.md"),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(".N"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n  "),e("span",{attrs:{class:"token function"}},[t._v("ln")]),t._v(" -s "),e("span",{attrs:{class:"token string"}},[t._v('"'),e("span",{attrs:{class:"token variable"}},[t._v("$rcfile")]),t._v('"')]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"'),e("span",{attrs:{class:"token variable"}},[t._v("${ZDOTDIR:-$HOME}")]),t._v("/."),e("span",{attrs:{class:"token variable"}},[t._v("${rcfile:t}")]),t._v('"')]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("done")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-diff extra-class"},[e("pre",{pre:!0,attrs:{class:"language-diff"}},[e("code",[t._v("# Set the prompt theme to load.\n# Setting it to 'random' loads a random theme.\n# Auto set to 'off' on dumb terminals.\n"),e("span",{attrs:{class:"token deleted"}},[t._v("- zstyle ':prezto:module:prompt' theme 'sorin'")]),t._v("\n"),e("span",{attrs:{class:"token inserted"}},[t._v("+ zstyle ':prezto:module:prompt' theme 'pure'")]),t._v("\n...\nzstyle ':prezto:load' pmodule \\\n  'environment' \\\n  'terminal' \\\n  'editor' \\\n  'history' \\\n  'directory' \\\n  'spectrum' \\\n  'utility' \\\n  'completion' \\\n"),e("span",{attrs:{class:"token inserted"}},[t._v("+  'syntax-highlighting' \\")]),t._v("\n"),e("span",{attrs:{class:"token inserted"}},[t._v("+  'autosuggestions' \\")]),t._v("\n"),e("span",{attrs:{class:"token inserted"}},[t._v("+  'docker' \\")]),t._v("\n"),e("span",{attrs:{class:"token inserted"}},[t._v("+  'git'\t\\")]),t._v("\n  'prompt'\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"preztoアップデート"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#preztoアップデート","aria-hidden":"true"}},[this._v("#")]),this._v(" Preztoアップデート")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" "),e("span",{attrs:{class:"token variable"}},[t._v("$ZPREZTODIR")]),t._v("\n$ "),e("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" pull\n$ "),e("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" submodule update --init --recursive\n")])])])}],!1,null,null,null);n.options.__file="terminal.md";s.default=n.exports}}]);