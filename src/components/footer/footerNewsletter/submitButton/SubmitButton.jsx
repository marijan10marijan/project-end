"use client";
import React from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button id="button" type="submit" name="button" className="ff-btn-submit">
      {pending ? "Prijavljujem..." : "Prijavi se"}
    </button>
  );
};

export default SubmitButton;
