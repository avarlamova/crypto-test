import React from "react";
import Link from "next/link";

type SelectProps = {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Converter = ({ label, value, onChange }: SelectProps) => {
  return (
    <div>
      <Link href="/"> Back to homepage</Link>
      Converter
    </div>
  );
};

export default Converter;
