import { pgTable, text, serial, timestamp, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const pdfJobs = pgTable("pdf_jobs", {
  id: serial("id").primaryKey(),
  jobId: text("job_id").notNull().unique(),
  operation: text("operation").notNull(), // 'merge', 'split', 'compress', 'convert'
  status: text("status").notNull().default("processing"), // 'processing', 'completed', 'failed'
  originalFilename: text("original_filename"),
  resultFilename: text("result_filename"),
  errorMessage: text("error_message"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  completedAt: timestamp("completed_at"),
});

export const insertPdfJobSchema = createInsertSchema(pdfJobs).pick({
  jobId: true,
  operation: true,
  originalFilename: true,
});

export type InsertPdfJob = z.infer<typeof insertPdfJobSchema>;
export type PdfJob = typeof pdfJobs.$inferSelect;

// Tool types
export const toolTypes = [
  'merge',
  'split', 
  'compress',
  'pdf-to-word',
  'word-to-pdf',
  'pdf-to-jpg',
  'jpg-to-pdf',
  'rotate'
] as const;

export type ToolType = typeof toolTypes[number];

export interface ToolMetadata {
  id: ToolType;
  name: string;
  description: string;
  icon: string;
  color: string;
  path: string;
}
