"use client";

import React from "react";

const error = ({ error }) => {
  return (
    <main className="error">
      <h1>An error occurred!</h1>
      <p>Failed to create mail</p>
    </main>
  );
};

export default error;
