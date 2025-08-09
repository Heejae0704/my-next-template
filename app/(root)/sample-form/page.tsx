"use client";

import SampleForm from "@/components/forms/sampleForm";
import { sampleFormSchema } from "@/lib/validations";

export default function Page() {
  return (
    <div className="flex flex-col mx-auto max-w-md">
      <SampleForm
        schema={sampleFormSchema}
        defaultValues={{
          email: "",
          password: "",
        }}
        onSubmit={(data) => Promise.resolve({ success: true, data })}
      />
    </div>
  );
}
