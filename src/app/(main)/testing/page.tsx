"use client";
import { CustomerService } from "@/services/customer/customer.service";
import { TextField } from "@mui/material";
import React, { useState } from "react";
import { baseService } from "@/services/base.service";

// const { createCustomer } = new CustomerService();

function QueryTesting() {
  const [name, setname] = useState("");

  const handleCreateCustomer = () => {
    baseService.createCustomer({ customer_name: name });
  };

  return (
    <div>
      <input
        value={name}
        onChange={(e) => {
          setname(e.target.value);
        }}
      />
      <button onClick={handleCreateCustomer}>Create Customer</button>
    </div>
  );
}

export default QueryTesting;
