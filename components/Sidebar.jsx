"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHome,
	faUsers,
	faFolderOpen,
	faEnvelope,
	faFileInvoiceDollar
} from "@fortawesome/free-solid-svg-icons";
import { faRocketchat } from "@fortawesome/free-brands-svg-icons";


const Sidebar = () => {
	const handleMoveToSection = (index) => {
		fullpage_api.moveTo(index);
		fullpage_api.getActiveSection();
	};

	const containIsActive = (index) => {
		if (fullpage_api.getActiveSection().index === index) {
			return "bg-gray-500";
		}
		return "";
	};
	return (
		<div className="hidden md:flex fixed z-40 bg-gray-700 h-[50vh] w-14  flex-col justify-between items-center p-4 left-0 top-1/4 rounded-e-3xl">
			<ul
				id="sidebar"
				className="flex flex-col justify-evenly items-center h-full  text-gray-50">
				<li data-menuanchor="home" className="active">
					<button onClick={() => handleMoveToSection(1)}>
						<FontAwesomeIcon icon={faHome} className="text-xl" />
					</button>
				</li>
				<li data-menuanchor="testimonials">
					<button onClick={() => handleMoveToSection(2)}>
						<FontAwesomeIcon
							icon={faRocketchat}
							className="text-xl"
						/>
					</button>
				</li>
				<li data-menuanchor="clients">
					<button onClick={() => handleMoveToSection(3)}>
						<FontAwesomeIcon
							icon={faUsers}
							className="text-xl"
						/>
					</button>
				</li>
				<li data-menuanchor="projects">
					<button onClick={() => handleMoveToSection(4)}>
						<FontAwesomeIcon
							icon={faFolderOpen}
							className="text-xl"
						/>
					</button>
				</li>
				<li data-menuanchor="pricing">
					<button onClick={() => handleMoveToSection(5)}>
						<FontAwesomeIcon
							icon={faFileInvoiceDollar}
							className="text-xl"
						/>
					</button>
				</li>
				<li data-menuanchor="contact">
					<button onClick={() => handleMoveToSection(6)}>
						<FontAwesomeIcon
							icon={faEnvelope}
							className="text-xl"
						/>
					</button>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;