import dynamic from 'next/dynamic';
import AirPollution from "@/components/base/AirPollution/AirPollution";
import DailyForecast from "@/components/base/DailyForecast/DailyForecast";
import FeelsLike from "@/components/base/FeelsLike/FeelsLike";
import Humidity from "@/components/base/Humidity/Humidity";
import Navbar from "@/components/base/Navbar";
import Population from "@/components/base/Population/Population";
import Pressure from "@/components/base/Pressure/Pressure";
import Sunset from "@/components/base/Sunset/Sunset";
import Temperature from "@/components/base/Temperature/Temperature";
import UvIndex from "@/components/base/UvIndex/UvIndex";
import Visibility from "@/components/base/Visibility/Visibility";
import Wind from "@/components/base/Wind/Wind";
import FiveDayForecast from "@/components/base/FiveDayForecast/FiveDayForecast";
import Footer from "@/components/base/footer";
import DefaultStates from "@/components/base/DefaultStates/DefaultStates";
const Mapbox = dynamic( () => import('@/components/base/Mapbox/Mapbox'), { ssr: false } ); 

export default function Home() {
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
						<DefaultStates />
					</div>
				</div>
			</div>
			<Footer />
		</main>
	);
}
