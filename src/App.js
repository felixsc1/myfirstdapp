import { useMoralis } from "react-moralis"
import { Button, Container, Heading } from "@chakra-ui/react"
import ERC20Balances from "./FetchBalances"
import ApproveButton from "./Approve"

export default function App() {
  const {authenticate, isAuthenticated, isAuthenticating, user, logout} = useMoralis()



  if (!isAuthenticated) {
    return (
      <Container>
        <Heading>Welcome to this test dApp</Heading>
        <Button isLoading={isAuthenticating} onClick={() => authenticate({signingMessage: "Welcome"})}>Connect Wallet</Button>
      </Container>
    );
  }

  return (
    <Container>
      <Heading>Welcome {user.get("username")}</Heading>
      <Button onClick={() => logout()}>Logout</Button>
      <ApproveButton />
      <ERC20Balances />
    </Container>
  );

}