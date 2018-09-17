# 開発環境構築

SDKは基本anyenvを使う。  
それ以外はbrew。

## gitインストール

Mac標準のGitが入っているが、より新しいものを使いたいのでbrewでインストール  
brewではgitが/usr/local/Cellar/git/VERSION/にインストールされる。  
`brew link`そのディレクトリへのシンボリックリンクを/usr/local/git/に作成してくれる。

```console
$ brew install git
$ brew link --overwrite git
Linking /usr/local/Cellar/git/2.19.0_1... 203 symlinks created
```

インストールしても、PATHの順番的に/usr/bin/git(Apple Git)が優先されてしまう。

シェルのプロファイル変更して対応。

```console
$ echo 'export PATH="/usr/local/bin/git:$PATH"' >> ~/.zshrc
```

## anyenv

zsh前提。他のシェルなら適宜ファイル名変更。

```console
$ git clone https://github.com/riywo/anyenv ~/.anyenv
$ echo '# anyenv' >> ~/.zshrc
$ echo 'export PATH="$HOME/.anyenv/bin:$PATH"' >> ~/.zshrc
$ echo 'eval "$(anyenv init -)"' >> ~/.zshrc
$ exec $SHELL -l
```

## 各種env

### ndenv

ndenvインストール

```console
$ anyenv install ndenv
```

nodejsインストール

```console
$ ndenv install --list
Available versions:
  v0.1.14
  v0.1.15
  v0.1.16
  v0.1.17
...
$ ndenv install v10.10.0
$ ndenv globalg v10.10.0
```

yarnインストール

```console
$ npm install -g yarn
$ ndenv rehash
```

### goenv

goenvインストール

```console
$ anyenv install goenv
```

goインストール

```console
$ goenv install --list
...
$ goenv install 1.11.0
$ goenv global 1.11.0
```

### jenv

確かJDKをインストールしてからjenvいれた。  
インストールしたJDKをjenvが認識してくれたような。

### pyenv

pyenv

```console
$ anyenv install pyenv
```

pythonインストール

```console
$ pyenv install --list
...
$ pyenv install 3.6.4
$ pyenv globalg 3.6.4
```

## hub

GitHubのCLIツールをインストール

```console
$ brew install hub
```

### リポジトリ作成

適当にリポジトリ作成。

```console
$ mkdir hub-example
$ cd hub-example
$ git init
Initialized empty Git repository in /Users/ishikura/dev/study/other/hub-example/.git/
$ touch hoge
$ git add hoge
$ git commit -m "Initial commit."
[master (root-commit) ccf0780] Initial commit.
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 hoge
```

hubコマンドでリポジトリ作成

```
$ hub create uphy/hub-example
github.com username: uphy
github.com password for uphy (never stored): 
Updating origin
https://github.com/uphy/hub-example
```

originがgithubになっていることが確認できる。

```console
$ git remote -v
origin	git@github.com:uphy/hub-example.git (fetch)
origin	git@github.com:uphy/hub-example.git (push)
```

### リポジトリ削除

`hub delete`で試みたがHTTP 403となった。

```console
❯ hub delete uphy/hub-example
Really delete repository 'uphy/hub-example' (yes/N)? yes
Please edit the token used for hub at https://github.com/settings/tokens
and verify that the `delete_repo` scope is enabled.
Error deleting repository: Forbidden (HTTP 403)
Must have admin rights to Repository.
```

メッセージに従いURLにアクセスするとhub用のアクセストークンが作成されている。  
そのトークンにdelete_repoのパーミッションを与えて、再実行する。

```console
hub delete uphy/hub-example
Really delete repository 'uphy/hub-example' (yes/N)? yes
Deleted repository 'uphy/hub-example'.
```

削除成功。

## Docker

## Visual Studio Code

## VirtualBox