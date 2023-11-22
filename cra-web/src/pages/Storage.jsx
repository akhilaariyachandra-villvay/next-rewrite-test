import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useId, useEffect, useState } from "react";
import * as z from "zod";
import { useCookies } from "react-cookie";

const schema = z.object({
  cookie: z.string(),
  localStorage: z.string(),
});

const localKey = "local-id";

const StoragePage = () => {
  const [cookies, setCookies] = useCookies(["value"]);
  const [local, setLocal] = useState("");

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(schema),
    values: {
      cookie: cookies?.value ?? "",
      localStorage: local,
    },
  });

  const onSubmit = (data) => {
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
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ marginTop: "1rem", marginBottom: "1rem" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "0.5rem",
            alignItems: "center",
          }}
        >
          <label
            htmlFor={cookieId}
            style={{
              fontSize: "0.875rem",
              lineHeight: "1.25rem",
              color: "rgb(75,85,99)",
            }}
          >
            Cookie
          </label>

          <input id={cookieId} {...register("cookie")} />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "0.5rem",
            alignItems: "center",
            marginTop: "0.5rem",
            marginBottom: "0.5rem",
          }}
        >
          <label
            htmlFor={localStorageId}
            style={{
              fontSize: "0.875rem",
              lineHeight: "1.25rem",
              color: "rgb(75,85,99)",
            }}
          >
            Local Storage
          </label>

          <input id={localStorageId} {...register("localStorage")} />
        </div>

        <input type="submit" style={{ cursor: "pointer" }} />
      </form>

      <div>
        <p>Current Cookie value: {cookies.value}</p>
        <p>Current Local Storage value: {local}</p>
      </div>
    </>
  );
};

export default StoragePage;
