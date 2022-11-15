import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Stack from "../../layout/stack";
import H3 from "../../typography/h3";
import Strong from "../../typography/strong";
import Text from "../../../components/typography/text";
import H4 from "../../typography/h4";
import Button from "../../button";
import TrashOutlinedSvg from "../../../svgs/trash-outlined.svg";
import AddTaskOutlinedSvg from "../../../svgs/add-task-outlined.svg";
import ForwardToInboxOutlinedSvg from "../../../svgs/forward-to-inbox-outlined.svg";
import { DetailDrawing } from "../../../interfaces/detail-drawing.interface";
import { Link } from "gatsby";

type HiringSuccessProp = {
	detailDrawing: DetailDrawing | undefined;
};

function HiringSuccess({ detailDrawing }: HiringSuccessProp) {
	return (
		<>
			<Stack className="items-stretch px-6 py-12">
				<Stack className="basis-1/2 gap-8 items-stretch">
					<div className="">
						<img
							src={detailDrawing?.hire?.designer?.user?.avatar}
							alt="suggested-design"
							className=" rounded-full border-white border-2 w-[200px] h-[200px]"
						/>
					</div>
					<Stack column className="gap-4">
						<Stack className="items-end gap-2">
							<H3 className="text-gray-700">
								{detailDrawing?.hire.designer?.user?.firstName} {detailDrawing?.hire.designer?.user?.lastName}
							</H3>
							<Strong className="text-gray-500">
								{/* {detailDrawing?.hire.designer?.user.address.city}/{detailDrawing?.hire.designer?.user.address.city} */}
							</Strong>
						</Stack>
						<Text className="text-gray-500">{detailDrawing?.hire.designer?.experience}</Text>
						<Strong className="text-blue-700">Public design</Strong>
						<Stack className="gap-2">
							{detailDrawing?.hire?.designer?.projects.map((project, index) => {
								return (
									<Link key={index} to={project.url} target="_blank">
										<img src={project.tool.logo} alt={project.tool.name} className="w-8 h-8 rounded" />
									</Link>
								);
							})}
						</Stack>
						<Strong className="text-green-500">I have finished 3D model for your first floor.</Strong>
					</Stack>
				</Stack>

				<Stack className="basis-1/2 gap-2 items-stretch">
					<div className="cursor-pointer basis-1/2 hover:scale-110 hover:shadow-md hover:z-10">
						<img src={detailDrawing?.boundaryImg} alt="suggested-design" className="w-full h-full object-cover" />
					</div>
					<div className="cursor-pointer basis-1/2 hover:scale-110 hover:shadow-md hover:z-10">
						<img src={detailDrawing?.crossSectionImg} alt="suggested-design" className="w-full h-full object-cover" />
					</div>
				</Stack>
			</Stack>

			<Stack className="pt-8 justify-between items-center mx-6">
				<H4>Choose 3D model for your first floor:</H4>
				<Button type="ghost" className="px-4 py-1 text-red-500 fill-red-500" LeftItem={TrashOutlinedSvg}>
					Reject all drafts
				</Button>
			</Stack>

			<Stack className="mx-6 mt-2 gap-4">
				<Stack column className="basis-1/3 items-stretch">
					<StaticImage
						src="../images/fake-2d.png"
						alt="suggested-design"
						className="border-white border-4 cursor-pointer hover:scale-110 hover:shadow-md hover:z-10"
					/>
					<Stack className="gap-4 mt-2">
						<Button type="outline" className="px-4 py-1" LeftItem={AddTaskOutlinedSvg}>
							I choose this
						</Button>
						<Button type="ghost" className="px-4 py-1" LeftItem={ForwardToInboxOutlinedSvg}>
							Send message
						</Button>
					</Stack>
				</Stack>

				<Stack column className="basis-1/3 items-stretch">
					<StaticImage
						src="../images/fake-2d.png"
						alt="suggested-design"
						className="border-white border-4 cursor-pointer hover:scale-110 hover:shadow-md hover:z-10"
					/>
					<Stack className="gap-4 mt-2">
						<Button type="outline" className="px-4 py-1" LeftItem={AddTaskOutlinedSvg}>
							I choose this
						</Button>
						<Button type="ghost" className="px-4 py-1" LeftItem={ForwardToInboxOutlinedSvg}>
							Send message
						</Button>
					</Stack>
				</Stack>

				<Stack column className="basis-1/3 items-stretch">
					<StaticImage
						src="../images/fake-2d.png"
						alt="suggested-design"
						className="border-white border-4 cursor-pointer hover:scale-110 hover:shadow-md hover:z-10"
					/>
					<Stack className="gap-4 mt-2">
						<Button type="outline" className="px-4 py-1" LeftItem={AddTaskOutlinedSvg}>
							I choose this
						</Button>
						<Button type="ghost" className="px-4 py-1" LeftItem={ForwardToInboxOutlinedSvg}>
							Send message
						</Button>
					</Stack>
				</Stack>
			</Stack>
		</>
	);
}

export default HiringSuccess;
