/* eslint-disable no-unused-vars */
import { SignIn, SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Header = () => {
	const { user, isSignedIn } = useUser();

	return (
		<header className="flex justify-between items-center shadow-sm p-4 md:px-20">
			<Link
				to={"/"}
				className="text-3xl font-bold text-primary tracking-tight">
				AutoMatch
			</Link>

			<nav className="hidden md:block">
				<ul className="flex gap-16">
					<li>
						<Link
							to="/"
							className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary block">
							Home
						</Link>
					</li>
					<li>
						<Link
							to="/search"
							className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary block">
							Search
						</Link>
					</li>
					<li>
						<Link
							to="/new-cars"
							className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary block">
							New
						</Link>
					</li>
					<li>
						<Link
							to="/pre-owned"
							className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary block">
							Pre-owned
						</Link>
					</li>
				</ul>
			</nav>

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
		</header>
	);
};

export default Header;
