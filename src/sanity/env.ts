export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-18'

export const dataset = assertValue(
  "production",
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  "xms65qpd",
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

// export const token = assertValue(
//   "skqjEk3S96HEPlT7PBQP1mz7GSFKpJXrQAtg3KNS9cmXYt6TGc4jYmG6YdZ5bViRLLjtLxlCNby2MYsVYFi8msJMbfcz8DWDYILcsWQzvNs2L1wNYy06HbLysvkWj0nwbmm2iprQfZZL1WQMcnvfrWjM0tsQMneAHHPXW4pOqL0CY1r8b01y",
//   'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_Token'
// )

  function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
