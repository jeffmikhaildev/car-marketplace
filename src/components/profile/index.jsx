import React from "react";
import Header from "../Header";
import { Button } from "../ui/button";

import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";

const Profile = () => {
	return (
		<div>
			<Header />

			<div className="px-4 sm:px-6 lg:px-30 my-10">
				<div className="flex justify-between items-center">
					<h2 className="font-bold text-2xl">My Listing</h2>

					<Link to={"/add-listing"}>
						<Button>
							<IoMdAdd /> Add New
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Profile;
