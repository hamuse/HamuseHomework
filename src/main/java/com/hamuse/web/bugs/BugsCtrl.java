package com.hamuse.web.bugs;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/bugs")
public class BugsCtrl {
	@GetMapping("/bugsCrawl")
	public void bugsCrawl() {
		System.out.println("bugsCrawl");
	}
}
