import { NavBar } from "@/components";
import { Image } from "@nextui-org/image";
import CategoryCard from "@/components/CategoryCard";
import { BranchCard } from "@/components";
import { ContactCard } from "@/components/ContactCard";
import { getHeroSectionContent } from "@/services/getHeroSectionContent";
import { getContactSectionContent } from "@/services/getContactSectionContent";
import { getCategories } from "@/services/getCategories";

const page = async () => {
	const [content, contactContent, categories] = await Promise.all([
		getHeroSectionContent(),
		getContactSectionContent(),
		getCategories(),
	]);

	const words = content.title.split(" ");
	const firstThreeWords = words.slice(0, 3).join(" ");
	const remainingWords = words.slice(3).join(" ");

	const contactCards = [
		{
			branch: contactContent.location1,
			address: contactContent.addressLocation1,
			image: "/images/beach.png",
		},
		{
			branch: contactContent.location2,
			address: contactContent.addressLocation2,
			image: "/images/crafts.png",
		},
	];

	return (
		<>
			<NavBar />

			<div className="text-start font-bold text-2xl mx-2 sm:text-3xl md:text-5xl lg:text-7xl sm:mx-4 mb-3 py-1 sm:py-3 md:py-5 lg:py-7 xl:py-10">
				<p>{firstThreeWords}</p>
				<p>{remainingWords}</p>
			</div>

			{/* un tooltipo para decirle que haga scroll */}
			<Image
				src="/images/panoramica3.webp"
				alt="panorámica"
				className="w-dvw opacity-80 maskedImage max-h-[500px] object-cover object-top aspect-video"
			/>
			<h1 className="text-2xl font-bold text-center mt-4 mb-4 sm:mt-8 sm:text-3xl md:text-4xl">
				{content.name}
			</h1>
			<div className="md:flex md:items-center md:justify-evenly">
				<div className="">
					<Image
						className="hidden md:block md:w-40 hover:rotate-45 ease-in-out duration-500 hover:scale-110"
						src="/images/estrella-removebg-preview.png"
						alt="estrella"
					/>
				</div>
				<div className="px-4 md:max-w-md lg:max-w-2xl xl:max-w-3xl md:px-0">
					<p className="font-semibold opacity-80">
						{content.FirstPartDescription}
						<span className="hidden lg:block lg:mt-4">
							{content.SecondPartDescription}
						</span>
					</p>
				</div>
				<div className="w-full flex justify-center my-4 md:w-auto ease-out duration-200 hover:scale-110">
					<Image
						className="w-40"
						src="/images/jarron-removebg-preview.png"
						alt="jarrón"
					/>
				</div>
				<div className="px-4 md:hidden">
					<p className="font-semibold opacity-80">
						{content.SecondPartDescription}
					</p>
				</div>
				<div className="w-full flex justify-center my-4 md:w-0 md:hidden">
					<Image
						className="w-32 md:hidden"
						src="/images/estrella-removebg-preview.png"
						alt="estrella"
					/>
				</div>
			</div>
			<div
				className="w-full justify-center flex md:mt-4 lg:mt-14"
				id="categorias"
			>
				<section className="grid mb-4 grid-cols-1 gap-4 mx-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-6 max-w-[1100px]">
					{categories.map((category) => (
						<CategoryCard
							key={category.id}
							title={category.name}
							image={category.image.url}
							description={category.description}
							path={category.slug}
						/>
					))}
				</section>
			</div>
			<h2 className="text-2xl font-bold text-center mt-4 mb-4 sm:mt-8 sm:text-3xl md:text-4xl">
				{contactContent.title}
			</h2>

			<p className="font-semibold opacity-80 text-center my-5">
				{contactContent.subtext}
			</p>
			<div
				id="contacto"
				className="w-full justify-center flex md:mt-4 lg:mt-10"
			>
				<section className="grid mb-4 grid-cols-1 gap-4 mx-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-6 max-w-[1100px]">
					{contactCards.map((card) => (
						<BranchCard key={card.branch} {...card} />
					))}
					<ContactCard
						phoneNumber={contactContent.phoneNumber}
						phoneNumberWhatsApp={contactContent.phoneNumberWhatsApp}
						email={contactContent.contactEmail}
					/>
				</section>
			</div>
		</>
	);
};
export default page;
