import React, { useState } from "react";
import Header from "../Header";
import carDetails from "./../../Shared/carDetails.json";
import features from "./../../Shared/features.json";
import { Input } from "../ui/input";
import DropdownField from "./components/DropdownField";
import TextAreaField from "./components/TextareaField";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import InputField from "./components/InputField";
import { Checkbox } from "../ui/checkbox";

const AddListing = () => {
	const [formData, setFormData] = useState([]);

	const handleInputChange = (name, value) => {
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));

		console.log(formData);
	};

	const onSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div>
			<Header />

			<div className="px-4 sm:px-6 md:px-20 lg:px-30 my-10">
				<h2 className="font-bold text-2xl">Add New Listing</h2>

				{/* FORM */}
				<form
					className="p-4 md:p-6 lg:p-10 rounded-xl shadow-md border mt-10"
					onSubmit={onSubmit}>
					{/* CAR DETAILS */}
					<div>
						<h2 className="font-medium text-xl mb-6">Details</h2>

						<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
							{carDetails.carDetails.map((item, index) => (
								<div key={index}>
									<label className="text-sm">
										{item?.label} {item.required && <span className="text-red-600">*</span>}
									</label>
									{item.fieldType === "text" || item.fieldType === "number" ? (
										<InputField
											item={item}
											handleInputChange={handleInputChange}
										/>
									) : item.fieldType === "dropdown" ? (
										<DropdownField
											item={item}
											handleInputChange={handleInputChange}
										/>
									) : item.fieldType === "textarea" ? (
										<TextAreaField
											item={item}
											handleInputChange={handleInputChange}
										/>
									) : null}
								</div>
							))}
						</div>
					</div>
					<Separator className="my-6" />
					{/* FEATURES LIST */}
					<div>
						<h2 className="font-medium text-xl mb-6">Features</h2>
						<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
							{features.features.map((item, index) => (
								<div
									key={index}
									className="flex items-center gap-2">
									<Checkbox onCheckedChange={(value) => handleInputChange(item.name, value)} /> <h2>{item.label}</h2>
								</div>
							))}
						</div>
					</div>
					<Separator className="my-6" />
					{/* CAR IMAGES */}
					<div className="mt-10 flex justify-end">
						<Button>Submit</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddListing;
