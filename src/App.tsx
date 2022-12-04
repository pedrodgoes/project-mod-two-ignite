import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { createServer, Model } from "miragejs";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionProvider } from "./TransactionContext";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelancer",
          type: "deposit",
          category: "Dev",
          amount: 6000,
          createdAt: new Date("2022-09-10 09:00:00"),
        },
        {
          id: 2,
          title: "Aluguel",
          type: "withdraw",
          category: "Casa",
          amount: 1000,
          createdAt: new Date("2022-09-12 11:00:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
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
    <TransactionProvider>
      <Header onOpenModalTransaction={handleOpenModalTransaction} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isOpenModalTransaction}
        onRequestClose={handleCloseModalTransaction}
      />
      <GlobalStyle />
    </TransactionProvider>
  );
}
