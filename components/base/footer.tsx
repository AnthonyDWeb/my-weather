"use client";
import { github } from "@/utils/Icons";
import router from "next/router";
import React from "react";
import { Button } from "../ui/button";

function Footer() {
	const mylink = "https://www.anthony-delforge.fr";
	const codelink = "https://github.com/AnthonyDWeb/my-weather";
	return (
		<footer className="footer py-4 flex justify-center pb-8">
			<p className="footer-text text-s flex items-center gap-1">
				Made by
				<a href={mylink} target="_blank" className="text-name font-bold">
					Arkanya
				</a>
			</p>
			<Button className="source-code-btn ml-2 gap-1">
				<a href={codelink} target="_blank" className="flex items-center">
					{github} Source Code
				</a>
			</Button>
		</footer>
	);
}

export default Footer;
