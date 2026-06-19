package com.emjunho.portfolio.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * 画面遷移を制御するコントローラー
 */
@Controller
public class PageController {

    /**
     * トップページを表示する
     *
     * @return トップページのテンプレート名
     */
    @GetMapping("/")
    public String index() {
        return "index";
    }

    /**
     * 自己紹介ページを表示する
     *
     * @return 自己紹介ページのテンプレート名
     */
    @GetMapping("/about")
    public String about() {
        return "details/about";
    }

    /**
     * スキルページを表示する
     *
     * @return スキルページのテンプレート名
     */
    @GetMapping("/skills")
    public String skills() {
        return "details/skills";
    }

    /**
     * プロジェクトページを表示する
     *
     * @return プロジェクトページのテンプレート名
     */
    @GetMapping("/projects")
    public String projects() {
        return "details/projects";
    }

    /**
     * 応募書類ページを表示する
     *
     * @return 応募書類ページのテンプレート名
     */
    @GetMapping("/documents")
    public String documents() {
        return "details/documents";
    }

    /**
     * サイト説明ページを表示する
     *
     * @return 応募書類ページのテンプレート名
     */
    @GetMapping("/info")
    public String info() {
        return "details/info";
    }
}