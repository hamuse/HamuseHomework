package com.hamuse.web.naver;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("naver")
public class NaverCtrl {
      
	@GetMapping("/naverCrawl/")
	public void naverCrawl() {
		System.out.println("naverCrawl");
	}
	
}
