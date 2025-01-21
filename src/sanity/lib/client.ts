import { createClient } from 'next-sanity';
import dotenv from 'dotenv';

// import { apiVersion, dataset, projectId } from '../env'
// import { config } from 'process';

dotenv.config()
export const client = createClient({
  projectId: "xms65qpd",
  dataset: 'production',
  apiVersion: '2025-01-18',
  token:  "skqjEk3S96HEPlT7PBQP1mz7GSFKpJXrQAtg3KNS9cmXYt6TGc4jYmG6YdZ5bViRLLjtLxlCNby2MYsVYFi8msJMbfcz8DWDYILcsWQzvNs2L1wNYy06HbLysvkWj0nwbmm2iprQfZZL1WQMcnvfrWjM0tsQMneAHHPXW4pOqL0CY1r8b01y",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});
