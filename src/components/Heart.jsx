import React from "react";
import { RiHeart3Fill } from "react-icons/ri";

export default function Heart({ data }) {
  return (
    <>
      <RiHeart3Fill style={{ color: data }} />
    </>
  );
}
