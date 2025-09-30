export interface Document {
  id: string
  name: string
  section: string
  artifactType: string
  site?: string
  version: string
  status:
    | 'Current'
    | 'Certified'
    | 'Superseded'
    | 'Missing'
    | 'Overdue'
    | 'Pending'
  updatedAt: string
  assignedTo?: string
}
