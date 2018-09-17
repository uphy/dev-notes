(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{165:function(a,t,s){"use strict";s.r(t);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"開発環境構築"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#開発環境構築","aria-hidden":"true"}},[a._v("#")]),a._v(" 開発環境構築")]),a._v(" "),s("p",[a._v("SDKは基本anyenvを使う。"),s("br"),a._v("\nそれ以外はbrew。")]),a._v(" "),s("h2",{attrs:{id:"gitインストール"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gitインストール","aria-hidden":"true"}},[a._v("#")]),a._v(" gitインストール")]),a._v(" "),s("p",[a._v("Mac標準のGitが入っているが、より新しいものを使いたいのでbrewでインストール"),s("br"),a._v("\nbrewではgitが/usr/local/Cellar/git/VERSION/にインストールされる。"),s("br"),a._v(" "),s("code",[a._v("brew link")]),a._v("そのディレクトリへのシンボリックリンクを/usr/local/git/に作成してくれる。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ brew "),s("span",{attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{attrs:{class:"token function"}},[a._v("git")]),a._v("\n$ brew "),s("span",{attrs:{class:"token function"}},[a._v("link")]),a._v(" --overwrite "),s("span",{attrs:{class:"token function"}},[a._v("git")]),a._v("\nLinking /usr/local/Cellar/git/2.19.0_1"),s("span",{attrs:{class:"token punctuation"}},[a._v("..")]),a._v(". 203 symlinks created\n")])])]),s("p",[a._v("インストールしても、PATHの順番的に/usr/bin/git(Apple Git)が優先されてしまう。")]),a._v(" "),s("p",[a._v("シェルのプロファイル変更して対応。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),s("span",{attrs:{class:"token string"}},[a._v("'export PATH=\"/usr/local/bin/git:"),s("span",{attrs:{class:"token variable"}},[a._v("$PATH")]),a._v("\"'")]),a._v(" "),s("span",{attrs:{class:"token operator"}},[a._v(">>")]),a._v(" ~/.zshrc\n")])])]),s("h2",{attrs:{id:"anyenv"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#anyenv","aria-hidden":"true"}},[a._v("#")]),a._v(" anyenv")]),a._v(" "),s("p",[a._v("zsh前提。他のシェルなら適宜ファイル名変更。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/riywo/anyenv ~/.anyenv\n$ "),s("span",{attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),s("span",{attrs:{class:"token string"}},[a._v("'# anyenv'")]),a._v(" "),s("span",{attrs:{class:"token operator"}},[a._v(">>")]),a._v(" ~/.zshrc\n$ "),s("span",{attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),s("span",{attrs:{class:"token string"}},[a._v("'export PATH=\""),s("span",{attrs:{class:"token variable"}},[a._v("$HOME")]),a._v("/.anyenv/bin:"),s("span",{attrs:{class:"token variable"}},[a._v("$PATH")]),a._v("\"'")]),a._v(" "),s("span",{attrs:{class:"token operator"}},[a._v(">>")]),a._v(" ~/.zshrc\n$ "),s("span",{attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),s("span",{attrs:{class:"token string"}},[a._v("'eval \""),s("span",{attrs:{class:"token variable"}},[s("span",{attrs:{class:"token variable"}},[a._v("$(")]),a._v("anyenv init - zsh"),s("span",{attrs:{class:"token variable"}},[a._v(")")])]),a._v("\"'")]),a._v(" "),s("span",{attrs:{class:"token operator"}},[a._v(">>")]),a._v(" ~/.zshrc\n$ "),s("span",{attrs:{class:"token function"}},[a._v("exec")]),a._v(" "),s("span",{attrs:{class:"token variable"}},[a._v("$bash")]),a._v(" -l\n")])])]),s("h2",{attrs:{id:"各種env"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#各種env","aria-hidden":"true"}},[a._v("#")]),a._v(" 各種env")]),a._v(" "),s("h3",{attrs:{id:"ndenv"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ndenv","aria-hidden":"true"}},[a._v("#")]),a._v(" ndenv")]),a._v(" "),s("p",[a._v("ndenvインストール")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ anyenv "),s("span",{attrs:{class:"token function"}},[a._v("install")]),a._v(" ndenv\n")])])]),s("p",[a._v("nodejsインストール")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ ndenv "),s("span",{attrs:{class:"token function"}},[a._v("install")]),a._v(" --list\nAvailable versions:\n  v0.1.14\n  v0.1.15\n  v0.1.16\n  v0.1.17\n"),s("span",{attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n$ ndenv "),s("span",{attrs:{class:"token function"}},[a._v("install")]),a._v(" v10.10.0\n$ ndenv globalg v10.10.0\n")])])]),s("p",[a._v("yarnインストール")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),s("span",{attrs:{class:"token function"}},[a._v("install")]),a._v(" -g yarn\n$ ndenv rehash\n")])])]),s("h3",{attrs:{id:"goenv"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#goenv","aria-hidden":"true"}},[a._v("#")]),a._v(" goenv")]),a._v(" "),s("p",[a._v("goenvインストール")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ anyenv "),s("span",{attrs:{class:"token function"}},[a._v("install")]),a._v(" goenv\n")])])]),s("p",[a._v("goインストール")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ goenv "),s("span",{attrs:{class:"token function"}},[a._v("install")]),a._v(" --list\n"),s("span",{attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n$ goenv "),s("span",{attrs:{class:"token function"}},[a._v("install")]),a._v(" 1.11.0\n$ goenv global 1.11.0\n")])])]),s("h3",{attrs:{id:"jenv"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jenv","aria-hidden":"true"}},[a._v("#")]),a._v(" jenv")]),a._v(" "),s("p",[a._v("確かJDKをインストールしてからjenvいれた。"),s("br"),a._v("\nインストールしたJDKをjenvが認識してくれたような。")]),a._v(" "),s("h3",{attrs:{id:"pyenv"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pyenv","aria-hidden":"true"}},[a._v("#")]),a._v(" pyenv")]),a._v(" "),s("p",[a._v("pyenv")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ anyenv "),s("span",{attrs:{class:"token function"}},[a._v("install")]),a._v(" pyenv\n")])])]),s("p",[a._v("pythonインストール")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ pyenv "),s("span",{attrs:{class:"token function"}},[a._v("install")]),a._v(" --list\n"),s("span",{attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n$ pyenv "),s("span",{attrs:{class:"token function"}},[a._v("install")]),a._v(" 3.6.4\n$ pyenv globalg 3.6.4\n")])])]),s("h2",{attrs:{id:"hub"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hub","aria-hidden":"true"}},[a._v("#")]),a._v(" hub")]),a._v(" "),s("p",[a._v("GitHubのCLIツールをインストール")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ brew "),s("span",{attrs:{class:"token function"}},[a._v("install")]),a._v(" hub\n")])])]),s("h3",{attrs:{id:"リポジトリ作成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#リポジトリ作成","aria-hidden":"true"}},[a._v("#")]),a._v(" リポジトリ作成")]),a._v(" "),s("p",[a._v("適当にリポジトリ作成。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" hub-example\n$ "),s("span",{attrs:{class:"token function"}},[a._v("cd")]),a._v(" hub-example\n$ "),s("span",{attrs:{class:"token function"}},[a._v("git")]),a._v(" init\nInitialized empty Git repository "),s("span",{attrs:{class:"token keyword"}},[a._v("in")]),a._v(" /Users/ishikura/dev/study/other/hub-example/.git/\n$ "),s("span",{attrs:{class:"token function"}},[a._v("touch")]),a._v(" hoge\n$ "),s("span",{attrs:{class:"token function"}},[a._v("git")]),a._v(" add hoge\n$ "),s("span",{attrs:{class:"token function"}},[a._v("git")]),a._v(" commit -m "),s("span",{attrs:{class:"token string"}},[a._v('"Initial commit."')]),a._v("\n"),s("span",{attrs:{class:"token punctuation"}},[a._v("[")]),a._v("master "),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("root-commit"),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" ccf0780"),s("span",{attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" Initial commit.\n 1 "),s("span",{attrs:{class:"token function"}},[a._v("file")]),a._v(" changed, 0 insertions"),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("+"),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),a._v(", 0 deletions"),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("-"),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n create mode 100644 hoge\n")])])]),s("p",[a._v("hubコマンドでリポジトリ作成")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ hub create uphy/hub-example\ngithub.com username: uphy\ngithub.com password for uphy (never stored): \nUpdating origin\nhttps://github.com/uphy/hub-example\n")])])]),s("p",[a._v("originがgithubになっていることが確認できる。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{attrs:{class:"token function"}},[a._v("git")]),a._v(" remote -v\norigin\tgit@github.com:uphy/hub-example.git "),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("fetch"),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\norigin\tgit@github.com:uphy/hub-example.git "),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("push"),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("h3",{attrs:{id:"リポジトリ削除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#リポジトリ削除","aria-hidden":"true"}},[a._v("#")]),a._v(" リポジトリ削除")]),a._v(" "),s("p",[s("code",[a._v("hub delete")]),a._v("で試みたがHTTP 403となった。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ hub delete uphy/hub-example\nReally delete repository "),s("span",{attrs:{class:"token string"}},[a._v("'uphy/hub-example'")]),a._v(" "),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("yes/N"),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),a._v("? "),s("span",{attrs:{class:"token function"}},[a._v("yes")]),a._v("\nPlease edit the token used "),s("span",{attrs:{class:"token keyword"}},[a._v("for")]),a._v(" hub at https://github.com/settings/tokens\nand verify that the "),s("span",{attrs:{class:"token variable"}},[s("span",{attrs:{class:"token variable"}},[a._v("`")]),a._v("delete_repo"),s("span",{attrs:{class:"token variable"}},[a._v("`")])]),a._v(" scope is enabled.\nError deleting repository: Forbidden "),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("HTTP 403"),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nMust have admin rights to Repository.\n")])])]),s("p",[a._v("メッセージに従いURLにアクセスするとhub用のアクセストークンが作成されている。"),s("br"),a._v("\nそのトークンにdelete_repoのパーミッションを与えて、再実行する。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ hub delete uphy/hub-example\nReally delete repository "),s("span",{attrs:{class:"token string"}},[a._v("'uphy/hub-example'")]),a._v(" "),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("yes/N"),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),a._v("? "),s("span",{attrs:{class:"token function"}},[a._v("yes")]),a._v("\nDeleted repository "),s("span",{attrs:{class:"token string"}},[a._v("'uphy/hub-example'")]),s("span",{attrs:{class:"token keyword"}},[a._v(".")]),a._v("\n")])])]),s("p",[a._v("削除成功。")]),a._v(" "),s("h2",{attrs:{id:"docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker","aria-hidden":"true"}},[a._v("#")]),a._v(" Docker")]),a._v(" "),s("h2",{attrs:{id:"visual-studio-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#visual-studio-code","aria-hidden":"true"}},[a._v("#")]),a._v(" Visual Studio Code")]),a._v(" "),s("h2",{attrs:{id:"virtualbox"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#virtualbox","aria-hidden":"true"}},[a._v("#")]),a._v(" VirtualBox")])])}],!1,null,null,null);e.options.__file="devenv.md";t.default=e.exports}}]);