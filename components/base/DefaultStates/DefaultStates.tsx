"use client";
import { useGlobalContextUpdate } from '@/context/globalContext';
import defaultStates from '@/utils/defaultStates';
import React from 'react'

function DefaultStates() {
    const { setActiveCityCoords } = useGlobalContextUpdate();

	const getClickedCityCords = (lat: number, lon: number) => {
		setActiveCityCoords([lat, lon]);

		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
  return (
    <div className="states flex flex-col gap-3 flex-1">
							<h2 className="flex items-center gap-2 font-medium">
								Top Large Cities
							</h2>
							<div className="flex flex-col gap-4">
								{defaultStates.map((state, index) => {
									return (
										<div
											key={index}
											className="border rounded-lg cursor-pointer bg-card shadow-sm dark:shadow-none"
											onClick={() => {
												getClickedCityCords(state.lat, state.lon);
											}}
										>
											<p className="px-6 py-4">{state.name}</p>
										</div>
									);
								})}
							</div>
						</div>
  )
}

export default DefaultStates