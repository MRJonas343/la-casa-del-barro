import { Card, CardHeader, Image, CardBody, Divider } from "@nextui-org/react";
import type { FilledFormProps } from "@/interfaces";
import { MarkdownRenderArea, CommentsSection } from "@/components";
import FilledQuestion from "./FilledQuestion";

export const FilledForm = ({ data }: { data: FilledFormProps }) => {
	return (
		<section className="flex w-[95%] mx-auto mt-5 flex-col gap-4 mb-10">
			<Card className="w-full max-w-[800px] mx-auto flex flex-col">
				<CardHeader className="flex gap-3">
					<Image
						alt="nextui logo"
						height={40}
						radius="sm"
						src={data.form?.imageUrl}
						width={40}
					/>

					<p className="text-md font-semibold">{data.form?.title}</p>
				</CardHeader>
				<Divider />
				<CardBody>
					<MarkdownRenderArea>{data.form?.description}</MarkdownRenderArea>
				</CardBody>
			</Card>
			{data.questions.map((question) => (
				<FilledQuestion
					id={question.id}
					key={question.id}
					question={question.question}
					answer={question.answer}
					type={question.type}
					description={question.description}
					options={question.options}
					displayInTable={question.displayInTable}
					order={question.order}
				/>
			))}
			<CommentsSection formId={data.form?.id} comments={data.commentsResult} />
		</section>
	);
};
