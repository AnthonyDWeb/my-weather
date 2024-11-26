"use client";
import AirPollution from "@/components/base/AirPollution/AirPollution";
import DailyForecast from "@/components/base/DailyForecast/DailyForecast";
import FeelsLike from "@/components/base/FeelsLike/FeelsLike";
import Humidity from "@/components/base/Humidity/Humidity";
import Mapbox from "@/components/base/Mapbox/Mapbox";
import Navbar from "@/components/base/Navbar";
import Population from "@/components/base/Population/Population";
import Pressure from "@/components/base/Pressure/Pressure";
import Sunset from "@/components/base/Sunset/Sunset";
import Temperature from "@/components/base/Temperature/Temperature";
import UvIndex from "@/components/base/UvIndex/UvIndex";
import Visibility from "@/components/base/Visibility/Visibility";
import Wind from "@/components/base/Wind/Wind";
import defaultStates from "@/utils/defaultStates";
import FiveDayForecast from "@/components/base/FiveDayForecast/FiveDayForecast";
import { useGlobalContextUpdate } from "@/context/globalContext";
import Footer from "@/components/base/footer";

export default function Home() {
	const { setActiveCityCoords } = useGlobalContextUpdate();

	const getClickedCityCords = (lat: number, lon: number) => {
		setActiveCityCoords([lat, lon]);

		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<main className="mx-[1rem] lg:mx-[2rem] xl:mx-[6rem] 2xl:mx-[16rem] m-auto">
			<Navbar />
			<div className="pb-4 flex flex-col gap-4 md:flex-row">
				<div className="flex flex-col gap-4 w-full min-w-[18rem] md:w-[35rem]">
					<Temperature />
					<FiveDayForecast />
				</div>
				<div className="flex flex-col w-full">
					<div className="instruments grid h-full gap-4 col-span-full sm-2:col-span-2 lg:grid-cols-3 xl:grid-cols-4">
						<AirPollution />
						<Sunset />
						<Wind />
						<DailyForecast />
						<UvIndex />
						<Population />
						<FeelsLike />
						<Humidity />
						<Visibility />
						<Pressure />
					</div>
					<div className="mapbox-con mt-4 flex gap-4">
						<Mapbox />
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
					</div>
				</div>
			</div>
			<Footer />
		</main>
	);
}
