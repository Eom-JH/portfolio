# Portfolio Site

## 概要

このプロジェクトは、自身の経歴・スキル・資格・開発経験を紹介するために作成したポートフォリオサイトです。

Webサイトとしての機能はシンプルに構成し、Spring BootアプリケーションをAWS環境へデプロイ・運用する一連の流れを学ぶことを目的としています。

## 作成目的

* 自身の職務経歴・スキル・プロジェクト経験を整理して紹介するため
* Spring Boot / Thymeleaf を使用したWebアプリケーション開発の復習
* AWS EC2上でのアプリケーション公開・運用経験を積むため
* Linux環境でのアプリケーション実行、ポート設定、セキュリティグループ設定などを理解するため

## 主な機能

* 自己紹介ページ
* スキル一覧
* 職務経歴・プロジェクト経験の紹介
* 資格情報の紹介
* このサイトについての説明
* メールによる連絡導線

## 使用技術

### Backend

* Java
* Spring Boot
* Thymeleaf

### Frontend

* HTML
* CSS

### Infrastructure

* AWS EC2
* Linux

### Tools

* IntelliJ IDEA
* Git
* GitHub

## プロジェクト構成

```text
portfolio-site/
├── src/
│   ├── main/
│   │   ├── java/
│   │   ├── resources/
│   │   │   ├── static/
│   │   │   │   ├── css/
│   │   │   │   ├── files/
│   │   │   │   └── images/
│   │   │   └── templates/
│   │   └── application.properties
│   └── test/
├── pom.xml
└── README.md
```

## デプロイ構成

本プロジェクトは、AWS EC2上での公開を想定しています。

```text
User
 ↓
HTTP / HTTPS
 ↓
AWS EC2
 ↓
Spring Boot Application
```
## Author

嚴 俊浩
Java / Spring Web Application Engineer
