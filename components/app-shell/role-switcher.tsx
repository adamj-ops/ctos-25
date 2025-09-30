'use client'

import { useRole } from '@/contexts/RoleContext'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { User, Building2, UserCog, Shield } from 'lucide-react'

const roleConfig = {
  sponsor: { label: 'Sponsor', icon: Building2, color: 'text-primary' },
  site_monitor: { label: 'Site Monitor', icon: UserCog, color: 'text-info' },
  site_coordinator: { label: 'Site Coordinator', icon: User, color: 'text-success' },
  admin: { label: 'Admin', icon: Shield, color: 'text-danger' },
}

export function RoleSwitcher() {
  const { currentRole, setCurrentRole, availableRoles } = useRole()

  if (availableRoles.length === 1) {
    // Only one role, show it as badge
    const config = roleConfig[currentRole]
    const Icon = config.icon
    
    return (
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted">
        <Icon className={`w-4 h-4 ${config.color}`} />
        <span className="text-sm font-medium hidden sm:inline">{config.label}</span>
      </div>
    )
  }

  return (
    <Select value={currentRole} onValueChange={setCurrentRole}>
      <SelectTrigger className="w-[180px] h-9">
        <SelectValue>
          <div className="flex items-center gap-2">
            {(() => {
              const Icon = roleConfig[currentRole].icon
              return (
                <>
                  <Icon className={`w-4 h-4 ${roleConfig[currentRole].color}`} />
                  <span className="text-sm">{roleConfig[currentRole].label}</span>
                </>
              )
            })()}
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {availableRoles.map((role) => {
          const config = roleConfig[role]
          const Icon = config.icon
          return (
            <SelectItem key={role} value={role}>
              <div className="flex items-center gap-2">
                <Icon className={`w-4 h-4 ${config.color}`} />
                <span>{config.label}</span>
              </div>
            </SelectItem>
          )
        })}
      </SelectContent>
    </Select>
  )
}
