package io.codinggame.demo.controllers;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UrlCheckController {

    // changes
    private final String siteIsUp = "Site is Up";
    private final String siteDown = "Site is Down";
    private final String incorrectUrl = "Url is not correct";

    @GetMapping("/check")
    public String getUrlStatus(@RequestParam String url) {
        String returnMessage = "";
        try {
            URL urlObj = new URL(url);
            HttpURLConnection conn = (HttpURLConnection) urlObj.openConnection();
            conn.setRequestMethod("GET");
            conn.connect();
            returnMessage = siteIsUp;
        } catch (MalformedURLException e) {
            returnMessage = incorrectUrl;
        } catch (IOException e) {
            returnMessage = siteDown;
        }
        return returnMessage;

    }

}
