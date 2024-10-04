"use client";

import { Tab, Tabs } from "@nextui-org/react";
import { tabs } from "@/constants/CloudTags";

const CloudTags = () => {
	return (
		<div className="w-full justify-start max-w-[1250px] lg:mx-auto flex mt-2 lg:mt-2 overflow-x-auto scrollBarCloudTags">
			<Tabs
				//selectedKey={null}

				className="max-w-[1250px]"
				color="primary"
				variant="light"
				aria-label="Dynamic tabs"
				items={tabs}
			>
				{(item) => (
					<Tab
						key={item.id}
						title={
							<div className="flex items-center space-x-2">
								{item.icon}
								<span>{item.label}</span>
							</div>
						}
					/>
				)}
			</Tabs>
		</div>
	);
};
export default CloudTags;
