# ターミナル

https://qiita.com/kinchiki/items/57e9391128d07819c321
を参考に設定した。

## テーマ変更

1. 以下のページ下部からテーマのzipファイルをダウンロード。  
   http://cocopon.github.io/iceberg.vim/
2. ダウンロードしたzipファイルを解凍
3. Terminal > Preferencesで歯車マークをクリックしてImport...で解凍したファイルを読み込み
4. ProfilesのBackgroundで背景を半透明に

## シェル

### zshインストール

```console
$ brew update
$ brew install zsh
```

/etc/shellsに以下を追加

```diff
/bin/bash
/bin/csh
/bin/ksh
/bin/sh
/bin/tcsh
+ /usr/local/bin/zsh
```

ログインシェル変更

```console
$ chsh -s /usr/local/bin/zsh
```

exitしてログインしなおし。

### Preztoインストール・設定

Zshに便利な設定いろいろ入れてくれるフレームワーク、[Prezto](https://github.com/sorin-ionescu/prezto)をインストール。

```console
$ git clone --recursive https://github.com/sorin-ionescu/prezto.git "${ZDOTDIR:-$HOME}/.zprezto"
$ setopt EXTENDED_GLOB
  for rcfile in "${ZDOTDIR:-$HOME}"/.zprezto/runcoms/^README.md(.N); do
  ln -s "$rcfile" "${ZDOTDIR:-$HOME}/.${rcfile:t}"
done
```

Preztoの設定は~/.zpreztorcに書いてある。
プロンプトを設定。

```diff
# Set the prompt theme to load.
# Setting it to 'random' loads a random theme.
# Auto set to 'off' on dumb terminals.
- zstyle ':prezto:module:prompt' theme 'sorin'
+ zstyle ':prezto:module:prompt' theme 'pure'
...
zstyle ':prezto:load' pmodule \
  'environment' \
  'terminal' \
  'editor' \
  'history' \
  'directory' \
  'spectrum' \
  'utility' \
  'completion' \
+  'syntax-highlighting' \
+  'autosuggestions' \
+  'docker' \
+  'git'	\
  'prompt'
```

### Preztoアップデート

Preztoをアップデートするにはこんな感じにすればいいらしい。

```console
$ cd $ZPREZTODIR
$ git pull
$ git submodule update --init --recursive
```

