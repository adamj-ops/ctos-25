'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Database } from '@/lib/supabase/types'

type UserRole = Database['public']['Enums']['user_role']

interface RoleContextType {
  currentRole: UserRole
  setCurrentRole: (role: UserRole) => void
  availableRoles: UserRole[]
}

const RoleContext = createContext<RoleContextType | undefined>(undefined)

export function RoleProvider({ 
  children, 
  userRole 
}: { 
  children: ReactNode
  userRole: UserRole 
}) {
  const [currentRole, setCurrentRole] = useState<UserRole>(userRole)
  
  // In a real app, available roles would come from user's permissions
  // For now, admins and sponsors can switch between all roles
  const availableRoles: UserRole[] = userRole === 'admin' || userRole === 'sponsor'
    ? ['sponsor', 'site_monitor', 'site_coordinator', 'admin']
    : [userRole]

  // Persist role selection to localStorage
  useEffect(() => {
    const savedRole = localStorage.getItem('selectedRole') as UserRole
    if (savedRole && availableRoles.includes(savedRole)) {
      setCurrentRole(savedRole)
    }
  }, [availableRoles])

  const handleRoleChange = (role: UserRole) => {
    setCurrentRole(role)
    localStorage.setItem('selectedRole', role)
  }

  return (
    <RoleContext.Provider value={{ 
      currentRole, 
      setCurrentRole: handleRoleChange, 
      availableRoles 
    }}>
      {children}
    </RoleContext.Provider>
  )
}

export function useRole() {
  const context = useContext(RoleContext)
  if (!context) {
    throw new Error('useRole must be used within RoleProvider')
  }
  return context
}
