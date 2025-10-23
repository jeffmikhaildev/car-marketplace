import React from "react";
import { Textarea } from "@/components/ui/textarea";

const TextAreaField = ({ item, handleInputChange }) => {
	return (
		<div>
			<Textarea
				onChange={(e) => handleInputChange(item.name, e.target.value)}
				required={item.required}
				className="focus-visible:ring-0 focus-visible:outline-none"
			/>
		</div>
	);
};

export default TextAreaField;
