import { Input } from "@/components/ui/input";

const InputField = ({ item, handleInputChange }) => {
	return (
		<div>
			<Input
				name={item?.name}
				type={item?.fieldType}
				required={item?.required}
				onChange={(e) => handleInputChange(item.name, e.target.value)}
				className="focus-visible:ring-0 focus-visible:outline-none"
			/>
		</div>
	);
};

export default InputField;
