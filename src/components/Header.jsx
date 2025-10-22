/* eslint-disable no-unused-vars */
import { SignIn, SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Header = () => {
	const { user, isSignedIn } = useUser();

	return (
		<div className="flex justify-between items-center shadow-sm p-5">
			<Link to={"/"}>
				<img
					src="/genetic.svg"
					alt="logo"
					width={50}
					height={50}
				/>
			</Link>

			<ul className="hidden md:flex gap-16">
				<li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">Home</li>
				<li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">Search</li>
				<li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">New</li>
				<li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">Pre-owned</li>
			</ul>

			{isSignedIn ? (
				<div className="flex items-center gap-5">
					<UserButton />
					<Button>Submit Listing</Button>
				</div>
			) : (
				<div>
					<Button>Submit Listing</Button>
					{/* <SignInButton
						mode="modal"
						signUpForceRedirectUrl="/">
						<Button>Sign In</Button>
					</SignInButton> */}
				</div>
			)}
		</div>
	);
};

export default Header;
