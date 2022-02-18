import { useERC20Balances } from "react-moralis";
import { Heading, Button } from "@chakra-ui/react"

export default function ERC20Balances() {
  const { fetchERC20Balances, data, isLoading, isFetching, error } = useERC20Balances();

  return (
    <div>
      {error && <>{JSON.stringify(error)}</>}
      <Button onClick={() => fetchERC20Balances({ params: { chain: "0x1" } })}>Reload</Button>
      <Heading>These are all your tokens:</Heading>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}