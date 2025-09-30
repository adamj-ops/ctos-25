export interface Site {
  id: string
  name: string
  pi: string
  isActive: boolean
  unreadCount: number
  address: string
  city: string
  state: string
  zipCode: string
  country: string
  phone: string
  email: string
  enrollmentTarget?: number
  currentEnrollment?: number
  startDate?: string
  coordinator?: string
  coordinatorEmail?: string
  coordinatorPhone?: string
}
