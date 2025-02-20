import { Client } from "@notionhq/client";
import { defineCollection, z } from "astro:content";
import dotenv from "dotenv";
dotenv.config();

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export async function queryDatabase() {
  try {
    const response = await notion.databases.query({
      database_id: import.meta.env.NOTION_DATABASE_ID,
    });
    return response;
  } catch (error) {
    console.error("Error querying database:", error);
    throw error;
  }
}
