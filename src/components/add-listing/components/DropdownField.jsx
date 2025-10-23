import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const DropdownField = ({ item, handleInputChange }) => {
	return (
		<div>
			<Select
				onValueChange={(value) => handleInputChange(item.name, value)}
				required={item.required}>
				<SelectTrigger className="w-full focus-visible:ring-0 focus-visible:outline-none">
					<SelectValue placeholder={item?.label} />
				</SelectTrigger>
				<SelectContent>
					{item?.options.map((option, index) => (
						<SelectItem
							key={index}
							value={option}>
							{option}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
};

export default DropdownField;
