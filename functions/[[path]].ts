import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - the server build file is generated by `remix vite:build`
// eslint-disable-next-line import/no-unresolved
import * as build from "../build/server";

// Cast build to the expected type to fix type errors
// The actual build file is generated at runtime and will be compatible
export const onRequest = createPagesFunctionHandler({ 
  build: build as unknown as Parameters<typeof createPagesFunctionHandler>[0]['build']
});
