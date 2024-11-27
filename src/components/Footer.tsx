import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from "@nextui-org/link";
import type { ContactContent } from "@/interfaces/ContactContent";

interface FooterProps {
	data: ContactContent;
}

export const Footer = async ({ data }: FooterProps) => {
	return (
		<footer className="bg-gray-900 p-10 font-[sans-serif] tracking-wide">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
				<div className="lg:flex lg:items-center">
					<a href="/">
						<img src="/images/logo.png" alt="logo" className="w-20" />
					</a>
				</div>

				<div className="lg:flex lg:items-center">
					<ul className="flex space-x-6">
						<li>
							<Link href={data.instagramLink} className="text-gray-300">
								<FaInstagram size={40} />
							</Link>
						</li>
						<li>
							<Link href={data.facebookLink} className="text-gray-300">
								<FaFacebook size={40} />
							</Link>
						</li>
					</ul>
				</div>

				<div>
					<h4 className="text-lg font-semibold mb-6 text-white">Contacto</h4>
					<ul className="space-y-4">
						<li>
							<a href="/#" className="text-gray-300 hover:text-white text-sm">
								Email
							</a>
						</li>
						<li>
							<a href="/#" className="text-gray-300 hover:text-white text-sm">
								Phone
							</a>
						</li>
						<li>
							<a href="/#" className="text-gray-300 hover:text-white text-sm">
								Address
							</a>
						</li>
					</ul>
				</div>

				<div>
					<h4 className="text-lg font-semibold mb-6 text-white">Links</h4>
					<ul className="space-y-4">
						<li>
							<a
								href="/gallery"
								className="text-gray-300 hover:text-white text-sm"
							>
								Galería
							</a>
						</li>
						<li>
							<a
								href="/Artesanías"
								className="text-gray-300 hover:text-white text-sm"
							>
								Artesanías
							</a>
						</li>
						<li>
							<a
								href="/#categorias"
								className="text-gray-300 hover:text-white text-sm"
							>
								Materiales
							</a>
						</li>
					</ul>
				</div>
			</div>

			<p className="text-gray-300 text-sm mt-10">
				© La Casa del Barro. Todos los derechos reservados.
			</p>
		</footer>
	);
};
export default Footer;
