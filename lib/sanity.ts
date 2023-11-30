import ImageUrlBuilder from "@sanity/image-url/";
import { createClient } from "next-sanity";

export const client = createClient({
 
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: "2022-03-25",
  useCdn: true,
});

const builder = ImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
