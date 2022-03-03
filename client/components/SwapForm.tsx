import { useForm } from "react-hook-form";
import {
  Box,
  useColorModeValue,
  FormErrorMessage,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";

const SwapForm = () => {
  const { library } = useWeb3React();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (values: any) => {
    const { amount, address } = values;
    const signer = library.getSigner();
    ethers.utils.getAddress(address);
    const tx = await signer.sendTransaction({
      to: address,
      value: ethers.utils.parseEther(amount),
    });
    console.log("tx", tx);
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "480px",
        maxW: "100%",
        bg: useColorModeValue("white", "gray.800"),
        p: 6,
        borderRadius: "2xl",
        border: "1px solid",
        borderColor: useColorModeValue("gray.200", "gray.800"),
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
        <FormControl isInvalid={errors.amount} mb={4}>
          <Input
            id="amount"
            placeholder="Amount in ETH"
            {...register("amount", {
              required: "This is required",
            })}
            size="lg"
            width={"100%"}
            sx={{
              height: "54px",
              borderRadius: "xl",
              border: "1px solid",
            }}
          />
          <FormErrorMessage>
            {errors.amount && errors.amount.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.amount} mb={4}>
          <Input
            id="address"
            placeholder="0x..."
            {...register("address", {
              required: "This is required",
            })}
            size="lg"
            width={"100%"}
            sx={{
              height: "54px",
              borderRadius: "xl",
              bg: useColorModeValue("white", "gray.800"),
              border: "1px solid",
            }}
          />
          <FormErrorMessage>
            {errors.address && errors.address.message}
          </FormErrorMessage>
        </FormControl>
        <Button
          mt={4}
          colorScheme="newblue"
          isLoading={isSubmitting}
          type="submit"
          variant="solid"
          size="lg"
          width="100%"
        >
          Confirm
        </Button>
      </form>
    </Box>
  );
};

export default SwapForm;
