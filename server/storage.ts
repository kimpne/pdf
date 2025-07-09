import { pdfJobs, type PdfJob, type InsertPdfJob } from "@shared/schema";

export interface IStorage {
  createPdfJob(job: InsertPdfJob): Promise<PdfJob>;
  getPdfJob(jobId: string): Promise<PdfJob | undefined>;
  updatePdfJob(jobId: string, updates: Partial<PdfJob>): Promise<PdfJob | undefined>;
  deletePdfJob(jobId: string): Promise<boolean>;
  cleanupOldJobs(): Promise<number>;
}

export class MemStorage implements IStorage {
  private jobs: Map<string, PdfJob>;
  private currentId: number;

  constructor() {
    this.jobs = new Map();
    this.currentId = 1;
    
    // Clean up old jobs every hour
    setInterval(() => {
      this.cleanupOldJobs();
    }, 60 * 60 * 1000);
  }

  async createPdfJob(insertJob: InsertPdfJob): Promise<PdfJob> {
    const id = this.currentId++;
    const job: PdfJob = {
      id,
      jobId: insertJob.jobId,
      operation: insertJob.operation,
      originalFilename: insertJob.originalFilename || null,
      status: 'processing',
      createdAt: new Date(),
      completedAt: null,
      errorMessage: null,
      resultFilename: null
    };
    
    this.jobs.set(insertJob.jobId, job);
    return job;
  }

  async getPdfJob(jobId: string): Promise<PdfJob | undefined> {
    return this.jobs.get(jobId);
  }

  async updatePdfJob(jobId: string, updates: Partial<PdfJob>): Promise<PdfJob | undefined> {
    const job = this.jobs.get(jobId);
    if (!job) return undefined;

    const updatedJob = { ...job, ...updates };
    if (updates.status === 'completed' || updates.status === 'failed') {
      updatedJob.completedAt = new Date();
    }
    
    this.jobs.set(jobId, updatedJob);
    return updatedJob;
  }

  async deletePdfJob(jobId: string): Promise<boolean> {
    return this.jobs.delete(jobId);
  }

  async cleanupOldJobs(): Promise<number> {
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
    let deletedCount = 0;
    
    const entries = Array.from(this.jobs.entries());
    for (const [jobId, job] of entries) {
      if (job.createdAt < oneHourAgo) {
        this.jobs.delete(jobId);
        deletedCount++;
      }
    }
    
    console.log(`Cleaned up ${deletedCount} old PDF jobs`);
    return deletedCount;
  }
}

export const storage = new MemStorage();
