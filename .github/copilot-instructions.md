## シンプルToDoアプリ - セットアップ手順

このドキュメントは、Next.js ToDoアプリのセットアップとデプロイに関する情報を提供します。

### 要件

- Node.js 18.0 以上
- npm 9.0 以上 （またはyarn、pnpm）

### ローカル開発環境でのセットアップ

1. **依存パッケージのインストール**
   ```bash
   npm install
   ```

2. **開発サーバーの起動**
   ```bash
   npm run dev
   ```
   ブラウザで [http://localhost:3000](http://localhost:3000) を開きます。

3. **ビルド**
   ```bash
   npm run build
   ```

### プロジェクト構成

```
.
├── app/                    # Next.js App Router
│   ├── layout.tsx         # ルートレイアウト
│   ├── page.tsx           # ホームページ（メインアプリ）
│   └── globals.css        # グローバルスタイル
├── components/            # React コンポーネント
│   ├── TodoForm.tsx       # タスク入力フォーム
│   ├── TodoList.tsx       # タスク一覧表示
│   └── TodoItem.tsx       # タスク個別表示
├── package.json           # 依存パッケージ管理
├── tailwind.config.ts     # Tailwind CSS 設定
├── postcss.config.js      # PostCSS 設定
├── tsconfig.json          # TypeScript 設定
├── next.config.js         # Next.js 設定
├── .eslintrc.json         # ESLint 設定
├── vercel.json            # Vercel デプロイ設定
└── README.md              # プロジェクト説明
```

### 機能

✅ **タスク追加**: シンプルな入力欄からタスクを追加
✓ **完了チェック**: タスクをクリックして完了状態を切り替え
🗑️ **削除**: 不要なタスクを削除
🔔 **通知**: ブラウザ通知機能（オプション有効化）
💾 **永続化**: ローカルストレージでタスクを保存

### Vercelへのデプロイ

#### 方法1: GitHub 連携（推奨）

1. プロジェクトを GitHub にプッシュ
2. [Vercel Dashboard](https://vercel.com/dashboard) にアクセス
3. 「Add New Project」をクリック
4. GitHub リポジトリを選択
5. デプロイ設定は自動検出されます
6. 「Deploy」ボタンをクリック

#### 方法2: Vercel CLI でデプロイ

```bash
npm install -g vercel
vercel
```

### 技術スタック

- **Next.js 14** - React フレームワーク（App Router）
- **TypeScript** - 型安全性
- **Tailwind CSS** - ユーティリティ優先の CSS フレームワーク
- **ESLint** - コード品質チェック

### 日本語対応

アプリは完全に日本語で対応しています：
- UI はすべて日本語
- エラーメッセージも日本語
- ブラウザ言語を ja に設定

### 環境変数

現在、環境変数は不要です。必要に応じて `.env.local` ファイルを作成してください。

### トラブルシューティング

**Q: ローカルでビルドエラーが発生する**
A: Node.js のバージョンを確認してください。Node 18 以上が必要です。
   ```bash
   node --version  # v18.0.0 以上であることを確認
   ```

**Q: ブラウザ通知が表示されない**
A: 初回は「🔔 通知を有効」ボタンをクリックして、ブラウザの許可を与える必要があります。

**Q: タスクが保存されない**
A: ブラウザのローカルストレージが無効化されていないか確認してください。

### サポート

問題が発生した場合は、以下を確認してください：

1. Node.js및 npm のバージョンが最新か
2. すべての依存パッケージがインストールされているか（`npm install`）
3. ビルドエラーのログを確認
4. ブラウザのコンソールでJavaScriptエラーを確認
