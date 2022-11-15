import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { createServer } from "miragejs";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "Transaction 1",
          amount: 400,
          type: "deposit",
          category: "Food",
          createdAt: new Date(),
        },
      ];
    });
  },
});

export function App() {
  const [isOpenModalTransaction, setIsOpenModalTransaction] = useState(false);

  const handleOpenModalTransaction = () => {
    setIsOpenModalTransaction(true);
  };

  const handleCloseModalTransaction = () => {
    setIsOpenModalTransaction(false);
  };
  return (
    <>
      <Header onOpenModalTransaction={handleOpenModalTransaction} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isOpenModalTransaction}
        onRequestClose={handleCloseModalTransaction}
      />
      <GlobalStyle />
    </>
  );
}
