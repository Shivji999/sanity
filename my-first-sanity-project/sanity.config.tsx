import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";


const config = defineConfig({

    projectId: "zdkxgboc",
    dataset: "production",

    title: "My sanity Project",
    apiVersion: "2023-03-09",
    useCdn: false,

    basePath: "/admin",

    plugins: [deskTool()],
    schema: { types: schemas }
})

export default config;