"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useId, useEffect, useState } from "react";
import * as z from "zod";
import { useCookies } from "react-cookie";

const schema = z.object({
  cookie: z.string(),
  localStorage: z.string(),
});
type Schema = z.infer<typeof schema>;

const localKey = "local-id";

const StorageForm = () => {
  const [cookies, setCookies] = useCookies(["value"]);
  const [local, setLocal] = useState("");

  const { register, handleSubmit } = useForm<Schema>({
    resolver: zodResolver(schema),
    values: {
      cookie: cookies?.value ?? "",
      localStorage: local,
    },
  });

  const onSubmit = (data: Schema) => {
    setCookies("value", data.cookie);

    setLocal(data.localStorage);
    localStorage.setItem(localKey, data.localStorage);
  };

  useEffect(() => {
    const localValue = localStorage.getItem(localKey);
    if (localValue) {
      setLocal(localValue);
    }
  }, []);

  const id = useId();
  const cookieId = `${id}-cookie`;
  const localStorageId = `${id}-cookie`;

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 my-4">
        <div className="flex flex-row gap-2 items-center">
          <label htmlFor={cookieId} className="text-sm text-gray-600">
            Cookie
          </label>

          <input id={cookieId} {...register("cookie")} />
        </div>

        <div className="flex flex-row gap-2 items-center">
          <label htmlFor={localStorageId} className="text-sm text-gray-600">
            Local Storage
          </label>

          <input id={localStorageId} {...register("localStorage")} />
        </div>

        <input type="submit" className="cursor-pointer" />
      </form>
      <div>
        <p>Current Cookie value: {cookies.value}</p>
        <p>Current Local Storage value: {local}</p>
      </div>
    </>
  );
};

export default StorageForm;
