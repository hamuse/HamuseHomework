package com.hamuse.web.cgv;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/cgv")
public class CGVCtrl {

	@GetMapping("/cgvCrawl")
	public void cgvCrawl() {
		System.out.println("cgvCrawl");
	}
}
