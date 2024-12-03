import { createServerFn } from "@tanstack/start"
import { getAuth } from "@clerk/tanstack-start/server"
import { getWebRequest } from "vinxi/http"

export const $fetchClerkAuth = createServerFn({ method: "GET" }).handler(
  async () => {
    const user = await getAuth(getWebRequest())

    return {
      user,
    }
  },
)
