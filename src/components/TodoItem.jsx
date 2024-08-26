import { useState } from "react";

export default function TodoItem({ item }) {
  return (
    <li>
      <h3>{item}</h3>
    </li>
  );
}
