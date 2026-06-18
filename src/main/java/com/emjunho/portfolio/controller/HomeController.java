package com.emjunho.portfolio.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * トップページ表示用のコントローラー
 */
@Controller
public class HomeController {

    /**
     * トップページを表示する
     *
     * @return トップページのテンプレート名
     */
    @GetMapping("/")
    public String index() {
        return "index";
    }
}