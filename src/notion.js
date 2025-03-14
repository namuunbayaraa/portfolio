import { Client } from "@notionhq/client";
import { defineCollection, z } from "astro:content";
import dotenv from "dotenv";
dotenv.config();

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});
console.log("NOTION_DATABASE_ID:", import.meta.env.NOTION_DATABASE_ID);
export async function queryDatabase() {
  try {
    const response = await notion.databases.query({
      database_id: import.meta.env.NOTION_DATABASE_ID,
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
    });
    return response;
  } catch (error) {
    console.error("Error querying database:", error);
    throw error;
  }
}
