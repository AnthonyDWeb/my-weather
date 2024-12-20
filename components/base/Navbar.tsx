"use client";
import { useRouter } from "next/navigation";
import React from "react";
import ThemeDropdown from "./ThemeDropdown/ThemeDropdown";
import SearchDialog from "./SearchDialog/SearchDialog";
import { useGlobalContext } from "@/context/globalContext";

function Navbar() {
	const router = useRouter();
	const { state } = useGlobalContext();

	return (
		<div className="w-full py-4 flex items-center justify-between">
			<div className="left"></div>
			<div className="search-container flex shrink-0 w-full gap-2 sm:w-fit">
				<SearchDialog />
				<ThemeDropdown />
			</div>
		</div>
	);
}

export default Navbar;
