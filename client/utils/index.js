import { InjectedConnector } from "@web3-react/injected-connector";

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
});

export const fetcher =
  (library) =>
  (...args) => {
    const [method, ...params] = args;
    console.log(method, params);
    return library[method](...params);
  };
