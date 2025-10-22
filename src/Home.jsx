import { SignInButton } from "@clerk/clerk-react";
import { Button } from "./components/ui/button";

const Home = () => {
	return (
		<div>
			<SignInButton
				mode="modal"
				forceRedirectUrl="/">
				<Button>Sign In</Button>
			</SignInButton>
		</div>
	);
};

export default Home;
